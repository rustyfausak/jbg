const mobileMenuSelector = '#mobile-menu';
function openMobileMenu() {
  document.querySelector(mobileMenuSelector).classList.remove('hidden');
}
function closeMobileMenu() {
  document.querySelector(mobileMenuSelector).classList.add('hidden');
}
function handleJoinIframeLoad() {
  document.querySelector('#join-loading-spinner-wrapper').classList.add('hidden');
}
