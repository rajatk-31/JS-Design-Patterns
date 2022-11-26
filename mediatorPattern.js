function Member (name) {
    this.name = name;
    this.chatroom = null
}

Member.prototype = {
    send : function (message, toMember){
        this.chatroom.send(message, this, toMember)
    },
    recieve: function(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}:--   ${message}`)
    }
}

function Chatroom () {
    this.members = {}
}

Chatroom.prototype = {
    addMember: function(member){
        this.members[member.name] = member;
        member.chatroom = this
    },
    send: function(message, from, to){
        to.recieve(message, from)
    }
}


const chat= new Chatroom()
const ajay = new Member("ajay")
const tim = new Member("tim")
const tanay = new Member("tanay")

chat.addMember(ajay)
chat.addMember(tim)
chat.addMember(tanay)

// console.log(chat)
ajay.send("Hi tim", tim)
