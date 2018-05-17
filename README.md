# Broccoli Sass Modular

This is an extremely simple plugin to allow transpiling sass sources into CSS.

This plugin is intended for use when writing CSS which is intended to be imported into webpack via require statements. Requiring CSS this way has a fundamental danger, which is that the source order of CSS files, which has side effects, can change when the js dependency structure changes. SCSS offers a great solution to this problem by allowing the user (or perhaps forcing the user with a linter) to put all styles inside a single top level selector which selects for the component which the styling should be constricted to.

The most important trade off right now is that this leaves no central location in which application wide variables, mixins, etc. might be defined. However having access to SASS syntax nesting is strictly better than not.

Source maps are also not supported yet.
