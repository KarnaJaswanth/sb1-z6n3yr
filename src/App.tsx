import React from 'react';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import { Wand2, Sparkles, Zap, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 text-center lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Write better, faster with
              <span className="text-indigo-600"> AI</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Transform your writing with advanced AI-powered suggestions, real-time grammar checking, and style improvements.
            </p>
            <div className="mt-10">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <Sparkles className="mr-2 h-5 w-5" />
                Try WriteGenius Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Powerful writing features</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to perfect your writing</p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Wand2 className="h-6 w-6 text-indigo-600" />,
                title: "AI Improvements",
                description: "Get smart suggestions to enhance your writing style and clarity"
              },
              {
                icon: <Zap className="h-6 w-6 text-indigo-600" />,
                title: "Real-time Analysis",
                description: "Instant feedback as you write with advanced grammar checking"
              },
              {
                icon: <Brain className="h-6 w-6 text-indigo-600" />,
                title: "Smart Paraphrasing",
                description: "Rewrite content while maintaining original meaning"
              },
              {
                icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
                title: "Style Adaptation",
                description: "Adjust tone and style to match your audience"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Try it yourself</h2>
            <p className="mt-4 text-lg text-gray-600">Experience the power of AI-assisted writing</p>
          </div>
          <TextEditor />
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 WriteGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;