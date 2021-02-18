import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import IconStaff from '../../../images/icon-staff';
import IconKasir from '../../../images/icon-kasir';
import axios from 'axios';

function index() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textHeader}>Selamat Datang</Text>
        <Text style={styles.textHeaderChild}>Untuk melanjutkan, pilih masuk sebagai:</Text>
      </View>

      <View style={styles.btn}>
        
          <Button icon={IconStaff}
          mode="contained"
          color="#EBC26B"
          style={styles.button}
          labelStyle={{ color: '#000000', fontSize: 15, fontWeight: "bold"}}
          contentStyle={styles.btnSize}
          buttonStyle={{ justifyContent: 'flex-start' }}
          onPress={() => {navigation.navigate("LoginStaff")}}
            > 
            Staff / Owner
          </Button>

          <View style={{alignItems:"center"}}>
              <Text>Atau</Text>
          </View>

          <Button 
          icon={IconKasir}
          mode="contained"
          color="#EBC26B"
          style={styles.button}
          labelStyle={{ color: '#000000', fontSize: 15, textAlign:"right", fontWeight: "bold"}}
          contentStyle={styles.btnSize}
          onPress={() => {navigation.navigate("LoginKasir")}}
            > Kasir
          </Button>

          <Text style={styles.textHeaderChild}>Belum punya Akun ?  
            <Text 
            style={styles.textHeaderChild1}
            onPress={() => {navigation.navigate("Register")}}
            > Daftar Akun </Text>
          </Text>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: "center",
  },
  header: {
    margin: 10,
  },
  textHeader: {
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 12,
    fontWeight: "bold"
  },
  textHeaderChild: {
    fontSize: 12,
  },
  textHeaderChild1: {
    color: "blue",
  },
  btn: {
    flex: 1,
  },
  button: {
    margin: 14,
    
  },
  btnSize: {
    height: 50,
    margin: 13,
  }
})

export default index
