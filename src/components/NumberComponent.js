import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const NumberComponent = (props) => {
    
    return(
        // <View>
             <TouchableOpacity onPress={()=>props.onSelectNumber(props.id)}>
                <Text style={[styles.numTextStyle, { fontWeight:props.numselected===props.id?'bold':null }]}>
                    {props.num}
                </Text>
             </TouchableOpacity>
        // </View>
    )
}

const styles = StyleSheet.create({
    number:{
        margin:5,
        //backgroundColor:'#ffffff'
    },
    numTextStyle:{
        fontSize:25,
        padding:10,
        color:'white'
    }
})

export default NumberComponent;