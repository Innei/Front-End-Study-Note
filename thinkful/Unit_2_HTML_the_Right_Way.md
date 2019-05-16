# HTML the Right Way

In the previous lesson, we practiced using HTML, but we deliberately held off on providing much in the way of "theory." In this lesson, we'll go deeper into HTML.

First, we'll go over the terminology and background knowledge you need to competently talk about HTML. We'll discuss the difference between tags, elements, and attributes, what is meant when people say HTML is about "structure" (vs. style or behavior), and we’ll learn to write semantic HTML.

In the second assignment, you'll complete a series of short drills to practice HTML.

Next, we'll take our first look at Google Chrome Developer Tools, which you can use to inspect and modify the HTML on any site. See a feature on a site you like, and wondering how it's implemented? Developer Tools makes this (and much more) possible.

Finally, we'll close out this lesson with a challenge where you create an online resume for a fictional person (Sally Student is back!), using semantic HTML.

By the end of this lesson, you'll have a solid conceptual grasp of HTML. You'll be able to speak knowledgeably about it in interviews, and you'll know how to structure your content into a well formed HTML document.



# Anatomy of HTML

Of all the computer languages we'll look at in this course, HTML (hypertext markup language) is the simplest. That's because it's not a full fledged *programming language*. You can't write logical statements using HTML like you can with a programming language like Javascript (where, for instance, you can have code that behaves one way if some condition is true, and another if that condition is false). Instead, HTML is used to *mark up* content so web browsers know what kinds of content they're dealing with.

We already practiced marking up content when we coded Sally Student's "About me" page. We took different bits of content and marked it up appropriately. For instance, we used an `<h2>` tag to tell the browser to render the word "Skills" as a heading, and we used an unordered list with list items (`<ul>` and `<li>`s) to mark up the skills themselves and render them as a bulleted list.

For the most part, that's all there is to HTML: you take content and wrap it in the appropriate tags. You'll get plenty of practice with that throughout this course, but in the remainder of this reading, we'll teach you enough background about HTML to code effectively and sound like a pro in interviews.

Note that unlike most assignments in this course, this one is going to be reading heavy, without much in the way of *doing*. This is because there are certain things you simply need to know about coding in order to knowledgeably discuss HTML with others and to efficiently and accurately analyze and understand code.

### Elements vs. tags vs. attributes

There are three key HTML-related terms you need to be able to use correctly in order to come across as competent in interviews: *element*, *tag*, and *attribute*. Let's distinguish these with an example:

```
<div class="foo-class">
  <p>This is a paragraph with <a href="https://somewhere.com">a link</a> in it.</p>
  <p id="second-paragraph">This is the second paragraph</p>
</div>
```

This snippet has four elements: 1 div, 2 paragraphs, and one anchor. If we look at the `<div>` element, it consists of an *opening tag* (`<div>`) some inner content (the two paragraphs), and a *closing tag* (`</div>`).

To generalize, an HTML element *usually* consists of some content (could be plain text or additional HTML elements) wrapped by *opening*and *closing* tags.

*Tags*, then, are used to mark off the beginning and end of an element. Both opening and closing tags consist of angle brackets and the tag name (`< ... >`), with closing tags distinguished by a forward slash (`</ ...>`).

Note that the reason we said that HTML elements *usually* consist of content wrapped by an opening and closing tag is because some elements are *self closing* and don't have inner content. For example, the `<img>` element, which is used to embed images in an HTML document, has no inner content, and doesn't require a closing tag. So this image element is well-formed: `<p>This paragraph has an image: <img src="./images/foo.jpg"></p>`.

Finally, *attributes* are for setting properties on an HTML element. In the example above, there are three attributes: `class="foo-class"`, `href="https://www.somewhere.com"`, and `id="second-paragraph"`. HTML attributes consist of a name (e.g., `href`) and a value enclosed in quotes (e.g., "[https://www.somewhere.com"](https://www.somewhere.com/)).

Some attributes, like *class* and *id* are valid on almost any HTML element. We'll learn more about using classes and ids as hooks for CSS styles and JavaScript code later in this course. We present them now because they are core HTML attributes that can be used on all but a handful of elements (specifically, they can’t be used on: `<base>`, `<head>`, `<meta>`, `<param>`, or `<title>`).

Other attributes are specific to a particular element. The `href` attribute on our anchor element above is specific to anchor elements.

### Structuring content with HTML

In the programming world, it's commonly said that HTML is about *structuring* content while CSS, which we'll cover in depth in the next lesson, is about *styling* content. HTML tells the browser *what* content to represent, while CSS tells the browser *how* that content should appear.

When we say that HTML is about *structuring* content, we mean two things. First, we mean that an HTML document specifies each and every one of its elements. These can be visible elements (paragraphs and images) or ones that human users never see (for instance, `<meta>` elements appearing in the head of the document).

Second, HTML specifies the *hierarchical relationship* between elements in a document. Below, we have a snippet of HTML, followed by a chart depicting the hierarchical structure of that HTML:

```
<!DOCTYPE html>
<html>
<head>
  <title>Sally Student | About me</title>
  <link rel="stylesheet" type="text/css" href="./main.css">
  <script type="text/javascript" src='./main.js'></script>
  <meta charset="utf-8">
</head>
<body>

  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about_me">About me</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>

  <header>
    <h1>About me</h1>
  </header>

  <main>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p>
  </main>
</body>
</html>
```

![html_document.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.2.1_anatomy_of_html/html_document.png)

Each element from the HTML snippet appears in this diagram, which reveals the *tree structure* of our HTML code. This tree consists of a series of *nodes* (each represented by a box) which lie in hierarchical relation to one another. We call the `<html>` element the *root element*because it is the parent (or grandparent, or great grandparent, etc.) of all other elements in the document. The root element has children (`<head>` and `<body>`).

Looking at the `<li>` elements in the `<nav>`, we find our most nested elements. We have list items inside an unordered list inside a nav inside the body inside the root HTML element.

Nodes existing at the same level of the hierarchy (for instance, the `<nav>`, `<header>`, and `<main>` elements above) are called siblings.

### HTML and default styling

When we wrote our HTML for Sally Student's "About me" page in the previous assignment, we didn't write any code telling the browser *how*the unordered list should look. Instead, we simply told the browser, "Hey this is an unordered list, and inside of it, here are the list items. Here is how my content is *structured*". The browser used its own *internal styling defaults* to determine what the structure we provided should look like. In the absence of custom style information (in the form of CSS), all modern browsers have default styles they will use to display HTML.

Note that default styling varies between browsers. If you create an HTML page with no CSS and view it in Chrome and Firefox, it probably won't look exactly the same. In order to cancel out style differences between browsers, frontend developers often use what is called a *CSS reset* to zero out default styles and ensure a consistent user experience across browsers. We'll learn more about CSS and CSS resets later in this unit.

### Commenting code

Developers commonly need to add what are called *comments* to code. A code comment is a line of text that is used to document some feature or oddity of a given piece of code for fellow project collaborators. In HTML, you can add comments to code using `<!-- comment text -->`.

Here's an example:

<iframe ng-non-bindable="" height="265" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/xOwawK/?height=265&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

Notice how the first line is not rendered in the result tab on the right. This means that a programmer can leave valuable information for future maintainers without it being rendered to users.

Also, notice the second usage of a code comment in this example. This is what is known as *commenting out* code. Here, we have a paragraph element that normally would display, but by putting it in a comment, it does not get displayed. *Commenting out* code is a common way of temporarily disabling code, often times for the purpose of debugging.

###### The Sublime Text keyboard shortcut for commenting is **Mac**: ⌘ + / **Win**: Ctrl + /. If you type this shortcut while the cursor is on an existing line of code, or if you've highlighted one or more lines of code and type the shortcut, that code will be commented out.

### Semantic HTML

When people talk about "semantic HTML", what they mean is that when you're choosing an HTML element to wrap content, you should choose the one that most clearly aligns with the *meaning* of your content. For instance, if you're putting a paragraph of content into the body of your HTML page, use a `<p>` element (and not, say, a `<div>`).

Here's an example of semantic HTML:

```html
<p>These are a few of my favorite things:</p>
<ul>
  <li>pizza</li>
  <li>cats</li>
  <li>coding</li>
  <li>chocolate</li>
  <li>coffee</li>
</ul>
```

In terms of content, we have a paragraph and a list. So we use a `<p>`and a `<ul>`.

While it may seem obvious that we would use `<p>`, `<ul>`, and `<li>`for this example, there's nothing stopping us from achieving a similar result by using only `<div>` elements and adding styles to get the desired layout.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/RRqgbJ/?height=300&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

We haven't covered styling yet, but know that in this example, we're writing style rules that mimic the browser's default styles for paragraphs, unordered lists, and list items.

While the end result of this example might look exactly the same as if we used `<p>`, `<ul>` and `<li>` elements, semantic HTML is always preferable. The names of the HTML elements we choose help browsers, web-crawlers, screen readers, and project collaborators better understand our content. In the first code snippet, it's easy enough to see that it represents a paragraph and a bulleted list, while with the second snippet composed entirely of `div` elements, that structure is less obvious.

The takeaway here is that HTML is *semantic* when the elements we use to represent our content reinforce the *meaning* of that content. For instance, when we use a `<p>` element to represent a paragraph of text, we're using semantic HTML. When you're writing HTML, strive to use elements that communicate the meaning of your document's structure. That means using elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, and others when appropriate.

This brings us to the final point in this assignment: familiarizing yourself with available HTML elements. You definitely don't need to memorize all the elements and their attributes, but it is worth spending a few minutes getting [a sense of what's available](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). When you learn a new element, be sure to check out its attributes. And rest assured, as you look at more HTML from around the web and code your own pages, many of these elements will become second nature.

# Web Detective 101: Inspecting HTML with Dev Tools

Google Chrome Developer Tools are built into Chrome and allow you to debug and inspect HTML, CSS, and JavaScript code. This allows you to develop your own pages and to see how other sites implement features that you find interesting.

In this assignment, we're going to cover the basics of inspecting and modifying HTML code on a live web page, using Developer Tools. Later in this course we'll discuss working with CSS and JavaScript in Developer Tools.

### Steps

1. **Open Google Chrome.**

2. **Go to a website:** For this assignment, let's check out [a page at Web Ahead](http://thewebahead.net/114), which is a site that does a great job using semantic HTML.

3. **Open Dev Tools:** Click the icon of three lines or dots in the upper right hand side of the browser window and follow this path: More Tools > Developer Tools.

   ![opening_dev_tools.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.2.2_inspecting_html_with_dev_tools/opening_dev_tools.png)

   Note that there are three other ways to open Developer Tools: by Ctrl/Right clicking on an element in the browser window and selecting "Inspect" from the context; by selecting View --> Developer --> Developer Tools from the menu bar; and by using the keyboard shortcut **Mac** ⌘ + Option + I **Win**: Ctrl + Shift + I.

4. **Check out the Elements tab.** Once you've opened Developer Tools, a new panel will appear at the bottom of Chrome (or it may appear on the right, depending on your settings). If it isn't already selected, click on the "Elements" tab. The elements tab allows you to instantly adjust the page's HTML and CSS and observe the effects in the main browser window. ![elements_view.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.2.2_inspecting_html_with_dev_tools/elements_view.png)

5. **Choose a specific element on the page:** To find the code for a specific element, click on the first icon in the upper left hand corner (![img](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.2.2_inspecting_html_with_dev_tools/inspect_element.png)) of the Developer Tools window and click directly on the element on the web page. For example, by clicking the icon and then the page's header, you can see the HTML code for that element in Developer Tools.

6. **Add an element:** Select the header for the page in Developer Tools, then Ctrl/Right click the element in the Developer Tools console and select "Edit as HTML". Now you can edit the HTML and text of this element. Try adding an `<h2>` with some text below the `<h1>` that's already there. When you're done editing the HTML, click outside of the current element in Developer Tools, and you should see your changes in the main browser window.

7. **Delete an element:** If you want to delete an element, Ctrl/Right click on it inside the Elements tab and then select "Delete element", and voila, it's gone.

There's a lot more that you can do with Developer Tools, especially when it comes to CSS and JavaScript. We'll cover that later in this course.

### Screencast

<iframe ng-non-bindable="" width="640" height="360" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://player.vimeo.com/video/169621796" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

------

# HTML Drills

In this assignment, you'll practice coding up common HTML elements. We've assembled four CodePen drills for you to complete. Each drill requires you to correctly use one or more HTML elements, including using attributes specific to that element.

Most of the attributes you'll use to complete this assignment have not been explicitly covered. This assignment is therefore also a chance for you to practice a key software engineering skill: effectively and efficiently researching and learning about new language features.

For each drill, we'll tell you the element or elements you need, but it will be up to you to discover the right attribute to set. We recommend looking up the relevant element on [Mozilla Developer Network's list of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). In the detail view for each element, you can see the various attributes that can be set.

Each drill should take no more than ten minutes. You should be able to do your research and code up the element in that time. If you can't complete the drill within that amount of time, check out the solution (solutions are linked at the bottom of this assignment). And even if you do complete the challenge, have a look at the solution we provided to compare your implementation.

Finally, note that if you wish to save your work for these drills, you can click on the "Edit on CodePen" link at the top right of the CodePen, and then click the "Fork" button at CodePen.io to save a version of the CodePen to your account.

### I. Link Here, Link There

For our first challenge, you'll need to create two links: one that opens a link to StackOverflow, and another that [opens an email to](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links) your personal email address.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/qNOGmP/?height=500&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### II. Image Basics

In this drill you'll need to embed an image of your favorite place inside a paragraph. Remember that not all users can actually see images (for instance, visually impaired individuals, web crawlers), so be sure to find the attribute you should set in order to provide alternative text explaining what the image is.

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/gMaJvq/?height=500&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### III. Headers: No Longer Just for Soccer

In this drill, you'll need to add a header element inside of the body (but before the main content). Inside the header, you should have a title ("Lorem Ipsum") on one line, followed by a subtitle on the next ("Holding places since the 1st century BCE"). The subtitle text should be smaller than the title text (and to be clear, we're not asking you to use a `<title>` element).

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/JKGPdW/?height=500&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### IV. Video Basics

In this final drill, you'll need to embed a video clip of your choosing in this CodePen. The choice of video is up to you, but you'll need to use the right attributes to mute the sound on the video. It also should be set up to loop when it reaches its end. Finally, it should contain controls so the user can start and stop the video. You can read up on `<video>`elements [here at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) to start your research.

To be clear, we're not asking you to simply paste in Youtube embed code. Instead, you should use a `<video>` element, and set its attributes properly to mute and loop the video. If you need a source for free video you can link to, check out [archive.org](http://www.archive.org/).

If you don't want to spend time tracking down a video, use [this link: https://archive.org/download/122Eyes1950/122Eyes1950_512kb.mp4](https://archive.org/download/122Eyes1950/122Eyes1950_512kb.mp4)

<iframe ng-non-bindable="" height="500" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/VjeZGG/?height=500&amp;theme-id=0&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

### Solutions

- [Link Here, Link There](https://codepen.io/team/thinkful/pen/vpYrOj)
- [Image Basics](http://codepen.io/team/thinkful/pen/OXNZXR)
- [Headers: No Longer Just for Soccer](http://codepen.io/team/thinkful/pen/KMzRzy)
- [Video Basics](http://codepen.io/team/thinkful/pen/qNZYNG)

# Challenge: Build a Resume with Semantic HTML

To close out this lesson, your challenge is to create a web page for Sally Student's resume, focusing on using semantic HTML. We'd like you to use this fictional character and not yourself so you don't get bogged down in perfecting the information in the resume.

### Requirements

- Use semantic HTML throughout the page. At a minimum you should use: `<header>`, `<main>`, `<section>`, and `<address>` (which you can read up on [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)).
- Include a page title (aka, use a `<title>` element) and [meta description](https://moz.com/learn/seo/meta-description) in the head. You should include these in all public facing web pages you create because they help web crawlers understand your page and contribute to search engine optimization.
- There should be a contact info section, with the following information about Sally:
  - Name
  - Email address (make one up) as a link
  - Phone number (make one up)
  - A picture (feel free to choose one or use [this image of Ilana from Broad City](http://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg)) as a stand-in for Sally.
- There should be a section for Sally's education, and it should list at least one college she attended.
- There should be a section for Sally's employment history, and it should contain at least two entries. Each entry should show the company name, job title, dates of employment, and a short description of the job (for this last bit, feel free to use *lorem ipsum*filler text).
- Be sure to show and discuss this project with your mentor at your next session.

# Wrap Up

In this lesson, we covered the concepts you need to effectively use and discuss HTML. Working through the drills and resume project at the end of the lesson, we learned some new HTML elements and solidified the skill of moving from content to well formed, semantic HTML. We also got up to speed with using Developer Tools to inspect and manipulate live web pages. You’re now on solid footing to learn CSS in the next lesson.

At this point, you should feel comfortable with the following:

- Describing the difference between elements, tags, and attributes
- Explaining what is meant when people say HTML is about *structure*(vs. style or behavior)
- Explaining and using semantic HTML
- Inspecting and manipulating HTML using Developer Tools
- Learning new HTML elements
- Taking content and structuring it into well formed, semantic HTML

If you're unclear on any of the above, be sure to follow up with your mentor.

# Recommended resources

You'll get plenty of opportunities to practice HTML throughout this course, but if you're looking for additional practice with HTML basics, we recommend the following resources as a good starting point

- The [Getting to Know HTML](http://learn.shayhowe.com/html-css/getting-to-know-html/) lesson from Shaye Howe's *Learn to Code HTML & CSS* provides an excellent intro to basic HTML, with an emphasis on semantic HTML.
- HTML Dog's short reading on [Tags, Elements, Attributes](http://www.htmldog.com/guides/html/beginner/tags/)
- Mark Pilgrim's [Dive into HTML5](http://diveintohtml5.info/) is a great primer on the HTML5 standard and semantic HTML.
- Mozilla Developer Network's [HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element) lists all available HTML elements, with links to full entries on each one.