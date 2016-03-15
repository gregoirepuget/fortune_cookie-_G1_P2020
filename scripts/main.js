$(document).ready(function(){
  console.log(citations);

  $("#numberField").attr("max",citations.length);

  var options='';
  for(var i=0; i<citations.length;i++ )
  {
    options += '<option value="'+i+'">'+citations[i]["auteur"]+'</option>';
  }
  $("#authorField").html(options);



  $("#fortune_button").on("click",function(e){

    e.preventDefault();

    var nombre= getTirage(citations.length);
    addCitation(nombre);

  });

  $("#numberField, #authorField").on("change", function(){

    var nombre=$(this).val();
    addCitation(nombre);

  });

  $("#cookieForm").on("submit", function(e){e.preventDefault();});


  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }

  function addCitation(numeroCitation)
  {
    $("#fortune_cookie").empty();
    $("#fortune_cookie").append("<p>"+citations[numeroCitation]["citation"]+"</p>");
    $("#fortune_cookie").append("<span>"+citations[numeroCitation]["auteur"]+"</span>");

  }
  
  $('#nom p').on("blur", function(){
  
      localStorage.setItem("nom", $(this).html() );
  
  });
  
  console.log(localStorage.getItem("nom"));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});