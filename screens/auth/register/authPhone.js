import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View,  } from 'react-native'
import { HelperText, TextInput, Button, Title } from 'react-native-paper'
// import { Icon } from 'react-native-vector-icons/SimpleLineIcons';
import LandingAuthPhone from '../../../images/landing-authPhone';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function authPhone() {
    const [id, setId] = useState("");
    const state = useSelector((state) => state);
    const [phone_number, setPhone_number] = useState("");

  const submit = async () => {
    const urlq = "https://mr-trash.herokuapp.com/api/";
    const data = { 
      ...state,
      phone_number,
    }

    // axios.post(urlq + "register", JSON.stringify(data))
    const bebas = new FormData();
      for (var key in data) {
          bebas.append(key, data[key]);
      }
      console.log(bebas);
    axios({
      method: 'Post',
      url: urlq + "register",
      data: bebas
    })
    // fetch(urlq + "register", {method: "Post", body: bebas})
    .then(res => res.json())
    .then(log => {console.log("log :", log)})
    .catch((e) => {console.log('Error: ', e)})
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <LandingAuthPhone />
      </View>
      <View style={styles.actionContainer}>

        <View style={styles.inputCon}>
          <TextInput
          mode="outlined"
          label="no.Hp"
          textAlign="center"
          placeholder="08906867"
          keyboardType="Phone-pad"
          value={phone_number}
          onChangeText={value => {setPhone_number(value)}}
          />
        <HelperText/>
        </View>
        
        <View style={styles.container2}>
            <Button
            mode="contained"
            color="#F2F2F2"
            style={styles.button}
            labelStyle={{ color: '#000000' }}
            contentStyle={styles.btnSize}
            onPress={submit}
            >
              Lanjut
            </Button>
        </View>
      </View>
      <View
        style={styles.title}
      >
        <TextInput.Icon name="lock" color="#000" style={{ justifyContent: "center" }} size={20} />
        <Title 
        style={styles.title1}
        >
        Kami akan menjaga kerahasian informasi dan data pribadimu. Dengan
        mendaftar, saya menyetujui syarat dan ketentuan dan kebijakan privasi
        POST.Q
        </Title>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  actionContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  inputCon: {
    margin: 30,
  },img: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 30,
  },
  container2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#EBC26B",
    justifyContent: "center",
    alignItems: 'flex-end',
    top: 10,
  },
  btnSize: {
    width: 340,
    height: 47,
  },
  title: {
    marginTop: 40,
    margin: 10,
    flex: 1,
    alignItems: "center"
  },
  title1: {
    fontSize: 12,
    marginTop: 40,
    margin: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
})
