
---

# Profanity Filter Library

A versatile library for filtering out profanity words in various languages. This library helps in cleaning up text by detecting and replacing inappropriate words based on configurable language codes.

## Features

- **Multilingual Support**: Includes profanity lists for multiple languages.
- **Customizable**: Easy to extend with additional languages and words.
- **Flexible Filtering**: Can be integrated into various applications to ensure clean and appropriate content.

## Installation

To use the library, you can install it via npm:

```bash
npm install @tekdi/multilingual-profanity-filter
```

## Usage

### Basic Usage

1. **Import the Library**

   ```javascript
   import { filterBadWords } from '@tekdi/multilingual-profanity-filter';
   ```

2. **Filter Text**

   Use the `filterBadWords` function to filter out profanity from a given text. You need to provide the text and the language code for filtering.

   ```javascript
   const inputText = "I am so tired of these idiots. This is complete bullshit";
   const languageCode = "en"; // Use "en" for English

   const filteredText = filterBadWords(inputText, languageCode);

   console.log(filteredText);
   // Expected Output: "I am so tired of these i****. This is complete b****ts"
   ```

### Supported Languages

Currently, the library supports the following languages:

- **English** (`en`)
- **Hindi** (`hi`)
- **Marathi** (`mr`)
- **Tamil** (`ta`)
- **Gujarati** (`gu`)
- **Kannada** (`kn`)
- **Nepali** (`ne`)

To add support for additional languages, you can extend the `badWords.json` file with the desired language's profanity list.

### Configuration

To configure or add new languages, modify the `badWords.json` file located in the `Badwords` directory. The file should be structured as follows:

```json
{
  "en": ["badword1", "badword2"],
  "hi": ["गाली1", "गाली2"],
  "mr": ["गालिच्या शब्द1", "गालिच्या शब्द2"],
  "ta": ["பொய்யான சொல்1", "பொய்யான சொல்2"],
  "gu": ["ગંદી શબ્દ1", "ગંદી શબ્દ2"],
  "kn": ["ಕಿಡಿ ಶಬ್ದ1", "ಕಿಡಿ ಶಬ್ದ2"]
}
```

## Contributing

We welcome contributions to this project! Follow the steps below to get started:

1. **Fork the Repository**: Click the "Fork" button at the top right corner of the repository page.

2. **Clone the Repository**: Use the following command to clone the repository to your local machine.

   ```bash
   git clone https://github.com/Sunbird-ALL/all-multilingual-profanity-filter.git
   ```

3. **Navigate to the Project Directory**:

   ```bash
   cd all-multilingual-profanity-filter
   ```

4. **Create a New Branch**: Create a new branch for your feature or bugfix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make Changes**: Implement your feature or bugfix.

6. **Commit Your Changes**: Commit your changes with a descriptive commit message.

   ```bash
   git commit -m "Add feature: description of the feature"
   ```

7. **Push to Your Branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Submit a Pull Request**: Go to the original repository and click "New Pull Request".

### License

This library is licensed under the [MIT License](LICENSE).

## Contact

For any questions or support, please contact [Ajinkya Pande](mailto:ajinkyapande98@gmail.com).

---