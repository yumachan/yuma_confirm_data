import React, { Component } from 'react' 
import Formuserdetail from './Formuserdetail';
import Formpersonaldetail from './Formpersonaldetail';
import Confirm from './Comfirm';
import Success from './Success'
//ここにはimportしたいものを書く。ここ書かないとエラーになる。

export class UserForm extends Component {　//子はUserformで親はcomponent

    state ={  //これを書いていくよ！という感じで''の中に何もないのはそこはユーザーが記入していくから
        step:1,
        firstname:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    //proceed to next step　これはステップ一個進むよ、っていう関数
    nextStep =() =>{　//アロー関数
        const {step} =this.state;
        this.setState({
            step: step + 1
        })
    }

    //Go to previous step これはステップ一個戻るよ、っていう関数
    prevStep = () =>{
        const {step} =this.state;
        this.setState({
            step: step  - 1
        })
    }
    handleChange = input => e =>{　//これなに？？
    this.setState({[input]:e.target.value})
    }


  render() {　// 返す
      const {step} =this.state;　
      const {firstName , lastName , email ,occupation ,city , bio } = this.state;　//firstnameとかをthis.stateと定義
      const values = {firstName , lastName , email ,occupation , city , bio}　//valueをfirstnameとかと定義
      switch (step){//ifと同じ条件分岐
          case 1:　  //もしcase1にあてはまったら次に進む         
              return (
                  <Formuserdetail nextStep ={this.nextStep} handleChange={this.handleChange} values ={values}/>
              )
          case 2:　//もしcase2にあてはまったら前に戻る
                return (
                    <Formpersonaldetail prevStep ={this.prevStep} nextStep ={this.nextStep} handleChange={this.handleChange} values ={values}/>
                )   
                  
         
          case 3:　//もしcase3にあてはまったら確認画面に進む
                return (
                    <Confirm prevStep ={this.prevStep} nextStep ={this.nextStep} values ={values}/>
                )        
          
                     
          case 4:　//もしcase4にあてはまったら成功
                return (
                    <Success />
                )             
       

      }
    }
}


export default UserForm　//最後はしっかりuserFormを出ること
