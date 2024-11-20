import { Text, View, StyleSheet, TouchableOpacity, TextInput, NativeEventEmitter } from "react-native";
import Google from '../assets/images/google';
// import Eye from '../assets/images/eyeSlash';
import { useState } from 'react'
import { Link } from "expo-router";
import Shape from '../assets/images/shape'


export default function LogIn() {

    const [valueInp, setValueInp] = useState({
        email: '',
        password: ''
    });
    const [flag, setFlag] = useState(false)

    const changeValue = (e: any,str:string) => {
        setValueInp({ ...valueInp, [str]: e.nativeEvent.text })
    }

    return <>
        <View style={styles.wrapper}>
            <Text style={styles.title}>Log In</Text>
            <TouchableOpacity style={styles.btn_google}>
                <Google></Google>
                <Text style={styles.btn_text}>Sign in with Google</Text>
            </TouchableOpacity>

            <View style={styles.signin}>
                <View style={styles.line}></View>
                <Text style={styles.sign_text}>or sign in with</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.inp_wrapper}>
                <Text style={styles.text_inp}>Email Addess</Text>
                <TextInput style={styles.inp} placeholder={'Rhebhek@gmail.com'} placeholderTextColor={'#BABABA'} onChange={(e)=>changeValue(e,'email')}></TextInput>
            </View>
            <View style={styles.inp_wrapper}>
                <View style={styles.text_block}>
                    <Text style={styles.text_inp} >Password</Text>
                    <Link href={"/forgotPassword"}><Text style={styles.text_pwd} >Forgot Password</Text></Link>
                </View>
                <TextInput style={styles.inp} placeholder='Password' secureTextEntry={true} placeholderTextColor={'#BABABA'} onChange={(e)=>changeValue(e,'password')}></TextInput>
                <View style={styles.containerCheckbox}>
                    <TouchableOpacity onPress={() => setFlag(!flag)} style={styles.checkbox}>
                        {flag ? <Shape style={styles.checkboxChecked}></Shape> : <View style={styles.checkboxUnchecked} />}
                    </TouchableOpacity>
                    <Text style={styles.label}>Keep me signed in</Text>
                </View>
                <Link href={'/verifyEmail'}><TouchableOpacity style={styles.login_btn} onPress={() => console.log(valueInp)}>
                <Text style={styles.login_text}>Login</Text>
                </TouchableOpacity></Link>
            </View>
            <View style={styles.link_container}>
                <Text style={styles.link_text}>Don’t have an Account?</Text>
                <Link href={'/signup'}><Text style={styles.link_text_blue}>Sign up here</Text></Link>
            </View>
        </View>
    </>
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 28,
    },
    title: {
        fontFamily: 'SF Pro Display',
        fontSize: 24,
        fontWeight: 700,
        color: '#191D23',
        marginBottom: 72,
    },
    btn_google: {
        backgroundColor: '#F4F7FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        width: '100%',
        borderRadius: 8,
        paddingVertical: 16,
    },
    btn_text: {
        textAlign: 'center',
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 500,
        color: '#131212',

    },
    signin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        width: '100%',
        gap: 15,
    },
    line: {
        backgroundColor: '#CBD2E0',
        height: 1,
        width: '30%'
    },
    sign_text: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 500,
        color: '#4B5768',
    },
    inp_wrapper: {
        justifyContent: 'flex-start',
        width: '100%',
        gap: 4,
    },
    text_inp: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        color: '#000000BF',
    },
    inp: {
        borderColor: '#CBD2E0',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        padding: 12,
        borderRadius: 6,
    },
    text_block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    text_pwd: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        color: '#1443C3',
    },
    containerCheckbox: {
        width: '90%',
        flexDirection: 'row',
        margin: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        width: 18,
        height: 18,
    },
    checkboxUnchecked: {
        borderWidth: 1,
        borderColor: '#12ae97',
        width: 18,
        height: 18,
        backgroundColor: '#FFF',
    },
    label: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        alignContent: 'center',
    },

    login_btn: {
        backgroundColor: '#1443C3',
        borderRadius: 50,
        width: '100%',
        paddingVertical: 15.5,
        marginTop: 16,
    },
    login_text: {
        fontFamily: 'SF Pro Display',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        color: '#FEFEFE',
    },
    link_container: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
    },
    link_text: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        color: ' #191D23',
    },
    link_text_blue: {
        color: '#1443C3',
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
    }
})