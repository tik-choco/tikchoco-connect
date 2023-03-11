function header(){
    $.ajax({
        url: "/include/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}


function footer(){
    $.ajax({
        url: "/include/footer.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}