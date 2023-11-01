import axios from 'axios';

export async function fetchDataFromAPI(word: string): Promise<any> {
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        return response.data
    } catch (error) {
        throw error
    }
}