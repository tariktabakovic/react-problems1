class Cat{
    constructor(joy=5, giveJoy=2){
        this.joy = joy;
        this.giveJoy = giveJoy
    }
    snuggle(otherCat){
        otherCat.recieveSnuggle(this.giveJoy)
    }
    recieveSnuggle(joyPoints){
        this.joy += joyPoints;
        console.log(`Cat has been hugged and now has ${this.joy} points of joy`)
    }
}
const aCat = new Cat();
const anotherCat = new Cat();
aCat.snuggle(anotherCat);
console.log(aCat);

class Student {
    constructor(skill=5, giveSkill=2){
        this.skill = skill;
        this.giveSkill = giveSkill
    }
    convo(otherStudent){
        otherStudent.recieveSkill(this.giveSkill)
    }
    recieveSkill(skillPoints){
        this.skill += skillPoints;
        console.log(`Student A had a convo with Student B and now has ${this.skill} amount of skill points`)
    }
}
const aStudent = new Student();
const otherStudent = new Student();
aStudent.convo(otherStudent);
console.log(aStudent);

class Car{
    constructor(health=5, attack=2){
        this.health = health;
        this.attack = attack
    }
    accident(otherCar){
        otherCar.recieveAccident(this.attack)
    }
    recieveAccident(accidentPoints){
        this.health -= accidentPoints;
        console.log(`There has been an accident and now the car has ${this.health} amount of life left`)
    }
}
const aCar= new Car();
const otherCar = new Car();
aCar.accident(otherCar);
console.log(aCar);

class Hero {
    // properties or attributes
    // 'variables that belong to each instance'
    constructor(health=18, power=5){
        this.health = health;
        this.power = power;
    }    
    // behaviors or methods
    // 'functions that belong to each instance'
    hug(otherHero){
        otherHero.recieveHealth(this.power)
        // otherHero.health += this.power;
        // console.log(`otherHero has ${otherHero.health} health`);
    }

    recieveHealth(healthPoints){
        this.health += healthPoints;
        console.log(`Hero now has ${this.health} health because of a hug`)
    }
}   
const aHero = new Hero();
const anotherHero = new Hero();
aHero.hug(anotherHero);
aHero.hug(anotherHero);
console.log(aHero);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
