import React from 'react'
import '../Css/EmailPage.css'

const EmailPage = () => {
  return (
    <div className='email-page'>
    
       <span id='email-id'>
       <h4 id='h-four' >Get the latest news from American Tourister.</h4>
        <form className='form-control form-change' >
            <input type="text" className="form-control rounded-4" placeholder='*Your Email Address'/>
            <button className="btn btn-sm w-50 rounded-5 "
             style={{color:"black",marginTop:"10px",fontSize:"18px",fontWeight:"600",backgroundColor:"white"}}>Submit</button>
        </form>
       </span>
     

    </div>
  )
}

export default EmailPage