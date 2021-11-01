let pets = ['cat', 'dog', 'rat'];

counter = 0;

for (let pet in pets) {
    pets[pet] = pets[pet] + 's'
}

console.log(pets)