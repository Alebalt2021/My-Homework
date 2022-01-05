function showImg(data){
    let img = $('<img></img>');
    img.attr("src",data.download_url);
    img.addClass("img-api");
    let p = '<span>'+ data.author +'</span>';
    $("#gallery").append(img);
    $("#gallery").append(p);
}
$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/20/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/25/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/40/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/42/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/43/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/55/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/65/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/76/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
    
})