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
            
            <FlatList data={MYNUMBERS} keyExtractor={(item, index) => index.toString()} renderItem={ (itemData,index) => 
               
               {
                   if(index%2===0) {
                       return(
                           <View style={{flexDirection:'row' }}>
                           
                           <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text1} 
                                num={itemData.item.text1}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                           <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text2} 
                                num={itemData.item.text2}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                            <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text3} 
                                num={itemData.item.text3}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                            <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text4} 
                                num={itemData.item.text4}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                           </View>
                       )
                   } else {
                       return (<View style={{flexDirection:'row',marginBottom:'20%' }}>
                            
                            <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text1} 
                                num={itemData.item.text1}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                           <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text2} 
                                num={itemData.item.text2}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                            <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text3} 
                                num={itemData.item.text3}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                            <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text4} 
                                num={itemData.item.text4}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                            <View style={{flex:1}}>
                                <NumberComponent id={itemData.item.text5} 
                                num={itemData.item.text5}
                                onSelectNumber={onSelect}
                                numselected={selected}
                            />
                            </View>
                           </View>)
                   }
               }}/>)
                // <View style={styles.rowItem}>
                //     <NumberComponent 
                //         id={itemData.item}
                //         num={ itemData.item } 
                //         onSelectNumber={onSelect} 
                //         numselected={selected}
                //         styleprops={{fontWeight:'bold'}}
                //     />
                // </View>}/>
        
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