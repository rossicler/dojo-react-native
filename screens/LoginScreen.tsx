import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Email"/>
        </View>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Senha"
                secureTextEntry={true}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Root')}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.loginText}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'white'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    inputView: {
        width: "80%",
        backgroundColor:"#fb5b5a",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50,
        color: 'white'
    },
    forgot: {
        color: 'white',
        fontSize: 11
    },
    loginBtn: {
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:20
    },
    loginText: {
        color: 'white'
    }
});
