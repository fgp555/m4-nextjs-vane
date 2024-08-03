'use client';
import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';



export const LoginPrueba = () =>{
const [token, setToken] = useState(localStorage.getItem('userToken') || null);
const [userData, setUserData] = useState({
    username: '',
    password: ''
});


const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
        ...prevData,
        [name]: value
    }));
    
}

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
}

fetch('http://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
    .then(response => response.json())
    .then((json) => {
        console.log("json",json)
        setToken("Bearer "+json.token)
        localStorage.setItem('userToken', "Bearer "+json.token);
    })
    .catch((error) => {
        console.log(error)
    })
    return (
        <div>
            <form className="max-w-sm mx-auto mt-20   " onSubmit={submitHandler}>
                <input className='text-black mb-10'
                    placeholder="UserName"
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={inputHandler}
                />
                <input className='text-black'
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={inputHandler}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    ) 
       

}

export default LoginPrueba