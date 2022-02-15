        $(function () {
            $("#dialog").dialog({
                modal: false,
                autoOpen: false,
                title: "",
                width: 300,
                height: 300
            });
            $("#btnShow").click(function () {
                $('#dialog').dialog('open');
            });
        });
        $(document).ready(function () {
            $('body').on('click', '.ui-widget-overlay', closeDialogBox);
         });
         
         function closeDialogBox() {
             $('#dialog').dialog('close');
         }

    


window.onload=function(){      
$("#filter").keyup(function() {

  var filter = $(this).val(),
    count = 0;

  $('#results div').each(function() {

    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).hide();

    } else {
      $(this).show();
      count++;
    }
  });
});
}



window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
