import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      {'Admin' != 'Admin' ? (<Tabs.Screen
        name="index"
        options={{
          title: 'Especialidades',
          tabBarIcon: ({ color }) => <Ionicons name="options" size={24} color="white" />,
          headerRight: () => (
            <Link href="/Perfil" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />) : (<Tabs.Screen
        name="index"
        options={{
          title: 'Especialidades',
          tabBarIcon: ({ color }) => <Ionicons name="options" size={24} color="white" />,
          headerRight: () => (
            <Link href="/PerfilAdmin" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign name="user"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />)}

      <Tabs.Screen
        name="two"
        options={{
          title: 'Agendar',
          tabBarIcon: ({ color }) => <AntDesign name="calendar" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="SingIn"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="calendar" size={24} color="white" />,
        }}
      />
    </Tabs>

  );
}
