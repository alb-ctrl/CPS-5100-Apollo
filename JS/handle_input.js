$(document).ready(function() {
   $('#input_form').on("submit", function(event){  
  event.preventDefault();  
  if($('#inpf').val() != "")  {  
   $.ajax({  
    url:"handler.cgi",  
    method:"POST",  
    data:$('#input_form').serialize(),  
    success:
    function(data){  
    alert(data);  
    // $('#home_page').html(data); 
    },
    error: function(xhr, status, error){
         var errorMessage = xhr.status + ': ' + xhr.statusText
         alert('Error - ' + errorMessage);
     }  
   });  
  }  
 });

});
