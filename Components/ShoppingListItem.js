import { useState } from "react";

export default function ShoppingListItem({ item, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);

  const handleEdit = () => {
    editItem(item.id, { ...item, name });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <span>{item.name}</span>
      )}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
}
