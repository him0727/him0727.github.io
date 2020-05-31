$(document).ready(function() {
  let hash = $(location).attr('hash');
  if (hash != "") {
    hash = hash.substr(1);
    let found = false;
    $("#left-menu ul li").each(function(index, element) {
      let id = $(element).text();
      id = id.substr(0, id.indexOf("-") - 1);
      if (id == hash) {
        go($("#left-menu ul li").eq(index));
        found = true;
      }
    });
    if (!found) {
      alert("Problem code not exists.");
    }
  } else {
    go($("#left-menu ul li").eq(0));
  }
  $("#left-menu ul li").on("click", function() {
    go($(this));
  });
});

function go(what) {
  $("#left-menu ul li").removeClass("selected");
  what.addClass("selected");
  let id = what.text();
  id = id.substr(0, id.indexOf("-") - 1);
  $("#right-content").hide();
  $("#right-content").html(($("#" + id).html()));
  $("#right-content").fadeIn(200);
  window.location.href = "#" + id;
}