function getLanguage() {
    return navigator.language;
}

$(document).ready(function() {
    var langs = {
        ko: {
            hello: '나비처럼 날아올라',
            myname: '✱Ed (에드)'
        },
        jp: {
            hello: '飛び立つ。蝶々のように。',
            myname: '✱Ed (エド)'
        },
        en: {
            hello: 'Fly Up. Just Like a Butterfly.',
            myname: '✱Ed'
        }
    };

    var currentLang = getLanguage();
    
    if (currentLang === 'ko-KR' || currentLang === 'ko') {
        console.log("Deteceted ko-KR");
        var elem = $('[data-lang]');
        for(var i = 0; i < elem.length ; i++) {
            var textKey = elem.eq(i).attr('data-lang');
            var text = langs.ko[textKey];
            elem.eq(i).html(text);
        }
    }

    else if (currentLang === 'ja-JP' || currentLang === 'ja') {
        console.log("Deteceted ja-JP");
        var elem = $('[data-lang]');
        for(var i = 0; i < elem.length ; i++) {
            var textKey = elem.eq(i).attr('data-lang');
            var text = langs.jp[textKey];
            elem.eq(i).html(text);
        }
    }

    else {
        var elem = $('[data-lang]');
        for(var i = 0; i < elem.length ; i++) {
            var textKey = elem.eq(i).attr('data-lang');
            var text = langs.en[textKey];
            elem.eq(i).html(text);
        }
    }
});