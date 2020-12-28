import React from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button//custom-button.component';
import {Auth, createUserProfileDocument, auth} from '../../firebase/firebase.utils';
import FormInput from '../form-input//form-input.component';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password!== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try{

            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
           await createUserProfileDocument(user, {displayName})
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })

        } catch(error) {

        }
            
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Display name'
                        required
                    />
                   
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm password'
                        required
                    />
                   
                    <div className='button'>
                    <CustomButton type='submit'>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    
}
export default SignUp;