function footer(){
    $.ajax({
        url: "../inc/footer.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}