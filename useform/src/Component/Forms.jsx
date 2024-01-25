import React, { useState } from 'react'
import { useForm } from "react-hook-form"
const Form = () => {
    const [regist,setRegist] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit=(val)=>{
        console.log(val)
        setRegist(true)
      }

  return (
    <div>
        {regist && (<div>
            <p style={{fontSize:"30px"}}>Registration Sucessful !!</p>
        </div>)}
        <form action="" className='form' onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:</label>
            <input type="text" name='firstName' {...register("firstName",{required:"First name is required"}) } />
            {errors.firstName && <p className='err'>{errors.firstName.message}</p>}
            <label>Last Name:</label>
            <input type="text" name='lastName' {...register("lastName",{required:"last name is required"}) } />
            {errors.lastName && <p className='err'>{errors.lastName.message}</p>}
            <label>Email:</label>
            <input type="emial" name='email' {...register("email",{required:"Email is required", pattern:{value:/^\S+@\S+$/i,message:"Invalid Email"}}) } />
            {errors.email && <p className='err'>{errors.email.message}</p>}
            <label>Password:</label>
            <input type="password" name='password' {...register("password",{required:"Password is required", minLength:{value:5, message:"Password must be more than 4 characters"}
        ,maxLength:{
            value:20,
            message:"Password cannot be more than 20 characters"
        }}) } />
            {errors.password && <p className='err'>{errors.password.message}</p>}
            <input className='btn' type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Form