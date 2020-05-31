$(document).ready(function() {
  $("#num-probs").css("font-size", "x-large").text(probs.length);
  $("#num-sols").css("font-size", "x-large").text(sols.length);
  $("#list-probs").css({"text-align": "left", "margin-left": "10px"});
  getProbs();
  $("#list-sols").css({"text-align": "left", "margin-left": "10px"});
  getSols();
});

function getProbs() {
  $("#list-probs").append("<ul style=\"margin: 5px 0 10px -10px; list-style-type: circle;\">");
  for (let i = 0; i < Math.min(5, recoms.length); i++) {
    $("#list-probs").append("<li style=\"margin: 5px 0 0 0; border-bottom: #ABABAB 1px dashed;\">" + 
      "<a href=\"probs.html#" + recoms[i].name + "\" target=\"_blank\">" + recoms[i].name + " - " + recoms[i].fname + "</a></li>");
  }
  $("#list-probs").append("</ul><br />");
}

function getSols() {
  $("#list-sols").append("<ul style=\"margin: 5px 0 10px -10px; list-style-type: circle;\">");
  let p = Array.from(Array(sols.length).keys())
  for (let i = p.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 5; i++) {
    $("#list-sols").append("<li style=\"margin: 5px 0 0 0; border-bottom: #ABABAB 1px dashed;\">" + 
      "<a href=\"https://github.com/him0727/Online-Judge-Solutions/blob/master/SPOJ/" + 
      sols[p[i]].name + "\" target=\"_blank\">" + sols[p[i]].name.substr(0, sols[p[i]].name.indexOf(".")) + " - " + sols[p[i]].fname + "</a></li>");
  }
  $("#list-sols").append("</ul><br />");
}