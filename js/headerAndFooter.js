
// 鼠标进入导航栏事件
$('.nav_main li').mouseenter(function(){
    var index = $(this).index();
    if(index == 0){
        $('.nav_child').removeClass('now');
    }else{        
        $('.nav_child').addClass('now');
        $('.child').eq(index-1).find('ul').css({
            'display':'block'
        })
        $('.nav_main ul b').eq(index).css({
            'visibility':'visible'
        })
    }    
});
// 鼠标离开导航栏事件
$('.nav_main li').mouseleave(function(){
    var index = $(this).index();
    $('.nav_child').removeClass('now');
    $('.child ul').eq(index-1).css({
        'display':'none'
    })
    $('.nav_main ul b').eq(index).css({
        'visibility':'hidden'
    })
});

// 鼠标进入工具栏事件
$('.login').mouseenter(function(){  
    $('.loginbox').fadeIn(300);
});
$('.login').mouseleave(function(){  
    $('.loginbox ').css({
        'display':'none'
    })
});
$('.lang').mouseenter(function(){  
    $('.language').fadeIn(300);
});
$('.lang').mouseleave(function(){  
    $('.language ').css({
        'display':'none'
    })
});
$('.scbtn').click(function(){
    $('.search').fadeIn(300);
   var val =  $('search input').val()
    if(val != '搜索关键词...'){
        $('.search input').val('搜索关键词...');
    }
    return false;
});
$('.search input').click(function(){
    $(this).val('');
    return false;
});
$('body').click(function () {  
    $('.search ').css({
        'display':'none'
    })      
});

// 鼠标进入二维码按钮
$('.code2b a').mouseenter(function(){    
    $(this).next().css({
       'display':'block'
       
    })    
})
$('.code2b a').mouseleave(function(){    
    $(this).next().css({
       'display':'none'
       
    })    
})
