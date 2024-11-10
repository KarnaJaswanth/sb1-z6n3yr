import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">WriteGenius</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Demo</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                Try Now
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Demo</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Try Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}