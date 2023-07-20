import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useMemo } from "react";
export default function SingIn() {
    const colorScheme = useColorScheme();
    const Inputs = useMemo(() => {
        return StyleSheet.create({
            viewInputs: {
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                borderBottomWidth: 1,
                height: 40,

                borderBottomColor: colorScheme === 'dark' ? 'white' : 'black',
            },
            textInput: {
                width: "70%",
                marginLeft: 5,
                color: colorScheme === 'dark' ? 'white' : 'black',
            },
            forgot: {
                alignSelf: 'flex-end',
                color: colorScheme === 'dark' ? 'white' : 'black',
                marginTop: '1%',
                marginBottom: '1%'
            },
            textWelcome: {
                color: colorScheme === 'dark' ? 'white' : 'black',
            },
        })
    }, [colorScheme])
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <View style={styles.container}>
                <View style={styles.viewWelcome}>
                    <Text style={Inputs.textWelcome}>Bem vindo(a) à 7E~</Text>
                </View>
                <View style={Inputs.viewInputs}>
                    {colorScheme === 'dark' ? (
                        <Entypo name="email" size={15} color="white" />

                    ) : (
                        <Entypo name="email" size={15} color="black" />

                    )}
                    <TextInput
                        placeholder="Digite o email"
                        value={'Email:'}
                        style={Inputs.textInput}
                    />
                </View>
                <View style={Inputs.viewInputs}>
                    {colorScheme === 'dark' ? (
                        <AntDesign name="lock1" size={17} color="white" />

                    ) : (
                        <AntDesign name="lock1" size={17} color="black" />
                    )}
                    <TextInput
                        placeholder="Digite o email"
                        value={'Senha:'}
                        style={Inputs.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.buttonForgot}>
                    <Text style={Inputs.forgot}>
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
        </ThemeProvider>
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



    buttonForgot: {
        width: '75%'
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