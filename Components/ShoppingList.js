import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items, deleteItem, editItem }) {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
}
