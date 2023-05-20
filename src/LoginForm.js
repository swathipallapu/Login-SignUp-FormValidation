import React,{useState} from 'react'

const LoginForm = () => {
    const[data,setData] = useState({
        username : "",
        password : "",
    })

    const {name,password} = data;
    
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <center>
        <form onSubmit={submitHandler}>
           <label htmlFor="username">userName : 
             <input type="text" value={name} name="username"  onChange={changeHandler}/>
           </label><br></br>

           <label htmlFor="password">password :
             <input type="password" name="password" value={password}  onChange={changeHandler}/>
           </label>
           <br></br>
            <input type="submit" value="Submit"/> 
       </form>
    </center>
  )
}

export default LoginForm