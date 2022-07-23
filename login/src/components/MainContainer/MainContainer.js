import { Container } from '@mui/material';
import { makeStyles } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}))


export const MainContainer = ({ children, ...props }) => {
   const styles = useStyles();
  return (
    <Container
     className={styles}
      component="main"
       maxWidth="xs" 
       {...props}>
      {
        children
      }
    </Container>
  )
}