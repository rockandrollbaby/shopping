$(document).ready(function() {
  $("#formOne").submit(function() {
  $(".name").append("Your receipt for hair care");
  $(".address").append("Your address");

  $("#shopping").show();

  event.preventDefault();

  });

});
