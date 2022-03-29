import React, { Component } from 'react';
import { View, StyleSheet, Text ,Dimensions} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height

const Profile = () => {

    return (
        <ScrollView style={styles.flex}>
            <View style={styles.card}>
            <View style={styles.formGroup}>
                    <TextInput style={styles.inputText} placeholder="Ad" />
                </View>
                <View style={styles.formGroup}>
                    <TextInput style={styles.inputText} placeholder="Soyad" />
                </View>
                <View style={styles.formGroup}>
                    <TextInput style={styles.inputText} placeholder="Email" />
                </View>
                <View style={styles.title}> 
                </View>
                <View style={styles.formGroup}>  
                    <TextInput style={styles.inputText} placeholder="Mevcut Şifreniz" />
                </View>
                <View style={styles.formGroup}> 
                    <TextInput style={styles.inputText} placeholder="Yeni Şifre" />
                </View>
                <View style={styles.formGroup}> 
                    <TextInput style={styles.inputText} placeholder="Yeni Şifre (Tekrar)" />
                </View>
                <View style={styles.formGroup}>
                    <TouchableOpacity style={styles.btn}
                    // onPress={() => this.profile_update()}
                    >
                        <Text>update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    card: {
        // marginHorizontal: 10,
        // marginVertical: 10,
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        backgroundColor: '#fff'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
        color: '#333'
    },
    formGroup: {
        marginHorizontal: widthScreen * 0.05,
        
        // marginVertical: heightScreen*0.01,

        // marginBottom: 20,
        // backgroundColor:"red"
    },
    title: {
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#C01C27',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 5
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Profile;