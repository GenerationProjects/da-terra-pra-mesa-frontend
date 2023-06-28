import React from 'react'
import './Footer.css'
import { Box, Grid, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
      >
        <Grid alignContent="center" item xs={12}>
          <Box className='box1'>
            <Box display="flex" alignItems='center' justifyContent='center'>
              
              <Typography variant="h5" align="center" gutterBottom className='textos'>
                Siga-nos nas redes sociais
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.linkedin.com/">
                <LinkedInIcon className="redes" />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon className="redes" />
              </a>
              <a href="https://www.facebook.com/">
                <FacebookIcon className="redes" />
              </a>
            </Box>
            <Box className='box2'>
              <Typography variant='subtitle2' gutterBottom align='center' className='textos'>
                Feito por Ana, Drika, Felipe, Gabriela, Giovanni e Wesley -
                Alunos da Generation Brazil
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
