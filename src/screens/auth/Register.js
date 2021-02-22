import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonView from '../../../components/ButtonView';
import InputView from '../../../components/InputView';
import {colors, styles} from '../../style/styles';
import { register } from '../../service/EndPoint/autServices';
import LandingRegister from '../../../images/landing-register';


const Register = (props) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [phone_number, setPhone_number] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);

  const onClickRegister = () => {
    if (name && email && password && phone_number ) {
      setLoading(true);
      register(name, email, password)
      .then((res) => 
        res.code === 201
        ? props.navigation.goBack()
        : ToastAndroid.show('Gagal Mendaftar', ToastAndroid.LONG),
      )
      .catch((e) => ToastAndroid.show(JSON.stringify(e), ToastAndroid.LONG))
      .finally(() => setLoading(false));
      
    }
  }

  return (
    <View style={[styles.backgroundUtama, styles.flex1, styles.centercenter]}>
      <ScrollView>

        <View style={[styles.container]}>
          <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
            <Icon name="chevron-left" size={24} color={colors.secondary} />
          </TouchableWithoutFeedback>
        </View>

        <View style={[styles.marginVM]} />
        <View
          style={[
            styles.row,
            styles.centercenter,
            styles.marginVS,
            styles.marginHM,
          ]}>
          <LandingRegister width={52} height={52}/>
            <View style={[styles.flex1, styles.marginHS, styles.centercenter]}>
              <Text style={[styles.textH2, styles.textPrimary]}>
                Buat Akun POSTQ
              </Text>
              <Text>Jadilah bagian dari kami</Text>
            </View>
          </View>

          <View style={[styles.marginVS, styles.marginHM]}>
            <Text>Nama Bisnis</Text>
            <InputView 
              placeholder="Masukan Nama Bisnis "
              onChangeText={(n) => setName(n)}
            />
          </View>

          <View style={[styles.marginVS, styles.marginHM]}>
            <Text>Email</Text>
            <InputView 
              placeholder="Masukan Email "
              onChangeText={(e) => setEmail(e)}
            />
          </View>

          <View style={[styles.marginVS, styles.marginHM]}>
            <Text>No Hp</Text>
            <InputView 
              placeholder="Masukan Namer Hp "
              onChangeText={(p) => setPhone_number(p)}
            />
          </View>

          <View style={[styles.marginVS, styles.marginHM]}>
            <Text>Password</Text>
            <InputView 
              placeholder="Masukan Password "
              name={secure ? 'eye-off' : 'eye'}
              secure={secure}
              onIconPress={() => setSecure(false)}
              onChangeText={(b) => setPassword(b)}
            />
          </View>
          <View style={[styles.marginVS, styles.marginHM]}>
          <ButtonView 
          title="Mendaftar"
          dark
          loading={loading}
          onPress={() => {navigation.navigate("AuthPhone")}}
          />
          </View>
      </ScrollView>
    </View>
  )
}

export default Register
