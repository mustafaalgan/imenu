import React, { useContext } from "react";
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
import { DataContext } from "../contexts/DataContext";


const Login = ({ navigation }) => {


    const [
        dataToken,
        email,
        setEmail,
        password,
        setPassword,
        dataGetAll,
        kitapList,
        setSetKitapList,
        dataDelete,
        author,
        setAuthor,
        title,
        setTitle,
        rating,
        setRating,
        dataCreate,
        UpdateVisible,
        setUpdateVisible,
        updateId,
        setupdateId,
        dataUpdate,
        CreateVisible,
        setCreateVisible,
    ] = useContext(DataContext);
    const onEmailChange = (e) => {
        setEmail(e);
    };
    const onPasswordChange = (e) => {
        setPassword(e);
    };
    const tokenGetirFunction = (e) => {
        e.preventDefault();
        dataToken();
    };

    return (

        <View style={styles.container}>


            <ImageBackground source={logo} resizeMode="cover" style={styles.image} >
                <View style={styles.content}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 36 }}>LOGIN</Text>
                    <View style={{ marginBottom: "25%" }}></View>
                    <View>
                        <TextInput
                            style={[styles.input, styles.inputUsername]}
                            placeholder="E-Posta"
                            placeholderTextColor="white"
                            onChangeText={onEmailChange}

                        />
                    </View>
                    <View style={styles.textinput}>
                        <TextInput
                            style={[styles.input, styles.inputPassword]}
                            secureTextEntry={true}
                            placeholder="Şifre"
                            placeholderTextColor="white"
                            onChangeText={onPasswordChange}

                        />
                    </View>


                    <TouchableOpacity
                        style={[styles.button, styles.buttonRegister]} onPress={tokenGetirFunction} >
                        <Text style={[styles.buttonText, styles.buttonRegisterText]}>
                            Giriş
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.link}  >
                        <Text style={styles.linkText}>Parolanızı mı unuttunuz?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>VEYA</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}

                        style={[styles.button, styles.buttonRegister]}>
                        <Text style={[styles.buttonText, styles.buttonRegisterText]}>
                            Yeni bir hesap oluştur
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </View >




    )
}

export default Login;


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
    inputUsername: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    inputPassword: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
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
    link: {
        paddingVertical: 8,
    },
    linkText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
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
        width: 50,
        textAlign: "center",
        color: "white",

    },
    buttonRegister: {
        width: "100%",
        backgroundColor: "#e7f3ff",
    },
    buttonRegisterText: {
        color: "#1077f7",
    },
    image: {
        backgroundColor: "purple",
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

