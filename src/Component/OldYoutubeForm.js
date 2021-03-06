import React from 'react'
import {useFormik} from 'formik'


const initialValues = {
    name:'',
    email:'',
    channel:''
}

const onSubmit =values => {
    console.log ("formok data" ,values)
}
const validate = values => {
    let errors ={}

    if(!values.name) {
        errors.name='Required'                
    }
    if(!values.email) {
        errors.email='Required'                
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email ="invalid format"
    }


    if(!values.channel) {
        errors.channel='Required'                
    }
    return errors
}

function OldYoutubeForm() {

    const formik =useFormik({initialValues, onSubmit ,validate })
    console.log("fromik errors",formik.errors)
    console.log("visited fields",formik.touched)
  return ( 
  <div>
      <form onSubmit={formik.handleSubmit}>
          <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>):null}
          </div>

          <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange}onBlur={formik.handleBlur}  value={formik.values.email}/>
                 {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>):null}

          </div>
          <div>
                <label htmlFor='channel'>Channel</label>
                <input type='text'id='channel'name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>):null}
          </div>
          <button type='submit'>Submit</button>


            
              
            
              
            
            
              

           
                
           
               
                
      </form>
  </div>
)
}

export default OldYoutubeForm