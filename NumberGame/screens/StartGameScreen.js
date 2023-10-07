import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({onConfirm}) => {
  const [enterdInput, setEnterdInput] = useState(""); // string because number-pad it's type string
  
  const handelEnterdNumber=(inputText)=>{
    setEnterdInput(inputText)
  }
  const handelResetInput=()=>{
    setEnterdInput("")
  }
  
  const confirmInputHandler=()=>{

    const chooseNumber = parseInt(enterdInput);

    if(isNaN(chooseNumber)|| chooseNumber<=0 || chooseNumber>99){
      Alert.alert("Invalid Number","Number must be between 1 and 99",[{
        text:"Okay",
        style:"destructive",
        onPress:handelResetInput
      }]);
      return;
    }
    onConfirm(chooseNumber)

  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="number-pad"
        style={styles.textInput}
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        value={enterdInput}
        onChangeText={handelEnterdNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.butonContainer}>
          <PrimaryButton onPress={handelResetInput}>Reset</PrimaryButton>
        </View>
 
        <View style={styles.butonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b021f",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  textInput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  butonContainer:{
    flex:1
  }
});

export default StartGameScreen;
