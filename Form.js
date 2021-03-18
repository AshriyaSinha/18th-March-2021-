class Form {
    constructor () {}
    display (){
        var ti = createElement ("h1")
        ti.position (250,100)
        ti.html ("YO GAME YO")
        var buton = createButton ("Lets Go")
        buton.position (250,300)

        var putin = createInput ("Enter Name")
        putin.position (250,250)

        var greatin = createElement ("h2")
        buton.mousePressed (function(){
            putin.hide ()
            buton.hide ()
            var Name = putin.value ()
            playerCount ++
            player.update (Name)
            player.updateCount (playerCount)
            greatin.position (250,200)
            greatin.html ("yo sup"+ Name)
        })
    }
}