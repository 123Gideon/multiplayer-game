class Game {
  constructor() {}

getstate(){
  var stateref=database.ref("gamestate")
  stateref.on("value",(data)=>{
    mygamestate=data.val()
  })
}

UpdateState(state){
  database.ref("/").update({
    gamestate:state
  })
}

  start() {
    MyForm = new Form();
    MyForm.display();
    MyPlayer= new Player()
    MyPlayer.getcount()
  }

  play() {
      MyForm.hide()
    MyForm.tiltleImg.position(30, 50);
    MyForm.tiltleImg.class("changeImage");
  }

  end() {}
}
