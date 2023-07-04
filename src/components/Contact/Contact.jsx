import React, {useState, useEffect} from 'react'
import './Contact.css'

function Contact() {
  const[itemsInput, setItemsInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const[formErrors, setFormErrors] = useState({})
  const[isSubmit, setIsSubmit] = useState(false)
function setItems(e){
  const {name, value} = e.target
  setItemsInput(prevInput=>{
    return{
      ...prevInput,
      [name]: value
    }
  })
}

// const form = document.querySelector('.input-div')

// form.addEventListener('submit', (e)=>{
//   e.preventDefault()
//   form.reset()
// })

function handleSubmit(e){
  e.preventDefault()
  setFormErrors(validate(itemsInput))
  setIsSubmit(true)
  //console.log(JSON.stringify(itemsInput, undefined, 2));
}
const validate = (values)=>{
  const errors = {}
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
  if(!values.name){
    errors.name = 'Username is required'
  }
  if(!values.email){
    errors.email = 'Email is required'
  }else if(!regex.test(values.email)){
    errors.email = 'Invalid email format'
  }
  if(!values.phone){
    errors.phone = 'Phone number is required'
  }
  if(!values.message){
    errors.message = 'Enter the message'
  }
  return errors

}

useEffect(()=>{
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(itemsInput);
  }
}, [formErrors])


  return (
    <div className='contact-container'>
        <h1>Send Us A Message</h1>
       {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='ui-message-success'><p>Successfully submitted</p></div>) : ''}
        <form className="input-div" onSubmit={handleSubmit}>
          <input type="text" name='name' onChange={setItems} value={itemsInput.name} placeholder='Name'/>
          <p>{formErrors.name}</p>
          <input type="email" name='email' onChange={setItems} value={itemsInput.email} placeholder='Email'/>
          <p>{formErrors.email}</p>
          <input type="text" name='phone' onChange={setItems} value={itemsInput.phone} placeholder='phone'/>
          <p>{formErrors.phone}</p>
          <textarea placeholder='Message' onChange={setItems} value={itemsInput.message} name='message'></textarea>
          <p>{formErrors.message}</p>
        </form>
        <button className='btn--outline' onClick={handleSubmit}>SEND</button>
    </div>
  )
}

export default Contact