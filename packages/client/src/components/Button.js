import { styled } from '@mui/material';
import Button from '@mui/material/Button';

function EmpButton({ title = '', style, children, ...props }) {
    return (
        <Button
            data-testid="btn"
            variant="contained"
            {...props}
        >
            {children}
        </Button>
    )
}

// export default EmpButton
export default styled(EmpButton)({
    borderRadius: '30px', padding: '5px', margin: '2px', minWidth: '20px'
})
