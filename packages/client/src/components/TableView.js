import { useCallback } from "react";
import { useRouter } from "next/router";
import { CardMedia, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { GENDER } from "@utils";
import styles from 'styles/Table.module.css';

const Actions = ({ obj, onUpdate, onDelete }) => {
    return (
        <>
            <button className={styles.button} onClick={() => onUpdate(obj)}>Edit</button>
            <button onClick={() => onDelete(obj)} style={{ padding: 0 }}>
                <DeleteIcon style={{ color: 'red' }} />
            </button>
        </>
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



function TableView({ data, updateEmp, openDialog }) {

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
        <Grid item display={'flex'} justifyContent={'center'} xs={12}>
            <table className={styles.table}>
                <TableHead />
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
                        <td>{emp.first_name}</td>
                        <td>{emp.last_name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.number}</td>
                        <td>{GENDER[emp.gender]}</td>
                        <td className={styles.p_5}>
                            <Actions obj={emp} onUpdate={onUpdate} onDelete={onDelete} />
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </Grid>
    )
}

export default TableView
