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
   
   $("#fortune_cookie").empty();
   $("#fortune_cookie").append("<p>"+citations[nombre]["citation"]+"</p>");
   $("#fortune_cookie").append("<span>"+citations[nombre]["auteur"]+"</span>");
 
 });
  
$("#numberField, #authorField").on("change", function(){
  
    var nombre=$(this).val();
  
   $("#fortune_cookie").empty();
   $("#fortune_cookie").append("<p>"+citations[nombre]["citation"]+"</p>");
   $("#fortune_cookie").append("<span>"+citations[nombre]["auteur"]+"</span>");

});
  
$("#cookieForm").on("submit", function(e){e.preventDefault();});
  
  
  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }
});