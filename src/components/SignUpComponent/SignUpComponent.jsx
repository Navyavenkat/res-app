// import React, { Component } from 'react'

// class SignUpComponent extends Component {

//     constructor(props){
//         super(props)
//         this.state={
//             firstname:"",
//             lastname:"",
//             email:"",
//             password:""
//         }
//     }
//     firstnameHandler= event =>{
//         this.setState(
//             {
//                 firstname:event.target.value
//             }
//         )
//     }
   
//     lastnameHandler= event =>{
//         this.setState(
//             {
//                 lastname:event.target.value
//             }
//         )
//     }
//     emailHandler= event =>{
//         this.setState(
//             {
//                 email:event.target.value
//             }
//         )
//     }
//     passwordHandler= event =>{
//         this.setState(
//             {
//                 password:event.target.value
//             }
//         )
//     }

//  formSubmitHandler = event =>
//     {
//        event.preventDefault()
//        console.log(
//         this.state.firstname,
//         this.state.lastname,
//         this.state.email,
//         this.state.password
//        );

//        fetch('https://loacalhost:3500/api/v1/signup',
//        {
//         method:'POST',
//         crossDomain:true,
//         headers:{
//             'Content-type':'application/json',
//             'Access-Control-Allow-Origin':'*'
//         },
//         body:JSON.stringify({
//             firstname: this.state.firstname,
//             lastname:this.state.lastname,
//             email:this.state.email,
//              password:this.state.password
//         })
//        }
      
//        )
//        .then((res)=>res.json())
//        .then((data)=>{
//         console.log(data);
//        })
//     }
//   render() {
//     const {firstname,lastname,email,password}=this.state
//     return (
//       <form onSubmit={this.formSubmitHandler}>
//         <h3>Sign UP</h3>
//         <div className='mb-3'>
//             <label>First Name</label>
//             <input
//             type='text'
//             className='form-control'
//             placeholder='Enter your first name'
//             value={firstname}
//             onChange={this.firstnameHandler}
//             required 
//              />
//         </div>

//         <div className='mb-3'>
//             <label>Last Name</label>
//             <input
//              type='text'
//              className='form-control'
//              placeholder='Enter your last name'
//              value={lastname}
//              onChange={this.lastnameHandler}
//              required
//             />
//         </div>

//         <div className='mb-3'>
//             <label>Email</label>
//             <input
//              type='email'
//              className='form-control'
//              placeholder='Enter your email'
//              value={email}
//              onChange={this.emailHandler}
//              required
//             />
//         </div>

//         <div className='mb-3'>
//             <label>Password</label>
//             <input 
//              type='password'
//              className='form-control'
//              placeholder='Enter your password'
//              value={password}
//              onChange={this.passwordHandler}
//              required
//             />
//         </div>
//         <div className='d-grid'>
//             <button type='submit' className='btn btn-primary'>Sign UP</button>
//         </div>
//         <p className='forget-password text-right'>
//             Already registered, <a href='/login'>sign-in here?</a>

//         </p>
//       </form>
//     )
//   }
// }

// export default SignUpComponent

import React, { Component } from 'react'

class SignUpComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       lastName:'',
       email:'',
       password:''
    }
  }
  fristNameHandler = event => {
    this.setState(
      {
        firstName:event.target.value
      }
    )
  }
  lastNameHandler = event => {
    this.setState(
      {
        lastName:event.target.value
      }
    )
  }
  emailHandler = event => {
    this.setState(
      {
        email:event.target.value
      }
    )
  }
  passwordHandler = event => {
    this.setState(
      {
        password:event.target.value
      }
    )
  }
  formSubmitHandler = event => {
    event.preventDefault()
    console.log(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );
    fetch(`http://localhost:3500/api/v1/signup`,
    {
      method : `POST`,
      crossDomain : true,
      headers: {
        'content-type' : 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body : JSON.stringify({
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password
      })
    }
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
  }
  render() {
    const {firstName,lastName,email,password}=this.state
    return (
      <form onSubmit={this.formSubmitHandler}>
        <h3>Sign Up</h3>
        <div className='mb-3'>
          <label>First Name</label>
          <input
          type='text'
          className='form-control'
          placeholder='Enter your First Name'
          required
          value={firstName}
          onChange={this.fristNameHandler}
          />
        </div>
        <div className='mb-3'>
          <label>Last Name</label>
          <input 
          type='text'
          className='form-control'
          placeholder='Enter your Last Name'
          required
          value={lastName}
          onChange={this.lastNameHandler}
          />
        </div>
        <div className='mb-3'>
          <label>Email</label>
          <input
          type='email'
          className='form-control'
          placeholder='Enter your email'
          required
          value={email}
          onChange={this.emailHandler}
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
          type='password'
          className='form-control'
          placeholder='Enter Your Password'
          required
          value={password}
          onChange={this.passwordHandler}
          />
        </div>
        <div>
          <button type='submit' className='btn btn-primary'>Sign Up</button>
        </div>
        <p className='forgot-password text-right'>
          Already registered, <a href='/login'>Sign-in here?</a>
        </p>
      </form>
    )
  }
}

export default SignUpComponent