$(document).ready(function() {
  var pool = new Set();
  var container = new Array(tags.length);
  for (let i in tags) {
    container[i] = [];
    for (let j in sols) {
      if ($.inArray(parseInt(i), sols[j].tags) != -1) {
        container[i].push(sols[j]);
      }
    }
    $(":checkbox[value='" + i + "']").parent().wrap("<span style='background-color: " + tags[i][1] + "; color: " + tags[i][2] + "; border-radius: 3px; display: block;'></spna>");
  }
  for (let i in sols) {
    pool.add(sols[i]);
  }
  load(pool);
  $(".tags" ).change(function () {
    let me = $(this).val();
    $(":checkbox[value='" + me + "']").prop("checked", $(this).is(":checked"));
    if ($(this).is(":checked")) {
      for (let i in container[me]) {
        pool.add(container[me][i]);
      }
    } else {
      for (let i in container[me]) {
        pool.delete(container[me][i]);
      }
    }
    $("#display").hide(200);
    clearPanel();
    load(pool);
    $("#display").show(200);
  });
  $("#clear-all").click(function () {
    $(".tags" ).prop("checked", false);
    pool.clear();
    clearPanel();
    getID("no-result").innerHTML = "Showing 0 / " + sols.length + " result.";
  });
  $("#select-all").click(function () {
    $(".tags" ).prop("checked", true);
    pool.clear();
    for (var i in sols) {
      pool.add(sols[i]);
    }
    $("#display").hide(200);
    clearPanel();
    load(pool);
    $("#display").show(200);
  });
  $(".cat").click(function () {
    $cat = $(this);
    $content = $cat.next();
    $content.slideToggle(500, function () {
      $cat.text(function () {
        return $content.is(":visible") ? "-" + $cat.text().substring(1) : "+" + $cat.text().substring(1);
      });
    });
  });
  $("#prob-stat").click(function() {
    getID("display").innerHTML = "";
    $("#prob-sol").removeClass("desc").removeClass("asc").html("Solution");
    $("#prob-stat").html("Problem statement");
    if ($("#prob-stat").hasClass("desc") || !($("#prob-stat").hasClass("desc") || $("#prob-stat").hasClass("asc") )) {
      $("#prob-stat").removeClass("desc").addClass("asc").append(" &#9650;");
      load(pool, 1, true);
    } else {
      $("#prob-stat").removeClass("asc").addClass("desc").append(" &#9660;");
      load(pool, 1, false);
    }
  });
  $("#prob-sol").click(function() {
    getID("display").innerHTML = "";
    $("#prob-stat").removeClass("desc").removeClass("asc").html("Problem statement");
    $("#prob-sol").html("Solution");
    if ($("#prob-sol").hasClass("desc") || !($("#prob-sol").hasClass("desc") || $("#prob-sol").hasClass("asc") )) {
      $("#prob-sol").removeClass("desc").addClass("asc").append(" &#9650;");
      load(pool, 0, true);
    } else {
      $("#prob-sol").removeClass("asc").addClass("desc").append(" &#9660;");
      load(pool, 0, false);
    }
  });
});

if (!String.prototype.format) {
  String.prototype.format = function () {
    let args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) { 
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  };
}
function getID(id) {
  return document.getElementById(id);
}
function clearPanel() {
  getID("display").innerHTML = "";
  $("#prob-stat").removeClass("desc").removeClass("asc").html("Problem statement");
  $("#prob-sol").removeClass("desc").addClass("asc").html("Solution &#9650;");
}
function load(pool, pos = 0, asc = true) {
  let item;
  if (pos == 0) {
    item = Array.from(pool).sort(function (a, b) {
      return (asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    });
  } else {
    item = Array.from(pool).sort(function (a, b) {
      return (asc ? a.fname.localeCompare(b.fname) : b.fname.localeCompare(a.fname));
    });
  }
  for (let i in item) {
    let tag = "";
    let url = "https://github.com/him0727/Online-Judge-Solutions/blob/master/SPOJ/" + item[i].name;
    let purl = "http://www.spoj.com/problems/" + item[i].name.substr(0, item[i].name.indexOf("."));
    for (let j in item[i].tags) {
      let t = tags[item[i].tags[j]];
      tag += "<span class='tag' style='background-color: " + t[1] + "; color: " + t[2] + ";'>" + t[0] + "</span>";
    }
    let clone = getID("template").cloneNode(true);
    clone.id = "";
    clone.innerHTML = getID("template").innerHTML.format(url, item[i].name, purl, item[i].fname, tag);
    getID("display").appendChild(clone);
  }
  getID("no-result").innerHTML = "Showing " + pool.size + " / " + sols.length + " results.";
}