var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name) {
  kittens.push("Ralph");
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift("Bob");
  return kittens;
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop();
  return kittens;
}
