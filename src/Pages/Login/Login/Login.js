import React, { useRef, useState } from 'react';
import '../Login/Login.css'
import{Link, useNavigate} from 'react-router-dom';



const Login = () => {
	const emailRef =useRef('')
	const passwordRef =useRef('')
	const Navigate = useNavigate()
	const handlesubmit =(event)=>{
		event.preventDefault()
            const email=emailRef.current.value;
			const password =passwordRef.current.value;
			console.log(email,password)
	}
    const handleCreateAcount =()=>{
		Navigate('/register');
	}

    return (
        <div className=' container dive w-25 mx-auto'>
            <div classNameName="containe">
	<div className="screen">
		<div className="screen__content ">
			<form  onSubmit={handlesubmit}   className="login">
                
				<h1>LOGIN</h1>

				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input  ref={emailRef} type="text" className="login__input" placeholder="User name / Email" required/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input ref={passwordRef}   type="password" className="login__input" placeholder="Password" required/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	
                  <br />
                <p>please Register ?<Link to={"/register"} className='text-danger ' onClick={handleCreateAcount}> Create a new Acount</Link></p>			
			</form>


			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </div>
    );
};

export default Login;