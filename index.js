let activePage = "home";

function hidePreviousPage(id) {
  const el = document.getElementById(id);
  el.style.display = "none";
}

function showPage(pageId) {
  hidePreviousPage(activePage);
  document.getElementById(pageId).style.display = "block";
  activePage = pageId;
}
