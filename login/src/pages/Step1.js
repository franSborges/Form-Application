import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { Typography } from '@mui/material';
import { yupResolver, yup } from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
      return value
    }
  
    return (
      phoneNumber.formatInternational() 
    );
  };


export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const history = useHistory();



 const onSubmit = (date) => {
    history.push("/step2");
  }


 return (
   <MainContainer>
   <div>
     <Typography>
       Step 1
     </Typography>
     <form>
       <Input
         ref={register}
         name="firstName"
         type="text"
         placeholder="First Name"
         error={!!errors.firstName}
         helperText={errors?.firstName?.message}
       />
       
       <Input
         ref={register}
         name="lastName"
         type="text"
         placeholder="Last Name"
         error={!!errors.LastName}
         helperText={errors?.LastName?.message}
       />
       <PrimaryButton type="submit">Next</PrimaryButton>
     </form>
   </div>
   </MainContainer>
 )
}