import React, {useState,useEffect} from 'react';
import styles from '../components/Form.module.css';
import ValidateForm from '../utils/validateForm';

export default function Form() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [phone,setPhone] = useState("");
    const [error,setError] = useState(false);

    return (
    <div className={styles.container}>
        <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
         />
         <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
         />
         <input 
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
         />
         <input
            type="text"
            placeholder="phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
         />
         <button onClick={() => ValidateForm(name,email,username,phone)}>SIGNUP</button>

    </div>
  )
}
