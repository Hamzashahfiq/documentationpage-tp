import React,{useState} from 'react'
import { toast } from 'react-toastify';

const contactDetail = {
    cname:'',
    email:'',
    message:''
}
export default function useContactPage() {
    const [contactData,setContactData] = useState(contactDetail)
    const setStates = (e) => {
        setContactData({...contactData,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!contactData.cname||!contactData.email||!contactData.message){
            toast('All contact data required');
            return;
        }
        toast('data hasbeen submitted')
        setContactData(contactDetail)
    }
  return (
   {
    contactData,
    setStates,
    submitHandler
   }
  )
}
