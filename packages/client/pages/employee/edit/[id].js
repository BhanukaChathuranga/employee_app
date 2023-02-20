import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { Container, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Form, ListView } from "@components";
import { empListUrl, schema } from "@utils";
import { selectEmployee, useUpdateEmployeeMutation } from 'src/feature/employees';

function Edit() {
    const router = useRouter();
    const { id } = router.query;

    const employeeDetails = useSelector(selectEmployee);
    const [updateEmployee, { isLoading }] = useUpdateEmployeeMutation();


    const defaultValues = useMemo(() => {
        if (!!!employeeDetails) return { first_name: '', last_name: '', email: '', number: '', gender: 'M' }

        const { first_name, last_name, email, number, gender } = employeeDetails;
        return { first_name, last_name, email, number, gender }

    }, [employeeDetails]);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    });

    const onSubmit = useCallback(async data => {
        await updateEmployee({ id, data });
        return router.push(empListUrl);
    }, [updateEmployee, id, router]);

    return (
        <Container fixed>
            <Stack spacing={3}>

                <ListView lable={'List View'} href={empListUrl} />

                <Form
                    saveLable={'Save'}
                    control={control}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    isLoading={isLoading}
                    errors={errors}
                />
            </Stack>
        </Container>
    )
}

export default Edit
