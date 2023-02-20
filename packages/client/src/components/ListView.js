import { Grid } from "@mui/material"
import LinkButton from "./LinkButton"

function ListView({ lable, href }) {
    return (
        <Grid container display={'flex'} flexDirection={'row-reverse'} marginTop={'20px'}>
            <Grid item xs={2}>
                <LinkButton href={href}>
                    {lable}
                </LinkButton>
            </Grid>
        </Grid>
    )
}

export default ListView
