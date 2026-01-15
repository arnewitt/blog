// Helper function to create elements with optional content and attributes
// Set useTextContent to true for plain text (safer, prevents XSS)
function createElement(tag, content = "", attributes = {}, useTextContent = false) {
  const el = document.createElement(tag);
  if (useTextContent) {
    el.textContent = content;
  } else {
    el.innerHTML = content;
  }
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  return el;
}

// Function to add skip-to-content link for keyboard navigation
function addSkipLink() {
  const skipLink = createElement("a", "Skip to main content", {
    href: "#app",
    class: "skip-link"
  }, true);
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// Function to set up ARIA landmarks on the app container
function setupAriaLandmarks() {
  const app = document.getElementById("app");
  if (app) {
    app.setAttribute("role", "main");
    app.setAttribute("tabindex", "-1"); // Allow focus for skip link
  }
}

// Function to add top navigation bar with avatar image
function addTopNavigationBar() {
  // Add accessibility features first
  addSkipLink();

  const imageElement = document.querySelector('img[alt="Arne Wittmaack"]');
  if (!imageElement) return; // Check if image element exists

  const linksContainer = createElement("nav", "", { class: "top-links", role: "navigation", "aria-label": "Main navigation" });
  const homeLink = createElement("a", "home", { href: "index.html" }, true);
  const separator = document.createTextNode(" / ");
  const blogLink = createElement("a", "blog", { href: "overview.html" }, true);

  linksContainer.appendChild(homeLink);
  linksContainer.appendChild(separator);
  linksContainer.appendChild(blogLink);

  // Insert links container and horizontal divider before the image element
  imageElement.parentNode.insertBefore(linksContainer, imageElement);
  const horizontalLine = createElement("hr", "", { class: "top-divider" });
  imageElement.parentNode.insertBefore(horizontalLine, imageElement);

  // Set up ARIA landmarks after DOM manipulation
  setupAriaLandmarks();
}

// Function to add top navigation bar without using an image element for the avatar
function addTopNavigationBarWithoutImage() {
  // Add skip link first
  addSkipLink();

  const app = document.getElementById("app");
  if (!app) return; // Check if the app element exists

  const linksContainer = createElement("nav", "", { class: "top-links", role: "navigation", "aria-label": "Main navigation" });
  const homeLink = createElement("a", "home", { href: "index.html" }, true);
  const separator = document.createTextNode(" / ");
  const blogLink = createElement("a", "blog", { href: "overview.html" }, true);

  linksContainer.appendChild(homeLink);
  linksContainer.appendChild(separator);
  linksContainer.appendChild(blogLink);

  // Insert links container and horizontal divider at the top of the app element
  app.insertBefore(linksContainer, app.firstChild);
  const horizontalLine = createElement("hr", "", { class: "top-divider" });
  app.insertBefore(horizontalLine, linksContainer.nextSibling);

  // Set up ARIA landmarks after DOM manipulation
  setupAriaLandmarks();
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