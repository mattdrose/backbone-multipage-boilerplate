# Backbone Multipage Boilerplate

## Why another backbone boilerplate?

No reason really. I just wanted to share my setup.

## What it uses

* [RequireJs](http://requirejs.org/)
* [BackboneJs](http://backbonejs.org/)
* [Underscore](http://underscorejs.org/)
* [jQuery](http://jquery.com/)

## Requirements

* [Bower](http://bower.io/) - We need this to manage our libraries
* [Node](http://nodejs.org/) - We need this to concat and minify our build using [r.js](http://requirejs.org/docs/optimization.html)

## Setup

Clone this repository

Go into the ``js/`` directory
```
cd backbone-multipage-boilerplate
```

Install the dependencies
```
bower install
```

Create your build
```
./build.sh
```

## Load the goodies

Include this script tag in your page. 

```html
<script id="js-main" data-page="js/dist/home" src="js/dist/main.js"></script>
```

- ``src`` refers to your global javascript.
- ``data-page`` refers to your page specific javascript.

## Adding a new page

Add this to the ``modules`` in ``js/build/build.js``
```
{
	name: 'name-of-page',
	exclude: ['main']
}
```

Create a corresponding javascript file in the ``js/src/`` directory. In this case, ``js/src/name-of-page.js``