import React, { useState } from 'react'; 
import { Text, View, Button, TextInput,  TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextDisplay from './textDisplay';
import { navigateToScreen } from './navigation';
import styles from './styles'

export default function HomeScreen({ navigation }) {

  const [inputText, setInputText] = useState<string>("");
  const [displayTexts, setDisplayTexts] = useState<string[]>([]);

  const handleTextInput = (text: string) => {
    setInputText(text);
  };

  const handlePressDone = () => {
    if (inputText.trim() !== '' && !inputText.includes(' ')) {
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
          onChangeText={handleTextInput}
          value={inputText}
          onSubmitEditing={handlePressDone}
        />
        <TouchableOpacity style={styles.customButton} onPress={handlePressDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        <Text style={styles.largeText}>{displayTexts[displayTexts.length - 1]}</Text>
        <View style={styles.headingAndTextContainer}>
          <Text>Previous searches:</Text>
          <TextDisplay displayTexts={displayTexts} />
        </View>
        <View style={styles.button}>
          <Button
            color="teal"
            title="Click to go to Second Screen"
            onPress={() =>
              navigateToScreen(navigation, 'Second', {
                word: displayTexts[displayTexts.length - 1],
              })
            }
          />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
