import { Typography } from '@mui/material';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
   root: {
     margin: theme.spacing(3, 0, 2),
     fontFamily: "Roboto, sans-serif",
     textAlign: "center",
     fontSize: "40px",
     color: "deeppink",
     textShadow: "1px 1px darkmagenta"
   }
}))

export const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h1">
      The ultimate form challenge
    </Typography>
  )
}