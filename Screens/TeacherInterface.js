import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import Colors from '../Constants/colors'

const TeacherInterface = props => {

    const testPress = () => {
        Alert.alert('was pressed')
        console.log('was pressed')
    }
    return (
        <View style={styles.container}>
            <View style={styles.parallel}>
                <TouchableOpacity style={styles.btn1} onPress={testPress}>
                    <Text style={styles.font}>Take/Update Attendance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.font}>Attendance Summaries</Text>
                </TouchableOpacity>    
            </View>

            <View style={styles.parallel}>
                <TouchableOpacity style={styles.btn3} onPress={testPress}>
                    <Text style={styles.font}>Bus Attendance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn4}>
                    <Text style={styles.font}>Communication Center</Text>
                </TouchableOpacity>    
            </View>

            <View style={styles.parallel}>
                <TouchableOpacity style={styles.btn5} onPress={testPress}>
                    <Text style={styles.font}>Homework</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn6}>
                    <Text style={styles.font}>Online Classes</Text>
                </TouchableOpacity>    
            </View>

            <View style={styles.parallel}>
                <TouchableOpacity style={styles.btn7} onPress={testPress}>
                    <Text style={styles.font}>Test/Exam Management</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn8}>
                    <Text style={styles.font}>Set My Subjects</Text>
                </TouchableOpacity>    
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

    parallel: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 100
    },

    btn1: {
        backgroundColor: '#FFCDD2',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    btn2: {
        backgroundColor: '#F8BBD0',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn3: {
        backgroundColor: '#CE93D8',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn4: {
        backgroundColor: '#B39DDB',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn5: {
        backgroundColor: '#BBDEFB',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn6: {
        backgroundColor: '#90CAF9',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },

    btn7: {
        backgroundColor: '#81D4FA',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },

    btn8: {
        backgroundColor: '#80DEEA',
        width: '45%',
        margin: 5,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    font: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'

    }
})

export default TeacherInterface