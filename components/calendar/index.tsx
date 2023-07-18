import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const BarberCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    // Simulação de dados para os horários disponíveis
    const availableTimesData = {
        '2023-09-18': ['10:00', '11:00', '15:00'],
        '2023-09-02': ['12:00', '14:00', '17:00'],
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

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={handleDateSelect}
                markedDates={{ [selectedDate]: { selected: true } }}
                markedDates={markedDates}
                style={styles.calendar}
            />
            <View style={styles.availableTimesContainer}>
                {availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                        <Text key={time} style={styles.availableTime}>
                            {time}
                        </Text>
                    ))
                ) : (
                    <Text style={{ color: 'white' }}>Nenhum horário disponível para esta data.</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendar: {
        width: '100%'
    },
    availableTimesContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    availableTime: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    },
});

export default BarberCalendar;
