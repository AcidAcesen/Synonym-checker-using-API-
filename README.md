# Synonym Checker using API

This project, Synonym Checker using API, is a web application that allows users to find synonyms for a given word. The application utilizes the Words API to fetch synonyms for the input word. It is implemented using HTML, CSS, and JavaScript.

## Usage

1. **Open the Application:**
   - Open the `index.html` file in your web browser.

2. **Enter Word:**
   - Input a word in the provided text field.

3. **Get Synonym:**
   - Click the "Get Synonym" button to retrieve synonyms for the entered word.

4. **View Results:**
   - The application will display the first synonym found for the entered word.

## you can also visit it [here](https://acidacesen.github.io/Synonym-checker-using-API-/)

## Installation
No installation is required for this web app. Ensure you have a modern web browser with JavaScript enabled.

## API Integration
The application uses the Words API. If needed, make adjustments to the code, such as adding your API key or modifying the endpoint URLs.

javascript
```
Copy code
// Replace 'YOUR_WORDS_API_KEY' with your actual Words API key
const options = {
    // ... other options
    headers: {
        'X-RapidAPI-Key': 'YOUR_WORDS_API_KEY',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};
```
