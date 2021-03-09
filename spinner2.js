const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

// the first spinner symbol should start at 100ms
let time = 100;
// for...of loop to iterate over array, creation of symb of spinner (iterable object)
for (const symb of spinner) {
  setTimeout(() => {
    // we want loop to process to return to the same spot (thus adding \r)
    // it will return each character in the array to the same spot
    process.stdout.write(`\r ${symb}`);
    // increment up by 200ms
  }, time += 200);
}