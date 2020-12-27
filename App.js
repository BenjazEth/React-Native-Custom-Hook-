import React, {useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import useDeviceSize from './useDeviceSize';

export default function App() {

  
  const ref = useRef();
  const hookValue = useDeviceSize(ref.current);

  return (
    <View style={styles.container} ref={ref} >
      <h1>{"Hook value returned : "}</h1>
      <h2>
        {"Device Size: "+ hookValue.size + "\n" }
        {"Device Oreintation: " + hookValue.Oreintation}
      </h2> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'powderblue',
  },
});
