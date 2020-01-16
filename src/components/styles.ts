import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  subject: {
    '&:hover': {
      backgroundColor: '#0099FF',
      color: '#FFFFFF'
    }
  }
});

export default useStyles;
