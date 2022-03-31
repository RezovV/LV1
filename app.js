function Dodaj()
{
    var predmet = $("#inpt1").val();
    var godina = $("#inpt2").val();
    var ects = $("#inpt3").val();

    var data = "<tr><td>"+ predmet + "</td><td>"+ godina + '</td><td>'+ ects +"</td><td><button id="+"btn1"+">BRISI</button></td><td><input type="+"checkbox"+" id="+"btn2"+"></input></td></tr>";
    $("#myTable").append(data);
}

$("#myTable").on("click","#btn1", function(){
    $(this).closest("tr").remove();
});

$("#myTable").on("change","#btn2", function(){
    $(this).closest("tr").css("background-color","yellow");
});
    