import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBarCom() {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{ width:'100%',zIndex:'3000'}}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Training Portal Documentation
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}




