import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    service: string;
    value: number;
    backgroundImage: any;
}
const BarberServiceCard: React.FC<Props> = ({ service, value, backgroundImage }) => {
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../assets/fonts/Roboto-Italic.ttf'), // Adicione a fonte "Roboto-Bold.ttf" aqui
    });

    if (!fontsLoaded) {
        // Pode retornar um componente de placeholder ou null enquanto as fontes são carregadas
        return null;
    }
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.cardBackground} >
                <View style={styles.cardContent}>
                    <Text style={styles.serviceName}>{service}</Text>
                    <Text style={styles.serviceValue}>R$ {value}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    cardBackground: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    cardContent: {
        backgroundColor: 'rgba(12, 6, 6, 0.473)',
        padding: 20,
        borderRadius: 10,
        width: '70%',
        position: 'absolute',
        right: -10,
        bottom: 10,

    },
    serviceName: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontFamily: 'Roboto-Bold',


    },
    serviceValue: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default BarberServiceCard;
