import {useState} from 'react';
import styles from '../components/Form.module.css';
import ValidateForm from '../utils/validateForm';

export default function Form({
    name,
    setName,
    email,
    setEmail,
    username,
    setUsername,
    phone,
    setPhone,
    error,
    setError,
    submitHandler
    }) {

    return (
    <div className={styles.container}>
        <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
         />
         {error?.name && <div className={styles.error}>Name is required</div>}
         <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
         />
         {error?.email && <div className={styles.error}>Valid Email is required</div>}
         <input 
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
         />
         {error?.username && <div className={styles.error}>Username is required</div>}
         <input
            type="text"
            placeholder="phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
         />
          {error?.phone && <div className={styles.error}>Valid Phone Number is required</div>}

         <button onClick={submitHandler}>SIGNUP</button>

    </div>
  );
}
