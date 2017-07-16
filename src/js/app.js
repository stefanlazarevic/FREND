const doc = document,
      log = console.log,
      err = console.error,
      warn = console.warn;

/**!
 *  @licence axios v0.16.2 | (c) 2017 by Matt Zabriskie
 **/
import { default as ajax } from '../../node_modules/axios/lib/axios.js';


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      console.log("DOM Ready.");
      (function(){
        const { avatar, avatar_init } = require('./components/avatar.js'),
              { accordion_single, accordion_multiple } = require('./components/accordion.js'),
              { editor } = require('./components/editor.js'),
              { form__loaders, form__init } = require('./components/form_loader.js'),
              { btn__options, options__init } = require('./components/button.js');
        if(avatar) avatar_init(avatar);
        accordion_single.init();
        accordion_multiple.init();
        editor.init();
        if(form__loaders) form__init(form__loaders);
        if(btn__options) options__init(btn__options);
      })();
    }
}
