import React from 'react'
import {useFormik,Formik,Form,Field} from 'formik'
import { Button, Stack } from '@chakra-ui/react'


const MyForm = () => {

    interface FormInitialValues {
        name:string,
        email:string,
        age:number,
        phone1:number,
        phone2?:number,
        gender:string,
        file?:any
    }

    const initialValues: FormInitialValues  = {
        name:'',
        email:'',
        age:0,
        phone1:0,
        phone2:0,
        gender:'',
        file:''

    }

  
    
  return (
    <div>
        <Formik
        initialValues= {initialValues}
        onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);}}
        >
            <Form >
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field type="text" name="name" placeholder="Enter your fullname"></Field>
                </div>
                <div>
                    <label htmlFor='Email'>Email</label>
                    <Field type="text" name="Email" placeholder="Enter your Email"></Field>
                </div>
            
                <div>
                    <label htmlFor='Age'>Age</label>
                    <Field type="text" name="Age" placeholder="Enter your Age"></Field>
                </div>
            
                <div>
                    <label htmlFor='Phone1'>Phone 1</label>
                    <Field type="text" name="Phon1" placeholder="Enter your Phone Number"></Field>
                </div>
            
                <div>
                    <label htmlFor='Phone2'>Phone Number 2 (Optional)</label>
                    <Field type="text" name="Phone2" placeholder="Enter your Phone Second Number"></Field>
                </div>
            
                <div>
                    <label htmlFor="Gender">Gender</label>
                    <select name="Gender" id="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="myfile">Select a file:</label>
                    <Field type="file" id="myfile" name="myfile"></Field>
                </div>
                <div >
                <Button type="submit" colorScheme='teal' variant='solid'>
    Submit
  </Button>
                    </div>
            </Form>
        </Formik>
    </div>
  )
}

export default MyForm