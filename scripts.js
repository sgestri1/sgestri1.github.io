//Adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Code for filter buttons. Used https://www.w3schools.com/howto/howto_js_filter_elements.asp as a reference.
filterSelection("all")
function filterSelection(f) {
  var y, i;
  y = document.getElementsByClassName("col-sm-12");
  if (f == "all") f = "";
  // Code for adding the "show" class to the filtered elements, and remove the "show" class from the elements being filtered out
  for (i = 0; i < y.length; i++) {
    removeClass(y[i], "show");
    if (y[i].className.indexOf(f) > -1) addClass(y[i], "show");
  }
}

// Code for showing the filtered elements (those that are selected)
function addClass(element, name) {
  var i, array1, array2;
  array1 = element.className.split(" ");
  array2 = name.split(" ");
  for (i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) == -1) {
      element.className += " " + array2[i];
    }
  }
}

// Code for hiding elements that are filtered out (not selected)
function removeClass(element, name) {
  var i, array1, array2;
  array1 = element.className.split(" ");
  array2 = name.split(" ");
  for (i = 0; i < array2.length; i++) {
    while (array1.indexOf(array2[i]) > -1) {
      array1.splice(array1.indexOf(array2[i]), 1);
    }
  }
  element.className = array1.join(" ");
}

// Code for adding the active class to the current button
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("btnFilter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

