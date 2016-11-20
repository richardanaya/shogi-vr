function boardInitialState(){
  return {
    isPlaying: false,
    selected_piece: null,
    pieces: [{x:0,y:0,selected:false,player:0},{x:8,y:0,selected:false,player:0},{x:0,y:8,selected:false,player:1},{x:8,y:8,selected:false,player:1},{x:4,y:4,selected:false,player:1}]
  }
}

function boardMutator(state,action,dispatch){
  var board = state.board;
  var data = action.data;
  var findSelected = R.find(function(a){return (a.selected);});
  function findPieceAtXY(pieces,x,y){
    return R.find(function(a){return (a.x===x && a.y===y);})(pieces)
  }
  switch(action.type){
    case "route_changed":
      if(data == ROUTE_GAME){
        board.isPlaying = true;
      }
      return;
    case "start_playing":
      router.goTo(ROUTE_GAME);
      return;
    case "space_selected":
      //make sure they aren't moving to occupied space
      var piece = findPieceAtXY(board.pieces,data.x,data.y);
      if(piece === undefined){
        piece = findSelected(board.pieces);
        if(piece !== undefined){
            //move to new location
            piece.x = data.x;
            piece.y = data.y;
            //unselect
            piece.selected=false;
        }
      }
      return ;
    case "piece_selected":
      var piece = findSelected(board.pieces);
      //unselect existing piece
      if(piece !== undefined){
          piece.selected = false;
      }
      piece = findPieceAtXY(board.pieces,data.x,data.y);
      //mark piece selected
      piece.selected = true;
      return
  }
}
