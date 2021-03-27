/**
 * Sample React Native App to Show react-native-increment-decrement-button
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import RnIncrementDecrementBtn from 'react-native-increment-decrement-button';

let {height} = Dimensions.get('window');

const App = () => {
  const handleClick = () => {
    console.log('pressed');
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.viewText}>
        <Text style={{color: 'green'}}>Basic usage without any props</Text>
      </View>
      <RnIncrementDecrementBtn />
      <View style={styles.viewText}>
        <Text style={{color: 'green'}}>Adding val,minVal,max,minreq props</Text>
      </View>
      <RnIncrementDecrementBtn minVal={0} minreq={3} max={10} val={5} />
      <View style={styles.viewText}>
        <Text style={{color: 'green'}}>
          Adding disableControl, disabledColor, activeColor props
        </Text>
      </View>
      <RnIncrementDecrementBtn
        disableControl={false}
        disabledColor={'#eeeeee'}
        activeColor={'#509e4b'}
      />
      <View style={styles.viewText}>
        <Text style={{color: 'green'}}>
          Adding styles for button and textInput
        </Text>
      </View>
      <RnIncrementDecrementBtn
        styleBtn={{width: 50, height: 50}}
        styleTextInput={{width: 50, height: 50, backgroundColor: 'green'}}
        labelStyle={{fontSize: 25, color: 'blue'}}
      />
      <View style={styles.viewText}>
        <Text style={{color: 'green'}}>Handling button click event</Text>
      </View>
      <RnIncrementDecrementBtn handleClick={() => console.log('Pressed')} />

      <View style={styles.viewText}>
        <Text style={{color: 'green'}}>Component with all props</Text>
      </View>

      <RnIncrementDecrementBtn
        minVal={0}
        minreq={3}
        max={10}
        val={3}
        disableControl={false}
        disabledColor={'#eeeeee'}
        activeColor={'#509e4b'}
        handleClick={() => console.log('Pressed')}
        styleBtn={{width: 100, height: 100}}
        styleTextInput={{width: 100, height: 100, backgroundColor: 'green'}}
        labelStyle={{fontSize: 25, color: 'blue'}}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    marginTop: PixelRatio.roundToNearestPixel((height * 9) / 100),
  },
  viewText: {
    marginTop: PixelRatio.roundToNearestPixel((height * 2) / 100),
    marginBottom: PixelRatio.roundToNearestPixel((height * 2) / 100),
  },
});
