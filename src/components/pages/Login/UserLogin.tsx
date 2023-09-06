import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import { UserRegistration, LoginResponse,Loginfaild, postLoginAPI } from '../../apis/funcAPI';
import Loading from '../../utils/loading';
import LogFild from '../../utils/LogFild';
import Button from '@mui/joy/Button';

// import './Registration.css'

type Props = {}

const UserLogin = (props: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm<UserRegistration>();
  const [success, setSuccess] = useState<LoginResponse | null>(null);
  const [fail, setFail] = useState<string | null>(null);
  const [status, setStatus] = useState<number>(1);

  const onSubmit: SubmitHandler<UserRegistration> = (data) => {
    postLoginAPI(data)
      .then((res) =>{console.log(res); setStatus(2); setSuccess(res);})
      .catch((err) => {setFail(err.message || "An error occurred"); setStatus(3);});
  };

  
  const aform = <>
  <form id='formLogin' onSubmit={handleSubmit(onSubmit)}>

    <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
    {errors.email && <span>This field is required</span>}
    <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 15 })} />
    {errors.password && <span>This field is required</span>}

    <input type="submit" />
  </form>
  {success ? <p>{success.message? 'Login successful'  : 'Login fiail: check your email and password' }</p> : null} 
  {fail ? <p>{fail}</p> : null} 
  {/* {success?.message ? <Loading/>  : null} */}
</>
  

  {switch (status) {
    case 1:
     return(aform )
      case 2:
       return(aform ,<Loading/>)
       case 3:
        return(<LogFild/>)
  
    default:
      break;
  }}
 

}


export default UserLogin

