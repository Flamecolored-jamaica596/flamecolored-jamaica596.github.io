async function loadComponent(id, file) {
    const response = await fetch(file);

    if (response.ok) {
        document.getElementById(id).innerHTML = await response.text();
    }
}

loadComponent("head-placeholder", "components/head.html");
loadComponent("header-placeholder", "components/header.html");
loadComponent("footer-placeholder", "components/footer.html");
