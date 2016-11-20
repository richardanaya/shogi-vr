var ROUTE_ROOT = "/";
var ROUTE_GAME = "/game";
var router = (function(){
  function goToPage(context){
    store.dispatch('route_changed',context.path)
  }
  page(ROUTE_ROOT, goToPage)
  page(ROUTE_GAME, goToPage)
  page({hashbang:true})
  return {
    goTo: function(path){
      window.setTimeout(function(){
        page(path);
      },1)
    }
  }
}())
