import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const SignupScreen = () => {
  return (
    <View style = {styles.container}>
        <StatusBar backgroundColor={'white'}/>
        <View style={{paddingVertical: 12, width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: 700}}>Sign up</Text>
        </View>

        <TextInput
            placeholder='Email'
            keyboardType='email-address'
            style={styles.input}
        />

        <TextInput
            placeholder='Password'
            style={styles.input}
        />

        <TextInput
            placeholder='Conform Password'
            style={styles.input}
        />

        <TouchableOpacity style={styles.loginbutton} onPress={() => alert('Account Created Successfully!')}>
            <Text style={styles.loginbuttontxt}>Sign up</Text>
        </TouchableOpacity>
        
        <View style={{marginTop: 10, width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View style={{paddingLeft: 10, paddingTop: 10}}>
                <Text style={{fontSize: 15, fontStyle:'italic'}}>Already have an account?</Text>
            </View>

            <View style={styles.signupbutton}>
                <TouchableOpacity>
                    <Text style={styles.signupbuttontxt}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        width: '100%',
    },

    input: {
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 10,
        width: '90 %',
        backgroundColor: 'white',
        alignSelf: 'center'
    },

    loginbutton: {
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 25,
        width: '90 %',
        alignSelf: 'center',
        elevation: 2
    },

    loginbuttontxt: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center'
    },

    signupbutton: {
        backgroundColor: '#4CAF50', 
        borderRadius: 25, 
        alignSelf: 'center', 
        padding: 10, 
        elevation: 2
    },

    signupbuttontxt: {
        fontSize: 15, 
        fontWeight: '600', 
        color: 'white', 
        alignSelf: 'center', 
        paddingHorizontal: 10 
    }
})