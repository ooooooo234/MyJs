try {
  browser = browser || chrome;
} catch (e) {
  browser = chrome;
}
function toSet(e) {
  let doing = function () {
  };
  switch (Number(e)) {
    case 1:
      doing = function () {
        chrome.storage.sync.set({
          'list_1': document.getElementById('code').value
        })
      };
      break;
    case 2:
      doing = function () {
        chrome.storage.sync.set({
          'list_2': document.getElementById('code').value
        })
      };
      break;
    case 3:
      doing = function () {
        chrome.storage.sync.set({
          'list_3': document.getElementById('code').value
        })
      };
      break;
    case 4:
      doing = function () {
        chrome.storage.sync.set({
          'list_4': document.getElementById('code').value
        })
      };
      break;
    case 5:
      doing = function () {
        chrome.storage.sync.set({
          'list_5': document.getElementById('code').value
        })
      };
      break;
    case 6:
      doing = function () {
        chrome.storage.sync.set({
          'list_6': document.getElementById('code').value
        })
      };
      break;
    case 7:
      doing = function () {
        chrome.storage.sync.set({
          'list_7': document.getElementById('code').value
        })
      };
      break;
    case 8:
      doing = function () {
        chrome.storage.sync.set({
          'list_8': document.getElementById('code').value
        })
      };
      break;
    case 9:
      doing = function () {
        chrome.storage.sync.set({
          'list_9': document.getElementById('code').value
        })
      };
      break;
    case 10:
      doing = function () {
        chrome.storage.sync.set({
          'list_10': document.getElementById('code').value
        })
      };
      break;
    default:
      doing = function () {
        chrome.storage.sync.set({
          'code': document.getElementById('code').value
        })
      };
      break;
  }
  doing();
}
function toGet() {
  let doing = function () {
  };
  doing = function () {
    browser.storage.sync.get(['code'], function (res) {
      document.getElementById('code').value = res.code || browser.i18n.getMessage("defaultcode");
    });
    browser.storage.sync.get(['list_1'], function (res) {
      document.getElementById('list_1').textContent = res.list_1 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_2'], function (res) {
      document.getElementById('list_2').textContent = res.list_2 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_3'], function (res) {
      document.getElementById('list_3').textContent = res.list_3 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_4'], function (res) {
      document.getElementById('list_4').textContent = res.list_4 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_5'], function (res) {
      document.getElementById('list_5').textContent = res.list_5 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_6'], function (res) {
      document.getElementById('list_6').textContent = res.list_6 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_7'], function (res) {
      document.getElementById('list_7').textContent = res.list_7 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_8'], function (res) {
      document.getElementById('list_8').textContent = res.list_8 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_9'], function (res) {
      document.getElementById('list_9').textContent = res.list_9 || browser.i18n.getMessage("unset");
    });
    browser.storage.sync.get(['list_10'], function (res) {
      document.getElementById('list_10').textContent = res.list_10 || browser.i18n.getMessage("unset");
    });
  };
  doing();
}
function checkbox_click() {
  if (this.checked) {
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = browser.i18n.getMessage("overwrite");
    this.parentNode.insertBefore(button, this.nextSibling);
    button.addEventListener('click', function () {
      toSet(this.parentNode.querySelector('span').getAttribute('name'));
      this.parentNode.querySelector('span').textContent = document.getElementById('code').value || browser.i18n.getMessage("unset");
    });
  } else {
    this.nextSibling.remove();
  }
}
toGet();
document.getElementById('submit').innerText = browser.i18n.getMessage("submit_button");
document.getElementById('submitSave').innerText = browser.i18n.getMessage("submitSave_button");
document.getElementById('open_in_tab').innerText = browser.i18n.getMessage("open_in_tab_button");
document.getElementById('write_js_here').innerText = browser.i18n.getMessage("write_js_here_label");

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
