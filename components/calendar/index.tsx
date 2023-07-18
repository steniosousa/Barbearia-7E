import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const BarberCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    // Simulação de dados para os horários disponíveis
    const availableTimesData = {
        '2023-07-18': ['10:00', '11:00', '15:00', '18:00', '20:00'],
        // Adicione mais datas e horários disponíveis aqui...
    };

    useEffect(() => {
        // Ao selecionar uma data, atualiza os horários disponíveis
        if (selectedDate) {
            setAvailableTimes(availableTimesData[selectedDate] || []);
        }
    }, [selectedDate]);

    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
    };

    const disabledDates = {
        '2023-07-20': { disabled: true, disableTouchEvent: true }, // Desabilita o dia 20 de julho de 2023
        '2023-07-25': { disabled: true, disableTouchEvent: true }, // Desabilita o dia 25 de julho de 2023
        // Adicione mais datas desabilitadas conforme necessário...
    };

    const markedDates = {};

    // Adiciona estilo personalizado para datas desabilitadas
    Object.keys(disabledDates).forEach((date) => {
        markedDates[date] = { ...disabledDates[date], textColor: 'red' };
    });

    function marker(datas) {
        console.log(datas)
    }
    return (
        <ScrollView>

            <Calendar
                onDayPress={handleDateSelect}
                markedDates={{ [selectedDate]: { selected: true } }}
                markedDates={markedDates}
                style={styles.calendar}
            />

            <Text style={styles.Title}>Horários:</Text>
            <View style={styles.availableTimesContainer}>
                {availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                        <TouchableOpacity key={time} onPress={() => marker(time)}>

                            <Text style={styles.availableTime}>
                                {time}hrs
                            </Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={{ color: 'white' }}>Nenhum horário disponível para esta data.</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '200%',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    calendar: {
        width: '100%'
    },
    availableTimesContainer: {
        marginTop: 20,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        flexWrap: 'wrap'
    },
    Title: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
        backgroundColor: 'red',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
    },
    availableTime: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
        margin: 5,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 25,
        paddingRight: 25,
    },
});

export default BarberCalendar;
