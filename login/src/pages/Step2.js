import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { Input } from './components/Input'

export const Step2 = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

 return (
  <MainContainer>
   <div>
     <h2>Step1</h2>
     <form>
       <Input
         ref={register}
         name="firstName"
         type="text"
         placeholder="First Name"
       />
       
       <Input
         ref={register}
         name="lastName"
         type="text"
         placeholder="First Name"
       />
       <button type="submit">Next </button>
     </form>
   </div>
   </MainContainer>
 )
}