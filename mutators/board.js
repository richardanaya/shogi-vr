function boardInitialState(){
  return {
    isPlaying: false,
    selected_piece: null,
    pieces: [{x:0,y:0},{x:8,y:0},{x:0,y:8},{x:8,y:8},{x:4,y:4}]
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
    case "start_playing":
      board.isPlaying = true;
      return;
    case "space_selected":
      var piece = findSelected(board.pieces);
      if(piece !== undefined){
          piece.x = data.x;
          piece.y = data.y;
      }
      return ;
    case "piece_selected":
      var piece = findSelected(board.pieces);
      if(piece !== undefined){
          piece.selected = false;
      }
      piece = findPieceAtXY(board.pieces,data.x,data.y);
      piece.selected = true;
      return
  }
}
