b_tag4 = document.getElementById('count');
var x = 60;

function count()
{
    b_tag4.innerHTML = x--;
    if (x > 0) 
    {
        setTimeout(count, 1000);
    }
}
count();
