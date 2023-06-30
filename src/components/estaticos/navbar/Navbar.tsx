import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import FotoFazendeiro from "../../../assets/img/farmer.svg";
import FotoLogo from "../../../assets/img/logo.svg";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";
import { toast } from 'react-toastify';

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate();

  const goLogout = () => {
    setToken('');
    toast.success('Usuário deslogado!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    navigate('/login');
  }

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
            <Link to={`/`} className="text-decorator-none">
              <Box mx={1} className="p-1">
                <Typography className="cursor">HOME</Typography>
              </Box>
            </Link>


            <Link to={`/catalogo`} className="text-decorator-none">
              <Box mx={1} className="p-1">
                <Typography className="cursor">
                  CATÁLOGO
                </Typography>
              </Box>
            </Link>
            {token !== "" ? (
              <>
                <Link to={`/cadastrarProduto`} className="text-decorator-none">
                  <Box mx={1} className="p-1">
                    <Typography className="cursor">
                      VENDA CONOSCO
                    </Typography>
                  </Box>
                </Link>

                <Link to={`/cadastrarCategoria`} className="text-decorator-none">
                  <Box mx={1} className="p-1">
                    <Typography className="cursor">
                      CRIE CATEGORIA
                    </Typography>
                  </Box>
                </Link>
              </>) : (<>
                <Link to={`/sobre`} className="text-decorator-none">
                  <Box mx={1} className="p-1">
                    <Typography className="cursor">SOBRE NÓS</Typography>
                  </Box>
                </Link>
              </>)

            }
          </Box>
        </Toolbar>
        <Box display="flex" justifyContent="end">
          <IconButton aria-controls="dropdown-menu" aria-haspopup="true" onClick={menuOpen}>
            <img src={FotoFazendeiro} alt="Foto Fazendeiro" className="farm-img" />
          </IconButton>
          <Menu id="dropdown-menu" anchorEl={isActive} open={Boolean(isActive)} onClose={menuClose}>

            {
              token !== '' ? (<>  <Box onClick={goLogout}>
                <MenuItem onClick={menuClose}>Sair da Conta</MenuItem>
              </Box></>) :

                (<>
                  <Link to={'/cadastro'} className="text-decorator-none">
                    <MenuItem onClick={menuClose}>Criar Conta</MenuItem>
                  </Link>

                  <Link to={'/login'} className="text-decorator-none">
                    <MenuItem onClick={menuClose}>Entrar na Conta</MenuItem>
                  </Link></>
                )
            }

          </Menu>

        </Box>
      </AppBar >
    </>
  );
}

export default Navbar;
