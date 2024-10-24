import React from 'react';
import { Loader2 } from 'lucide-react';

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

export default ConvertButton;