var animalPopulation = 0;
var allAnimals = [];
var list = "";
var foodResponse = "";
var sleepResponse = "";
var id = allAnimals.length;
var deadAnimals = [];
$(document).ready(function(){
  var tigger = allAnimals.push(new Tiger("Tigger"));
  var pooh = allAnimals.push(new Bear("Pooh"));
  var rarity = allAnimals.push(new Unicorn("Rarity"));
  var gemma = allAnimals.push(new Giraffe("Gemma"));
  var stinger = allAnimals.push(new Bee("Stinger"));
  listAnimals();
  id = allAnimals.length;
  console.log(id);
});

function createAnimal(){
  var name = $("#name").val();
  console.log(name);
  id++;
  console.log(id);
  var animalTypeNum = parseInt($("#animals").val()); 
  console.log(animalTypeNum);
  //Number converts value to an integer or NaN
  switch(animalTypeNum){
    case 1:
      animals = new Tiger(name);
      break;
    case 2:
      animals = new Bear(name);
      break;
    case 3:
      animals = new Unicorn(name);
      break;
    case 4:
      animals = new Giraffe(name);
      break;
    case 5:
      animals = new Bee(name);
      break;
  }

  animals.id = id;
  allAnimals.push(animals);
  console.log(allAnimals);
  console.log(animals);
  listAnimals();
  console.log("cheese");
  
  $("#feed").append(allAnimals[i].name + ", a " + allAnimals[i].constructor.name + " who eats " + allAnimals[i].favoriteFood + " was created!" + "<br>")
}

function deleteAnimal(){
  var deleteAnimalSelect = $("#delete").val();
  console.log(deleteAnimalSelect);
  for(var i = 0; i < allAnimals.length; i++){
    if(allAnimals[i].id == deleteAnimalSelect){
      $("#deadAnimals").append(allAnimals[deleteAnimalSelect-1].name + "<br>");
      deadAnimals.push(allAnimals[deleteAnimalSelect-1].name);
      $("#feed").append(allAnimals[deleteAnimalSelect-1].name + " was deleted" + "<br>");
      allAnimals.splice(i, 1);
      console.log(deadAnimals);
    }
  }
  for(var i = 0; i < allAnimals.length; i++){
    allAnimals[i].id = i+1;
  }
  listAnimals();
}

function listAnimals(){
  $("#allAnimals").empty();
  for(var i = 0; i < allAnimals.length; i++){
    $("#allAnimals").append(allAnimals[i].name + ", a " + allAnimals[i].constructor.name + " who eats " + allAnimals[i].favoriteFood + " || id: " + allAnimals[i].id + "<br>");
  }
  console.log("bread");
}

function renameAnimal(){
  var oldNameId = $("#oldName").val();
  var newName = $("#newName").val();
  for(var i = 0; i < allAnimals.length; i++){
    if(allAnimals[i].id == oldNameId){
      allAnimals[i].name = newName;
      listAnimals();
    }
  }
  
}

function feedAnimals(){
  $("#feed").empty();
  var foodNum = Number($("#food").val());
  console.log(foodNum);
    switch(foodNum) {
      case 1:
        food = "meat";
        break;
      case 2:
        food = "fish";
        break;
      case 3:
        food = "marshmallows";
        break;
      case 4:
        food = "leaves";
        break;
      case 5:
        food = "pollen";
        break;
      case 6:
        food = "soup";
        break;
      case 7:
        food = "salad";
        break;
  }
  for (var i = 0; i < allAnimals.length; i++){
    allAnimals[i].eat(food);
    $("#feed").append(foodResponse + "<br>" + sleepResponse + "<br>");
  }
}

class Animal {
    
  constructor(name,favoriteFood,id) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    this.id = id;
    animalPopulation++;
  }

  sleep() {
    console.log(this.name + " sleeps for 8 hours");
    $("#feed").append(this.name + " sleeps for 8 hours");
  }

  eat(food) {
    console.log(this.name + " eats " + food);
    if(food == this.favoriteFood){
      console.log("YUM!!! " + this.name + " wants more " + food);
      $("#feed").append("YUM!!! " + this.name + " wants more " + food);
    }else{
      $("#feed").append(this.name + " eats " + food + "<br>");
      this.sleep();
    }
  }

  static getPopulation() {
    return animalPopulation;
  }
}

class Tiger extends Animal {

  constructor(name) {
    super(name, "meat", 1);
  }
}

class Bear extends Animal {
  constructor(name) {
    super(name, "fish", 2);
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months");
    $("#feed").append(this.name + " hibernates for 4 months");
  }
}

class Unicorn extends Animal {
  constructor(name) {
    super(name, "marshmallows", 3);
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud");
    $("#feed").append(this.name + " sleeps in a cloud");
  }
}

class Giraffe extends Animal {
  constructor(name) {
    super(name, "leaves", 4);
  }
  eat(food) {
    if(food == "leaves"){
      console.log("YUM!!! " + this.name + " wants more leaves");
      $("#feed").append("YUM!!! " + this.name + " wants more leaves" + "<br>");
      this.sleep();
    }else{
      console.log("YUCK!!! " + this.name + " will not eat " + food);
      $("#feed").append("YUCK!!! " + this.name + " will not eat " + food);
    }
  }
}

class Bee extends Animal {
  constructor(name) {
    super(name, "pollen", 5);
  }
  sleep() {
    console.log(this.name + " never sleeps");
  }

  eat(food) {
    if(food == "pollen"){
      console.log("YUM!!! " + this.name + " wants more pollen");
      this.sleep();
      $("#feed").append("YUM!!! " + this.name + " wants more pollen" + "<br>" + sleepResponse);
    }else{
      console.log("YUCK!!! " + this.name + " will not eat " + food);
      $("#feed").append("YUCK!!! " + this.name + " will not eat " + food);
    }
  }
}






