import React, { useState } from 'react'
import { Button, TextInput, View, ViewStyle } from 'react-native'

interface Props{
    placeholder:string,
    hidenEntry:boolean,
    showButton:boolean,
    textInputStyles:ViewStyle,
}


const CustomTextInput:React.FC<Props> = ({placeholder,hidenEntry,showButton,textInputStyles}) => {

  const [isHidden, setIsHidden] = useState(false);
  const handleShowOrHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
      <TextInput
        id='textInput'
        style={textInputStyles}
        placeholder={placeholder}
        secureTextEntry={isHidden}
        placeholderTextColor={"#bcbcc2"}
      />
      {
        showButton && (
            <Button title={hidenEntry ? "Hide" : "Show"} onPress={handleShowOrHide}/>
        )
      }

    </View>
  )
}

export default CustomTextInput