import { buscaIdSimples } from '../../services/service';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, TextField, Typography } from '@material-ui/core';
import Produto from '../../models/Produto';
import FormatDeValor from '../../utils/FormatDeValor';
import './Carrinho.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';

export default function Carrinho() {

    const navigate = useNavigate()

    const carrinho = useSelector<TokenState, TokenState['produtos']>(
        (state) => state.produtos
    )

    const { id } = useParams<{ id: string }>();

    const [quantidadeFinal, setQuantidadeFinal] = useState(0);

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        preco: 0,
        quantidade: 0,
        imagem: "",
        descricao: '',
    })


    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])


    async function findByIdProduto(id: string) {
        await buscaIdSimples(`view-produtos/${id}`, setProduto)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    function confirmSales() {
        alert("Compra Confirmada! Verifique o seu email!")
        navigate("/catalogo")
    }



    return (
        <>
            <Box m={2} display="flex" justifyContent="center">
                <Card variant="outlined" className='cardContainer'>
                    {carrinho.map(produto => (
                        <>

                            <div className='cardProduct'>
                                <img src={produto.imagem} alt="Img" />

                                <div className='cardProductInfo'>
                                    <Typography color="textSecondary" gutterBottom>
                                        Produtos
                                    </Typography>

                                    <Typography variant="h5" component="h2">
                                        {produto.nome}
                                    </Typography>

                                    <Typography variant="body2" component="p">
                                        R$ {FormatDeValor(produto.preco)}
                                    </Typography>

                                    <Typography variant="body2" component="p">
                                        Quantidade Máx: {produto.quantidade}
                                    </Typography>

                                    <TextField
                                        value={quantidadeFinal}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}

                                        InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}

                                        id="quantidade" label="quantidade" type="number" variant="outlined"
                                        name="quantidade" margin="normal" fullWidth
                                    />
                                </div>
                            </div>
                        </>
                    ))}
                    <div>
                        <div>
                            <Typography variant="body2" component="p">
                                Total: R$ {FormatDeValor(valorTotal())}
                            </Typography>
                        </div >
                    </div >

                </Card >

                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="cardProductButton">
                        <Box mx={1}>
                            <Button onClick={confirmSales} variant="contained" size='small' color="primary">
                                Confimar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/catalogo" className="cardProductButton">
                        <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                                Cancelar
                            </Button>
                        </Box>
                    </Link>

                </Box>
            </Box >
        </>
    )
}