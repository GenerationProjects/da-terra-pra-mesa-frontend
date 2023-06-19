import { Box, Button, Grid, Typography } from "@material-ui/core";
import FruitShop from '../../assets/fruit_shop-pana_1.svg'
import './style.css'

export default function Home() {
    return (
        <>
            <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" className="container">
                <Grid item sm={6} >
                    <Box paddingX={20}>
                        <Typography className="texts">
                            <h1>Da Terra Pra Mesa</h1>
                            Conectamos você com agricultores sustentáveis e produtos de qualidade.
                        </Typography>

                        <Button ></Button>
                    </Box>
                </Grid >

                <Grid item sm={6} >
                    <Box>
                        <img src={FruitShop} alt="Mulher no lado esquedo de uma barraca que contem uma balança e legumes colhidos" className="img-container" />
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}