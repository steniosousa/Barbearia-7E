import { StyleSheet, Image, TextInput, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Text, View } from '../../components/Themed';

export default function RegisterServices() {
    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                style={styles.inputs}
                extraScrollHeight={Platform.select({ android: 100, ios: 10 })}>
                <View >
                    <Text>Serviço:</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View >
                    <Text>Valor:</Text>
                    <TextInput keyboardType="numeric" style={styles.input}></TextInput>
                </View>

                <View >
                    <Text>Foto(URL):</Text>
                    <TextInput placeholder={"URl:"} style={styles.input}></TextInput>
                </View>
                <TouchableOpacity style={styles.send}>
                    <Text>Enviar</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        borderRadius: 40,
    },
    inputs: {
        display: 'flex',
        width: '100%',
        marginLeft: 70,
        marginBottom: 100

    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 30,
        width: '80%',
        marginTop: 5,
        paddingLeft: 10,
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
    send: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'green',
        marginRight: 90,
        marginTop: 10,
        alignSelf: 'center'
    }
});
