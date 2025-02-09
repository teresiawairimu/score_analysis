import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import React, { useReducer } from 'react';
import InputComponent from './components/InputComponent';
import DisplayComponent from './components/DisplayComponent';


function analysisReducer(state, action) {
  console.log('current state:', state);
  console.log('action', action);
  switch (action.type) {
    case 'update_score':
      return { ...state, scores: action.payload};
    case 'compute_min':
      const minValue = Math.min(...state.scores);
      console.log('min value:', minValue);
      return {...state, min_score: minValue.toString()};
      {/*{ ...state, min_score: Math.min(...state.scores)};*/}
    case 'compute_max':
      return { ...state, max_score: Math.max(...state.scores)};
    case 'compute_avg':
      return { ...state, avg_score: (state.scores.reduce((a, b) => a + b, 0) / 5).toFixed(2)};
    case 'compute_grade':
        const avg_score = state.scores.reduce((a, b) => a + b, 0) / 5;
        let grade = 'F';
        if (avg_score >= 90) grade = 'A';
        else if (avg_score >= 80) grade = 'B';
        else if (avg_score >= 70) grade = 'C';
        else if (avg_score >= 60) grade = 'D';
        return { ...state, grade};
    default:
      return state;
  }       
};

export default function App() {
  const [state, dispatch] = useReducer(analysisReducer, {
    scores: [],
    min_score: "", 
    max_score: "", 
    avg_score: "", 
    grade: ""});
  return (
    <View style={styles.container}>
      <InputComponent dispatch={dispatch} />
      <View style={styles.buttons}>
        <View style={styles.inner}>
          <Button title="Min" onPress={() => dispatch({ type: 'compute_min'})}/>
        </View>
        <View style={styles.inner}>
          <Button title="Max" onPress={() => dispatch({ type: 'compute_max'})}/> 
        </View>
        <View style={styles.inner}>
          <Button title="Avg" onPress={() => dispatch({ type: 'compute_avg'})}/>
        </View>
        <View style={styles.inner}>
          <Button title="Grade" onPress={() => dispatch({ type: 'compute_grade'})}/>
        </View>
      </View>
      <DisplayComponent state={state} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*flex: 1,*/
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center' 
  },
  inner: {
    marginLeft: 5
  }
});
