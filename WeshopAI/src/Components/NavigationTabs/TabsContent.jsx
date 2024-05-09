const TabsContent = () => {
    return (
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