# Reverse Polish calculator
This is an implementation of a reverse polish calculator written in javascript (Node)

## App Philosophy
This is a simple cli application. It takes user input, gives them minimal, but effective feedback, and guides the user in the right direction.

There is a utils file which takes care of the majority of error handling/ data flow. Most of these utils functions take an input and return a boolean, indicating that the input passed the function's check or not. These functions are designed to be composable, reusable, testable, and scalable -- all the good -ables. 

## Tradeoffs
While choosing Node for this project gave me a lot of flexibilty and allowed me to write succinct, readable code, it comes with the tradeoff of doing math in javascript. Although modern incantations of Node has cleaned up js math significantly, you can expect to occasionally see numbers with many digits after the decimal (especially when dividing).

## Getting Started
Follow the instructions below to install and run the application

## Clone this repository
```
$ git clone https://github.com/AncyentMariner/reverse-polish-calculator
```

## Go into the repository
```
$ cd reverse-polish-calculator
```

## Install dependencies
```
$ npm install
```

## Run the app
```
$ npm start
```
You will be prompted to start typing in your input and guided through the calculation process.
Any input other than numbers and mathematical operators (just the fab four for now: +, -, /, *)
will display the error ```This is not a valid input``` and and prompt you again for input.

### Prerequisites
Make sure NodeJs is installed on your system (can be found here: https://nodejs.org/en/download/)
all other dependencies are included in the package.json

## Running the tests
This project uses the jasmine testing framework
Please make sure you have installed dependencies with the npm install command

To run the tests, simply run the command 
```
$ npm test
```

## Author
Jeff Kingswood

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

