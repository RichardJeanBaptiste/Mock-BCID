let x = new Date().toTimeString();

x = x.split(':');

x[2] = x[2].slice(0, 2);


console.log(x);

let final = x.join(':');

console.log(final);

