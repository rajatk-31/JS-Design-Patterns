//Creation pattern

function Process(state){
    this.state=this.state
}

var singleton = (function(){
    function ProcessManager(){
        this.numProcess=0;
    }

    let pManager;

    function createProcess(){
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager: function(){
            if(pManager){
                return pManager
            }else{
                pManager=createProcess();
                return pManager
            }
        }
    }
})();


const processManager = singleton.getProcessManager()
const processManager2 = singleton.getProcessManager()

console.log(processManager == processManager2) //true