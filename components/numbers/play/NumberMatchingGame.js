import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const numberWords = [
  { number: 1, word: 'One' },
  { number: 2, word: 'Two' },
  { number: 3, word: 'Three' },
  { number: 4, word: 'Four' },
  { number: 5, word: 'Five' },
];

const MatchingGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleNumberClick = (num) => {
    setSelectedNumber(num);
    checkMatch(num, selectedWord);
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
    checkMatch(selectedNumber, word);
  };

  const checkMatch = (num, word) => {
    if (num && word) {
      const match = numberWords.find(item => item.number === num && item.word === word);
      if (match) {
        setFeedback('Correct Match!');
      } else {
        setFeedback('Try Again!');
      }
      setTimeout(() => {
        setSelectedNumber(null);
        setSelectedWord(null);
        setFeedback('');
      }, 1500);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Matching Game</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.subtitle}>Numbers</Text>
          {numberWords.map(item => (
            <TouchableOpacity
              key={item.number}
              onPress={() => handleNumberClick(item.number)}
              disabled={selectedNumber === item.number}
              style={[
                styles.button,
                selectedNumber === item.number && styles.selectedButton,
              ]}
            >
              <Text style={styles.buttonText}>{item.number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.column}>
          <Text style={styles.subtitle}>Words</Text>
          {numberWords.map(item => (
            <TouchableOpacity
              key={item.word}
              onPress={() => handleWordClick(item.word)}
              disabled={selectedWord === item.word}
              style={[
                styles.button,
                selectedWord === item.word && styles.selectedButton,
              ]}
            >
              <Text style={styles.buttonText}>{item.word}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff416c',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  column: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#ff9a9e',
    marginBottom: 5,
    width: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#ff6b6b',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  feedback: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default MatchingGame;
