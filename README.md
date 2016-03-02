# &lt;slick-it&gt; WebComponent

## Running on a Docker container

### Challenges

* We have to use a specific user such as `dev` or `homolog` because the user `root` can't run `bower install`
* We need to initially install things using user `root`

### Building image

    cd slick-it
    docker pull node:argon-slim
    docker build -t parana/slick-it .

### Run the container

    docker run -i -t --name slick_it parana/slick-it

## Description 

Render a Slick It Carousel.

This allows the server to cache HTML fragments containing dates and lets the browser choose how to localize the displayed time according to the user's preferences. 
For example, the server may have cached the following generated markup:

```html
<div is="slick-it" path="/img" slides="26, 76, 18, 37" provider="local">
</div>
```

Generate this HTML code.

```html
<div id="my-carousel" data-slick='{"slidesToShow": 2, "slidesToScroll": 1}' is="slick-it" path="/img" slides="26, 76, 18, 37" provider="local">
  <div><h3>1</h3><img src="/img/slide26.png"></div>
  <div><h3>2</h3><img src="/img/slide76.png"></div>
  <div><h3>3</h3><img src="/img/slide18.png"></div>
  <div><h3>4</h3><img src="/img/slide37.png"></div>
</div>
<script>
  $('div#my-carousel').slick()
</script>
```

provider can be "wordpress" too.

## Installation

Available on [Bower](http://bower.io) as **slick-it**.

```
$ bower install slick-it
```

This component is built on the upcoming [Web Component](http://webcomponents.org/) stack. 
Specifically, it requires a feature called [Custom Elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/).

You'll need to use a polyfill to get this feature today. Either the [Polymer](http://www.polymer-project.org/) or [X-Tag](http://www.x-tags.org/) frameworks supply a polyfill, or you can install the standalone [CustomElements](https://github.com/webcomponents/webcomponentsjs) polyfill.

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.21/CustomElements.min.js"></script>
```
There is a copy of this file on this repository, for convenience.

## Usage

This component provides one custom subtype of the standard HTML `<div>` element. 
All custom time elements MUST have path, slides and provider attributes.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 6.1+ ✔ |

## See Also

[http://kenwheeler.github.io/slick/](http://kenwheeler.github.io/slick/)
