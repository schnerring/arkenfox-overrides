// Allow cross-domain logins (e.g. Atlassian)
user_pref("network.http.referer.XOriginPolicy", 0);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Enable location bar using search
user_pref("keyword.enabled", true);

// Disable saving passwords
user_pref("signon.rememberSignons", false);

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

// Disable website access to clipboard events/content
user_pref("dom.event.clipboardevents.enabled", false);
