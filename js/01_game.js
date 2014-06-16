window.addEventListener("load", function(){
  var matches = document.querySelectorAll("td");
  // bez pętli ręcznie...
  cell=matches[0];
  cell.innerText=1;

  cell=matches[5];
  cell.innerText=6;
})
