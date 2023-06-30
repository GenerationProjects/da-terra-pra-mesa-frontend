import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import { buscaId, deleteId } from "../../../services/service";
import { toast } from 'react-toastify';
import './DeletarCategoria.css'

export default function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>()
  const [token, setToken] = useLocalStorage('token')
  const {id} = useParams<{id: string}>()
  let navigate = useNavigate()
    
  useEffect(() => {
    if (token == '') {
      toast.warn('🦄 Necessário estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
      navigate ('/login')
    }
  },[token])
  
  async function findById(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token
      }
    })  
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])


  function sim() {
    navigate('/categorias')
      deleteId(`/categorias/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Categoria deletada com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
  }
  
  function nao() {
      navigate('/categorias')
  }
  
            
    return (
      <>
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                  Deseja deletar a categoria:
                </Typography>
                <Typography color="textSecondary">
                  {categoria?.tipo}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                <Box mx={2}>
                  <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                    Sim
                  </Button>
                </Box>
                <Box mx={2}>
                  <Button onClick={nao} variant="contained" size='large' color="secondary">
                    Não
                  </Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </>
    );
  }