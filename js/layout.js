"use strict"

$(function() {
    var lang      = 'pt',
        otherLang = {'pt': 'en', 'en': 'pt'},
        langName  = {'pt': 'português »', 'en' : 'english »'},
        menuData  = {
            'en': [{'id' : '#aboutLink',    'link' : '#about',    'text' : 'about'},
                   {'id' : '#projectsLink', 'link' : '#projects', 'text' : 'projects'},
                   {'id' : '#moreLink',     'link' : '#more',     'text' : 'more'}],
            'pt': [{'id' : '#aboutLink',    'link' : '#sobre',    'text' : 'sobre'},
                   {'id' : '#projectsLink', 'link' : '#projetos', 'text' : 'projetos'},
                   {'id' : '#moreLink',     'link' : '#mais',     'text' : 'mais'}]
        };

    $("#en").hide();

    $("#langSwitch").click(
        function() {
            $("#langSwitch").text(langName[lang]);
            lang = otherLang[lang];

            var d = menuData[lang];
            for (var i = 0; i < d.length; i++) {
                $(d[i].id).text(d[i].text);
                $(d[i].id).attr('href', d[i].link);
            }

            $("#en").toggle();
            $("#pt").toggle();
        }
    );
});
