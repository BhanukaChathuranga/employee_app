import { FormControl, FormHelperText, Grid, MenuItem, Select } from "@mui/material"
import { Controller } from "react-hook-form"

function InputSelectRow({ id, label, value, control, errors, data = [], ...props }) {
    return (
        <Grid container>
            <Grid item xs={4}>{label}</Grid>
            <Grid item xs={8}>
                <Controller
                    name={id}
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (<FormControl
                        variant="filled"
                        sx={{ minWidth: 120 }}
                        margin='dense'
                        size='small'
                        error={!!errors}
                        hiddenLabel
                        fullWidth
                    >
                        <Select
                            hiddenLabel
                            id="demo-simple-select-filled"
                            value={value}
                            onChange={e => console.log(e)}
                            {...field}
                            {...props}
                        >
                            {data.map(({ key, value }) => <MenuItem key={key} value={key}>{value}</MenuItem>)}
                        </Select>
                        <FormHelperText>{errors?.message}</FormHelperText>
                    </FormControl>)}
                />
            </Grid>
        </Grid>
    )
}

export default InputSelectRow

{/* <TextField
                        error={!!errors}
                        hiddenLabel
                        id={'id'}
                        variant="filled"
                        size='small'
                        margin='dense'
                        helperText={errors?.message}
                        fullWidth
                        {...props}
                        {...field}
                    /> */}
