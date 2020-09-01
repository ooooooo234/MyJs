try {
  browser = browser || chrome;
} catch (e) {
  browser = chrome;
}
let unset = browser.i18n.getMessage('unset');
let defaultcode = browser.i18n.getMessage('defaultcode');
function toSet(e) {
  switch (Number(e)) {
    case 1:
      {
        let doing = chrome.storage.sync.set({
          'list_1': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_1', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_1'
        });
        updating;
        break;
      }
    case 2:
      {
        let doing = chrome.storage.sync.set({
          'list_2': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_2', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_2'
        });
        updating;
        break;
      }
    case 3:
      {
        let doing = chrome.storage.sync.set({
          'list_3': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_3', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_3'
        });
        updating;
        break;
      }
    case 4:
      {
        let doing = chrome.storage.sync.set({
          'list_4': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_4', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_4'
        });
        updating;
        break;
      }
    case 5:
      {
        let doing = chrome.storage.sync.set({
          'list_5': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_5', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_5'
        });
        updating;
        break;
      }
    case 6:
      {
        let doing = chrome.storage.sync.set({
          'list_6': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_6', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_6'
        });
        updating;
        break;
      }
    case 7:
      {
        let doing = chrome.storage.sync.set({
          'list_7': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_7', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_7'
        });
        updating;
        break;
      }
    case 8:
      {
        let doing = chrome.storage.sync.set({
          'list_8': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_8', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_8'
        });
        updating;
        break;
      }
    case 9:
      {
        let doing = chrome.storage.sync.set({
          'list_9': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_9', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_9'
        });
        updating;
        break;
      }
    case 10:
      {
        let doing = chrome.storage.sync.set({
          'list_10': document.getElementById('code').value
        });
        doing;
        let updating = browser.menus.update('list_10', {
          title: document.getElementById('code').value.split('').slice(0, 25).join('') || 'list_10'
        });
        updating;
        break;
      }
    default:
      {
        let doing = chrome.storage.sync.set({
          'code': document.getElementById('code').value
        });
        doing;
        break;
      }
  }
}
function toGet() {
  let doing = function () {
  };
  doing = function () {
    browser.storage.sync.get(['code'], function (res) {
      document.getElementById('code').value = res.code || defaultcode;
    });
    browser.storage.sync.get(['list_1'], function (res) {
      document.getElementById('list_1').textContent = res.list_1 || unset;
    });
    browser.storage.sync.get(['list_2'], function (res) {
      document.getElementById('list_2').textContent = res.list_2 || unset;
    });
    browser.storage.sync.get(['list_3'], function (res) {
      document.getElementById('list_3').textContent = res.list_3 || unset;
    });
    browser.storage.sync.get(['list_4'], function (res) {
      document.getElementById('list_4').textContent = res.list_4 || unset;
    });
    browser.storage.sync.get(['list_5'], function (res) {
      document.getElementById('list_5').textContent = res.list_5 || unset;
    });
    browser.storage.sync.get(['list_6'], function (res) {
      document.getElementById('list_6').textContent = res.list_6 || unset;
    });
    browser.storage.sync.get(['list_7'], function (res) {
      document.getElementById('list_7').textContent = res.list_7 || unset;
    });
    browser.storage.sync.get(['list_8'], function (res) {
      document.getElementById('list_8').textContent = res.list_8 || unset;
    });
    browser.storage.sync.get(['list_9'], function (res) {
      document.getElementById('list_9').textContent = res.list_9 || unset;
    });
    browser.storage.sync.get(['list_10'], function (res) {
      document.getElementById('list_10').textContent = res.list_10 || unset;
    });
  };
  doing();
}
function checkbox_click() {
  if (this.checked) {
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = browser.i18n.getMessage('overwrite');
    this.parentNode.insertBefore(button, this.nextSibling);
    button.addEventListener('click', function () {
      toSet(this.parentNode.querySelector('textarea').getAttribute('name'));
      this.parentNode.querySelector('textarea').textContent = document.getElementById('code').value || unset;
    });
  } else {
    this.nextSibling.remove();
  }
}
toGet();
document.getElementById('submit').innerText = browser.i18n.getMessage('submit_button');
document.getElementById('submitSave').innerText = browser.i18n.getMessage('submitSave_button');
document.getElementById('open_in_tab').innerText = browser.i18n.getMessage('open_in_tab_button');
document.getElementById('write_js_here').innerText = browser.i18n.getMessage('write_js_here_label');
document.querySelector('#submitSave').addEventListener('click', toSet);
document.querySelector('#checkbox_1').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_2').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_3').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_4').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_5').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_6').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_7').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_8').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_9').addEventListener('click', checkbox_click);
document.querySelector('#checkbox_10').addEventListener('click', checkbox_click);
