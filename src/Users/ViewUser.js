import axios from 'axios';
import React, { useEffect,  useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewUser() {
    
    let navigate=useNavigate();

    const {id}= useParams();

    const [user, setUser] = useState({
        name: '',
        username:'',
        email: '',
    });

    const {name,username,email} = user


    useEffect(()=>{
        loadUser();
    },[]);

    
    const loadUser  = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4 '> View User</h2>
                        
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Name</label>
                            <div>{name}</div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <div>{username}</div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Email</label>
                            <div>{email}</div>
                        </div>
                        
                        <Link to={'/'} className='btn btn-danger mx-2' > Cancel</Link>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
