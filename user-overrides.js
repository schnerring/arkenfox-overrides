// Allow cross-domain logins (e.g. Atlassian)
user_pref("network.http.referer.XOriginPolicy", 0);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// 0801: Enable search from urlbar
user_pref("keyword.enabled", true);

// See also: https://www.privacytools.io/browsers/#about_config
// This is Mozilla's new built-in tracking protection. One of it's benefits is
// blocking tracking (i.e. Google Analytics) on privileged pages where add-ons
// that usually do that are disabled.
user_pref("privacy.trackingprotection.enabled", true);

// See also: https://www.privacytools.io/browsers/#webrtc
// Make absolutely sure every single WebRTC-related setting is disabled.
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);

// Store cookies and history
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.history", false);
