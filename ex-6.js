const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const lowerCaseBrand = carBrand.toLowerCase();

  const index = carCollection.indexOf(lowerCaseBrand);
    if (index !== -1) {
    return `${carBrand} already exists in position ${index} of the car collection.`;
  } else {
    carCollection.push(lowerCaseBrand);

    return `New car collection is: ${carCollection.map(car => car.charAt(0).toUpperCase() + car.slice(1)).join(", ")}`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.