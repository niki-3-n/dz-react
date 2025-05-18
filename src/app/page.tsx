'use client';

import React from 'react';

export default function Home() {
  // Змінна з іменем
  const name = "Nikita";

  // Об'єкт з даними посилання
  const favoriteWebsite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  // Змінні з числами
  const number1 = 10;
  const number2 = 20;
  const sum = number1 + number2;

  // Масив кольорів
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">{name}</h1>
        
        <p className="text-xl text-gray-600 text-center">
          Ласкаво просимо до нашого сайту!
        </p>
        
        <div className="flex justify-center">
          <img 
            src="https://picsum.photos/200/300" 
            alt="Випадкове зображення"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        <div className="text-center">
          <a 
            href={favoriteWebsite.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline text-lg"
          >
            {favoriteWebsite.name}
          </a>
        </div>

        <p className="text-lg text-gray-700 text-center">
          Сума чисел {number1} та {number2} дорівнює: {sum}
        </p>

        <ul className="space-y-3">
          {colors.map((color, index) => (
            <li 
              key={index}
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              {color}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
