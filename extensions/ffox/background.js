// Callback reads runtime.lastError to prevent an unchecked error from being 
// logged when the extension attempt to register the already-registered menu 
// again. Menu registrations in event pages persist across extension restarts.
browser.contextMenus.create({
        id: "find-embedded-url",
        title: "Open embedded URL",
        contexts: ["link"],
    },
    // See https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/#event-pages-and-backward-compatibility
    // for information on the purpose of this error capture.
    () => void browser.runtime.lastError,
);

browser.contextMenus.create({
        id: "open-embedded-url",
        title: "-",
        parentId: "find-embedded-url"
    },
    () => void browser.runtime.lastError,
);

browser.contextMenus.onShown.addListener((info, tab) => {
    /*
    let url = browser.contextMenus.getTargetElement(info.linkUrl);

    url = decodeURIComponent(info.linkUrl);
    let suburl = url.slice(1);
    suburl = suburl.match(/https?:\/\/[^\s]+/)[0];
    suburl = suburl.match(/.+?(?=\?)/)[0];
    console.log("Found url: " + suburl);
    
    browser.contextMenus.update("open-embedded-url", {
        title: suburl,
    });
    browser.contextMenus.refresh();
    */

});


browser.contextMenus.onClicked.addListener((info, tab) => {
    
    let url = decodeURIComponent(info.linkUrl);
    let suburl = url.slice(1);
    suburl = suburl.match(/https?:\/\/[^\s]+/)[0];
    suburl = suburl.match(/.+?(?=\?)/)[0];
    console.log("Found url: " + suburl);
    
    browser.contextMenus.update("open-embedded-url", {
        title: suburl,
    });
    browser.contextMenus.refresh();
    
    if (info.menuItemId === "find-embedded-url") {
        
        
    } else if (info.menuItemId === "open-embedded-url") {
        browser.contextMenus.refresh();
        browser.tabs.create({
            "url": suburl
        });
    }
});