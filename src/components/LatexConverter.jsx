import React, { useState, useRef } from 'react';
import { Copy, RotateCcw } from 'lucide-react';
import { convertToLatex } from '../services/api';
import ErrorAlert from './ErrorAlert';
import ConvertButton from './ConvertButton';
import TextArea from './TextArea';
import ActionButton from './ActionButton';

const LatexConverter = () => {
  const [inputText, setInputText] = useState('');
  const [latexCode, setLatexCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const latexEditorRef = useRef(null);

  const insertAtCursor = (baseText, insertion, cursorPos) => {
    return baseText.slice(0, cursorPos) + insertion + baseText.slice(cursorPos);
  };

  const handleConvert = async () => {
    if (!inputText.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const convertedLatex = await convertToLatex(inputText);
      const cursorPos = latexEditorRef.current?.selectionStart || latexCode.length;
      const newLatexCode = insertAtCursor(latexCode, convertedLatex, cursorPos);
      setLatexCode(newLatexCode);
      setInputText('');
    } catch (err) {
      setError(err.message || 'Error converting text to LaTeX');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(latexCode);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  return (
    <div className="latex-converter">
      {error && <ErrorAlert message={error} onDismiss={() => setError('')} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Input Text</h2>
          <div className="space-y-2">
            <TextArea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text here..."
            />
            <ActionButton
              icon={RotateCcw}
              text="Clear Input"
              onClick={() => setInputText('')}
              disabled={!inputText}
            />
          </div>
          <div className="mt-4">
            <ConvertButton
              loading={loading}
              onClick={handleConvert}
              disabled={loading || !inputText.trim()}
            />
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">LaTeX Code</h2>
          <div className="space-y-2">
            <TextArea
              ref={latexEditorRef}
              value={latexCode}
              onChange={(e) => setLatexCode(e.target.value)}
              placeholder="LaTeX code will appear here..."
              className="font-mono"
            />
            <ActionButton
              icon={Copy}
              text="Copy LaTeX"
              onClick={handleCopy}
              disabled={!latexCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatexConverter;