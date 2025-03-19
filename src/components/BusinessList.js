import React from 'react';
import './BusinessList.css';
import Business from './Business';

const businesses = [
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Pasta Paradise',
    address: '2020 Noodle Street',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.3,
    reviewCount: 85
  },
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Sushi Supreme',
    address: '3030 Wasabi Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Japanese',
    rating: 4.7,
    reviewCount: 120
  }
];

function BusinessList() {
  return (
    <div className="BusinessList">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;