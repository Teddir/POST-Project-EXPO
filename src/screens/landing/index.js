import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import LandingImageFirst from '../../../images/landing-image-first';
import { useNavigation } from '@react-navigation/native';

export default function index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>POSTQ 
        Berupa sebuah checkout counters dalam sebuah toko
        atau tempat usaha dimana transaksi penjualan terjadi.
        </Text>

        <View style={styles.container2}>
          <LandingImageFirst />
          <Button
          mode="contained"
          color="#EBC26B"
          style={styles.button}
          labelStyle={{ color: '#000000' }}
          contentStyle={styles.btnSize}
          onPress={() => {navigation.navigate("RegisterNew")}}
          >
            Daftar Akun
          </Button>
          <Button
          mode="contained"
          color="#F2F2F2"
          style={styles.button}
          labelStyle={{ color: '#8C6500' }}
          contentStyle={styles.btnSize}
          onPress={() => {navigation.navigate("Login")}}
          >
            Masuk
          </Button>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 12,
    margin: 20,
    marginTop: 56,
    textAlign: 'center'
  },
  button: {
    borderRadius: 5,
    marginBottom: 13,
    top: 200,
  },
  btnSize: {
    width: 340,
    height: 47,
  },
})
