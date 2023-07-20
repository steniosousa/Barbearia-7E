import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function SingIn() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.viewWelcome}>
                    <Text style={styles.textWelcome}>Bem vindo(a) à 7E~</Text>
                </View>
                <View style={styles.viewInputs}>
                    <Entypo name="email" size={15} color="white" />
                    <TextInput
                        placeholder="Digite o email"
                        value={'Email:'}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.viewInputs}>
                    <AntDesign name="lock1" size={17} color="white" />
                    <TextInput
                        placeholder="Digite o email"
                        value={'Senha:'}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.buttonForgot}>
                    <Text style={styles.forgot}>
                        - Esqueceu a senha
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSingin}
                >
                    <Text style={styles.textSingin}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.textRegister}>Cadastrar</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewWelcome: {
        alignItems: 'flex-start',
        width: '75%',
        marginBottom: '2%',
    },
    textWelcome: {
        color: 'white'
    },

    viewInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        height: 40,
        borderBottomColor: 'white'
    },
    textInput: {
        width: "70%",
        marginLeft: 5,
        color: 'white'
    },
    buttonForgot: {
        width: '75%'
    },
    forgot: {
        alignSelf: 'flex-end',
        color: 'white',
        marginTop: '1%',
        marginBottom: '1%'
    },
    buttonSingin: {
        width: ' 30%',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: '5%',
        borderRadius: 10,
        backgroundColor: '#3498DB',
    },
    textSingin: {
        color: 'white'
    },
    buttonRegister: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: ' 30%',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 5

    },
    textRegister: {
        color: 'white'
    }
})