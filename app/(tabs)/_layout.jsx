import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';

export default function _layout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            headerTitleStyle: {
                color: COLORS.textPrimary,
                fontWeight: "700"
            },
            headerShadowVisible: false,
            tabBarStyle: {
                backgroundColor: COLORS.background,
                borderTopWidth: 1,
                borderColor: COLORS.border,
                paddingTop: 5,
                paddingBottom: insets.bottom,
                height: 60 + insets.bottom
            }
        }}
        >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (<Ionicons
                    name='home-outline'
                    size={size} color={color}
                />)
            }} />
            <Tabs.Screen name="create" options={{
                title: "Create",
                tabBarIcon: ({ color, size }) => (<Ionicons
                    name='add-circle-outline'
                    size={size} color={color}
                />)
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({ color, size }) => (<Ionicons
                    name='person-outline'
                    size={size} color={color}
                />)
            }} />
        </Tabs>
    )
}