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
let unset = browser.i18n.getMessage('unset');
let defaultcode = browser.i18n.getMessage('defaultcode');
function submitScript() {
  browser.tabs.executeScript({
    code: document.getElementById('code').value
  });
}
function open_in_tabScript() {
  browser.runtime.openOptionsPage();
}
function toSetList(e) {
  let number = Number(e);
  let id = 'list_' + number;
  let value = document.getElementById('code').value;
  toSet(id, value);
  let visible = ((value != null) && ((value + ' ').length > 1));
  menus.update(id, {
    title: value.split('').slice(0, 25).join('') || id,
    visible: visible
  });
}
function toSet(id, value) {
  let myObject = {
  };
  myObject[id] = value;
  browser.storage.sync.set(myObject);
}
function list_click(item) {
  if (item.checked) {
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = browser.i18n.getMessage('overwrite') || 'overwrite';
    item.parentNode.insertBefore(button, item.nextSibling);
    button.addEventListener('click', function () {
      toSetList(item.parentNode.querySelector('textarea').getAttribute('name'));
      item.parentNode.querySelector('textarea').textContent = document.getElementById('code').value || unset;
    });
  } else {
    try {
      item.parentNode.querySelector('button').remove();
    } catch (e) {
      console.log(e);
    }
  }
}
function clickEvent() {
  let id = this.getAttribute('id');
  if (id.split('checkbox_') [1] != null) {
    list_click(this);
  } else {
    switch (id) {
      case 'fullscreen_visible':
        {
          let visible = !this.checked;
          toSet(id, visible);
          menus.update('fullscreen', {
            visible: visible
          });
          break;
        }
      case 'submitSave':
        {
          toSet('code', document.getElementById('code').value);
          break;
        }
      default:
        {
          console.log('Error');
          break;
        }
    }
  }
}
function openPage() {
  let id;
  id = 'fullscreen_visible';
  browser.storage.sync.get(['fullscreen_visible'], function (res) {
    document.getElementById('fullscreen_visible').checked = !res['fullscreen_visible'] || false;
  });
  browser.storage.sync.get(['code'], function (res) {
    document.getElementById('code').value = res['code'] || defaultcode;
  });
  for (let number = 1; number <= 10; number++) {
    let id = 'list_' + number;
    browser.storage.sync.get([id], function (res) {
      document.getElementById(id).textContent = res[id] || unset;
    });
  }
  document.getElementById('submit').textContent = browser.i18n.getMessage('submit_button');
  document.getElementById('submitSave').textContent = browser.i18n.getMessage('submitSave_button');
  document.getElementById('open_in_tab').textContent = browser.i18n.getMessage('open_in_tab_button');
  document.getElementById('write_js_here').textContent = browser.i18n.getMessage('write_js_here_label');
  document.getElementById('extra_options').textContent = browser.i18n.getMessage('extra_options');
  document.getElementById('fullscreen_visible_label').textContent = browser.i18n.getMessage('fullscreen_visible_label');
  document.getElementsByTagName('title')[0].textContent = browser.i18n.getMessage('page_title');
  document.getElementById('submit').addEventListener('click', submitScript);
  document.getElementById('open_in_tab').addEventListener('click', open_in_tabScript);
  document.getElementById('submitSave').addEventListener('click', clickEvent);
  document.getElementById('fullscreen_visible').addEventListener('change', clickEvent);
  document.getElementById('checkbox_1').addEventListener('click', clickEvent);
  document.getElementById('checkbox_2').addEventListener('click', clickEvent);
  document.getElementById('checkbox_3').addEventListener('click', clickEvent);
  document.getElementById('checkbox_4').addEventListener('click', clickEvent);
  document.getElementById('checkbox_5').addEventListener('click', clickEvent);
  document.getElementById('checkbox_6').addEventListener('click', clickEvent);
  document.getElementById('checkbox_7').addEventListener('click', clickEvent);
  document.getElementById('checkbox_8').addEventListener('click', clickEvent);
  document.getElementById('checkbox_9').addEventListener('click', clickEvent);
  document.getElementById('checkbox_10').addEventListener('click', clickEvent);
}
openPage();
