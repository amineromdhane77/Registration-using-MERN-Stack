import React, { useState } from 'react';
import axios from 'axios'
const Singup = () => {
  const [value,setValue]=useState({
    name:'',
    email:'',
    password:'',
  })
  console.log(value)
  const handleChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
e.preventDefault()
const register= await axios.post('http://localhost:5000/register',value)
console.log(register.data)
setValue({
  name:'',
    email:'',
    password:'',
})
alert('user is create')
  }
 
  return (
    <div className='container'>
    <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <input placeholder='name' name='name' value={value.name} onChange={handleChange}/> 
      <input placeholder='email' name='email' value={value.email} onChange={handleChange}/>
      <input placeholder='password' name='password'value={value.password} onChange={handleChange}/>
      <button type='submit'>SignUp</button>
      </form>
    </div>
  );
}

export default Singup;
