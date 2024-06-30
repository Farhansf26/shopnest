import React from 'react';
import new_collection from '../Assets/new_collections'
import Items from './Items';

const NewCollection = () => {
  const renderedCollection = new_collection.map(item => {
    return <Items item={item} key={item.id}/>
  })
  
  return (
    <div className=''>
      <h1 className='text-center text-3xl font-bold pt-4'>NEW COLLECTIONS</h1>
      <div className='itemList'>
        {renderedCollection}
      </div>
    </div>
  );
}

export default NewCollection;
