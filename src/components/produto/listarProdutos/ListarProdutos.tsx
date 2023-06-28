import { useEffect, useState } from 'react';
import { busca } from '../../../services/service';
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import './listarProdutos.css'

export default function ListarProdutos() {

    const navigate = useNavigate();
    const [produtos, setProduto] = useState<Produto[]>([]);
    const [token] = useLocalStorage('token');


    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado!!")
            navigate('/login')
        }
    }, [token])

    async function getProduto() {
        await busca('/produtos', setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProduto()
    }, [produtos.length])


    return (
        <>
            {produtos.map(produto => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Produto
                            </Typography>
                            <Typography variant="h5" component="h2" >
                                <img src={produto.imagem} alt="" className='.img-produto'/>
                            </Typography>
                            <Typography variant="body2" component="p">
                                {produto.nome}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Sobre o produto: {produto.descricao}
                            </Typography>
                            <Typography>
                                R$ {produto.preco}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/cadastroProduto/${produto.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
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

            ))}
        </>
    )
}