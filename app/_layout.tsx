import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {
  return (

    <Stack>

      <Stack.Screen name="/" />
      <Stack.Screen name="/signup" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="/forgot-password" />
    </Stack>

  );
}
