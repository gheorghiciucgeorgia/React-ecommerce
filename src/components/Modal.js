import React from 'react';
import {useState} from 'react';
import '../Styles/Modal.scss';


export default function Modal({ closeModal }) {
    const [name, setName]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form submitted, ${name}')
    }
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button class="modalClosingBtn" onClick={() => closeModal(false)}>x</button>
                <div class="containers">
                <div class="title">
                    <h1>Log In</h1>
                </div>
                <div class="body">
                    <form onSubmit={handleSubmit}>
                        <label for="email" onChange={(e)=>setName(e.target.value)} value={name}>Email</label>
                        <input type="text" name="email" required />
                        <label for="password">Password</label>
                        <input type="password" name="password" />
                    </form>

                </div>
                </div>
                <div className='footer'>
                    <input className='logbtn' type="submit" value="Log In" />
                </div>
            </div>
        </div>
    )
}
