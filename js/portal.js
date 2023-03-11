//共通コンテンツロード
// function header(){
//     $.ajax({
//         url: "header.html",
//         cache: false,
//         success: function(html){
//             document.write(html);
//         }
//     });
// }



// function footer(){
//     $.ajax({
//         url: "footer.html",
//         cache: false,
//         success: function(html){
//             document.write(html);
//         }
//     });
// }

function header(rootDir){
    $.ajax({
        url: rootDir + "header.html",  // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        }
    });
}

function footer(rootDir){
    $.ajax({
        url: rootDir + "footer.html",  // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        }
    });
}