import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <>
        <AppBar position="static" style={{backgroundColor: "#d5e1ad"}}>
        <Toolbar variant="dense" >
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Da Terra pra Mesa
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Produtos
              </Typography>
            </Box>

            <Link to='/login' className='text-decorator-none'>
              <Box mx={1} className="cursor" style={{ color: 'white' }}>
                <Typography variant="h6" color="inherit">
                  Login
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;