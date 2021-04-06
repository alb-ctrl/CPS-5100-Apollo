$(document).ready(function() {
   $('#input_form').on("submit", function(event){  
  event.preventDefault();  

  var inpf = $('#inpf').val();
  var outf = $('#outf').val();
   $.ajax({  
    url:"../cgi-bin/handler.cgi",  
    method:"POST",  
    data:$('#input_form').serialize(),  
    success:
    function(data){
    if (inpf != "") {
    	$('#outf').val(data); 
    }
    else if (outf != "") {
    	$('#inpf').val(data); 
    }
    //alert(data);  
    //$('#test').html(data); 
    },
    error: function(xhr, status, error){
         var errorMessage = xhr.status + ': ' + xhr.statusText
         alert('Error - ' + errorMessage);
     }  
   }).done(function(data){
    console.log(data);
    
}); 
  
 });

});
