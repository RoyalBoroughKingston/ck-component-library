# Ayup frontend boilerplate

This is going to be used as a base for front end projects. In this boilerplate it includes SASS with the SCSS syntax, a auto hot reloading live server provided by browersync, copying of assets into a dist folder. It also uses PostHTML with the 'includes' plugin allowing you to separate your HTML into partials for making maintainable code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

Firstly run to install all of the dependencies:

```
npm install
```

To run the local development environment use:

```
npm run watch
```
Using browersync for auto hot reloading of file this will open up a new window in your browser.


## Grid system

This boilerplate uses a 12 col grid system provided by [flexicution](http://keenanpayne.com/flexicution/) the documention on this site will explain how to use it! 😀

## Deployment

To produce production files use this will output everything into the dist folder

```
npm run production
```

## Built With

- [laravel mix](https://github.com/JeffreyWay/laravel-mix) - The build tool used
- [Post HTML include](https://github.com/posthtml/posthtml-include) - Used for html partials

## Authors

- [Elliot Morris](https://github.com/elliotrpmorris/) for [Ayup Digital](https://ayup.agency/)

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details.
