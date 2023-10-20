import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map((item) =>
  item.category))];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, Setcategories] = useState(allCategories);

  const filterItems = (category) => {

    if (category == "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) =>
      item.category === category
    )
    setMenuItems(newItems)
  };

  return (
    <main>
      <section className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;