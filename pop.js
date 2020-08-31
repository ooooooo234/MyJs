function submitScript() {
  chrome.tabs.executeScript({
    code: document.getElementById('code').value
  });
}
function open_in_tabScript() {
  chrome.runtime.openOptionsPage();
}
document.getElementById('submit').addEventListener('click', submitScript);
document.getElementById('open_in_tab').addEventListener('click', open_in_tabScript);
