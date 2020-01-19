function countHello(limit) {
    let i = 0;
    let myInterval = setInterval(function(){
        console.log("hello");
        i++;
        if (i === limit) {
            clearInterval(myInterval);
        }
    }, 1000)
}

countHello(5);