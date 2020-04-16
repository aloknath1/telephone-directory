# TelephoneDirectoryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

Problem Statement:To design a Telephone Directory application with following features:

1. Implement a class Person with parameters name (str), mobile (int), age (number), and address (string) with suitable other parameters & getters and setters.

2. Create 20 objects of Person and render the list using *ngFor, printing name and mobile number only and sorted alphabetically by name in the left quarter of screen.

3. Implement a pipe named filter to mimic functionality of Angular JS’s filter called filter. Cover the cases described in Example 1 and Example 2 in from this description: https://www.geeksforgeeks.org/angularjs-filter-filter/

4. Add a search bar on top of the Person list to filter Persons as the user would type in it using a filter pipe implemented in 3 on the basis of name & mobile number.

5. When clicked on a rendered person object, save his suitable details in local storage. On page reload, automatically select the person saved in local storage, else select first in list.

6. Create a child component, and render all details of the selected Person on right half of the screen using angular’s Input.

7. Bonus: Implement feature to edit the mobile number of selected person in the child component created in 6. Edited mobile number should reflect in the rendered list of Persons after the edit is saved.
