import React, { useState } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Button,
    TouchableOpacity, ImageBackground,
    TextInput,
} from 'react-native'
import logo from '../assets/bg.png';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');


    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (val.length === 0) {
            setEmailValidError('e-posta adresi girilmelidir');
        } else if (reg.test(val) === false) {
            setEmailValidError('geçerli bir e-posta adresi girin');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };
    return (

        <View style={styles.container}>


            <ImageBackground source={logo} resizeMode="cover" style={styles.image} >

                <View style={styles.content}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 36 }}>Register</Text>
                    <View style={{ marginBottom: "25%" }}></View>
                    <View>
                        <TextInput
                            style={[styles.input, styles.inputtext]}
                            placeholder="Ad"
                            placeholderTextColor="white"
                        />

                        <TextInput
                            style={[styles.input, styles.inputtext]}
                            placeholder="Soyad"
                            placeholderTextColor="white"
                        />

                        <TextInput
                            style={[styles.input, styles.inputtext]}
                            placeholder="E-Posta"
                            placeholderTextColor="white"
                            value={email}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={value => {
                                setEmail(value);
                                handleValidEmail(value);
                            }}

                        />


                        {emailValidError ? <Text>{emailValidError}</Text> : null}


                        <TextInput
                            style={[styles.input, styles.inputtext]}
                            secureTextEntry={true}
                            placeholder="Şifre"
                            placeholderTextColor="white"
                        />
                        <TextInput
                            style={[styles.input, styles.inputtext]}
                            secureTextEntry={true}
                            placeholder="Şifre Tekrar"
                            placeholderTextColor="white"
                        />
                    </View>


                    <TouchableOpacity
                        // onPress={() => navigation.navigate("Home")}

                        style={[styles.button, styles.buttonRegister]}>
                        <Text style={[styles.buttonText, styles.buttonRegisterText]}>
                            Kayıt Ol
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.footer}>
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}  > VEYA</Text>
                        <View style={styles.dividerLine} />
                    </View>




                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}

                        style={[styles.button, styles.buttonRegister]}>
                        <Text style={[styles.buttonText, styles.buttonRegisterText]}>
                            Giriş Yap
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >




    )
}

export default Register;


const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: "space-between",
    },
    content: {
        padding: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: "#cdcdcf",
        color: "#333333",
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15,
    },
    inputtext: {
        marginBottom: 2,
        marginTop: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    button: {
        height: 42,
        borderRadius: 6,
        backgroundColor: "#1977f3",
        justifyContent: "center",
        marginVertical: 15,
    },
    buttonText: {
        color: "#b4cafb",
        textAlign: "center",
        fontSize: 16,
    },
    footer: {
        alignItems: "center",
        padding: 22,
        paddingBottom: 0,
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        width: "70%",
        marginBottom: 10,
    },
    dividerLine: {
        flex: 1,
        borderBottomWidth: 3,
        borderColor: "#cbccd0",
    },
    dividerText: {
        color: "white",
        width: 50,
        textAlign: "center",
    },
    buttonRegister: {
        width: "100%",
        backgroundColor: "#e7f3ff",
    },
    buttonRegisterText: {
        color: "blue",
    },
    image: {
        backgroundColor: "purple",
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

