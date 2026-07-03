Feature:Create account in Tutorials Ninja

Background:
Given the application is launched by the user
And the user clicks Myaccount and selects register

Scenario:Register with required credentials
And the user enters firstname "Siva" ,lastname "Kumar",email "Sivaadmin285@gmail.com",phone "1234567890",password "Sivaram28" and cpassword "Sivaram28"
When continue button is clicked by the user
Then the account creation successful message will appear











