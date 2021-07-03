import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
       try{
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' })
       }catch(error) {
            console.log(error)
       }

    }
    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({...userCredentials, [name]: value });
    }

        return (
            <div className ='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                     name='email' 
                     type='email' 
                     value={email}
                     handleChange = {handleChange}
                     label="email"
                     required
                     />
                    
                    <FormInput 
                     name='password'
                     type='password'
                     value={password}
                     handleChange={handleChange}
                     label="password"
                     required 
                     />
                    <div className ='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick ={signInWithGoogle} isSignInGoogle>Sign in with Google </CustomButton>
                    </div>
                    
                </form>                
            </div>
        )
}

export default SignIn;