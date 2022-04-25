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

let sum = 0;
let splitGrades = testGrades.split("/");
splitGrades.forEach((testGrade) => {
    testGrade = Number(testGrade)
    sum = sum + testGrade;
})
const average = sum / testGrades.length;
console.log("Ex.2 ", average);


// 3. Se da urmatorul obiect:
const props = {
  name: 'Minge fotbal Nike T90',
  price: 220,
  currency: "RON",
  brand: "Nike"
}
// 3.1. Extrage din obiect valorile urmatoarelor proprietati: name, price, currency.

const { name, price, currency } = props;
const message = `Produsul ${name} are pretul ${price} ${currency}.`
console.log(message);

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