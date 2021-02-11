$(document).ready(function(){
  $("#togglenight").change(function() {
      if(this.checked) {
          $(".page").addClass("night");
          $("i").css("color", "white");
      }else{
          $(".page").removeClass("night");
          $("i").css("color", "black");
      }
  });
});
