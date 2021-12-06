/*
 Use object initializer to create an object, 
 it should have at least 2-3 fields and 2-3 methods. 
 Write a function accepting the object as a parameter and 
 printing all its properties and their types
 */

var Tea = {
    name: "Duck Sh*t",
    type: "Oolong",
    cultivar: "Ya Shi Xiang",
    age: 2,
    //constructor
    Tea(_name, _type, _cultivar, _age){
        name = _name;
        type = _type;
        cultivar = _cultivar;
        age = _age;
    },
    
    getName: function () {
        return name;
    },
    getType: function () {
        return type;
    },
    getCultivar: function () {
        return cultivar;
    }
}

function getTypes (Tea) {
    console.log("Property: "+ Tea.name + " is of type: " + typeof (Tea.name));
    console.log("Property: "+ Tea.type + " is of type: " + typeof (Tea.type));
    console.log("Property: "+ Tea.cultivar + " is of type: " + typeof (Tea.cultivar));
    console.log("Property: "+ Tea.age + " is of type: " + typeof (Tea.age));
    console.log("Property: "+ Tea.getName + " is of type: " + typeof (Tea.getName));
}
getTypes(Tea);