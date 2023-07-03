import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { busca } from '../../../services/service';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/action';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './listarProdutos.css';

export default function ListarProdutos() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [produtos, setProduto] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            toast.warn('Você precisa estar logado!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            navigate('/login')
            dispatch(addToken(token));
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
                                <img src={produto.imagem} alt="" className='img-produto' />
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

                                <Link to={`/cadastrarProduto/${produto.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="btnAtualizarProd" size='small' >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' className='btnDeletarProd'>
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