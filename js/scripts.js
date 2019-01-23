$(document).ready(function(){
  $("form#input").submit(function(event){

    var input1 = parseInt($("input#countto").val());
    var input2 = parseInt($("input#countby").val());

    if (isNaN(input1) || isNaN(input2)){
      alert("Not a number!");
    } else if (input1 <= 0 || input2 <= 0){
      alert("Please input a positive number!");
    } else if (input1 < input2) {
      alert("count to has to be smaller than count by");
    }

    else{
    for (var index = input2; index <= input1; index+=input2){
      $("ul#output").append("<li>" + index + "</li>");
      }
    }


    event.preventDefault();
  });
});
