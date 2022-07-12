class Player {
  constructor() {
    this.name = null;
    this.positionx = 0;
    this.positiony = 0;
    this.index = 0;
  }
  addPlayers(){
    var node="players/player"+this.index
if(this.index===1){
this.positionx=width/2-100
}

else{
  this.positionx=width/2-100
}

database.ref(node).set({
  name:this.name,
  positionx:this.positionx,
  positiony:this.positiony,
  index:this.index
})
  }
  getcount() {
    var countref = database.ref("playercount");
    countref.on("value", (data) => {
      myplayercount = data.val();
    });
  }
  updatecount(count) {
    database.ref("/").update({
      playercount: count,
    });
  }
}
