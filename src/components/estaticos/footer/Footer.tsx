import './Footer.css'
import {
  Box,
  Grid,
  ListItem,
  ListItemIcon,
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
              <Box className="boxDev">
                <ListItem className="itemLista">
                  <Typography className='textoLista'>Adriana</Typography>
                  <ListItemIcon>
                    <a
                      href="https://www.linkedin.com/in/drikadev/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/DrikaDev" target="_blank">
                      <GitHubIcon />
                    </a>
                  </ListItemIcon>
                </ListItem>
                <ListItem className="itemLista">
                  <Typography className='textoLista'>Ana Rosa</Typography>
                  <ListItemIcon className="boxListaImg">
                    <a
                      href="https://www.linkedin.com/in/anarosafernandes/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/hyarmen" target="_blank">
                      <GitHubIcon />
                    </a>
                  </ListItemIcon>
                </ListItem>
                <ListItem className="itemLista">
                  <Typography className='textoLista'>Gabriela</Typography>
                  <ListItemIcon className="boxListaImg">
                    <a
                      href="https://www.linkedin.com/in/gabriela-rodrigues-souza/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/gaabrielarod" target="_blank">
                      <GitHubIcon />
                    </a>
                  </ListItemIcon>
                </ListItem>
                <ListItem className="itemLista">
                  <Typography className='textoLista'>Felipe</Typography>
                  <ListItemIcon className="boxListaImg">
                    <a
                      href="https://www.linkedin.com/in/felipesdsilva/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/FelipeSdsilva" target="_blank">
                      <GitHubIcon />
                    </a>
                  </ListItemIcon>
                </ListItem>
                <ListItem className="itemLista">
                  <Typography className='textoLista'>Wesley</Typography>
                  <ListItemIcon className="boxListaImg">
                    <a href="https://www.linkedin.com/in/wesleygaspar" target="_blank">
                      <LinkedInIcon />
                    </a>
                    <a href="https://github.com/wmgaspar" target="_blank">
                      <GitHubIcon />
                    </a>
                  </ListItemIcon>
                </ListItem>
              </Box>
            </Box>
          </Grid>
          
        </Box>
        <Grid item xs={12}>
            <Box>
            <Typography className="copyright">Copyright © 2023 All Rights Reserved by Da Terra Pra Mesa.</Typography>
            </Box>
          </Grid>
      </Grid>
    </>
  )
}

export default Footer