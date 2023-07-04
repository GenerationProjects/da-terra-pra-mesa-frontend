import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { buscaIdSimples, buscaSimples } from '../../services/service';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core'
import Produto from '../../models/Produto';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './catalogo.css'
import FormatDeValor from '../../utils/FormatDeValor';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/tokens/action';


const useStyles = makeStyles({
    root: {
        width: 245,
        boxShadow: "1px 2px 5px 1px #bbcfa4",

    },
});

export default function Catalogo() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const classes = useStyles();

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        preco: 0,
        descricao: '',
        quantidade: 0,
        imagem: ''
    })

    async function getCatalogo() {
        await buscaSimples('/view-produtos', setProdutos)
    }


    async function getProdutoUnico(id: string) {
        try {
            await buscaIdSimples(`/view-produtos/${id}`, setProduto);
            dispatch(addToCart(produto))
            console.log(produto);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCatalogo()
    }, [produtos.length])

    return (
        <>
            <Grid container spacing={2} className='catPrincipalGrid'>

                {produtos.map(produto => (
                    <Grid item key={produto.id} xs={12} sm={6} md={3} className='cardGrid'>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <div className='tamanhoDoCard'>
                                    <CardMedia
                                        className='imgCardCat'
                                        component="img"
                                        alt={produto.nome}
                                        height="150"
                                        image={produto.imagem}
                                    />
                                </div>
                                <CardContent className='nomeCard'>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {produto.nome}
                                    </Typography>
                                    <div className='iconPreco'>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            R$ {FormatDeValor(produto.preco)}
                                        </Typography>
                                        <CardActions className='btnCarrinhoBG'>
                                            <Button size="small" className='btnCarrinho' onClick={() => getProdutoUnico(produto.id.toString())} >
                                                <AddShoppingCartIcon />
                                            </Button>
                                        </CardActions>
                                    </div>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                ))
                }
            </Grid >
        </>
    )
}