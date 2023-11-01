import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20
    },
    horizontalContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    largeText: {
      marginTop: 15,
      fontWeight: 'bold',
      fontSize: 40
    },
    headingText: {
      color: 'teal',
      fontWeight: 'bold',
      fontSize: 24,
      marginBottom: 16
    },
    mainText: {
      color: 'black',
      padding: 5,
      fontSize: 16
    },
    image: { 
      width: 200, 
      height: 200,
    },
    button: {
      marginTop: 10,
      borderRadius: 30,
      padding: 20,
      color: 'white'
    },
    inputText: {
      color: 'teal',
      padding: 5,
      fontSize: 20,
      marginTop: 10,
      marginBottom: 20
    },
    outputText: {
      padding: 0,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },
    headingAndTextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60
    },
    outputTextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    textRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    customButton: {
      backgroundColor: 'teal',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
      alignItems: 'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    scrollView: {
      alignItems: 'center',
      paddingTop: 20
    }
  });

  export default styles;