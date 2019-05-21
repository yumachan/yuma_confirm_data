import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton' ;
//マストで書く引用の分

export class Formpersonaldetail extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }


  render() {
      const { values , handleChange} = this.props
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title = "Enter personal Details"/>
              <TextField
              hintText ="Enter your Occupation"
              floatingLabelText ="occupation"
              onChange = {handleChange('occupation')}
              defaultvalue ={values.occupation}/>
              <br/>
              <TextField
              hintText ="Enter your City"
              floatingLabelText ="City"
              onChange = {handleChange('city')}
              defaultvalue ={values.city}/>
              <br/>
              <TextField
              hintText ="Enter your Bio"
              floatingLabelText ="Bio"
              onChange = {handleChange('bio')}
              defaultvalue ={values.bio}/>
              <br/>
              <RaisedButton 
              label ="Continue"
              primary ={true}　//ボタンの色
              style ={styles.button}
              onClick ={this.continue}/>　//ボタンで続ける
              <RaisedButton 
              label ="back"
              primary ={false}　//ボタンの色
              style ={styles.button}
              onClick ={this.back}/>　//ボタンで前に戻る
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


export default Formpersonaldetail //しっかり最後はexportすること
