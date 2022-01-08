# Welcome to Remix with bootstrap!
- [Remix Docs](https://remix.run/docs)
- [React-bootstrap-Docs](https://react-bootstrap.github.io/)

Good news, it pretty much just works. Here's what I found. 

# Changes needed to get started.

- Run the following terminal command to install react and bootstrap.
(refer to the react-bootstrap docs for newer versions)  
 ```npm install react-bootstrap bootstrap@5.1.3```

- Include the bootstrap css (app/root.tsx)
``` javascript
// ...
import bootstrapStyles from "bootstrap/dist/css/bootstrap.css";
// ...
export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: bootstrapStyles},
  ];
}

export default function App() {
 //...
```
- Start using Bootstrap :) (mostly) because remix is so cool.


## Known Gotcha's
--- 

- ```<Nav.link>``` Seems to work BUT, if you want to leverage remix's Link you can, just add the className "nav-link" and a data-rr-ui-event-key="my/link/path" [See Here](https://github.com/JeremyCarlsten/remix-react-bootstrap-example/blob/3b293f21e9a5404361f4302931b318faaacfdcc2/app/routes/index.tsx#L23)
