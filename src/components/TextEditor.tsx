import React, { useState } from 'react';
import { Wand2, SwitchCamera, Maximize2, Minimize2, Type, Palette } from 'lucide-react';

export default function TextEditor() {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAction = (action: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleAction('improve')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Wand2 className="h-4 w-4" />
            Improve
          </button>
          <button
            onClick={() => handleAction('paraphrase')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <SwitchCamera className="h-4 w-4" />
            Paraphrase
          </button>
          <button
            onClick={() => handleAction('lengthen')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Maximize2 className="h-4 w-4" />
            Lengthen
          </button>
          <button
            onClick={() => handleAction('shorten')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Minimize2 className="h-4 w-4" />
            Shorten
          </button>
          <button
            onClick={() => handleAction('grammar')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Type className="h-4 w-4" />
            Fix Grammar
          </button>
          <button
            onClick={() => handleAction('tone')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Palette className="h-4 w-4" />
            Change Tone
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter or paste your text here..."
          className="w-full h-64 p-4 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />
      </div>

      {isProcessing && (
        <div className="p-4 bg-indigo-50 border-t">
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-600 border-t-transparent"></div>
            <span className="text-indigo-600">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}