let file = await Bun.file("input.txt").text();
const ranges = file.split(",");

let sum = 0;

for (let range of ranges) {

  const margin = range.split("-")

  for (let iter = Number(margin[0]); iter <= Number(margin[1]); iter++){

    const s = String(iter);
    for (let div of getDivisors(s.length)){

      const splitted = s.length / div;
      const arr = [];

      for (let i = 0; i < s.length; i += splitted) {
        const splits = s.slice(i, i + splitted); 
        arr.push(Number(splits));               
      }
      
      if (new Set(arr).size ==1 ) {
        sum = sum + iter;
        break;
      }
        


    }


  }

}



function getDivisors(n) {
  const result = [];

  for (let d = 2; d <= n; d++) {
    if (n % d === 0) {
      result.push(d);
    }
  }

  return result;
}


console.log(sum)

