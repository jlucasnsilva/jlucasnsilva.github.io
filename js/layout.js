"use strict"

function newApp() {
    let maxWidth = 768;
    let currLang = 'pt';

    return {
        'reshape': function() {
            if (window.innerWidth < maxWidth) {
                $("header").css('font-size', '0.8em');
                $("a.btn").css('display', 'block');
            } else {
                $("a.btn").css('display', 'inline');
                $("header").css('font-size', '1.4em');
            }
        },
        
        'switchLanguage': function() {
            var otherLang = {'pt': 'en', 'en': 'pt'};
            var langName = {'pt': 'português »', 'en': 'english »'};
            var menuData = {
                'en': [{'id': '#aboutLink',    'link': '#about',     'text': 'about'},
                       {'id': '#projectsLink', 'link': '#projects',  'text': 'projects'},
                       {'id': '#talksLink',    'link': '#talks',     'text': 'talks'}],
                'pt': [{'id': '#aboutLink',    'link': '#sobre',     'text': 'sobre'},
                       {'id': '#projectsLink', 'link': '#projetos',  'text': 'projetos'},
                       {'id': '#talksLink',    'link': '#palestras', 'text': 'palestras'}]
            };
        
            $("#langSwitch").text(langName[currLang]);
            currLang = otherLang[currLang];
        
            var d = menuData[currLang];
            for (var i = 0; i < d.length; i++) {
                $(d[i].id).text(d[i].text);
                $(d[i].id).attr('href', d[i].link);
            }
        
            $("#en").toggle();
            $("#pt").toggle();
        }
    }
}

const app = newApp();

$(() => {
    app.reshape();

    $("#langSwitch").click(() => { app.switchLanguage() });
    $(window).resize(() => { app.reshape(window.innerWidth); });
});
