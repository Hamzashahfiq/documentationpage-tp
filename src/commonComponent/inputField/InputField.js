import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';


export default function InputField({ type, label,name,value,onChange }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
            {type === 'text' && <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, }} />}
            {type === 'multiline' && <Box sx={{ mr: 1, dispaly: 'flex', height: '125px' }}> <MessageIcon sx={{ color: 'action.active' }} /></Box>}
            {type === 'email' && <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5, }} />}
            {
                type === 'multiline' ?
                    <TextField type={type}
                        id="outlined-multiline-static"
                        label={label}
                        multiline
                        rows={4}
                        required
                        name={name} value={value} onChange={(e) => onChange(e)}
                        sx={{ width: '300px', my: 2 }} /> :
                    <TextField type={type} name={name} value={value} onChange={(e) => onChange(e)} label={label} required id="input-with-sx" variant="standard" sx={{ width: '300px' }} />}
        </Box>
    )
}
