import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Google from '../assets/images/google';



export default function LogIn() {
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
                <TextInput style={styles.inp} placeholder={'Rhebhek@gmail.com'} placeholderTextColor={'#BABABA'}></TextInput>
            </View>
        </View>
    </>
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fffff',
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
        width:'100%',
        gap:4,
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
        padding:12,
        borderRadius:6,
    }
})