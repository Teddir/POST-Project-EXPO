import { StyleSheet, Dimensions } from 'react-native';

export default widthScreen = Dimensions.get('screen').width;

export const colors = {
  primary: '#EBC26B',
  secondary: '#8C6500',
  tertiary: '#F1EA23',
  lightBg: '#FFFFFF',
  white: '#fff',
  lightGrey: '#fafafa',
  backRound: '#F2F2F2',
  grey: '#5f5f5f',
  black: '#000000',
  opacity: '#1f1f1f99'
}

export const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  backgroundUtama: {
    backgroundColor: colors.backRound
  },
  backgroundCadangan: {
    backgroundColor: colors.lightGrey
  },
  backgroundPrimary: {
    backgroundColor: colors.primary
  },
  backgroundSecondary: {
    backgroundColor: colors.secondary
  },
  backgroundOpacity: {
    backgroundColor: colors.opacity
  },
  backgroundWhite: {
    backgroundColor: colors.white
  },
  centercenter: {
    justifyContent: "center",
    alignContent: "center"
  },
  centerItem: {
    alignItems: "center"
  },
  textH1: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  textH2: {
    fontWeight: 'bold',
    fontSize: 24
  },
  textH3: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textUppercase: {textTransform: 'uppercase'},
  textPrimary: {color: colors.primary},
  textSecondary: {color: colors.secondary},
  textCenter: {
    textAlign: "center"
  },
  textInput: {
    borderRadius: 5,
    elevation: 3,
    height: 35,
    backgroundColor: colors.lightGrey,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    elevation: 5,
  },
  container: {
    padding: 30
  }, 
  mapContainer: {
    elevation: 3,
    width: widthScreen - 32,
    height: widthScreen - 32,
  },
  widthScreenBox: {
    height: widthScreen,
  },
  roundBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  lottieButton: {width: 19, height: 19},
  textMedium: {
    fontWeight: "700",
    fontSize: 12,
  },
  textWhite: {
    color: colors.white
  },
  marginHXL: {
    marginHorizontal: 42,
  },
  marginHL: {
    marginHorizontal: 100,
  },
  marginHM: {
    marginHorizontal: 25,
  },
  marginHS: {
    marginHorizontal: 8,
  },
  marginVM: {
    marginVertical: 16,
  },
  marginVXL: {
    marginVertical: 32,
  },
  marginVS: {
    marginVertical: 8,
  },

})