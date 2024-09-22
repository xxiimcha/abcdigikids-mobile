import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is 3 + 1?", answer: "4" },
  { question: "What is 5 - 2?", answer: "3" },
];

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect, try again.');
    }
    setTimeout(() => {
      setFeedback('');
      if (userAnswer === questions[currentQuestion].answer) {
        setUserAnswer('');
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setFeedback('Congratulations! You finished the quiz.');
        }
      }
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Quiz Game</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{questions[currentQuestion].question}</Text>
        <TextInput
          style={styles.input}
          value={userAnswer}
          onChangeText={(text) => setUserAnswer(text)}
          placeholder="Your answer"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      {feedback !== '' && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff416c',
  },
  questionContainer: {
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff416c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  feedback: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default QuizGame;
