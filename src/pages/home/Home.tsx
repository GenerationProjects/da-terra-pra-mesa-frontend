import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import Arrow from '../../assets/img/Seta.svg';
import FruitShop from '../../assets/img/home-img.svg';
import './Home.css'

export default function Home() {

    return (
        <>
            <Box className="box-container">
                <Grid container xs={12} className="grid-container" >
                    <Grid item xs={6} className="grid-item">
                        <Box className="box-title">
                            <Typography variant="h3" className="title-h4">Da Terra Pra Mesa</Typography>
                            <p className='subHome'>
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
                        <img src={FruitShop} alt="" className="img-config" />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}