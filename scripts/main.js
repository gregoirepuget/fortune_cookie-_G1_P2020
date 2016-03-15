$(document).ready(function(){
  console.log(citations);
  
 $("#fortune_button").on("click",function(e){
 
   e.preventDefault();
   var nombre= getTirage(citations.length);
   
   $("#fortune_cookie").empty();
   $("#fortune_cookie").append("<p>"+citations[nombre]["citation"]+"</p>");
   $("#fortune_cookie").append("<span>"+citations[nombre]["auteur"]+"</span>");
 
 });
  
  
  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }
});