import { useCallback, useContext } from 'react';
import { CardActions,Card,CardContent,CardMedia,Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { Button, LinkButton } from '@components';
import { GENDER } from '@utils';
import { funcContext } from 'pages/employee/list';

export default function MediaCard({ element, title }) {
    
    const { updateEmp, openDialog } = useContext(funcContext);
    const { first_name, last_name, email, number, gender, photo, id } = element;

    const deletEmp = useCallback(() => {
        updateEmp(element);
        return openDialog();
    }, [updateEmp, openDialog, element]);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={photo}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="p">
                    {first_name} {last_name}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    {email}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    {number}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    {GENDER[gender]}
                </Typography>
            </CardContent>
            <CardActions sx={{ float: 'right' }}>
                <Button
                    sx={{ background: 'red' }}
                    size="small"
                    onClick={() => deletEmp()}
                >
                    <DeleteIcon />
                </Button>
                <LinkButton href={`/employee/edit/${id}`}
                    sx={{ background: 'green' }}
                    size="small"
                    style={{ borderRadius: '30px', padding: '5px', margin: '2px', minWidth: '20px' }}
                    onClick={() => updateEmp(element)}
                >
                    <ManageAccountsIcon />
                </LinkButton>
            </CardActions>
        </Card>
    );
}
