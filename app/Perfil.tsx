import { AntDesign } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import CardsPerfil from '../components/cardsPerfil';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  const colorScheme = useColorScheme();
  const buttonSingOut = useMemo(() => {
    return StyleSheet.create({
      ViewSingOut: {
        backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
        width: '100%',
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5

      },
      TextSingOut: {
        color: colorScheme === 'dark' ? 'black' : 'white',
        fontSize: 16
      },

    });
  }, [colorScheme]);
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

        <AntDesign name="user"
          size={60}
          color={Colors[colorScheme ?? 'light'].text}
          style={styles.photoUser}
        />
        <Text>Stênio Sousa Fonteles</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>faltam 3 serviços para 1 grátis</Text>
        <ScrollView>
          <CardsPerfil></CardsPerfil>
        </ScrollView>
        <SafeAreaView style={styles.buttonSingOut}>
          <TouchableOpacity style={buttonSingOut.ViewSingOut}>
            <Text style={buttonSingOut.TextSingOut}>Sair</Text>
          </TouchableOpacity>


        </SafeAreaView>
      </View>
    </ThemeProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  photoUser: {
    margin: 20,
    marginTop: 40,
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
  buttonSingOut: {
    width: '80%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },


});
