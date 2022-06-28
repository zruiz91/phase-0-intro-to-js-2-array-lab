// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};

destructivelyAppendCat;

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

destructivelyPrependCat;

function destructivelyRemoveLastCat(name) {
    cats.pop();
};

destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat(name) {
    cats.shift();
};

destructivelyRemoveLastCat;

function appendCat(name) {
     const newCats = [...cats,name,];
     return newCats;
};

appendCat;

function prependCat(name) {
    const newCats = [name, ...cats,];
    return newCats;
};

prependCat;

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
};

removeLastCat;

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}

removeFirstCat;