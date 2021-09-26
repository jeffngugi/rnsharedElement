import React, {useEffect, useRef}from 'react'
import { StyleSheet, Text, View, Animated, Image, Pressable, SafeAreaView, ScrollView, useWindowDimensions,   } from 'react-native'
import {data} from '../data'


const ListScreen = () => {
    console.log(data)
    return (
        <View>
            <Text>All posts</Text>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({})
