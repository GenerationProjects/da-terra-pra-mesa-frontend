import { Box, Button, Grid, Typography } from "@material-ui/core";
import FruitShop from '../../assets/img/home-img.svg'
import './home.css'

export default function Home() {
    return (
        <><Box className="container">
            <Grid container xs={12} direction="row">
                <Box className="filho">
                    <Grid item xs={12} sm={6} >
                        <Typography className="texts">
                            <h1>Da Terra Pra Mesa</h1>
                            Conectamos você com agricultores sustentáveis e produtos de qualidade.
                        </Typography>
                        <Button  ></Button>
                    </Grid >
                </Box>
                <Grid item xs={12} sm={6} justifyContent={`center`}>
                    <Box className="box-img">
                        <img src={FruitShop} alt="Mulher no lado esquedo de uma barraca que contem uma balança e legumes colhidos" className="img-container" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}