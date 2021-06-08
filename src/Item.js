import React from 'react';
import { VscEdit } from 'react-icons/vsc';
import { MdRemoveCircleOutline } from 'react-icons/md';

const Item = ({ items, removeItem, editItem }) => {
  return (
    <div className="section__items">
      {items.map((item) => {
        const { name, id } = item;
        return (
          <div className="section__items--item" key={id}>
            <h4 className="section__items--item--name">{name}</h4>
            <button
              className="section__items--item--edit"
              onClick={() => editItem(id)}
            >
              <VscEdit className="section__items--item--edit--icon1" />
            </button>
            <button
              className="section__items--item--remove"
              onClick={() => removeItem(id)}
            >
              <MdRemoveCircleOutline className="section__items--item--remove--icon2" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
