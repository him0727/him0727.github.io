$(document).ready(function() {
  $("#nav-left").html("<font color=\"#8DF2F6\">&lt;</font><font color=\"#EEF63C\">/</font>Algohol<font color=\"#8DF2F6\">&gt;</font>" + 
    "<span style=\"font-size: x-small; color: #DCF4EE;\"> :: by HIM0727 .NET</span>");
  let path = window.location.pathname.split('/').pop();
  let menu = [];
  menu["index.html"] = "[ Home ]";
  menu["probs.html"] = "[ My problems ]";
  menu["sols.html"] = "[ Solutions on SPOJ ]";
  for (let key in menu) {
    if (path == key || path == "" && key == "index.html") {
      $("#nav-right").append("<span class=\"menu-this\">-&gt; " + menu[key] + "</span>");
    } else {
      $("#nav-right").append("<span class=\"menu\"><a href=\"" + key + "\">" + menu[key] + "</a></span>");
    }
  }
  $("footer").css("text-align", "center")
    .html("&copy; " + new Date().getFullYear() + 
    " <a href=\"https://him0727.github.io/\" target=\"_blank\">HIM0727 .NET</a>");
});