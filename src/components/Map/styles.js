import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px', backgroundColor: '#84ffff',
  },
  mapContainer: {
    height: '85vh', width: '100%', borderRadius: 20,
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  info: {
    fontFamily: 'cursive',
  },
  pointer: {
    cursor: 'pointer',
  },
}));
