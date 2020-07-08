# Styling & Theming

### Theme
Refers to App-Wide styling. It is implemented through CSS Variables. CSS variables are
like Sass variables, but even better, because you can change them at runtime.  
Through css variables you can also change app wide settings such as attributes settings and grids.

### Custom CSS
As in any Angular app, you can use custom css rules to apply and override more specific (i.e. component level)
styles.

### Generating colors
The website of ionic has a color palette generator ;)

### How to override platform specific styles
Ionic append platform specific class (detected through the headers of the request)
in the html root element of the app, where it attached classes that match for example material design for 
Android (md).  
So for setting up platform specific styles we can add to our general style declaration the 
following classes:
```css
.ios {
    ...whatever
}
.md {
    ...proceed
}
```

### Global component styling
You can globally style components by selecting them in the global stylesheet and adding the custom 
CSS variables that you can find related at the end of every component documentation:
```css
ion-button {
    --background: blue;
}
```

### Where to find the main css styles applied to the theme?
In the `src/theme` folder.

### How to check what options are available?
In the Ionic documentation, we can find an advanced section in the Theming tab.

### How to apply app wide color changes to ionic components
In the advanced section of theming in the documentation, you can check out the
`application colors` section.
For instance for coloring all the toolbars, you can define the css variable
`--ion-toolbar-background` in the theming css files of your app.
