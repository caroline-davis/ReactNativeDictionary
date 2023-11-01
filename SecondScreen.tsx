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
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Delleboersterheide%2C_natuurgebied_van_het_It_Fryske_Gea._25-12-2019._%28actm.%29_10.jpg/2560px-Delleboersterheide%2C_natuurgebied_van_het_It_Fryske_Gea._25-12-2019._%28actm.%29_10.jpg' }}
        style={styles.image}
      />
      {apiData && (
        <View>
          <Text>API Data:</Text>
          <Text>Title: {apiData.title}</Text>
          <Text>Body: {apiData.body}</Text>
        </View>
      )}
      <Button title="Go Back" 
      onPress={() => navigateToScreen(navigation, 'Home')} />
    </View>
  );
}

export default SecondScreen;
