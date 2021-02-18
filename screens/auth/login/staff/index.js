import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


function index() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>

        <View style={styles.inputText}>
            <TextInput 
                mode="outlined"
                label="Email / No.Hp"
                textAlign="center"
                style={{marginBottom: 12,}}
            />
            <TextInput 
                mode="outlined"
                label="Password"
                textAlign="center"
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
          onPress={() => {}}
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
