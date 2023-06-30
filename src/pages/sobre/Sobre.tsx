import { Box, Grid, Typography } from "@material-ui/core";
import Agricultores from "../../assets/img/Agricultores.jpg";

import "./sobre.css";

export default function Sobre() {
  return (
    <>
      <Grid xs={12} className="box-container">

        <Grid item xs={6} className="grid-item">   
          <Box className="box-about">
            <Typography variant="h4" className="title-h4">
              Olá, nós somos 'Da Terra Pra Mesa'!
            </Typography>
            
            <Typography>
              Somos uma plataforma e-commerce inspirada nos Objetivos de
              Desenvolvimento Sustentável nº 2 das Nações Unidas - Fome Zero e
              Agricultura Sustentável - que tem por meta até 2030: "erradicar a
              fome e garantir o acesso de todas as pessoas, em particular os
              pobres e pessoas em situações vulneráveis, incluindo crianças e
              idosos, a alimentos seguros, culturalmente adequados, saudáveis e
              suficientes durante todo o ano."
            </Typography>

            <Typography>
              Nosso objetivo com esse projeto é atingir um público de pequenos
              produtores sustentáveis, ajudá-los a gerar renda ao mesmo tempo
              que conseguimos repassar parte dessa renda para ONG´s que cuidam
              de pessoas vulneráveis.
            </Typography>

            <Typography>
              Nosso diferencial está justamente na escolha voluntária que ambos
              - vendedor/comprador - têm de optar ou não, ao final da
              compra/venda, se desejam contribuir com uma porcentagem de 5%, 10%
              ou 20% para essas ONG´s que cuidam dessas pessoas vulneráveis.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} className="grid-item-2">
          <Box className="img-venda">
            <img
              src={Agricultores}
              alt="Foto com família de agricultores"
              className="img-config"
            />
          </Box>
        </Grid>

      </Grid>
    </>
  );
}
