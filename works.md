---
title: Works
layout: defaulthome
permalink: /works/

images:
  - image_path: /images/stock1.jpeg
    title: blank
  - image_path: /images/stock2.jpeg
    title: blank
  - image_path: /images/stock3.jpeg
    title: blank
  - image_path: /images/stock4.jpeg
    title: blank
  - image_path: /images/stock5.jpeg
    title: blank
  - image_path: /images/stock6.jpeg
    title: blank
  - image_path: /images/stock7.jpeg
    title: blank
  - image_path: /images/stock8.jpeg
    title: blank
  - image_path: /images/stock9.jpeg
    title: blank
---

<div class="container">
  <ul class="photo-gallery">
    {% for image in page.images %}
      <li>
        <img src="{{ image.image_path }}" alt="{{ image.title }}">
        <p>{{ image.title }}</p>
      </li>
    {% endfor %}
  </ul>
</div>

<!-- {% for post in site.posts %}
  <h3><a href="{{post.url | prepend:site.baseurl}}">{{post.title}}</a></h3>
{% endfor %} -->
