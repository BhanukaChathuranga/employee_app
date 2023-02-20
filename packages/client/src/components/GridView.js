import { Card } from "@components"
import { Grid } from "@mui/material"

function Gridview({ data, updateEmp,openDialog }) {
    if (data.length <= 0) { return <>No Found data...!</> }
    return (
        <>
            {data.map((ele, i) => <Grid key={i} item xs={2.4}>
                <Card element={ele} updateEmp={updateEmp} openDialog={openDialog}/>
            </Grid>
            )}
        </>
    )
}

export default Gridview
