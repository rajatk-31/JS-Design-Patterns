function Developer(name){
    this.name = name,
    this.type = "Developer"
}

function Testor(name){
    this.name = name,
    this.type = "Testor"
}

function EmployeeFactory(){
    this.create = (name, type)=>{
        switch(type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Testor(name);
                break;
        }
    }
}

function say(){
    console.log(`Hi I am ${this.name}, and I am a ${this.type}. `)
}

const empFactory = new EmployeeFactory()
const employees= [];

employees.push(empFactory.create("Pat",1))


employees.push(empFactory.create("Tim",2))
employees.push(empFactory.create("Jimmy",1))

employees.forEach(e=>{
    say.call(e)
})
