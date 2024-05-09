import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/tailwind.css';
import GoogleSignIn from '../ThirdPartyIntegration/GoogleSignIn';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BasicTabs from '../Components/NavigationTabs/BasicTabs';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

export default function SignInModal({ open, handleClose }) {
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);

    const handleSuccess = (response) => {
        console.log('Login Success:', response);
        // You can handle the successful sign-in here
    };

    const handleFailure = (error) => {
        console.error('Login Error:', error);
        // You can handle the sign-in error here
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
            >
                <Box sx={style}>
                    {/* <BasicTabs /> */}
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField type={showPassword ? 'text' : 'password'} label="password" variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* <Button> Google Sign IN</Button> */}
                        <GoogleSignIn onSuccess={handleSuccess} onFailure={handleFailure} />
                    </Typography>
                </Box>

            </Modal>
        </div>
    );
}
