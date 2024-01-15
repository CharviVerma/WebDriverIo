Feature: The Internet Guinea Pig Website


  Scenario Outline: As a user, I can input the text in the text field

    Given I am on the input page
    Then I enter the input text <text>

    Examples:
    | text |
    | 12344|
