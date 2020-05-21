# Layout

### What are the most common components for layout?
`ìon-list` and `ìon-grid`
* `ìon-list` => `ìon-item`s
* `ìon-grid` => `ìon-row`s => `ìon-col`s


### Other really important components
`ìon-label` and `ìon-item`  
Here is a nicely styled input, rememeber ion item is *typically* 
inside of an ion-list component but not necessarily.
```html
<ion-item>
    <ìon-label position="floating">Your title</ìon-label>
    <ìon-input></ìon-input>
</ion-item>
```

You can also use it as a plain wrapper for text elements:
```html
<ìon-label>
    <h2>A title</h2>
    <h3>A subtitle</h3>
</ìon-label>
```

### How can you simply style some text?
wrap it in `ion-text` and give it a color attribute!

### Virtual Scrolling
In list with many items, or in any kind of content you can scroll,
Virtual Scrolling allows you to NOT to render items that are "far away", 
meaning 3 or 4 items away from the screen limit.

It is a performance optimization, when you have certain amount of items
generated, no more are generated, you just reuse the already generated ones.  

![Virtual Scrolling](./img/Virtual%20Scrolling.png)
