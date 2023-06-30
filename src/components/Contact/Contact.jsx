import React, {useState} from 'react'
import './Contact.css'

function Contact() {
  const[itemsInput, setItemsInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
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
  console.log(itemsInput);
}
  return (
    <div className='contact-container'>
        <h1>Send Us A Message</h1>
        <form className="input-div" onSubmit={handleSubmit}>
          <input type="text" name='name' onChange={setItems} value={itemsInput.name} placeholder='Name'/>
          <input type="email" name='email' onChange={setItems} value={itemsInput.email} placeholder='Email'/>
          <input type="text" name='phone' onChange={setItems} value={itemsInput.phone} placeholder='phone'/>
          <textarea placeholder='Message' onChange={setItems} value={itemsInput.message} name='message'></textarea>
        </form>
        <button className='btn--outline' onClick={handleSubmit}>SEND</button>
    </div>
  )
}

export default Contact