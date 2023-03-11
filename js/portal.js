//共通コンテンツロード
function header(){
    $.ajax({
        url: "../inc/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}



function footer(){
    $.ajax({
        url: "../inc/footer.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}