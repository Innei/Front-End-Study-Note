# CSS the Right Way

As you probably noticed, the pages we've created so far have not been the most attractive. This is because we focused on HTML first, which you will recall is all about structuring content. We're now ready to move on to CSS, the language we use for *styling* content.

The trajectory of this lesson is similar to that of the previous one. We'll start out by going over the terminology and background knowledge you need to understand and competently discuss CSS.

Next, we'll revisit Chrome Developer Tools, this time focusing on how to alter CSS on live pages.

After that, you'll work through a series of drills designed to level up your CSS skills.

By the end of this lesson, you'll have a solid conceptual understanding of CSS, you’ll be comfortable editing and creating style rules.

###### This lesson does not cover CSS layouts, which is the most difficult part of CSS. We'll do a deep dive on that later in this unit.



# Anatomy of CSS

CSS (Cascading Style Sheets) is the language used to control the *presentation layer*. Whereas HTML is about structure and content (aka, the "content layer"), CSS is about style and appearance. We use it to control the visual aspects of the content on a page: from fonts to color to size to animations and more.

We already encountered some simple CSS rulesets in Lesson 1. In the instructions for getting to know Sublime Text, we created a rule that targeted paragraph elements, setting the text color to red:

```
p {
  color: red;
}
```

When we previewed our index.html page (which linked to the file containing this CSS) in the browser, we saw that the paragraph text was red.

Although there's plenty about CSS that can be tricky (especially *positioning* and *layout* which we'll deal with in depth later in this unit), the syntax itself is straightforward. Target a set of elements with a CSS selector (`p`, above), and set properties and values as required by your presentational goal (that the paragraph text be red).

In the remainder of this reading, we'll give you the background knowledge about how CSS works that you'll need to reason about styling and presentation. Like the *Anatomy of HTML* assignment in the previous lesson, this too will be reading-heavy, without a ton of *doing*, but it will give you the knowledge you need to understand and communicate with others about CSS.

Here's what we're going to cover:

- The parts of a CSS rule and the terminology used to describe CSS
- How to target document elements using CSS selectors
- CSS specificity
- the "cascade"
- How to activate CSS in your HTML code
- The box model
- Browser defaults, CSS resets, and CSS normalization

### Anatomy of CSS

The key vocabulary words for CSS are: *ruleset*, *selector*, *declaration block*, *declarations*, *property*, and *value*.

```
input {
  display: block;
  font-family: 'Proxima Nova W01', sans-serif;
  font-weight: 400;
  font-style: normal;
  height: 45px;
  width: 420px;
  min-width: 210px;
  max-width: 100%;
  padding: 6px 1em 5px;
  border: 1px solid #d0d2d5;
  border-radius: 3px;
  font-size: 15px;
  line-height: 30px;
  color: #404853;
  box-shadow: inset 0 3px 7px #f6f7f7;
}
```

This snippet is from a page on Thinkful's website. It is a *ruleset* that describes how input elements should look. It consists of a *selector*(`input`, in this case), which is the element or elements that will be targeted by the declarations that follow.

The *declaration block* follows the selector. A declaration block is a set of *declarations* contained in curly brackets (`{`, `}`). Within the block, each line is a separate declaration.

A *declaration* consists of a *property* and the value it is to be set to (for instance, `box-shadow: inset 0 3px 7px #f6f7f7;`, above). With CSS3, there are nearly 200 supported properties that can be set. **Don't worry, you don't need to memorize them all!**

Each property has a range of valid values (for instance, width could be set in terms of pixels or percentage, among other options, but setting width to "foo" would not be valid).

```
/*invalid*/
.foo {
  width: 'foo';
}

/* valid */
.foo {
  width: 100px;
}

.bar {
  width: 50%;
}
```

The property name is followed by a colon, and the value is followed by a semicolon.

In the first line of the snippet above (`/*invalid*/`), notice that we've used a code comment. As with HTML, you can use comments in CSS to document your code or temporarily disable (*comment out*) a block of code.

With real web pages, the final presentation of a given element will usually be the result of several rulesets interacting. We'll learn more about this in a moment when we discuss *CSS specificity*, but for the moment, know that this:

```
p {
 font-family: Arial;
}

p {
  font-size: 20px;
}
```

is valid (though not the most concise) CSS. In practice though, the computed CSS that gets applied to an element by the browser is often the result of a set of rulesets, possibly spanning more than one stylesheet.

### CSS Selectors

CSS provides a rich set of selectors that give you precise control over the elements targeted by a declaration block. Later in this lesson, you'll complete drills on CSS selectors to build up your working knowledge of the most commonly used selectors.

The following examples will give you a sense of some of the ways you can target elements for style rules:

```
/* universal selector (applies to everything) */
* {
  /* set stuff */
}

/* targeting a single element type */
p {
  /* set stuff */
}

/* targeting two different elements */
p, input {
  /* set stuff */
}

/* targeting a class */
.foo {
  /* set stuff */
}

/* targeting an id */
/* avoid these, but know how to recognize
  them in the wild. It's usually better to
  use a class selector instead.
*/
#bar {
  /* set stuff */
}

/* targeting an element with a class */
/* try to avoid this, in favor of simple class declaration */
p.foo {
  /* set stuff */
}

/* targeting descendants */
ul.foo li {
  /* any `li` within `ul.foo` will get targeted */
}

/* targeting direct children */
ul > li  {
  /*  only `li`s that are direct children of ul targeted */
}

/* targeting submit buttons */
button[type="submit"] {
  /* any button with a type of "submit" */
}
```

All of these selectors can be combined to get more specific targeting.

When you're writing a ruleset, try to keep your selectors as non-specific as possible. For instance, `p.foo` would target any paragraph with the foo class. While that's valid CSS, it's almost always better to just create a ruleset for only `.foo`. That way the settings can be reused on other targets if we decide they should have the same style rules.

In addition to element, class, and id selectors, there are also *pseudo-classes* and *pseudo-elements*. A pseudo-class is used to specify a special state of the element. A pseudo-element is used to style specified parts of an element.

The following CodePen gives us an example of both:

<iframe ng-non-bindable="" height="371" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/RRaOPw/?height=371&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, we have a ruleset for the first letter of every paragraph. The selector here (`p::first-letter` - note the double colon) is a *pseudo-element*. It targets specific parts of the document. Here we're setting font properties for the first letter of every paragraph. You'll encounter other pseudo-elements later in this lesson.

This example also uses a *pseudo-class* to generate hover behavior (`div.foo:hover {...}`). If you hover over the gray container box, the background color switches to orange. *Pseudo-classes* target specific *states* of the document (such as the user hovering over, or clicking on an element).

### Getting CSS into HTML

Typically, to utilize CSS, we link to one or more *external stylesheets* that contain style rules that get applied to the linking HTML page.

```
<head>
  <link rel="stylesheet" type="text/css" href="./css/main.css">
  <link rel="stylesheet" type="text/css" href="./css/nav-bar.css">
</head>
```

You already got experience with linking to CSS files when you ported Sally Student's "About me" page with Sublime Text.

Although you are discouraged from using the next two strategies unless you have a specific, compelling reason, it's worth knowing that there are two other ways of affecting the presentation layer.

Most HTML elements allow a `style` property to be set. So `<p style="color: blue; font-family: Arial">Lorem ipsum</p>` would result in blue Arial text. This is an example of *inline styling* and it is avoided. It's best practice to use HTML only for describing structure and content, and using CSS to describe presentation. Engineers refer to this as maintaining the *separation of concerns* between HTML and CSS. Inline styles encode information about how an element should look directly into the HTML. This means you cannot reuse these styles on other elements. One of the advantages of CSS is reusable classes (say an `.error` class with red font color that we can apply wherever we need to give a user an error message), and classes are not possible with inline styles. By isolating presentation into our CSS, our code will be more maintainable and extensible (that is, easier to apply presentation rules we've set up in one place to new use cases).

It is also possible to put CSS within a [style element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style). Here's an example:

```
<!-- somewhere in <head> -->
<style>
  p {
    color: red;
  }
</style>

<!-- somewhere in body  -->
<p>Hi there how's it going?</p>
```

At this early point in your learning, avoid internal styles. There *are* some reasons to use them (for instance, [improving page load speed](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery#example)), but that's something you can focus on when you're further along in your learning.

### CSS Specificity

You just learned that a given HTML element's appearance can be determined by numerous CSS rulesets. In the example we gave above, there were no conflicting property/value pairs, but in real web pages -- especially for bigger sites with more contributors -- you often end up with style rules from multiple places targeting a specific element. If there are conflicts for a given property, the browser will choose the rule with *higher specificity*.

Let's look at an example to see how this works.

<iframe ng-non-bindable="" height="352" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/jrqRXK/?height=352&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, according to the second ruleset selector (`.foo p`), the paragraph color should be red, because the selector says to target all paragraphs in an element with .foo class. But the previous selector has *higher specificity* because it targets paragraphs in any *div* whose class is foo, so our end result is green.

The key take away for now is that style rules with higher specificity will trump those with lower specificity if there are conflicting values being set for some property. Store this bit of knowledge away in your toolkit -- at some point in the future, you'll find yourself debugging a style setting, certain that a rule you wrote should be causing an element to look a certain way, but finding that in reality that element looks a different way. When that happens, it's often a sign that a higher priority rule is over-riding the one you're working with at the moment.

The following post from Medium is an excellent starting point to learn more about specificity: [Understanding CSS: Selector Specificity](https://medium.com/@dte/understanding-css-selector-specificity-a02238a02a59#edc9)

## The Cascade

We're now in a position to understand the *cascade* from *Cascading Style Sheets*. The cascade is a process browsers follow to determine which CSS values get applied for all the properties on a given element. Above, we saw an example of conflicting CSS values. In one case the later one overwrote the earlier one, and in another case, an earlier rule with higher specificity trumped a later rule in the same file.

To determine which property-value pairs to apply to a particular element, the browser

- Determines which rules apply to the element
- Takes all the relevant rulesets and sorts them according to their origin (for instance, inline styles vs. external stylesheets -- inline styles win over external) and importance (more on *importance* in a moment).
- Takes all rulesets that have same origin and importance, and sort them by selector specificity.
- If there are still conflicting values for rulesets with same importance, origin, and specificity, applies the last to be declared ruleset.

Don't worry too much about committing the above to memory at the moment. It should become part of your working knowledge, but is not essential for you to memorize at the moment.

Finally, we glossed over the word *importance* in our definition of the *cascade* above. CSS allows you to supply the keyword `!important` in order to make a rule that might otherwise be lower in the cascade override others. Here's an example:

```
p {
  color: red !important;
}

/* later in the file, or in a different file*/

p {
  /* the above rule marked important
  has precedence*/
  color: blue;
}
```

You should know about `!important`, but try to avoid using it in your CSS. There are rare occasions where it's the right move, but usually if you have to use `!important`, it's a sign that there are problems with the application of your style rules (for instance, you may just need to use a more specific selector).

### The box model

The *box model* is crucial to understanding CSS, especially when we move on to positioning and layout later in this lesson. The basic idea is that most elements on a web page are really rectangular boxes, even if they appear to be a different shape.

In the default model (`box-sizing: content-box`), the total space taken up by an element is determined by its width, height, padding, border, and margin, as illustrated below:

![box-model-1.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.3.1_anatomy_of_css/box-model-1.png)

To calculate the measurements for an element, we add width, plus 2x padding, plus 2x border, plus 2x margin. `div.foo` below would have a total width of 200 (width) + 20 (padding left and padding right, each 10) + 2 (left and right border) + 60 (left and right margin) = 282px.

```
div.foo {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 1px solid green;
  margin: 30px;
}
```

Have a look at the following example, and compute what you think the width of the `div.foo` and `div.bar` elements would be, based on the values you see in the CSS (and using the formula we just described above).

<iframe ng-non-bindable="" height="265" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/RRaXxr/?height=265&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

If you answered that the total width of `div.foo` is 222px and `div.bar` is 120px, then you were right.

Now you might be thinking, "Wait a minute -- `div.foo` has a directly set width of 200px. Why on earth is its total width greater than its explicitly set width? That's counterintuitive!"

It *is* counterintuitive that a declaration like `width: 200px` does not guarantee a 200px-wide element. The `content-box` model makes us do math to get even numbers when we add padding, border and, and margin to elements, and this can make designing our pages much more complicated than it needs to be.

Enter `box-sizing: border-box`. With it, we can set `width: 200px` and be sure that the element will be *exactly* that wide, padding, border, and margin included. We want to be sure that every element on our page has the same box model, so we use the wildcard (`*`), which selects every element in the document at once:

```
* {
  box-sizing: border-box;
}
```

you can make `border-box` the default for all elements.

Here's a CodePen example that demonstrates what happens when we use `box-sizing: border-box`. Have a look at the computed dimensions of the `.foo` div in Developer Tools; you'll see that its total width is now the 200px we explicitly set.

<iframe ng-non-bindable="" height="454" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/AXmRPW/?height=454&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

If you'd like to read more about `box-sizing` in CSS, [this CSS Tricks post](https://css-tricks.com/box-sizing/) is an excellent starting point, as is this [Mozilla developer article](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).

### Browser Defaults vs. resetting vs. normalizing CSS

The final topic we want to briefly touch on in this reading is the issue of browser style defaults, and how developers use CSS resets or CSS normalization to ensure a consistent experience across browsers.

As we saw earlier in this unit, your browser has default styling for many elements. For instance, if you use `<h1>` and `<h2>` elements on a page but don't add any custom CSS, your browser will still render the `<h1>` as larger than the `<h2>`. This is a good thing in that you can view HTML without writing CSS, but it's a bad thing in that you may not want the defaults. Furthermore, browsers differ in their defaults, which means your end users might get a different experience when they're using Chrome than when they're using Firefox.

There are two common solutions to this problem. The first strategy is to use a CSS reset, the [most popular of which is the Meyer reset](http://meyerweb.com/eric/tools/css/reset/reset.css). By linking to this file in your HTML (above your other style sheets, so it sets a base that they add to), you can guarantee cross-browser consistency for default styles.

Another option is [normalize.css](https://necolas.github.io/normalize.css/), which is a CSS library that normalizes a subset of browser elements to be consistent between browsers.

If you're confused on this topic, be sure to ask your mentor about it.

# Web Detective 201: CSS Power Mode with Dev Tools

Now that we're dealing with CSS, we're going to start seeing the power of Developer Tools. Developer Tools allows you to instantly change how everything about a webpage looks. You can inspect the CSS applied to any element, locate the source code (that is, the original file that was downloaded that contains a set of style rules), change, delete, and add attributes, visualize the overall dimensions of an element, and see an element's computed styles.

This interface is perfect for CSS detective work on existing sites, brainstorming style changes, and solving styling bugs.

When you're working on the styles for a project, you can preview your page in the browser, experiment with different settings in Developer Tools, then save the changes you like back in your source code, using your text editor. Getting into this habit puts you on the path to a powerful workflow.

### Steps

1. Open Chrome and visit a web page of your choosing.

2. Open Developer Tools by Cmd-clicking (Mac) / right-clicking (Win) somewhere on the page, and then selecting "Inspect Element". By default, the Elements panel will appear.

3. Select the body element in the elements panel.

4. Look at the *Styles Pane* which will look similar to the image below (note that depending on the current width and position of the Developer Tools interface, you may or may not see the tab for the *Computed Styles* pane).

5. Add an attribute: The styles pane is where you can see and set the selected element's style attributes. If you set styles in the `element.style` entry, those will be applied *only* to the single selected element.

   ![dev-tools-alter-css.gif](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.3.2_web_detective_201_css_dev_tools/dev-tools-alter-css.gif)

   You're not limited to altering styles of a single element. Any of the blocks of style rules you see in the styles pane can be inspected and manipulated in the same way, and those changes will apply to any item reached by the CSS selector. So if you’d like to set a style for all anchor tags, for example, you could find the element in that list, and add additional lines with directions for styles.

6. View attribute source: You can view the original source code for any style rule appearing in the styles pane by clicking on the link to the right of the element name. Clicking on the link next to the targeted element will open the CSS file where the rule is set. Note that CSS files may be minified, which makes them download more quickly, but not great for a human reader. To fix this, click on the *format icon* at the bottom of the source file panel.

   ![attribute-source.gif](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.3.2_web_detective_201_css_dev_tools/attribute-source.gif)

7. View the metrics tab: The metrics pane is back inside the elements pane. This allows you to understand the dimensions of a specific element in terms of its box model. You can see the width, height, margins, and padding of any element here in an intuitive, box model visualization.

   ![metrics-pane.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.3.2_web_detective_201_css_dev_tools/metrics-pane.png)

8. View the computed styles pane: The final piece of functionality for you to learn for now is the *computed styles pane*. If the styles pane has enough screen real estate, you may see the *computed styles pane* directly below the metrics pane. If you don't see it there, click on the "Computed" tab.

   ![computed-styles-pane.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.3.2_web_detective_201_css_dev_tools/computed-styles-pane.png)

   This is where you can see all of the styles set for a particular element. If you hover over an attribute, an arrow icon appears that you can click to be taken to the specific style rule setting this attribute's value in the main style pane.

###### There's more to learn about working with CSS in Developer Tools, but the techniques we've covered will take you far. Be sure to talk with your mentor about how they use Developer Tools in their day-to-day work. If you're looking to read more about working with styles and CSS in Developer Tools, [Google's official learning materials](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/?hl=en) are a good place to continue your learning.

### Screencast

<iframe ng-non-bindable="" width="640" height="480" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://player.vimeo.com/video/170487954" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

------

# CSS Basic Training

In this assignment you'll work through 4 drills to build up your CSS chops. These drills will familiarize you with learning about new language features on your own (which is a core skill of professional engineers) and using CSS properties.

We've provided links to solutions to each drill at the bottom of this assignment, but be sure to give yourself at least 15 minutes to work through each one before looking at the answer. And even if you complete the drill on your own, still be sure to check out the answer to compare and contrast your implementation.

### Drill 1: Width, Height, Color, Border

In this drill, you’ll add classes to the two divs to create a blue box and a red box, as described in the code comments and paragraphs in the code pen. To complete this drill, you'll need to use the following CSS properties:

- background-color
- margin-bottom
- border

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/jrWKKO/?height=500&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Drill 2: Font Basics

This drill gets you up to speed on common font-related properties.

The CodePen below features a monstrosity: yellow 20px Comic Sans font for all elements. Your job is to replace the existing font styling, but without simply relying on browser defaults.

Specifically, you'll need to use two *webfonts* from Google. You can use CSS to set the font of your page to any font that the user’s computer already has installed. Some fonts are considered “web safe fonts” (for example, Arial, Helvetica, and Georgia), because the vast majority of computers have them installed by default. But designers don’t want to limit themselves to the handful of web safe fonts. To use any font beyond web safe fonts, you have to use Webfonts. Webfonts are fonts that you load in the browser using HTML, and then can reference in your CSS. Google provides a set of webfonts that you can use for free (there are many places to buy webfont licenses as well). You'll need to select one font family for the H1 and H2 elements, and another as the default for the page (consider targeting the `body` element for this purpose).

Choose your [webfonts from Google Fonts](https://www.google.com/fonts). The GIF below shows how to select fonts and then get the code you'll need to add to your HTML to link to the them.

![How to get Google fonts](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.3.3_css_drills/how-to-get-google-fonts.gif)

In addition to linking to the fonts in your HTML, you'll also need to reference them using the `font-family` attribute in your CSS.

Note that while you won't always use Google fonts in your life as a frontend developer, you will need to understand how to use external fonts, and this drill teaches you that skill.

To complete this drill, you'll need to work with the following CSS properties:

- font-family
- font-size
- font-weight
- color

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/aZdXLp/?height=500&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Drill 3: Background Images

This drill will familiarize you with working with background images. Your starting point is two divs: one with the class `.animal`, the other with the class `.animals`. The challenge is to set an animal image as the background for both divs.

For the `.animal` div, the background image should display once and take up the full width and height of the container.

For the `.animals` div, the background image should take up a quarter of the container, and repeat four times: it should have a 2-by-2 grid composed of the same animal image.

While you're welcome to track down an animal image on your own, we suggest using [lorempixel](http://lorempixel.com/) to get an 200 x 200 px kitten image. To do that, you can use the link `http://lorempixel.com/200/200/animals/`.

To complete this drill, you'll need to use the following CSS properties:

- background-image
- background-repeat
- background-size

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/OWGEvb/?height=500&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Drill 4: Text Contrast Problem

To complete this drill, you'll need to alter the CSS to make the white text on our background image look readable. There are many different "correct" solutions. Use this as an opportunity to do some research on strategies for making text visible in front of image backgrounds. CSS Tricks' post [Design Considerations: Text on Images](https://css-tricks.com/design-considerations-text-images/) is a good place to start.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/gLYwEE/?height=500&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Solutions

[Drill 1](http://codepen.io/team/thinkful/pen/RRrYJp)

[Drill 2](http://codepen.io/team/thinkful/pen/GqozMB)

[Drill 3](http://codepen.io/team/thinkful/pen/rjbKdq)

[Drill 4](http://codepen.io/team/thinkful/pen/qqWavx)

# Target Practice: CSS selector drills

To become efficient at writing CSS, you need to memorize a number of CSS selectors. In this assignment, you'll practice eight common selector types. We'll give you the low-down on each selector type, and then you'll complete a drill that asks you to use each.

Here's what we'll cover:

- Element selectors (e.g., `p {...}`)
- Combination selectors (e.g., `.foo.bar {...}`)
- Multi selectors (e.g., `.foo, .bar {...}`)
- Descendant selectors (e.g., `.foo li {...}`)
- Direct child selectors (e.g., `.foo > li {...}`)
- Before and after pseudo-elements selectors (e.g., `li::before {...}`)
- Anchor pseudo-classes (e.g., `a:hover {...}`)
- Attribute selectors (e.g., `input[type="text"] {...}`)

### Element selectors

When you want to create styles for specific element types, element selectors are your friend. Here's an example that sets styling for all paragraph elements:

```
p {
  padding: 30px;
  font-size: 16px;
}
```

The element selector just consists of the element you want to target. Straightforward stuff.

To complete the drill for element selectors below, you'll need to target section elements and h1 elements. Specifically:

- Write one ruleset for sections that gives them a bottom margin of 90px
- Write one ruleset for h1 elements that sets font-family to Helvetica.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/ZOLmyN/?height=500&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Combinations

Sometimes to implement a design, you'll need to target elements that have two or more classes. Let's say we want to target all elements that have *both* the `.foo` and `.bar` classes, we could do:

```
.foo.bar {
  /* make some rules */
}
```

And if you needed to target only paragraphs that had both `.foo` and `.bar`, you could do:

```
p.foo.bar {
  /* make some rules */
}
```

When you need to target a combination like this, the rule is, if an element is part of the target, put it first. Then, chain together the classes you want to target.

To complete the drill for element selectors below, you'll need to target elements that have both the `.box` and `.green` classes. These elements should get a red border.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/VjPVXp/?height=500&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Multiple Selectors

Let's say you want to target elements that have either `.foo` or `.bar`, or *both* `.bizz` and `.bang`. To target multiple selectors with the same ruleset, just separate your selectors with commas:

```
.foo, .bar, .bizz.bang {
  /* make the rules */
}
```

To complete the drill, you'll need to write a single ruleset that targets elements that either have both the `.box` and `.foo` classes, or elements that have both the `.circle` and `.bar` classes. These elements should get a solid 2px black border.

You'll know you've targeted correctly when the blue and green boxes and blue and green circles have a black border.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/dXNQgW/?height=500&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Descendant and Direct Child Selectors

Sometimes you need to target elements that are children of another element. For instance you might want to target all paragraphs that appear within `aside` elements:

```
aside p {
  /* make rules */
}
```

This snippet uses a `descendant` selector, which will target all children of an aside that are paragraphs. Descendant selectors target children of the parent element whether they're immediate children, or further down the hierarchy. In the following code snippet, the first paragraph and the second one (appearing inside `div.alert`) would be selected by `aside p {...}`.

```
<aside>
  <p>The quick brown fox jumps over the lazy dog.</p>

  <div class='alert'>
    <h3>Pay attention!</h3>
    <p>Because the quick brown fox jumps over the lazy dog.</p>
  </div>
</aside>
```

Sometimes we need to target only elements that are direct children of an element. For that we can use the direct child selector:

```
aside > p {
  /* make rules */
}
```

This rule would target the first paragraph in the HTML snippet above, but not the paragraph inside `div.alert`.

To complete the drill below, you'll need to write two rulesets. The first should target all list items that are descendants of an element with the `.foo` class. The second should target all list items that are direct children of the`.bar` class.

In the end result, the first two list items on the page ("foo" and "bar") should have 1px solid red borders, but not the second two ("bizz and bang"). In the numbered list, all first level list items should have a 1px solid green border, but the second level ones (that is, the steps for washing fruits and veggies) should not.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/begQyO/?height=500&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

## ::before and ::after pseudoelements

The `::before` and `::after` pseudoelements allow you to render content just before or after your element. This technique is great for creating smart quotes around block quotes (which you'll have to do in the drill below). More broadly, writing `::before` and `::after` style rules can be a good way to handle repeated visual content that surrounds an element.

Here, we use `ul li::before` to set a custom icon from FontAwesome for bullet points:

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: hidden; opacity: 0; transition: opacity 0.5s ease 0s;"></iframe>



Inspecting the CSS, you can see that we've set the `content: "\f121"` and `font-family: FontAwesome`. `\f121` is the unicode value for the FontAwesome code icon. We've set its color to green, its font-size to 20px, and given it a right margin of 5px to give the text for each bullet point some room to breath. It's also worth noticing that we've set `list-style: none` on the parent `<ul>` element, which turns off the default dots that appear for bullet points.

To complete the drill below, you'll need to:

Create CSS rules that surround `<blockquote>`s in *smart quotes* (i.e, curly quotation marks). This means that any time a `<blockquote>`element appears, without putting quotation characters in your HTML, the block quote should get quotes before and after it. Create a ruleset for the `.author` class that puts an en dash (–) before it (you can see how we're using it in the HTML in this drill).

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: hidden; opacity: 0; transition: opacity 0.5s ease 0s;"></iframe>



### Anchor pseudoclasses

CSS provides four pseudoclasses for anchor elements:

```
a:link {
  /* unvisited link */
}

a:visited {
  /* visited link */
}

a:hover {
  /* mouse over link */
}

a:active {
  /* selected link (i.e., you've clicked
    but not released on the link)
 */
}
```

Write style declarations for each anchor tag state, in the CodePen below, following these requirements:

- Unvisited links should be green
- When the user hovers over a link, it should get a larger font-size
- Visited links should be red
- Active links should be black

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: hidden; opacity: 0; transition: opacity 0.5s ease 0s;"></iframe>



### Attribute Selectors

CSS lets us target elements by attribute value. Common uses for this include targeting specific kinds of form inputs (for instance, `input[type="radio"]` to apply rules exclusively to radio selector inputs). We have several options of matching attribute value:

- *Exact match*: `element[attribute=value]`
- *Match pattern anywhere in value*: `element[attribute*=value]`
- *Match pattern at beginning of value*: `element[attribute^=value]`
- *Match pattern at end of value*: `element[attribute$=value]`

To complete the drill below, you'll need to add a selector that targets attribute values. This CodePen contains images of dogs and cats. All dog images have source urls with the word "dog", and all cat images have source urls with the word "cat" in them.

Decide which you like better, dogs or cats. Activate the style rule at the bottom to select all images with source urls that have the losing animal's name. For instance, if you're a dog person, you'll write the selector so that cats get turned upside down.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: hidden; opacity: 0; transition: opacity 0.5s ease 0s;"></iframe>



### Solutions

- [Element selectors](http://codepen.io/team/thinkful/pen/vKgQJm)
- [Combination selectors](http://codepen.io/team/thinkful/pen/ZOLmog)
- [Multiple selectors](http://codepen.io/team/thinkful/pen/XKpyom)
- [Descendant selectors](http://codepen.io/team/thinkful/pen/yJgQdB)
- [Before/after pseudoelements](http://codepen.io/team/thinkful/pen/wWgRaN)
- [Anchor pseudoclasses](http://codepen.io/team/thinkful/pen/mERaNZ)
- [Attribute selectors](http://codepen.io/team/thinkful/pen/PzWVqw)

# Wrap up

In this lesson, we covered the CSS basics. You learned the syntax and vocabulary for CSS, along with key CSS concepts like the box model, specificity, and the cascade. You saw how to use Developer Tools to inspect and manipulate CSS. You also practiced some of the most commonly used CSS selectors.

At this point, you should feel comfortable with the following:

- Describing the different parts of a CSS ruleset (the selector, the declaration block, declarations, properties, values)
- Explaining what is meant when people say CSS is about *presentation* (vs. structure or behavior)
- Explaining the box model
- Inspecting and manipulating CSS using Developer Tools
- Learning new CSS properties
- Solving basic CSS problems like setting background colors, font colors, width, height, etc.
- Using a wide variety of CSS selectors to target HTML elements

If you're unclear on any of the above, be sure to follow up with your mentor.

# Recommended resources

For further reading and practice with CSS basics, the resources listed below are a good starting point.

- Shay Howe's lesson on [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/) is a good primer on CSS, and does a great job explaining the idea of the *cascade* and CSS specificity.
- This short reading on [choosing good class names](https://www.w3.org/QA/Tips/goodclassnames) gives a good explanation of (you guessed it!) choosing good class names.
- If you're looking for more practice with CSS selectors, [CSS Diner](http://flukeout.github.io/) is a fun, interactive way to practice increasingly complex CSS selectors.
- The first two chapters of the free [Discover DevTools](http://discover-devtools.codeschool.com/chapters/1/) tutorial from Google and CodeSchool does a great job demonstrating how to manipulate HTML and CSS on live web pages using Chrome Developer Tools.