import React from 'react';
import {SafeAreaView,Text,Button} from 'react-native';

function Second(props) {


    const user = props.route.params.username;
    


    console.log(props)

    function navigateBack(){
       // props.navigation.navigate('FirstScreen') veya
       props.navigation.goBack()
    }
    return(
        <SafeAreaView>
            <Text>Hello Second Page</Text>
            <Text>{user}</Text>
            <Button title = "Go Backk" onPress = {navigateBack}/>
        </SafeAreaView>
    )
}

export default Second;