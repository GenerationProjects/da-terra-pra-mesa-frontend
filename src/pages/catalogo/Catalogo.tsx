import { useEffect, useState } from 'react';
import { buscaSimples } from '../../services/service';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, SvgIcon, Typography, makeStyles } from '@material-ui/core'
import Produto from '../../models/Produto';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import './catalogo.css'

const useStyles = makeStyles({
    root: {
        width: 245,
        boxShadow: "1px 2px 5px 1px #bbcfa4",
        
    },
});

export default function Catalogo() {

    const classes = useStyles();
    const [produtos, setProduto] = useState<Produto[]>([])

    async function getCatalogo() {
        await buscaSimples('/view-produtos', setProduto)
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
                                    alt="Contemplative Reptile"
                                    height="150"
                                    image={produto.imagem}
                                    title="Contemplative Reptile"
                                />
                                </div>
                                <CardContent className='nomeCard'>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {produto.nome}
                                    </Typography>
                                    <div className='iconPreco'>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        R$ {produto.preco}
                                    </Typography>
                                    <CardActions className='btnCarrinhoBG'>
                                        <Button size="small" className='btnCarrinho'>
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
            </Grid>
        </>
    )
}