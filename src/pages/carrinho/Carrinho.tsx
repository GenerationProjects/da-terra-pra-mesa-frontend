import { useEffect, useState } from 'react';
import { ItensPedido, Pedido } from '../../models/Pedido';
import * as carrinhoService from '../../services/carrinho-service';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import './Carrinho.css';

const item1: ItensPedido = new ItensPedido(
    1,
    1,
    "Mamao da terra",
    3.0,
    "https://cdn.awsli.com.br/1664/1664922/produto/157864050/c762f9d8cf.jpg"
)

const item2: ItensPedido = new ItensPedido(
    3,
    2,
    "Abacaxi",
    5.0,
    "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRtI5JE5ZTZopReolaQYf3SHj1PFi9c3y_T3RPxEonQBYtciBdI2R7t-WfIhM43QH5O"
)



export default function Carrinho() {

    const [carrinho, setCarrinho] = useState<Pedido>(carrinhoService.getCarrinho());

    useEffect(() => {
        carrinho.itens.push(item1);
        carrinho.itens.push(item2);
    })

    return (
        <>
            <Box m={2} id="cart-container-section" className='dsc-container'>
                <Card variant="outlined" className='dsc-card dsc-mb20'>
                    {
                        carrinho.itens.map(item => (
                            <>
                                <CardContent key={item.produtoId} className='dsc-cart-item-container'>
                                    <Typography className='dsc-cart-item-left' >
                                        <img src={item.imgUrl} alt={item.nome} />
                                    </Typography>
                                    <Typography variant="h6" component="h6" className='dsc-cart-item-description'>
                                        {item.nome}
                                    </Typography>
                                    <Typography variant="h6" component="p">
                                        R$ {item.preco.toFixed(2).replace(".", ",")}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>

                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="primary" className="" >
                                                -
                                            </Button>
                                        </Box>
                                        <Box mx={1}>

                                        </Box>

                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                +
                                            </Button>
                                        </Box>

                                    </Box>
                                </CardActions>

                            </>))}

                </Card>

                <Typography className='dsc-cart-total-container' variant='h3'>
                    Valor total
                </Typography>


                <Button className='' variant="contained" size='medium' color='primary'>
                    FINALIZAR COMPRA
                </Button>
            </Box>
        </>
    )
}