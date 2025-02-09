import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useReducer } from 'react';
import InputComponent from './components/InputComponent';

const initialScore = {min_score: 0, max_score: 0, avg_score: 0, grade: "no grade"};

function analysisReducer(state, action) {
  switch (action.type) {
    case 'update_score':
      return {...state, scores: action.payload}
    case 'compute_min': {
      return {
        min_score: Math.min(...state.subjectScores)
      };
    }
    case 'compute_max': {
      return {
        max_score: Math.max(...state.subjectScores)
      };
    }
    case 'compute_avg': {
      return {
        avg_score: state.subjectScores.reduce((a, b) => a + b, 0) / state.subjectScores.length
      };
    }
    case 'compute_grade': {
      return {
        ...state,
        grade: state.avg_score >= 90 ? 'A':
               state.avg_score >= 80 ? 'B':
               state.avg_score >= 70 ? 'C':
               state.avg_score >= 60 ? 'D': 'F'
      };
    }
    default:
      return state;

  }
}

export default function App() {
  const [state, dispatch] = useReducer(analysisReducer, initialScore)
  return (
    <View style={styles.container}>
      <InputComponent dispatch={dispatch} />
      <View style={styles.buttons}>
        <View style={styles.inner}>
          <Button
            title="Min" 
          />
        </View>
        <View style={styles.inner}>
          <Button
            style={styles.inner}
            title="Max"
          /> 
        </View>
        <View style={styles.inner}>
          <Button
            style={styles.inner}
            title="Avg"
          />
        </View>
        <View style={styles.inner}>
          <Button
            title="Grade"
          />
        </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
