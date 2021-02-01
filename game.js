class game
{
    constructor()
    {
        console.log("game constructor called");
    }

    getState()
    {
        db.ref("gameState").on("value",function(data){
            gameState=data.val();
        },function(){});
    }

    

 async start()
    {
        if(gameState==0)
        {
            player=new Player();
            playerCount=await db.ref("playerCount").once("value");

            if(playerCount.exists())
            {
                playerCount=playerCount.val();
            }

            form=new Form();
            form.display();
        }
    }

    changeState(s)
    {
        db.ref("/").update({"gameState":s});
    }

    play()
    {
        form.hide();
        var a=100;
        Player.getPlayerInfo();
        if(playerInfo!=undefined){
        for(var i in playerInfo)
        {
            if(i=="Player"+player.index)
            {
                fill("red");
            } else 
            {
                fill("black");
            }

            textSize(20);
            text(playerInfo[i].Name,a,200);
            text(playerInfo[i].Score,a,240);
            a+=50;

        }
    }
    }
}
