import { createContext, useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';

import { wrapper } from "src/store/store";
import { Button, ConfirmModal, Gridview, LinkButton, TableView } from "@components";
import { getDetails, getEmployees, selectEmployee, useDeleteEmployeeMutation } from "src/feature/employees";
import { useToggle } from "src/hooks/toggle";

export const funcContext = createContext();

export default function Employees({ initialEmployees }) {

    const router = useRouter();
    const { value: isTableView, toggle: viewToggle } = useToggle();
    const { value: isDialogOpen, toggleOn: openDialog, toggleOff: closeDialog } = useToggle();

    const dispatch = useDispatch();
    const employee = useSelector(selectEmployee);
    const [deleteEmployee] = useDeleteEmployeeMutation();

    const updateEmp = useCallback((emp) => {
        return dispatch(getDetails(emp));
    }, [dispatch, getDetails]);

    const deleteEmp = useCallback(async () => {
        if (!!!employee) return closeDialog();

        await deleteEmployee(employee.id);
        router.replace(router.asPath);
        return closeDialog();
    }, [employee, deleteEmployee, router]);

    return (
        <>
            <Grid overflow={'hidden'}>
                <Grid container display={'flex'} direction={'row-reverse'} margin={'20px'}>
                    <Grid item xs={2}>
                        <LinkButton href={"/employee/add"}>
                            add Employee
                        </LinkButton>
                        <Button data-testid='btnToggle' onClick={() => viewToggle()}>
                            {!isTableView && <FormatListBulletedIcon />}
                            {isTableView && <AppsIcon />}
                        </Button>
                    </Grid>
                </Grid>
                <Container fixed >

                    <funcContext.Provider value={{ updateEmp, openDialog }}>
                        <Grid container spacing={4}>
                            {!isTableView && <Gridview data={initialEmployees} />}
                            {isTableView && <TableView data={initialEmployees} />}
                        </Grid>
                    </funcContext.Provider>

                </Container>
            </Grid>
            <ConfirmModal open={isDialogOpen} closeDialog={closeDialog} confirm={deleteEmp} />
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async () => {
            const { data } = await store.dispatch(getEmployees.initiate({}));
            return {
                props: {
                    initialEmployees: data,
                },
            };
        }
);


