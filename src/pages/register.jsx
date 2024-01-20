import React, { useState } from "react";

const RegistrationPage = () => {
  const [formState,SetFormState]=useState(
    {
      email:"",
      name:"",
      password:"",
      passwordMatch:"",
    }
  )

  const [formErrorState,setFormErrorState]=useState(
    {
      email:null,
      name:null,
      password:null,
      passwordMatch:null,
    }
  )
  const handleInputChange=function(e){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+=])[A-Za-z\d!@#$%^&*()-+=]{8,}$/;


    switch (e.target.name) {
      case "userEmail":
        SetFormState({
             ...formState,
            email: e.target.value,
           })
           setFormErrorState({
            ...formErrorState,
            email:e.target.value.length=="0"? "This field is required" : !emailRegex.test(e.target.value)?"yoy have to enter an email format": null
          }) 
          console.log(formErrorState.email)
        break;
        case "userName":
          SetFormState({
               ...formState,
              name: e.target.value,
             })
             setFormErrorState({
              ...formErrorState,
              name:e.target.value.length=="0"? "This field is required" : null
            }) 
          break;
          case "userPassword":
            SetFormState({
                 ...formState,
                password: e.target.value,
               })
               setFormErrorState({
                ...formErrorState,
                password:e.target.value.length=="0"? "This field is required" : !passwordRegex.test(e.target.value)?"minimum 8 characters, at least one lowercase, one uppercase, one digit, and one special character": null
              }) 
            break;
            case "userPasswordMatch":
              SetFormState({
                   ...formState,
                   passwordMatch:e.target.value.length=="0"? "This field is required" : e.target.value!==formState.password?"Passwords do not match": null
                 })
              break;
    
      default:
        break;
    }
  }
  const handleSubmitForm=function(e){
      e.preventDefault()
      console.log(formState)
  }

  return (
    <form className="w-50 m-auto" onSubmit={handleSubmitForm} >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={formState.email}
          name="userEmail"
       
          onChange={handleInputChange}
        />
      </div>
      { formErrorState.email && <div id="emailHelp" className="form-text text-danger">{formErrorState.email}</div>}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formState.name}
          name="userName"
          onChange={handleInputChange}
        />
      </div>
     {formErrorState.name && <div id="emailHelp" className="form-text text-danger">{formErrorState.name}</div>}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formState.password}
          name="userPassword"
       
          onChange={handleInputChange}
        />
      </div>
    {formErrorState.password &&  <div id="emailHelp" className="form-text text-danger">{formErrorState.password}</div>}
      <div className="mb-3">
        <label htmlFor="passwordMatch" className="form-label">
          PasswordMatch
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordMatch"
          value={formState.passwordMatch}
          name="userPasswordMatch"

          onChange={handleInputChange}
        />
      </div>
   {formErrorState.passwordMatch && <div id="emailHelp" className="form-text text-danger">{formErrorState.passwordMatch}</div>}
      <button type="submit" className="btn bg-main-color">
        Submit
      </button>
    </form>
  );
};

export default RegistrationPage;
