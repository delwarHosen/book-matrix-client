import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SafeScreen from "../components/SafeScreen";

export default function index() {
  const router = useRouter();
  return (
    <SafeScreen>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <Text>Home</Text>

        <TouchableOpacity onPress={() => router.push("/singup")}>
          <Text>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Signin</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>

  )
}