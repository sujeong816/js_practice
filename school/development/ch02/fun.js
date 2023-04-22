(function (msg){
    console.log(msg)
})("hello")

function factory(){
    return function (msg) {
        console.log(msg)
    }
}
let f = factory()
f("hello")
factory()("hello")