import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  Picker,
  Platform,
  SafeAreaView,
  ScrollView,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

const fonts = [
  {
    key: 'roboto-thin',
    name: 'Roboto Thin',
    weight: 100,
    import: require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
  },
  {
    key: 'roboto-thin-italic',
    name: 'Roboto Thin Italic',
    weight: 100,
    import: require('../assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
  },
  {
    key: 'roboto-light',
    name: 'Roboto Light',
    weight: 300,
    import: require('../assets/fonts/Roboto/Roboto-Light.ttf'),
  },
  {
    key: 'roboto-light-italic',
    name: 'Roboto Light Italic',
    weight: 300,
    import: require('../assets/fonts/Roboto/Roboto-LightItalic.ttf'),
  },
  {
    key: 'roboto-regular',
    name: 'Roboto Regular',
    weight: 400,
    import: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
  },
  {
    key: 'roboto-regular-italic',
    name: 'Roboto Regular Italic',
    weight: 400,
    import: require('../assets/fonts/Roboto/Roboto-Italic.ttf'),
  },
  {
    key: 'roboto-medium',
    name: 'Roboto Medium',
    weight: 500,
    import: require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
  },
  {
    key: 'roboto-medium-italic',
    name: 'Roboto Medium Italic',
    weight: 500,
    import: require('../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
  },
  {
    key: 'roboto-bold',
    name: 'Roboto Bold',
    weight: 700,
    import: require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
  },
  {
    key: 'roboto-bold-italic',
    name: 'Roboto Bold Italic',
    weight: 700,
    import: require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
  },
  {
    key: 'roboto-black',
    name: 'Roboto Black',
    weight: 900,
    import: require('../assets/fonts/Roboto/Roboto-Black.ttf'),
  },
  {
    key: 'roboto-black-italic',
    name: 'Roboto Black Italic',
    weight: 900,
    import: require('../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
  },
]

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [fontFamily, setFontFamily] = useState('roboto-regular')
  const [fontSize, setFontSize] = useState(42)
  const [lineHeight, setLineHeight] = useState(50)
  const [text, setText] = useState('The quick brown fox jumps over a lazy dog')

  useEffect(() => {
    const fonstToLoad = fonts.reduce((acc, font) => {
      acc[font.key] = font.import
      return acc
    }, {})
    Font
      .loadAsync(fonstToLoad)
      .then(() => setFontsLoaded(true))
  }, [])

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading fonts.</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.select({ ios: 'padding' })}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Picker
            selectedValue={fontFamily}
            onValueChange={value => setFontFamily(value)}
          >
            {fonts.map(font => (
              <Picker.Item
                key={font.key}
                label={font.name}
                value={font.key}
              />
            ))}
          </Picker>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                { fontFamily, fontSize, lineHeight },
              ]}
            >
              {text}
            </Text>
          </View>
          <View style={styles.controls}>
            <TextInput
              style={styles.textInput}
              value={text}
              onChangeText={setText}
            />
            <Text>Font size: {fontSize}</Text>
            <Slider
              value={fontSize}
              minimumValue={4}
              maximumValue={100}
              step={1}
              onValueChange={setFontSize}
            />
            <Text>Line height: {lineHeight}</Text>
            <Slider
              value={lineHeight}
              minimumValue={4}
              maximumValue={100}
              step={1}
              onValueChange={setLineHeight}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#FFD4CA',
  },
  controls: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  textInput: {
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
  },
})
