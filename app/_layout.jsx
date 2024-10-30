import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { StatusBar,View } from 'react-native';

export default function RootLayout() {
  return (
    <>
    <StatusBar backgroundColor="black"/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </>
  );
}
