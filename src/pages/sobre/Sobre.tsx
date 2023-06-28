import { Box, Grid, Typography } from '@material-ui/core'
import './sobre.css'

export default function Sobre() {
    return (
        <>
        
        <Grid xs={12} className="box-container" >
                <Grid item xs={6} className="grid-item">
                    <Box className="box-title">
                        <Typography variant="h4" className="title-h4">Da Terra Pra Mesa</Typography>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus distinctio, aperiam voluptatibus provident accusantium nam magni cupiditate! Aperiam earum aut iste sint quas atque ullam cumque laborum esse aliquam.
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={6} className="grid-item-2">
                    <Box className="img-venda">
                        <img src="" alt="" className="img-config" />
                    </Box>
                </Grid>
            </Grid>
        
        </>
    )
}