---
layout: default
title: Contact
permalink: /contact.html
---

<section id="contact">
  <div class="contact-header">
    <h1>Contact Me</h1>
    <p class="intro">Have a question or want to collaborate? Pick your favorite way to reach out:</p>
  </div>

  <div class="cards">
    <a class="card email" href="mailto:ahm531@proton.me">
      <span class="icon-badge" aria-hidden="true">
        <img src="{{ '/assets/images/email.png' | relative_url }}" alt="" />
      </span>
      <h3>Email</h3>
    </a>

    <a class="card linkedin" href="https://linkedin.com/in/ahm531" target="_blank" rel="noopener">
      <span class="icon-badge" aria-hidden="true">
        <img src="{{ '/assets/images/linkedin.png' | relative_url }}" alt="" />
      </span>
      <h3>LinkedIn</h3>
    </a>

    <a class="card github" href="https://github.com/ahm531" target="_blank" rel="noopener">
      <span class="icon-badge" aria-hidden="true">
        <img src="{{ '/assets/images/github.svg' | relative_url }}" alt="" />
      </span>
      <h3>GitHub</h3>
    </a>

    <a class="card discord" href="https://discord.com/invite/Gyzx3ukUw8" target="_blank" rel="noopener">
      <span class="icon-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
          <title>Discord</title>
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
        </svg>
      </span>
      <h3>Discord</h3>
    </a>
  </div>

  <div class="map">
    <iframe
      src="https://maps.google.com/maps?q=Zum+Gro%C3%9Fen+Windkanal+2,+12489+Berlin,+Germany&z=15&output=embed"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</section>

<style>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background: #f5f7fa;
    color: #333;
  }

  #contact {
    padding: 2rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  #contact h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 0.35rem;
  }

  #contact p.intro {
    margin-bottom: 0;
    color: #555;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: center;
    gap: 0.9rem;
    max-width: 720px;
    margin: 0 auto;
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.1rem;
    background: #fff;
    border-radius: 24px;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
    min-height: 96px;
    padding: 1rem 1.2rem;
    text-align: left;
    text-decoration: none;
    color: inherit;
    transition: transform .2s, box-shadow .2s;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);
  }

  .icon-badge {
    width: 56px;
    height: 56px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    margin-bottom: 0;
    flex: 0 0 56px;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
    color: #0f172a;
  }

  .icon-badge img,
  .icon-badge svg {
    width: 26px;
    height: 26px;
    display: block;
  }

  .icon-badge svg {
    fill: currentColor;
  }

  .card.email .icon-badge { background: linear-gradient(135deg, #ffefef, #d44638); color: #fff; }
  .card.linkedin .icon-badge { background: linear-gradient(135deg, #d8ecff, #0a66c2); color: #fff; }
  .card.github .icon-badge { background: linear-gradient(135deg, #edf0f3, #24292f); color: #fff; }
  .card.discord .icon-badge { background: linear-gradient(135deg, #ecebff, #5865f2); color: #fff; }

  .card > :not(.icon-badge) {
    min-width: 0;
  }

  .card h3 {
    margin: 0 0 0.2rem;
    font-size: 1.08rem;
  }

  .map {
    margin-top: 2rem;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  @media (max-width: 720px) {
    .cards {
      grid-template-columns: 1fr;
      max-width: none;
    }

    .card {
      padding: 0.95rem 0.95rem;
    }
  }

  .map iframe {
    width: 100%;
    height: 300px;
    border: 0;
  }
</style>
