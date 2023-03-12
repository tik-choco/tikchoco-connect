var slider;
var sliderFlag = false;
var breakpoint = 768;//768px以下の場合
  
function sliderSet() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
            slider = $('.news').bxSlider({
            touchEnabled:false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
      mode: 'vertical',//縦スライド指定
      controls: false,//前後のコントロールを表示させない。
      auto: 'true',//自動的にスライド
      pager: false//ページ送り無効化
    });
            sliderFlag = true;
        } else if (windowWidth < breakpoint && sliderFlag) {
            slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
            sliderFlag = false;
        }
    }

$(window).on('load resize', function() {
        sliderSet();
});

//◆タブレット以下も1行で表示させたい場合は下記のみの記述でOK
$('.news').bxSlider({
touchEnabled:false,
mode: 'vertical',
controls: false,
auto: 'true',
pager: false
});





