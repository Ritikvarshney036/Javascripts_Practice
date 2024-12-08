// function func(){
//     console.log(this)
// }
// func()

// using this inside the js  onjects

const obj = {
    name: 'Vishwa',
    age:99,
    alias: this.name + " " + "Mohan",
    greet: function(){
        console.log(this.name)
    },
    address: {
        city: "Bangalore",
        country: this.name + " "+ "India"
    }   
}

obj.greet()
console.log(obj.alias)
console.log(obj.address.country)