(function () {
  var ANNOUNCEMENT_DISMISSED_KEY = 'ds-announcement-dismissed';

  function isAnnouncementDismissed() {
    try {
      return window.localStorage.getItem(ANNOUNCEMENT_DISMISSED_KEY) === '1';
    } catch (error) {
      return false;
    }
  }

  function dismissAnnouncement() {
    try {
      window.localStorage.setItem(ANNOUNCEMENT_DISMISSED_KEY, '1');
    } catch (error) {
      // no-op
    }
    document.body.classList.add('ds-announcement-hidden');
    var bar = document.getElementById('ds-announcement-bar');
    if (bar) {
      bar.remove();
    }
  }

  function ensureAnnouncementBar() {
    if (isAnnouncementDismissed()) {
      document.body.classList.add('ds-announcement-hidden');
      var dismissedBar = document.getElementById('ds-announcement-bar');
      if (dismissedBar) {
        dismissedBar.remove();
      }
      return;
    }

    document.body.classList.remove('ds-announcement-hidden');
    if (document.getElementById('ds-announcement-bar')) {
      return;
    }

    var bar = document.createElement('div');
    bar.id = 'ds-announcement-bar';
    bar.className = 'ds-announcement-bar';
    bar.innerHTML =
      '<span class="ds-announcement-text">🎉 You can now back up one server and enjoy 10GB storage for free, forever.</span>' +
      '<a class="ds-announcement-cta" href="https://app.datashelter.tech/auth/register">Create free account</a>' +
      '<button class="ds-announcement-close" type="button" aria-label="Close announcement">✕</button>';
    bar.querySelector('.ds-announcement-close').addEventListener('click', dismissAnnouncement);

    var wrapper = document.querySelector('.main-content-wrapper');
    (wrapper || document.body).insertBefore(bar, wrapper ? wrapper.firstChild : document.body.firstChild);
  }

  function patchFooterLogoLink() {
    var footerLogoLink = document.querySelector('.footer-brand .logo-link');
    if (footerLogoLink) {
      footerLogoLink.setAttribute('href', 'https://datashelter.tech');
    }
  }

  function initialiseSiteChrome() {
    ensureAnnouncementBar();
    patchFooterLogoLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseSiteChrome);
  } else {
    initialiseSiteChrome();
  }
  document.addEventListener('docmd:page-mounted', initialiseSiteChrome);

  window.$crisp = [];
  window.CRISP_WEBSITE_ID = 'f96c76e6-e959-46b4-b085-8ccd1f73027d';
  (function () {
    var script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = 1;
    document.getElementsByTagName('head')[0].appendChild(script);
  })();
})();
