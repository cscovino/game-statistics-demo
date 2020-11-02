import React, { useEffect } from 'react';
import { Box, Button, Card, CardBody, DataTable, Text } from 'grommet';
import { Dislike, DocumentCsv } from 'grommet-icons';
import { useQuery } from '@apollo/client';
import { GET_ALL_SCORES } from '../../graphql/queries/scores';
import { processDate } from '../../utils/dateUtils';
import Spinner from '../../components/Spinner';
import { columns } from '../../utils/tableUtils';
import { downloadCSV } from '../../utils/cvsUtils';

function History() {
  const {data, loading, error, refetch} = useQuery(GET_ALL_SCORES);

  useEffect(() => {
    const timer = setInterval(() => {
      refetch();
    }, 10000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <Box fill='horizontal' justify='center' align='center'>
      <Text color='dark-1'>History</Text>
      {
        data && data.stats.length > 0 ?
        <Text color='dark-4'>Last game was {processDate(data.stats[0].created_at)}</Text>
        :null
      }
      {
        loading ? 
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
              onClick={() => downloadCSV(data.stats, 'reportHistory')}
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

export default History;