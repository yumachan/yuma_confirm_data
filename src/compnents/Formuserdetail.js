import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton' ;
//これら引用先？みたいなん記入はマストな

export class Formuserdetail extends Component { 
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
  render() {　//返す
      const { values , handleChange} = this.props　//constをthis.propsと定義した
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title = "Enter the User Details"/>　//barに表示されるもの
              <TextField
              hintText ="Enter your first name"　//カーソル近づけると表示される
              floatingLabelText ="First Name"　//常に表示されてる
              onChange = {handleChange('firstName')} //ユーザーが記入したときにおこるイベント
              defaultvalue ={values.firstName}/>
              <br/>
              <TextField
              hintText ="Enter your last name"
              floatingLabelText ="last Name"
              onChange = {handleChange('lastName')}
              defaultvalue ={values.lastName}/>
              <br/>
              <TextField
              hintText ="Enter your Email"
              floatingLabelText ="Email"
              onChange = {handleChange('Email')}
              defaultvalue ={values.Email}/>
              <br/>
              <RaisedButton 
              label ="Continue"
              primary ={true}
              style ={styles.button}
              onClick ={this.continue}/>
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles ={
    button:{
        margin: 15
    }
}


export default Formuserdetail
