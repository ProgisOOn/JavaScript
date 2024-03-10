let {hi, bye} = await import('./say.js');
let {default: say} = await import('./say.js');

hi();
bye();

say();