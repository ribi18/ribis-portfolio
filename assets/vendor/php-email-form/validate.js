function validateform(){
     var name=document.sub.name.value;
     var email=document.sub.email.value;
     var subject=document.sub.subject.value;
     var message=document.sub.message.value; 
     var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
     var err=document.getElementById("error-message");
     
        if(name==""){
            err.innerHTML='You shold enter your name'
            return false;
        }
        if(name.length<5){
            err.innerHTML='Really? a name that short!';
            return false;
        }
        if(email==""){
            err.innerHTML='Email is Empty';
            return false;
        }  
        if(regex.test(email)==false){
            err.innerHTML='Invalid Email'
            return false
        }
        if(subject==""){
            err.innerHTML='Please provide the subject'
            return false
        }
        if(subject.length<5){
            err.innerHTML='Please provide a genuine subject';
            return false
        }  
        if(message==""){
            err.innerHTML='Please enter what you want to say in your message';
            return false
        }
        if (message.length<10){
            err.innerHTML='Please elaborate what you have to say in atleast 20 words';
            return false
            
        }
return true;



}