import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const CP = {
    MainDiv: styled('div')(() => ({
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
    })),
    LogoDiv: styled('div')(() => ({
        flex:1,
        backgroundColor:'#5003b7',
        //background: 'linear-gradient(to left,#24c6dc, #514a9d)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
    })),
    LogoImg: styled('img')(() => ({
        maxWidth: '100%',
        maxHeight: '200px'
    })),
    ContactDiv: styled('div')(() => ({
        display: 'flex',
        flex:2,
        height: '100%',
        flexWrap: 'wrap',
        padding: '16px',
    })),
    ContactDisc: styled('div')(() => ({
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '320px',
        margin:'16px 0px'
    })),
    ContactInputs: styled('div')(() => ({
        display: 'flex',
        flex: '1.5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '320px',
        margin:'0 8px'
    })),
    Inputs: styled('div')(() => ({
        width: '500px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'16px',
        backgroundColor:'#f8f9fa',
        borderRadius:'20px'
    })),
    ContactTypo: styled(Typography)(() => ({
        color: '#6c757d',
        fontWeight: 'Bold',
    })),
    Akstypo: styled(Typography)(() => ({
        color: '#6c757d',
        fontWeight: 'Bold',
    })),
    Desctypo: styled(Typography)(() => ({
        color: '#6c757d',
        fontWeight: 'Bold',
    })),
}
