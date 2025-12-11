import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SafeScreen from "../components/SafeScreen";
import { useAuthStore } from "../store/authStore";

export default function index() {
  const { user, token, logout, checkAuth } = useAuthStore()

  const router = useRouter();

  useEffect(() => {
    checkAuth()
  }, [])
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
          <Text>Signin </Text>
          <Text>Signin: {user?.username} </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logout}>
          <Text>logout </Text>
          {/* <Text>Signin: {token} </Text> */}
        </TouchableOpacity>
      </View>
    </SafeScreen>

  )
}