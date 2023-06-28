import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FotoFazendeiro from "../../../assets/img/farmer.svg";
import FotoLogo from "../../../assets/img/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="header">
        <Box className="imgNav">
          <img src={FotoLogo} alt="Foto Logo" className="img-home" />
        </Box>
        <Toolbar className="p-30">
          <Box display="flex">
            <Link to={`/`}>
              <Box mx={1} className="p-1">
                <Typography className="cursor">HOME</Typography>
              </Box>
            </Link>

            <Link to={`/sobre`}>
              <Box mx={1} className="p-1">
                <Typography className="cursor">SOBRE NÓS</Typography>
              </Box>
            </Link>

            <Link to={`/catalogo`}>
              <Box mx={1} className="p-1">
                <Typography className="cursor">
                  CATÁLOGO
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
        <Box display="flex" justifyContent="end">
          <img
            src={FotoFazendeiro}
            alt="Foto Fazendeiro"
            className="farm-img"
          />
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
