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
  
if (getLanguage() === 'ko-KR' || getLanguage() === 'ko') {
    var elem = $('[data-lang]');
    for(var i = 0; i < elem.length ; i++) {
        var textKey = elem.eq(i).attr('data-lang');
        var text = langs.ko[textKey];
        elem.eq(i).html(text);
    }
}

if (getLanguage() === 'ja-JP' || getLanguage() === 'ja') {
    var elem = $('[data-lang]');
    for(var i = 0; i < elem.length ; i++) {
        var textKey = elem.eq(i).attr('data-lang');
        var text = langs.jp[textKey];
        elem.eq(i).html(text);
    }
}

if (getLanguage() === 'en-US' || getLanguage() === 'en') {
    var elem = $('[data-lang]');
    for(var i = 0; i < elem.length ; i++) {
        var textKey = elem.eq(i).attr('data-lang');
        var text = langs.en[textKey];
        elem.eq(i).html(text);
    }
}
  
function getLanguage() {
    console.log(getLanguage());
    return navigator.language;
}