var state = {
  board: boardInitialState()
};

var store = Voir.createStore(state, [boardMutator]);
