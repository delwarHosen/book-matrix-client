import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthStore } from '../../store/authStore'

export default function index() {
  const { logout } = useAuthStore()
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignContent: "center"
    }}>
      <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  )
}