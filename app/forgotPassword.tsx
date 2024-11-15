import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function forgotPwd() {
    return <>
        <View style={styles.wrapper}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.text}>Enter the email address registered with your account. We'll send you a link to reset your password.</Text>            </View>
            <View style={styles.inp_wrapper}>
                <Text style={styles.text_inp}>Email Addess</Text>
                <TextInput style={styles.inp} placeholder={'Rhebhek@gmail.com'} placeholderTextColor={'#BABABA'}></TextInput>
            </View>
            <View style={{ width: '100%', marginVertical: 40 }}>
                <TouchableOpacity style={styles.login_btn}>
                    <Text style={styles.login_text}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link_container}>
                <Text style={styles.link_text}>Remembered password?</Text>
                <Link href={'/'}><Text style={styles.link_text_blue}>Login to your account</Text></Link>
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
    title_container: {
        justifyContent: 'flex-start',
        marginTop: 32,
        marginBottom: 68,
    },
    title: {
        fontFamily: 'SF Pro Display',
        fontSize: 24,
        fontWeight: 500,
        color: '#191D23',
        marginBottom: 12,
        textAlign: 'left',
    },
    text: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
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
    login_btn: {
        backgroundColor: '#1443C3',
        borderRadius: 50,
        width: '100%',
        paddingVertical: 15.5,
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
        alignItems:'flex-start',
        justifyContent: 'center',
        gap: 8,
    },
    link_text: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        color: ' #191D23',
        alignContent: 'center',
        textAlign:'left',
    },
    link_text_blue: {
        color: '#1443C3',
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        alignContent: 'center',
    }
})