function oddball_sum(nums){
    let sum = nums.reduce((accumulator, currentValue) => {
        if (currentValue % 2 !== 0) {   // check odd
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0);
    console.log(sum);
}
/*Do not change the code below*/

const readline = require('readline');
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
 });
 let noGuessName = []
 rl.on('line', function(line){
  noGuessName= line.split(" ").map(a=>parseInt(a))
  oddball_sum(noGuessName)
  })
