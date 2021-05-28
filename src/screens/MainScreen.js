import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

import NumberComponent from '../components/NumberComponent';
import {MYNUMBERS} from '../data/dummy-data';

const MainScreen = (props) => {
    const [selected,isSelected] = useState();

    
    const onSelect = (select) => {
        (selected!==select) ? isSelected(select) : isSelected(null);
    }
    
        return (
            
            <FlatList data={MYNUMBERS} numColumns={5} keyExtractor={(item, index) => index.toString()} renderItem={ (itemData,index) => 
                <View style={styles.rowItem}>
                    <NumberComponent 
                        id={itemData.item}
                        num={ itemData.item } 
                        onSelectNumber={onSelect} 
                        numselected={selected}
                        styleprops={{fontWeight:'bold'}}
                    />
                </View>}/>
        )
}

const styles = StyleSheet.create({
    rowItem:{
       flex:1,
       justifyContent:'space-evenly',
       //alignItems:'flex-start',
       marginBottom:'20%' 
    }
    
})

export default MainScreen;