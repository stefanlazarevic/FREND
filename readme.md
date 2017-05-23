# FrontEnd Startup template (v1.2.0)
## Technologies
- Jade
- Sass
- Javascript [ES6]
- FontAwesome (Default icon set)

If you want to contribute to this repository and fork up building great starting template clone this repo using git command:
```
git clone https://github.com/stefanlazarevic/template.git
```
You want to use this template for your new project? Download zip file from Github at top right corner.
## Setting up
After you get template cd inside and run following command
```
npm install
```
When everything is done run ```gulp watch``` from terminal and start building your app!

------

### Version 1.2.0 Update
Implemented browserify and babelify for ES6 modules.

Bugs: Livereload did not work well so it has been removed from scripts task.

Use standard refresh if you are working with javascript.  

------

### Version 1.1.0 Update
Jade folder structure changed.
  * Index.jade and pages folder compiles only with gulp into the root dist folder.
  * Help snippet -> Use this snippet to start creating new jade page.
  ```
  extends ../2-layouts/app.jade

  //- Change in variables.jade file
  block title
    title About us

  block content
    main(role="main").container
  ```

Sass folder structure changed.

------

Contact: https://www.linkedin.com/in/stefan-lazarevi%C4%87-630520128/

Contact: stefanlazarevic.contact@gmail.com
