import React from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/Modal.scss';



export default function Modal({ closeModal }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            Email: "",
            Password: ""
        }
    });
    console.log(watch());

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button className='modalClosingBtn' onClick={() => closeModal(false)}>x</button>
                <div className='containers'>
                    <div className='title'>
                        <h1>Log In</h1>
                    </div>
                    <div className='body'>
                        <form onSubmit={handleSubmit((data) => {
                            console.log(data)
                        })}>
                            <label>Email</label>
                            <input type="text" {...register("Email", {
                                required: 'Email is required!', pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })} />
                            <p className='errorMessage'>{errors.Email?.message}</p>
                            <label >Password</label>
                            <input type="password" {...register("Password", { required: 'Password is required!', minLength: { value: 8, message: 'Minimum 8 characters!' } })} />
                            <p className='errorMessage'>{errors.Password?.message}</p>
                            <div className='footer'>
                                <input className='logbtn' type="submit" value="Log In" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
