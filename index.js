const dogNames = [
    "Annie the Afgan Hound",
  "Bertie the Boxer",
  "Betty the Borzoi",
  "Charlie the Chihuahua",
  "Chaz the Cocker Spaniel",
  "Donald the Dalmatian",
  "Dottie the Doberman",
  "Fern the Fox Terrier",
  "Frank the French Bulldog",
  "George the Great Dane",
  "Gertie the Greyhound",
  "Harry the Harrier",
  "Ian the Irish Wolfhound",
  "Juno the Jack Russell",
  "Keith the Kerry Blue",
  "Larry the Labrador",
  "Marge the Maltese",
  "Max the Mutt",
  "Nutty the Newfoundland",
  "Olive the Old English Sheepdog",
  "Peter the Pug",
  "Poppy the Pekingese",
  "Rosie the Rottweiler",
  "Ruby the Retriever",
  "Sam the Springer Spaniel",
  "Sukie the Saluki",
  "Vernon the Vizsla",
  "Whilma the West Highland Terrier",
  "William the Whippet",
  "Yolande the Yorkshire Terrier"
  ];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
const dogs = dogNames.map((n , index) => {
    return {name: n, id: index, exercise: getRandomInt(0, 5), intelligence: getRandomInt(0, 100), friendliness: getRandomInt(0, 100), drool: getRandomInt(0, 10)};
})
console.log(JSON.stringify(dogs));
