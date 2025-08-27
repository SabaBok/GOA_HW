// Node.js არის პროგრამირების გარემო, რომელითაც ვწერთ JavaScript კოდს კომპიუტერში, არა მარტო ბრაუზერში. ამის მეშვეობით 
// შეგვიძლია შევასრულოთ ფაილები, ვაწყოთ სერვერები, ვიმუშაოთ მონაცემებთან.

// package.json ფაილი არის ფაილი, სადაც ინახება ინფორმაცია ჩვენი პროექტის შესახებ:
// მაგალითად, პროექტის სახელი, ვერსია, რომელ packages-ებს ვიყენებთ, და scripts-ები რომლებიც ვახშებთ.

// ჩვენ დავაყენეთ lodash package. lodash არის JavaScript ბიბლიოთეკა, რომელიც გვეხმარება
// მარტივად ვმართოთ მასივები, ობიექტები, სტრინგები და ბევრი სხვა.
// მაგალითად, მას აქვს ფუნქციები როგორიცაა _.shuffle(), _.uniq(), _.camelCase(), _.cloneDeep().

// ============================================================ //

const _ = require('lodash');

const myArray = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(myArray);
console.log('Shuffled Array:', shuffledArray);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);
console.log('Unique Numbers:', uniqueNumbers);

const myString = 'hello world from node';
const camelCaseString = _.camelCase(myString);
console.log('CamelCase String:', camelCaseString);
