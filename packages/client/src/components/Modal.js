import { Modal, Backdrop, Fade, Box, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ConfirmModal({ open, closeDialog, confirm }) {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            // onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Delete
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Do you want to remove this employee?
                    </Typography>
                    <Button onClick={() => confirm()}>
                        Remove
                    </Button>
                    <Button onClick={() => closeDialog()}>
                        Cancel
                    </Button>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ConfirmModal
