import React from 'react'
import {Text, View } from 'react-native'
import styles from './styles'

interface TextDisplayProps {
    displayTexts: string[]
}

const TextDisplay: React.FC<TextDisplayProps> = ({ displayTexts }) => (
    <View style={styles.outputTextContainer}>
        <View style={styles.textRow}>
            {displayTexts.map((text, index) => (
                <Text 
                key={index}
                style={styles.outputText}
                >{text + ", "}</Text>
            ))}
            </View>
    </View>
);

export default TextDisplay;