import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Jeff ngugi app</Text>
        </View>
    )
}

export default App


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})