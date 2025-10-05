# ReactJS



## Great samples to reffer to
https://youtu.be/SqcY0GlETPk


JS - DOM

React -> reuseable components and manageable code...

Need least node 16...

Prettier extension plugin...

## Creating react app

CRA
Vite


```
npm create vite@latest
```

package...

project name

finish and see the page...

continue tell file structure

node_modules...
  third party libraries
  react and other tools installed

public
  images
  videos

src
  assets
  AppComponent...

root
  index.html - very basic html...
    referencing main.tsx -> our entry point of our app

package.json
  name of project
  version
  scripts

  dependencies
    2 libs
      react
      react dom
  
  dev dependecies
    they dont get deployed with the app - they just help us code...
  
  tsconfig
    bunch of settings for telling ts compiler how to complie code to js. -> most of the time u dont have to touch it
  
  viteconfig
    we dont have to touch it potentially too

---

Creating React Component

Message.tsx
  .ts - plain typescript file
  .tsx - react component file

2 ways of creating component -> class and function...
```
function HelloWorld() {
  return <h1>Hello World!</h1>;
}
```

3. Use Hello if you want a flexible component that can personalize or vary output.

```

function Hello() {
  const name = "John";

  if (!name) {
    return <h1>Hello World!</h1>
  }
  return <h1>Hello {name}!</h1>
}

export default Hello;
```

```
| Aspect               | `Hello`                                             | `HelloWorld`          |
| -------------------- | ----------------------------------------------------- | --------------------- |
| **Has logic**        | ✅ Yes (conditional `if` check)                        | ❌ No                  |
| **Uses variable**    | ✅ `name`                                              | ❌ None                |
| **Dynamic output**   | ✅ Yes (changes based on `name`)                       | ❌ No                  |
| **Default behavior** | “Hello {name}!” or “Hello World!” depending on `name` | Always “Hello World!” |
```
When to use each
  Use Hello if you want a flexible component that can personalize or vary output.

  Use HelloWorld for a simple, fixed greeting.






on start from component tree react takes these and creates a js data structured called `virual dom`

virtual dom is different from dom - is lightweight in memory


Library vs Framework

ReactJS = library = a tool
Framework = angular & vue = a toolset

---




--- components structure...

