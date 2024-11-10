// Helper function to create elements with optional content and attributes
function createElement(tag, content = "", attributes = {}) {
  const el = document.createElement(tag);
  el.innerHTML = content;
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  return el;
}

// Function to add top navigation bar with avatar image
function addTopNavigationBar() {
  const imageElement = document.querySelector('img[alt="Arne Wittmaack"]');
  if (!imageElement) return; // Check if image element exists

  const linksContainer = createElement("p", "", { class: "top-links" });
  const homeLink = createElement("a", "home", { href: "index.html" });
  const separator = document.createTextNode(" / ");
  const blogLink = createElement("a", "blog", { href: "overview.html" });

  linksContainer.appendChild(homeLink);
  linksContainer.appendChild(separator);
  linksContainer.appendChild(blogLink);

  // Insert links container and horizontal divider before the image element
  imageElement.parentNode.insertBefore(linksContainer, imageElement);
  const horizontalLine = createElement("hr", "", { class: "top-divider" });
  imageElement.parentNode.insertBefore(horizontalLine, imageElement);
}

// Function to add top navigation bar without using an image element for the avatar
function addTopNavigationBarWithoutImage() {
  const app = document.getElementById("app");
  if (!app) return; // Check if the app element exists

  const linksContainer = createElement("p", "", { class: "top-links" });
  const homeLink = createElement("a", "home", { href: "index.html" });
  const separator = document.createTextNode(" / ");
  const blogLink = createElement("a", "blog", { href: "overview.html" });

  linksContainer.appendChild(homeLink);
  linksContainer.appendChild(separator);
  linksContainer.appendChild(blogLink);

  // Insert links container and horizontal divider at the top of the app element
  app.insertBefore(linksContainer, app.firstChild);
  const horizontalLine = createElement("hr", "", { class: "top-divider" });
  app.insertBefore(horizontalLine, linksContainer.nextSibling);
}

// Function to add social icons with a divider
function addSocialIcons(container) {
  if (!container) return; // Ensure container exists

  const divider = createElement("hr", "", { class: "section-divider" });
  container.appendChild(divider);

  const socialContainer = createElement("div", "", { class: "social-icons" });
  const linkedinIcon = createElement("a", '<i class="fa fa-linkedin-square"></i>', {
    href: "https://linkedin.com/in/arnewittmaack",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  });
  const githubIcon = createElement("a", '<i class="fa fa-github-square"></i>', {
    href: "https://github.com/arnewitt",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub"
  });

  socialContainer.appendChild(linkedinIcon);
  socialContainer.appendChild(githubIcon);
  container.appendChild(socialContainer);
}