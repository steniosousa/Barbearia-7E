import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";

type PropsSelect = {
    Value: String
}
export default function Select({ Value }: PropsSelect) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{Value}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
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