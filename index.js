$('button').on('click',function(){
    $('i').css({
        display:'none'
    })
    
    $('p').css({
        display:'block'
    })
    $('p').text(Math.floor(Math.random()*1000))
})