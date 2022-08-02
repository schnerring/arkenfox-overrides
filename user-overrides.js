// URL bar search
user_pref("keyword.enabled", true);                   // 0801: enabled urlbar search
user_pref("browser.search.suggest.enabled", false);   // 0804: live search suggestions

// Session Restore
user_pref("browser.startup.page", 3);                 // 0102: enable session restore
user_pref("privacy.clearOnShutdown.history", false);  // 2811: don't clear history on close
user_pref("privacy.cpd.history", false);              // 2820: untick history in Ctrl-Shift-Del dialog

// Other
user_pref("signon.rememberSignons", false);           // 5003: disable saving passwords
user_pref("network.file.disable_unc_paths", true);    // 0703: enalbe UNC paths

// TODO
//user_pref("media.peerconnection.enabled", false);     // 2001: disable WebRTC
