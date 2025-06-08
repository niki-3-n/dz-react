import './App.css';

function App() {
  // Змінна з ім'ям
  const myName = 'Поліна';
  // Змінна з URL та описом зображення
  const imgUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
  const imgAlt = 'Природа, гори';
  // Об'єкт з даними посилання
  const favSite = { name: 'Google', url: 'https://www.google.com/' };
  // Дві змінні з числами та їх сума
  const num1 = 7;
  const num2 = 5;
  const sum = num1 + num2;
  // Масив кольорів
  const colors = ['Червоний', 'Синій', 'Зелений'];

  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgUrl} alt={imgAlt} style={{ width: '300px', borderRadius: '8px' }} />
      <p>
        Моє улюблене посилання: <a href={favSite.url} target="_blank" rel="noopener noreferrer">{favSite.name}</a>
      </p>
      <p>Сума чисел {num1} + {num2} = {sum}</p>
      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
