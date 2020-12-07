document.getElementById("searchbar").onchange = () => {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();

  if (document.getElementById("mailbox")) {
    var mailBoxDiv = document.getElementById("mailbox").getElementsByTagName("*");
    for (i = 0; i < mailBoxDiv.length; i++) {
      a = mailBoxDiv[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        mailBoxDiv[i].style.display = "";
      } else {
        mailBoxDiv[i].style.display = "none";
      }
    }
  } else if (document.getElementById("data-container")) {
    var tableData = document.getElementById("data-container").getElementsByTagName("tr");
    for (i = 0; i < tableData.length; i++) {
      tr = tableData[i];
      title = tr.getAttribute('title');

      if (title.toUpperCase().indexOf(filter) > -1) {
        tr.style.display= "";
      } else {
        tr.style.display= "none";
      }

    }
  }
}
