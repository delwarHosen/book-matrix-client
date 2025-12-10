import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "../../assets/styles/signup.style";
import SafeScreen from "../../components/SafeScreen";
import COLORS from "../../constants/colors";

export default function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeScreen>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>Book_Matrix...</Text>
            <Text style={styles.subtitle}>Share your favorite reads</Text>
          </View>


          <View style={styles.card}>
            <View style={styles.formContainer}>
              {/* user name */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputContainer}>
                  <Ionicons
                    style={styles.inputIcon}
                    name="person-outline"
                    size={20}
                    color={COLORS.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={COLORS.placeholderText}
                    value={username}
                    onChangeText={setUsername}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Email */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                  <Ionicons
                    style={styles.inputIcon}
                    name="mail-outline"
                    size={20}
                    color={COLORS.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={COLORS.placeholderText}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Password */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                  <Ionicons
                    style={styles.inputIcon}
                    name="lock-closed-outline"
                    size={20}
                    color={COLORS.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.placeholderText}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={20}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login button */}
              <TouchableOpacity style={styles.button} disabled={isLoading} >
                {
                  isLoading ? (
                    <ActivityIndicator color="#fff" />
                  ) :
                    (
                      <Text style={styles.buttonText}>Login</Text>
                    )
                }
              </TouchableOpacity>


              <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an accounr?</Text>
                <TouchableOpacity onPress={() => router.back()}>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>

        </View>
      </SafeScreen>
    </KeyboardAvoidingView>
  )
}