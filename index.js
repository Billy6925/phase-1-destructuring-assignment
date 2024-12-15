const farmAnimals = 'cow horse sheep pig chicken';
const animalSounds = "cow:moo,horse:neigh,sheep:baa,pig:oink,chicken:cluck";

// Convert the string into an array of sounds
const animalSoundsArray = animalSounds.split(',');

// Destructure the array to get each sound string
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = animalSoundsArray;

// Extract the sounds from each string
const moo = cowSound.split(':')[0];
const neigh = horseSound.split(':')[0];
const baa = sheepSound.split(':')[0];
const oink = pigSound.split(':')[0];
const cluck = chickenSound.split(':')[0];


const animalNames = "cow:bessie, sheep:dolly, pig:babe, chicken:little";

// Convert the string into an array of name pairs
const animalNamesArray = animalNames.split(', ');

// Destructure the array to get each name pair string
const [cowName, sheepName, pigName, chickenName] = animalNamesArray;

// Extract the animal names from each string
var bessie = cowName.split(':')[0];
var dolly = sheepName.split(':')[0];
var babe = pigName.split(':')[0];
var little = chickenName.split(':')[0];


const animalColors = "cow:blackAndWhite, sheep:black, pig:pink";
const animalColorsArray = animalColors.split(',');
const [cowColor, sheepColor, pigColor] = animalColorsArray;
var blackAndWhite = cowColor.split(':')[0].trim();
var black = sheepColor.split(':')[0].trim();
var pink = pigColor.split(':')[0].trim();


const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;


const rainbowColorInitials = ['red','orange','yellow','green','blue','violet'];
const [r,o,y,g,b,v] = rainbowColorInitials;

const indigoColor = ['indigo'];
const [indg] = indigoColor;


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


const assignMuppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job:"Cast member of The Muppet Show",
  partner:"Kermit"
}
const {muppetName, color, song, job,partner} = assignMuppet;

const Kermit = {
  song2:"Moving Right Along",
  song4:"I Hope That Something Better Comes Along",
  nestedJob:"Host of The Muppet Show",
  nestedPartner:"Miss Piggy"
}
const {song2, song4, nestedJob, nestedPartner} = Kermit;

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner