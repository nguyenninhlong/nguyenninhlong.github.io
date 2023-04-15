
    var html = '';
    var le = '';
    var chan = '';

function print_number()
{
    var tu = document.getElementById("tu").value;
    var number = document.getElementById("den").value;
    number = parseInt(number);
    for (var i = tu; i <= number; i++){
        html += i +',';
    }
    document.getElementById("sesult").innerHTML ="day so la: " + '<br/>' + html;
    for (var i = tu; i <= number; i++)
    {
        if (i % 2 == 0)
        {
            chan += i + ',';
            document.getElementById("chan").innerHTML ="so chan:" + '<br/>' + chan ;
        }
    }
    for (var i = tu; i <= number; i++)
    {
        if (i % 2 == 1)
        {
            le += i + ',';
            document.getElementById("le").innerHTML = "so le: " + '<br/>' + le;
        }
    }
}


