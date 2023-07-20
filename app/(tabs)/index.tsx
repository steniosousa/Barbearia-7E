
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import BarberServiceCard from '../../components/Cards';
import { View } from '../../components/Themed';
import RNPickerSelect from 'react-native-picker-select';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
export default function TabOneScreen() {
  const [selectedValue, setSelectedValue] = useState('Buscar especialidade');
  const pickerItems = [
    { label: 'Buscar especialidade', value: 'Buscar especialidade' },
    { label: 'Opção 1', value: 'option1' },
  ];
  const colorScheme = useColorScheme();
  const pickerSelectStyles = useMemo(() => {
    return StyleSheet.create({
      inputIOS: {
        width: '100%',
        height: 40,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: colorScheme === 'dark' ? 'white' : 'black',
        alignSelf: 'center',
      },
      inputAndroid: {
        width: '100%',
        height: 40,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: colorScheme === 'dark' ? 'white' : 'black',
        alignSelf: 'center',
      },
    });
  }, [colorScheme]);
  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>


        <View style={styles.selects}>

          <RNPickerSelect
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            items={pickerItems}
            style={pickerSelectStyles}

            value={selectedValue}
          />
        </View>

        <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
          <BarberServiceCard
            service="Corte de Cabelo"
            value={30}
            backgroundImage={require('../../assets/images/barbeiro.png')}
          />
          <BarberServiceCard
            service="Corte de barba"
            value={30}
            backgroundImage={require('../../assets/images/barba.jpg')}
          />
          <BarberServiceCard
            service="Corte de barba"
            value={30}
            backgroundImage={require('../../assets/images/corteX.jpg')}
          />
        </ScrollView>

      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  selects: {
    width: '90%',
    marginTop: 5,
  },
  home: {
    margin: 10,
    marginTop: 40,
    width: '100%'
  }
});

