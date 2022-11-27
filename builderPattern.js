function Person(name, weight, height, gender) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;

}

function PersonBuilder(name,gender){
    this.name = name,
    this.gender = gender;
    this.setWeight = function(weight){
        this.weight = weight;
        return this;
    }
    this.setHeight = function(height){
        this.height = height;
        return this;
    }
    this.build = function(){
        return new Person(this.name, this.weight, this.height, this.gender)
    }
}


//const testPerson = new Person("Test", 50,100,"M")
const testPerson = new PersonBuilder("Test", "M").setHeight(100).setWeight(50).build();
console.log(testPerson)