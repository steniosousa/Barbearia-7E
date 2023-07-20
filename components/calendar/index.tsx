import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RNPickerSelect from 'react-native-picker-select';
const BarberCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    const availableTimesData = {
        '2023-07-18': ['10:00', '11:00', '15:00', '18:00', '20:00'],
        '2023-07-19': ['10:00', '11:00', '15:00', '18:00', '20:00'],
    };
    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
    };

    const disabledDates = {
        '2023-07-20': { disabled: true, disableTouchEvent: true }, // Desabilita o dia 20 de julho de 2023
        '2023-07-25': { disabled: true, disableTouchEvent: true },
        // Adicione mais datas desabilitadas conforme necessário...
    };

    const markedDates = {};
    // Adiciona estilo personalizado para datas desabilitadas
    Object.keys(disabledDates).forEach((date) => {
        markedDates[date] = { ...disabledDates[date], selected: false, };
    });

    function marker(datas) {
        console.log(datas)
    }




    useEffect(() => {
        if (selectedDate) {
            setAvailableTimes(availableTimesData[selectedDate] || []);
        }
    }, [selectedDate]);

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setAvailableTimes(availableTimesData[formattedDate] || []);
    }, [])




    const [selectedValue, setSelectedValue] = useState('Buscar especialidade');
    const pickerItems = [
        { label: 'Buscar especialidade', value: 'Buscar especialidade' },
        { label: 'Opção 1', value: 'option1' },
    ];

    return (
        <View >

            <Calendar
                onDayPress={handleDateSelect}
                markedDates={markedDates}
                style={styles.calendar}
            />

            {availableTimes.length > 0 ? (
                <View style={styles.Hors}>
                    <Text style={styles.Title}>Horários:</Text>
                    <RNPickerSelect
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        items={availableTimes.map((time) => ({ label: time, value: time }))} // Converte os horários em objetos { label, value } para o Picker
                        style={pickerSelectStyles}
                        value={selectedValue}
                    />
                </View>
            ) : (
                <Text style={{ color: 'white', alignSelf: 'center', margin: 10 }}>Nenhum horário disponível para esta data.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '200%',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    calendar: {
        width: '100%',
    },
    Hors: {
        backgroundColor: '#8a8887',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
        marginTop: 10,
    },
    Title: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
        fontStyle: 'italic',
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
        backgroundColor: 'red'

    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: '100%',
        height: 40,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: 'white',
        alignSelf: 'center'
    },
    inputAndroid: {
        width: '100%',
        height: 40,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: 'white',
        alignSelf: 'center'
    },
});
export default BarberCalendar;
