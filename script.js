// ==UserScript==
// @name         Laboratorio 4 Criptografia
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cripto.tiiny.site/
// @match        https://prueba_lab4_cripto.tiiny.site/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js#sha512=E8QSvWZ0eCLGk4km3hxSsNmGWbLtSCSUcewDQPQWZF6pEU8GlT8a5fF32wOl1i8ftdMhssTrF/OhyGWwonTcXA==
// ==/UserScript==

(function() {
    'use strict';
    var llave;
    var string = document.getElementsByTagName('p')[0].innerHTML
    var newmsg = string.match(/[A-Z]/g);
    llave = newmsg.join("");
    console.log("La llave es:",llave);



/*  //Generador de palabras cifradas
    let palabras = ["lorem", "ipsum","dolor","sit","amet","consectetur","adipiscing","elit"];
    var llavePrueba = "BUENOSDIASPROFE";
    var keyPrueba = CryptoJS.enc.Utf8.parse(llavePrueba.substr(0, 24));
    for (const palabra of palabras){

        var encrypted = CryptoJS.TripleDES.encrypt(palabra, keyPrueba,{mode: CryptoJS.mode.ECB});
        var decryptedPrueba = CryptoJS.TripleDES.decrypt(encrypted, keyPrueba, {mode: CryptoJS.mode.ECB});
        console.log(encrypted.toString(),decryptedPrueba.toString(CryptoJS.enc.Utf8));
    }
*/



    var mensajes = document.getElementsByTagName('div');
    console.log("Los mensajes cifrados son:",mensajes.length);

    for (const element of mensajes) {



        var key = CryptoJS.enc.Utf8.parse(llave.substr(0, 24));
        var decrypted = CryptoJS.TripleDES.decrypt(element.id, key, {mode: CryptoJS.mode.ECB});
        console.log(element.id, decrypted.toString(CryptoJS.enc.Utf8));

        element.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);


    }


})();


/*      //Funciones usadas para probar distintos Ciphers
        var decrypted = CryptoJS.AES.decrypt(element.id, llave);
        console.log(decrypted);
        var decrypted1 = CryptoJS.DES.decrypt(element.id, llave);
        console.log(decrypted1);
        var decrypted2 = CryptoJS.TripleDES.decrypt(element.id, llave);
        console.log(decrypted2);
        var decrypted3 = CryptoJS.Rabbit.decrypt(element.id, llave);
        console.log(decrypted3);
        */