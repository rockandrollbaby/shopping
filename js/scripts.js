
$(document).ready(function() {
  $("#item").submit(function(event) {
    console.log("reached");
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();

  $(".name").append(nameInput);

  $(".address").append(addressInput);

  $("#shopping").show();

  event.preventDefault();

  });

});
