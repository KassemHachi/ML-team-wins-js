const brain = require('brain.js');
const network = new brain.NeuralNetwork();
network.train([
    {input:[1,2] , output:[0]}, //team 1 wins
    {input:[3,4] , output:[1]},//team 4 wins
    {input:[1,3] , output:[0]},//team 1 wins
    {input:[2,4] , output:[1]},//team 4 wins
    {input:[3,2] , output:[0.5]}, //   team 3 and team 2 are equals
    
]);
const output = network.run([4,1]);
console.log(output);