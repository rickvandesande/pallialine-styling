window.addEventListener("DOMContentLoaded", () => {
  const contentScope = document.querySelector(".detail-content-container");
  const linkList = contentScope.querySelectorAll("a");
  const extensies = ["pdf", "docx", "xlsx", "pptx", "xls", "doc", "zip"];
  linkList.forEach((link) => {
    const linkTarget = link.getAttribute("href").toLowerCase();
    const download = extensies.some((ext) => linkTarget.endsWith("." + ext));
    if (download) {
      link.classList.add("download-link");
    } else {
      const linkTarget = link.getAttribute("target");
      if (linkTarget === "_blank") {
        link.classList.add("external-link");
      }
    }
  });
});
