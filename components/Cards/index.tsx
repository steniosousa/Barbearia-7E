import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    service: string;
    value: number;
    backgroundImage: any;
}

const BarberServiceCard: React.FC<Props> = ({ service, value, backgroundImage }) => {
    const [fontsLoaded] = useFonts({
        'Josefin-Sans': require('../../assets/fonts/static/JosefinSans-BoldItalic.ttf'),
    });

    if (!fontsLoaded) {
        // Pode retornar um componente de placeholder ou null enquanto as fontes são carregadas
        return null;
    }

    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.cardBackground}>
                <View style={styles.diagonalCut}></View>
                <View style={styles.shadowOverlay} />
                <LinearGradient
                    colors={['rgb(2, 0, 36)', 'rgba(0, 0, 0, 0.4906337535014006)', 'rgb(141, 142, 143)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.cardBackground}
                >
                    <View style={styles.cardContent}>
                        <Text style={styles.serviceName}>{service}</Text>
                        <View style={styles.ViewserviceValue}>
                            <Text style={styles.serviceValue}>R$ {value}</Text>
                            <View style={styles.line}></View>
                        </View>
                    </View>
                </LinearGradient>
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
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,

    },
    serviceName: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontFamily: 'Josefin-Sans',
        fontWeight: 'bold',
    },
    ViewserviceValue: {
        width: '100%',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: 'white'
    },
    serviceValue: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 30
    },
    shadowOverlay: {
        ...StyleSheet.absoluteFillObject,
        top: '50%',
        borderRadius: 10,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    shadowGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    diagonalCut: {
        position: 'absolute',
        top: -240,
        right: -240,
        width: 300,
        height: 300,
        backgroundColor: 'white',
        borderRightWidth: 200,
        borderTopWidth: 300,
        borderRightColor: 'transparent',
        borderTopColor: 'rgba(0, 0, 0, 0.7)',
        transform: [{ rotate: '50deg' }],
        zIndex: 1,
    },
});

export default BarberServiceCard;
