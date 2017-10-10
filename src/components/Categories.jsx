import React from 'react';

export default function (props) {
  const handleSelectCategory = (event) => {
    if (event.target.value !== '') {
      const to = `/category/${event.target.value}`;
      props.history.push(to);
    }
  };
  return (
    <select onChange={handleSelectCategory}>
      <option value="">Select categories</option>
      {props.categories.map(category => (
        <option key={category.category_id} value={category.category_id}>{category.title}</option>
      ))}
    </select>
  );
}
