# Signup-list

A simple table display of list of participants. Modification to the table is supported (add, delete row, edit row)  

The application is deployed and live at : https://signup-list.herokuapp.com/

## How to run locally

### Install Node
https://nodejs.org/en/download/

### Run
1. Navigate into the folder (in command line/terminal)
2. Run `npm install` to install all required dependencies
3. Run `npm run build` to start the development build scripts
4. Run `npm run test` to run test cases and see the results
5. Run `npm run start` to start the application. Hot reload supported.
6. The application is now live at : http://localhost:3000


## Usage/User guide
* The application initially has 20 entries in the table with random values
* Adding new entry by using the upper form (fill in required Name, Email-address, Phone-number inputs)
* Delete a row by clicking on the trash can symbol on the right side of the target row
* Edit a row by clicking on the pencil symbol on the right side of the target row
* A form is display while in edit mode, edit the form and choose `Save` to save the changes, `Cancel` to not commit the changes
* Forms validation
  * All forms have validation supported.
  * Name input should contain only letter (haven't support exotic letter like Kanji yet)
  * Email should be valid
  * Phone input should contain only number, and has less than 16 digits
* Click on the table's headers to sort the table based on the corresponding property

## Techs used

* HTML/CSS and plain [React](https://reactjs.org/) (with no Redux or equivalent state management)
* Scaffold the project using [Create React App](https://github.com/facebookincubator/create-react-app)

## Folder structure
* `src` folder contains main logic
* Inside src
  * `components` folder: contains React components. Each component stays in a seperate folder with a JS file and a CSS file.
  * `utils` folder: contains a JS file storing utility functions for sorting and validation functionality
  * `static` folder: contains static properties like initial layout and initial generated data
