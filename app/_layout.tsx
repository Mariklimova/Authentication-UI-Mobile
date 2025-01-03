import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded] = useFonts({
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"  />
      <Stack.Screen name="signup" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="forgotPassword" />
      <Stack.Screen name="verifyEmail" />
    </Stack>

  );
}
