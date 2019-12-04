// $(document).ready(function() {
//     $('#example').DataTable();
// } );


$(document).ready(function(){
    
    $("#showPanel").click(function(){
        $("#panel").show();
    });
    
    $("#hidePanel").click(function(){
        $("#panel").hide();
    });
  
});

/*********Task1 START************************ */

$(document).ready(function(){
    $("button").click(function(){
        $("p.hint").addClass("task1-paragraph");
        $("h3").addClass("task1-heading");
        // alert("The paragraph was clicked.");
    });
});

/***************Task1 END********************/


/*********Task2 START************************ */

$(document).ready(function(){
    $("button").click(function(){
        $("p.hint").addClass("task1-paragraph");
        $("h3").addClass("task1-heading");
        // alert("The paragraph was clicked.");
    });
});


$(document).ready(function(){
    $("#btnshowhide").click(function(){
        $("#showhide").toggle();

    });
});
/***************Task2 END********************/


function radioButton() {
    document.querySelectorAll(".tourActions").forEach(function (value, index) {
      value.addEventListener("click", function (i) {
        if (value.value == "Tour Cancel") {
          document.querySelector(".reassignTour").style.display = "none";
          document.querySelector(".innerSelectReason").style.display = "block";
          document.querySelector(".confirmText").style.display = "none";
          document.querySelector(".confirmTextAction").style.display = "block";
          document.querySelector(".selectReason").style.display = "block";
          document.querySelectorAll(".tourCancelReason").forEach(function (value, index) {
            value.style.display = "block";
          })
          document.querySelectorAll(".chooseCollegue").forEach(function (value, index) {
            value.style.display = "none";
          })
        }
        else {
          document.querySelectorAll(".tourCancelReason").forEach(function (value, index) {
            value.style.display = "none";
          })
          document.querySelectorAll(".chooseCollegue").forEach(function (value, index) {
            value.style.display = "block";
          })
        }
      });
    });

}