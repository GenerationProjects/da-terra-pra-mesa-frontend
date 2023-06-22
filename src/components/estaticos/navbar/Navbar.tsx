import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FotoFazendeiro from "../../../assets/img/farmer.svg";
import FotoLogo from "../../../assets/img/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#d5e4ad" }}>
        <Toolbar variant="dense">

          <Box className="imgNav">
            <img src={FotoLogo} alt="Foto Logo" className="img-home" />
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre Nós
              </Typography>
            </Box>

            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Catálogo
              </Typography>
            </Box>

            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor" style={{ color: "white" }}>
                <Typography variant="h6" color="inherit">
                  Login
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box >
            <img src={FotoFazendeiro} alt="Foto Fazendeiro" className="farm-img" />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;