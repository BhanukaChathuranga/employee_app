import { useMemo } from "react";
import { Grid, Paper, Button } from "@mui/material";

import { GENDER } from "@utils";
import InputRow from "./InputRow";
import InputSelectRow from "./InputSelectRow";

function Form({ saveLable, control, handleSubmit, onSubmit, isLoading, errors }) {

    const gender = useMemo(() => {
        let genderObj = Object.keys(GENDER).map(key => {
            let value = GENDER[key]
            return { key, value }
        });
        return genderObj;
    }, [GENDER]);

    return (
        <Grid container spacing={3} display={'flex'} justifyContent={'center'}>
            <Paper style={{ borderRadius: '20px', width: '50%' }}>
                <Grid padding={'20px'} margin={'30px'}>
                    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                        <InputRow label={'First Name'} id={'first_name'} value={''} control={control} errors={errors.first_name} />
                        <InputRow label={'Last Name'} id={'last_name'} value={''} control={control} errors={errors.last_name} />
                        <InputRow label={'Email Name'} id={'email'} value={''} control={control} errors={errors.email} />
                        <InputRow label={'Phone'} id={'number'} value={''}  control={control} errors={errors.number} />
                        <InputSelectRow label={'Gender'} id={'gender'} value={''} control={control} errors={errors.gender} data={gender} />
                        <Grid display={'flex'} flexDirection={'row-reverse'}>
                            <Button type="submit" variant="outlined" disabled={isLoading}>{saveLable}</Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Form
