const pets = [
    { name: 'Max', type: 'dog', bornOn: 2018 },
    { name: 'Angel', type: 'cat', bornOn: 2015 },
    { name: 'jasper', type: 'dog', bornOn: 2016 }
  ];
  const getAge = pet=>{
    return new Date().getFullYear() - pet.bornOn
    };
    pets.forEach((pet)=>{ pet.age = getAge(pet)})
    console.log("pets", pets);
  const dogss = pets.filter(pet => pet.type === "dog")
  console.log(dogss)
  const petss = pets.find(petss => petss.name == 'jasper')
  console.log(petss)