Search
Search 8,000+ tutorials
freeCodeCamp.org
Menu
frostydknight's avatar
Account Settings for frostydknight
Username
frostydknight

Name
Christopher Magee
Location
Picture
https://avatars1.githubusercontent.com/u/28870605?v=4
About
I'm a sophomore in college learning to code in order to better prepare myself for a future career. 
Night Mode
Campfire Mode
This adds the pleasant sound of acoustic guitar throughout the website. You'll get musical feedback as you type in the editor, complete challenges, claim certifications, and more.
Privacy Settings
The settings in this section enable you to control what is shown on your freeCodeCamp public portfolio.

My profile
Your certifications will be disabled, if set to private.
My name
Your name will not appear on your certifications, if this is set to private.
My location
My about
My points
My heatmap
My certifications
Your certifications will be disabled, if set to private.
My portfolio
My timeline
My donations
To see what data we hold on your account, click the "Download your data" button below

Email Settings
Current Email
frostydknight@gmail.com

New Email
Confirm New Email
Send me Quincy's weekly email
Your Internet Presence
GitHub
https://github.com/frostydknight
LinkedIn
https://www.linkedin.com/in/christopher-magee-289788169/
Twitter
https://twitter.com/user-name
Personal Website
https://example.com
Portfolio Settings
Share your non-freeCodeCamp projects, articles or accepted pull requests.

Academic Honesty Policy
Before you can claim a verified certification, you must accept our Academic Honesty Pledge, which reads:

"I understand that plagiarism means copying someone else’s work and presenting the work as if it were my own, without clearly attributing the original author."

"I understand that plagiarism is an act of intellectual dishonesty, and that people usually get kicked out of university or fired from their jobs if they get caught plagiarizing."

"Aside from using open source libraries such as jQuery and Bootstrap, and short snippets of code which are clearly attributed to their original author, 100% of the code in my projects was written by me, or along with another person going through the freeCodeCamp curriculum with whom I was pair programming in real time."

"I pledge that I did not plagiarize any of my freeCodeCamp.org work. I understand that freeCodeCamp.org’s team will audit my projects to confirm this."

In the situations where we discover instances of unambiguous plagiarism, we will replace the person in question’s certification with a message that "Upon review, this account has been flagged for academic dishonesty."

As an academic institution that grants achievement-based certifications, we take academic honesty very seriously. If you have any questions about this policy, or suspect that someone has violated it, you can email team@freecodecamp.org and we will investigate.



Certifications
Responsive Web Design
Project Name	Solution
Build a Survey Form	
Build a Tribute Page	
Build a Technical Documentation Page	
Build a Product Landing Page	
Build a Personal Portfolio Webpage	
JavaScript Algorithms and Data Structures
Project Name	Solution
Palindrome Checker	
Roman Numeral Converter	
Caesars Cipher	
Telephone Number Validator	
Cash Register	
Front End Development Libraries
Project Name	Solution
Build a Random Quote Machine	
Build a Markdown Previewer	
Build a Drum Machine	
Build a JavaScript Calculator	
Build a 25 + 5 Clock	
Data Visualization
Project Name	Solution
Visualize Data with a Bar Chart	
Visualize Data with a Scatterplot Graph	
Visualize Data with a Heat Map	
Visualize Data with a Choropleth Map	
Visualize Data with a Treemap Diagram	
Back End Development and APIs
Project Name	Solution
Timestamp Microservice	
Request Header Parser Microservice	
URL Shortener Microservice	
Exercise Tracker	
File Metadata Microservice	
Quality Assurance
Project Name	Solution
Metric-Imperial Converter	
Issue Tracker	
Personal Library	
Sudoku Solver	
American British Translator	
Scientific Computing with Python
Project Name	Solution
Arithmetic Formatter	
Time Calculator	
Budget App	
Polygon Area Calculator	
Probability Calculator	
Data Analysis with Python
Project Name	Solution
Mean-Variance-Standard Deviation Calculator	
Demographic Data Analyzer	
Medical Data Visualizer	
Page View Time Series Visualizer	
Sea Level Predictor	
Information Security
Project Name	Solution
Stock Price Checker	
Anonymous Message Board	
Port Scanner	
SHA-1 Password Cracker	
Secure Real Time Multiplayer Game	
Machine Learning with Python
Project Name	Solution
Rock Paper Scissors	
Cat and Dog Image Classifier	
Book Recommendation Engine using KNN	
Linear Regression Health Costs Calculator	
Neural Network SMS Text Classifier	
Legacy Certifications
Legacy Full Stack Certification
Once you've earned the following freeCodeCamp certifications, you'll be able to claim the Legacy Full Stack Certification:

Responsive Web Design
JavaScript Algorithms and Data Structures
Front End Development Libraries
Data Visualization
Back End Development and APIs
Legacy Information Security and Quality Assurance
Legacy Front End
Project Name	Solution
Build a Personal Portfolio Webpage	
Build a Random Quote Machine	
Build a 25 + 5 Clock	
Build a JavaScript Calculator	
Show the Local Weather	
Use the TwitchTV JSON API	
Build a Tribute Page	
Build a Wikipedia Viewer	
Build a Tic Tac Toe Game	
Build a Simon Game	
Legacy Back End
Project Name	Solution
Timestamp Microservice	
Request Header Parser Microservice	
URL Shortener Microservice	
Image Search Abstraction Layer	
File Metadata Microservice	
Build a Voting App	
Build a Nightlife Coordination App	
Chart the Stock Market	
Manage a Book Trading Club	
Build a Pinterest Clone	
Legacy Data Visualization
Project Name	Solution
Build a Markdown Previewer	
Build a freeCodeCamp Forum Homepage	
Build a Recipe Box	
Build the Game of Life	
Build a Roguelike Dungeon Crawler Game	
Visualize Data with a Bar Chart	
Visualize Data with a Scatterplot Graph	
Visualize Data with a Heat Map	
Show National Contiguity with a Force Directed Graph	
Map Data Across the Globe	
Legacy Information Security and Quality Assurance
Project Name	Solution
Metric-Imperial Converter	
Issue Tracker	
Personal Library	
Stock Price Checker	
Anonymous Message Board	
Danger Zone
Please be careful. Changes in this section are permanent.

freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit organization (United States Federal Tax Identification Number: 82-0779546)

Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.

Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.

You can make a tax-deductible donation here.

Trending Guides
CSS Vertical Align
JavaScript for loop
Google Doodle Games
Excel Text Function
What is a Hyperlink?
SQL Update Statement
CSS Background Image
What is about:blank?
CSS Background Color
Basic HTML5 Template
CSS Border
SQL Queries
HTML <a> tag
HTML Padding
What is Coding?
Insert Into SQL
Python for loop
Free Coding Games
If Statement Excel
Alter Table in SQL
Row vs Column in Excel
Remove Activate Windows
Type the Not Equal Sign
Google Docs Voice Typing
Python if else Statement
How to Screenshot on Mac
SQL Where Clause Examples
Access Clipboard in Android
JavaScript if-else & if-then
Clear Browser Search History
About
Alumni Network
Open Source
Shop
Support
Sponsors
Academic Honesty
Code of Conduct
Privacy Policy
Terms of Service
Copyright Policy
×Close
Solution for Cash Register
JS
function checkCashRegister(price, cash, cid) {
  let remChange = cash - price;
  const processCID = JSON.parse(JSON.stringify(cid))
  const beginCID = JSON.parse(JSON.stringify(cid))
  let isRunning = true
  let status = "OPEN";
  let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  while (isRunning) {
    remChange = remChange.toFixed(2)
    switch (true) {
      case remChange >= 100:
        if(processCID[8][1] >= 100) {
          change[8][1] += 100
          processCID[8][1] -= 100
          remChange -= 100
          break
        }
      case remChange >= 20:
        if(processCID[7][1] >= 20) {
          change[7][1] += 20
          processCID[7][1] -= 20
          remChange -= 20
          break
        }
      case remChange >= 10:
        if(processCID[6][1] >= 10) {
          change[6][1] += 10
          processCID[6][1] -= 10
          remChange -= 10
          break
        }
      case remChange >= 5:
        if(processCID[5][1] >= 5) {
          change[5][1] += 5
          processCID[5][1] -= 5
          remChange -= 5
          break
        }
      case remChange >= 1:
        if(processCID[4][1] >= 1) {
          change[4][1] += 1
          processCID[4][1] -= 1
          remChange -= 1
          break
        }
      case remChange >= .25:
        if(processCID[3][1] >= .25) {
          change[3][1] += .25
          processCID[3][1] -= .25
          remChange -= .25
          break
        }
      case remChange >= .10:
        if(processCID[2][1] >= .10) {
          change[2][1] += .10
          processCID[2][1] -= .10
          remChange -= .10
          break
        }
      case remChange >= .05:
        if(processCID[1][1] >= .05) {
          change[1][1] += .05
          processCID[1][1] -= .05
          remChange -= .05
          break
        }
      case remChange >= .01:
        processCID[0][1] = processCID[0][1].toFixed(2)
        if(processCID[0][1] >= .01) {
          change[0][1] += .01
          processCID[0][1] -= .01 
          remChange -= .01
          break
        } else {
          return {status: "INSUFFICIENT_FUNDS", change: []}
        }
      case remChange == 0:
        if(processCID.filter(currency => currency[1] != 0).length === 0){
          return {"status": "CLOSED", "change": beginCID}
        }
        isRunning = false
        
    }  
  }
  change = change.filter(currency => currency[1] != 0).reverse()
  return {"status": status, "change": change} 
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
