// SecondScreen.js
import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, Image } from 'react-native';
import { navigateToScreen } from './navigation';
import { useNavigation } from '@react-navigation/native';
import { fetchDataFromAPI } from './api';
import styles from './styles'

function SecondScreen({ route }) {

  const [apiData, setApiData] = useState<any>(null)
  const navigation = useNavigation()

  useEffect(() => {
    if (route.params && route.params.word) {
      const word = route.params.word;
      fetchDataFromAPI(word)
        .then((data) => setApiData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [route.params]);

  return (
    <View>
      <Text>This is the Second Screen</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Latin_dictionary.jpg/440px-Latin_dictionary.jpg' }}
        style={styles.image}
      />
      {apiData && (
        <View>
          <Text>API Data:</Text>
          <Text>Title: {apiData[0].word}</Text>
          <Text>Body: {apiData[0].phonetic}</Text>

          <Text>Definitions:</Text>
          {apiData[0].meanings.map((meaning, index) => (
            <View key={index}>
              <Text>Part of Speech: {meaning.partOfSpeech}</Text>
              <Text>Definition: {meaning.definitions[0].definition}</Text>
              <Text>Example: {meaning.definitions[0].example}</Text>
              </View>
          ))}
        </View>
      )}
      <Button title="Go Back" 
      onPress={() => navigateToScreen(navigation, 'Home')} />
    </View>
  );
}

export default SecondScreen;
