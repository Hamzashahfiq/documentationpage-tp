import React from 'react'
import { CP } from './ContactPageStyle'
import Techlogo from '../../assets/logo.png'
import { Box, Button } from '@mui/material'
import InputField from '../../commonComponent/inputField/InputField'
import useContactPage from './useContactPage'

export default function ContactPage() {
    const {contactData,setStates,submitHandler} = useContactPage();
    return (
        <>
            <CP.MainDiv>
                <CP.LogoDiv>
                    <CP.LogoImg src={Techlogo} />
                </CP.LogoDiv>
                <CP.ContactDiv>
                    <CP.ContactDisc>
                        <CP.ContactTypo variant="h3">Contact Us</CP.ContactTypo>
                        <CP.Akstypo variant="h5">ASK A QUESTION</CP.Akstypo>
                        <CP.Desctypo> Please contact us for specific reasons</CP.Desctypo>
                    </CP.ContactDisc>
                    <CP.ContactInputs>
                        <CP.Inputs>
                            <Box
                                component="form"
                                validate
                                autoComplete="off"
                                onSubmit={(e)=>submitHandler(e)}
                            >
                                <InputField type='text' label="Full Name:"  name="cname" value={contactData.cname} onChange={(e) => setStates(e)} />
                                <InputField type='email' label="Email:"  name="email" value={contactData.email}  onChange={(e) => setStates(e)} />
                                <InputField type='multiline' label="Your message:"  name="message" value={contactData.message}  onChange={(e) => setStates(e)} />
                                <Box sx={{ textAlign: 'center', my: 3 }}><Button variant="contained" type='submit'>Submit</Button></Box>
                            </Box>
                        </CP.Inputs>
                    </CP.ContactInputs>
                </CP.ContactDiv>
            </CP.MainDiv>
        </>
    )
}
