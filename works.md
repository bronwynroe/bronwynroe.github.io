---
title: Works
layout: defaulthome
permalink: /works/

images:
  - image_path: /images/stock1.jpeg
    title: stock1
    description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  - image_path: /images/stock2.jpeg
    title: stock2
  - image_path: /images/stock3.jpeg
    title: stock3
  - image_path: /images/stock4.jpeg
    title: stock4
  - image_path: /images/stock5.jpeg
    title: stock5
  - image_path: /images/stock6.jpeg
    title: stock6
---


<ul class="photo-gallery">
  {% for image in page.images %}
    <li>
      <img src="{{ image.image_path }}" alt="{{ image.title }}">
      <h4>{{ image.title }}</h4>
      <p>{{ image.description }}</p>
    </li>
  {% endfor %}
</ul>

<!-- {% for post in site.posts %}
  <h3><a href="{{post.url | prepend:site.baseurl}}">{{post.title}}</a></h3>
{% endfor %} -->
