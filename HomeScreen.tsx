import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 

import { Text, View, Button, TextInput,  TouchableOpacity, ScrollView } from 'react-native';
import { navigateToScreen } from './navigation';
import styles from './styles'
import TextDisplay from './textDisplay';

export default function HomeScreen({ navigation }) {

  const [inputText, setInputText] = useState<string>("");
  const [displayTexts, setDisplayTexts] = useState<string[]>([]);

  const handleInput = (text: string) => {
    setInputText(text);
  };

  const handlePress = () => {
    if (inputText.trim() !== '') {
      setDisplayTexts([...displayTexts, inputText]);
    setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.headingText}>What does it mean?</Text>
      <Text style={styles.mainText}>Add a word below:</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Type something"
        onChangeText={handleInput}
        value={inputText}
        onSubmitEditing={handlePress}
      />
       <TouchableOpacity 
       style={styles.customButton}
       onPress={handlePress}
       >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      <Text style={styles.largeText}>{displayTexts[displayTexts.length - 1]}</Text>
      <View style={styles.headingAndTextContainer}>
      <Text>Previous searches:</Text>
      <TextDisplay displayTexts={displayTexts}/>
      </View>
      <View style={styles.button}>
      <Button
        color={'teal'}
        title="Click to go to Second Screen"
        onPress={() => navigateToScreen(navigation, 'Second', { word: displayTexts[displayTexts.length - 1] })}
      />
      </View>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

