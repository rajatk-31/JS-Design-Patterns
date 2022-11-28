function Fedex(){
    this.calculate = package =>{
        return 4.5

    }
}

function UPS(){
    this.calculate = package =>{
        return 3.5
        
    }
}

function USPS(){
    this.calculate = package =>{
        return 4.3
        
    }
}

function Shipping () {
    this.company = ''
    this.setStrategy = function(company){
        this.company = company
    }

    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS();
const package = {from: "Delhi", to: "Jaipur", weight:4.5}


const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log(shipping.calculate(package))


