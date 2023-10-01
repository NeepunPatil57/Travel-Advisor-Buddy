import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', fontFamily: 'cursive',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  info: {
    fontFamily: 'cursive',
  },
  card: {
    transition: 'transform 0.5s',
    backgroundColor: '#84ffff',
    fontFamily: 'cursive',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
}));
