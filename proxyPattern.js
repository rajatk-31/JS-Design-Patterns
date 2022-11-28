//External API simulate

function cryptoAPI() {
    this.getValue = function (coin) {
        console.log("API Call")
        switch (coin) {
            case "BTC":
                return 1200;
            case "LTC":
                return 300;
            case "ETH":
                return 800;

        }
    }
}



function proxyAPI(coin) {

    this.api = new cryptoAPI();
    this.cache = {};
    this.getValue = function(coin){

        if(!this.cache[coin]){
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

/////////


const proxy = new proxyAPI()

console.log(proxy.getValue("ETH"))

console.log(proxy.getValue("BTC"))

console.log(proxy.getValue("ETH"))