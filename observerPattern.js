function Subject () {
    this.observers = [] //array of function
}

Subject.prototype = {
    subscribe: function(fn){
        this.observers.push(fn)
    },
    unsubscribe: function(fn){
        this.observers = this.observers.filter(e=> {
            if(e!=fn){
                return e;
            }
        })
    },
    fire: function(){
        this.observers.forEach(e=>{
            e.call()
        })
    }
}

const subject= new Subject()

function Ob1 (){
    console.log("OB1")
}

function Ob2 (){
    console.log("OB2")
}

subject.subscribe(Ob1)
subject.subscribe(Ob2)
subject.fire()
subject.unsubscribe(Ob2)
subject.fire()


