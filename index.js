function fun(){return 'games'}
function receivesAFunction(callback){
     return callback(fun)
}
function returnsANamedFunction(){
  return function x(){}
}

function returnsAnAnonymousFunction(){
  return function (){}
}