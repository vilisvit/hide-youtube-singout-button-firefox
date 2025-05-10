browser.webNavigation.onCompleted.addListener((details) => {
  if (details.url.includes("youtube.com")) {
      browser.tabs.executeScript(details.tabId, { file: "content.js" });
  }
}, { url: [{ hostContains: "youtube.com" }] });
