//creates the Grandparent class
class Grandparent {
  //getter and setter for name
  set name(val){
    return this._name = val;
  }
  get name(){
    return this._name;
  }
  //getters and setters for the three variables required
  set eyeColor(val) {
    return this._eyeColor = val;
  }
  get eyeColor() {
    return this._eyeColor;
  }

  set hairColor(val) {
    return this._hairColor = val;
  }
  get hairColor() {
    return this._hairColor;
  }

  set vertical(val) {
    return this._vertical = val;
  }
  get vertical(){
    return this._vertical;
  }

  //creates accessor methods for Parent and Child Classes
  getName() {
    return this._name;
  }
  getEyeColor() {
    return this._eyeColor;
  }
  getHairColor() {
    return this._hairColor;
  }
  getVertical(){
    return this._vertical;
  }

  //method to have the console log the person's name and how high they can jump
  sayVertical(){
    console.log(this._name + ' can jump ' + this._vertical + ' inches.')
  }

}
//creates the parent subclass
class Parent extends Grandparent {

} //creates the child subclass
class Child extends Parent {

}


//creates a new array to add all members of the family to
let family = [];


//creates a Grandparent - Marjorie
let Marjorie = new Grandparent();
Marjorie.name = 'Marjorie';
Marjorie.eyeColor = 'blue';
Marjorie.hairColor = 'brown';
Marjorie.vertical = '22';
family[0] = Marjorie;

let Rebecca = new Parent();
Rebecca.name = 'Rebecca';
Rebecca.eyeColor = 'green';
Rebecca.hairColor = 'black';
Rebecca.vertical = '10';
family[1] = Rebecca;

let Trevor = new Child();
Trevor.name = 'Trevor';
Trevor.eyeColor = 'black';
Trevor.hairColor = 'blonde';
Trevor.vertical = '80';
family[2] = Trevor;



//loops through the array and says the info + vertical for each family member
for(let i = 0; i< family.length; i++){
  console.log('Name: ' + family[i].name);
  console.log('Eye Color: ' + family[i].eyeColor);
  console.log('Hair Color: ' + family[i].hairColor);
  family[i].sayVertical();
}
