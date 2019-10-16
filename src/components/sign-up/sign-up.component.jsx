import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument}  from '../../firebase/firebase.util';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit=async(event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert('Password and Confiorm Password must be same');
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }  
        catch(err){
            console.log(err);
        }  

    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }



    render(){
        return(
            <div className='sign-up'>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type='text'
                        label='Display Name'
                        required
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="email"
                        type='email'
                        label='Email'
                        required
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        type='password'
                        label='Password'
                        required
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        name="confirmPassword"
                        type='password'
                        label='confirmPassword'
                        required
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;