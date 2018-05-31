
$(document).ready(function() {
  $("#item").submit(function(event) {
    //console.log("reached");
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var productInput = $("#product").val();

  $(".name").append(nameInput);

  $(".address").append(addressInput);

  $(".purchase").append(productInput);

  $("#shopping").show();

  event.preventDefault();

  });

});
