import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function verifyEmail() {
    return <>
        <View style={styles.wrapper}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Please verify your email address</Text>
                <Text style={styles.text}>We’ve sent an email to becca@gmail.com, please enter the code below.</Text>            </View>
            <View style={styles.inp_wrapper}>
                <Text style={styles.text_inp}>Enter Code</Text>
                <View style={styles.inp_container}>
                    <TextInput style={styles.inp} placeholder={'-'}></TextInput>
                    <TextInput style={styles.inp} placeholder={'-'}></TextInput>
                    <TextInput style={styles.inp} placeholder={'-'}></TextInput>
                    <TextInput style={styles.inp} placeholder={'-'}></TextInput>
                    <TextInput style={styles.inp} placeholder={'-'}></TextInput>
                    <TextInput style={styles.inp} placeholder={'-'}></TextInput>
                </View>
            </View>
            <View style={{ width: '100%', marginVertical: 40 }}>
                <TouchableOpacity style={styles.login_btn}>
                    <Text style={styles.login_text}>Create acount</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link_container}>
                <Text style={styles.link_text}>Didn’t see your email?</Text>
                <Link href={'/'}><Text style={styles.link_text_blue}>Resend</Text></Link>
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
        gap: 16,
    },
    text_inp: {
        fontFamily: 'SF Pro Display',
        fontSize: 16,
        fontWeight: 700,
        color: '#000000BF',
    },
    inp_container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
    },
    inp: {
        borderColor: '#CBD2E0',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '12%',
        padding: 12,
        borderRadius: 6,
        textAlign: 'center',
        color: '#BABABA',
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 8,
    },
    link_text: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        color: ' #191D23',
        alignContent: 'center',
        textAlign: 'left',
    },
    link_text_blue: {
        color: '#1443C3',
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        alignContent: 'center',
    }
})