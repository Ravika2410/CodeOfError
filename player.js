class Player
{
    constructor()
    {
        this.p=null;
        this.score=0;
        this.name=null;
    }

    updateCount(C)
    {
        db.ref("/").update({"playerCount":C});
    }

    updateName(A)
    {
        db.ref("players/Player"+this.index).update({"Name":A});
    }

    updateScore(A)
    {
        db.ref("players/Player"+this.index).update({"Score":A});
    }

    static getPlayerInfo()
    {

db.ref("players").on("value",(data)=>{
    playerInfo=data.val();
});
    }
    
    
}