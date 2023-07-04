import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import Arrow from '../../assets/img/Seta.svg';
import FruitShop from '../../assets/img/home-img.svg';
import ong1 from '../../assets/img/ongs/Linceria.jpg'
import ong2 from '../../assets/img/ongs/Temos Fome.jpg'
import ong3 from '../../assets/img/ongs/Borcelle.jpg'
import ong4 from '../../assets/img/ongs/Faustino Social.jpg'
import sobreImg from '../../assets/img/coffee farm-amico.svg'
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

            <Box className='box-container3'>
                <Grid container xs={12} className="grid-container3">
                    <Grid item xs={6} className="grid-item-2">
                        <img src={sobreImg} alt="" className="img-config2" />
                    </Grid>
                    <Grid item xs={6} className="grid-item">
                        <Box className="box-title">
                            <Typography variant="h4" className="title-ODS">Projeto baseado na ODS 02 da ONU</Typography>
                            <p className='subHomeODS'>
                                Nossa ideia é incentivar os pequenos agricultores sustentáveis revendendo seus produtos e integrando doações no ato de venda para repassar as doações para ONGs que focam em ajudar pessoas em situações de pobreza e extrema pobreza.
                            </p>
                        </Box>
                        <Link to={`/sobre`} className="text-decorator-none">
                            <Box className="btn-sobre">
                                CLIQUE AQUI PARA SABER MAIS
                                <Box className="btn-arrow">
                                    <img src={Arrow} alt="" className="arrow-img" />
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </Box>

            <Box className='box-container2'>
                <Grid container xs={12} className="grid-container2">
                    <Grid alignItems="center" item xs={12}>
                        <Box>
                            <Typography variant="h2" className='titulo-sec-ong'>
                                ONGs Parceiras
                            </Typography>
                            <Box className="box-ongs">
                                <img className="ong-img" src={ong1} alt="logo de uma ONG fictícia" />
                                <img className="ong-img" src={ong2} alt="logo de uma ONG fictícia" />
                                <img className="ong-img" src={ong3} alt="logo de uma ONG fictícia" />
                                <img className="ong-img" src={ong4} alt="logo de uma ONG fictícia" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}