

# exmaple for create project
ng new http-app

# example for create component
cd http-app
ng g component dhl
ng g component bpost

# create dhldetail under dhl
ng g component dhldetail --flat
# create bpostdetail under bpost
ng g component bpostdetail --flat

# create
# example for create service

ng g service rest --flat



# add commit push
git add . --all
git commit -a -m "commit message"
git push

# HttpApp

This project was generated with @angular/cli 1.1.1

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
