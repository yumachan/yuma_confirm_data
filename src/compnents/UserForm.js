import React, { Component } from 'react'
import Formuserdetail from './Formuserdetail';
import Formpersonaldetail from './Formpersonaldetail';
import Confirm from './Comfirm';
import Success from './Success'

export class UserForm extends Component {

    state ={
        step:1,
        firstname:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    //proceed to next step
    nextStep =() =>{
        const {step} =this.state;
        this.setState({
            step: step + 1
        })
    }

    //Go to previous step
    prevStep = () =>{
        const {step} =this.state;
        this.setState({
            step: step  - 1
        })
    }
    handleChange = input => e =>{
    this.setState({[input]:e.target.value})
    }


  render() {
      const {step} =this.state;
      const {firstName , lastName , email ,occupation ,city , bio } = this.state;
      const values = {firstName , lastName , email ,occupation , city , bio}
      switch (step){
          case 1:
              return (
                  <Formuserdetail nextStep ={this.nextStep} handleChange={this.handleChange} values ={values}/>
              )
          case 2:
                return (
                    <Formpersonaldetail prevStep ={this.prevStep} nextStep ={this.nextStep} handleChange={this.handleChange} values ={values}/>
                )   
                  
         
          case 3:
                return (
                    <Confirm prevStep ={this.prevStep} nextStep ={this.nextStep} values ={values}/>
                )        
          
                     
          case 4:
                return (
                    <Success />
                )             
       

      }
    }
}


export default UserForm
