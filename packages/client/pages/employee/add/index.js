import { useCallback } from "react";
import { useRouter } from "next/router";
import { Container, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Form, ListView } from "@components";
import { useAddEmployeeMutation } from "src/feature/employees";
import { empListUrl, schema } from "@utils";

function AddEmployee() {

  const router = useRouter()

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '', last_name: '', email: '', number: '', gender: 'M'
    },
    resolver: yupResolver(schema)
  });

  const [addEmployee, { isLoading }] = useAddEmployeeMutation();

  const onSubmit = useCallback(async data => {
    addEmployee(data);
    router.push(empListUrl)
    return;
  }, [addEmployee, router]);

  return (
    <Container fixed>
      <Stack spacing={3}>

        <ListView lable={'List View'} href={empListUrl} />

        <Form
          saveLable={'add'}
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

export default AddEmployee

