# PhishingEvaluationGame

## Introduction

Overview of the project's goal: A web-based game to test and improve the deception detection abilities of players, specifically in identifying phishing emails.

## Game Concept

Objective: Players evaluate a series of emails to determine if they are phishing or legitimate and whether they were generated by an LLM or a human.
Target Audience: Primarily undergraduates and other members of the Vanderbilt community.

## Game Mechanics

Players are presented with a mix of emails, some generated by GPT and others from VUIT’s real dataset of phishing emails. Users will be timed per email and will be scored per “stage” according to how many emails they can accurately detect in the allotted time for the given stage. 

Each email must be evaluated on two criteria:
LLM or Human: Determining the source of the email.
Phishing Email or Real Email: Identifying the nature of the email.

## Game Development

Platform: The game will be web-hosted, accessible via a link. Will still be a React app (which is what we currently have)
We’ll adjust what we currently have so that this game will be separate from what Jess, Carlos and Max are doing with the voice attacks, chatbot, etc. 
Focus will be on Email Selection: Careful curation of the email dataset to ensure a balanced and representative mix of real and artificially generated emails.
Data Collection from Game

Demographic Information: Players will provide demographic data to enable a comprehensive analysis of deception detection abilities across different groups.
This will give us really interesting data for future publications
Do students (gen Z) perform better than other members of the Vanderbilt community? What groups are better at detecting LLM vs human? 
Response Tracking: Recording players' evaluations of each email for further analysis.

## Other Considerations

IRB Approval: 
All team members must get certified to do human studies research. Here is the link: https://www.vumc.org/irb/citi

Data Privacy: Properly handling and storing user information



# How to Run 

1. Create virtual environment 

` python3 -m venv myvenv `

2. Activate virtual environment 

` source myvenv/bin/activate `

3. Install dependencies 

` pip install -r requirements.txt `

4. Open two terminals from root directory 

Terminal 1 (to start React app): 

` cd frontend `

` npm install `

` npm start `


Terminal 2 (to start the database)

` python run.py `