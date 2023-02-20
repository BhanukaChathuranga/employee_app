import { useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { CardMedia, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { GENDER } from "@utils";
import styles from 'styles/Table.module.css';
import { funcContext } from "pages/employee/list";

const Actions = ({ obj }) => {
    const { updateEmp, openDialog } = useContext(funcContext);

    const router = useRouter();

    const onUpdate = useCallback(async data => {
        await updateEmp(data);
        router.push(`/employee/edit/${data?.id}`);
        return;
    }, [updateEmp, router]);

    const onDelete = useCallback(async data => {
        await updateEmp(data);
        return openDialog();
    }, [updateEmp, openDialog])

    return (
        <Grid container>
            <Grid item>
                <button className={styles.button} onClick={() => onUpdate(obj)}>Edit</button>
            </Grid>
            <Grid item onClick={() => onDelete(obj)} className={styles.btn_delete}>
                <DeleteIcon style={{ color: 'red' }} />
            </Grid>
        </Grid>
    )
}

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

export const TableBody = ({ data }) => {
    return (
        <tbody>
            {data.map(emp => <tr key={emp.id}>
                <td className={styles.p_5}>
                    <CardMedia
                        key={emp.photo}
                        sx={{ height: 50, width: 50 }}
                        image={emp.photo}
                        title={'user_image'}
                    />
                </td>
                <td className={styles.p_25}>{emp.first_name}</td>
                <td className={styles.p_25}>{emp.last_name}</td>
                <td className={styles.p_25}>{emp.email}</td>
                <td className={styles.p_25}>{emp.number}</td>
                <td className={styles.p_25}>{GENDER[emp.gender]}</td>
                <td className={styles.p_5}>
                    <Actions obj={emp} />
                </td>
            </tr>
            )}
        </tbody>
    )
}


export const Table = ({ data }) => {
    if (data.length <= 0) return (<>No Found data...!</>);

    return (
        <table className={styles.table}>
            <TableHead />
            <TableBody data={data} />
        </table>
    );
}

function TableView({ data }) {

    return (
        <Grid item display={'flex'} justifyContent={'center'} xs={12}>
            <Table data={data} />
        </Grid>
    )
}

export default TableView
