import Link from 'next/link';
import { Button } from '@mui/material';

function LinkButton({ href, children, ...props }) {
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <Button component='button' variant='contained' sx={{ borderRadius: 8 }} {...props}>
                {children}
            </Button>
        </Link>
    )
}

export default LinkButton
