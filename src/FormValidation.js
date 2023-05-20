import React,{useState} from 'react'

const FormValidation = () => {
    const [data,setData] = useState({
        username : "",
        email : "",
        password :"",
        confirmPassword : "",
    })
    const {username,email,password,confirmPassword} = data;

    const changeHandler =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(username.length <=5){
            alert("Name should be atleast 5 characters..")
        }
        else if(password !== confirmPassword){
            alert("Password's are not matching ...")
        }
        else {
            console.log(data)
        }
        
    }
  return (
    
        <center>
         <form onSubmit={submitHandler}>
            <label htmlFor='username'> UserName : 
            <input type="text" name="username" value={username} onChange={changeHandler}/> </label><br/>
            <label htmlFor='email'>Email : 
            <input type="email" name="email" value={email} onChange={changeHandler}/></label><br/>
            <label htmlFor='password'>Password : 
            <input type="password" name="password" value={password} onChange={changeHandler}/></label><br/>
            <label htmlFor='confirmPassword'>ConfirmPassword : 
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/></label><br/>

            {/* {password !== confirmPassword ? <p style={{"color" : "red"}}>"password's are not matching"</p> : null} */}
            <input type="submit" name="Submit"/>
         </form>
    </center>
    
  )
}

export default FormValidation