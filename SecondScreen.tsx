// SecondScreen.js
import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { fetchDataFromAPI } from './api'
import styles from './styles'

function SecondScreen({ route }) {

  const [apiData, setApiData] = useState<any>(null)

  useEffect(() => {
    if (route.params && route.params.word) {
      const word = route.params.word;
    fetchData(word)
    }
  }, [route.params]);

  const fetchData = async (word) => {
    try {
      const data = await fetchDataFromAPI(word)
      setApiData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Latin_dictionary.jpg/440px-Latin_dictionary.jpg' }}
          style={styles.image}
        />
        {apiData && renderApiData(apiData)}
      </ScrollView>
    </View>
  );
}

const renderApiData = (apiData) => (
  <View>
    <View style={styles.middleContainer}>
      <Text style={styles.largeText}>{apiData[0].word}</Text>
    </View>
    {apiData[0].meanings.map((meaning, index) => (
      <View style={styles.displayContainerRow} key={index}>
        {renderMeaning(meaning)}
      </View>
    ))}
  </View>
);

const renderMeaning = (meaning) => (
  <>
    <View style={styles.displayInfoRow}>
      <Text style={styles.outputText}>Type:</Text>
      <Text style={styles.normalText}>{meaning.partOfSpeech}</Text>
    </View>
    <View style={styles.displayInfoRow}>
      <Text style={styles.outputText}>Definition:</Text>
      <Text style={styles.normalText}>{meaning.definitions[0].definition}</Text>
    </View>
    <View style={styles.displayInfoRow}>
      <Text style={styles.outputText}>Example:</Text>
      <Text style={styles.normalText}>{meaning.definitions[0].example}</Text>
    </View>
  </>
);

export default SecondScreen;
