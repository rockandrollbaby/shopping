
$(document).ready(function() {
  $("#contact").submit(function(event) {
    //console.log("reached");
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("#email").val();
    var phoneInput = $("#phone").val();

  $(".name").append(nameInput);

  $(".address").append(addressInput);

  $(".email").append(emailInput);

  $(".phone").append(phoneInput);

  //$("#shopping").show();

  event.preventDefault();

  });

});
