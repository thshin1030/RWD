$(document).ready(function(){
    $('.barmenu').on('click',function(event){
        event.preventDefault();
        $('body').toggleClass('show');
    });  
});