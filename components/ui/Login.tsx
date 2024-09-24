import React from 'react'
import { StyleSheet, TextInput, View ,Text, Button} from 'react-native'
import CustomTextInput from './CustomTextInput'

function Login() {
  return (
    <View style={styles.mainView}>
        <Text style={styles.header}>Login</Text>
        <View>
            <CustomTextInput placeholder='Name' showButton={false} hidenEntry={false} textInputStyles={styles.input} />
            <CustomTextInput placeholder='Email' showButton={false} hidenEntry={false} textInputStyles={styles.input} />
            <CustomTextInput placeholder='Password' showButton={true} hidenEntry={false} textInputStyles={styles.input} />

            {/* <TextInput style={styles.input} placeholder='Name'  placeholderTextColor={"#bcbcc2"}></TextInput> */}
            {/* <TextInput style={styles.input} placeholder='Email' placeholderTextColor={"#bcbcc2"}></TextInput> */}
            {/* <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' placeholderTextColor={"#bcbcc2"}></TextInput> */}
            <View style={styles.loginButton}>
               <Button onPress={()=>console.log("clicked")} title="Login"></Button>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mainView:{
        marginVertical:130
    },
    header:{
        fontSize:30,
        margin:"auto",
        marginBottom:30
    },
    input:{
        borderRadius:4,
        borderColor:"#bcbcc2",
        borderWidth:2,
        width:400,
        fontSize:20,
        textAlign:"left",
        paddingLeft:20,
        height:40,
        marginBottom:10,
        marginLeft:40
    },
    loginButton:{
        width:400,
        height:40,
        borderRadius:4,
        borderWidth:2,
        borderColor:"#72a7f6",
        backgroundColor:"#2196f3",
        margin:"auto"
    }
})


export default Login
