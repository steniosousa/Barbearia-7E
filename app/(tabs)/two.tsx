import { Button, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import BarberCalendar from '../../components/calendar';
import RNPickerSelect from 'react-native-picker-select';

import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function TabTwoScreen() {
  const [fontsLoaded] = useFonts({
    'Josefin-Sans': require('../../assets/fonts/static/JosefinSans-Bold.ttf'),
  });
  const [selectedValue, setSelectedValue] = useState('Buscar Serviço');
  const pickerItems = [
    { label: 'Buscar Serviço', value: 'Buscar Serviço' },
    { label: 'Corte social', value: 'Corte social' },
  ];
  return (
    <View style={styles.container}>

      <View style={styles.calendar}>
        <BarberCalendar />
      </View>
      <View style={styles.Hors}>
        <Text style={styles.Title}>Serviços:</Text>
        <RNPickerSelect
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          items={pickerItems}
          style={pickerSelectStyles}
          value={selectedValue}
        />
      </View>
      <TouchableOpacity style={styles.buttonSend}>
        <Text style={styles.textButtonSend}>Marcar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  cardBackground: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  },
  cardContent: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  serviceName: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,


  },
  serviceValue: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  stars: {
    backgroundColor: 'grey',
    height: 30,
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  calendar: {
    width: '100%'
  },
  Hors: {
    backgroundColor: '#8a8887',
    width: '100%',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    margin: 10,
  },
  Title: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    fontStyle: 'italic',
  },
  availableTime: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    margin: 5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'red'

  },
  buttonSend: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButtonSend: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Josefin-Sans',
    fontWeight: '700'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'white',
    alignSelf: 'center'
  },
  inputAndroid: {
    width: '100%',
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'white',
    alignSelf: 'center'
  },
});
