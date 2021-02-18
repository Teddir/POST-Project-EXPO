import React from 'react'
import { View, Text, StyleSheet,  } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

function index() {
  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <View style={styles.textHeader}>
          <Text style={styles.textHeader}>Dengan kode akses kasir, karyawan bisa masuk akun tanpa
            <Text> menggunakan email dan password owner.</Text>
          </Text>
        </View>

        <View style={styles.textHeader1}>

          <View style={{margin: 5,}}>
            <Text>Buat kode akses kasir dari akun owner pada  </Text>
            <Text style={{fontWeight:"bold"}}>Kelola Toko -> Kode Akses Kasir</Text>
          </View>
        </View>

        <TextInput
        mode="outlined"
        label="Kode Akses Kasir"
        keyboardType="phone-pad"
        />
        <View style={styles.btn}>
          <Button
          mode="contained"
          style={styles.button}
          labelStyle={{color: "#000000"}}
          contentStyle={styles.btnSize}
          onPress={() => {}}
          >
            Lanjut
          </Button>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  content: {
    top: 10,
    justifyContent: "center"
  },
  textHeader: {
    marginBottom: 5,
  },
  textHeader1: {
    borderRadius: 4,
    backgroundColor: "#FCFF7E",
    height: 50,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#EBC26B",
    top: 550
  },
  btnSize: {
    width: 340,
    height: 47,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default index
