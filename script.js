// // // // "use strict";
// // // // // // // // // // // // // isAnagram = (a, b) => {
// // // // // // // // // // // // //   sort = (str) => {
// // // // // // // // // // // // //     return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
// // // // // // // // // // // // //   };
// // // // // // // // // // // // //   return sort(a) === sort(b);
// // // // // // // // // // // // // };

// // // // // // // // // // // // //  // true
// // // // // // // // // // // // //  // true
// // // // // // // // // // // // //  // true
// // // // // // // // // // // // //  // true
// // // // // // // // // // // // //  // false

// // // // // // // // // // // // // isPalendrome = (str) =>
// // // // // // // // // // // // //   str.toLowerCase().split("").reverse().join("") === str.toLowerCase();

// // // // // // // // // // // // //  // true
// // // // // // // // // // // // //  // true
// // // // // // // // // // // // //  // false
// // // // // // // // // // // // //  // false
// // // // // // // // // // // // //  // false
// // // // // // // // // // // // //  // false
// // // // // // // // // // // // //  // false

// // // // // // // // // // // // // countRepeatedLetters = (str) => {
// // // // // // // // // // // // //   let count = 1;
// // // // // // // // // // // // //   let arr = str.split("");
// // // // // // // // // // // // //   let finalArray = [];

// // // // // // // // // // // // //   for (let i = 0; i < arr.length; i++) {
// // // // // // // // // // // // //     if (arr[i] === arr[i + 1]) {
// // // // // // // // // // // // //       count++;
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       finalArray = [...finalArray, count + arr[i]];
// // // // // // // // // // // // //       count = 1;
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }
// // // // // // // // // // // // //   return finalArray.join("");
// // // // // // // // // // // // // };

// // // // // // // // // // // // //  //4a5b4c4d3e6f
// // // // // // // // // // // // //

// // // // // // // // // // // // // countWords = (str) => {
// // // // // // // // // // // // //   let map = {};
// // // // // // // // // // // // //   const arr = str
// // // // // // // // // // // // //     .toLowerCase()
// // // // // // // // // // // // //     .replace(/[^A-Za-z0-9 ]/g, "")
// // // // // // // // // // // // //     .split(" ");

// // // // // // // // // // // // //   for (const word of arr) {
// // // // // // // // // // // // //     if (word.length > 0) {
// // // // // // // // // // // // //       map[word] ? map[word]++ : (map[word] = 1);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   return map;
// // // // // // // // // // // // // };

// // // // // // // // // // // // // // console.log(
// // // // // // // // // // // // // //   countWords(
// // // // // // // // // // // // // //     "It's not safe out here. It's wondrous, with treasures to satiate desires both subtle and gross; but it's not for the timid. We're a most promising species, Mr. Spock, as predators go. Did you know that? I frequently have my doubts. I don't. Not any more. And maybe in a thousand years or so, we'll be able to prove it. To be human is to be complex. You can't avoid a little ugliness -- from within -- and from without. A species that enslaves other beings is hardly superior -- mentally or otherwise.  Sometimes a feeling is all we humans have to go on. A library serves no purpose unless someone is using it. One man cannot summon the future. But one man can change the present!  I speak of rights! A machine has none; a man must. If you do not grant him that right, you have brought us down to the level of the machine; indeed, you have elevated that machine above us!  A species that enslaves other beings is hardly superior -- mentally or otherwise. To Boldly Go Where No Man Has Gone Before... Do you know the old Klingon proverb that revenge is a dish best served cold? It is very cold — in space. Perhaps man wasn't meant for paradise. Maybe he was meant to claw, to scratch all the way. Leave bigotry in your quarters; there's no room for it on the bridge. Genius doesn't work on an assembly line basis. Did Einstein, Kazanga or Sitar of Vulcan produce new and revolutionary theories on a regular schedule? You can't simply say, 'Today I will be brilliant.' Change is the essential process of all existence. You know the greatest danger facing us is ourselves, and irrational fear of the unknown. There is no such thing as the unknown. Only things temporarily hidden, temporarily not understood. A species that enslaves other beings is hardly superior -- mentally or otherwise. Beam Me Up, Scotty! You’ve never really faced death, have you?” “...No; not like this. I haven’t faced death. I’ve cheated death. I’ve tricked my way out of death and patted myself on the back for my ingenuity; I know nothing. When dreams become more important than reality, you give up travel, building, creating; you even forget how to repair the machines left behind by your ancestors. You just sit living and reliving other lives left behind in the thought records. Humans do have an amazing capacity for believing what they choose -- and excluding that which is painful. It was the best of times, it was the worst of times.’ …Message, Spock?” “…None that I am conscious of — save, perhaps, for ‘Happy Birthday.‘"
// // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // );

// // // // // // // // // // // // // console.log(
// // // // // // // // // // // // //   countWords(
// // // // // // // // // // // // //     " Capt. Malcolm Reynolds: It's of interest to me how much you seem to know about that world.  Shepherd Book: I wasn't born a shepherd, Mal.  Capt. Malcolm Reynolds: You have to tell me about that sometime.  Shepherd Book: [pause] No, I don't. Capt. Malcolm Reynolds: Love. You can learn all the math in the 'verse... but you take a boat in the air that you don't love... she'll shake you off just as sure as the turn of the worlds. Love keeps her in the air when she ought to fall down... tells you she's hurting before she keels. Makes her a home. Dr. Simon Tam: Am I talking to Miranda now?  [River makes a face]  Dr. Simon Tam: No. Not right. Capt. Malcolm Reynolds: I got no answers for you, Inara. I got no rudder. Wind blows northerly, I go north. That's who I am. Now, maybe that ain't a man to lead, but they have to follow. So you wanna tear me down... do it inside your own mind. I'm not trying to tear you down. But you fog things up. You always have. You spin me about. I wish like hell you was elsewhere.  Inara Serra: I was. Kaylee Frye: [to Simon who wasn't on the mission that the captain and others just got back from] Are you ok?  Capt. Malcolm Reynolds: Is *he* OK? "
// // // // // // // // // // // // //   )
// // // // // // // // // // // // // );

// // // // // // // // // // // // // // class Car {
// // // // // // // // // // // // // //   constructor(options){
// // // // // // // // // // // // // //     this.title = options.title;
// // // // // // // // // // // // // //     this.year = options.year
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // //   honk(){
// // // // // // // // // // // // // //     return 'vroom'
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // class Motorcycle extends Car {
// // // // // // // // // // // // // //   constructor(options){
// // // // // // // // // // // // // //     super(options);
// // // // // // // // // // // // // //     this.color = options.color;
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   beep(){
// // // // // // // // // // // // // //     return 'beep'
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // const toyota = new Car({title: 'Toyota', year: '1993'})
// // // // // // // // // // // // // // toyota
// // // // // // // // // // // // // // toyota.honk()
// // // // // // // // // // // // // //

// // // // // // // // // // // // // // const moto = new Motorcycle({title: 'Moto', year: '2003', color: 'Red'})
// // // // // // // // // // // // // //
// // // // // // // // // // // // // // moto.honk()
// // // // // // // // // // // // // //

// // // // // // // // // // // // // // moto.beep()
// // // // // // // // // // // // // //

// // // // // // // // // // // // countWords = str => {
// // // // // // // // // // // //   const map = {}

// // // // // // // // // // // //   const arr = str.toLowerCase().replace(/[^A-Za-z0-0 ]/g, '').split(' ')

// // // // // // // // // // // //   for(const word of arr){
// // // // // // // // // // // //     map[word] ? map[word] ++ : map[word] = 1
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return map
// // // // // // // // // // // // }

// // // // // // // // // // // //

// // // // // // // // // // // // palendrom = str =>  str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // // //false

// // // // // // // // // // // // anagram = (a,b) => {
// // // // // // // // // // // //   sort = (str) => str.toLowerCase().replaceAll(' ', '').split('').sort().join('')

// // // // // // // // // // // //   return sort(a) === sort(b)
// // // // // // // // // // // // }

// // // // // // // // // // // //  //true
// // // // // // // // // // // //  //true
// // // // // // // // // // // //  //true
// // // // // // // // // // // //  //false

// // // // // // // // // // // //  secondSymbol(s, symbol) {
// // // // // // // // // // // //   let indexes = []

// // // // // // // // // // // //   for(let i in s){
// // // // // // // // // // // //     if(s[i] === symbol){
// // // // // // // // // // // //       indexes.push(i)
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return indexes.length > 1 ? parseInt(indexes[1]) : -1;
// // // // // // // // // // // // }

// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // //

// // // // // // // // // // // const url = 'https://jsonplaceholder.typicode.com/photos/'

// // // // // // // // // // // // const photoArray = []

// // // // // // // // // // // // // fetch(url)
// // // // // // // // // // // // //   .then(response => response.json())
// // // // // // // // // // // // //   .then(data => {
// // // // // // // // // // // // //     data.forEach(i => {
// // // // // // // // // // // // //       photoArray.push(i.thumbnailUrl);
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   })

// // // // // // // // // // // //   const ul = document.getElementById('photos')

// // // // // // // // // // // //   for (i = 0; i <= photoArray.length - 1; i++) {
// // // // // // // // // // // //     var li = document.createElement('li');     // create li element.
// // // // // // // // // // // //     li.innerHTML = photoArray[i];      // assigning text to li using array value.
// // // // // // // // // // // //     li.setAttribute('style', 'display: block;');    // remove the bullets.

// // // // // // // // // // // //     ul.appendChild(li);     // append li to ul.
// // // // // // // // // // // // }

// // // // // // // // // // // //   //

// // // // // // // // // // const numbers = [1,2,3,4,5,4,6, 7]
// // // // // // // // // // // const secondNumbers = [2,3,4,6,7,9]

// // // // // // // // // // // const computers = [
// // // // // // // // // // //     {brand: 'Apple', ram: 23},
// // // // // // // // // // //     {brand: 'Windows', ram: 15},
// // // // // // // // // // //     {brand: 'Dell', ram: 2}
// // // // // // // // // // // ]

// // // // // // // // // // // numbers.forEach((num) => {
// // // // // // // // // // //
// // // // // // // // // // // })

// // // // // // // // // // // const map = {
// // // // // // // // // // //     name: 'Kevin',
// // // // // // // // // // //     occupation: 'Web Deb'
// // // // // // // // // // // }

// // // // // // // // // // // const newNumbers = numbers.map(num => num * 2)
// // // // // // // // // // //

// // // // // // // // // // // let mapArray = []

// // // // // // // // // // // for(let key in map){
// // // // // // // // // // //     mapArray.push(map[key])
// // // // // // // // // // // }

// // // // // // // // // // //

// // // // // // // // // // const filteredNumbers = numbers.filter(num => num > 3)

// // // // // // // // // // // const findNumber = numbers.find(num => num === 4)
// // // // // // // // // // //

// // // // // // // // // // // const every = computers.every(computer => computer.ram > 1)
// // // // // // // // // // //

// // // // // // // // // // // const some = computers.some(computer => computer.ram > 22)
// // // // // // // // // // //

// // // // // // // // // // // const reduce = numbers.reduce((start, total) => total += start, 0)
// // // // // // // // // // //

// // // // // // // // // // //

// // // // // // // // // // // addNumbers = (...numbers) =>  numbers.reduce((total, number) => total + number, 0);

// // // // // // // // // // //

// // // // // // // // // // // const thirdNumbers = [...numbers, ...secondNumbers]
// // // // // // // // // // //

// // // // // // // // // // // const [ one, two, three] = secondNumbers;
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // //

// // // // // // // // // // // const { name, occupation } = map
// // // // // // // // // // //
// // // // // // // // // // //

// // // // // // // // // // // class Car{
// // // // // // // // // // //     constructor(options){
// // // // // // // // // // //         this.color = options.color;
// // // // // // // // // // //         this.type = options.type;
// // // // // // // // // // //     }

// // // // // // // // // // //     beep(){
// // // // // // // // // // //         return 'beep'
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // const myCar = new Car({color: 'Blue', type: 'Toyota'})
// // // // // // // // // // //
// // // // // // // // // // //

// // // // // // // // // // // class Bike extends Car{
// // // // // // // // // // //     constructor(options){
// // // // // // // // // // //         super(options);
// // // // // // // // // // //         this.wheels = options.wheels;
// // // // // // // // // // //     }

// // // // // // // // // // //     bell(){
// // // // // // // // // // //         return 'Ding!'
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // const myBike = new Bike({color: 'Grey', type: 'Schwin', wheels: 2})
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // //

// // // // // // // // // // // class Animal{
// // // // // // // // // // //     constructor(){
// // // // // // // // // // //         this.health = 100;
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // class Poison{
// // // // // // // // // // //     inject(enemy){
// // // // // // // // // // //         enemy.health -= 10;
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // const horse = new Animal();

// // // // // // // // // // // const myPoision = new Poison();
// // // // // // // // // // // myPoision.inject(horse);
// // // // // // // // // // //

// // // // // // // // // // const users = [
// // // // // // // // // //     {id: 1, name: 'Kevin', isActive: true, age: 44},
// // // // // // // // // //     {id: 2, name: 'John', isActive: true, age: 20},
// // // // // // // // // //     {id: 3, name: 'Alex', isActive:  age: 25},
// // // // // // // // // // ]

// // // // // // // // // // console.log(users.find((user) => user.name === 'Kevin'));

// // // // // // // // // // findUser = (arr, name) => arr.some(obj => obj.name = name)

// // // // // // // // // // console.log(findUser(users, 'Kevin'));

// // // // // // // // // // // const namesDescending = users.sort((a,b) => b.age - a.age).filter(user => user.isActive).map(user => user.name)
// // // // // // // // // // //

// // // // // // // // // // // // const names = users.map(user => user.name)
// // // // // // // // // // // //

// // // // // // // // // // // const activeUsers = users.filter(user => user.isActive)
// // // // // // // // // // //

// // // // // // // // // // palendrom = str => {
// // // // // // // // // //     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
// // // // // // // // // // }

// // // // // // // // // // console.log(palendrom('Racecar'));
// // // // // // // // // // console.log(palendrom('bob'));
// // // // // // // // // // console.log(palendrom('asdf'));//false

// // // // // // // // // // anagram = (str1, str2) => {
// // // // // // // // // //     sort = str => str.toLowerCase().replaceAll(' ', '').split('').sort().join('')

// // // // // // // // // //     return sort(str1) === sort(str2)
// // // // // // // // // // }

// // // // // // // // // // console.log(anagram('A gentleman', 'Elegant Man')); //true
// // // // // // // // // // console.log(anagram('Clint Eastwood', 'Old west action')); //true
// // // // // // // // // // console.log(anagram('bob', 'obb')); //true
// // // // // // // // // // console.log(anagram('asdf', 'hjfg')); //false

// // // // // // // // // // countWords = str => {
// // // // // // // // // //     const map = {}

// // // // // // // // // //     const arr = str.toLowerCase().replace(/[^A-Za-z0-9 ]/g, '').split(' ')

// // // // // // // // // //     for(const word of arr){
// // // // // // // // // //         map[word] ? map[word] ++ : map[word] = 1
// // // // // // // // // //     }

// // // // // // // // // //     return map

// // // // // // // // // // }

// // // // // // // // // // console.log(countWords('We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself. We’re wanted men. I have the death sentence in twelve systems. I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something… The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It’s a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you’ll have to use proton torpedoes. That’s impossible, even for a computer. It’s not impossible. I used to bull’s-eye womp rats in my T-sixteen back home. They’re not much bigger than two meters. Man your ships! And may the Force be with you! Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so. Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay! Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator. There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when ready. What? You’re far too trusting. Dantooine is too remote to make an effective demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence primary ignition. Threepio! Come in, Threepio! Threepio! Get to the top! I can’t Where could he be? Threepio! Threepio, will you come in? They aren’t here! Something must have happened to them. See if they’ve been captured. Hurry! One thing’s for sure. We’re all going to be a lot thinner! Get on top of it! I’m trying! Thank goodness, they haven’t found them! Where could they be? Use the comlink? Oh, my! I forgot I turned it off! Are you there, sir? Threepio! We’ve had some problems… Will you shut up and listen to me? Shut down all garbage mashers on the detention level, will you? Do you copy? Shut down all the garbage mashers on the detention level. Shut down all the garbage mashers on the detention level. No. Shut them all down! Hurry! Listen to them! They’re dying, Artoo! Curse my metal body! I wasn’t fast enough. It’s all my fault! My poor master! Threepio, we’re all right! We’re all right. You did great.'));

// // // // // // // // // // console.log(blah);
// // // // // // // // // // var blah = 1

// // // // // // // // // // privateFunction = () => {
// // // // // // // // // //     let secret = [1,2,3]

// // // // // // // // // //     return {
// // // // // // // // // //         addNumber: (val) => {
// // // // // // // // // //             secret.push(val)
// // // // // // // // // //         },
// // // // // // // // // //         getSecret: () => {
// // // // // // // // // //             return secret
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // const mySecret = privateFunction()
// // // // // // // // // // console.log(mySecret.addNumber(4));
// // // // // // // // // // console.log(mySecret.getSecret());

// // // // // // // // // // multiply = num1 => num2 => num1 * num2

// // // // // // // // // // console.log(multiply(2)(3));

// // // // // // // // // // const myNums = [1,2,3,4]

// // // // // // // // // // const myNums2 = [5,6,7,8]

// // // // // // // // // // concat = (arr1, arr2) => [...arr1, ...arr2]

// // // // // // // // // // console.log(concat(myNums, myNums2));

// // // // // // // // // // const duplicates = [2,3,4,2,4]

// // // // // // // // // // removeDuplicates = arr => {
// // // // // // // // // //     let finalArray = []

// // // // // // // // // //     arr.forEach(num => {
// // // // // // // // // //         if(finalArray.indexOf(num) < 0){
// // // // // // // // // //             finalArray = [...finalArray, num]
// // // // // // // // // //         }
// // // // // // // // // //     })

// // // // // // // // // //     return finalArray
// // // // // // // // // // }

// // // // // // // // // // console.log(removeDuplicates(duplicates)); //[3]

// // // // // // // // // // const numbers = [111,2,3454,-345]

// // // // // // // // // // sortArray = arr => [...arr].sort((a,b) => a-b)

// // // // // // // // // // console.log(sortArray(numbers));
// // // // // // // // // // console.log(numbers);

// // // // // // // // // // const books = [
// // // // // // // // // //     {title: 'Harry Potter', author: 'JK Rowling'},
// // // // // // // // // //     {title: 'Battlefield Earth', author: 'Ron Hubbard'},
// // // // // // // // // //     {title: 'Farseer Trilogy', author: 'Robin Hobb'}
// // // // // // // // // // ]

// // // // // // // // // // // sortAuthors = arr => {
// // // // // // // // // // const sortedBooks = [...books].sort((book1, book2) => book1.author.split(' ')[1] < book2.author.split(' ')[1] ? -1 : 1)
// // // // // // // // // // console.log(sortedBooks);
// // // // // // // // // // console.log(books);

// // // // // // // // // // // console.log(sortAuthors(books));

// // // // // // // // // // const names = ['Zed', 'Smith', 'Aaron']

// // // // // // // // // // const sortedNames = [...names].sort((a,b) => {
// // // // // // // // // //     return a < b ? -1 : 1
// // // // // // // // // // })

// // // // // // // // // // console.log(sortedNames);
// // // // // // // // // // console.log(names);

// // // // // // // // // countWords = str => {
// // // // // // // // //     let map = {}
// // // // // // // // //     let sorted = []

// // // // // // // // //     let wordArray = str.toLowerCase().replace(/[^A-Za-z0-9' ]/g, '').split(' ')

// // // // // // // // //     for(let word of wordArray){
// // // // // // // // //         map[word] ? map[word]++ : map[word] = 1
// // // // // // // // //     }

// // // // // // // // //     for(let item in map){
// // // // // // // // //         sorted.push(item + ': ' + map[item])
// // // // // // // // //     }

// // // // // // // // //     return [...sorted].sort((a,b) => a[a.length-1] > b[b.length-1] ? -1 : 1)
// // // // // // // // // }

// // // // // // // // // console.log(countWords("Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. Getting a signal. The guns...they've stopped! Stabilize your read deflectors. Watch for enemy fighters. They've coming in! Three marks at two ten. Looks like you managed to cut off our only escape route. Maybe you'd like it back in your cell, Your Highness. See-Threepio! See-Threepio! Yes sir? We've been cut off! Are there any other ways out of the cell bay?...What was that? I didn't copy! I said, all systems have been alerted to your presence, sir. The main entrance seems to be the only way in or out, all other information on your level is restricted. Open up in there! Oh, no! There isn't any other way out. "));

// // // // // // // // // const books = [
// // // // // // // // //     {title: 'Harry Potter', author: 'J K Rowling', copies: 1000000},
// // // // // // // // //     {title: 'BattleField Earth', author: 'L Ron Hubbard', copies: 500000},
// // // // // // // // //     {title: 'LiveShip Traders', author: 'Robbin Hobb', copies: 200000}
// // // // // // // // // ]

// // // // // // // // // const sortedByAuthor = [...books].sort((a,b) => a.author.split(' ')[a.author.split(' ').length-1] < b.author.split(' ')[b.author.split.length-1] ? -1: 1)
// // // // // // // // // console.log('sortedByAuthor: ', sortedByAuthor);

// // // // // // // // // const sortedByTitle = [...books].sort((a,b) => a.title <p b.title ? -1 : 1)
// // // // // // // // // console.log('sortedByTitle: ', sortedByTitle);

// // // // // // // // // const sortedByCopies = [...books].sort((a,b) => b.copies - a.copies)
// // // // // // // // // console.log('sortedByCopies: ', sortedByCopies);

// // // // // // // // // findRange = (a,b) => {
// // // // // // // // //     let rangeArray = []

// // // // // // // // //     for(let i = a; i <= b; i++){
// // // // // // // // //         rangeArray = [...rangeArray, i]
// // // // // // // // //     }

// // // // // // // // //     return rangeArray
// // // // // // // // // }

// // // // // // // // // console.log(findRange(1,50));

// // // // // // // // palendrom = str => str.toLowerCase().split('').reverse().join('') === str.toLowerCase()

// // // // // // // // console.log(palendrom('Racecar')); //true
// // // // // // // // console.log(palendrom('bob')); //true
// // // // // // // // console.log(palendrom('asdf')); //false

// // // // // // // // anagram = (str1, str2) => {
// // // // // // // //     sort = str => str.toLowerCase().replaceAll(' ', '').split('').sort().join('')

// // // // // // // //     return sort(str1) === sort(str2)
// // // // // // // // }

// // // // // // // // console.log(anagram('Clint Eastwood', 'Old west action')); //true
// // // // // // // // console.log(anagram('A gentleman', 'Elegant Man')); //true
// // // // // // // // console.log(anagram('bored', 'robed')); //true
// // // // // // // // console.log(anagram('asdgasd', 'dsfhsd')); //false

// // // // // // // // getItem = () => {
// // // // // // // //     console.log(this)
// // // // // // // // }

// // // // // // // // getItem()

// // // // // // // // const item = {
// // // // // // // //     title: 'Ball',
// // // // // // // //     getItem(){
// // // // // // // //         console.log('This', this)
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // item.getItem()

// // // // // // // // class Item {
// // // // // // // //     title = 'Ball';
// // // // // // // //     getItem(){
// // // // // // // //         console.log('this', this)
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // const newItem = new Item();
// // // // // // // // newItem.getItem()

// // // // // // // countWords = str => {
// // // // // // //     let map = {}
// // // // // // //     let finalArray = []

// // // // // // //     let formatedWords = str.toLowerCase().replace(/[^A-Za-z0-9' ]/g, '').split(' ')

// // // // // // //     for(let word of formatedWords){
// // // // // // //         map[word] ? map[word]++ : map[word] = 1
// // // // // // //     }

// // // // // // //     for(let item in map){
// // // // // // //         finalArray.push({word: item, count: map[item]})
// // // // // // //     }

// // // // // // //     return finalArray.sort((a,b) => a.count > b.count ? -1 : 1)
// // // // // // // }

// // // // // // // console.log(countWords("Captain. Yes, sir? Is is is  The the the the the Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. There is something else behind all this, Your Highness. There is no logic in the Federation's move here. My feelings tell me they will destroy you. Our only hope is for the Senate to side with us. Look! Dey all broken. It is too late. It's. No! Obi-Wan promise . Now go. Thank you for your help. We leave in peace. Master, what's a bongo? A transport, I hope. Daza setten yousa up. Goen through da planet core is bad bombin!! Ahh, any hep hair would be hot. Master, sir. I heard Yoda talking about midi-chlorians. I've been wondering, what are midi-chlorians? Midi-chlorians are a microcopic lifeform that reside within all living cells. They live inside of me? In your cells, yes. and we are symbionts with them. Symbionts? Life forms living together for mutual advantage. I want that treaty signed. My Lord, it's impossible to locate the ship. It's out of our range. Not for a Sith."));

// // // // // // // palendrom = str => str.toLowerCase().replaceAll(' ', '').split('').reverse().join('') === str.toLowerCase().replaceAll(' ', '')

// // // // // // // console.log(palendrom('Racecar')); //true
// // // // // // // console.log(palendrom('bob')); //true
// // // // // // // console.log(palendrom('Evil is a deed as I live')); //true
// // // // // // // console.log(palendrom('asdfasdf')); //false

// // // // // // // anagram = (str1, str2) => {
// // // // // // //     sort = str => str.toLowerCase().replaceAll(' ', '').split('').sort().join('')

// // // // // // //     return sort(str1) === sort(str2)
// // // // // // // }

// // // // // // // console.log(anagram('Clint Eastwood', 'old west action')); //true
// // // // // // // console.log(anagram('A gentleman', 'elegant man')); //true
// // // // // // // console.log(anagram('Customers', 'store scum')); //true
// // // // // // // console.log(anagram('asdf', 'fgdj')); //false

// // // // // // countWords = str => {
// // // // // //     const map = {}
// // // // // //     let finalArray = []

// // // // // //     const wordArray = str.toLowerCase().replace(/[^A-Za-z0-9' ]/g, '').split(' ')

// // // // // //     for(let word of wordArray){
// // // // // //         if(word.length > 0){
// // // // // //             map[word] ? map[word]++ : map[word] = 1
// // // // // //         }
// // // // // //     }

// // // // // //     for(let item in map){
// // // // // //         finalArray.push({word: item, count: map[item]})
// // // // // //     }

// // // // // //     return finalArray.sort((a,b) => a.count > b.count ? -1 : 1)
// // // // // // }

// // // // // // console.log(countWords("Captain. Yes, sir? Is is is is is is is is  The the the the the Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. There is something else behind all this, Your Highness. There is no logic in the Federation's move here. My feelings tell me they will destroy you. Our only hope is for the Senate to side with us. Look! Dey all broken. It is too late. It's. No! Obi-Wan promise . Now go. Thank you for your help. We leave in peace. Master, what's a bongo? A transport, I hope. Daza setten yousa up. Goen through da planet core is bad bombin!! Ahh, any hep hair would be hot. Master, sir. I heard Yoda talking about midi-chlorians. I've been wondering, what are midi-chlorians? Midi-chlorians are a microcopic lifeform that reside within all living cells. They live inside of me? In your cells, yes. and we are symbionts with them. Symbionts? Life forms living together for mutual advantage. I want that treaty signed. My Lord, it's impossible to locate the ship. It's out of our range. Not for a Sith."));

// // // // // // countVowels = str => str.toLowerCase().replace(/[^aeiou]/g, '').length;
// // // // // // console.log(countVowels("Hello")); //2
// // // // // // console.log(countVowels("Hello, how are you? I am fine, thanks!")); //12

// // // // // palendrome = str => str.toLowerCase().replaceAll(' ', '').split('').reverse().join('') === str.toLowerCase().replaceAll(' ', '')

// // // // // console.log(palendrome("Racecar")); //true
// // // // // console.log(palendrome("bob")); //true
// // // // // console.log(palendrome("Never odd or even")); //true
// // // // // console.log(palendrome("asdf")); //false

// // // // // anagram = (str1, str2) => {
// // // // //     sort = str => str.toLowerCase().replaceAll(' ', '').split('').sort().join('')

// // // // //     return sort(str1) === sort(str2)
// // // // // }

// // // // // console.log(anagram("Funeral", 'Real Fun')); //true
// // // // // console.log(anagram("Clint Eastwood", 'old west action')); //true
// // // // // console.log(anagram("A gentleman", 'Elegant man')); //true
// // // // // console.log(anagram("bored", 'robed')); //true
// // // // // console.log(anagram("asdf", 'dfgj')); //false

// // // // // countVowels = str => str.toLowerCase().replace(/[^aeiou]/g, '').length

// // // // // console.log(countVowels("Hello, how are you? I am good, thanks for asking"));

// // // // wordCounter = str => {
// // // //     let map = {}
// // // //     let finalArray = []

// // // //     let wordArray = str.toLowerCase().replace(/[^A-Za-z0-9' ]/g, '').split(' ')

// // // //     for(let word of wordArray){
// // // //         if(word.length > 0){
// // // //             map[word] ? map[word]++ : map[word] = 1
// // // //         }
// // // //     }

// // // //     for(let item in map){
// // // //         finalArray.push([item, map[item]])
// // // //     }

// // // //     return finalArray.sort((a,b) => a[0] < b[0] ? -1 : 1).sort((a,b) => a[1] > b[1] ? -1 : 1)
// // // // }

// // // // console.log(wordCounter("On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."));

// // // // anagram = (str1, str2) => {
// // // //     sort = str => str.toLowerCase().replaceAll(' ', '').split('').sort().join('')

// // // //     return sort(str1) === sort(str2)
// // // // }

// // // // console.log(anagram('Clint Eastwood', 'old west action')); //true
// // // // console.log(anagram('robed', 'bored')); //true
// // // // console.log(anagram('A Gentleman', 'Elegant Man')); //true
// // // // console.log(anagram('Customers', 'store scum')); //true
// // // // console.log(anagram('asdf', 'sdfg')); //false

// // // // if (typeof document !== 'undefined') {
// // // //     let text = document.getElementById('text');

// // // //     text.innerHTML = text.innerHTML.split(' ').map(word => {
// // // //         return word.length > 7 ? `<span style="background-color: yellow">${word}</span>` : word
// // // //     }).join(' ')
// // // // //  }

// // // // const text = document.getElementById('text')
// // // // text.innerHTML = text.innerHTML.split(' ').map(word => {
// // // //     return word.length > 7 ? `<span style="background-color: yellow">${word}</span>` : word
// // // // }).join(' ').split('.').join('.</p><p>') + '<p>'

// // // // const items = document.querySelectorAll('.item')
// // // // items.forEach(item => item.addEventListener('click', () => alert('You have clicked me!!!!')))

// // // // // if(typeof(document) !== undefined){
// // // //     const myDiv = document.querySelector('.myDiv')
// // // //     myDiv.addEventListener('click', (e) => {
// // // //         if(e.target && e.target.classList.contains('item')){
// // // //             alert('Clicked!')
// // // //         }
// // // //     })
// // // // // }
// // // // const myUL = document.querySelector('#myUL')

// // // // fetch('https://jsonplaceholder.typicode.com/comments/').then(res => res.json()).then(data => {
// // // //     data.forEach(obj => {
// // // //        let myLI = document.createElement('li')
// // // //        myLI.innerHTML = obj.body
// // // //        myUL.append(myLI)
// // // //     })
// // // // })

// // // // longestSubArray = (arr, target) => {

// // // //     let indexes = []
// // // //     let tempIndex = []
// // // //     let maxLength = 0
// // // //     let sum = 0
// // // //     let nextIndex = 0

// // // //     for(let i = 0; i < arr.length; i++){
// // // //         console.log(i, sum, nextIndex);
// // // //         tempIndex.push(i)
// // // //         console.log('tempIndex: ', tempIndex);
// // // //         maxLength ++
// // // //         console.log('maxLength: ', maxLength);
// // // //         sum += arr[i]
// // // //         console.log('sum: ', sum);
// // // //         if(sum === target &&){
// // // //             return indexes
// // // //         }else if(sum > target){
// // // //             indexes = []
// // // //             sum = 0
// // // //             maxLength = 0
// // // //             i = nextIndex
// // // //             nextIndex ++
// // // //         }
// // // //     }
// // // //     return null

// // // // }

// // // // console.log(longestSubArray([1,9,3,2,3,7,9,3], 12)); //[1,2,3]

// // // // twoSum = (arr, sum) => {
// // // //     let map = {}
// // // //     let indexes = []

// // // //     for(let i = 0; i < arr.length; i++){
// // // //         let compliment = sum - arr[i]

// // // //         if(compliment in map){
// // // //             indexes.push(map[compliment], i)
// // // //         }

// // // //         map[arr[i]] = i
// // // //     }

// // // //     return indexes
// // // // }

// // // // console.log(twoSum([1,4,6,8], 5)); //[0,1]
// // // // console.log(twoSum([14, 23, 46, 89], 60)); //[0,2]
// // // // console.log(twoSum([144, 232, 465, 89], 321)); //[1,3]

// longestPrefix = (arr) => {
//   let i = 0;

//   while (arr[0][i] && arr.every((word) => word[i] === arr[0][i])) {
//     i++;
//   }
//   // while(arr[0][i] && arr.every(word => word[i] === arr[0][i])){
//   //     i++
//   // }

//   return arr[0].substr(0, i);
// };

// // console.log(longestPrefix(['category', 'catastrphy', 'cat', 'car'])); //'ca'
// // // // // console.log(longestPrefix(['prefix', 'previous', 'professional', 'pass'])); //'p'
// // // // // console.log(longestPrefix(['o', 'offel', 'offline', 'offer', 'of'])); //'o'

// // // // twoSum = (arr, sum) => {
// // // //     let map = {}
// // // //     let indexes = []

// // // //     for(let i = 0; i < arr.length; i++){
// // // //         let compliment = sum - arr[i]

// // // //         if(compliment in map){
// // // //             indexes.push(map[compliment], i)
// // // //         }

// // // //         map[arr[i]] = i
// // // //     }

// // // //     return indexes
// // // // }

// // // // console.log(twoSum([1,4,6,8], 5)); //[0,1]
// // // // console.log(twoSum([14, 23, 46, 89], 60)); //[0,2]
// // // // console.log(twoSum([144, 232, 465, 89], 321)); //[1,3]

// // // // longestPrefix = arr => {
// // // //     let i = 0

// // // //     while(arr[0][i] && arr.every(word => word[i] === arr[0][i])){
// // // //         i++
// // // //     }

// // // //     return arr[0].substr(0,i)
// // // // }

// // // // console.log(longestPrefix(['category', 'catastrphy', 'cat', 'car'])); //'ca'
// // // // console.log(longestPrefix(['prefix', 'previous', 'professional', 'pass'])); //'p'
// // // // console.log(longestPrefix(['o', 'offel', 'offline', 'offer', 'of'])); //'o'

// // // // anagram = (str1, str2) => {
// // // //     sort = str => {
// // // //          return str.toLowerCase().replaceAll(' ', '').split('').sort().join('')
// // // //     }

// // // //     return sort(str1) === sort(str2)
// // // // }

// // // // console.log(anagram("Clint Eastwood", 'old west action')); //true
// // // // console.log(anagram("Customers", 'store scum')); //true
// // // // console.log(anagram("A gentleman", 'elegant man')); //true
// // // // console.log(anagram("robed", 'bored')); //true
// // // // console.log(anagram("asdf", 'dfgh')); //false

// // // // palendrom = str => str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('').reverse().join('') === str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')

// // // // console.log(palendrom('Racecar')); //true
// // // // console.log(palendrom('bob')); //true
// // // // console.log(palendrom('Was it a car or a cat I saw?')); //true
// // // // console.log(palendrom('asdf')); //false

// // // // longestPrefix = arr => {
// // // //     let i = 0

// // // //     while(arr[0][i] && arr.every(word => word[i] === arr[0][i])){
// // // //         i++
// // // //     }

// // // //     return arr[0].substr(0,i)
// // // // }

// // // // console.log(longestPrefix(['category', 'catastrphy', 'cat', 'car'])); //'ca'
// // // // console.log(longestPrefix(['prefix', 'previous', 'professional', 'pass'])); //'p'
// // // // console.log(longestPrefix(['o', 'offel', 'offline', 'offer', 'of'])); //'o'

// // // // const myUL = document.querySelector('#myUL')

// // // // // fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
// // // //     fetch('https://api.github.com/users/kjh311/repos').then(res => res.json()).then(data => {

// // // //     data.forEach(obj => {
// // // //         const li = document.createElement('li')
// // // //         li.innerText = obj.name
// // // //         myUL.append(li)
// // // //     })

// // // //     console.log(data);

// // // // }).catch(err => {
// // // //     console.log(err);
// // // // });

// // // // const async1 = callback => {
// // // //     setTimeout(() => {
// // // //         callback(1)
// // // //     }, 3000)
// // // // }

// // // // const async2 = callback => {
// // // //     setTimeout(() => {
// // // //         callback(2)
// // // //     }, 2000)
// // // // }

// // // // const async3 = callback => {
// // // //     setTimeout(() => {
// // // //         callback(3)
// // // //     }, 1000)
// // // // }

// // // // asyncParrallel = (asyncFuncs, callback) => {
// // // //     const resultsArr = new Array(asyncFuncs.length)
// // // //     let counter = 0

// // // //     asyncFuncs.forEach((asyncFunc, index) => {
// // // //         asyncFunc(value => {
// // // //             resultsArr[index] = value
// // // //             counter++
// // // //             if(counter >= asyncFuncs.length){
// // // //                 callback(resultsArr)
// // // //             }
// // // //         })
// // // //     })
// // // // }

// // // // asyncParrallel([async1, async2, async3], result => {
// // // //     console.log(result)
// // // // })

// // // // const asyncFunc = (callback) => {
// // // //     setTimeout(() => {
// // // //         callback(1)
// // // //     },2000)
// // // // }

// // // // // asyncFunc((val) => {
// // // // //     console.log(val);
// // // // // })

// // // // const promisifyAsyncFunc = () => {
// // // //     return new Promise((resolve) => {
// // // //         asyncFunc(data => {
// // // //             resolve(data)
// // // //         })
// // // //     })
// // // // }

// // // // promisifyAsyncFunc().then(res => {
// // // //     console.log(res);
// // // // })

// // // // capFirstLetter = str => {
// // // //     let string = ""

// // // //     let arr = str.split(" ")
// // // //     arr.forEach(word => {
// // // //          string += word[0].toUpperCase() + word.slice(1) + " "
// // // //     })

// // // //     return string

// // // // }

// // // // console.log(capFirstLetter("I'm a little tea pot"));

// // // // const loc = [
// // // //     {
// // // //         locationKey: [32,22,11],
// // // //         autoAssign: 1
// // // //     },
// // // //     {
// // // //         locationKey: [41, 42],
// // // //         autoAssign: 1
// // // //     }
// // // // ]

// // // // const bulkData = [
// // // //     {
// // // //         dataValues: {
// // // //             configKey: 100
// // // //         }
// // // //     },
// // // //     {
// // // //         dataValues: {
// // // //             configKey: 200
// // // //         }
// // // //     }
// // // // ]

// // // // formatData = (arr1, arr2) => {

// // // //     let finalArray = []

// // // //     addObjectsToArr = arr => {
// // // //         arr.forEach(obj => {
// // // //             finalArray.push({Object.values(obj)[0]})
// // // //             console.log(Object.keys(obj)[0]);
// // // //         })
// // // //     }

// // // //     addObjectsToArr(arr1)
// // // //     console.log(finalArray);

// // // //     return finalArray
// // // // }

// // // // console.log(formatData(loc, bulkData));

// // // const blocks = [
// // //     {
// // //         'gym': false,
// // //         "school": true,
// // //         "store": false
// // //     },
// // //     {
// // //         'gym': true,
// // //         "school": false,
// // //         "store": false
// // //     },
// // //     {
// // //         'gym': true,
// // //         "school": true,
// // //         "store": false
// // //     },
// // //     {
// // //         'gym': false,
// // //         "school": true,
// // //         "store": false
// // //     },
// // //     {
// // //         'gym': false,
// // //         "school": true,
// // //         "store": true
// // //     },
// // // ]

// // // const reqs = ["gym", "school"]
// // // const reqs2 = ["gym", "store"]
// // // const reqs3 = ["gym", "school", "store"]

// // // findHome = (objArr, requirements) => {

// // //     let obj = {}
// // //     let obj2 = {}

// // //     for(let req of requirements){
// // //         obj[req] = []
// // //     }

// // //     for(let i = 0; i < objArr.length; i++){
// // //         requirements.forEach(require => {
// // //             if(objArr[i][require]){
// // //                 obj[require].push(i)
// // //                 obj2[i] ? obj2[i]++ : obj2[i] = 1
// // //                 if(obj2[i] === requirements.length){
// // //                     console.log(obj2);
// // //                     return obj2[i]
// // //                 }
// // //             }
// // //         })
// // //     }

// // //     // for(let i = 0; i < obj[requirements[0]].length; i++){
// // //     //     // console.log(obj[requirements[0]][i]);

// // //     // }

// // //     console.log(obj);
// // //     console.log(obj2);

// // // }

// // // // console.log(findHome(blocks, reqs)); //2
// // // // console.log(findHome(blocks, reqs2)); //2
// // // // console.log(findHome(blocks, reqs3)); //2

// // // //  scramble = (str1, str2) => {
// // // //     let str1Map = {}
// // // //     let str2Map = {}

// // // //     for(let letter of str1){
// // // //         str1Map[letter] ? str1Map[letter]++ : str1Map[letter] = 1
// // // //     }

// // // //     for(let letter of str2){
// // // //         str2Map[letter] ? str2Map[letter]++ : str2Map[letter] = 1
// // // //     }

// // // //     for(let letter in str2Map){
// // // //         if(str2Map[letter] > str1Map[letter] || !str1Map[letter]){
// // // //             return false
// // // //         }
// // // //     }

// // // //     return true;
// // // //   }

// // // //     console.log(scramble('rkqodlw',           'world'      )); // true
// // // //     console.log(scramble('cedewaraaossoqqyt', 'codewars'   )); // true
// // // //     console.log(scramble('katas',             'steak'      )); // false
// // // //     console.log(scramble('scriptjavx',        'javascript' )); // false
// // // //     console.log(scramble('scriptingjava',     'javascript' )); // true
// // // //     console.log(scramble('scriptsjava',       'javascripts')); // true
// // // //     console.log(scramble('javscripts',        'javascript' )); // false
// // // //     console.log(scramble('jscripts',          'javascript' )); // false
// // // //     console.log(scramble('aabbcamaomsccdd',   'commas'     )); // true
// // // //     console.log(scramble('commas',            'commas'     )); // true
// // // //     console.log(scramble('sammoc',            'commas'     )); // true

// // //  reverseVowels = str => {
// // //     let vowelArr = []
// // //     let count = 0
// // //     let finalArray = []

// // //     isVowel = char => {
// // //         return ("aeiouAEIOU".indexOf(char) != -1);
// // //     }

// // //     for(let char of str){
// // //         if(isVowel(char)){
// // //             vowelArr.unshift(char)
// // //         }
// // //     }

// // //     for(let i in str){
// // //         isVowel(str[i]) ? finalArray.push(vowelArr[count]) + count++ : finalArray.push(str[i])
// // //     }

// // //     return finalArray.join('')
// // // }

// // // // console.log(reverseVowels("Hello!")) // "Holle!");
// // // // console.log(reverseVowels("Tomatoes")) // "Temotaos");
// // // // console.log(reverseVowels("Reverse Vowels In A String")) // "RivArsI Vewols en e Streng");

// // // findOdd = arr => {
// // //     let map = {}

// // //     arr.forEach(char => {
// // //         map[char] ? map[char]++ : map[char] = 1
// // //     })

// // //     for(let item in map){
// // //         if(map[item] % 2 !== 0){
// // //             return parseInt(item)
// // //         }
// // //     }

// // //     return 0
// // //   }

// // // //   console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // [5]
// // // //   console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // [-1]
// // // //   console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // [5]
// // // //   console.log(findOdd([10])); // [10]
// // // //   console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // [10]
// // // //   console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // [1]

// // // rot13 = str => {
// // //     let finalStr = ''
// // //     let swapMap = {
// // //         'a': 'n','b': 'o','c': 'p','d': 'q','e': 'r','f': 's','g': 't','h': 'u','i': 'v','j': 'w','k': 'x','l': 'y','m': 'z','n': 'a','o': 'b','p': 'c','q': 'd','r': 'e','s': 'f','t': 'g','u': 'h','v': 'i','w': 'j','x': 'k','y': 'l','z': 'm','A': 'N','B': 'O','C': 'P','D': 'Q','E': 'R','F': 'S','G': 'T','H': 'U','I': 'V','J': 'W','K': 'X','L': 'Y','M': 'Z','N': 'A','O': 'B','P': 'C','Q': 'D','R': 'E','S': 'F','T': 'G','U': 'H','V': 'I','W': 'J','X': 'K','Y': 'L','Z': 'M'
// // //     }

// // //     for(let letter of str){
// // //         swapMap[letter] ? finalStr += swapMap[letter] : finalStr += letter
// // //     }

// // //     return finalStr
// // // }

// // // //   console.log(rot13("test")); // "grfg"
// // // //   console.log(rot13("Test")); // "Grfg"
// // // //   console.log(rot13("Test!!")); // "Grfg"
// // // //   console.log(rot13("abcdefghijklmnopqrstuvwxyz")); // "grfg"

// // // generateHashtag = str => {
// // //     let finalArray = ['#']

// // //     str.split(' ').forEach(word => {
// // //         if(word !== ''){
// // //             word = word.split('')
// // //             word[0] = word[0].toUpperCase()
// // //             finalArray.push(word.join(''))
// // //         }
// // //     })

// // //     if(finalArray.length === 1){
// // //         return false
// // //     }
// // //     return finalArray.join('').length < 141 ? finalArray.join('') : false
// // // }

// // // // console.log(generateHashtag("")); // false, "Expected an empty string to return false")
// // // // console.log(generateHashtag(" ".repeat(200))); // false, "Still an empty string")
// // // // console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// // // // console.log(generateHashtag("Codewars")); // "#Codewars", "Should handle a single word.")
// // // // console.log(generateHashtag("Codewars Is Nice")); // "#CodewarsIsNice", "Should remove spaces.")
// // // // console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars")
// // // // console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); // false, "Should return false if the final word is longer than 140 chars.")
// // // // console.log(generateHashtag("a".repeat(139))); // "#A" + "a".repeat(138), "Should work")
// // // // console.log(generateHashtag("    Hello     world   ")); // "#HelloWorld", "Too long")
// // // // console.log(generateHashtag("a".repeat(140))); // false, "Too long")

// // //  alphanumeric = string => {
// // //     alpha = char => "abcdefghijklmnopqrstuvwxyz0123456789".indexOf(char.toLowerCase()) !== -1

// // //     for(let letter of string){
// // //         if(!alpha(letter)){
// // //             return false
// // //         }
// // //     }
// // //     return string.length > 0
// // // }

// // //     // console.log(alphanumeric("Mazinkaiser")); //, true)
// // //     // console.log(alphanumeric("hello world_")); //, false)
// // //     // console.log(alphanumeric("PassW0rd")); //, true)
// // //     // console.log(alphanumeric("     ")); //, false)
// // //     // console.log(alphanumeric("")); //, false)

// // //     firstNonRepeatingLetter = s => {
// // //         let map = {}

// // //         let str = s.toLowerCase()

// // //         for(let letter of str){
// // //             map[letter] ? map[letter]++ : map[letter] = 1
// // //         }

// // //         for(let letter of s){
// // //             if(map[letter.toLowerCase()] === 1){
// // //                 return letter
// // //             }
// // //         }
// // //         return ""
// // //     }

// // //     // console.log(firstNonRepeatingLetter('a')); // 'a');
// // //     // console.log(firstNonRepeatingLetter('stress')); // 't');
// // //     // console.log(firstNonRepeatingLetter('sTreSS')); // 't');
// // //     // console.log(firstNonRepeatingLetter('moonmen')); // 'e');
// // //     // console.log(firstNonRepeatingLetter('Moonmen')); // 'e');
// // //     // console.log(firstNonRepeatingLetter('')); // 'e');

// // //     isSolved = board => {

// // //         checkRows = x => {
// // //             for(let i = 0; i < 3; i++){
// // //                 if(board[i][0] === x && board[i][1] === x && board[i][2] === x){
// // //                     return x
// // //                 }
// // //             }
// // //         }

// // //         checkColumns = x => {
// // //             for(let i = 0; i < 3; i++){
// // //                if(board[0][i] === x && board[1][i] === x && board[2][i] === x){
// // //                 return x
// // //                }
// // //             }
// // //         }

// // //         checkDiagonals = x => {
// // //             if(board[0][0] === x && board[1][1] === x && board[2][2] === x){
// // //                 return x
// // //             }
// // //             if(board[0][2] === x && board[1][1] === x && board[2][0] === x){
// // //                 return x
// // //             }
// // //         }

// // //         if(checkRows(1) || checkColumns(1) || checkDiagonals(1)){
// // //             return 1
// // //         }
// // //         if(checkRows(2) || checkColumns(2) || checkDiagonals(2)){
// // //             return 2
// // //         }

// // //         for(let i = 0; i < 3; i++){
// // //            if(board[i].includes(0)){
// // //             return -1
// // //            }
// // //         }

// // //         return 0
// // //     }

// // //     // console.log(isSolved([[0,0,1],
// // //     //                       [0,1,2],
// // //     //                       [2,1,0]])); //-1
// // //     // console.log(isSolved([[2,1,0],
// // //     //                       [2,2,0],
// // //     //                       [2,1,0]])); //2
// // //     // console.log(isSolved([[0,0,1],
// // //     //                       [0,1,2],
// // //     //                       [1,1,0]])); //1
// // //     // console.log(isSolved([[0,0,1],
// // //     //                       [2,2,2],
// // //     //                       [0,1,0]])); //2
// // //     // console.log(isSolved([[1,2,1],
// // //     //                       [2,2,1],
// // //     //                       [2,1,2]])); //0

// // //     findUniq = arr => {
// // //         console.log('arr: ', arr);

// // //         let sorted = arr.map(word => {
// // //             return word.toLowerCase().replaceAll(' ', '').split('').sort().join('')
// // //         })

// // //         console.log('sorted', sorted);

// // //         let map = {}
// // //         let minLength = 1000
// // //         let odd;

// // //         for(let i = 0; i < sorted.length; i++){
// // //             console.log(sorted[i].length && sorted[i].length > 0);
// // //             if(sorted[i].length < minLength && sorted[i].length > 0){
// // //                 minLength = sorted[i].length
// // //             }
// // //         }
// // //         console.log('minlength', minLength);

// // //         for(let i = 0; i < sorted.length; i++){
// // //             map[sorted[i].substr(0,minLength)] ? map[sorted[i].substr(0,minLength)]++ : map[sorted[i].substr(0,minLength)] = 1
// // //         }
// // //         console.log('map', map);

// // //         for(let item in map){
// // //             if(map[item] === 1){
// // //                 odd = item
// // //             }
// // //         }
// // //         console.log('odd', odd);

// // //         for(let i = 0; i < arr.length; i++){
// // //             if(sorted[i].includes(odd)){
// // //                 return arr[i]
// // //             }
// // //         }
// // //     }

// // //     // console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])); // 'BbBb');
// // //     // console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])); // 'foo');
// // //     // console.log(findUniq([ 'silvia', 'vasili', 'victor' ])); // 'victor');
// // //     // console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])); // 'Harry Potter');
// // //     // console.log(findUniq([ '    ', 'a', ' ' ])); // 'a');
// // //     // console.log(findUniq([ '', '', '', 'a', '', '' ])); // 'a');
// // //     // console.log(findUniq([ '    ', '  ', ' ', 'a', ' ', '' ])); // 'a');
// // //     // console.log(findUniq([ 'foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab' ])); // 'a');

// // //     rot13 = str => {
// // //         let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// // //         let switched = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
// // //         let finalStr = ''

// // //         let arr = str.split('').map(letter => {
// // //             if(alpha.includes(letter)){
// // //                 return switched[alpha.indexOf(letter)]
// // //             }
// // //         })

// // //         for(let i = 0; i < arr.length; i++){
// // //             arr[i] === undefined ? finalStr += str[i] : finalStr += arr[i]
// // //         }

// // //         return finalStr
// // //     }

// // //     // console.log(rot13("EBG13 rknzcyr.")); // "ROT13 example.")
// // //     // console.log(rot13("This is my first ROT13 excercise!")); // "Guvf vf zl svefg EBG13 rkprepvfr!")

// // // lcs = (x,y) => {

// // //     let shortestWord = x
// // //     let longestWord = y
// // //     let finalString = ''
// // //     if(x.length < y.length){
// // //         shortestWord = x.split('')
// // //         longestWord = y.split('')
// // //     }else{
// // //         shortestWord = y.split('')
// // //         longestWord = x.split('')
// // //     }

// // //     for(let i = 0; i < shortestWord.length; i++){
// // //         if(longestWord.includes(shortestWord[i])){
// // //             longestWord[longestWord.indexOf(shortestWord[i])] = '*'
// // //             finalString += shortestWord[i]
// // //         }
// // //     }

// // //     return finalString;
// // // }

// // // // console.log( lcs( "", "" )); // "" );
// // // // console.log( lcs( "abc", "" )); // "" );
// // // // console.log( lcs( "", "abc" )); // "" );
// // // // console.log( lcs( "a", "b" )); // "" );
// // // // console.log( lcs( "a", "a" )); // "a" );
// // // // console.log( lcs( "abc", "ac" )); // "ac" );
// // // // console.log( lcs( "abcdef", "abc" )); // "abc" );
// // // // console.log( lcs( "abcdef", "acf" )); // "acf" );
// // // // console.log( lcs( "anothertest", "notatest" )); // "nottest" );
// // // // console.log( lcs( "132535365", "123456789" )); // "12356" );
// // // // console.log( lcs( "nothardlythefinaltest", "zzzfinallyzzz" )); // "final" );
// // // // console.log( lcs( "abcdefghijklmnopq", "apcdefghijklmnobq" )); // "acdefghijklmnoq" );

// // // topThreeWords = text => {
// // //     console.log(text);
// // //     let map = {}
// // //     let sortedArr = []
// // //     let finalArr = []

// // //     for(let word of text.toLowerCase().replace(/[^A-Za-z0-9' ]/g, '').split(' ')){
// // //         if(word.length > 0 && word !== "'"){
// // //             map[word] ? map[word]++ : map[word] = 1
// // //         }
// // //     }

// // //     for(let item in map){
// // //         sortedArr.push([item, map[item]])
// // //     }

// // //     console.log(map);

// // //     sortedArr = sortedArr.sort().sort((a,b) => a[1] > b[1] ? -1 : 1)

// // //     for(let i = 0; i < sortedArr.length; i++){
// // //         finalArr.push(sortedArr[i][0])
// // //     }

// // //     console.log(sortedArr);

// // //     if(finalArr.length < 3){
// // //         console.log(finalArr);
// // //         return finalArr
// // //     }else{
// // //         console.log(finalArr);
// // //         finalArr.length = 3
// // //         return finalArr
// // //     }
// // // }

// // // // console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e','d','a'])
// // // // console.log(topThreeWords("a a c b b")); // ['a','b','c'])
// // // // console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); //['e','ddd','aa'])
// // // // console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"])
// // // // console.log(topThreeWords("  , e   .. ")); // ["e"])
// // // // console.log(topThreeWords("  ...  ")); // [])
// // // // console.log(topThreeWords("  '  ")); // []
// // // // console.log(topThreeWords("  a   a c  b b")); // ['a', 'b', 'c']

// // // solution = (input, markers) => {
// // //     console.log('input: ', input);
// // //     console.log('markers', markers);

// // //     let markerIndex = 0
// // //     let breakIndex = 0
// // //     let stringArr = []
// // //     let map = {}
// // //     var match = /\r|\n/.exec(input);
// // //     let pattern = /[A-Za-z0-0 ]/
// // //     let back = /\\/;
// // //     let deleteMode = false

// // //     for(let mark of markers){
// // //         map[mark] = 'x'
// // //     }

// // //     // console.log(map);

// // //     //check for marker
// // //     console.log(input.charCodeAt(27));
// // //     console.log(match);

// // //     for(let i = 0; i < input.length; i++){
// // //         // if(input.charCodeAt[i] === 10){
// // //             if(input[i].match(/\n/g)){
// // //             // console.log(i);
// // //             deleteMode = false
// // //             stringArr.push('\n')
// // //         }
// // //         if(map[input[i]]){
// // //             console.log(i);
// // //             map[input[i]] = i
// // //         }
// // //         if(!deleteMode && pattern.test(input[i])){
// // //             stringArr.push(input[i])
// // //         }
// // //         if(input[i] in map){
// // //             deleteMode = true
// // //         }

// // //     }

// // //     console.log(stringArr);

// // //     console.log(map);

// // //     //delete up and until an new (non marker) non alphanumeric character or end of string is reached

// // //     //return cut string
// // //     return stringArr.join('')

// // // }

// // // // console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])); // "apples, plums\npears\noranges")
// // // // console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // "Q\nu\ne")

// // // function luckCheck(ticket){
// // //     let left = []
// // //     let right = []
// // //     let match = /[^0-9]/

// // //     for(let index in ticket){
// // //         if(match.test(ticket[index])){
// // //             return undefined
// // //         }
// // //         index < ticket.length / 2 ? left.push(parseInt(ticket[index])) : right.push(parseInt(ticket[index]))
// // //     }

// // //     sum = part => part.reduce((total, num) => total + num, 0)

// // //     return sum(left) === sum(right)
// // // }

// // // //   console.log(luckCheck('683179')) //true,
// // // //     console.log(luckCheck('683000')) //false,
// // // //     console.log(luckCheck('6F43E8')) //undefined,

// // // getHashtags = post => {
// // //     console.log('post: ', post);

// // //     let tempArr = []
// // //     let returnArr = []
// // //     let str = ''
// // //     let push = false

// // //     for(let index = 0; index < post.length; index++){

// // //             if(post[index] === '#' && post[index + 1] !== '#' && !Number.isInteger(post[index+1])){
// // //                 // if(index === 0 || post[index-1] === ' '){
// // //                     push = true
// // //                 // }
// // //             }

// // //             if(post[index] === ' ' && str.length > 0 || index === post.length-1){
// // //                 push = false
// // //                 tempArr.push(str.trim())
// // //                 str = ''
// // //             }

// // //             if(push){
// // //                 str+= post[index+1]
// // //             }

// // //     }
// // //     console.log(('tempArr', tempArr));
// // //     for(let word of tempArr){
// // //         if(word !== ''){
// // //             returnArr.push(word)
// // //         }
// // //     }
// // //     return returnArr
// // // }

// // // // console.log(getHashtags("Hello #world"));
// // // // console.log(getHashtags("Hello #world howareyour")); // "world");
// // // // console.log(getHashtags("#sorryNotSorry")); // "sorryNotSorry");
// // // // console.log(getHashtags("too ##many tags")); // "many");

// // // function compoundMatch(arr, target) {
// // //     let map = {}

// // //     for(let i = 0; i < arr.length; i++){
// // //             var compliment = target.substr(arr[i].length)

// // //             if(arr.includes(compliment)){
// // //                 map[compliment] = arr.indexOf(compliment)
// // //             }

// // //             if(compliment in map && arr[i] + compliment === target){
// // //                 if(arr.indexOf(arr[i]) < arr.indexOf(compliment)){
// // //                     return [arr[i], compliment, [i, map[compliment]]]
// // //                 }else{
// // //                     return [compliment,arr[i], [i, map[compliment]]]
// // //                 }
// // //             }

// // //     }
// // //     return null
// // // }

// // //   const arr1 = ['super','bow','bowl','tar','get','book','let'],
// // //         arr2 = ['bow','crystal','organic','ally','rain','line'],
// // //         arr3 = ['top','main','tree','ally','fin','line'],
// // //         arr4 = ['bel', 'bed', 'low', 'grab', 'be', 'knight']
// // //         arr5 = [ 'bow', 'crystal', 'organic', 'ally', 'rain', 'line' ]

// // // //  console.log(compoundMatch(arr1, 'superbowl'));// ['super','bowl', [0,2]])
// // // //  console.log(compoundMatch(arr2, 'crystalline'));// ['crystal','line', [1,5]])
// // // //  console.log(compoundMatch(arr2, 'rainbow'));// ['bow','rain', [4,0]])
// // // //  console.log(compoundMatch(arr2, 'organically'));// ['organic','ally', [2,3]])
// // // //  console.log(compoundMatch(arr3, 'mainline'));// ['main','line', [1,5]])
// // // //  console.log(compoundMatch(arr3, 'treetop'));// ['top','tree', [2,0]])
// // // //  console.log(compoundMatch(arr3, 'finally'));// ['ally','fin', [4,3]])
// // // //  console.log(compoundMatch(arr3, 'treefinally'));// null)
// // // //  console.log(compoundMatch(arr4, 'below'));// ['low','be', [4,2]])
// // // //  console.log(compoundMatch(arr4, 'bellow'));// ['bel','low',[0,2]])
// // // //  console.log(compoundMatch(arr4, 'beknight'));// ['be','knight',[4,5]])

// // //  solution = array => {
// // //     console.log('array: ', array);
// // //     let map = {}
// // //     var missing = 0, duplicate = 0;
// // //     let lowest = 1000000
// // //     let highest = 0

// // //     for(let i = 0; i < array.length; i++){
// // //         map[array[i]] ? map[array[i]]++ : map[array[i]] = 1
// // //         if(map[array[i]] === 2){
// // //             duplicate = i
// // //         }
// // //         if(array[i] < lowest) lowest = array[i]
// // //         if(array[i] > highest)highest = array[i]
// // //     }

// // //     for(let i = lowest; i < highest+1; i++){
// // //         // console.log(i);
// // //         if(!map.hasOwnProperty(i)){
// // //             missing = i
// // //         }
// // //     }
// // //     return [missing,duplicate];
// // //   }

// // // //   console.log(solution([2,3,1,4,4,6]));// [5,4]);
// // // //   console.log(solution([2,2]));// [5,4]);
// // // //   console.log(solution([2,33]));// [5,4]);

// // arraysSimilar = (a1, a2) => {
// //     let a1Sort = a1.sort((a,b) => a < b ? -1 : 1)
// //     let a2Sort = a2.sort((a,b) => a < b ? -1 : 1)
// //     let longest;

// //     a1.length > a2.length ? longest = a1.length : longest = a2.length

// //     for(let i = 0; i < longest; i++) if(a1Sort[i] !== a2Sort[i]) return false

// //     return true
// // }

// //         let arr1 = [1, 2, 2, 3, 4]
// //         let arr2 = [2, 1, 2, 4, 3]
// //         let arr3 = [1, 2, 3, 4]
// //         let arr4 = [1, 2, 3, "4"]

// // 		// console.log((arraysSimilar(arr1, arr2))); //true
// //         // console.log(arraysSimilar(arr2, arr3)); //false
// // 		// console.log(arraysSimilar(arr3, arr4)); //false

// ithElementProduct = (arr) => {
//   let finalArray = [];

//   findProcuct = (arr) => arr.reduce((total, current) => total * current, 1);

//   arr.forEach((num, index) => {
//     finalArray.push(
//       findProcuct(arr.slice(0, index).concat(arr.slice(index + 1)))
//     );
//   });

//   return finalArray;
// };

// // console.log(ithElementProduct([1,2,3,4])); // [24,12,8,6]
// // console.log(ithElementProduct([11,22,33,44])); // [24,12,8,6]

// countLetter = (str, letter) => {
//   let map = {};
//   let moded = str.toLowerCase().split("");

//   for (let char of moded) {
//     map[char] ? map[char]++ : (map[char] = 1);
//   }

//   return map[letter];
// };

// // console.log(countLetter("Hello, how are you? I am fine, thanks for asking", "a"));

// findDuplicate = (arr) => {
//   let map = {};
//   let muliples = [];

//   for (let char of arr) {
//     map[char] ? map[char]++ : (map[char] = 1);
//   }

//   for (let item in map) {
//     if (map[item] > 1) {
//       muliples.push(parseInt(item));
//     }
//   }

//   return muliples;
// };

// // console.log(findDuplicate([9,1,2,3,3,4,5,6,7,8,9,9])); //3

// // 12258

// translate = (str) => {
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let options = {};

//   for (let i = 0; i < str.length; i++) {}

//   // let string = ''

//   // for(let i = 0; i < arr.length; i++){
//   //     string += alpha[arr[i]-1]
//   // }

//   // return string
// };

// // console.log(translate('12258')); //['abbeh' ,'aveh', 'abyh', 'lbeh', 'lyh']

// isSubSequence = (arr1, arr2) => {
//   let pointer1 = 0;
//   let pointer2 = 0;

//   while (pointer1 < arr1.length) {
//     if (arr1[pointer1] !== arr2[pointer2]) {
//       pointer1++;
//     } else if (arr1[pointer1] === arr2[pointer2]) {
//       pointer1++;
//       pointer2++;
//     }
//     if (pointer2 === arr2.length) {
//       return true;
//     }
//   }

//   return false;
// };

// // console.log(isSubSequence([1,2,3,4,5,6,7,8,9], [2,4,7])); //true
// // console.log(isSubSequence([1,2,3,4,5,6,7,8,9], [2,9,7])); //false
// // console.log(isSubSequence([1,5,7,9], [2,4,6])); //false

// findRiverSize = (arr) => {
//   let rivers = [];

//   let riverSpots = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j]);
//       // if(arr[i][j] === 1){
//       //     riverSpots.push([i,j])
//       // }
//     }
//   }

//   // console.log(riverSpots);
//   return rivers;
// };

// // console.log(findRiverSize([[1,0,0,1,0],
// //                            [1,0,1,0,0],
// //                            [0,0,1,0,1],
// //                            [1,0,1,0,1],
// //                            [1,0,1,1,0]])); //[1,2,2,2,5]

// longestPalendromicSubString = (str) => {
//   if (str === "") return "";
//   let map = {};
//   let longestPalLength = 0;
//   let longestWord;

//   handleEven = (i) => {
//     let left = i - 1;
//     let right = i + 2;
//     let strArr = [str[i], str[i + 1]];
//     while (str[left] === str[right] && str[left] && str[right]) {
//       strArr.push(str[right]);
//       strArr.unshift(str[left]);
//       left--;
//       right++;
//     }
//     map[strArr.join("")] = strArr.length;
//   };

//   handleOdd = (i) => {
//     let left = i - 1;
//     let right = i + 1;
//     let strArr = [str[i]];
//     while (str[left] === str[right] && str[left] && str[right]) {
//       strArr.push(str[right]);
//       strArr.unshift(str[left]);
//       left--;
//       right++;
//     }
//     map[strArr.join("")] = strArr.length;
//   };

//   findLongest = () => {
//     for (let pal in map) {
//       if (map[pal] > longestPalLength) {
//         longestPalLength = map[pal];
//         longestWord = pal;
//       }
//     }
//     return longestWord;
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       handleEven(i);
//     }
//     if (str[i - 1] === str[i + 1]) {
//       handleOdd(i);
//     }
//   }

//   return Object.keys(map).length > 0 ? findLongest() : str[0];
// };

// // console.log(longestPalendromicSubString('abcdcbf')); //'bcdcb'
// // console.log(longestPalendromicSubString('abadcbf')); //'aba'
// // console.log(longestPalendromicSubString('racecar')); //'racecar'
// // console.log(longestPalendromicSubString('asdf')); //'a'
// // console.log(longestPalendromicSubString('acbbcf')); //'cbbc'
// // console.log(longestPalendromicSubString('aqbbcf')); //'cbbc'
// // console.log(longestPalendromicSubString('abb')); //'bb'
// // console.log(longestPalendromicSubString('ababa')); //'ababa'
// // console.log(longestPalendromicSubString('')); //''

// twoWords = (arr, target) => {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (target.includes(arr[i])) {
//       let compliment = target.replace(arr[i], "");

//       if (compliment in map) {
//         return compliment + arr[i] === target
//           ? [map[compliment], i]
//           : [i, map[compliment]];
//       }

//       map[arr[i]] = i;
//     }
//   }

//   return [];
// };

// // console.log(twoWords(["rac", "ecar", "bob", "george"], 'racecar')); //[0,1]
// // console.log(twoWords(["ecar", "rac", 'ship', 'star'], 'starship')); //[3,2]
// // console.log(twoWords(["st", "ship"], 'starship')); //[]

// reveseVowels = (str) => {
//   let strArr = str.split("");
//   let left = 0;
//   let right = str.length - 1;
//   let tempLetter;
//   const vowels = /[AEIOUaeiou]/;

//   while (left < right) {
//     if (vowels.test(strArr[left]) && vowels.test(strArr[right])) {
//       tempLetter = strArr[left];
//       strArr[left] = strArr[right];
//       strArr[right] = tempLetter;
//       left++;
//       right--;
//     }
//     if (!vowels.test(strArr[left])) {
//       left++;
//     }
//     if (!vowels.test(strArr[right])) {
//       right--;
//     }
//   }

//   return strArr.join("");
// };

// // console.log(reveseVowels('Hello, how are you?'));

// longestSubstringNoRepeats = (str) => {};

// // console.log(longestSubstringNoRepeats("abcdefgghij")); // 'abcdefg'
// // console.log(longestSubstringNoRepeats("bccdefghijk")); // 'cdefghijk'
// // console.log(longestSubstringNoRepeats("abcdefcghijk")); // 'defcghijk'
// // console.log(longestSubstringNoRepeats("abcbdefgchia")); // 'bdefgchia'

// function expandedForm(num) {
//   let numStr = num.toString().split("");
//   let finalStr = "";
//   let arr = [];

//   for (let i = 0; i < numStr.length; i++) {
//     let lengthOfZeroes = numStr.length - i - 1;
//     let tempStr = "";
//     if (numStr[i] !== "0") {
//       tempStr += numStr[i];
//       while (lengthOfZeroes > 0) {
//         tempStr += "0";
//         lengthOfZeroes--;
//       }
//       arr.push(tempStr);
//     }
//   }

//   for (let j = 0; j < arr.length; j++) {
//     j < arr.length - 1 ? (finalStr += arr[j] + " + ") : (finalStr += arr[j]);
//   }

//   return finalStr;
// }

// //   console.log(expandedForm(12)) // '10 + 2');
// //     console.log(expandedForm(42)) // '40 + 2');
// //     console.log(expandedForm(70304)) // '70000 + 300 + 4');

// function isClosing(str) {
//   if (str.length === 0) return false;
//   let score = 0;

//   for (let i = 0; i < str.length; i++) {
//     str[i] === "(" ? score++ : score--;
//     if (score < 0) {
//       return false;
//     }
//   }
//   return score % 2 === 0;
// }

// //   console.log(isClosing("()"));// true
// //   console.log(isClosing("()("));// false
// //   console.log(isClosing("()()"));// true
// //   console.log(isClosing("()()("));// false
// //   console.log(isClosing("(()())"));// true
// //   console.log(isClosing("(()(())"));// false
// //   console.log(isClosing("())(()))"));// false
// //   console.log(isClosing("))(("));// false
// //   console.log(isClosing(""));// false

// var groupAnagrams = function (strs) {
//   let map = {};
//   let finalArr = [];

//   let sortedArr = strs.map((word) => word.split("").sort().join(""));

//   for (let i = 0; i < sortedArr.length; i++) {
//     map[sortedArr[i]] ? map[sortedArr[i]].push(i) : (map[sortedArr[i]] = [i]);
//   }

//   for (let key in map) {
//     let temp = [];
//     for (let item of map[key]) {
//       temp.push(strs[item]);
//     }
//     finalArr.push(temp);
//   }

//   return finalArr;
// };

// // console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); //[["bat"],["nat","tan"],["ate","eat","tea"]]

// var divisibilityArray = function (word, m) {
//   return word.split("").map((letter) => (parseInt(letter) % m === 0 ? 1 : 0));
// };

// // console.log(divisibilityArray("998244353", 3)); // [1,1,0,0,0,1,1,0,0]

// var longestContinuousSubstring = function (s) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let subIndex = 0;
//   let longestLength = "";
//   let index = 0;
//   while (index < s.length - 1) {
//     if (
//       alpha.includes(s.slice(subIndex, index + 1)) &&
//       s.slice(subIndex, index + 1).length > longestLength
//     ) {
//       // console.log(s.slice(subIndex,index+1));
//       longestLength = s.slice(subIndex, index + 1).length;
//       // console.log(longestLength);
//     } else {
//       subIndex = index;
//       // index--
//     }
//     index++;
//   }
//   return longestLength;
// };

// // console.log(longestContinuousSubstring("abacaba")); //2
// // console.log(longestContinuousSubstring("abcde")); //5
// // console.log(longestContinuousSubstring("yrpjofyzubfsiypfre")); //'yz' 2
// // console.log(longestContinuousSubstring("nkvexzqgctjxwqnzneuvtuvyvrmhfbawyabanxadvlzllpwnanjxyjhhzzjokcszjeooitnvadkuzsnklxriwo")); // 'tuv' 3

// var maxSubArray = function (nums) {
//   // let maxSum = -Infinity
//   // let currentMax = 0

//   // for(let i = 0; i < nums.length; i++){
//   //     currentMax = Math.max(nums[i], currentMax + nums[i])
//   //     maxSum = Math.max(maxSum, currentMax)
//   // }
//   // return maxSum

//   let max = -Infinity;
//   let tempMax = 0;

//   for (let num of nums) {
//     tempMax = Math.max(num, num + tempMax);
//     max = Math.max(tempMax, max);
//   }
//   return max;
// };

// // console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // [4,-1,2,1], return 6
// // console.log(maxSubArray([1])); // [1], return 1
// // console.log(maxSubArray([5,4,-1,7,8])); // [5,4,-1,7,8], return 23

// var findKthLargest = function (nums, k) {
//   let lowest = Infinity;
//   let highest = -Infinity;
//   let count = 0;
//   let map = {};

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//     lowest = Math.min(lowest, num);
//     highest = Math.max(highest, num);
//   }

//   if (k === 1) return highest;
//   if (k === nums.length) return lowest;

//   while (count < k) {
//     if (map[highest] && map[highest] > 1) {
//       for (let i = 0; i < map[highest]; i++) {
//         count++;
//         if (count === k) return highest;
//       }
//     }
//     if (map[highest] && map[highest] === 1) {
//       count++;
//       if (count === k) return highest;
//     }
//     highest--;
//   }
// };

// // console.log(findKthLargest([3,2,1,5,6,4], 2)); //5
// // console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); //4
// // console.log(findKthLargest([99,99], 1)); //99
// // console.log(findKthLargest([-1,-1], 2)); //-1
// // console.log(findKthLargest([-5,-1,-2,1,3,-1,-6], 2)); //1

// var findDuplicate = function (nums) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       return nums[i];
//     } else {
//       map[nums[i]] = 1;
//     }
//   }
// };

// // console.log(findDuplicate([1,3,4,2,2])); //2
// // console.log(findDuplicate([3,1,3,4,2])); //3

// var topKFrequent = function (nums, k) {
//   let map = {};
//   let arr = [];
//   let freqArr = [];

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let item in map) {
//     arr.push([item, map[item]]);
//   }

//   let sortedArr = arr.sort((a, b) => (a[1] > b[1] ? -1 : 1));

//   for (let i = 0; i < sortedArr.length; i++) {
//     freqArr.push(parseInt(sortedArr[i][0]));
//   }

//   return freqArr.slice(0, k);
// };

// // console.log(topKFrequent([1,1,1,2,2,3], 2)); //[1,2]
// // console.log(topKFrequent([1], 1)); //[1]

// var isAdditiveNumber = function (num) {
//   let arr = [];

//   for (let i = 0; i < num.length; i++) {
//     arr.push(parseInt(num[i]));
//   }

//   console.log(arr);
// };

// // console.log(isAdditiveNumber("112358"));//true
// // console.log(isAdditiveNumber("199100199"));//true

// var frequencySort = function (s) {
//   let map = {};
//   let arr = [];
//   let finalStr = "";

//   for (let letter of s) {
//     map[letter] ? map[letter]++ : (map[letter] = 1);
//   }

//   for (let item in map) {
//     arr.push([item, map[item]]);
//   }

//   let sortedArr = arr.sort((a, b) => (a[1] > b[1] ? -1 : 1));

//   sortedArr.forEach((subArr) => {
//     if (subArr[1] > 1) {
//       for (let i = 0; i < subArr[1]; i++) {
//         finalStr += subArr[0];
//       }
//     } else {
//       finalStr += subArr[0];
//     }
//   });

//   return finalStr;
// };

// // console.log(frequencySort("tree")); //"eert"
// // console.log(frequencySort("cccaaa")); //"aaaccc"
// // console.log(frequencySort("Aabb")); //"bbAa"

// var repeatedStringMatch = function (a, b) {
//   let count = 1;
//   let substringOf = (str1, str2) => {
//     return str1.includes(str2);
//   };

//   while (substringOf(a, b) === false) {
//     a += a;
//     count++;
//   }
//   return count;
// };

// // console.log(repeatedStringMatch("abcd", "cdabcdab")); //3
// // console.log(repeatedStringMatch("a", "aa")); //2

// var arrangeWords = function (text) {
//   let modStr = text
//     .toLowerCase()
//     .split(" ")
//     .sort((a, b) => (a.length < b.length ? -1 : 1))
//     .join(" ");
//   return modStr[0].toUpperCase() + modStr.substr(1);
// };

// // console.log(arrangeWords("Leetcode is cool")); // "Is cool leetcode"
// // console.log(arrangeWords("Keep calm and code on")); // "On and keep calm code"
// // console.log(arrangeWords("To be or not to be")); // "To be or to be not"

// // var lengthOfLongestSubstring = function(s) {
// //     let map = {}
// //     let index = 0
// //     let length = 0

// //     for(let i = 0; i < s.length; i++){
// //         while(!map[s[index]] && s[index] !== undefined){
// //             map[s[index]] = 1
// //             index++
// //         }
// //         if(Object.keys(map).length > length){
// //             length = Object.keys(map).length
// //         }
// //         Object.keys(map).forEach(key => {
// //             delete(map[key])
// //         })

// //         index = i
// //     }
// //     return length
// // };

// // console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// // console.log(lengthOfLongestSubstring("bbbbb")); //1
// // console.log(lengthOfLongestSubstring("pwwkew")); //3
// // console.log(lengthOfLongestSubstring(" ")); //1

// var reverse = function (x) {
//   let neg = x < 0;
//   let sorted = parseInt(x.toString().split("").reverse().join(""));
//   return x > 2147483648 || sorted > 2147483648 ? 0 : neg ? sorted * -1 : sorted;
// };

// // console.log(reverse(123)); //321
// // console.log(reverse(-123)); //-321
// // console.log(reverse(120)); //21
// // console.log(reverse(1534236469)); //21

// //https://leetcode.com/problems/longest-consecutive-sequence/
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;

//   let numsSet = new Set(nums);
//   let max = 0;

//   for (let num of numsSet) {
//     if (numsSet.has(num - 1)) continue;

//     let tempNum = num;
//     let tempMax = 1;

//     while (numsSet.has(tempNum + 1)) {
//       tempMax++;
//       tempNum++;
//     }

//     max = Math.max(max, tempMax);
//   }

//   return max;
// };

// // console.log(longestConsecutive([100,4,200,1,3,2]));//4
// // console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); //9
// // console.log(longestConsecutive([0,-1])) //2
// // console.log(longestConsecutive([0,-1, 1])) //3
// // console.log(longestConsecutive([1,3,5,2,4])) //5
// // console.log(longestConsecutive([-8,-4,9,9,4,6,1,-4,-1,6,8])) //2
// // console.log(longestConsecutive([0,-1,-2,-3,-4,-5,-6,-7,-8])) //9
// // console.log(longestConsecutive([0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999])) //10

// var longestCommonSubsequence = function (text1, text2) {
//   let shortest;
//   let longest;
//   let map1 = {};
//   let map2 = {};
//   let common = []
//   text1.length < text2.length
//     ? ((shortest = text1), (longest = text2))
//     : ((shortest = text2), (longest = text1));
//   if (text1.length === text2.length) (shortest = text1), (longest = text2);
//   console.log(shortest);

//   for (let letter of shortest) {
//     map1[letter] ? map1[letter]++ : (map1[letter] = 1);
//   }

//   for (let letter of longest) {
//     map2[letter] ? map2[letter]++ : (map2[letter] = 1);
//   }

//   console.log(map1);
//   console.log(map2);

//   for(let item in map1){
//     if(item in map1 && item in map2){
//         if(map1[item] === map2[item]){
//             for(let i = 0; i < map1[item]; i++){
//                 common.push(item)
//             }
//         }

//     }
//   }

//   console.log(common);
// };

// // console.log(longestCommonSubsequence("abcde", "ace")); //3 'ace'
// // console.log(longestCommonSubsequence("abcded", "acedd")); //4 'acedd'
// // console.log(longestCommonSubsequence("abc", "abc")); //3 'abc'
// // console.log(longestCommonSubsequence("abc", "def")); //0
// // console.log(longestCommonSubsequence("ezupkr", "ubmrapg")); //2
// // console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")); //2

// //https://leetcode.com/problems/divide-two-integers/
// var divide = function (dividend, divisor) {
//   if (divisor === 0) return undefined;
//   if (
//     (dividend > 2147483647 && divisor === 1) ||
//     (divisor > 2147483647 && dividend === 1)
//   )
//     return 2147483647;
//   if (
//     (dividend > 2147483648 && divisor === -1) ||
//     (divisor > 2147483648 && dividend === -1)
//   )
//     return -2147483648;
//   if (
//     (dividend < -2147483648 && divisor === 1) ||
//     (divisor < -2147483648 && dividend === 1)
//   )
//     return -2147483648;
//   if (
//     (dividend < -2147483647 && divisor === -1) ||
//     (divisor < -2147483647 && dividend === -1)
//   )
//     return 2147483647;
//   if (divisor === 1) return dividend;
//   // if(divisor === -1) return dividend * -1

//   let tempDividend;
//   let tempDivisor;
//   let quotient = 0;

//   dividend < 0 ? (tempDividend = dividend * -1) : (tempDividend = dividend);
//   divisor < 0 ? (tempDivisor = divisor * -1) : (tempDivisor = divisor);

//   while (tempDividend >= tempDivisor) {
//     tempDividend -= tempDivisor;
//     quotient++;
//   }

//   if (quotient > 2147483647) return 2147483647;
//   if (quotient < -2147483648) return -2147483648;

//   return (dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)
//     ? quotient * -1
//     : quotient;
// };

// // console.log(divide(10, 3)); //3
// // console.log(divide(2, 2)); //1
// // console.log(divide(10, 0)); //undefined
// // console.log(divide(10, 1)); //10
// // console.log(divide(7, -3)); //-2
// // console.log(divide(-7, 3)); //-2
// // console.log(divide(-7, -2)); //3
// // console.log(divide(1, 1)); //1
// // console.log(divide(-1, 1)); //-1
// // console.log(divide(-2147483648, -1));// 2147483647

// var getSum = function (a, b) {
//   let arr = [];
//   arr.length = 10000;
//   arr.length += a;
//   arr.length += b;

//   return arr.length - 10000;
// };

// // console.log(getSum(1,2)); //3
// // console.log(getSum(2,3)); //5
// // console.log(getSum(-1,1)); //0
// // console.log(getSum(1,-1)); //0

// var plusOne = function (digits) {
//   let index = digits.length - 1;

//   if (digits[index] !== 9) {
//     digits[index]++;
//     return digits;
//   }

//   while (digits[index] === 9) {
//     digits[index] = 0;

//     if (digits[index - 1] !== 9 && digits[index - 1]) {
//       digits[index - 1]++;
//       return digits;
//     }
//     if (index > 0) {
//       index--;
//     } else {
//       digits.unshift(1);
//       return digits;
//     }
//   }
// };

// // console.log(plusOne([1,2,3])); //[1,2,4]
// // console.log(plusOne([4,3,2,1])); //[4,3,2,2]
// // console.log(plusOne([9])); //[1,0]
// // console.log(plusOne([9,9,9])); //[1,0,0,0]
// // console.log(plusOne([9,1,9])); //[9,2,0]
// // console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// var isPalindrome = function (s) {
//   return (
//     s
//       .toLowerCase()
//       .replace(/[^a-z0-9]/g, "")
//       .split("")
//       .reverse()
//       .join("") === s.toLowerCase().replace(/[^a-z0-9]/g, "")
//   );
// };

// // console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
// // console.log(isPalindrome("race a car")); //false
// // console.log(isPalindrome(" ")); //true

// var isAnagram = function (s, t) {
//   sort = (str) =>
//     str.toLowerCase().replaceAll(" ", "").split("").sort().join("");

//   return sort(s) === sort(t);
// };

// // console.log(isAnagram("anagram", "nagaram")); //true
// // console.log(isAnagram("Clint Eastwood", "old west action")); //true
// // console.log(isAnagram("asdf", "sdfg")); //false

// var missingNumber = function (nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }
// };

// // console.log(missingNumber([3,0,1])); //2
// // console.log(missingNumber([0,1])); //2
// // console.log(missingNumber([9,6,4,2,3,5,7,0,1])); //8

// var reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left <= right) {
//     let temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//     left++;
//     right--;
//   }
//   return s;
// };

// // console.log(reverseString(["h", "e", "l", "l", "o"])); //["o","l","l","e","h"]

// var firstUniqChar = function (s) {
//   let map = {};

//   for (let letter of s) {
//     map[letter] ? map[letter]++ : (map[letter] = 1);
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]] === 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// // console.log(firstUniqChar("leetcode")); //0
// // console.log(firstUniqChar("loveleetcode")); //2
// // console.log(firstUniqChar("aabb")); //-1

// var fizzBuzz = function (n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(String(i));
//     }
//   }
//   return arr;
// };

// // console.log(fizzBuzz(3));

// var moveZeroes = function (nums) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//     }
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1);
//     }
//   }

//   for (let i = 0; i < count; i++) {
//     nums.push(0);
//   }
//   return nums;
// };

// // console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]
// // console.log(moveZeroes([0])); //[0]

// var strStr = function (haystack, needle) {
//   return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
// };

// // console.log(strStr("sadbutsad", "sad")); //0
// // console.log(strStr("leetcode", "leeto")); //0

// var longestCommonPrefix = function (strs) {
//   let i = 0;

//   while (strs[0][i] && strs.every((word) => word[i] === strs[0][i])) {
//     i++;
//   }

//   return strs[0].substring(0, i);
// };

// // console.log(longestCommonPrefix(["flower","flow","flight"])); //"fl"
// // console.log(longestCommonPrefix(["dog","racecar","car"])); //""

// var isValid = function (s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let last = stack[stack.length - 1];
//     if (
//       (s[i] === ")" && last === "(") ||
//       (s[i] === "]" && last === "[") ||
//       (s[i] === "}" && last === "{")
//     ) {
//       stack.pop();
//     } else {
//       stack.push(s[i]);
//     }
//   }

//   return stack.length === 0;
// };

// // console.log(isValid("()()")); //true
// // console.log(isValid("()[]{}")); //true
// // console.log(isValid("(]")); //false
// // console.log(isValid("{[]}")); //true
// // console.log(isValid("{[]")); //false
// // console.log(isValid("([)]")); //false
// // console.log(isValid("([]{})")); //true
// // console.log(isValid("([]{})[]")); //true

// var mergeTwoLists = function (list1, list2) {
//   let sortedList = [];
//   let index1 = 0;
//   let index2 = 0;

//   if (list1.length === 0) return list2;
//   if (list2.length === 0) return list1;

//   while (index1 < list1.length && index2 < list2.length) {
//     if (list1[index1] < list2[index2]) {
//       sortedList.push(list1[index1]);
//       index1++;
//     } else if (list1[index1] > list2[index2]) {
//       sortedList.push(list2[index2]);
//       index2++;
//     } else if (list1[index1] === list2[index2]) {
//       sortedList.push(list1[index1]);
//       index1++;
//       sortedList.push(list2[index2]);
//       index2++;
//     }
//   }

//   return sortedList;
// };

// // console.log(mergeTwoLists([1,2,4], [1,3,4])); //[1,1,2,3,4,4]
// // console.log(mergeTwoLists([], [])); //[]
// // console.log(mergeTwoLists([], [0])); //[0]

// //https://leetcode.com/problems/word-break/
// var wordBreak = function (s, wordDict) {
//   let arr = new Array(s.length + 1).fill(false);
//   arr[0] = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === false) continue;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (wordDict.includes(s.slice(i, j))) {
//         arr[j] = true;
//       }
//     }
//   }
//   return arr.at(-1);
// };

// // console.log(wordBreak("leetcode", ["leet","code"])); //true
// // console.log(wordBreak("applepenapple", ["apple","pen"])); //true
// // console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); //false
// // console.log(wordBreak("cars", ["car","ca","rs"])); //true

// var reverseWords = function (s) {
//   let wordArr = s.split(" ");
//   let reversedWords = [];
//   for (let i = wordArr.length - 1; i >= 0; i--) {
//     if (wordArr[i].length > 0) {
//       reversedWords.push(wordArr[i]);
//     }
//   }
//   return reversedWords.join(" ");
// };

// // console.log(reverseWords("the sky is blue")); //"blue is sky the"
// // console.log(reverseWords("  hello world  ")); //"world hello"
// // console.log(reverseWords( "a good   example")); //"example good a"

// var twoSum = function (numbers, target) {
//   let map = {};

//   for (let i = 0; i < numbers.length; i++) {
//     let compliment = target - numbers[i];

//     if (compliment in map) {
//       return [map[compliment] + 1, i + 1];
//     }

//     map[numbers[i]] = i;
//   }
// };

// // console.log(twoSum([2,7,11,15], 9)); //[1,2]
// // console.log(twoSum([2,3,4], 6)); //[1,3]
// // console.log(twoSum([-1,0], -1)); //[1,2]

// var singleNumber = function (nums) {
//   let map = {};
//   let returnArr = [];

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let item in map) {
//     if (map[item] === 1) {
//       returnArr.push(parseInt(item));
//     }
//   }

//   return returnArr;
// };

// // console.log(singleNumber([1,2,1,3,2,5])); //[3,5]
// // console.log(singleNumber([-1,0])); //[-1,0]
// // console.log(singleNumber([0,1])); //[0,1]

// var findDuplicates = function (nums) {
//   let map = {};
//   let duplicates = [];

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let item in map) {
//     if (map[item] > 1) {
//       duplicates.push(parseInt(item));
//     }
//   }

//   return duplicates;
// };

// // console.log(findDuplicates([4,3,2,7,8,2,3,1])); //[2,3]
// // console.log(findDuplicates([1,1,2])); //[1]
// // console.log(findDuplicates([1])); //[]

// //https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// var minMoves2 = function (nums) {
//   let steps = 2127271182;
//   let currentSteps = 0;
//   let index = 0;

//   findSteps = () => {
//     return nums.reduce((total, cur, i) => {
//       return index > nums[i]
//         ? (currentSteps += index - nums[i])
//         : (currentSteps += nums[i] - index);
//     }, index);
//   };

//   while (findSteps() < steps) {
//     steps = currentSteps;
//     index++;
//     currentSteps = 0;
//   }

//   return steps;
// };

// // console.log(minMoves2([1,2,3])); //2
// // console.log(minMoves2([1,10,2,9])); //16
// // console.log(minMoves2([1,0,0,8,6])); //14
// //maybe use binary search instead of doing each item in array

// //https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
// var findLongestWord = function (s, dictionary) {
//   let sMap = {};
//   let longestWord = "";

//   for (let letter of s) {
//     sMap[letter] ? sMap[letter]++ : (sMap[letter] = 1);
//   }

//   checkWord = (word) => {
//     let wordMap = {};
//     let tempWord = "";
//     for (let letter of word) {
//       wordMap[letter] ? wordMap[letter]++ : (wordMap[letter] = 1);
//     }

//     for (let i = 0; i < word.length; i++) {
//       if (sMap[word[i]] && sMap[word[i]] >= wordMap[word[i]]) {
//         tempWord += word[i];
//       }
//     }
//     if (tempWord.length > longestWord.length) {
//       longestWord = tempWord;
//     }
//     if (tempWord.length === longestWord.length) {
//       longestWord = [longestWord, tempWord].sort()[0];
//     }
//   };

//   dictionary.forEach((word) => {
//     checkWord(word);
//   });

//   return longestWord;
// };

// // console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"])); //'apple'
// // console.log(findLongestWord("abpcplea", ["a","b","c"])); //'a'
// // console.log(findLongestWord("abce", ["abe","abc"])); //'a'
// //should be correct but is not passing

// //https://leetcode.com/problems/single-number-ii/
// var singleNumber = function (nums) {
//   let map = {};

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let item in map) {
//     if (map[item] === 1) return item;
//   }
// };

// // console.log(singleNumber([2,2,3,2])); //3
// // console.log(singleNumber([0,1,0,1,0,1,99])); //99

// //https://leetcode.com/problems/shifting-letters/
// var shiftingLetters = function (s, shifts) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let arr = s.split("");

//   shift = (str, arr) => {
//     // console.log(str);
//     // let item = alpha.indexOf(str) + 1
//     // return item === 26 ? alpha[0] : alpha[item]
//   };

//   // console.log(shift(s.substring(0,1), shifts[0]))

//   shifts.forEach((num, index) => {
//     // console.log(num);
//     // console.log(index);
//     // console.log(shift(s.substring(0,index+1), shifts[num]))
//   });

//   return arr;
// };

// // console.log(shiftingLetters("abc", [3,5,9])); //"rpl"
// // console.log(shiftingLetters("aaa", [1,2,3]));
// // console.log(shiftingLetters("aaab", [1,2,3,2])); //

// longestSubArrBySum = (arr, sum) => {
//   let lengthArr = [];
//   let longestSum = 0;
//   let right = 1;

//   reduceSubArr = (subArr) => {
//     return subArr.reduce((total, cur) => {
//       return total + cur;
//     }, 0);
//   };

//   for (let i = 0; i < arr.length; i++) {
//     while (reduceSubArr(arr.slice(i, right)) < sum && right < arr.length) {
//       right++;
//     }
//     if (
//       reduceSubArr(arr.slice(i, right)) === sum &&
//       arr.slice(i, right).length > longestSum
//     ) {
//       longestSum = arr.slice(i, right).length;
//       lengthArr.push(i, right - 1);
//     }
//     if (reduceSubArr(arr.slice(i, right)) > sum || right > arr.length - 1) {
//       right = i + 1;
//     }
//   }
//   return lengthArr;
// };

// // console.log(longestSubArrBySum([1,2,3,7,5], 12)); // [1,3]
// // console.log(longestSubArrBySum([1,2,3,4,5,6,7,8,9], 3)); // [0,1]
// //too much brute force, better to do multiple pointers

// longestSumSlidingWindow = (arr, sum) => {
//   let left = 0;
//   let right = 1;
//   let subArr = [];
//   let longestSum = 0;

//   sumSubArr = (subArr) => {
//     return subArr.reduce((total, cur) => {
//       return total + cur;
//     }, 0);
//   };
//   while (left < arr.length) {
//     if (
//       sumSubArr(arr.slice(left, right)) === sum &&
//       right - left > longestSum
//     ) {
//       longestSum = right - left;
//       subArr = [left, right - 1];
//     } else if (sumSubArr(arr.slice(left, right)) < sum && right < arr.length) {
//       right++;
//     } else if (
//       sumSubArr(arr.slice(left, right)) > sum ||
//       right === arr.length
//     ) {
//       left++;
//     } else {
//       right++;
//     }
//   }

//   return subArr.length > 0 ? subArr : -1;
// };

// // console.log(longestSumSlidingWindow([1,2,3,7,9], 12)); // [1,3]
// // console.log(longestSumSlidingWindow([1,2,3,4,5,6,7,8,9], 3)); // [0,1]
// // console.log(longestSumSlidingWindow([1,2,3,4,5,6,7,8,9], 113)); // -1
// // console.log(longestSumSlidingWindow([1,2,3,7,9], 16)); // [3,4]
// // console.log(longestSumSlidingWindow([1,2,3,7,9,0,0,0], 16)); // [3,7]
// // console.log(longestSumSlidingWindow([9,7,3,2,1], 12)); // [1,3]
// // console.log(longestSumSlidingWindow([1,7,3,12], 12)); // [1,3]
// // console.log(longestSumSlidingWindow([5,7,3,12], 12)); // [0,1]
// // console.log(longestSumSlidingWindow([12,7,3,0,0,0,0,2], 12)); // [0,1]

// longestSubStrNoRepeat = (str) => {
//   let longestStr = "";
//   let left = 0;
//   let right = 1;

//   checkForNoRepeat = (subStr) => {
//     let map = {};
//     for (let letter of subStr) {
//       if (!map[letter]) {
//         map[letter] = 1;
//       } else {
//         return false;
//       }
//     }
//     return true;
//   };

//   while (left < str.length) {
//     let subStr = str.substring(left, right);
//     if (checkForNoRepeat(subStr) && right < str.length) {
//       right++;
//     } else {
//       if (subStr.length > longestStr.length) {
//         longestStr = subStr;
//       }
//       left++;
//     }
//   }
//   return longestStr.substring(0, longestStr.length - 1);
// };

// // console.log(longestSubStrNoRepeat('abcdeafgd'));//"bcdeafgd"
// // console.log(longestSubStrNoRepeat('aaaaaaaaa'));//"a"
// // console.log(longestSubStrNoRepeat('bcdeghjkjhgfgfhjjhgjhgkqwertyuiopasdfghjklzxcvbnmab'));//"a"

// longestPalSubStr = (str) => {
//   if (str === "") return "";
//   let longestSubPal = str[0];

//   checkForPal = (subS) => {
//     if (subS.split("").reverse().join("") === subS) {
//       if (subS.length > longestSubPal.length) {
//         longestSubPal = subS;
//       }
//       return true;
//     }
//     return false;
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] === str[i + 1]) {
//       let left = i - 1;
//       let right = i + 1;
//       let subString = str.substring(left, right + 1);
//       while (checkForPal(subString) && str[left] && str[right]) {
//         left--;
//         right++;
//         subString = str.substring(left, right + 1);
//       }
//     }
//     if (str[i + 1] && str[i + 1] === str[i]) {
//       let left = i - 1;
//       let right = i + 2;
//       let subString = str.substring(left, right + 1);
//       while (checkForPal(subString) && str[left] && str[right]) {
//         left--;
//         right++;
//         subString = str.substring(left, right + 1);
//       }
//     }
//   }

//   return longestSubPal;
// };

// // console.log(longestPalSubStr('abacddc')); //cddc
// // console.log(longestPalSubStr('abavcddcv')); //cddc
// // console.log(longestPalSubStr('abc')); //a
// // console.log(longestPalSubStr('dccd')); //a
// // console.log(longestPalSubStr('a')); //a
// // console.log(longestPalSubStr('racecar')); //racecar

// longestSubArrSum = (arr, sum) => {
//   let left = 0;
//   let right = 1;
//   let returnArr = [[-1]];

//   findSum = (array) => {
//     let arrSum = array.reduce((total, cur) => {
//       return total + cur;
//     }, 0);
//     if (arrSum === sum && array.length > returnArr[0].length) {
//       returnArr = array;
//     }
//     return arrSum;
//   };

//   // while(left < arr.length){

//   // }
//   // console.log(findSum(arr.slice(0,5)));

//   return returnArr;
// };

// // console.log(longestSubArrSum([1,2,3,4,5,6,7,8], 15));//[1,2,3,4,5]
// // console.log(longestSubArrSum([8,3,6,6,9,6], 15));//[3,6,6]

// var maxSubArray = function (nums) {
//   let subArray = [];
//   let highestSum = nums[0];

//   findSum = (subArr) => {
//     let sum = subArr.reduce((total, cur) => {
//       return total + cur;
//     }, 0);
//     if (sum > highestSum) {
//       highestSum = sum;
//       subArray = subArr;
//       return true, sum;
//     }
//     return false;
//   };

//   for (let i = 0; i < nums.length; i++) {
//     let right = i + 1;

//     if (nums[i] < 1) continue;
//     while (right < nums.length + 1) {
//       findSum(nums.slice(i, right));
//       right++;
//     }
//   }

//   return subArray;
// };

// // console.log(maxSubArray([-2,2,5,-11,6])); //[2,5]
// // console.log(maxSubArray([-2,0,5,-11])); //[5]
// // console.log(maxSubArray([-2,5,5,-1,5])); //[5,5,-1,5]
// // console.log(maxSubArray([-2,2,5,11,-6])); //[2,5,11]
// // console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //[2,5,11]

// //https://leetcode.com/problems/words-within-two-edits-of-dictionary/
// var twoEditWords = function (queries, dictionary) {
//   let returnArr = [];

//   compareWords = (a, b) => {
//     let score = 0;
//     for (let i = 0; i < queries[a].length; i++) {
//       if (queries[a][i] === dictionary[b][i]) {
//         score++;
//       }
//     }
//     if (score >= queries[0].length - 2) {
//       returnArr.push(queries[a]);
//       return true;
//     }
//     return false;
//   };

//   for (let i = 0; i < queries.length; i++) {
//     let j = 0;
//     while (!compareWords(i, j) && j < dictionary.length - 1) {
//       j++;
//     }
//   }

//   return returnArr;
// };

// // console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"])); //["word","note","wood"]
// // console.log(twoEditWords(["yes"], ["not"])); //[]
// // console.log(twoEditWords(["tsl","sri","yyy","rbc","dda","qus","hyb","ilu","ahd"], ["uyj","bug","dba","xbe","blu","wuo","tsf","tga"])); //["tsl","yyy","rbc","dda","qus","hyb","ilu"]
// // console.log(twoEditWords(["t","i","m","i","p","s"], ["w","j","b","p","u","b","u","i","h","m"])); //["t","i","m","i","p","s"]

// //https://leetcode.com/problems/trapping-rain-water/  (((HARD!!!)))
// var trap = function (height) {
//   let stack = [];
//   let gutters = {};

//   findRaingutters = (last, i) => {
//     let lowest;
//     last[0] < height[i] ? (lowest = last[0]) : (lowest = height[i]);
//     if (i - last[1] > 1) {
//       if (last[1] + 1 === i - 1) {
//         gutters[i - 1] = lowest;
//       } else {
//         for (let j = last[1] + 1; j <= i - 1; j++) {
//           if (!gutters[j] || gutters[j] < lowest) {
//             gutters[j] = lowest;
//           }
//         }
//       }
//     }
//   };

//   findRainAmount = () => {
//     let rain = 0;
//     for (let gut in gutters) {
//       rain += gutters[gut] - height[gut];
//     }
//     return rain;
//   };

//   for (let i = 0; i < height.length; i++) {
//     if (height === 0) continue;
//     while (stack.length > 0 && stack[stack.length - 1][0] <= height[i]) {
//       findRaingutters(stack[stack.length - 1], i);
//       stack.pop();
//     }
//     stack.push([height[i], i]);
//   }

//   return findRainAmount();
// };

// // console.log(trap([4,2,0,3,2,5]));  //9
// // console.log(trap([4,2,3]));  //1
// // console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));  //6
// //think maybe a stack is not the way to go

// //https://leetcode.com/problems/longest-palindromic-substring/
// // var longestPalindrome = function(s) {
// //     if(s.length === 0)return ''
// //     let longest = s[0]

// //     checkForPal = sub => {
// //         if(sub.split('').reverse().join('') === sub){
// //             if(sub.length > longest.length){
// //                 longest = sub
// //             }
// //             return true
// //         }
// //         return false
// //     }

// //     for(let i = 0; i < s.length; i++){
// //         let left
// //         let right = i+1
// //         if(s[i-1] === s[i+1]){
// //             left = i-1
// //         }else if(s[i] === s[i+1]){
// //             left = i
// //         }else{
// //             continue
// //         }
// //         while(checkForPal(s.substring(left,right+1)) && s[left] && s[right]){
// //             left--
// //             right++
// //         }
// //     }

// //     return longest
// // };

// // console.log(longestPalindrome("babad")); //'bab'
// // console.log(longestPalindrome("beabaed")); //'eabae'
// // console.log(longestPalindrome("cbbd")); //'bb'
// // console.log(longestPalindrome("dggd")); //'dggd'
// // console.log(longestPalindrome("cbbcdc")); //'cbbc'
// // console.log(longestPalindrome("aaaa")); //'aaaa'
// // console.log(longestPalindrome("baab")); //'baab'
// // console.log(longestPalindrome("d")); //'d'
// // console.log(longestPalindrome("")); //''
// //can't get this to pass longer strings for some reason

// //https://leetcode.com/problems/maximum-product-subarray/
// // var maxProduct = function(nums) {
// //     let product = -Infinity
// //     let max = 1
// //     let min = 1
// //     for(let i = 0; i < nums.length; i++){
// //         let previousMax = max
// //         max = Math.max(nums[i], max * nums[i], min * nums[i])
// //         min = Math.min(nums[i], previousMax * nums[i], min * nums[i])
// //         product = Math.max(product, max, min)
// //     }
// //     return product
// // };

// // console.log(maxProduct([2,3,-2,4])); //6 ([2,3])
// // console.log(maxProduct([-2, 3, -4, 5, 2, -2, 1])); //240
// // console.log(maxProduct([0,2,3,0,-2,4])); //6 ([2,3])
// // console.log(maxProduct([-2,0,-1])); //0 ([0])
// // console.log(maxProduct([-2])); //-2 ([-2])
// // console.log(maxProduct([])); //[]
// // console.log(maxProduct([0,2])); //2 ([-2])
// // console.log(maxProduct([0,-2])); //0
// // console.log(maxProduct([-2,0])); //0
// //times out, shouldn't use a nested for loop

// var longestPalindrome = function (s) {
//   if (s.length === 0) return "";
//   let longestPal = "";

//   isPal = (left, right) => {
//     while (left >= 0 && right <= s.length && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     return s.slice(left + 1, right);
//   };

//   for (let i = 0; i < s.length; i++) {
//     let evenPal = isPal(i, i + 1);
//     let oddPal = isPal(i, i);

//     if (evenPal.length > longestPal.length) {
//       longestPal = evenPal;
//     }
//     if (oddPal.length > longestPal.length) {
//       longestPal = oddPal;
//     }
//   }
//   return longestPal;
// };

// // console.log(longestPalindrome("babad")); //'bab'
// // console.log(longestPalindrome("beabaed")); //'eabae'
// // console.log(longestPalindrome("cbbd")); //'bb'
// // console.log(longestPalindrome("dggd")); //'dggd'
// // console.log(longestPalindrome("cbbcdc")); //'cbbc'
// // console.log(longestPalindrome("aaaa")); //'aaaa'
// // console.log(longestPalindrome("baab")); //'baab'
// // console.log(longestPalindrome("d")); //'d'
// // console.log(longestPalindrome("")); //''

// //https://leetcode.com/problems/multiply-strings/
// var multiply = function (num1, num2) {
//   let numMap = {
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     0: 0,
//   };
//   let arr1 = [];
//   let arr2 = [];

//   for (let i = 0; i < num1.length; i++) {
//     arr1.push(numMap[num1[i]]);
//   }

//   for (let i = 0; i < num2.length; i++) {
//     arr2.push(numMap[num2[i]]);
//   }

//   let n1 = +arr1.join("");
//   let n2 = +arr2.join("");

//   return (n1 * n2).toFixed(0);
// };

// // console.log(multiply("2","3")); //'6'
// // console.log(multiply("123", "456")); //'56088'
// // console.log(multiply("123456789", "987654321")); //"121932631112635269"
// // console.log(multiply("123456789", "0")); //"121932631112635269"
// // console.log(multiply("123456789", "1")); //"121932631112635269"
// // console.log(multiply("123456789", "987654321")); //"121932631112635269"

// //
// //https://leetcode.com/problems/find-all-anagrams-in-a-string/
// var findAnagrams = function (s, p) {
//   let pArr = new Array(26).fill(0);
//   let sArr = new Array(26).fill(0);
//   let indexes = [];

//   arraysEqual = (arr1, arr2) => {
//     for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
//     return true;
//   };

//   for (let i = 0; i < p.length; i++) {
//     let index = p.charCodeAt(i) % 26;
//     pArr[index]++;
//   }

//   for (let i = 0; i < s.length; i++) {
//     let index = s.charCodeAt(i) % 26;
//     sArr[index]++;
//     if (i > p.length - 1) {
//       let head = s.charCodeAt(i - p.length) % 26;
//       sArr[head]--;
//     }
//     if (i >= p.length - 1) {
//       if (arraysEqual(pArr, sArr)) indexes.push(i - (p.length - 1));
//     }
//   }

//   return indexes;
// };

// // console.log(findAnagrams("cbaebabacd", "abc"));//[0,6]
// // console.log(findAnagrams("cbaebabacd", "cba"));//[0,6]
// // console.log(findAnagrams("abab", "ab"));//[0,1,2]
// // time limit exceeded on large strings

// //https://leetcode.com/problems/sort-colors/
// var sortColors = function (nums) {
//   if (nums.length === 0) return [];
//   if (nums.length === 1) return nums[0];

//   let map = {};
//   let tempIndex = 0;

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let item in map) {
//     for (let i = 0; i < map[item]; i++) {
//       nums.splice(tempIndex, i + 1, parseInt(item));
//       tempIndex++;
//     }
//   }

//   return nums;
// };

// // console.log(sortColors([2,0,2,1,1,0]));//[0,0,1,1,2,2]
// // console.log(sortColors([2,0,1]));//[0,1,2]
// // console.log(sortColors([2]));//[2]
// // console.log(sortColors([]));//[]

// //https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// var longestSubstring = function (s, k) {
//   if (k === 0 || s.length === 0 || k > s.length) return 0;
//   if (k === 1) return s.length;

//   let longest = 0;
//   // let map = {}
//   let arr = [];
//   let subArr = [];
//   let thirdArr = [];
//   // let newString = s

//   // for(let letter of s){
//   //     map[letter] = (map[letter] || 0) +1
//   // }

//   // if(Object.values(map).length === 1)return Object.values(map)[0]

//   check = (str, arr) => {
//     let map = {};
//     let maxSub = 0;
//     for (let letter of str) {
//       map[letter] = (map[letter] || 0) + 1;
//     }

//     let index = 1;

//     for (let i = 0; i < str.length; i++) {
//       if (map[str[i]] < k) continue;

//       while (map[str[index]] >= k && index < str.length) {
//         index++;
//       }

//       if (str.substring(i, index).length > 0) {
//         arr.push(str.substring(i, index));
//         maxSub = Math.max(maxSub, str.substring(i, index).length);
//       }

//       index = i + 1;
//     }

//     return maxSub;
//   };

//   check(s, arr);
//   // console.log(arr);

//   if (arr.length === 1) return arr[0].length;
//   if (arr.length === 0) return 0;

//   arr.forEach((sub) => {
//     check(sub, subArr);
//   });
//   // console.log(subArr);

//   if (subArr.length === 0) return 0;
//   if (subArr.length === 1) return subArr[0].length;

//   subArr.forEach((sub) => {
//     if (check(sub, thirdArr) >= k) {
//       longest = Math.max(check(sub, thirdArr), longest);
//     }
//   });

//   if (thirdArr.length === 0) return 0;
//   if (thirdArr.length === 1) return thirdArr[0].length;
//   // console.log(thirdArr);

//   return longest;
// };

// // console.log(longestSubstring("aaabb", 3)); //3 ("aaa")
// // console.log(longestSubstring("aarrabccdeereereee", 3)); //3 ("eee")
// // console.log(longestSubstring("aaabb", 1)); //5 ("aaa")
// // console.log(longestSubstring("ababbc", 2)); //5 ("ababb")
// // console.log(longestSubstring("cbabba", 2)); //5 ("ababb")
// // console.log(longestSubstring("v", 2)); //0 ("ababb")
// // // console.log(longestSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 10)); //1000 ("ababb")
// // console.log(longestSubstring("aaabbbacccbdc", 4)); //0 ("")
// //times out on long numbers, need better way than nested for loop

// lengthOfLongestSubstring = (str) => {
//   let set = new Set(),
//     i = 0,
//     j = 0,
//     max = 0;

//   while (i < str.length - max) {
//     while (!set.has(str[j]) && j < str.length) {
//       set.add(str[j]);
//       max = Math.max(max, set.size);
//       j++;
//     }
//     set.delete(str[i]);
//     i++;
//   }
//   return max;
// };

// // console.log(lengthOfLongestSubstring('pwwkew')); //3
// // console.log(lengthOfLongestSubstring('aabbccddefghi')); //3
// // console.log(lengthOfLongestSubstring('abcdabcdegghijklmnoalasdf')); //3

// //https://leetcode.com/problems/longest-increasing-subsequence/
// var lengthOfLIS = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return 1;

//   let arr = [nums[0]];

//   for (let i = 0; i < nums.length; i++) {
//     if (arr.at(-1) < nums[i]) {
//       arr.push(nums[i]);
//     } else {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j] >= nums[i]) {
//           arr[j] = nums[i];
//           break;
//         }
//       }
//     }
//   }
//   return arr.length;
// };

// // console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); //4
// // console.log(lengthOfLIS([0,1,0,3,2,3])); //4
// // console.log(lengthOfLIS([7,7,7,7,7,7,7])); //1
// // console.log(lengthOfLIS([7,6,5,4,3,2,1])); //1
// // console.log(lengthOfLIS([7])); //1
// // console.log(lengthOfLIS([])); //0
// // console.log(lengthOfLIS([4,10,4,3,8,9])); //3

// // https://leetcode.com/problems/product-of-array-except-self/

// var productExceptSelf = function (nums) {
//   if (nums.length === 0) return [];
//   if (nums.length === 1) return nums;

//   let prefix = [];
//   let suffix = [];
//   let finalArr = [];
//   let zeroMap = {
//     0: 0,
//   };

//   for (let num of nums) {
//     if (num === 0) zeroMap[0]++;
//     if (zeroMap[0] > 1) return Array(nums.length).fill(0);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     i === 0 ? (prefix[i] = 1) : (prefix[i] = nums[i - 1] * prefix[i - 1]);
//   }
//   console.log(prefix);

//   for (let i = nums.length - 1; i >= 0; i--) {
//     i === nums.length - 1
//       ? (suffix[i] = 1)
//       : (suffix[i] = nums[i + 1] * suffix[i + 1]);
//   }
//   console.log(suffix);

//   for (let i = 0; i < prefix.length; i++) {
//     finalArr[i] = prefix[i] * suffix[i];
//   }

//   return finalArr;
// };

// // console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6]
// // console.log(productExceptSelf([-1, 1, 0, -3, 3])); //[0,0,9,0,0]
// // console.log(productExceptSelf([0, 1, 0, -3, 3])); //[0,0,0,0,0]
// // console.log(productExceptSelf([1, 2, 3, 4, -1])); //[24,12,8,6]
// // console.log(productExceptSelf([1])); //[1]
// // console.log(productExceptSelf([])); //[]
// // console.log(productExceptSelf([5, 9, 2, -9, -9, -7, -8, 7, -9, 10])); //[-51438240,-28576800,-128595600,28576800,28576800,36741600,32148900,-36741600,28576800,-25719120]

// //https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// var maxVowels = function (s, k) {
//   let max = 0;
//   let index = 0;
//   let vowels = new Set(["a", "e", "i", "o", "u"]);

//   while (index < s.length - k + 1 && max < k) {
//     let count = 0;
//     for (let i = index; i < index + k; i++) {
//       if (vowels.has(s[i])) {
//         count++;
//       }
//     }
//     max = Math.max(max, count);
//     index++;
//   }

//   return max;
// };

// // console.log(maxVowels("abciiidef", 3)); //3 (iii)
// // console.log(maxVowels("weallloveyou", 7)); //4 (iii)
// // console.log(maxVowels("aeiou", 2)); //2
// // console.log(maxVowels("leetcode", 3)); //2

// // https://leetcode.com/problems/maximum-average-subarray-i/
// var findMaxAverage = function (nums, k) {
//   let currentSum = 0;
//   let currentAverage;

//   for (let i = 0; i < k; i++) {
//     currentSum += nums[i];
//     currentAverage = (currentSum / k).toFixed(5);
//   }
//   let maxAverage = currentAverage;

//   for (let i = 0; i < nums.length - k; i++) {
//     currentSum -= nums[i];
//     currentSum += nums[i + k];
//     currentAverage = (currentSum / k).toFixed(5);
//     maxAverage = Math.max(currentAverage, maxAverage);
//   }

//   return maxAverage;
// };

// // console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); //12.75000
// // console.log(findMaxAverage([5], 1)); //5.00000
// // console.log(findMaxAverage([4,0,4,3,3], 5)); //2.80000
// // console.log(findMaxAverage([], 1)); //2.80000

// //https://leetcode.com/problems/minimum-size-subarray-sum/
// var minSubArrayLen = function (target, nums) {
//   let minLength = Infinity;
//   let left = 0;
//   let right = 1;
//   let sum = nums[0];

//   while (left < nums.length) {
//     if (sum < target && right < nums.length) {
//       sum += nums[right];
//       right++;
//     } else if (sum >= target) {
//       minLength = Math.min(minLength, right - left);
//       sum -= nums[left];
//       left++;
//     }
//     if (right === nums.length && sum < target) break;
//   }

//   return minLength < Infinity ? minLength : 0;
// };

// // console.log(minSubArrayLen(7, [2,3,1,2,4,3])); //2
// // console.log(minSubArrayLen(4, [1,4,4])); //1
// // console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); //0
// // console.log(minSubArrayLen(7, [1,1,1,1,7])); //1

// //https://leetcode.com/problems/string-compression/
// var compress = function (chars) {};

// // console.log(compress(["a","a","b","b","c","c","c"])); //6
// // console.log(compress(["a"])); //1

// //https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// var findUnsortedSubarray = function (nums) {
//   let sortedArr = [...nums].sort((a, b) => a - b);
//   let min = Infinity;
//   let max = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== sortedArr[i]) {
//       min = Math.min(min, i);
//       max = Math.max(max, i);
//     }
//   }

//   return min < Infinity ? max - min + 1 : 0;
// };

// // console.log(findUnsortedSubarray([2,6,4,8,10,9,15])); // 5
// // console.log(findUnsortedSubarray([2,6,4,8,9,10,15])); // 2
// // console.log(findUnsortedSubarray([-5,-3,-2,-11,1,2,3])); // 4
// // console.log(findUnsortedSubarray([1,2,3,4])); // 0
// // console.log(findUnsortedSubarray([1])); // 0

// //https://leetcode.com/problems/replace-words/
// var replaceWords = function (dictionary, sentence) {
//   let sentArr = sentence.split(" ");
//   let dictArrSort = dictionary.sort((a, b) => (a.length < b.length ? -1 : 1));

//   dictArrSort.forEach((word) => {
//     for (let i = 0; i < sentArr.length; i++) {
//       if (sentArr[i].slice(0, word.length) === word) {
//         sentArr[i] = word;
//       }
//     }
//   });

//   return sentArr.join(" ");
// };

// // console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")); //"the cat was rat by the bat"
// // console.log(replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs")); //"a a b c"

// //https://leetcode.com/problems/non-decreasing-array/
// var checkPossibility = function (nums) {
//   let count = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       count++;
//       if (i - 2 < 0 || nums[i - 2] <= nums[i]) nums[i - 1] = nums[i];
//       else nums[i] = nums[i - 1];
//     }
//   }
//   return count <= 1;
// };

// // console.log(checkPossibility([4,2,3])); //true
// // console.log(checkPossibility([4,2,1])); //false
// // console.log(checkPossibility([3,4,2,3])); //false
// // console.log(checkPossibility([3,4,2,5])); //true

// //https://leetcode.com/problems/top-k-frequent-words/
// var topKFrequent = function (words, k) {
//   let map = {};
//   let countArr = [];

//   for (let word of words) {
//     map[word] ? map[word]++ : (map[word] = 1);
//   }

//   for (let item in map) {
//     countArr.push([item, map[item]]);
//   }

//   let sortedArr = countArr.sort().sort((a, b) => (a[1] > b[1] ? -1 : 1));

//   countArr = [];

//   for (let i = 0; i < k; i++) {
//     countArr.push(sortedArr[i][0]);
//   }

//   return countArr;
// };

// // console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2)); //["i","love"]
// // console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)); //["the","is","sunny","day"]
// // console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 3)); //["i","love","coding"]

// //https://leetcode.com/problems/sender-with-largest-word-count/description/
// var largestWordCount = function (messages, senders) {
//   let map = {};
//   let arr = [];

//   for (let i = 0; i < senders.length; i++) {
//     !map[senders[i]]
//       ? (map[senders[i]] = messages[i])
//       : (map[senders[i]] += " " + messages[i]);
//   }

//   for (let item in map) {
//     arr.push([item, map[item].split(" ").length]);
//   }

//   return arr
//     .sort((a, b) => (a[0] > b[0] ? -1 : 1))
//     .sort((a, b) => (a[1] > b[1] ? -1 : 1))[0][0];
// };

// // console.log(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"])); //"Alice"
// // console.log(largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"], ["Bob","Charlie"])); //"Charlie"
// // console.log(largestWordCount(["p mmV","Lb WE u H x f YT","Rey","q","Y R","Ng","mP lo oA l jd y","CP y r N wHA","Bt l","Y S xv MNS","WG vz","S pl l Dz fX D TpI","zGq","z S D"], ["QMnVn","QMnVn","nkq","o","EEM","QMnVn","o","nkq","Gd","Gd","nkq","o","EEM","EEM"])); //"o"
// // console.log(largestWordCount(["tP x M VC h lmD","D X XF w V","sh m Pgl","pN pa","C SL m G Pn v","K z UL B W ee","Yf yo n V U Za f np","j J sk f qr e v t","L Q cJ c J Z jp E","Be a aO","nI c Gb k Y C QS N","Yi Bts","gp No g s VR","py A S sNf","ZS H Bi De dj dsh","ep MA KI Q Ou"], ["OXlq","IFGaW","XQPeWJRszU","Gb","HArIr","Gb","FnZd","FnZd","HArIr","OXlq","IFGaW","XQPeWJRszU","EMoUs","Gb","EMoUs","EMoUs"])); //"FnZd"

// //https://leetcode.com/problems/smallest-string-with-swaps/description/
// var smallestStringWithSwaps = function (s, pairs) {
//   let splitArr = s.split("");

//   swap = (split, arr) => {
//     // console.log(split);
//     // console.log(arr);
//     let left = split[arr[0]];
//     // console.log('left: ', left);
//     let right = split[arr[1]];
//     // console.log('right: ', right);
//     split[arr[0]] = right;

//     split[arr[1]] = left;
//     console.log("string: ", split);
//     return split;
//   };

//   // console.log(swap(s, pairs[0]));

//   pairs.forEach((item) => {
//     // console.log(item);
//     swap(splitArr, item);
//   });

//   return splitArr.join("");
// };

// // console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2]])); //"bacd"
// // console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]])); //"abcd"
// // console.log(smallestStringWithSwaps("cba", [[0,1],[1,2]])); //"abc"

// //https://leetcode.com/problems/longest-word-in-dictionary/
// var longestWord = function (words) {
//   let longestWord = "";
//   let map = {};
//   let sortedArr = [];
//   let concatArr = [];
//   let count = 1;

//   for (let word of words) {
//     map[word[0]] ? map[word[0]].push(word) : (map[word[0]] = [word]);
//   }

//   for (let item in map) {
//     let sorted = map[item].sort();
//     sortedArr.push([item, sorted]);
//   }
//   sortedArr = sortedArr.sort((a, b) => (a[0] < b[0] ? -1 : 1));
//   // console.log('sortedArr: ', sortedArr);

//   sortedArr.forEach((arr) => {
//     concatArr = concatArr.concat(arr[1]);
//   });

//   // console.log(concatArr);

//   for (let i = 1; i < concatArr.length; i++) {
//     if (count === concatArr[i - 1].length) {
//       // console.log(i);
//       if (
//         concatArr[i - 1] === concatArr[i].slice(0, concatArr[i - 1].length) &&
//         concatArr[i].length === concatArr[i - 1].length + 1
//       ) {
//         // console.log(i);
//         if (concatArr[i].length > longestWord.length) {
//           longestWord = concatArr[i];
//           // console.log('longestWord: ', longestWord);
//         }
//       }
//       count++;
//     } else {
//       count = 1;
//     }
//   }

//   return longestWord;
// };

// // console.log(longestWord(["w","wo","wor","worl","world"])); //'world'
// // console.log(longestWord(["a","banana","app","appl","ap","apply","apple"])); //'apple'
// // console.log(longestWord(["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"])); //'latte'
// // console.log(longestWord(["mocha","m","mo","moc","moch","l","la","lat","latt","latte","c","ca","cat"])); //'latte'
// // console.log(longestWord(["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"])); //"yodn"

// //https://leetcode.com/problems/permutations/description
// var permute = function (nums) {
//   let resultArr = [];

//   const dfs = (i, nums) => {
//     if (i === nums.length) {
//       resultArr.push(nums.slice());
//       return;
//     }

//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       dfs(i + 1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   };

//   dfs(0, nums);
//   return resultArr;
// };

// // console.log(permute([1,2,3])); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// // console.log(permute([0,1])); //[[0,1],[1,0]]
// // console.log(permute([1])); //[[1]]

// //https://leetcode.com/problems/next-permutation/description/
// var nextPermutation = function (nums) {
//   let resultArr = [];
//   let permutations = {};

//   const dfs = (i, nums) => {
//     if (i === nums.length) {
//       // permutations.push(nums.slice())
//       permutations[nums.slice()] = nums.slice();
//     }

//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       dfs(i + 1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   };
//   dfs(0, nums);
//   console.log(permutations);

//   for (let item in permutations) {
//     resultArr.push(permutations[item]);
//   }
//   let newArr = resultArr.sort();
//   console.log("resultArr: ", newArr);

//   // return resultArr
// };

// // console.log(nextPermutation([1,2,3])); //[1,3,2]
// // console.log(nextPermutation([3,2,1])); //[1,2,3]
// // console.log(nextPermutation([1,1,5])); //[1,5,1]

// //https://leetcode.com/problems/permutations-ii/
// var permuteUnique = function (nums) {
//   let map = {};
//   let resultsArr = [];

//   const dfs = (i, nums) => {
//     if (i === nums.length) {
//       map[nums.slice()] = nums.slice();
//     }

//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       dfs(i + 1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   };
//   dfs(0, nums);

//   for (let arr in map) {
//     resultsArr.push(map[arr]);
//   }

//   return resultsArr;
// };

// // console.log(permuteUnique([1,1,2])); //[[1,1,2],[1,2,1],[2,1,1]]

// //https://leetcode.com/problems/permutation-in-string/
// var checkInclusion = function (s1, s2) {
//   let stringPerutations = [];
//   let s1Arr = s1.split("");
//   let hasStr = false;

//   const dfs = (i, s1Arr) => {
//     if (i === s1Arr.length) {
//       stringPerutations.push(s1Arr.slice().join(""));
//     }

//     for (let j = i; j < s1Arr.length; j++) {
//       [s1Arr[i], s1Arr[j]] = [s1Arr[j], s1Arr[i]];
//       dfs(i + 1, s1Arr);
//       [s1Arr[i], s1Arr[j]] = [s1Arr[j], s1Arr[i]];
//     }
//   };

//   dfs(0, s1Arr);

//   stringPerutations.forEach((str) => {
//     if (s2.includes(str)) hasStr = true;
//   });

//   return hasStr;
// };

// // console.log(checkInclusion("ab", "eidbaooo")); //true
// // console.log(checkInclusion("ab", "eidboaoo")); //false
// // console.log(checkInclusion("prosperity", "properties")); //false
// //times out on big strings

// const findCombo = (nums) => {
//   let resultArr = [];
//   let map = {};

//   const dfs = (i, nums) => {
//     if (i === nums.length) {
//       map[nums.slice(0, 3)] = nums.slice(0, 3);
//       return;
//     }

//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       dfs(i + 1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   };

//   dfs(0, nums);

//   for (let item in map) {
//     resultArr.push(map[item]);
//   }

//   return resultArr;
// };

// // console.log(findCombo([1,1,1,2,2,2,3,3,3]));

// //https://leetcode.com/problems/increasing-triplet-subsequence/
// var increasingTriplet = function (nums) {
//   let count = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] < nums[i]) {
//       count++;
//       if (count === 3) return true;
//     } else {
//       count = 1;
//     }
//   }
//   return false;
// };

// // console.log(increasingTriplet([1,2,3,4,5])); //true
// // console.log(increasingTriplet([5,4,3,2,1])); //false
// // console.log(increasingTriplet([2,1,5,0,4,6])); //true

// //https://leetcode.com/problems/sqrtx/
// var mySqrt = function (x) {
//   let i = 1;
//   let found = false;

//   while (!found) {
//     if (i * i === x) {
//       found = true;
//       return i;
//     } else if (i * i > x) {
//       fount = true;
//       return i - 1;
//     }
//     i++;
//   }
// };

// // console.log(mySqrt(4)); //2
// // console.log(mySqrt(8)); //2

// //https://leetcode.com/problems/combinations/
// var combine = function (n, k) {
//   let numArr = [];
//   let finalArr = [];
//   let returnMap = {};

//   //push all numbers 1-n into array
//   for (let i = 1; i <= n; i++) {
//     numArr.push(i);
//   }

//   //find all permutations
//   const dfs = (i, numArr) => {
//     if (i === numArr.length) {
//       let tempArr = [numArr.slice(1, 2), numArr.slice(0, 1)];
//       if (!returnMap[tempArr])
//         returnMap[numArr.slice(0, 2)] = numArr.slice(0, 2);
//       return;
//     }

//     for (let j = i; j < numArr.length; j++) {
//       [numArr[i], numArr[j]] = [numArr[j], numArr[i]];
//       dfs(i + 1, numArr);
//       [numArr[i], numArr[j]] = [numArr[j], numArr[i]];
//     }
//   };

//   dfs(0, numArr);

//   for (let item in returnMap) {
//     finalArr.push(returnMap[item]);
//   }

//   return finalArr;
// };

// // console.log(combine(4,2)); //[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// // console.log(combine(1,1)); //[[1]]
// // console.log(combine(2,1)); //[[1],[2]]
// //not sure why this is wrong

// //https://leetcode.com/problems/majority-element-ii/
// var majorityElement = function (nums) {
//   let times = nums.length / 3;
//   let map = {};
//   let returnArr = [];

//   for (let num of nums) {
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let item in map) {
//     if (map[item] > times) returnArr.push(parseInt(item));
//   }

//   return returnArr;
// };

// // console.log(majorityElement([3,2,3])); //[3]
// // console.log(majorityElement([1])); //[1]
// // console.log(majorityElement([1,2])); //[1,2]

// //https://leetcode.com/problems/lexicographical-numbers/
// var lexicalOrder = function (n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   let finalArr = arr.sort();

//   return finalArr;
// };

// // console.log(lexicalOrder(13)); //[1,10,11,12,13,2,3,4,5,6,7,8,9]
// // console.log(lexicalOrder(-13)); //[1,10,11,12,13,2,3,4,5,6,7,8,9]
// // console.log(lexicalOrder(2)); //[1,2]

// //https://leetcode.com/problems/nth-digit/
// var findNthDigit = function (n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   let joined = arr.join("");

//   return joined[n - 1];
// };

// // console.log(findNthDigit(3)); //3
// // console.log(findNthDigit(11)); //0

// //https://leetcode.com/problems/partition-equal-subset-sum/
// var canPartition = function (nums) {
//   let sum = nums.reduce((total, cur) => {
//     return total + cur;
//   }, 0);
//   console.log(sum);
// };

// // console.log(canPartition([1,5,11,5])); //true
// // console.log(canPartition([1,2,3,5])); //false

// //https://leetcode.com/problems/unique-substrings-in-wraparound-string/
// var findSubstringInWraproundString = function (s) {
//   let alpha =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
//   let i = 0;
//   let j = 1;
//   let set = new Set();

//   while (i < s.length) {
//     while (alpha.includes(s.slice(i, j)) && j < s.length + 1) {
//       set.add(s.slice(i, j));
//       j++;
//     }
//     i++;
//     j = i + 1;
//   }

//   return set.size;
// };

// // console.log(findSubstringInWraproundString("a")); //1
// // console.log(findSubstringInWraproundString("cac")); //2
// // console.log(findSubstringInWraproundString("zab")); //6
// //too big an input

// //https://leetcode.com/problems/longest-uncommon-subsequence-ii/
// var findLUSlength = function (arr) {
//   // let index = 0

//   // while(strs[0][index] && strs.every(word => word[index] !== strs[0][index])){
//   //     index++
//   // }

//   // return strs[0].substring(0,index)

//   let i = 0;

//   while (arr.every((word) => word[i] !== arr[0][i])) {
//     i++;
//   }

//   console.log(i);
//   console.log(arr[0].slice(0, i));
//   return i;
// };

// // console.log(findLUSlength(["aba","cdc","eae"])); //3
// // console.log(findLUSlength(["aaa","aaa","aa"])); //-1

// //https://leetcode.com/problems/continuous-subarray-sum/
// var checkSubarraySum = function (nums, k) {};

// // console.log(checkSubarraySum([23,2,4,6,7], 6)); //true
// // console.log(checkSubarraySum([23,2,6,4,7], 6)); //true
// // console.log(checkSubarraySum([23,2,6,4,7], 13)); //false
// // console.log(checkSubarraySum([5,0,0,0], 3)); //true
// // console.log(checkSubarraySum([1,3,6,0,9,6,9], 7)); //true
// //times out on big numbers

// //https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// var maxProfit = function (prices) {
//   let min = prices[0];
//   let max = 0;
//   for (let i = 1; i < prices.length; i++) {
//     min = Math.min(min, prices[i]);
//     max = Math.max(max, prices[i] - min);
//   }
//   return max;
// };

// // console.log(maxProfit([7,1,5,3,6,4])); //5
// // console.log(maxProfit([7,6,4,3,1])); //0

// //https://leetcode.com/problems/maximum-product-of-word-lengths/
// var maxProduct = function (words) {
//   let max = 0;
//   let setArr = [];

//   words.forEach((word) => {
//     setArr.push(new Set(Array.from(new Set(word)).sort()));
//   });

//   console.log(setArr);

//   //   for (let i = 0; i < setArr.length; i++) {
//   //     for (let j = i + 1; j < setArr.length; j++) {
//   //       if (words[i].length * words[j].length < max) continue;

//   //       console.log(i, j);
//   //       for (let k of setArr[i]) {
//   //         if (setArr[j].has(k)) {
//   //           console.log(i,j,k);
//   //           break;
//   //         }
//   //         // else{
//   //         //     console.log(words[i], words[j]);
//   //         //
//   //         // }
//   //       }
//   //       max = Math.max(max, words[i].length * words[j].length)

//   //     }
//   //   }

//   return max;
// };

// // console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])); //16
// // console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"])); //4
// // console.log(maxProduct(["a","aa","aaa","aaaa"])); //0

// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (nums[middle] === target) {
//       return middle;
//     } else if (target < nums[middle]) {
//       end = middle - 1;
//     } else if (target > nums[middle]) {
//       start = middle + 1;
//     }
//   }
//   return -1;
// };

// // console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
// // console.log(search([-1, 0, 3, 5, 9, 12], 2)); //-1
// // console.log(search([5], 5)); //0
// // console.log(search([2, 5], 5)); //1

// //https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// var searchRange = function (nums, target) {
//   if (nums.length === 0) return [-1, -1];

//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (target === nums[middle]) {
//       end = middle;
//       start = middle;
//       while (start - 1 >= 0 && nums[start - 1] === target) {
//         start--;
//       }
//       while (end + 1 <= nums.length - 1 && nums[end + 1] === target) {
//         end++;
//       }
//       return [start, end];
//     } else if (target < nums[middle]) {
//       end = middle - 1;
//     } else if (target > nums[middle]) {
//       start = middle + 1;
//     }
//   }

//   return [-1, -1];
// };

// // console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); //[3,4]
// // console.log(searchRange([0, 0, 0, 1, 2, 3], 0)); //[0,2]
// // console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); //[-1,-1]
// // console.log(searchRange([], 0)); //[-1,-1]

// //https://leetcode.com/problems/contiguous-array/
// var findMaxLength = function (nums) {
//   if (nums.length < 2) return 0;
//   let max = 0;
//   let left = 0;
//   let right = 2;
//   let zeroCount = 0;
//   let oneCount = 0;

//   nums[0] === 0 ? zeroCount++ : oneCount++;
//   nums[1] === 0 ? zeroCount++ : oneCount++;
//   console.log(zeroCount);
//   console.log(oneCount);
//   if (zeroCount === oneCount) {
//     max = Math.max(max, zeroCount + oneCount);
//   }

//   while (left < nums.length - max) {
//     while (right < nums.length) {
//       if (zeroCount === oneCount) {
//         max = Math.max(max, zeroCount + oneCount);
//       }
//       right++;
//       nums[right] === 0 ? zeroCount++ : oneCount++;
//     }
//     nums[left] === 0 ? zeroCount-- : oneCount--;
//     left++;
//     right = left + 2;
//   }
//   return max;
// };

// // console.log(findMaxLength([0,1])); //2
// // console.log(findMaxLength([0,1,0,1])); //4
// // console.log(findMaxLength([0,1,0])); //2
// // console.log(findMaxLength([0])); //0

// //https://leetcode.com/problems/find-the-highest-altitude/
// var largestAltitude = function (gain) {
//   let currentHeight = 0;
//   let maxHeight = 0;

//   for (let i = 0; i < gain.length; i++) {
//     currentHeight += gain[i];
//     maxHeight = Math.max(maxHeight, currentHeight);
//   }
//   return maxHeight;
// };

// // console.log(largestAltitude([-5, 1, 5, 0, -7])); //1
// // console.log(largestAltitude([-4,-3,-2,-1,4,3,2])); //0

// //https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// var letterCombinations = function (digits) {
//   if (digits === "") return [];

//   let phone = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };

//   let combos = [];

//   const dfs = (i, current) => {
//     if (i >= digits.length) {
//       combos.push(current);
//       return;
//     }

//     let letters = phone[digits[i]];

//     for (let l of letters) {
//       dfs(i + 1, current + l);
//     }
//   };

//   dfs(0, "");
//   return combos;
// };

// // console.log(letterCombinations("23")); //["ad","ae","af","bd","be","bf","cd","ce","cf"]
// // console.log(letterCombinations("")); //[]
// // console.log(letterCombinations("2")); //["a","b","c"]
// //not sure how to do this

// //https://leetcode.com/problems/find-peak-element/
// var findPeakElement = function (nums) {
//   let start = 0;
//   let end = nums.length - 1;

//   // while(start <= end){
//   // let middle = Math.floor((start + end) / 2)

//   // if(nums[middle-1] < nums[middle] && nums[middle+1] < nums[middle] || middle-1 < 0 && nums[middle+1] < nums[middle] || middle+1 >= nums.length && nums[middle-1 < nums[middle]]){
//   //     return middle
//   // }else if(nums[middle])
//   // }
// };

// // console.log(findPeakElement([1,2,3,1])); //2
// // console.log(findPeakElement([1,2,1,3,5,6,4])); //5
// //not sure how to run a binary search if the array is not sorted

// //Linked List
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   //insert first node
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   //insert last node
//   insertLast(data) {
//     let node = new Node(data);
//     let current;

//     //if empty, make head
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next) {
//         current = current.next;
//       }

//       current.next = node;
//     }
//     this.size++;
//   }

//   //insert at index
//   insertAt(data, index) {
//     //if index is out of range
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     //if first index
//     if (index === 0) {
//       this.head = new Node(data, this.head);
//       return;
//     }

//     const node = new Node(data);
//     let current, previous;

//     //set current to first
//     current = this.head;
//     let count = 0;

//     while (count < index) {
//       previous = current; //node before index
//       count++;
//       current = current.next; //node after indes
//     }

//     node.next = current;
//     previous.next = node;

//     this.size++;
//   }

//   //get at index
//   getAt(index) {
//     let current = this.head;
//     let count = 0;

//     while (current) {
//       if (count === index) {
//         // console.log(current.data);
//       }
//       count++;
//       current = current.next;
//     }
//     return null;
//   }

//   //remove at index
//   removeAt(index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     let current = this.head;
//     let previous;
//     let count = 0;

//     //remove first
//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (count < index) {
//         count++;
//         previous = current;
//         current = current.next;
//       }
//       previous.next = current.next;
//     }
//     this.size--;
//   }

//   //clear list
//   clearList() {
//     this.head = null;
//     this.size = 0;
//   }

//   //print list data
//   printListData() {
//     let current = this.head;

//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// // ll.insertAt(500, 3)
// ll.getAt(3);
// ll.removeAt(1);
// ll.clearList();

// // console.log(ll);
// ll.printListData();

// //Google interview question:
// const minDistance = (favs) => {
//   const neighborhoods = [
//     {
//       Gym: true,
//       School: false,
//       Store: true,
//     },
//     {
//       Gym: false,
//       School: false,
//       Store: true,
//     },
//     {
//       Gym: false,
//       School: true,
//       Store: false,
//     },
//     {
//       Gym: true,
//       School: false,
//       Store: false,
//     },
//     {
//       Gym: false,
//       School: true,
//       Store: false,
//     },
//     {
//       Gym: true,
//       School: true,
//       Store: false,
//     },
//   ];

//   let minDistance = [Infinity, null];
//   let distances = [];
//   let totalDistances = [];

//   //count from left to right
//   for (let i = 0; i < neighborhoods.length; i++) {
//     favs.forEach((location) => {
//       let locationDistance = null;
//       let local = `${location}Distance`;
//       if (neighborhoods[i][`${location}`]) {
//         locationDistance = 0;
//       }
//       if (!neighborhoods[i][`${location}`]) {
//         if (
//           neighborhoods[i - 1] &&
//           neighborhoods[i - 1][`${location}Distance`] !== null
//         ) {
//           locationDistance = neighborhoods[i - 1][`${location}Distance`] + 1;
//         }
//       }
//       neighborhoods[i][`${local}`] = locationDistance;
//     });
//   }

//   //count from right to left
//   for (let i = neighborhoods.length - 1; i >= 0; i--) {
//     favs.forEach((location) => {
//       let local = `${location}Distance`;
//       if (neighborhoods[i][`${location}`]) {
//         locationDistance = 0;
//       }
//       if (!neighborhoods[i][`${location}`]) {
//         if (
//           neighborhoods[i + 1] &&
//           neighborhoods[i + 1][`${location}Distance`] !== null
//         ) {
//           if (neighborhoods[i][`${location}Distance`] !== null) {
//             locationDistance = Math.min(
//               neighborhoods[i + 1][`${location}Distance`] + 1,
//               neighborhoods[i][`${location}Distance`]
//             );
//           } else {
//             locationDistance = neighborhoods[i + 1][`${location}Distance`] + 1;
//           }
//         }
//       }
//       neighborhoods[i][`${local}`] = locationDistance;
//       distances.push(neighborhoods[i][`${local}`]);
//     });
//   }

//   console.log(neighborhoods);

//   distances = distances.reverse();

//   for (let i = 0; i < distances.length; i += 2) {
//     totalDistances.push(distances[i] + distances[i + 1]);
//   }

//   for (let i = 0; i < totalDistances.length; i++) {
//     if (totalDistances[i] < minDistance[0]) {
//       minDistance[0] = totalDistances[i];
//       minDistance[1] = i;
//     }
//   }
//   console.log(totalDistances);
//   console.log(minDistance);
//   return minDistance[1];
// };

// // console.log(minDistance(["Gym", "Store", "School"]));

// //https://leetcode.com/problems/merge-sorted-array/
// var merge = function (nums1, m, nums2, n) {
//   for (let i = m; i < nums1.length; i++) {
//     nums1[i] = nums2[i - m];
//   }
//   return nums1.sort((a, b) => a - b);
// };

// // console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
// // console.log(merge([1], 1, [], 0)); //[1]
// // console.log(merge([0], 0, [1], 1)); //[1]

// //https://leetcode.com/problems/excel-sheet-column-number/
// var titleToNumber = function (columnTitle) {
//   let alpha = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//     I: 9,
//     J: 10,
//     K: 11,
//     L: 12,
//     M: 13,
//     N: 14,
//     O: 15,
//     P: 16,
//     Q: 17,
//     R: 18,
//     S: 19,
//     T: 20,
//     U: 21,
//     V: 22,
//     W: 23,
//     X: 24,
//     Y: 25,
//     Z: 26,
//   };

//   if (columnTitle.length === 1) return alpha[columnTitle];

//   if (columnTitle.length > 1) {
//     let split = columnTitle.split("");
//     split.forEach((item, index) => {
//       if (index < split.length - 1) {
//         split[index] = alpha[item] * 26;
//       } else {
//         split[index] = alpha[item];
//       }
//     });
//     let sum = split.reduce((cur, total) => {
//       return cur + total;
//     }, 0);
//     return sum;
//   }
// };

// // console.log(titleToNumber("A")); //1
// // console.log(titleToNumber("B")); //2
// // console.log(titleToNumber("AB")); //28
// // console.log(titleToNumber("ZY")); //701

// //https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// var removeDuplicates = function (nums) {
//   let set = new Set(nums);
//   let arr = Array.from(set);
//   let k = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (i < arr.length) {
//       nums[i] = arr[i];
//       k = Math.max(k, i + 1);
//     } else {
//       nums[i] = "_";
//     }
//   }
//   return k;
// };

// // console.log(removeDuplicates([1,1,2])); //2
// // console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5

// //https://leetcode.com/problems/factorial-trailing-zeroes/
// var trailingZeroes = function (n) {
//   let fiveCount = 0;

//   for (let i = n; i > 0; i--) {
//     if (i % 5 === 0) {
//       fiveCount++;
//     }
//   }
//   return n < 21 ? fiveCount : fiveCount + 1;
// };

// // console.log(trailingZeroes(3)); //0
// // console.log(trailingZeroes(5)); //1
// // console.log(trailingZeroes(0)); //0
// // console.log(trailingZeroes(30)); //7
// // console.log(trailingZeroes(25)); //7
// // console.log(trailingZeroes(20)); //7

// //https://leetcode.com/problems/count-primes/
// var countPrimes = function (n) {
//   if (n < 2) return 0;
//   let primes = [];

//   const checkPrime = (num) => {
//     let i = 2;
//     while (num % i !== 0) {
//       i++;
//     }
//     return i === num;
//   };

//   for (let i = 2; i < n; i++) {
//     if (checkPrime(i)) primes.push(i);
//   }
//   return primes.length;
// };

// // console.log(countPrimes(10)); //4
// // console.log(countPrimes(0)); //0
// // console.log(countPrimes(1)); //0

// var fractionToDecimal = function (numerator, denominator) {
//   let dividor = String(numerator / denominator).split("");
//   let obj = {};
//   let str = [];
//   let dot = false;

//   for (let i = 0; i < dividor.length; i++) {
//     if (!dot) {
//       str.push(dividor[i]);
//     }
//     if (dot) {
//       obj[dividor[i]] ? obj[dividor[i]]++ : (obj[dividor[i]] = 1);
//     }
//     if (dividor[i] === ".") dot = true;
//   }

//   if (dot) {
//     let lowest = Infinity;
//     let repeat;

//     for (let item in obj) {
//       lowest = Math.min(lowest, obj[item]);
//     }

//     lowest > 1 ? (repeat = true) : (repeat = false);

//     for (let item in obj) {
//       let number = obj[item] / lowest;
//       for (let i = 0; i < number; i++) {
//         str.push(item);
//       }
//     }

//     if (repeat) {
//       let indexOfStr = str.indexOf(".");
//       str.splice(indexOfStr + 1, 0, "(");
//       str.push(")");
//     }
//   }
//   return str.join("");
// };
// // console.log(fractionToDecimal(1, 2)); //"0.5"
// // console.log(fractionToDecimal(2, 1)); //"2"
// // console.log(fractionToDecimal(4, 333)); //"0.(012)"
// // console.log(fractionToDecimal(5, 3333)); //"0.(0015)"
// // console.log(fractionToDecimal(3, 3333)); //"0.(0009)"
// // console.log(fractionToDecimal(1, 6)); //"0.1(6)"
// //just need to do the last one

// //https://leetcode.com/problems/number-of-1-bits/
// var hammingWeight = function (n) {
//   console.log(parseInt(n));
//   console.log(n);
// };

// // console.log(hammingWeight(00000000000000000000000000001011)); //3
// // console.log(hammingWeight(0002241234)); //3
// // console.log(hammingWeight(00000000000000000000000010000000)); //1
// // console.log(hammingWeight(11111111111111111111111111111101)); //31

// //https://leetcode.com/problems/intersection-of-two-arrays-ii/
// var intersect = function (nums1, nums2) {
//   let smaller;
//   let larger;
//   let returnArr = [];

//   nums1.length < nums2.length
//     ? ((smaller = nums1), (larger = nums2))
//     : ((smaller = nums2), (larger = nums1));

//   if (nums1.length === nums2.length) (smaller = nums1), (larger = nums2);

//   let smallMap = {};
//   let largeMap = {};

//   for (let item of smaller) {
//     smallMap[item] ? smallMap[item]++ : (smallMap[item] = 1);
//   }

//   for (let item of larger) {
//     largeMap[item] ? largeMap[item]++ : (largeMap[item] = 1);
//   }

//   for (let item in smallMap) {
//     if (smallMap[item] && largeMap[item]) {
//       let min = Math.min(smallMap[item], largeMap[item]);
//       for (let i = 0; i < min; i++) {
//         returnArr.push(parseInt(item));
//       }
//     }
//   }

//   return returnArr;
// };

// // console.log(intersect([1,2,2,1], [2,2])); //[2,2]
// // console.log(intersect([3, 1, 2], [1, 1])); //[1]
// // console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); //[4,9]

// //https://leetcode.com/problems/median-of-two-sorted-arrays/
// var findMedianSortedArrays = function (nums1, nums2) {
//   let totalLength = nums1.length + nums2.length;
//   let mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
//   let median;

//   if (mergedArr.length % 2 === 0) {
//     median =
//       (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
//       2;
//   } else {
//     median = mergedArr[Math.floor(mergedArr.length / 2)];
//   }
//   return median.toFixed(5);
// };

// // console.log(findMedianSortedArrays([1, 3], [2])); //2.00000
// // console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.50000
// // console.log(findMedianSortedArrays([1, 2], [9, 7])); //4.50000
// // console.log(findMedianSortedArrays([4, 2], [1, 3])); //2.50000
// // console.log(findMedianSortedArrays([3], [-2,-1])); //-1.00000

// //https://leetcode.com/problems/rotate-array/
// var rotate = function (nums, k) {
//   nums = nums.reverse();

//   for (let i = 0; i < k; i++) {
//     nums.push(nums[i]);
//   }

//   nums = nums.reverse();

//   for (let i = 0; i < k; i++) {
//     nums.pop();
//   }

//   return nums;
// };

// // console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
// // console.log(rotate([-1, -100, 3, 99], 2)); //[3,99,-1,-100]
// // console.log(rotate([1, 2], 5)); //[2,1]

// //https://leetcode.com/problems/search-in-rotated-sorted-array/
// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     //end case
//     if (nums[middle] === target) return middle;

//     //if left side is sorted
//     if (nums[start] <= nums[middle]) {
//       //target to left
//       if (target >= nums[start] && target < nums[middle]) {
//         end = middle - 1;
//         //target to the right
//       } else {
//         start = middle + 1;
//       }
//     } else {
//       //right side sorted
//       //target left
//       if (target > nums[middle] && target <= nums[end]) {
//         start = middle + 1;
//       } else {
//         //target right
//         end = middle - 1;
//       }
//     }
//   }

//   return -1;
// };

// // console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //4
// // console.log(search([6,7,1,2,3,4,5], 1)); //2
// // console.log(search([6,7,1,2,3,4,5], 7)); //1
// // console.log(search([6,7,1,2,3,4,5], 5)); //6
// // console.log(search([3,5,7,8,-2,-1,1], 3)); //0
// // console.log(search([3,5,7,8,-2,-1,1], -1)); //5
// // console.log(search([4,5,6,7,0,1,2], 3)); //-1
// // console.log(search([1], 0)); //-1

// //https://leetcode.com/problems/merge-intervals/
// var merge = function (intervals) {
//   if (intervals.length === 1) return [intervals[0]];
//   let overlaps = [];
//   let standAlones = [];
//   //   intervals.sort((a, b) => a[0] - b[0]);

//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i - 1][1] >= intervals[i][0]) {
//       if (i === 1) {
//         overlaps.push(intervals[0]);
//       }
//       overlaps.push(intervals[i]);
//     } else {
//       if (i === 1) {
//         standAlones.push(intervals[0]);
//       }
//       standAlones.push(intervals[i]);
//     }
//   }

//   standAlones.forEach((item) => {
//     overlaps.push(item);
//   });

//   for (let i = 1; i < overlaps.length; i++) {
//     if (
//       overlaps[i][0] <= overlaps[i - 1][1] &&
//       overlaps[i - 1][0] <= overlaps[i][0]
//     ) {
//       if (overlaps[i][1] < overlaps[i - 1][1]) {
//         overlaps[i][1] = overlaps[i - 1][1];
//       }
//       overlaps[i][0] = overlaps[i - 1][0];
//       overlaps[i - 1] = null;
//     }
//   }
//   console.log(overlaps);
//   console.log(standAlones);

//   let final = overlaps.filter((item) => {
//     return item !== null;
//   });
//   return final;
// };

// // console.log(
// //   merge([
// //     [1, 3],
// //     [2, 6],
// //     [8, 10],
// //     [15, 18],
// //   ])
// // ); //[[1,6],[8,10],[15,18]]
// // console.log(
// //   merge(
// //     [[2,3],[4,5],[6,7],[8,9],[1,10]]
// //   )
// // ); //[[1,10]]
// // console.log(
// //   merge([
// //     [1, 4],
// //     [4, 5],
// //   ])
// // ); //[[1,5]]
// // console.log(
// //   merge([
// //     [1, 4],
// //     [5, 6],
// //   ])
// // ); //[[1,4], [5,6]]
// // console.log(
// //   merge([
// //     [1, 4],
// //     [1, 4],
// //   ])
// // ); //[[1,4]]
// // console.log(
// //   merge([
// //     [1, 4],
// //     [0, 4],
// //   ])
// // ); //[[0,4]]
// // console.log(
// //     merge([[1,4],[2,3]])
// //   ); //[[1,4]]
// // console.log(
// //   merge([
// //     [1, 4],
// //     [2, 3],
// //     [4, 7],
// //   ])
// // ); //[[1,7]]

// // console.log(
// //   merge([
// //     [1, 4],
// //     [4, 7],
// //     [6, 10],
// //     [11, 14],
// //   ])
// // ); //[[1,10], 11,14]]
// // console.log(
// //   merge([
// //     [1, 4],
// //     [4, 7],
// //     [6, 10],
// //     [9, 12],
// //     [13, 14],
// //     [15, 17],
// //     [16, 20],
// //     [19, 23],
// //     [24, 27],
// //   ])
// // ); //[[1,10], 11,14]]
// console.log(merge([[1, 4]])); //[[1,10], 11,14]]
// //this shit is hard!!

// //https://leetcode.com/problems/sliding-window-maximum/
// var maxSlidingWindow = function (nums, k) {
//   let index = 0;
//   let arr = [];
//   let max = -Infinity;

//   const findMax = (slice) => {
//     if (max !== -Infinity) {
//       arr.push(max);
//     } else {
//       for (let i = 0; i < slice.length; i++) {
//         max = Math.max(max, slice[i]);
//       }

//       arr.push(max);
//     }

//     if (max === slice[0]) {
//       max = -Infinity;
//     }
//   };

//   while (index < nums.length - k + 1) {
//     let slice = nums.slice(index, index + k);
//     findMax(slice);
//     index++;
//   }

//   return arr;
// };

// // console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[3,3,5,5,6,7]
// // console.log(maxSlidingWindow([8, 3, -1, -3, 5, 3, 6, 7], 3)); //[3,3,5,5,6,7]
// // console.log(maxSlidingWindow([1], 1)); //[1]

// //https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// var kthSmallest = function (matrix, k) {
//   let arr = [];

//   matrix.forEach((item) => {
//     arr = [...arr, ...item];
//   });
//   return arr.sort((a, b) => a - b)[k - 1];
// };

// // console.log(
// //   kthSmallest(
// //     [
// //       [1, 5, 9],
// //       [10, 11, 13],
// //       [12, 13, 15],
// //     ],
// //     8
// //   )
// // ); //13
// // console.log(kthSmallest([[-5]], 1)); //-5
// // console.log(
// //   kthSmallest(
// //     [
// //       [1, 2],
// //       [1, 3],
// //     ],
// //     2
// //   )
// // ); //-5

// //https://leetcode.com/problems/string-to-integer-atoi/
// var myAtoi = function (s) {
//   let arr = [];
//   let number = true;
//   let noSpace = s.replaceAll(" ", "");
//   console.log("noSpace: ", noSpace);
//   for (let i = 0; i < noSpace.length; i++) {
//     if (noSpace[i] === "-" && noSpace[i + 1] === "+") return 0;
//     if (
//       (!Number(noSpace[i]) && noSpace[i] !== ".") ||
//       (noSpace[i] !== "-" && !Number(noSpace[i]))
//     ) {
//       console.log(noSpace[i]);
//       number = false;
//     }
//     if (noSpace[i] === "-" || parseInt(noSpace[i]) || noSpace[i] === ".") {
//       if (number) {
//         arr.push(noSpace[i]);
//       }
//     }
//     // if (!parseInt(s[i])) return 0;
//   }

//   console.log(arr);

//   //   for (let i = 0; i < s.length; i++) {
//   //     if(s[i] === "-" && s[i+1] === '+' || s[i] === "-" && !Number(s[i+1])) return 0
//   //     if (s[i] === " " || s[i] === "-" || s[i] === ".") break;
//   //     if (!parseInt(s[i])) return 0;
//   //   }

//   //   let modified = s.replace(/[^0-9-.]/g, "");
//   //   for (let i = 0; i < modified.length; i++) {
//   //     arr.push(modified[i]);
//   //   }
//   //   let round = Number(Math.round(arr.join("")));
//   //   if (round < -2147483648) return -2147483648;
//   //   if (round > 2147483647) return 2147483647;
//   //   return round;
// };

// // console.log(myAtoi("42")); //42
// // console.log(myAtoi("3.14159")); //3
// // console.log(myAtoi(".1")); //0
// // console.log(myAtoi("words and 987")); //0
// // console.log(myAtoi("   -42")); //-42
// // console.log(myAtoi("4193 with words")); //4193
// // console.log(myAtoi("-+12")); //4193
// // console.log(myAtoi("-")); //4193
// // console.log(myAtoi("+1")); //1
// //grrrrrr!!!!

// //https://leetcode.com/problems/roman-to-integer/
// var romanToInt = function (s) {
//   let nums = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };

//   let sum = 0;
//   let two;
//   let index = 0;
//   while (index <= s.length - 1) {
//     if (s[index + 1] !== undefined) {
//       two = s[index] + s[index + 1];
//     } else {
//       two = null;
//     }
//     if (nums[two]) {
//       sum += nums[two];
//       index += 2;
//     } else {
//       sum += nums[s[index]];
//       index++;
//     }
//   }
//   return sum;
// };

// // console.log(romanToInt("III")); //3
// // console.log(romanToInt("LVIII")); //58
// // console.log(romanToInt("MCMXCIV")); //1994
// // console.log(romanToInt("MDCXCV")); //1695

// //https://leetcode.com/problems/count-of-smaller-numbers-after-self/
// var countSmaller = function (nums) {
//   let count = [];

//   for (let i = 0; i < nums.length; i++) {
//     let smallerNum = nums.slice(i + 1).filter((item) => {
//       return item < nums[i];
//     });
//     count.push(smallerNum.length);
//   }

//   return count;
// };

// // console.log(countSmaller([5, 2, 6, 1])); //[2,1,1,0]
// // console.log(countSmaller([-1])); //[0]
// // console.log(countSmaller([-1, -1])); //[0,0]
// //times out on big numbers

// //https://leetcode.com/problems/first-missing-positive/
// var firstMissingPositive = function (nums) {
//   let highest = -Infinity;
//   let map = {};

//   for (let num of nums) {
//     highest = Math.max(highest, num);
//     map[num] ? map[num]++ : (map[num] = 1);
//   }

//   for (let i = 1; i <= highest + 1; i++) {
//     if (!map[i]) return i;
//   }
//   return 1;
// };

// // console.log(firstMissingPositive([1,2,0])); //3
// // console.log(firstMissingPositive([3,4,-1,1])); //2
// // console.log(firstMissingPositive([7,8,9,11,12])); //1

// //https://leetcode.com/problems/spiral-matrix/
// var spiralOrder = function (matrix) {
//   let top = 0;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   let right = matrix[0].length - 1;
//   let totalLength = matrix.length * matrix[0].length;
//   let returnArr = [];

//   while (returnArr.length < totalLength) {
//     for (let i = left; i <= right; i++) returnArr.push(matrix[top][i]);
//     top++;

//     for (let i = top; i <= bottom; i++) returnArr.push(matrix[i][right]);
//     right--;

//     for (let i = right; i >= left; i--) returnArr.push(matrix[bottom][i]);
//     bottom--;

//     for (let i = bottom; i >= top; i--) returnArr.push(matrix[i][left]);
//     left++;
//   }

//   return returnArr.slice(0, totalLength);
// };

// // console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); //[1,2,3,6,9,8,7,4,5]
// // console.log(
// //   spiralOrder([
// //     [1, 2, 3, 4],
// //     [5, 6, 7, 8],
// //     [9, 10, 11, 12],
// //   ])
// // ); //[1,2,3,4,8,12,11,10,9,5,6,7]

// //https://leetcode.com/problems/word-search/
// var exist = function (board, word) {
//   let row;
//   let column;
//   let index = 0;
//   let traversed = {};

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] === word[0]) {
//         console.log(i, j);
//         let seeIfWord = true;
//         let coordinates = [i, j];
//         traversed[coordinates] = [i, j];
//         index++;
//         row = i;
//         column = j;
//         let count = 0;
//         while (seeIfWord) {
//           count++;
//           console.log(count);
//           console.log(traversed);
//           // coordinates = [row, column]
//           if (
//             board[row][column + 1] !== undefined &&
//             board[row][column + 1] === word[index] &&
//             !traversed.hasOwnProperty([row, column + 1])
//           ) {
//             console.log(word[index]);
//             coordinates = [row, column + 1];
//             console.log([row, column + 1] in traversed);
//             column++;
//             index++;
//             traversed[coordinates] = [row, column];
//             console.log(row, column);
//             console.log(index);
//           } else if (
//             board[row][column - 1] !== undefined &&
//             board[row][column - 1] === word[index] &&
//             !traversed.hasOwnProperty([row, column - 1])
//           ) {
//             console.log(word[index]);
//             console.log(row, column);
//             column--;
//             index++;
//             traversed[coordinates] = [row, column];
//             console.log(row, column);
//             console.log(index);
//           } else if (
//             board[row + 1] !== undefined &&
//             board[row + 1][column] === word[index] &&
//             !traversed.hasOwnProperty([row + 1, column])
//           ) {
//             console.log(word[index]);
//             row++;
//             index++;
//             traversed[coordinates] = [row, column];
//             console.log(row, column);
//             console.log(index);
//           } else if (
//             board[row - 1] !== undefined &&
//             board[row - 1][column] === word[index] &&
//             !traversed.hasOwnProperty([row - 1, column])
//           ) {
//             console.log(word[index]);
//             row--;
//             index++;
//             traversed[coordinates] = [row, column];
//             console.log(row, column);
//             console.log(index);
//           } else {
//             console.log("false");
//             seeIfWord = false;
//             index = 0;
//             for (const key in traversed) {
//               delete traversed[key];
//             }
//             console.log(traversed);
//           }
//           if (index === word.length) return true;
//         }
//       }
//     }
//   }
//   return false;
// };

// // console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); //true
// // console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); //true
// // console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); //false
// // console.log(exist([["A"]], "A")); //false

// //https://leetcode.com/problems/daily-temperatures/
// var dailyTemperatures = function (temperatures) {
//   if (temperatures.length === 1) return [0];
//   if (temperatures.length === 0) return [];

//   let returnArr = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     let index = i + 1;
//     let count = 1;
//     while (
//       temperatures[index] <= temperatures[i] &&
//       index < temperatures.length
//     ) {
//       //   console.log(temperatures[index]);
//       index++;
//       count++;
//     }
//     if (index === temperatures.length) returnArr.push(0);
//     if (temperatures[index] > temperatures[i]) returnArr.push(count);
//   }

//   return returnArr;
// };

// // console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); //[1,1,4,2,1,1,0,0]
// // console.log(dailyTemperatures([30, 40, 50, 60])); //[1,1,1,0]
// // console.log(dailyTemperatures([30, 60, 90])); //[1,1,0]

// Write a function findLongestWord that takes a string as input and returns the longest word in the string.
//  If there are multiple words with the same maximum length, return the first one that appears in the string.

const zombieWords =
  "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.";

const baconWords =
  "Bacon ipsum dolor amet ground round pork pork belly drumstick buffalo, doner meatloaf pancetta salami biltong jerky cupim. Kevin short ribs buffalo cupim, picanha meatloaf boudin pork loin ground round pork chop beef chislic hamburger. T-bone venison rump chislic ham hock shank turkey tail pork chop pastrami ham leberkas capicola. Rump boudin ball tip, chuck fatback hamburger filet mignon. Leberkas filet mignon sausage tri-tip cow. Pork loin turkey prosciutto, fatback jerky venison meatball. Chuck beef ribs chicken hamburger spare ribs kevin shoulder swine sirloin cow fatback shank. Alcatra filet mignon hamburger, leberkas swine pig shank tenderloin t-bone chicken cupim spare ribs. Leberkas chuck kielbasa chicken porchetta landjaeger pig strip steak capicola. Boudin bresaola biltong, hamburger chicken leberkas alcatra frankfurter meatloaf corned beef shoulder beef ribs ground round venison. Biltong spare ribs burgdoggen bacon picanha pork loin chuck short ribs brisket tenderloin short loin. Chuck porchetta cow flank shoulder alcatra buffalo pork belly ground round prosciutto beef pork chop filet mignon. Buffalo ribeye strip steak fatback swine. Capicola ham turducken tri-tip buffalo. Pork loin turducken chuck pig prosciutto. Pork kielbasa chislic fatback short loin salami tail shank. Turkey spare ribs bresaola ball tip, burgdoggen boudin pig shank picanha. Alcatra chicken porchetta pork chop swine. Chicken cow salami shoulder, pork pork loin venison. Landjaeger chicken short loin shoulder tri-tip. Buffalo ham cow, chislic meatball rump short ribs tri-tip meatloaf drumstick t-bone porchetta bresaola strip steak jerky. Short loin t-bone tenderloin bresaola jowl chicken venison hamburger brisket meatball swine boudin biltong short ribs. Ground round cow prosciutto, chislic chuck picanha pancetta turkey hamburger sirloin. Ground round leberkas frankfurter pig beef bacon beef ribs andouille. Tenderloin t-bone ribeye, turkey flank sausage pastrami corned beef. Chislic shoulder flank shankle fatback bacon meatloaf sausage shank strip steak pork bell";

const samuelWords =
  "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.";

// const countWords = (str) => {
// return str
//   .toLowerCase()
//   .replace(/[^a-z0-0' ]/g, "")
//   .split(" ")
//   .reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});

// console.log(countWords(zombieWords));

// let age = 16;
// let name = age > 10 ? "Pedro" : "George";
// console.log(name);

// const person = {
//   name: "Kevin",
//   age: 46,
//   occupation: "Truck Driver",
// };

// //destructuring
// const { name, age, occupation, weight = 160 } = person;
// console.log(name, age, occupation, weight);

// const nums = [1, 2, 3];
// const [one, two, three, four = 4] = nums;
// console.log(one, two, three, four);

// //spread operator
// const person2 = { ...person, name: "Beetlejuice" };
// console.log(person2);

// const nums2 = [...nums, (five = 5)];
// console.log(nums2[3]);

// console.log(
//   nums2.map((num) => {
//     return num + 1;
//   })
// );

// console.log(nums2);

// let numFilter = nums2.filter((num) => {
//   return num < 3;
// });

// console.log(numFilter);

// const twoSum = (arr, target) => {
//   let map = {}

//   for(let i = 0; i < arr.length; i++){
//     map[arr[i]] = i
//   }

//   for(const key in map){
//     const partner = target - key

//     if(partner in map && map[key] !== map[partner]){
//       return [map[key], map[partner]]
//     }
//   }

//   return "not found"

// }

// console.log(twoSum([1, 2, 5, 15], 20)); //[2,3]
// console.log(twoSum([3, 4, 23, 5, 60], 10)); //"not found"
// console.log(twoSum([3, 5, 7, 12, 45], 48)); //[0, 4]

const isValid = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      arr.push(str[i]);
    } else if (
      (str[i] === ")" && arr[arr.length - 1] !== "(") ||
      (str[i] === "]" && arr[arr.length - 1] !== "[") ||
      (str[i] === "}" && arr[arr.length - 1] !== "{")
    ) {
      return false;
    } else {
      arr.pop();
    }
  }

  console.log(arr);

  return arr.length === 0;
};

// console.log(isValid("()") );           // true
// console.log(isValid("()[]{}") );       // true
// console.log(isValid("(]")  );          // false
// console.log(isValid("([)]")  );        // false
// console.log(isValid("{[]}")); // true
// console.log(isValid("{[()]}[]")); // true

const firstNonRepeatingChar = (str) => {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    map[str[i]] ? map[str[i]]++ : (map[str[i]] = 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return str[i];
    }
  }

  return "none";
};

// console.log(firstNonRepeatingChar("aabbccdeeffg")); // "d"
// console.log(firstNonRepeatingChar("aabbcc")); // "none"
// console.log(firstNonRepeatingChar("leetcode")); // "l"
// console.log(firstNonRepeatingChar("loveleetcode")); // "v"

const findMissingNumber = (arr) => {
  let sortedArr = arr.sort();
  console.log(sortedArr);
  let currentNum = null;

  for (let i = 0; i < sortedArr.length; i++) {
    currentNum = sortedArr[i];
    console.log(currentNum);
    if (currentNum - 1 !== sortedArr[i - 1] && i !== 0) {
      return currentNum - 1;
    }
  }

  return sortedArr[sortedArr.length - 1] + 1;
};

// console.log(findMissingNumber([3, 0, 1]));      // returns 2
// console.log(findMissingNumber([0, 1]));         // returns 2
// console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // returns 8

const removeDuplicates = (arr) => {
  let finalArr = [];
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === null) {
      finalArr.push(arr[i]);
      map[arr[i]] = 1;
    }
  }

  return finalArr;
};

// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // ➞ [1, 2, 3, 4, 5];

const chunkArray = (arr, chunk) => {
  let finalArr = [];

  for (let i = 0; i < arr.length; i += chunk) {
    finalArr.push(arr.slice(i, i + chunk));
  }

  return finalArr;
};

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [[1, 2, 3], [4, 5, 6], [7]]
