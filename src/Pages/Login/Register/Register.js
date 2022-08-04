import React, {  } from 'react';
import '../Register/Register.css'
import {Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';




const Register = () => {


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate =useNavigate();
   
   const handlegoingtologin=()=>{
       navigate('/login');
   }

  const handlesubmit =event=>{
       event.preventDefault();
       console.log(event.target.email.value)
       console.log(event.target.psw.value)
       console.log(event.target.Name.value)
       const email=(event.target.email.value);
       const Password=(event.target.psw.value);
       const Name=(event.target.Name.value);
       createUserWithEmailAndPassword(email,Password);

  }

    return (
        <div className='body container mx-auto w-50'>
            <form onSubmit={handlesubmit}  action="/action_page.php">
  <div className="containerr">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label htmlFor="email"><b>Email</b></label>
    <input   type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input   type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="Name"><b>Name</b></label>
    <input  type="text" placeholder="UserName" name="Name" id="Name" required/>
    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account? <Link to={'/login'} onClick={handlegoingtologin}> Sign in</Link></p>
  </div>
</form>

        </div>
    );
};

export default Register;