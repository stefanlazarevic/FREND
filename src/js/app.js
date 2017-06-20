const doc = document,
      log = console.log,
      err = console.error,
      warn = console.warn;

const { avatar, avatar_init } = require('./components/avatar.js');
const { accordion__single, accordion__multiple, accordion__init } = require('./components/accordion.js');
const { editor, editor__init } = require('./components/code.js');
/**!
 *  @licence axios v0.16.2 | (c) 2017 by Matt Zabriskie
 **/
import { default as ajax } from '../../node_modules/axios/lib/axios.js';

if(avatar) avatar_init(avatar);
if(accordion__single) accordion__init(accordion__single);
if(accordion__multiple) accordion__init(accordion__multiple, 'multiple');
if(editor) editor__init(editor);
