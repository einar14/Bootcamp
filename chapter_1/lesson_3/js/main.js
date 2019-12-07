// // // // // var person = {
// // // // //     name: "John",
// // // // //     age: 25,
// // // // //     hairColor: "black"
// // // // // };

// // // // // var person2 = {
// // // // //     name: "",
// // // // //     age: 25,
// // // // //     profession: "",
// // // // // }

// // // // // person.profession = "developer";
// // // // // person.name = "Sena";

// // // // // console.log(person);


// // // // var car = {
// // // //     brand: 'BMW',
// // // //     model: 'm5',
// // // //     maxSpeed: 320,
// // // //     showInfo: function() {
// // // //         console.log('Марка: ' + this.brand,
// // // //         'Модель: ' + this.model,
// // // //         'Макс. скорость: ' + this.maxSpeed
// // // //         )
// // // //     }
// // // // }

// // // // var car2 = {
// // // //     brand: 'Mercedes',
// // // //     model: 'e',
// // // //     maxSpeed: 320,
// // // //     showInfo: function() {
// // // //         console.log('Марка: ' + this.brand,
// // // //         'Модель: ' + this.model,
// // // //         'Макс. скорость: ' + this.maxSpeed
// // // //         )
// // // //     }
// // // // }

// // // // car2.showInfo();


// // // var people = ['John', 'Sina', 'Jack', 'Paul'];

// // // // console.log(people[people.length -1]);

// // // // for(var i = 0; i < people.length; i++) {
// // // //     var hello = 'Hello ' + people[i];
// // // //     console.log(hello);
// // // // }


// // // for(var i = 0; i < people.length; i++) {
// // //     if(people[i] === 'Jack') {
// // //         console.log('Hello' + people[i])
// // //     }else {
// // //         console.log('Ty kto takoy');
// // //     }
// // // }

// // // var car = [
// // //     {
// // //         brand: 'BMW',
// // //         model: 'X5',
// // //         maxSpeed: 260
// // //     },
// // //     {
// // //         brand: 'Mercedes',
// // //         model: 'E',
// // //         maxSpeed: 320
// // //     },
// // //     {
// // //         brand: 'Lada',
// // //         model: 'Priora',
// // //         maxSpeed: 180
// // //     },
// // //     {
// // //         brand: 'Mercedes',
// // //         model: 'G',
// // //         maxSpeed: 260
// // //     }
// // // ]

// // // for(var i = 0; i < car.length; i++) {
// // //     if(car[i].brand === 'Mercedes') {
// // //         console.log(car[i])
// // //     }
// // // }

// // // for(var i = 0; i < car.length; i++) {
// // //     if(car[i].maxSpeed > 200) {
// // //         console.log(car[i])
// // //     }
// // // }

// // var i = 0;

// // while(i < 5) {
// //     i++
// //     console.log(i)
// // }

// var i = 0;

// // while(true) {
// //     console.log(i++)
// // }

// do {
//     console.log(i++)
// } while(false)

var obj = {
    name: 'Faisal',
    'last-name': 'Iraqi'
}

console.log(obj['last-name'])