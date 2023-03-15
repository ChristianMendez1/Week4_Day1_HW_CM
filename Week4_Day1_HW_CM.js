class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
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
      this.hamsters = []
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
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

  const timmy = new Person('Timmy')
  for(let i =0; i < 5; i++){
    timmy.ageUp()
  }
  for(let i =0; i < 5; i++){
    timmy.eat()
  }
  for(let i =0; i < 5; i++){
    timmy.exercise()
  }
  for(let i =0; i < 9; i++){
    timmy.ageUp()
  }

  const gus = new Hamster('Gus')
  gus.owner = 'Timmy'
  timmy.buyHamster(gus)
  
  for(let i =0; i < 15; i++){
    timmy.ageUp()
  }
  timmy.eat()
  timmy.eat()
  timmy.exercise()
  timmy.exercise()

  console.log(timmy)

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