$$ React Componet $$

A component are a set of re-usable set of code .
# A component starts with:
1. A capital letter

2. A component is more of a function and requires a call

3. It breaks the system smaller chuncks .

## Quick Note 
A  component needs to be exported 
All tags should be close or be self closing .
```
Examples:
funtion Name (){
    return(
        <>
        <h1>My name</h1>
        </>
    )
}
```
And they can be called in a function way or self closing html
```
<Name />
```
# React Props Guide

## What Are Props?

Props (short for **properties**) are used to pass data from one React component to another.

Think of props like function arguments.

---

# Basic Example

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

export default function App() {
  return <Welcome name="Gideon" />;
}
