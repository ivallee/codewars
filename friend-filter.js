// Codewars challange: Filter array so it only returns names with 4 characters

function friend(friends){
  var output = friends.filter(function(pals){
    return pals.length == 4;
  });
  return output;
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
//I passed!!