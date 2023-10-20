import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
   const [isDataCleared, setIsDataCleared] = useState(false);

  const clearData = () => {
    setPeople([]);
    setIsDataCleared(true);
  };

  const refreshData = () => {
    setPeople(data);
    setIsDataCleared(false);
  };

  return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      {people.length > 0 ? (
          <button onClick={clearData}>
            {isDataCleared ? 'Refresh' : 'Clear All'}
          </button>
        ) : (
          <button onClick={refreshData}>Refresh</button>
        )}
    </section>
  </main>
  );
}

export default App;
