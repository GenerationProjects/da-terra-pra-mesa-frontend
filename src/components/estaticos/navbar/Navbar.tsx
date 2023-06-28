import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FotoFazendeiro from "../../../assets/img/farmer.svg";
import FotoLogo from "../../../assets/img/logo.svg";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(null);

  const menuOpen = (event) => {
    setIsActive(event.currentTarget);
  };

  const menuClose = () => {
    setIsActive(null);
  };

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
          <IconButton aria-controls="dropdown-menu" aria-haspopup="true" onClick={menuOpen}>
            <img src={FotoFazendeiro} alt="Foto Fazendeiro" className="farm-img" />
          </IconButton>
          <Menu id="dropdown-menu" anchorEl={isActive} open={Boolean(isActive)} onClose={menuClose}>
            <Link to={'/cadastro'}>
              <MenuItem onClick={menuClose}>Criar Conta</MenuItem>
            </Link>
            <Link to={'/login'}>
              <MenuItem onClick={menuClose}>Entrar na Conta</MenuItem>
            </Link>
          </Menu>

        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
