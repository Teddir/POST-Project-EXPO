import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ChangeToken } from '../../../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

function index() {

    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

  const handSubmit = () => {
      const input = { 
        email: email,
        password: password, 
      }
      console.log(input);
      
      axios
      .post("https://mr-trash.herokuapp.com/api/login", input)
      // .then(res => {dispatch(ChangeToken(res.data.token))})
      .then(res => {console.log("Respones: ", res)})
      .catch(e => {console.log("Error: ", e)})

  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>

        <View style={styles.inputText}>
            <TextInput 
                mode="outlined"
                label="Email / No.Hp"
                textAlign="center"
                value={email}
                onChangeText={value => {setEmail(value)}}
                style={{marginBottom: 12,}}
            />
            <TextInput 
                mode="outlined"
                label="Password"
                textAlign="center"
                value={password}
                onChangeText={value => {setPassword(value)}}
            />
            <Text 
              style={styles.btnForget}
              onPress={() => {navigation.navigate("ForgetPass")}}
              >
              Lupa Password
              </Text>
        </View>
        <View style={styles.buttonGo}>
          <Button
          mode="contained"
          color="#F2F2F2"
          style={styles.button}
          labelStyle={{ color: '#000000' }}
          contentStyle={styles.btnSize}
          onPress={handSubmit}
          >
            Masuk
          </Button>
        </View>
      
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    top: 40,
  },
  inputText: {
    margin: 50,
    justifyContent: "flex-start"
  },
  button: {
    backgroundColor: "#EBC26B",
    top: 100
  },
  btnSize: {
    width: 340,
    height: 47,
  },
  buttonGo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnForget: {
    marginTop: 12,
    color: "blue"
  }
})

export default index
