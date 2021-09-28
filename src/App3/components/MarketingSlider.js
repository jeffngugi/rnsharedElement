import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { SLIDER_DATA} from '../config/travel'
import {ITEM_WIDTH, SPACING, width} from '../config/theme'

const MarketingSlider = () => {
    return (
        <FlatList
            data={SLIDER_DATA}
            keyExtractor={(item) => item.color}
            horizontal
            snapToInterval={ITEM_WIDTH + SPACING * 2}
            contentContainerStyle={{
                paddingRight:width - ITEM_WIDTH - SPACING *2

            }}
            decelerationRate={'fast'}
            renderItem={({item})=>{
                return(
                    <View style={[styles.itemContainer, {backgroundColor:item.color}]}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default MarketingSlider

const styles = ({

})
