---
title: Works
layout: defaulthome
permalink: /works/

images:
  - image_path: /images/stock1.jpeg
    title: painting1
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  - image_path: /images/stock2.jpeg
    title: painting2
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  - image_path: /images/stock3.jpeg
    title: painting3
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  - image_path: /images/stock4.jpeg
    title: painting4
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  - image_path: /images/stock5.jpeg
    title: painting5
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  - image_path: /images/stock6.jpeg
    title: painting6
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
---

<div class="photo-gallery">
  {% for image in page.images %}
    <div class="photo">
      <img src="{{ image.image_path }}" alt="{{ image.title }}">
      <div class="content">
        <h2>{{ image.title }}</h2>
        <p>{{ image.description }}</p>
      </div>
      <br style="clear:both">
    </div>
  {% endfor %}
</div>

<!-- {% for post in site.posts %}
  <h3><a href="{{post.url | prepend:site.baseurl}}">{{post.title}}</a></h3>
{% endfor %} -->
