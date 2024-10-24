import React, { useState, useRef } from 'react';
import { Copy, RotateCcw } from 'lucide-react'; // Icons for buttons
import { convertToLatex } from '../services/api'; // API service to convert text to LaTeX
import ErrorAlert from './ErrorAlert'; // Component to display error messages
import ConvertButton from './ConvertButton'; // Button component for triggering conversion
import TextArea from './TextArea'; // Reusable text area component
import ActionButton from './ActionButton'; // Button component for performing actions like clearing or copying

// This is the main component that will be rendered in the app
const LatexConverter = () => {
  // State variables to track input text, LaTeX code, loading status, and errors
  const [inputText, setInputText] = useState('');
  const [latexCode, setLatexCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Reference to the LaTeX editor text area, used for manipulating cursor position
  const latexEditorRef = useRef(null);

  // Helper function to insert converted LaTeX at the current cursor position in the LaTeX editor
  const insertAtCursor = (baseText, insertion, cursorPos) => {
    return baseText.slice(0, cursorPos) + insertion + baseText.slice(cursorPos);
  };

  // Async function to handle text-to-LaTeX conversion
  const handleConvert = async () => {
    // Do nothing if input text is empty or just whitespace
    if (!inputText.trim()) return;

    // Set loading state and clear any previous errors
    setLoading(true);
    setError('');

    try {
      // Call API to convert input text to LaTeX
      const convertedLatex = await convertToLatex(inputText);
      
      // Get the current cursor position in the LaTeX editor, or default to the end of the LaTeX code
      const cursorPos = latexEditorRef.current?.selectionStart || latexCode.length;
      
      // Insert the converted LaTeX at the current cursor position and update the state
      const newLatexCode = insertAtCursor(latexCode, convertedLatex, cursorPos);
      setLatexCode(newLatexCode);
      
      // Clear the input text after successful conversion
      setInputText('');
    } catch (err) {
      // Set error message if conversion fails
      setError(err.message || 'Error converting text to LaTeX');
    } finally {
      // Reset loading state once conversion is complete
      setLoading(false);
    }
  };

  // Function to handle copying the LaTeX code to the clipboard
  const handleCopy = async () => {
    try {
      // Use the browser's clipboard API to copy the LaTeX code
      await navigator.clipboard.writeText(latexCode);
    } catch (err) {
      // Set an error message if the copy operation fails
      setError('Failed to copy to clipboard');
    }
  };

  return (
    <div className="latex-converter">
      <h1 className="text-2xl font-semibold mb-4">oh my latex</h1>

      {/* Error message display, only shown if there's an error */}
      {error && <ErrorAlert message={error} onDismiss={() => setError('')} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input section */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Input Text</h2>
          <div className="space-y-2">
            {/* Text area for entering input text */}
            <TextArea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text here..."
            />
            {/* Button to clear the input text */}
            <ActionButton
              icon={RotateCcw}
              text="Clear Input"
              onClick={() => setInputText('')}
              disabled={!inputText} // Disabled if input is empty
            />
          </div>
          <div className="mt-4">
            {/* Button to trigger the LaTeX conversion, disabled if loading or no input */}
            <ConvertButton
              loading={loading}
              onClick={handleConvert}
              disabled={loading || !inputText.trim()}
            />
          </div>
        </div>

        {/* Output section */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">LaTeX Code</h2>
          <div className="space-y-2">
            {/* Text area to display the converted LaTeX code */}
            <TextArea
              ref={latexEditorRef} // Reference used for cursor positioning
              value={latexCode}
              onChange={(e) => setLatexCode(e.target.value)}
              placeholder="LaTeX code will appear here..."
              className="font-mono" // Apply monospaced font for code
            />
            {/* Button to copy the LaTeX code to the clipboard */}
            <ActionButton
              icon={Copy}
              text="Copy LaTeX"
              onClick={handleCopy}
              disabled={!latexCode} // Disabled if there's no LaTeX code to copy
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the LatexConverter component
export default LatexConverter;
