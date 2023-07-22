import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RNPickerSelect from 'react-native-picker-select';
import { Text } from '../Themed';
import { CheckBox } from 'react-native-elements';

type formObjCalendarMarker = {
    disabled: boolean,
    disableTouchEvent: boolean,
    selected: boolean
}
const BarberCalendarAdmin = () => {
    const [selectedValue, setSelectedValue] = useState('Buscar especialidade');
    const [disabledAndMarkedDates, setDisabledAndMarkedDates] = useState<
        Record<string, formObjCalendarMarker>
    >({});
    const [datesMarkedForSave, setDatesMarkedForSave] = useState<string[]>([])
    const [appointments, setAppointments] = useState<string[]>([])
    const markedDates: any = {};

    const availableTimes = [
        { id: '1', time: '07:00' },
        { id: '2', time: '08:00' },
        { id: '3', time: '09:00' },
        { id: '4', time: '10:00' },
        { id: '5', time: '11:00' },
        { id: '6', time: '12:00' },
        { id: '7', time: '13:00' },
        { id: '8', time: '14:00' },
        { id: '9', time: '15:00' },
        { id: '10', time: '16:00' },
        { id: '11', time: '17:00' },
        { id: '12', time: '18:00' },
        { id: '13', time: '19:00' },
        { id: '14', time: '20:00' },
        { id: '15', time: '21:00' },
        { id: '16', time: '22:00' },
        { id: '17', time: '23:00' },
        { id: '18', time: '24:00' },
    ];



    const addDateEntry = (dateString: string) => {
        if (disabledAndMarkedDates.hasOwnProperty(dateString)) {
            const updatedDates = { ...disabledAndMarkedDates };
            delete updatedDates[dateString];
            setDisabledAndMarkedDates(updatedDates);
            return
        }
        const newEntry: formObjCalendarMarker = {
            disabled: false,
            disableTouchEvent: false,
            selected: true,
        };

        setDisabledAndMarkedDates((prevDates) => ({
            ...prevDates,
            [dateString]: newEntry,
        }));
    };

    Object.keys(disabledAndMarkedDates).forEach((date) => {

        markedDates[date] = { ...disabledAndMarkedDates[date] }
    });

    const handleDateSelect = (date: any) => {
        addDateEntry(date.dateString);
    };


    function handleTimeSelect(time: string) {
        const filter = appointments.find((item) => time == item)
        if (filter && filter.length > 0) {
            const deleteEqual = appointments.filter((item) => time != item)
            setAppointments(deleteEqual)
            return

        }
        setAppointments([...appointments, time])


        const datasForTimes = [
            datesMarkedForSave,
            appointments
        ]


    }
    useEffect(() => {
        const datesList = Object.keys(disabledAndMarkedDates);
        setDatesMarkedForSave(datesList)
    }, [disabledAndMarkedDates]);

    return (
        <View style={styles.container}>
            <Text style={styles.titles}>~ Criar agenda ~ </Text>
            <Calendar
                onDayPress={handleDateSelect}
                markedDates={markedDates}
                style={styles.calendar}
            />
            {datesMarkedForSave[0] ? (
                <FlatList
                    style={styles.flastList}
                    data={availableTimes}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <CheckBox
                            key={item.id}
                            title={item.time}
                            checked={appointments.includes(item.time) ? true : false}
                            onPress={() => handleTimeSelect(item.time)}
                            containerStyle={styles.checkboxContainer}
                            checkedColor="#008080"
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />

            ) : null}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    titles: {
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 5,
        fontStyle: 'italic'
    },
    calendar: {
        width: '100%',
    },

    viewFlastList: {
        width: '100%',
    },
    flastList: {
        backgroundColor: 'white',
        borderWidth: 0,
        padding: 0,
        margin: 0,
    },
    checkboxContainer: {
        width: '30%',
        fontSize: 16,
    },
});

export default BarberCalendarAdmin;
