import React ,{useState} from 'react'
import {Formik, Form, Field, ErrorMessage,FieldArray, FastField} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues = {
    name:'',
    email:'',
    channel:'',
    comments:'',
    address :'',
    social :{
        facebppk : '',
        twitter :''
    },
    phoneNumber :['',''],
    phNumbers:['']
}
const savedValues = {
    name:'Anushree',
    email:'Abjbk@gmail.com',
    channel:'dfdg',
    comments:'heyyyyyyy',
    address :'3434 vsfrdg',
    social :{
        facebppk : '',
        twitter :''
    },
    phoneNumber :['',''],
    phNumbers:['']
}

const onSubmit =(values,onSubmitProps) => {
    console.log ("formok data" ,values)
    console.log('submit props',onSubmitProps)
    //onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}
const validateSchema =Yup.object({
    name:Yup.string().required('required'),
    email:Yup.string().email("inalid fomrat").required("requiered"),
    channel:Yup.string().required("required")
})
const validateComments = (value) => {
    let error
    if(!value) {
        error='Required'
    }    
    return error
}
 /*const validate = values => {
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
return errors*/


function YoutubeForm() {
    const [formValues,setFormValues] =useState(null)
  return ( 
  <Formik  initialValues ={formValues || initialValues}
            validationSchema ={validateSchema}
            onSubmit ={onSubmit}
            //enableReinitialize
            validateOnMount
            //validateOnChange={false}
            //validateOnBlur={false}
             > 
                {
                    formik => {
                        console.log('formik-props',formik)
                        return (
                            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name'  />
                    <ErrorMessage name='name'/>
                </div>
                
            
              
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email' component={TextError} />

                </div>
              

                <div className='form-control'>
                    <label htmlFor='channel'>channel</label>
                    <Field type='text'id='channel'name='channel' placeholder='channel name' />
                    <ErrorMessage name='channel' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>comments</label>
                    <Field as='textarea' id ='comments' name='comments' validate={validateComments}/>
                    <ErrorMessage name='comments' component={TextError}/>
                </div>
                <div className='form-control'>
                     <label htmlFor ='facebook'>Facebook profile</label>
                     <Field type='text' id ='facebook' name='social.facebook'/>              
                </div>
                <div className='form-control'>
                     <label htmlFor ='twitter'>twitter profile</label>
                     <Field type='text' id ='twitter' name='social.twitter'/>              
                </div>
                <div className='form-control'>
                     <label htmlFor ='primaryph'>primary number</label>
                     <Field type='text' id ='primaryph' name='phoneNumber[0]'/>              
                </div>
                <div className='form-control'>
                     <label htmlFor ='secondaryph'>secondaryphone</label>
                     <Field type='text' id ='secondaryph' name='phoneNumber[1]'/>              
                </div>
                <div className='form-control'>
                    <label>List of phoneNumber</label>
                    <FieldArray name='phNumber'>
                        {(fieldArrayprops)=> {
                            //console.log('feildarrayprops',fieldArrayprops)
                            const {push,remove,form} =fieldArrayprops
                            const{values} =form
                            const {phNumbers} =values
                            console.log('form-errors',form.errors)
                            return (
                                <div>
                                    {phNumbers.map((phNumber,index)=>(
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`}/>
                                            {index>0 && (
                                                    <button type='button' onClick={() => remove(index)}>
                                                       {''}
                                                       -{''} 
                                                    </button>
                                                ) }
                                                <button type='button' onClick={() => push('')}>
                                                    {''}
                                                    +{''}
                                                </button>
                                        </div>
                                    ))}
                                </div>
                            )
                        }}
                    </FieldArray>
                </div>
                 <div className='form-control'>
                     <label htmkFor='address'>Address</label>
                     <FastField name='address'>
                         {props =>{
                             //console.log('field render')
                             const{field,form,meta} =props
                             //console.log("render props",props)
                             return (
                                 <div>
                                     <input type='text' id ='address' {...field}/>
                                     {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                                 </div>
                             )
                         }}
                     </FastField>
                 </div>
                 {/*<button type='button' onClick={()=> formik.validateField('comments')}>Validate comments</button>
                 <button type='button' onClick={()=> formik.validateForm()}>Validate all</button>
                 <button type='button' onClick={()=> formik.setFieldTouched('comments')}>Touched comments</button>
                 <button type='button' onClick={()=> formik.setTouched({
                     name:true,channel:true,comments:true,email:true
                 })}>visit all</button>*/}
                 <button type='button' onClick={() => setFormValues(savedValues)}>Load Saved Data</button>
                 <button type='reset'>
                     Reset
                 </button>
                <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                </Form>

                        )
                    }
                }
           
            
  </Formik>
)
}
export default YoutubeForm