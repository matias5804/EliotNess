import React, { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import MockedItems from '../mock/MockedItems';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(MockedItems);
      }, 1000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);
  
  //console.log(items);
  return (
    <ItemList items={items} />
  )
}