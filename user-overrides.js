// enable session restore
user_pref("browser.startup.page", 3);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false);
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", false);
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", false);

// enable live search suggestions
user_pref("browser.search.suggest.enabled", true);

// disable saving passwords
user_pref("signon.rememberSignons", false);

// allow downloading to network storage
user_pref("network.file.disable_unc_paths", false);
