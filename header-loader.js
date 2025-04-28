class SiteHeader extends HTMLElement {
    connectedCallback() {
      fetch('header.html')
        .then(r => r.text())
        .then(html => this.innerHTML = html);
    }
  }
  customElements.define('site-header', SiteHeader);
  