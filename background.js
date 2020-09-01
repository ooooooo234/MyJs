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
let create_menus;
create_menus = browser.storage.sync.get(['list_1'], function (res) {
  res.list_1 = res.list_1 || 'list_1';
  menus.create({
    id: 'list_1',
    title: res.list_1.split('').slice(0, 25).join('') || 'list_1',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_2'], function (res) {
  res.list_2 = res.list_2 || 'list_2';
  menus.create({
    id: 'list_2',
    title: res.list_2.split('').slice(0, 25).join('') || 'list_2',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_3'], function (res) {
  res.list_3 = res.list_3 || 'list_3';
  menus.create({
    id: 'list_3',
    title: res.list_3.split('').slice(0, 25).join('') || 'list_3',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_4'], function (res) {
  res.list_4 = res.list_4 || 'list_4';
  menus.create({
    id: 'list_4',
    title: res.list_4.split('').slice(0, 25).join('') || 'list_4',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_5'], function (res) {
  res.list_5 = res.list_5 || 'list_5';
  menus.create({
    id: 'list_5',
    title: res.list_5.split('').slice(0, 25).join('') || 'list_5',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_6'], function (res) {
  res.list_6 = res.list_6 || 'list_6';
  menus.create({
    id: 'list_6',
    title: res.list_6.split('').slice(0, 25).join('') || 'list_6',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_7'], function (res) {
  res.list_7 = res.list_7 || 'list_7';
  menus.create({
    id: 'list_7',
    title: res.list_7.split('').slice(0, 25).join('') || 'list_7',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_8'], function (res) {
  res.list_8 = res.list_8 || 'list_8';
  menus.create({
    id: 'list_8',
    title: res.list_8.split('').slice(0, 25).join('') || 'list_8',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_9'], function (res) {
  res.list_9 = res.list_9 || 'list_9';
  menus.create({
    id: 'list_9',
    title: res.list_9.split('').slice(0, 25).join('') || 'list_9',
    contexts: [
      'all'
    ]
  });
});
create_menus;
create_menus = browser.storage.sync.get(['list_10'], function (res) {
  res.list_10 = res.list_10 || 'list_10';
  menus.create({
    id: 'list_10',
    title: res.list_10.split('').slice(0, 25).join('') || 'list_10',
    contexts: [
      'all'
    ]
  });
});
create_menus;
menus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case 'fullscreen':
      {
        browser.tabs.executeScript({
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
