function increase()
{
    let value2 = document.getElementById('value').innerHTML;
    let num=parseInt(value2);
    num++;
    value.innerHTML=num;

}

function decrease()
{
    let value2 = document.getElementById('value').innerHTML;
    let num=parseInt(value2);
    num--;
    value.innerHTML=num;
}