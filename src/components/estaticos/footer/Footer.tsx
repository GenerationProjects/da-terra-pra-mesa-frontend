import React from 'react'
import './Footer.css'
import { Box, Grid, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
      >
          <Box className="box1">
            <Grid item xs={12}>
              <Box alignItems="center" justifyContent="start" className='logoFooter'>
              
                <Typography
                  variant="h5"
                  
                  gutterBottom
                  className="textoFooter"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusantium ab vitae eligendi, quod voluptates minima odit possimus ex pariatur necessitatibus provident suscipit consectetur iste, repellendus eius? Voluptates, aliquam necessitatibus.
                </Typography>
              </Box>
              
            </Grid>
            <Grid item xs={12} justifyContent='center'>
            <Box className="box2">
              <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://https://github.com/GenerationProjects/da-terra-pra-mesa-frontend">
                  <GitHubIcon className="redes" />
                </a>
              </Box>
              <Typography
                variant="subtitle2"
                gutterBottom
                align="center"
                className="textoFooter"
              >
                Feito por Ana, Drika, Felipe, Gabriela e Wesley -
                Alunos da Generation Brasil
              </Typography>
            </Box>
            </Grid>
          </Box>
        </Grid>
    
    </>
  )
}

export default Footer
