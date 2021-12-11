const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const keys in apartment) {
  console.log(keys)
return keys};
  for (const values in apartment) {
    console.log(apartment[values])
  };
  