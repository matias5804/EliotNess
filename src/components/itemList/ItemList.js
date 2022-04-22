



/** ItemList va a mapear los items  , le viene items de afuera (desde itemListContainer)*/

/**mapeo items, donde cada item retorna un item con un key que sea item.id y con un titem que sea item ( item={item})*/
import React from 'react';
import Item from '../item/Item';


export const ItemList = ({ items }) => {
  return (
    <section className="tienda">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};