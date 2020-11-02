import { Avatar, Box, Meter } from 'grommet';
import { processDate } from './dateUtils';

export const columns = [
  /* {
    property: 'id',
    header: 'All scores',
    primary: true,
    align: 'center',
    footer: ''
  }, */
  {
    property: 'avatar',
    header: '',
    primary: true,
    align: 'center',
    render: datum => <Avatar size='large' src={datum.player.image_url}/>
  },
  {
    property: 'player',
    header: 'Player',
    render: datum => datum.player.nickname,
    align: 'center',
    footer: 'Average'
  },
  {
    property: 'score',
    header: 'Score',
    align: 'center',
    aggregate: 'avg',
    footer: { aggregate: true }
  },
  {
    property: 'date',
    header: 'Date',
    render: datum => processDate(datum.created_at),
    align: 'center'
  },
  {
    property: 'percent',
    header: 'Score',
    align: 'center',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ 
              value: datum.score, 
              color: datum.score > 80 ? 'status-ok' : datum.score > 40 ? 'status-warning' : 'status-error'
          }]}
          thickness="medium"
          size="small"
          round={true}
        />
      </Box>
    ),
    aggregate: 'avg',
    footer: { aggregate: true }
  }
];