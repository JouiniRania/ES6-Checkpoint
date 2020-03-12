import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
//   function getAge(pet) {
//     return new Date().getFullYear() - pet.bornOn;
//   }

  const getAge = pet=>{
  return new Date().getFullYear() - pet.bornOn
  };
  const petsWithAge = [];
  pets.forEach((pet)=> {
    pet.age = getAge(pet);
    petsWithAge.push(pet);
  })
  console.log(petsWithAge);  
  
  const dogs = [];
  pets.forEach((pet)=> {
    if (pet.type === "dog") {
      dogs.push(pet);
    }
  })
  console.log(dogs);
  
  let jasper;
 pets.forEach((pet)=> {
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  })
 // console.log("Jasper is " + jasper.age + " years old");
  console.log(`Jasper is ${jasper.age} years old`);

serviceWorker.unregister();
