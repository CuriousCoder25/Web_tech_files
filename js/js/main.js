function mult()
{
    let num = document.getElementById('number').value;

    for(var i = 1; i<=10; i++){
        document.write(num * i + "<br>");
    }
}