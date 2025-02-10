import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const InputComponent = (props) => {
  const [name, setName] = useState('')
  const [scores, setScores] = useState(['', '', '', '', ''])
  const handleChange = (index, value) => {
    const numValue = Number(value)
    const newScores = [...scores];
    newScores[index] = numValue < 0 ? 0: value > 100 ? 0: numValue;
    setScores(newScores);
    props.dispatch({type: 'update_score', payload: newScores})

  }
  return(
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.inner}>Student:</Text>
        <Text style={styles.inner}>Subject-01:</Text>
        <Text style={styles.inner}>Subject-02:</Text>
        <Text style={styles.inner}>Subject-03:</Text>
        <Text style={styles.inner}>Subject-04:</Text>
        <Text style={styles.inner}>Subject-05:</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.innerInner}
          onChangeText={setName}
          value={name}
          placeholder='Enter Name'
        />
        <TextInput
          style={styles.innerInner}
          onChangeText={(number) => handleChange(0, number)}
          value={scores[0]}
          placeholder='Enter Score#1'
        />
        <TextInput
          style={styles.innerInner}
          onChangeText={(number) => handleChange(1, number)}
          value={scores[1]}
          placeholder='Enter Score#2'
        />
        <TextInput
          style={styles.innerInner}
          onChangeText={(number) => handleChange(2, number)}
          value={scores[2]}
          placeholder='Enter Score#3'
        />
        <TextInput
          style={styles.innerInner}
          onChangeText={(number) => handleChange(3, number)}
          value={scores[3]}
          placeholder='Enter Score#4'
        />
        <TextInput
          style={styles.innerInner}
          onChangeText={(number) => handleChange(4, number)}
          value={scores[4]}
          placeholder='Enter Score#5'
        />
        
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignContent: 'center'

  },
  label: {
    marginTop: 40
  },
  input: {
    marginTop: 40
  },
  inner: {
    padding: 10,
    margin: 12
  },
  innerInner: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 10

  }
});

export default InputComponent;