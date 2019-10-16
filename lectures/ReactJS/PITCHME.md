---?color=black
@title[Title]

@snap[west headline text-white span-70]
React.js
@snapend

@snap[south-west]
@fa[envelope-o pad-right-icon]@css[contact-email](thomas.devine@lyit.ie)
@snapend


---
@title[Contents]
### Contents

@ol[](false)
- What is React.js?
- Why React.js?
- Setup
- Your First Component
@olend

---
@title[Contents]
### Contents

@ol[](false)
- **What is React.js?**
- Why React.js?
- Setup
- Your First Component
@olend


---
@title[What is React.js?]
### What is React.js?

@ul[list-bullets-black](true)
- It's a library for building @size[1.5em](user interfaces)
- React builds the UI with @size[1.5em](components)
- These components usually have changing @size[1.5em](data)
- React was created at Facebook
- It's used by Netflix, NY Times, Uber, Twitter, etc.
- Visit React.js [website](https://reactjs.org/)

@ulend

---
@title[Contents]
### Contents

@ol[](false)
- What is React.js?
- **Why React.js?**
- Setup
- Your First Component
@olend

---
@title[Why React.js?]
### Why React.js?

@ul[list-bullets-black](true)
- React is becoming very popular [src](https://insights.stackoverflow.com/survey/2019/)
- It uses a Component based architecture [src](https://twitter.com/lyit)
- React builds website UI using @size[1.5em](components)
- @size[1.5em](Components)
- @size[1.75em](Components)
- @size[2.0em](Components)
@ulend


---
@title[Contents]
### Contents

@ol[](false)
- What is React.js?
- Why React.js?
- **Setup**
- Your First Component
@olend


---
@title[React Setup]
### React.js Setup

We are going to need:
@ul[list-bullets-black](true)
- the _React Developer Tools_ browser extension
- the _Create React App_ tool 

@ulend


---
@title[React Setup]
### React Developer Tools

@ul[list-bullets-black](true)
- Install from [Chrome Webstore](https://chrome.google.com/webstore/category/extensions)
- Search for *React Developer Tools*
- It helps you:
  - identify any website you visit that uses React [src](https://www.instagram.com/?hl=en)
  - provides a React tab in the console
- Install it now!
@ulend

---
@title[React Setup]
### Create React App

@ul[list-bullets-black](true)
- Create React App creates a new React app for you
- You'll need `node` version 8 || > to install it
- Let's install it now...
@ulend

---
@title[React Setup]
### Create React App

Install Create React App

```
C:\> node -v
v8.9.4

C:\> npm install -g create-react-app
     ...

C:\>
```
@ul[list-bullets-black](true)
- Where was it installed?
- `c:\users\YOU\AppData\Roaming\npm`
- add folder to `PATH`...
@ulend

---
@title[React Setup]
### Create React App

Setup `PATH`
```
C:\> set PATH=%PATH%;c:\users\YOU\AppData\Roaming\npm

```
Test it works:
```
C:\> create-react-app
     ...
```
@ul[list-bullets-black](true)
- Let's create our first React.js app...
@ulend

---
@title[Hello React App]
### Hello React App

```
C:\> create-react-app helloreact
     ...
```
@ul[list-bullets-black](true)
- Let's run the app...
@ulend

---
@title[Hello React App]
### Hello React App

```
C:\> cd helloreact
C:\helloreact> npm start
               ...

```
@ul[list-bullets-black](true)
- Use Chrome to visit [http://localhost:3000](http://localhost:3000)
- Open the app with VS Code for a quick tour...
@ulend

---
@title[Hello React Quick Tour]
### Hello React Quick Tour

@ul[list-bullets-black](true)
- `public/index.html`
  - the `<div>`
- `src/index.js`
  - imports
  - `ReactDOM.render()`
- `src/App.js`
  - imports
  - `App` component
  - render JSX
- View the `<App>` component in React tab
@ulend

---
@title[Contents]
### Contents

@ol[](false)
- What is React.js?
- Why React.js?
- Setup
- **Your First Component**
@olend


---
@title[React Components]
### React Components

@ul[list-bullets-black](true)
- React is popular because of its @size[1.5em](component based structure)
- We create a UI by using a collection of components
- We create components using the class [React.Component](https://reactjs.org/docs/react-component.html)
- Let's create our @size[1.5em](React Component)...
@ulend


---
@title[Your First Component]
### Your First Component

```javascript
// src/HelloWorld.js
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
export default HelloWorld;
```
@[2](import React library)
@[2,3](import ReactDOM to render the component)
@[2,3,5,11](Our component extends from a React.Component)
@[2,3,5,11,6,10](All components MUST have a render() method)
@[2,3,5,11,6,10,7,8,9](return the component element)
@[8](this is JSX)
@[12](export the component class)
@[*]()

@ul[list-bullets-black](true)
- Let's render this component to our HTML page...
@ulend

---
@title[Your First Component]
### Your First Component

```html
<!-- public/index.html -->
<!doctype html>
<html lang="en">
<head>
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

@[8](We'll add the component here)
@[*]()

---
@title[Your First Component]
### Your First Component

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld.js';

ReactDOM.render(<HelloWorld />, 
                document.getElementById('root'));
```

@[2,3](import React and ReactDOM)
@[2,3,4](import our new component)
@[2,3,4,6-7](render our HelloWorld component in the div)
@[*]()

@ul[list-bullets-black](true)
- View in browser 
- and examine the React console tab too
@ulend


---
@title[Exercise]
### React.js Exercise 1 – Getting Started

[@fa[external-link]](https://github.com/barcaxi/WD12019/blob/master/ReactJS/exercises/ReactEx1.md)


---
@title[Contents]
### Contents

@ol[](false)
- What is React.js?
- Why React.js?
- Setup
- Your First Component
- **JSX**
@olend


---
@title[What is JSX?]
### What is JSX?

This is JSX

```javascript
const element = <h1>Hello, world!</h1>;
```

@ul[](true)
- It's a syntax extension to JavaScript
- React recommends using it to render UI components with elements
- Let's see why you use it...
@ulend

---
@title[JSX]
### JSX
Previously our first React Component looked like this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
export default HelloWorld;
```
@[7](JSX creates the `<h1>` element)
@[*]()

@ul[](true)
- Without JSX we'd have to do this...
@ulend


---
@title[JSX]
### JSX
We'd need to use the [React.createElement()](https://reactjs.org/docs/react-api.html#createelement) function

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return React.createElement('<h1>',null,'Hello World!');
  }
}
export default HelloWorld;
```
@[6](using createElement() for the `<h1>` element)
@[*]()

@ul[](true)
- Code written with JSX is converted to use `React.createElement()` anyway
- It would be worse for less simple components..
@ulend


---
@title[JSX]

A not so complex component using JSX

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return(
      <div id="myDiv">
        <h1>Hello World!</h1>
      </div>
    );   
  }
}
export default HelloWorld;
```
@[7-10](JSX)
@[*]()


---
@title[JSX]

Same component using `React.createElement()`

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
                 '<div>', 
                 {id: 'myDiv'}, 
                 React.createElement('h1',
                                      null,
                                      'Hello World!'));
    );
  }
}
export default HelloWorld;
```
@[6-11](!JSX)
@[*]()
@ul[](true)
- You can see why using JSX is better
@ulend

---
@title[JSX Expressions]
### JSX Expressions

<!-- With JSX we can use expressions too -->

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
const name='Bob';

class HelloWorld extends React.Component {
  render() {
    return(
      <div id="myDiv">
        <h1>Hello {name}</h1>
      </div>
    );   
  }
}
export default HelloWorld;
```
@[3](name is Bob)
@[3,5-13](will print Hello Bob)
@[*]()


@ul[](true)
- Expressions can be code that resolves to any value e.g...
@ulend

---
@title[JSX Expressions]
### JSX Expressions

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return(
      <div id="myDiv">
        <h1>1+2={1+2}</h1>
      </div> 
    );   
  }
}
export default HelloWorld;
```
@[7-9]()
@[*]()

@ul[](true)
- Another example with a function...
@ulend

---
@title[JSX Expressions]
### JSX Expressions

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  add = (num1,num2) => {return num1+num2;}

  render() {
    return(
      <div id="myDiv">
        <h1>1+2={add(1,2)}</h1>
      </div>
    );   
  }
}
export default HelloWorld;
```
@[4,5,14]()
@[4,5,14,9-11]()
@[*]()


---
@title[Contents]
### Contents

@ol[](false)
- What is React.js?
- Why React.js?
- Setup
- Your First Component
- JSX
- **Component Properties (Props)**
@olend

---
@title[Component Properties]
### Component Properties

@ul[list-bullets-black](true)
- The previous component `HelloWorld` displayed static content
- To display a dynamic content use React @size[1.5em](Props)...
@ulend


---
@title[Component Properties]
### Component Properties

Component properties (props) are accessible with `this.props` object

```javascript
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}
export default HelloWorld;
...
ReactDOM.render(<HelloWorld name="Bob"/>,document.getElementById('root'));
```
@[10](pass a name property like this)
@[10,4](access it with component like this)
@[*]()

@ul[list-bullets-black](true)
- Pass multiple properties like this...
@ulend


---
@title[Component Properties]
### Component Properties

```javascript
class HelloWorld extends React.Component {
  render() {
    return (
     <h1>{this.props.name} CU in {this.props.mins} mins</h1>
    );
  }
}
export default HelloWorld;
...
ReactDOM.render(<HelloWorld name="Bob" mins={5} />,document.getElementById('root'));
```
@[10](use expression syntax {} for non-string properties)
@[10,4](access it within a component like this)
@[*]()

---
@title[React Function Components]
### React Function Components

@ul[list-bullets-black](false)
- We've seen how to create a component with a @size[1.5em](class)
- We can also create a component with a @size[1.5em](function)
- For example...
@ulend

---
@title[Component Properties]
### Component Properties

```javascript
import React from 'react';
import ReactDOM from 'react-dom'

const HelloWorld = function(props) {
  return(
    <div>
     <h1>{props.name} CU in {props.mins} mins</h1>
    </div>
  )
}
export default HelloWorld;
...
ReactDOM.render(<HelloWorld name="Bob" mins={5} />,document.getElementById('root'));
```
@[4,10](function declaration)
@[*](everthing else is the same)

---
@title[Class Components v Function Components]
### Class v Function Components

@ul[list-bullets-black](true)
- You may see component functions elsewhere
- But I'll use component classes instead, because...
  - a class component has @size[1.5em](state)
  - a class component has @size[1.5em](lifecycle hooks)
- We'll explain this next
@ulend


---
@title[Exercise]
### React.js Exercise 2 – React Props

[@fa[external-link]](https://github.com/barcaxi/WD12019/blob/master/ReactJS/exercises/ReactEx2.md)


---?color=black
@title[Title]

@snap[west headline text-white span-70]
React.js
@snapend

@snap[south-west]
@fa[envelope-o pad-right-icon]@css[contact-email](thomas.devine@lyit.ie)
@snapend
