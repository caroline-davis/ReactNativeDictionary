import { StyleSheet } from 'react-native'

const colors = {
  teal: 'teal',
  black: 'black',
  white: 'white',
};

const fontSizes = {
  small: 16,
  medium: 20,
  large: 40,
};

const padding = {
  small: 5,
  medium: 10,
  large: 20,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  middleContainer: {
    alignItems: 'center',
  },
  largeText: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: fontSizes.large,
  },
  headingText: {
    color: colors.teal,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
  },
  mainText: {
    color: colors.black,
    padding: padding.small,
    fontSize: fontSizes.small,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: padding.small,
    borderRadius: 30,
    padding: padding.large,
    backgroundColor: colors.teal,
    color: colors.white,
  },
  inputText: {
    color: colors.teal,
    padding: padding.small,
    fontSize: fontSizes.medium,
    marginTop: padding.small,
    marginBottom: padding.large,
  },
  outputText: {
    padding: 0,
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSizes.small,
  },
  normalText: {
    fontSize: fontSizes.small,
  },
  headingAndTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  textRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    backgroundColor: colors.teal,
    borderRadius: 10,
    padding: padding.medium,
    marginBottom: padding.large,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
  scrollView: {
    alignItems: 'center',
    paddingTop: 20,
  },
  displayInfoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: padding.small,
    justifyContent: 'flex-start',
  },
  displayContainerRow: {
    padding: padding.large,
  },
});

export default styles;