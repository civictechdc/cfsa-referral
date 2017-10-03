import Polyglot from 'node-polyglot';

const polyglot = new Polyglot();


const en = {
  "TRUE": "Yes",
  "FALSE": "No",
  "FRONT_YARD": "FrontYard",
  "FRONT_PORCH": "FrontPorch",
  "FRONT_DOOR": "FrontDoor",
  "OTHER": "Other",
  "START_OVER": "Start Over",
  "SUBMITTED_ANSWERS": "Submitted Answers",
  "NO_ANSWERS_SUBMITTED": "No answers had been submitted",
  "CALCULATING_ELIGIBILITY": "Please wait while we calculate the eligible programs",
  // QUESTIONS
  "IS_THERE_A_CRISIS": "Is there a crisis?",
  // Parenting
  "RISK_OF_REMOVAL": "Is there a risk of removal?",
  "IN_HOME_CASE": "Is it an in-home case?",
  // Substance use
  "SUBSTANCE_REASON_FOR_REMOVAL": "Is substance abuse the reason for removal?",
  "CURRENT_USE_OR_RELAPSE": "Is the parent currently using or at risk of relapse?",
  "SUBSTANCE_ABUSE_IMPACT_PARENTING": "Does substance abuse impact parenting?",
  "SUBSTANCE_BARRIER_FOR_REUNIFICATION": "Is substance abuse a barrer for reunficiation?",
  // Housing
  "STABLE_INCOME": "Is there a stable source of income such as employment, SSI, TANF, or child support?",
  "HOMELESS_OR_UNSTABLE_HOUSING": "Is the client homeless or living in unstable housing?",
  // Step-down collaborative support
  // TODO(aimee): WARD is skipped in the decision tree (data.json) because not
  // sure what impact it has on referrals.
  "WARD": "What ward are they in?",
  "CASE_STATUS": "What is the case status?",
  // PROGRAMS
  "PESP": "PESP",
  "PROJECT_CONNECT": "Project Connect",
  "RAPID_HOUSING": "Rapid Housing",
  "TRANSITIONAL_HOUSING": "Transitional Housing",
  "COLLABORATIVE": "Collaborative",
  "MSS": "Mobile Stabilization Services",
  "LOADING": "Loading..."
}

const es = {
  "true": "Si",
  "false": "No",
  "START_OVER": "Reiniciar Sesíon",
  "FRONT_YARD": "Antejardín",
  "FRONT_PORCH": "Jardín Trasero",
  "FRONT_DOOR": "Puerta Prinicipal",
  "OTHER": "otro",
  "START_OVER": "Reiniciar Sesíon",
  "SUBMITTED_ANSWERS": "Repuestas Enviadas",
  "NO_ANSWERS_SUBMITTED": "Usted no ha enviado ninguna respuesta",
  "CALCULATING_ELIGIBILITY": "Por favor, espere mientras averiguamos para cuáles programas califica usted.",
  // QUESTIONS
  "IS_THERE_A_CRISIS": "Hay un situación de crisis?",
  // Parenting
  "RISK_OF_REMOVAL": "Hay un riesgo de la remoción de un menor?",
  "IN_HOME_CASE": "Es un caso en el hogar?",
  // Substance use
  "SUBSTANCE_REASON_FOR_REMOVAL": "Es abuso de substancias un motivo de la remoción?",
  "CURRENT_USE_OR_RELAPSE": "Un padre está actualmente consumiendo o corriendo riesgo de recaída?",
  "SUBSTANCE_ABUSE_IMPACT_PARENTING": "Es abuso de substancias impactando su competencia como padre?",
  "SUBSTANCE_BARRIER_FOR_REUNIFICATION": "Is substance abuse a barrer for reunficiation?",
  // Housing
  "STABLE_INCOME": "Is there a stable source of income such as employment, SSI, TANF, or child support?",
  "HOMELESS_OR_UNSTABLE_HOUSING": "Is the client homeless or living in unstable housing?",
  // Step-down collaborative support
  // TODO(aimee): WARD is skipped in the decision tree (data.json) because not
  // sure what impact it has on referrals.
  "WARD": "What ward are they in?",
  "CASE_STATUS": "What is the case status?",
  // PROGRAMS
  "PESP": "PESP",
  "PROJECT_CONNECT": "Project Connect",
  "RAPID_HOUSING": "Rapid Housing",
  "TRANSITIONAL_HOUSING": "Transitional Housing",
  "COLLABORATIVE": "Collaborative",
  "MSS": "Mobile Stabilization Services",
  "LOADING": "Loading..."
}

polyglot.extend(en);
// or

export const setLanguage = (language) => {
  polyglot.extend(language === 'en' ? en : es);
}



export default polyglot;
