import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Title,Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function index() {


  return ( <SafeAreaView style={styles.container}>
    <View style={styles.content}>
        <Icon name="wifi-off" size={50} />
        <Title style={styles.textCenter}>Internet Disconnect</Title>
        <Caption style={styles.textCenter}>Please Check your Internet or Kuota untuk dapat mengakses POSTQ App!!</Caption>
    </View>
  </SafeAreaView>)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDD"
  },
  conte: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14
  },
  textCenter: {
    textAlign: 'center'
  }
})
