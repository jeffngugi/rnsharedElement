import React, {useEffect, useRef}from 'react'
import { StyleSheet, Text, View, Animated, Image, Pressable, SafeAreaView, ScrollView, useWindowDimensions, Dimensions, TouchableOpacity} from 'react-native'
import {data} from '../data'
import {SharedElement} from 'react-navigation-shared-element'

const ListScreen = ({navigation}) => {
    const {width} = Dimensions.get('screen')

    const ITEM_WIDTH = width * 0.9;
    const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

    return (
        <View style={{flex:1, paddingBottom:20}}>
            <ScrollView 
                indicatorStyle='white'
                contentContainerStyle={{alignItems:'center'
            }}
            >
            {
                data.map(item => (
                    <View key={item.id}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{marginBottom:14}}
                            onPress={()=>navigation.navigate('Detail', {item})}
                        >
                            <SharedElement id={`item.${item.id}.image_url`}>
                            <Image 
                                style={{
                                    borderRadius:14,
                                    width:ITEM_WIDTH,
                                    height:ITEM_HEIGHT
                                }}
                                source={{uri:item.image_url}}
                                resizeMode='cover'
                            />
                            </SharedElement>
                            <View
                            style={{
                            position: 'absolute',
                            bottom: 20,
                            left: 10
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
                                <Text
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    lineHeight: 28
                                }}
                                >
                                {item.title}
                                </Text>
                                <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    lineHeight: 18
                                }}
                                >
                                {item.description}
                                </Text>
                            </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                ))
            }
            </ScrollView>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({})
