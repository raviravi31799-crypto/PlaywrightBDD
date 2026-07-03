Feature:Login in demoblaze application

Background:
Given the user launched the demoblaze application
And clicks on Loginlink on homepage

Scenario: Valid login with valid credentials 
And the user passes the username "Admin@5" and password "12345"
When the user clicks loginbutton
Then the user is able to see Welcome text with username