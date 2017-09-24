import Polyglot from 'node-polyglot';

const polyglot = new Polyglot();


const en = {
  "true": "Yes",
  "false": "No",
  "START_OVER": "Start Over"
}

const es = {
  "true": "Si",
  "false": "No",
  "START_OVER": "Empieza"
}

polyglot.extend(en);
// or

export const setLanguage = (language) => {
  polyglot.extend(language === 'en' ? en : es);
}



export default polyglot;