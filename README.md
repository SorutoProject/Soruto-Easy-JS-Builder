# Soruto-Easy-JS-Builder  
<img src="https://github.com/SorutoProject/Soruto-Easy-JS-Builder/blob/master/img/SorutoEJBLogo2.png?raw=true" width="350px" title="Logo"></img>  
You can build your script easy!! This is like jQuery.  
このスクリプトはJavaScriptでよく使うのに色々面倒いgetElementById()とかを簡単にかけるようにする  
jQueryライクなライブラリです。  
### ライセンス
本ライブラリは、MITライセンスの下で公開されています。LICENSE.txtをお読みください。  
(This software is released under the MIT License. Please see the LICENSE.txt.)

MITライセンスを要約すると、以下のようになります:

* 本ソフトウェアは誰でも自由に利用できます。ただし、著作権表示(`(C)2018 Soruto Project`)や  
本許諾表示(LICENSE.txtの中身をソースコードにコピペ)が必要です。

* 本ソフトウェアの開発者は、本ソフトウェアの利用について、一切の責任を負いません。

### 使い方
1.普通にhtmlの`<head>`タグ内に`<script>`タグを使ってライブラリを読み込ませる

`<script src="soruto_ejb-min.js"></script>`

2.使いたい関数を[Wiki](https://github.com/SorutoProject/Soruto-Easy-JS-Builder/wiki)から探し、コーディングする  

例:

    <html><head>  
    <script src="soruto_ejb-min.js"></script>  
    <script>  
    /*Copyright 2018 Soruto Project

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    window.onload = function(){  
    so.al("Hello World");//alert()と同じようにアラートを出す関数  
    so.setVal("st","Hello World!!");//so.setVal()関数は指定されたidを持つ要素のvalue属性を変更する  
    }  
    </script></head><body>  
    <input type="text" id="st">  
    </body></html>
    
(C)2018 Soruto Project
