import { useEffect, useState } from 'react';
import { busca } from '../../../services/service';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';
import './listarCategoria.css';

export default function ListarCategoria() {

    const navigate = useNavigate();
    const [categorias, setCategoria] = useState<Categoria[]>([]);
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == '') {
            toast.warn('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
            navigate("/login")
        }
    }, [token])

    async function getCategoria() {
        await busca('/categorias', setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <>
            {categorias.map(categoria => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Categoria
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {categoria.tipo}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {categoria.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >

                                <Link to={`/cadastrarCategoria/${categoria.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))
            }
        </>

    )
}
