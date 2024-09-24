import React from 'react'
import { Pressable, View, ViewStyle ,Text, StyleSheet} from 'react-native'

interface Props{
    title:string,
    buttonStyles:ViewStyle,
    textStyle:ViewStyle
}

const CustomButton:React.FC<Props> = ({title,buttonStyles,textStyle}) => {
  return (
    <Pressable style={buttonStyles} onPress={()=>console.log("Clicked button")}>
        <Text style={textStyle}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton