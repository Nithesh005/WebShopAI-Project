import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import PasswordFields from '../InputFiels/PasswordFields';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function tabContent() {
    return (
        <div className="LoginPage">
            haiii
        </div>
    )
}

export default function LoginOptionTabs({ page }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            {page == "clothing" &&
                (
                    <div className="clothingPage">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Best Examples" {...a11yProps(0)} />
                                <Tab label="Outcomes" {...a11yProps(1)} />
                                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="flex flex-col gap-4">
                                Examples
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className="flex flex-col gap-4">
                                Possible Outcomes

                            </div>
                        </CustomTabPanel>
                    </div>
                )
            }
            {page == "Loginpage" &&
                (
                    <div className="LoginPage">

                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Sign in" {...a11yProps(0)} />
                                <Tab label="Sign up" {...a11yProps(1)} />
                                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="flex flex-col gap-4">
                                <TextField label='username' className="mb-4" />
                                <PasswordFields />
                                <Button>Sign IN</Button>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className="flex flex-col gap-4">
                                <TextField label='Email' className="mb-4" />
                                <Button>Send OTP</Button>
                                <PasswordFields />
                                {/* <Button>Update</Button> */}

                            </div>
                        </CustomTabPanel>
                    </div>
                )
            }
            {page == "Jwellery" &&
                (
                    <div className="JwelleryPage">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Best Examples" {...a11yProps(0)} />
                                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="flex flex-col gap-4">
                                Best Examples
                            </div>
                        </CustomTabPanel>
                    </div>
                )
            }
        </Box>
    );
}
