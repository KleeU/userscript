// ==UserScript==
// @name         Bվ�Զ��رյ�Ļ
// @version      1.0
// @description  �����л���
// @author       Klee
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       @run-at document-idle
// ==/UserScript==

(function() {

    clean(2000);
    function clean(seconds){
        setTimeout(function(){
            $("i[name='ctlbar_danmuku_close']").click();
        },seconds);
    }
})();