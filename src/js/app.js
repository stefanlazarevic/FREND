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

      const { avatar, avatar_init } = require('./components/avatar.js');
      const { accordion__single, accordion__multiple, accordion__init } = require('./components/accordion.js');
      const { editors, editors__init } = require('./components/editor.js');
      const { form__loaders, form__init } = require('./components/form_loader.js');
      const { btn__options, options__init } = require('./components/button.js');
      const { convertor, convert, convertor_init } = require('./components/valute_convertor.js');

      if(avatar) avatar_init(avatar);
      if(accordion__single) accordion__init(accordion__single);
      if(accordion__multiple) accordion__init(accordion__multiple, 'multiple');
      if(editors) editors__init(editors);
      if(form__loaders) form__init(form__loaders);
      if(btn__options) options__init(btn__options);
      if(convertor) convertor_init(ajax);

      console.log(convert('eur', 'dol'));
    }
}
