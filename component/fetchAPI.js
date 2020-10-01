import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FetchAPI(props) {
    const [showText, setShowText] = useState("");
    const show =()=>setShowText(props.type)
    return (
        <View style={styles.container}>
            <Text style={styles.rewText}>{showText}</Text>
            <Button title="SHOWS" onPress={show}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    simsan: {
        backgroundColor: 'blue',
        padding: "100px",
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
    rewText: {
        color: "green"
    }

});
