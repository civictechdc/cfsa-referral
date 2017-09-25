import Polyglot from 'node-polyglot';

const polyglot = new Polyglot();


const en = {
  "YES": "Yes",
  "NO": "No",
  "START_OVER": "Start Over",
  "OPEN_CFSA_CASE": "Is there an open CFSA case?",
  "IS_CHILD_EMANCIPATED": "Is the child emancipated?",
  "BETWEEN_18_AND_23": "Is the parent between the ages 18 and 23?",
  "BETWEEN_21_AND_24": "Is the parent between the ages 21 and 24?",
  "PARENT_SUBSTANCE_ABUSE": "Does the parent have substance abuse issues?",
  "CHILD_IN_AFTERCARE": "Is the child enrolled in Aftercare?",
  "TRANSITIONAL_HOUSING": "Transitional Housing (Youth)",
  "YOUTH_AFTERCARE": "Youth Aftercare",
  "SUBMITTED_ANSWERS": "Submitted Answers",
  "NO_ANSWERS_SUBMITTED": "No answers had been submitted",
  "CALCULATING_ELIGIBILITY": "Please wiat while we calculate the eligible programs",
  "LOADING": "Loading..."
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