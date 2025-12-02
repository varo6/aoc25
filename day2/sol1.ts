let file = await Bun.file("input.txt").text();
const ranges = file.split(",");

let sum = 0;

for (let range of ranges) {

  const margin = range.split("-")

  for (let iter = Number(margin[0]); iter <= Number(margin[1]); iter++){

    const s = String(iter);
    if (s.length%2==0){

      const half = s.length/2;
      const p1 = s.slice(0,half);
      const p2 = s.slice(half);

      // Lets say I have 123123 p1 will be 123 and p2 123. We compare.
      if (p1 == p2){
        sum = sum + iter; 
      }
    }

  }

}

console.log(sum)

