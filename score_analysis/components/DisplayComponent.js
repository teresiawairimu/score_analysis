import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const DisplayComponent = (props) => {
  return (
    <View style={styles.displayContainer}>
      <View style={styles.displayLabel}>
        <Text style={styles.displayInner}>Min Score</Text>
        <Text style={styles.displayInner}>Max Score</Text>
        <Text style={styles.displayInner}>Avg Score</Text>
        <Text style={styles.displayInner}>Grade</Text>
      </View>
      <View style={styles.displayInput}>
        <TextInput 
          style={styles.innerInner}
          value={props.state.min_score}
          readOnly
        />
        <TextInput
          style={styles.innerInner}
          value={props.state.max_score}
          readOnly
        />
        <TextInput
          style={styles.innerInner}
          value={props.state.avg_score}
          readOnly
        />
        <TextInput
          style={styles.innerInner}
          value={props.state.grade}
          readOnly
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignContent: 'center'

  },
  displayLabel: {
    marginTop: 40
  },
  displayInput: {
    marginTop: 40
  },
  displayInner: {
    padding: 10,
    margin: 12
  },
  innerInner: {
    borderWidth: 1,
    height: 40,
    width: 120,
    margin: 12,
    padding: 10,
    borderRadius: 10

  }
});

export default DisplayComponent;