import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ListScreen from './components/ListScreen'
import DetailScreen from './components/DetailScreen'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

const Stack = createSharedElementStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown:false
              }}
            >
                <Stack.Screen name='Home' component={ListScreen}/>
                <Stack.Screen name='Detail' component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
