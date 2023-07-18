import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, Platform, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import CardsPerfil from '../components/cardsPerfil';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  const colorScheme = useColorScheme();
  return (
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
    </View>
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
});
