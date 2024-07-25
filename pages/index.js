import { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddItemForm from '../components/AddItemForm';

export default function HomePage() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, updatedItem) => {
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <AddItemForm addItem={addItem} />
      <ShoppingList items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default function AddItemForm({ addItem }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ id: Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add</button>
    </form>
  );
}
