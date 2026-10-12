function callfn(fn){
    fn();
}

function hello(){
    console.log("hello");
}

function world(){
    console.log("world");
}

callfn(hello);
callfn(world);