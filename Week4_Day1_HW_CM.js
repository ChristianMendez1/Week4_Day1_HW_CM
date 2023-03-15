class Cat {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 200
    }
    meow(){
      console.log('meow')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

  class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.Cats = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyCat(Cat){
      this.Cats.push(Cat)
      this.mood+=10
      this.bankAccount-=Cat.getPrice()
    }
  }

  const chris = new Person('Chris')
  for(let i = 1; i <= 5; i++){
    chris.ageUp()
  }
  for(let i = 1; i <= 5; i++){
    chris.eat()
  }
  for(let i = 1; i <= 5; i++){
    chris.exercise()
  }
  for(let i = 1; i <= 9; i++){
    chris.ageUp()
  }

  const silverhand = new Cat('Silverhand')
  silverhand.owner = 'Chris'
  chris.buyCat(silverhand)
  
  for(let i = 1; i <= 15; i++){
    chris.ageUp()
  }
  chris.eat()
  chris.eat()
  chris.exercise()
  chris.exercise()

  console.log(chris)

  class Dinner {
    constructor(appetizer, entree, desert){
    this.appetizer = appetizer
    this.entree = entree
    this.desert = desert
    }
}

class Chef {
    constructor(name){
        this.name = name
        this.dinners = []
    }    
    makeDinner(Dinner){
        this.dinners.push(Dinner)
    }
}

const david = new Chef('David')
const chrisSpecial = new Dinner('shrimp and crab dip', 'bacon cheese burger', 'cheese cake')
const lisaSpecial = new Dinner('onion rings', 'alfredo pasta with broccoli', 'strawberry sundae')
const queSpecial = new Dinner('quesadilla', 'rice, beans, and chicken', 'flan')
david.makeDinner(chrisSpecial)
david.makeDinner(lisaSpecial)
david.makeDinner(queSpecial)
console.log(david)