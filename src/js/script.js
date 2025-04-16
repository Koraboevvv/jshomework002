function darkMode(){
    document.documentElement.classList.toggle("dark")
}







{
//M-1//
    let a = 4.7;
    let son = Math.round(a);
    console.log(son);
}
{
    //M-2//
    a = -10;
    let absoluteValue = Math.abs(a);
    console.log(absoluteValue);    
}
{
    //M-3//
    let g = [];
    for (let i = 0; i < 5; i++) {
        g.push(Math.floor(Math.random() * 101));
    }
    let average = g.reduce((sum, g) => sum + g, 0) / g.length;
    console.log(g);
    console.log(Math.round(average));
}
{
    //M-4//
    let rate = (Math.random() * 20 + 1).toFixed(4); // случайный курс от 1 до 21
    let result = (100 * rate).toFixed(2);
    console.log({
        rate: parseFloat(rate),
        result: parseFloat(result),
    });
}
{
    //M-5//
    let year = Math.floor(Math.random() * (2025 - 2000 + 1)) + 2000;
    let month = Math.floor(Math.random() * 12) + 1;
    let day = Math.floor(Math.random() * 28) + 1;
    console.log( year, month, day );
}
