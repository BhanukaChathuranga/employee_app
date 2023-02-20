import { Grid, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

function InputRow({ id, label, value = '', control, errors, ...props }) {
    return (
        <Grid container>
            <Grid item xs={4}>{label}</Grid>
            <Grid item xs={8}>
                <Controller
                    name={id}
                    control={control}
                    defaultValue={value}
                    render={({ field }) => (<TextField
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
                    />)}
                />
            </Grid>
        </Grid>
    )
}

export default InputRow
