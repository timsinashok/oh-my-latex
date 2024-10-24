import React from 'react';
import { Loader2 } from 'lucide-react';


// This is a button component that accepts a loading, onClick function, and disabled prop
const ConvertButton = ({ loading, onClick, disabled }) => (
  <button
    className="button-primary"
    onClick={onClick}
    disabled={disabled}
  >
    {loading ? (
      <>
        <Loader2 className="w-4 h-4 inline-block mr-2 animate-spin" />
        Converting...
      </>
    ) : (
      'Convert & Insert'
    )}
  </button>
);

// Export the ConvertButton component
export default ConvertButton;