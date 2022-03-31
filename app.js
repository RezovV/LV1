function Dodaj()
{
    var predmet = $("#inpt1").val();
    var godina = $("#inpt2").val();
    var ects = $("#inpt3").val();

    var data = "<tr><td id="+"predmetid"+">"+ predmet + "</td><td id="+"godinaid"+">"+ godina + "</td><td id="+"ectsid"+">"+ ects +"</td><td><button id="+"btn1"+">BRISI</button></td><td><input type="+"checkbox"+" id="+"btn2"+"></input></td></tr>";
    $("#myTable").append(data);
}

$("#myTable").on("click","#btn1", function(){
    $(this).closest("tr").remove();
});

$("#myTable").on("change","#btn2", function(){
    if($(this).is(":checked"))
    {
        $(this).closest("tr").css("background-color","lightgreen");
    }
    else
    {
        $(this).closest("tr").css("background-color","pink");
    }

});

$('#inpt4').on('keyup', function() {
    var value = $(this).val();
    var bilokaj = new RegExp(value, "i");

    $('#myTable').find('tr').each(function() 
    {
        if(($(this).find('td#predmetid').text().search(bilokaj) >= 0))
        {
            $(this).show();
        }
        else if(($(this).find('td#godinaid').text().search(bilokaj) >= 0))
        {
            $(this).show();
        }
        else if(($(this).find('td#ectsid').text().search(bilokaj) >= 0))
        {
            $(this).show();
        }
        else
        {
            $(this).not('.thead').hide();
        }
    });
});
    
