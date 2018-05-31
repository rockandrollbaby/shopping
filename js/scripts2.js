
$(document).ready(function() {
  $(".addresssDropdown").click(function() {
    $(".form-group").toggle();
  });
  $("#contact").submit(function(event) {
    //console.log("reached");
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("#email").val();
    var phoneInput = $("#phone").val();

  $(".nameSaved").append(nameInput);

  $(".addressSaved").append(addressInput);

  $(".emailSaved").append(emailInput);

  $(".phoneSaved").append(phoneInput);

  //$("#shopping").show();

  event.preventDefault();

  });

});
