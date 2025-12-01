const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

let dial = 50;
let password = 0;
let lastzero = 0;


for (const line of lines) {

  console.log(`now dial is ${dial}`)
  
  if (line.startsWith("L")) {

    const num = parseInt(line.slice(1), 10);
    const ndial = dial - num;

    let k0 = dial % 100;
    if (k0 === 0) { k0 = 100 };                
    if (num >= k0) {
      password += 1 + Math.floor((num - k0) / 100); // Math.floor truncates 
    }

    dial = sanitize(ndial);

  } else if (line.startsWith("R")) {

    const num = parseInt(line.slice(1), 10);
    const ndial = dial + num;

    password += Math.floor((dial + num) / 100);

    dial = sanitize(ndial);

  }
}


function sanitize(dial) {

  if (dial < 0) {
    const newdial = 100 + dial;
    return sanitize(newdial);
  } else if (dial > 99) {
    const newdial = dial - 100;
    return sanitize(newdial);
  }
  return dial;

}

console.log(`la pass es  ${password}`);

