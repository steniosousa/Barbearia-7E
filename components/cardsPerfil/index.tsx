import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

export default function CardsPerfil() {
    return (
        <View style={styles.card}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text>Serviço: Corte de cabelo x</Text>
            <View style={styles.details}>
                <Text>Data: 22/05/2023 ás 18:00 hrs</Text>
                <Text>Valor: R$: 20,00</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        alignItems: 'flex-start',
        height: 20,
        gap: 5,
        marginLeft: 20,
    },
    details: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
})