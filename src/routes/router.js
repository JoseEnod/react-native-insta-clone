import { } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../pages/Home';
import ProfileScreen from './../pages/Profile';
import StoriesScreen from './../pages/Stories';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NavigationTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'md-search-sharp' : 'md-search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false
      })}
    >

      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeNavigationTabs"
      >
        <Stack.Screen name="HomeNavigationTabs" component={NavigationTabs} />
        <Stack.Screen name="Stories" component={StoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}