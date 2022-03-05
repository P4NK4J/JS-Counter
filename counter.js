$(document).ready( function() {
    $('.counter-value').click(function(){
        var counter = 0;
        $('input').each(function(index, thisElement){
            if ($(this).val()){
                counter += 1
            }
        });
        $('.fill-value').text(counter);
    })
}); 
