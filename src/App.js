import React, { useState, useEffect } from 'react';
import Item from './Item';
import './index.css';
import './Alert';
import Alert from './Alert';

const App = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    textAlert: '',
    color: '',
  });

  const showAlert = (show = false, textAlert = '', color = '') => {
    setAlert({ show, textAlert, color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      showAlert(true, 'поле не может быть пустым', 'error');
      setItems([...items]);
    } else if (isEditing && input) {
      setItems(
        items.map((item) => {
          if (item.id === editId) {
            return { ...item, name: input };
          }
          return item;
        })
      );
      setEditId(null);
      showAlert(true, 'задание изменено', 'success');
      setIsEditing(false);
      setInput('');
    } else {
      const newItem = { id: new Date().getTime().toString(), name: input };
      setItems([...items, newItem]);
      showAlert(true, 'задание добавлено', 'success');
      setInput('');
    }
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    showAlert(true, 'задание удалено', 'success');
  };

  const editItem = (id) => {
    const editingItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setInput(editingItem.name);
  };

  const handleClick = () => {
    setItems([]);
    showAlert(true, 'все задание удалено', 'success');
  };

  return (
    <section className="section">
      {items.length < 1 ? (
        <h1 className="section__heading">Список заданий</h1>
      ) : (
        <h1 className="section__heading">Список заданий(кол {items.length})</h1>
      )}

      {alert.show && <Alert {...alert} removeAlert={showAlert} items={items} />}
      <form
        className="section__form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="section__input"
          id="id"
          value={input}
          placeholder="введите задание"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="section__button">
          {
            isEditing ? 'Изменить' : 'Добавить'
          }
        </button>
      </form>
      <Item items={items} removeItem={removeItem} editItem={editItem} />
      {items.length > 0 && (
        <button onClick={handleClick} className="section__deleteBtn">
          Удалить все
        </button>
      )}
    </section>
  );
};

export default App;
