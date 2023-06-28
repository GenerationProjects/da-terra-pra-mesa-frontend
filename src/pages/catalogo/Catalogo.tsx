import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
import './catalog.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Catalogo() {
    const classes = useStyles();


    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            nome do produto
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Descrição dos produtos
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
        </>
    )
}