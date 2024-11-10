import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Basic text improvements",
      "Grammar checking",
      "5 documents per day",
      "2,000 words per document",
    ],
    cta: "Start Free",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: [
      "Advanced text improvements",
      "Style suggestions",
      "Unlimited documents",
      "10,000 words per document",
      "Tone adjustment",
      "Plagiarism checker"
    ],
    cta: "Start Pro Trial",
    highlighted: true
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom templates",
      "Analytics dashboard",
      "Priority support",
      "API access"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the plan that's right for you</p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted
                  ? 'ring-2 ring-indigo-600 scale-105 bg-white'
                  : 'bg-white'
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500">{plan.period}</span>
                  )}
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-4 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}