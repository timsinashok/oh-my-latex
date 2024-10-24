# oh my latex

Oh My LaTeX is a React application that converts plain text to LaTeX format using an API integration. It allows users to add the converted LaTeX code to the existing LaTeX code in the pointer location within the editor. The app features a dual-pane interface with text input and LaTeX output, where users can enter text and add it to the LaTeX editor. The goal of the project is to enable users to incrementally build a document by adding LaTeX code and eventually copy the final LaTeX code to render a document.

 ![Alt Text](image.png)


## 🚀 Quick Start

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository 
```bash
git clone https://github.com/timsinashok/oh-my-latex.git
cd oh-my-latex
```

2. Install the required dependencies for the app from package.json:
```bash
npm install 
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init
```

### Project Structure
```
oh-my-latex/
├── public/
├── src/
│   ├── components/
│   │  ├── LatexConverter.jsx
│   │  ├── ErrorAlert.jsx
│   │  ├── TextArea.jsx
│   │  ├── Action Button.jsx
│   │  └── ConvertButton.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
├── README.md
└── tailwind.config.js

```

# Running the Application

## 1. API Integration and CORS Restrictions
This application uses the latex2text.com API for text-to-LaTeX conversion. However, due to CORS restrictions, a custom server is used to bypass these restrictions. The custom server is hosted in a separate repository.

To use the custom server, follow these steps:

Clone the custom server repository:
``` bash
git clone https://github.com/yourusername/oh-my-latex-server.git
```

Navigate to the project directory:
```
cd oh-my-latex-server
```

Install the dependencies:
```
npm install
```
Start the server:

```
npm start
```
The server will be available at http://localhost:8080. Make sure to update the API endpoint in the Oh My LaTeX application to point to your custom server.

## 2. Running the platform
1. Start the development server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## 🔧 Features

- **Text to LaTeX Conversion**: Convert plain text to LaTeX format
- **Real-time Preview**: See the LaTeX code as you type
- **Copy to Clipboard**: Easily copy the generated LaTeX code
- **Error Handling**: Clear error messages for failed conversions
- **Loading States**: Visual feedback during conversion process
- **Responsive Design**: Works on both desktop and mobile devices
- **Cursor Position Support**: Insert LaTeX at cursor position in editor


## 📝 Usage

1. Enter your text in the left panel
2. Click "Convert & Insert" to convert the text to LaTeX
3. The converted LaTeX code appears in the right panel
4. Use the copy button to copy the LaTeX code to clipboard
5. Clear inputs using the clear button when needed

## 🔍 Error Handling

The app handles various error scenarios:
- API connection failures
- Invalid input text
- Conversion errors
- Clipboard operation failures

Error messages are displayed in a dismissible alert at the top of the page.

## 💡 Tips

1. For best results, enter plain text without special formatting
2. Use the cursor position feature to insert LaTeX at specific locations
3. Check the console for detailed error messages during development
4. Use environment variables for API configuration



### Testing

Run the test suite:
```bash
npm test
```

### Building for Production

Create a production build:
```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

