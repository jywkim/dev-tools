const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string', 'SMALL');

// Styled
console.log('%c welcome to the jungle', 'font-size:20px; background:blue; text-shadow: 10px 10px 0 red');

// warning!
console.warn('this is a warning');

// Error :|
console.error('this is an error');

// Info
console.info('this is some information');

// Testing
console.assert(1 === 2, 'that is wrong');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('jon');
console.count('kobe');
console.count('jon');
console.count('jon');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/jywkim')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
