import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsStack} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTab} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
