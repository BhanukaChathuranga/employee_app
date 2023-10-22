import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function NavBar({ title }) {
    return (
        <AppBar data-testid="navbar" position='relative' color='primary'>
            <Toolbar>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
