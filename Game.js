class Game{
    constructor () {}
    readGame () {
        var refering = database.ref("gameState")
        refering.on("value",function(data){
            gameState = data.val()
        })
    }
    update  (bleh) {
        database.ref ("/").update ({
            gameState:bleh
        })
    }
    start () {
        if (gameState == 0)  {
            player  = new Player ()
            player.getCount ()
            form = new Form ()
            form.display ()
        }
    }
}