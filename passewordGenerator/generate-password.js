var generator = require('generate-password');

let pwd = generator.generate({
    length: 12,
    numbers: true,
}
);

console.log(pwd);