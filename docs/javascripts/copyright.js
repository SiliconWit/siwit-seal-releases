document.addEventListener('DOMContentLoaded', function () {
  var currentYear = new Date().getFullYear();
  var el = document.querySelector('.md-copyright__highlight');
  if (!el) return;
  if (currentYear > 2025) {
    el.innerHTML = el.innerHTML.replace('2025', '2025 - ' + currentYear);
  }
});
