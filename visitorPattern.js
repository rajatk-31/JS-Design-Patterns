function Employee(name, salary) {
    this.name = name;
    this.salary = salary
}

Employee.prototype = {
    getSalary: function (){
        return this.salary;
    },
    setSalary: function(sal){
        this.salary = sal
    },
    accept: function(visitorFunction){
        visitorFunction(this)
    }
}


const emp1 = new Employee("Dev", 10000)
console.log(emp1.getSalary())


function ExtraSalary(emp){
    emp.setSalary(emp.getSalary() *2)
}


emp1.accept(ExtraSalary)
console.log(emp1.getSalary())