import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import store from './store';
import LoginScreen from './screens/LoginScreen';
import NewsFeedScreen from './screens/NewsFeedScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import ChatbotScreen from './screens/ChatbotScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';

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

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
