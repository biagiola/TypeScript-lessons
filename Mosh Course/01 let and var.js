/*
    var is scope the nearest function, in this case doSomething()
    so even when we defined i inside a function's block it is accesible
    in others blocks inside the nearest function.
*/
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
