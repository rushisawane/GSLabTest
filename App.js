import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native';

import Main from './src/screens/MainScreen';

const App = () => {
  
  return (
    <SafeAreaView style={styles.screen}>
      
        <View>
          <Main/>
        </View>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    marginHorizontal:30,
   
  }
})

export default App;
