/*
    var is scope the nearest function, in this case printCounter()
    so even when we defined i inside a function's block it is accesible
    in others blocks inside the nearest function.
*/
function printCounter() {
    for ( var i = 0; i < 5; i++ ) {
        console.log(i);
    }

    console.log('Outside: ' + i);

}

printCounter();

/*
    in the case we use let, it is scope to the nearest block not to the
    nearest function. so we cannot use que variable in other function's block
*/
function printCounter02() {
    for ( let i = 0; i < 5; i++ ) {
        console.log(i);
    }

    console.log('Outside: ' + i); // it give us an error. Cannot find ''i''

}

printCounter02();