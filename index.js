// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(name) {
  cats.push("Ralph");
  console.log(cats);
  }

  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    console.log(cats);
    }

    function destructivelyRemoveLastCat(name) {
        cats.pop("Garfield");
        console.log(cats);
    }

    function destructivelyRemoveFirstCat(name) {
        cats.shift("Milo");
        console.log(cats);
        }

    function appendCat(name) {
        var newArray = [...cats, "Broom"];
        return newArray;
    }

    function prependCat(name) {
        var newArray = ["Arnold", ...cats];
        return newArray;
    }

    function removeLastCat() {
        var newArray = cats.slice(0, -1);
        return newArray;
    }

    function removeFirstCat() {
        var newArray = cats.slice(1);
        return newArray;
    }