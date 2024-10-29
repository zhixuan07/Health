import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import SettingsScreen from './SettingsScreen';
import MedicalHistoryScreen from './MedicalHistoryScreen';
import AddMedicalRecordScreen from './AddMedicalRecordScreen';
import SelectImageScreen from './SelectImageScreen';
import SymptonsScreen from './SymptonsScreen';
import SplashScreen from './SplashScreen';
import FindDoctorScreen from './FindDoctorScreen';
import BookTimeSlotScreen from './BookTimeSlot';
import CompleteBookingScreen from './CompleteBookingScreen';
import ReminderScreen from './RemindersScreen';
import AddReminderScreen from './AddReminderScreen';
import ReadNotificationScreen from './ReadNotificationScreen';
import AccountScreen from './AccountScreen';
const Tab = createBottomTabNavigator();
const  HomeStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}   options={{ headerShown: false }}/>
        <HomeStack.Screen name="MedicalRecord" component={MedicalHistoryScreen}   options={{ headerShown: false,   }}/>
        <HomeStack.Screen name="AddMedicalRecord" component={AddMedicalRecordScreen}  options={{ headerShown: false, tabBarStyle: { display: 'none' }  }} />
        <HomeStack.Screen name="SelectImage" component={SelectImageScreen}  options={{ headerShown: false,tabBarStyle: { display: 'none' }  }} />
        <HomeStack.Screen name="MedicalRecordSplash" options={{ headerShown: false,tabBarStyle: { display: 'none' }  }}>
                    {props => <SplashScreen {...props} title="Medical Record Added" navigationName="MedicalRecord" />}

        </HomeStack.Screen>
        <HomeStack.Screen name="Symptons" component={SymptonsScreen} options={{headerShown:false,tabBarStyle: { display: 'none' } }}></HomeStack.Screen>
        <HomeStack.Screen name="FindDoctor" component={FindDoctorScreen} options={{headerShown:false,tabBarStyle: { display: 'none' } }}></HomeStack.Screen>
        <HomeStack.Screen name="BookTimeSlot" component={BookTimeSlotScreen} options={{headerShown:false,tabBarStyle: { display: 'none' } }}></HomeStack.Screen>
        <HomeStack.Screen name="CompleteBooking" component={CompleteBookingScreen} options={{headerShown:false,tabBarStyle: { display: 'none' } }}></HomeStack.Screen>
        <HomeStack.Screen name="CompletedBookingSplash" options={{ headerShown: false,tabBarStyle: { display: 'none' }  }}>
                    {props => <SplashScreen {...props} title="Appointment Booked" navigationName="Symptons" />}

        </HomeStack.Screen>
        <HomeStack.Screen name="Reminders" component={ReminderScreen} options={{headerShown:false,tabBarStyle: { display: 'none' } }}></HomeStack.Screen>
        <HomeStack.Screen name="AddReminder" component={AddReminderScreen} options={{headerShown:false,tabBarStyle: { display: 'none' } }}></HomeStack.Screen>
        <HomeStack.Screen name="ReminderSplash" options={{ headerShown: false,tabBarStyle: { display: 'none' }  }}>
                    {props => <SplashScreen {...props} title="Reminder Added" navigationName="Reminders" />}
        </HomeStack.Screen>
      </HomeStack.Navigator>


    );
  }
  function NotificationsStackScreen() {
    return (
      <NotificationsStack.Navigator>
        <NotificationsStack.Screen name="NotificationsScreen" component={NotificationsScreen}  options={{ headerShown: false }}/>
        <NotificationsStack.Screen name="ReadNotification" component={ReadNotificationScreen}  options={{ headerShown: false }}/>
      </NotificationsStack.Navigator>
    )
  }
  function SettingsScreenStack() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen}  options={{ headerShown: false }}/>
        <SettingsStack.Screen name="Account" component={AccountScreen}  options={{ headerShown: false }}/>

      </SettingsStack.Navigator>
    )
  }
const App =()=> {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Notifications') {
                            iconName = 'notifications';
                        } else if (route.name === 'Settings') {
                            iconName = 'settings';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#432C81',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen}  options={{ headerShown: false}} />
                <Tab.Screen name="Notifications" component={NotificationsStackScreen}  options={{ headerShown: false }}/>
                <Tab.Screen name="Settings" component={SettingsScreenStack} options={{ headerShown: false }} />
               
            </Tab.Navigator>
          
        </NavigationContainer>
    );
};

export default App;
