import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState, useRef } from "react";

export default function verifyEmail() {

    const [inpVal, setInpVal] = useState(['', '', '', '', '', '']);
    const inputs = useRef<(TextInput | null)[]>([])

    const changeText = (text: any, index: any) => {
        let newInpVal = [...inpVal];
        newInpVal[index] = text;
        setInpVal(newInpVal);
        if (text && index < 5) inputs.current[index + 1]?.focus();
    };

    const pressKey = (e: any, index: any) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !inpVal[index]) inputs.current[index - 1]?.focus();
    };

    return <>
        <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', paddingHorizontal: 28, }}>

            <View style={{ justifyContent: 'flex-start', marginTop: 32, marginBottom: 68, gap: 12, }}>

                <Text style={{ fontFamily: 'RobotoMedium', fontSize: 24, color: '#191D23', }}>Please verify your email address</Text>
                <Text style={{ fontFamily: 'RobotoRegular', fontSize: 14, }}>We’ve sent an email to becca@gmail.com, please enter the code below.</Text>

            </View>

            <View style={{ justifyContent: 'flex-start', width: '100%', gap: 16, }}>

                <Text style={{ fontFamily: 'RobotoBold', fontSize: 16, color: '#000000BF', }}>Enter Code</Text>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    {inpVal.map((item, index) => (
                        <TextInput
                            key={index}
                            ref={ref => inputs.current[index] = ref}
                            style={styles.inp}
                            placeholder='-'
                            placeholderTextColor={'#BABABA'}
                            maxLength={1}
                            value={item}
                            onChangeText={text => changeText(text, index)}
                            onKeyPress={e => pressKey(e, index)}
                            keyboardType="numeric"
                        />))}
                </View>
            </View>

            <View style={{ width: '100%', marginVertical: 40 }}>
                <TouchableOpacity style={styles.login_btn}>
                    <Text style={{ fontFamily: 'RobotoMedium', fontSize: 16, color: '#FEFEFE', }}>Create acount</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', gap: 8, }}>

                <Text style={{ fontFamily: 'RobotoRegular', fontSize: 14, color: ' #191D23', alignContent: 'center', }}>
                    Didn’t see your email?
                </Text>
                <Link href={'/'}><Text style={{ color: '#1443C3', fontFamily: 'RobotoRegular', fontSize: 14, }}>Resend</Text></Link>

            </View>
        </View>
    </>
}


const styles = StyleSheet.create({
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
        alignItems: 'center'
    },
})