// 1. Se da urmatorul string:
let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Rob, Vicentiu";

// 1.1 Verifica daca numele "Rob" se afla pe lista.

let checkRob = badKids.includes("Rob");
console.log("Ex.1 ", checkRob);

// 1.2 Daca numele "Rob" se afla pe lista, modifica lista, astfel incat in locul lui "Rob" sa fie "Mihai".

let replaceRobWithMihai = badKids.replace("Rob", "Mihai");
console.log("Ex.1.2 ", replaceRobWithMihai);

// 2. Se da urmatorul string:
const testGrades = "9.80/6.85/9.10/7.80/8.20";

// Sa se calculeze media aritmetica a notelor.
// HINT: Transforma string-ul intr-un array si apoi itereaza prin array.

let splitGrades = testGrades.split("/");
console.log("Ex.2 ", splitGrades);

let avg = 0;
splitGrades.forEach((item) => {
    avg += item / splitGrades.length;
})
console.log("Ex.2 ", avg);


// 3. Se da urmatorul obiect:
const props = {
  name: 'Minge fotbal Nike T90',
  price: 220,
  currency: "RON",
  brand: "Nike"
}
// 3.1. Extrage din obiect valorile urmatoarelor proprietati: name, price, currency.

let nameToReturn = "name";
props[nameToReturn];
console.log("Ex.3.1 ", props[nameToReturn]);

let priceToReturn = "price";
props[priceToReturn];
console.log("Ex.3.1 ", props[priceToReturn]);

let currencyToReturn = "currency";
props[currencyToReturn];
console.log("Ex.3.1 ", props[currencyToReturn]);

// 3.2. Folosind proprietatile extrase anterior, afiseaza un mesaj de forma: "Produsul NAME are pretul PRICE".

console.log("Ex.3.2 ", `Produsul ${props[nameToReturn]} are pretul ${props[priceToReturn]}`);

// 4. Se da inca un obiect:
const additionalProps = {
  isAvailable: true
};

// Creeaza un obiect nou, care sa contina proprietatile obiectelor props si additionalProps.

//Varianta 1
let newObject = {
  ...props,
  ...additionalProps
};

console.log("Ex.4 ", newObject);

//Varianta 2
let newObject2 = Object.assign(props, additionalProps);

console.log("Ex.4 ", newObject2);