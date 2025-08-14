chrome.commands.onCommand.addListener((command) => {
  switch(command) {
    case 'switch-to-tab-1':
      activate_tab(0);
      break;
    case 'switch-to-tab-2':
      activate_tab(1);
      break;
    case 'switch-to-tab-3':
      activate_tab(2);
      break;
    case 'switch-to-tab-4':
      activate_tab(3);
      break;
    case 'switch-to-tab-5':
      activate_tab(4);
      break;
    case 'switch-to-tab-6':
      activate_tab(5);
      break;
    case 'switch-to-tab-7':
      activate_tab(6);
      break;
    case 'switch-to-tab-8':
      activate_tab(7);
      break;
    case 'switch-to-tab-9':
      activate_tab(8);
      break;
    case 'close-tab':
      close_current_tab();
      break;
    case 'new-tab':
      open_new_tab();
      break;
    default:
      return;
  }
});

function activate_tab(index) {
  chrome.tabs.query({ index: index }, function(tabs) {
    if (!tabs[0]) {
      return;
    }

    chrome.tabs.update(tabs[0].id, { active: true });
  });
}

function close_current_tab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs[0]) {
      chrome.tabs.remove(tabs[0].id);
    }
  });
}

function open_new_tab() {
  chrome.tabs.create({});
}
