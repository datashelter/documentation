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

    var existing = document.getElementById('ds-announcement-bar');
    if (existing) {
      return;
    }

    var bar = document.createElement('div');
    bar.id = 'ds-announcement-bar';
    bar.className = 'ds-announcement-bar';
    bar.innerHTML =
      '<span class="ds-announcement-text">🎉 You can now back up one server and enjoy 10GB storage for free, forever.</span>' +
      '<a class="ds-announcement-cta" href="https://app.datashelter.tech/auth/register">Create free account</a>' +
      '<button class="ds-announcement-close" type="button" aria-label="Close announcement">✕</button>';

    var closeButton = bar.querySelector('.ds-announcement-close');
    if (closeButton) {
      closeButton.addEventListener('click', dismissAnnouncement);
    }

    var wrapper = document.querySelector('.main-content-wrapper');
    if (wrapper) {
      wrapper.insertBefore(bar, wrapper.firstChild);
      return;
    }

    document.body.insertBefore(bar, document.body.firstChild);
  }

  function patchFooterLogoLink() {
    var footerLogoLink = document.querySelector('.footer-brand .logo-link');
    if (!footerLogoLink) {
      return;
    }
    footerLogoLink.setAttribute('href', 'https://datashelter.tech');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ensureAnnouncementBar();
      patchFooterLogoLink();
    });
  } else {
    ensureAnnouncementBar();
    patchFooterLogoLink();
  }

  document.addEventListener('docmd:page-mounted', function () {
    ensureAnnouncementBar();
    patchFooterLogoLink();
  });
})();
