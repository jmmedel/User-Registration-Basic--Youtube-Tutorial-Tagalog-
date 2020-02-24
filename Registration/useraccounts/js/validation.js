$(function(){
    $('#register').click(function(e){

        var valid = this.form.checkValidity();

        if(valid){

        var firstname 	= $('#firstname').val();
        var lastname	= $('#lastname').val();
        var email 		= $('#email').val();
        var phonenumber = $('#phonenumber').val();
        var password 	= $('#password').val();
        
            e.preventDefault();	
            
            $.ajax({
                type: 'POST',
                url: 'process.php',
                data: {firstname: firstname,lastname: lastname,email: email,phonenumber: phonenumber,password: password},
                success: function(data){
                Swal.fire({
                            'title': 'Successful',
                            'text': data,
                            'type': 'success'
                            })
                            	 $('#firstname').val('');
                                 $('#lastname').val('') ;
                                 $('#email').val('') ;
                                 $('#phonenumber').val('') ;
                                 $('#password').val('') ;     
                },
                error: function(data){
                    Swal.fire({
                            'title': 'Errors',
                            'text': 'errors while saving the data.',
                            'type': 'error'
                            })
                }
            });

            
        }else{
           
        }

        



    });		

    
});