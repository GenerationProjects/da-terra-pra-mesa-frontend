import React from 'react'
import './Footer.css'
import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LogoFooter from '../../../assets/img/logo footer.svg'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        xs={12}
      >
        <Box className="box1">
          <Grid item xs={5}>
            <Box alignItems="center" justifyContent="start" className="boxLogo">
              <img src={LogoFooter} alt="" className="logoFooter" />
            </Box>
          </Grid>

          <Grid item xs={7} justifyContent="center">
            <Box className="box2">
              <Typography
                variant="h6"
                gutterBottom
                align="center"
                className="textoFooter"
              >
                Time de desenvolvedores:
              </Typography>
              <Box className='boxDev'>
              <ListItem className="itemLista">
                  <a href="www.linkedin.com/in/drikadev/" target="_blank">                    
                      Adriana
                      <ListItemIcon className="boxListaImg">
                        <LinkedInIcon />
                        <GitHubIcon/>
                      </ListItemIcon>                    
                  </a>
                </ListItem>
              <ListItem className="itemLista">
                  <a href="www.linkedin.com/in/drikadev/" target="_blank">                    
                      Felipe
                      <ListItemIcon className="boxListaImg">
                        <LinkedInIcon />
                        <GitHubIcon/>
                      </ListItemIcon>                    
                  </a>
                </ListItem>
                <ListItem className="itemLista">
                  <a href="www.linkedin.com/in/drikadev/" target="_blank">                    
                      Ana Rosa
                      <ListItemIcon className="boxListaImg">
                        <LinkedInIcon />
                        <GitHubIcon/>
                      </ListItemIcon>                    
                  </a>
                </ListItem>
                <ListItem className="itemLista">
                  <a href="www.linkedin.com/in/drikadev/" target="_blank">                    
                      Gabriela
                      <ListItemIcon className="boxListaImg">
                        <LinkedInIcon />
                        <GitHubIcon/>
                      </ListItemIcon>                    
                  </a>
                </ListItem>
                <ListItem className="itemLista">
                  <a href="www.linkedin.com/in/drikadev/" target="_blank">                    
                      Wesley
                      <ListItemIcon className="boxListaImg">
                        <LinkedInIcon />
                        <GitHubIcon/>
                      </ListItemIcon>                    
                  </a>
                </ListItem>
                </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  )
}

export default Footer
