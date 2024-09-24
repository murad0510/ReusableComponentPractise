import React from 'react'
import { View,StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

const SignUpAndPasswordButton = () => {
  return (
    <View style={{flex:1}}>
        <CustomButton title='Sign Up'textStyle={styles.signUptextStyle} buttonStyles={styles.signUpButton}></CustomButton>
        <CustomButton title='Forget your password?'textStyle={styles.forgetPasswordText} buttonStyles={styles.forgetPassword}></CustomButton>
    </View>
  )
}

const styles=StyleSheet.create({
    signUpButton:{
        borderRadius:30,
        backgroundColor:"#51a96a",
        color:"white",
        width:"50%",
        marginLeft:"27%",
        marginBottom:30
    },
    forgetPassword:{
        width:"50%",
        marginLeft:"27%",
    },
    signUptextStyle:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        paddingVertical:10
    },
    forgetPasswordText:{
        textAlign:"center",
        color:"#51a96a",
        fontSize:20,
        paddingVertical:10
    }
})

export default SignUpAndPasswordButton