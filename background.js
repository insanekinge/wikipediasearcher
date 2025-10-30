chrome.runtime.onInstalled.addListener(() => {
        var contextMenuItem = {
                "id": "wiki", 
                "title": "Search on Wikipedia",
                "contexts": ["selection"]
        }

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(info, tab){
        function containsCyrillic(word) {
                
                const cyrillicRegex = /[\u0400-\u04FF]/;
                return cyrillicRegex.test(word);
                }
                if (containsCyrillic(info.selectionText)) {
                        var newURL = "https://ru.wikipedia.org/wiki/" + info.selectionText;

                }else{
                        var newURL = "https://en.wikipedia.org/wiki/" + info.selectionText;

                }
        chrome.tabs.create({ url: newURL})
        });
});