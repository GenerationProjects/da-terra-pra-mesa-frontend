import { useEffect, useState } from 'react';
import { buscaSimples } from '../../services/service';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
import Produto from '../../models/Produto';
import './catalogo.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
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
            {produtos.map(produto => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={produto.imagem}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {produto.nome}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                R$ {produto.preco}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Aqui carrinho de compras
                        </Button>
                        <Button size="small" color="primary">

                        </Button>
                    </CardActions>
                </Card>
            ))
            }
        </>
    )
}