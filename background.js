let menus;
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
menus.create({
  id: 'fullscreen',
  title: 'fullscreen',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_1',
  title: 'list_1',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_2',
  title: 'list_2',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_3',
  title: 'list_3',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_4',
  title: 'list_4',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_5',
  title: 'list_5',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_6',
  title: 'list_6',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_7',
  title: 'list_7',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_8',
  title: 'list_8',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_9',
  title: 'list_9',
  contexts: [
    'all'
  ]
});
menus.create({
  id: 'list_10',
  title: 'list_10',
  contexts: [
    'all'
  ]
});
menus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case 'fullscreen':
      {
        chrome.tabs.executeScript({
          file: 'fullscreen.js'
        });
        break;
      }
    case 'list_1':
      {
        browser.storage.sync.get(['list_1'], function (res) {
          browser.tabs.executeScript({
            code: res.list_1
          })
        });
        break;
      }
    case 'list_2':
      {
        browser.storage.sync.get(['list_2'], function (res) {
          browser.tabs.executeScript({
            code: res.list_2
          })
        });
        break;
      }
    case 'list_3':
      {
        browser.storage.sync.get(['list_3'], function (res) {
          browser.tabs.executeScript({
            code: res.list_3
          })
        });
        break;
      }
    case 'list_4':
      {
        browser.storage.sync.get(['list_4'], function (res) {
          browser.tabs.executeScript({
            code: res.list_4
          })
        });
        break;
      }
    case 'list_5':
      {
        browser.storage.sync.get(['list_5'], function (res) {
          browser.tabs.executeScript({
            code: res.list_5
          })
        });
        break;
      }
    case 'list_6':
      {
        browser.storage.sync.get(['list_6'], function (res) {
          browser.tabs.executeScript({
            code: res.list_6
          })
        });
        break;
      }
    case 'list_7':
      {
        browser.storage.sync.get(['list_7'], function (res) {
          browser.tabs.executeScript({
            code: res.list_7
          })
        });
        break;
      }
    case 'list_8':
      {
        browser.storage.sync.get(['list_8'], function (res) {
          browser.tabs.executeScript({
            code: res.list_8
          })
        });
        break;
      }
    case 'list_9':
      {
        browser.storage.sync.get(['list_9'], function (res) {
          browser.tabs.executeScript({
            code: res.list_9
          })
        });
        break;
      }
    case 'list_10':
      {
        browser.storage.sync.get(['list_10'], function (res) {
          browser.tabs.executeScript({
            code: res.list_10
          })
        });
        break;
      }
  }
});
