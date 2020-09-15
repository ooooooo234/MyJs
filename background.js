var menus;
try {
  if (browser) {
    menus = browser.menus;
  } else {
    menus = chrome.contextMenus;
  }
} catch (e) {
  menus = chrome.contextMenus;
}
try {
  browser = browser || chrome;
} catch (e) {
  browser = chrome;
}
(function () {
  browser.storage.sync.get(['fullscreen_visible'], function (res) {
    menus.create({
      id: 'fullscreen',
      title: browser.i18n.getMessage('fullscreen_title') || 'fullscreen',
      contexts: [
        'all'
      ],
      visible: res['fullscreen_visible']
    });
  });
}) ();
for (let number = 1; number <= 10; number++) {
  let id = 'list_' + number;
  browser.storage.sync.get([id], function (res) {
    let visible = ((res[id] != null) && ((res[id] + ' ').length > 1));
    res[id] = res[id] || id;
    menus.create({
      id: id,
      title: res[id].split('').slice(0, 25).join('') || id,
      contexts: [
        'all'
      ],
      visible: visible
    });
  });
}
menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId.split('list_') [1] != null) {
    let id = info.menuItemId;
    //let number = Number(info.menuItemId.split('list_') [1]);
    browser.storage.sync.get([id], function (res) {
      browser.tabs.executeScript({
        code: res[id]
      });
    });
  } else {
    switch (info.menuItemId) {
      case 'fullscreen':
        {
          browser.tabs.executeScript({
            file: 'fullscreen.js'
          });
          break;
        }
    }
  }
});
