// if we dont specify the type it set as any
let message;
message = 'abc' // even if we asign it a string
/* 
so if we want to use strings methods (intellisense) we have
to tell typescript that the are using a string variable
*/
let endsWithC = (<string>message).endsWith('c'); // return true
let anotherWay = ( message as string).endsWith('c'); // return true

