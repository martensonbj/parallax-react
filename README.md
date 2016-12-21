[WIP] Lesson On Implement Parallax with React

This lesson was built with the Create React App boilerplate. To get started, run the following:
`npm install`  
`npm start`  

### Parallax with React

Seems like since when we implement Parallax we're dealing with re-rendering the page in weird, unique ways every time an event fires on the DOM. Since the event we care about is usually scroll or a mouse movement, thats a lot of events to listen for and re-render. Fast DOM manipulation and re-rendering brings to mind our favorite friend, React.   


#### NPM To The Rescue
Shockingly (not shockingly) there is a module for this.  

Run `npm i -S react-parallax`.  

This helper module gives us a `<Parallax>` component that can take a multitude of props that make our lives easier.

From [the docs](https://www.npmjs.com/package/react-parallax) an example of implementation of this component would be:  

```js
import { Parallax } from 'react-parallax';

const TheContainer = () => {
    return (
      <div>
        <Parallax bgImage="assets/1.jpg" strength={400}>
          <br/>
          <h1> some content that is displayed above the bgImage </h1>
        </Parallax>
      </div>
    )
}

export default TheContainer;
```

Additionally, you're given a `<Background>` component that you can nest within the `<Provider>` component. Child nodes nested within this Background are positioned behind elements outside of the Background element.  

```js
<Parallax strength={300}>
    <Background>
      <img src="http://www.fillmurray.com/400/300"/>
      <div style={{
         width: 800,
         height: 300,
         backgroundColor: '#450093'
        }}></div>
      <img src="http://www.fillmurray.com/500/300"/>
    </Background>
    <h1>something else</h1>
  </Parallax>
```
