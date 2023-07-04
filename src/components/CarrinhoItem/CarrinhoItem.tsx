import { Box, Card, Typography } from "@material-ui/core";
import FormatDeValor from "../../utils/FormatDeValor";

export default function CarrinhoItem({ data }) {
    const { img, nome, preco } = data;

    return (
        <>
            <Box>
                <Card>
                    <Typography>
                        <img src={img} alt={nome} />
                    </Typography>
                    <Typography>
                        {nome}
                    </Typography>
                    <Typography>
                        {FormatDeValor(preco)}
                    </Typography>
                </Card>

            </Box>
        </>
    )
}