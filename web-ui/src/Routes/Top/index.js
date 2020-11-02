import React, { useEffect } from 'react';
import { Box, Button, Card, CardBody, DataTable, Text } from 'grommet';
import { Dislike, DocumentCsv } from 'grommet-icons';
import { useQuery } from '@apollo/client';
import { GET_DATE_LAST_MATCH, GET_TOP_SCORES } from '../../graphql/queries/scores';
import { processDate } from '../../utils/dateUtils';
import Spinner from '../../components/Spinner';
import { columns } from '../../utils/tableUtils';
import { downloadCSV } from '../../utils/cvsUtils';

function Top() {
    const {data, loading, error, refetch} = useQuery(GET_TOP_SCORES);
    const {
        data: dataDate, 
        loading: loadingDate, 
        error: errorDate, 
        refetch: refetchDate
    } = useQuery(GET_DATE_LAST_MATCH);

    useEffect(() => {
        const timer = setInterval(() => {
            refetch();
            refetchDate();
        }, 10000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <Box fill='horizontal' justify='center' align='center'>
            <Text color='dark-1'>Top Ten</Text>
            {
                dataDate && dataDate.stats.length > 0 ?
                <Text color='dark-4'>Last game was {processDate(dataDate.stats[0].created_at)}</Text>
                :null
            }
            {
                loading || loadingDate ? 
                <Spinner />
                :
                data && data.stats.length > 0 ?
                <Box justify='center' align='center'>
                    <DataTable 
                        columns={columns}
                        data={data.stats}
                        size='medium'
                        margin={{horizontal: 'xlarge', vertical: 'small'}}
                        background={{header: {color: 'neutral-3'}, footer: {color: 'light-3'}}}
                    />
                    <Button
                        primary
                        size='medium'
                        icon={<DocumentCsv />}
                        label='Download report'
                        onClick={() => downloadCSV(data.stats, 'reportTop')}
                    />
                </Box>
                :
                <Card pad='medium' margin='small' background='light-2'>
                    <CardBody gap='small' direction='row'>
                        <Text>There is no data yet!</Text>
                        <Dislike />
                    </CardBody>
                </Card>
            }
        </Box>
    );
}

export default Top;