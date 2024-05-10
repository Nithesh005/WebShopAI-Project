import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordFields = ({setpassword,password,handleChangePassword}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    
    return (
        <TextField type={showPassword ? 'text' : 'password'} label="password"
            variant="outlined"
            value={password}
            onChange={handleChangePassword}
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
    )
}

export default PasswordFields;