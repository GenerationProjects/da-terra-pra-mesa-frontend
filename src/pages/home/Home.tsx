import { Box, Grid, Typography } from "@material-ui/core";
import Arrow from '../../assets/img/Seta.svg'
import FruitShop from '../../assets/img/home-img.svg'
import './home.css'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Grid xs={12} className="box-container" >
                <Grid item xs={6} className="grid-item">
                    <Box className="box-title">
                        <Typography variant="h4" className="title-h4">Da Terra Pra Mesa</Typography>
                        <p>
                            Conectando você a agricultores sustentáveis e produtos de qualidade, para uma vida melhor e transformando pequenos agricultores em amigos da vizinhança!
                        </p>
                    </Box>
                    <Link to={`/catalogo`} className="text-decorator-none">
                        <Box className="btn-catalog">
                            INICIE AGORA A SUA BUSCA
                            <Box className="btn-arrow">
                                <img src={Arrow} alt="" className="arrow-img" />
                            </Box>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={6} className="grid-item-2">
                    <Box className="img-venda">
                        <img src={FruitShop} alt="" className="img-config" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}