document$.subscribe(function () {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default"
  });

  document.querySelectorAll("pre.mermaid").forEach(function (el) {
    if (el.getAttribute("data-processed") === "true") {
      return;
    }

    mermaid.run({ nodes: [el] });
    el.setAttribute("data-processed", "true");
  });
});
