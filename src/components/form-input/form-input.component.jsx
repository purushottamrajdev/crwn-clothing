import React from 'react';
import './form-input.styles.scss';

const FormInput=({handleChange,lable,...otherProps})=>{
    return(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} /> 
        {
            lable ?
            (<lable className={`${otherProps.value.length ? `shrink` : ''}  form-input-lable`}>
                {lable}
            </lable>):
            
            null
        }
    </div>)
}

export default FormInput;