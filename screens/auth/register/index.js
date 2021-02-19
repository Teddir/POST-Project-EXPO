import  React, { useRef, useState, useCallback } from 'react';
import { Text, View, StyleSheet, SafeAreaView,  } from 'react-native';
import { Button, TextInput, HelperText, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingRegister from '../../../images/landing-register';
import axios from 'axios';
import { useSnackbar } from '../../../components/SnackbarProvider';
import { useSelector, useDispatch } from 'react-redux';

function index() {
  
  const navigation = useNavigation();
  const scroll = useRef();
  const [errors, setErrors] = useState(null);
  const [pass, setPass] =useState(true);
  const [passIcon, setPassIcon] = useState("eye-off");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [disable, setDisable] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // const validate = async () => {
  //   let newErrros = {}

  //   if (!data.name) {
  //     newErrros.name = "Nama bisnis wajib diisi"; 
  //   } else if (data.name.length < 5) {
  //     newErrros.email = "Nama bisnis minimal 5 karakter";
  //   } 
    
  //   if (!data.email) {
  //     newErrros.email = "Email wajib diisi";
  //   }  
    
  //   if (!data.password) {
  //     newErrros.password = "Password wajib diisi";
  //   } else if (data.password.length > 8) {
  //     newErrros.email = "Password minimal 8 karakter";
  //   } 
    
  //   if (!data.password_confirmation) {
  //     newErrros.password_confirmation = "Password confirmation wajib diisi";
  //   } else if (!data.password_confirmation !== data.password) {
  //     newErrros.password_confirmation = "Password wajib sama";
  //   }

  //   return newErrros;
  // }


  // const state = useSelector((state)=> state);
  
  const action = useDispatch();
  const submit = async () => {
      action({ type:"ADD_DATA", payload:{
        name, 
        email, 
        password,
        role:'Nasabah',
        password_confirmation,
      }})

      navigation.navigate("AuthPhone");


  }

  // const submit = async () => {
      // const urlq = 'https://mr-trash.herokuapp.com/api/'
  //     const data = {
  //       name,
  //       email,
  //       password,
  //       password_confirmation,
  //       role:"nasabah",
  //     }
      // const bebas = new FormData();
      // for (var key in data) {
      //     bebas.append(key, data[key]);
      // }
      // axios({
      //   method: 'Post',
      //   url: urlq + "register",
      //   data: bebas
      // })

  //     .then(res => {
  //       AsyncStorage.setItem('id', res.data.user.id.toString())
  //       console.log("POST RESPONSE: ", res.data.token);
  //   })
  //     .catch(e => {console.log('respones: ', e)});
  //     navigation.navigate("AuthPhone");
  //     // showSnackbar({ message: "Rekening berhasil disimpan!" })
  // }

  const showHiddenPassword = async () => {
    if (pass == false) {
        setPass(true);
        setPassIcon("eye-off");
    }

    if (pass == true) {
        setPass(false);
        setPassIcon("eye");
    }

  }
  return ( 
    <SafeAreaView style={styles.container}>

      <View style={styles.pageImgWrap}>
        <LandingRegister/>
      </View>

        <View style={styles.actionContainer}>

            <View style={styles.inputCon}>
              <TextInput
              left={<TextInput.Icon style={{ marginRight: 10, }} size={20} name="book" color="#00003050" />}
              label="Nama Bisnis"
              mode="outlined"
              textAlign="center"
              value={name}
              // error={validate}
              onChangeText={ (value) => {setName(value)}}
              />
               <HelperText>{"Contoh : Wadidaw Club"}</HelperText>

              <TextInput
              left={<TextInput.Icon style={{ marginRight: 10, }} size={20} name="email" color="#00003050" />}
              // error={error}
              label="Email"
              keyboardType="email-address"
              mode="outlined"
              textAlign="center"
              value={email}
              onChangeText={(value) => {setEmail(value)}}
              />
              <HelperText>{"Contoh : Wadidaw@gmail.com"}</HelperText>
              
              <TextInput
              left={<TextInput.Icon style={{ marginRight: 10, }} size={20} name="lock" color="#00003050" />}
              right={<TextInput.Icon style={{ marginRight: 10, }} size={20} name={passIcon} onPress={showHiddenPassword} color="#00003050" />}
              // error={error}
              style={{marginBottom:15,}}
              label="Password"
              mode="outlined"
              textAlign="center"
              secureTextEntry={pass}
              value={password}
              onChangeText={(value) => {setPassword(value)}}
              />
              {/* <HelperText>{"Contoh : Eva Kurnia"}</HelperText> */}

              <TextInput
              left={<TextInput.Icon style={{ marginRight: 10, }} size={20} name="lock" color="#00003050" />}
              right={<TextInput.Icon style={{ marginRight: 10, }} size={20} name={passIcon} onPress={showHiddenPassword} color="#00003050" />}
              // error={error}
              label="Password Confirmation"
              mode="outlined"
              textAlign="center"
              secureTextEntry={pass}
              disabled={!password}
              value={password_confirmation}
              onChangeText={(value) => {setpassword_confirmation(value)}}
              />
              {/* <HelperText>{"Contoh : Eva Kurnia"}</HelperText> */}
          </View>
          <View style={styles.container2}>
            <Button
            mode="contained"
            color="#F2F2F2"
            style={styles.button}
            labelStyle={{ color: '#000000' }}
            contentStyle={styles.btnSize}
            disabled={submitting}
            loading={submitting}
            onPress={submit}
            >
              Lanjut
            </Button>
          </View>


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
    flex: 1,
    justifyContent: "center",
    margin: 25
  },
  inputCon: {
    marginTop: 30,
  },
  pageImage: {
    width: 154,
    height: 135,
  },
  button: {
    backgroundColor: "#EBC26B",
    top: 80
  },
  btnSize: {
    width: 340,
    height: 47,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageImgWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})

export default index
