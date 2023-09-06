import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import { UserRegistration, postRegistrationAPI } from '../../apis/funcAPI';

import './Registration.css'

type Props = {}

const CreatUserRegistration = (props: Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [mas , setmas] = useState(null)

  return (
<>
    <form id='formRegistration' onSubmit={handleSubmit((data) => {
      postRegistrationAPI(data)
        .then(res => {setmas(res)})
        .catch(err => {setmas(err)})
    })}>

      <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 10 })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    {mas ? <p>{mas}</p> : null}
    </>
  )
}

export default CreatUserRegistration