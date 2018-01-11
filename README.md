# Soruto-Easy-JS-Builder
You can build your script easy!! This is like jQuery.  
このスクリプトはJavaScriptでよく使うのに色々面倒いgetElementById()とかを簡単にかけるようにするjQuery的なライブラリです。
### 使い方
1.普通にhtmlの`<head>`タグ内に`<script>`タグを使ってライブラリを読み込ませる

`<script src="soruto_ejb.js-min.js"></script>`

2.使いたい関数をhtmlフォルダ内にあるfunc_list.htmlや[Wiki](https://github.com/SorutoProject/Soruto-Easy-JS-Builder/wiki)から探し、コーディングする(Wikiのほうが見つけやすいと思います)

    <html><head>  
    <script src="soruto_ejb-min.js"></script>  
    <script>  
    window.onload = function(){  
    al("Hello World");//alert()と同じようにアラートを出す関数  
    getId("st").value = "Hello World!!";//getID() は getElementById()と同じことをする関数  
    }  
    </script></head><body>  
    <input type="text" id="st">  
    </body></html>`
