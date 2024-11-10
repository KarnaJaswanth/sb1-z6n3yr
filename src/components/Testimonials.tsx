import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "WriteGenius has transformed my content creation process. The AI suggestions are spot-on and save me hours of editing time.",
  },
  {
    name: "Michael Chen",
    role: "Technical Writer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The grammar correction and style improvements are incredible. It's like having a professional editor by my side.",
  },
  {
    name: "Emma Davis",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "I love how it helps maintain consistent tone across all our marketing materials. A game-changer for our team.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Loved by writers worldwide</h2>
          <p className="mt-4 text-lg text-gray-600">Here's what our users have to say about WriteGenius</p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}