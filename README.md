# CFSA Referral Program
[![Build Status](https://travis-ci.org/codefordc/cfsa-referral.svg?branch=master)](https://travis-ci.org/codefordc/cfsa-referral)

The [DC Child and Family Services Agency (CFSA)](https://cfsa.dc.gov/page/about-cfsa) is the public child welfare agency in the District of Columbia responsible for protecting child victims and those at risk of abuse and neglect and assisting their families.

There are 3 offices within CFSA: Community Partnerships, Child Protective Services (CPS), and Foster Care. This project focuses on client and case offerings within the Community Partnerships department. The referral program offerings are all voluntary, but have varying eligibility criteria that a client must meet. 

The purpose of this project is to develop an app for case workers to use in the field to determine client eligibility and needs for certain CFSA voluntary programs including housing, educational, and substance abuse services. We aim to use the CFSA program eligibility criteria to build a data entry/decision tree app that would recommend the appropriate CFSA program.

## Getting Started

This app was built with [Create React App](https://github.com/facebookincubator/create-react-app)
For testing framework please see [Jest](https://facebook.github.io/jest/)
For more information on how the code works please reference the README found under the /app directory


* First, [install node.js](https://nodejs.org/en/download/package-manager/), then:

```bash
# Clone this repository
$ git clone https://github.com/codefordc/cfsa-referral.git

# Go into the repository
$ cd cfsa-referral/app

# Install dependencies
$ yarn install

# Run Tests
$ yarn test

# Run the app
$ yarn start
```

For additional documentation, visit our [Google Docs project](https://docs.google.com/document/d/1jhy9-tHQS3dDEudcU8GbCemRszIN-64MXbvwNw-g5mM/edit).
To keep in touch, please join the #cfsa channel in the [Code for DC Slack](https://codefordc.slack.com). 
Our Data Ambassadors are:
Judy Yang,
Michael Kalish,
Aimee Barciauskas. 

## Prototype 

Hosted on Invision, comments and mark-ups are welcome

https://invis.io/2AE4CENGY


## 9.23.17 Hackathon Activity
At the DC Health & Human Services Hackathon on September 23, 2017, the team consulted with the subject matter experts (Brittney and Tyanna) from CFSA. Our clients provided information on the problems and goals of the interactions that case workers have with clients in the field. 

Together, we developed a decision tree of Yes/No questions that case workers should ask their clients in order to determine eligibility and best fit for CFSA's programs. 

We focused on referrals for 6 CFSA programs with various focuses and eligibility criteria: 

 1. Mobile Stabilization Services (MSS)
 2. Parent Education and Support (PESP) 
 3. Project Connect 
 4. Rapid Housing
 5. Transitional Housing 
 6. Referral to Collaborative Agencies 

Further details for each program is provided in the Google Docs project.

----------

We created user flows and mockups using Balsamiq of the proposed app user interface and also worked on the decision tree app. The prototype was built using React and Javascript.
The proposed app would function as follows: 

 - Search by client Name and DOB; Return results from FACES (CFSA
   system);
	 - user selects relevant case or referral;
 - Review case data populated from FACES;
	 - Ability to update information including ward/address, income, family members/household; 
 - Answer key questions: Is there a crisis? 
	 - If Yes, referral to MSS
 - If no, select the need:
	 - Housing
		 - Rapid or Transitional Housing
	 - Parenting
		 - PESP
	 - Substance Abuse
		 - Project Connect
 - If none of the above, then referral to Collab
 - When recommendations are returned, indicate if the family consents to the services.

Wishlist:
1. Data updated/edited during the interaction would be pushed back to FACES.
2. Flags for certain case data - history of participation/issues in programs, parent age <25 is ideal for PESP interventions.
3. Include enrollment capability into the programs from the app.

At the end of the hackathon, we presented our decision tree research, proposed mockup, and a prototype app. The next steps we documented in Github issues.

Volunteers who participated include: 
Laura,
Kate,
Ryan,
Sam,
Christine,
Gabo,
Terry,
Catalina,
Judy (DA),
Michael (DA)
