import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'


function First(props) {

    console.log(props)


    function navigateToPage() {
        props.navigation.navigate('SecondScreen', {
            username: "Alpagu",
            id:1
        })
    }
    return (
        <SafeAreaView>
            <Text>Hello First Page !!</Text>
            <Button title="Go to second page" onPress={navigateToPage} />
        </SafeAreaView>
    )
}

export default First;


