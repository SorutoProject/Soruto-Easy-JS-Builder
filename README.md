# Soruto-Easy-JS-Builder
You can build your script easy!! This is like jQuery.  
このスクリプトはJavaScriptでよく使うのに色々面倒いgetElementById()とかを簡単にかけるようにするjQuery的なライブラリです。
### 使い方
1.普通にhtmlの`<head>`タグ内に`<script>`タグを使ってライブラリを読み込ませる

`<script src="soruto_ejb-min.js"></script>`

2.使いたい関数を[Wiki](https://github.com/SorutoProject/Soruto-Easy-JS-Builder/wiki)から探し、コーディングする  

例:

    <html><head>  
    <script src="soruto_ejb-min.js"></script>  
    <script>  
    window.onload = function(){  
    So_al("Hello World");//alert()と同じようにアラートを出す関数  
    So_setVal("st","Hello World!!");//setVal()関数は指定されたidを持つ要素のvalue属性を変更する  
    }  
    </script></head><body>  
    <input type="text" id="st">  
    </body></html>
