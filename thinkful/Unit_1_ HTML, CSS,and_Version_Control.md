Table of Contents
=================

   * [HTML, CSS, and Version Control](#html-css-and-version-control)
         * [Skills](#skills)
   * [Web page basics](#web-page-basics)
      * [Showcasing Web Content with CodePen](#showcasing-web-content-with-codepen)
         * [A CodePen speaks a thousand words](#a-codepen-speaks-a-thousand-words)
         * [Sign up for CodePen and Create an “About Me”](#sign-up-for-codepen-and-create-an-about-me)
         * [First steps with Sublime Text 3](#first-steps-with-sublime-text-3)
         * [Setting up a basic HTML and CSS project](#setting-up-a-basic-html-and-css-project)
      * [Challenge: Move Your "About Me" to Standard HTML and CSS Files](#challenge-move-your-about-me-to-standard-html-and-css-files)
         * [Requirements](#requirements)
      * [Wrap Up](#wrap-up)
      * [Recommended resources](#recommended-resources)
         * [How the web works](#how-the-web-works)
         * [Sublime Text](#sublime-text)
   * [HTML the Right Way](#html-the-right-way)
   * [Anatomy of HTML](#anatomy-of-html)
         * [Elements vs. tags vs. attributes](#elements-vs-tags-vs-attributes)
         * [Structuring content with HTML](#structuring-content-with-html)
         * [HTML and default styling](#html-and-default-styling)
         * [Commenting code](#commenting-code)
         * [Semantic HTML](#semantic-html)
   * [Web Detective 101: Inspecting HTML with Dev Tools](#web-detective-101-inspecting-html-with-dev-tools)
         * [Steps](#steps)
         * [Screencast](#screencast)
   * [HTML Drills](#html-drills)
         * [I. Link Here, Link There](#i-link-here-link-there)
         * [II. Image Basics](#ii-image-basics)
         * [III. Headers: No Longer Just for Soccer](#iii-headers-no-longer-just-for-soccer)
         * [IV. Video Basics](#iv-video-basics)
         * [Solutions](#solutions)
   * [Challenge: Build a Resume with Semantic HTML](#challenge-build-a-resume-with-semantic-html)
         * [Requirements](#requirements-1)
   * [Wrap Up](#wrap-up-1)
   * [Recommended resources](#recommended-resources-1)
   * [CSS the Right Way](#css-the-right-way)
   * [Anatomy of CSS](#anatomy-of-css)
         * [Anatomy of CSS](#anatomy-of-css-1)
         * [CSS Selectors](#css-selectors)
         * [Getting CSS into HTML](#getting-css-into-html)
         * [CSS Specificity](#css-specificity)
      * [The Cascade](#the-cascade)
         * [The box model](#the-box-model)
         * [Browser Defaults vs. resetting vs. normalizing CSS](#browser-defaults-vs-resetting-vs-normalizing-css)
   * [Web Detective 201: CSS Power Mode with Dev Tools](#web-detective-201-css-power-mode-with-dev-tools)
         * [Steps](#steps-1)
         * [Screencast](#screencast-1)
   * [CSS Basic Training](#css-basic-training)
         * [Drill 1: Width, Height, Color, Border](#drill-1-width-height-color-border)
         * [Drill 2: Font Basics](#drill-2-font-basics)
         * [Drill 3: Background Images](#drill-3-background-images)
         * [Drill 4: Text Contrast Problem](#drill-4-text-contrast-problem)
         * [Solutions](#solutions-1)
   * [Target Practice: CSS selector drills](#target-practice-css-selector-drills)
         * [Element selectors](#element-selectors)
         * [Combinations](#combinations)
         * [Multiple Selectors](#multiple-selectors)
         * [Descendant and Direct Child Selectors](#descendant-and-direct-child-selectors)
      * [::before and ::after pseudoelements](#before-and-after-pseudoelements)
         * [Anchor pseudoclasses](#anchor-pseudoclasses)
         * [Attribute Selectors](#attribute-selectors)
         * [Solutions](#solutions-2)
   * [Wrap up](#wrap-up-2)
   * [Recommended resources](#recommended-resources-2)
   * [Version control with Git and GitHub](#version-control-with-git-and-github)
   * [The Command Line](#the-command-line)
   * [Git and GitHub](#git-and-github)
         * [Git and GitHub: The Mile High view](#git-and-github-the-mile-high-view)
         * [Installing Git and GitHub](#installing-git-and-github)
         * [Initializing a Git Repository](#initializing-a-git-repository)
         * ["Saving" your Progress](#saving-your-progress)
         * [Push your commits to the GitHub repository.](#push-your-commits-to-the-github-repository)
         * [Pulling from GitHub](#pulling-from-github)
         * [Practicing this workflow: Challenge](#practicing-this-workflow-challenge)
   * [Publishing with GitHub pages](#publishing-with-github-pages)
   * [Recommended resources](#recommended-resources-3)
         * [Command Line](#command-line)
         * [Git and GitHub](#git-and-github-1)
   * [CSS Layouts](#css-layouts)
   * [Horizontal alignment](#horizontal-alignment)
         * [Horizontal centering with margin: auto](#horizontal-centering-with-margin-auto)
         * [Centering inline-* elements with text-align](#centering-inline--elements-with-text-align)
   * [The display property](#the-display-property)
         * [Inline elements](#inline-elements)
         * [Block-level elements](#block-level-elements)
         * [Inline-block elements](#inline-block-elements)
         * [Wrap up](#wrap-up-3)
         * [Exercise](#exercise)
         * [Unannotated design file](#unannotated-design-file)
         * [Annotated design file](#annotated-design-file)
         * [Requirements](#requirements-2)
         * [Solution](#solution)
   * [The position property](#the-position-property)
         * [static](#static)
         * [fixed](#fixed)
         * [relative](#relative)
         * [absolute](#absolute)
         * [Exercise](#exercise-1)
         * [Requirements](#requirements-3)
         * [Solution](#solution-1)
   * [The float property](#the-float-property)
         * [Exercise](#exercise-2)
         * [Requirements](#requirements-4)
         * [Solution](#solution-2)
   * [Reasoning about layout](#reasoning-about-layout)
   * [Challenge: From designs to code](#challenge-from-designs-to-code)
         * [The Scenario: Greg's List](#the-scenario-gregs-list)
         * [Requirements](#requirements-5)
         * [Unannotated Design Prototype](#unannotated-design-prototype)
         * [Annotated Design Prototype](#annotated-design-prototype)
         * [Getting started](#getting-started)
         * [Solution](#solution-3)
   * [Wrap up](#wrap-up-4)
   * [Recommended resources](#recommended-resources-4)
   * [Forms and Inputs](#forms-and-inputs)
   * [Anatomy of Forms and Inputs](#anatomy-of-forms-and-inputs)
      * [Overview of form features](#overview-of-form-features)
         * [The &lt;form&gt; element](#the-form-element)
         * [The &lt;fieldset&gt; and &lt;legend&gt; elements](#the-fieldset-and-legend-elements)
         * [Inputs and Labels](#inputs-and-labels)
         * [Input attributes](#input-attributes)
         * [The &lt;select&gt; and &lt;option&gt; elements](#the-select-and-option-elements)
         * [Buttons](#buttons)
      * [Form design and user experience](#form-design-and-user-experience)
   * [Challenge: Signup Page](#challenge-signup-page)
         * [The Scenario: AnalogSea Signup Form](#the-scenario-analogsea-signup-form)
         * [Requirements](#requirements-6)
         * [Unannotated Design Prototype](#unannotated-design-prototype-1)
         * [Annotated Design Prototype](#annotated-design-prototype-1)
         * [Compare your solution](#compare-your-solution)
   * [Wrap up](#wrap-up-5)
   * [Recommended resources](#recommended-resources-5)
   * [Responsive Design Basics](#responsive-design-basics)
   * [Anatomy of Responsive Design](#anatomy-of-responsive-design)
         * [The problem](#the-problem)
         * [Responsive design to the rescue](#responsive-design-to-the-rescue)
         * [Exploring Vox with Dev Tools and Device Preview Settings](#exploring-vox-with-dev-tools-and-device-preview-settings)
   * [Responsive Grids](#responsive-grids)
         * [The classic grid: 960px, 12 columns](#the-classic-grid-960px-12-columns)
         * [A simple implementation using the floatproperty](#a-simple-implementation-using-the-floatproperty)
         * [Your turn](#your-turn)
         * [Solution](#solution-4)
   * [Challenge: Responsive Layout](#challenge-responsive-layout)
         * [The Scenario: From Toppz to bottom (and back again?)](#the-scenario-from-toppz-to-bottom-and-back-again)
         * [Requirements](#requirements-7)
         * [Design](#design)
         * [Solution](#solution-5)
   * [Wrap up](#wrap-up-6)
   * [Recommended resources](#recommended-resources-6)

# HTML, CSS, and Version Control

In this unit, you'll get up to speed on three key technologies:

- *HTML* (Hyper Text Markup Language), which is the language used to describe the *structure* of a webpage.
- *CSS* (Cascading Style Sheets), which is the language used to describe the *appearance* of a webpage.
- *Git and GitHub*. *Git* is a system for *version control*, which is a way of backing up and managing changes to code. *Git* lives on your local computer, and you use it to run version control commands. *GitHub*is a cloud-based platform for storing and collaborating on projects that use Git.

The ultimate goal of this unit is for you to feel comfortable coding up a webpage from designs. By the end, you'll know how to create, publish, and backup basic web pages, and you'll have the right vocabulary to discuss HTML, CSS, and version control with others.

This unit is divided into seven lessons. Here's what we'll cover:

- In *Lesson 1: Web page basics*, you'll take your first steps with HTML and CSS as we rapidly build and publish an "About me" page. The aim of this lesson is to rev up and shallowly touch on all the ideas that we'll go into depth on in the rest of the unit.
- In *Lesson 2: HTML the Right Way*, you'll learn the concepts and vocabulary you need to know in order to reason about, discuss, and effectively write HTML.
- In *Lesson 3: CSS the Right Way*, you'll learn the concepts and vocabulary you need to know in order to reason about, discuss, and effectively write CSS.
- In *Lesson 4: Version control with Git and GitHub*, we'll do a deep dive on version control. Version control has to do with how we manage changes to software. We'll teach you about the command line so you can use Git command line (which is how most professional engineers handle version control), and you'll learn about how Git and GitHub fit into collaborative, real-world workflows.
- In *Lesson 5: CSS Layouts*, you'll learn about the hardest part of CSS: layouts.
- In *Lesson 6: Forms and Inputs*, you'll learn about working with forms in HTML and CSS.
- Finally, in *Lesson 7: Responsive Design Basics*, you'll get up to speed on creating websites that look good across devices, whether your user's screen is two or twenty inches wide.

### Skills

- Working knowledge of HTML
- Working knowledge of CSS
- Code up static web pages based on designs
- Version control basics with Git and GitHub
- Responsive design basics

# Web page basics

In this lesson, we’ll rapidly create an *About me* webpage using basic HTML and CSS. We’ll cover HTML and CSS in great depth in the other lessons in this unit, but for now, know that HTML is the language we use to structure content to be displayed on the web, while CSS is the language we use to style it.

We’ll be creating and publishing a simple *About me* page. First, we’ll create a version using [CodePen](http://codepen.io/), which is an online tool for creating, sharing, and showcasing frontend code.

Second, we’ll install Sublime Text, which is the text editor we’ll use throughout this course to write our code. You’ll learn how to structure folders for a simple website, and how to preview a page in the browser.

The overall goal of this lesson is to get comfortable with the basics of HTML and CSS syntax and working with a text editor. After this quick win, we’ll start systematically learning HTML and CSS in the following lessons.

## Showcasing Web Content with CodePen

Throughout this curriculum, we’ll use [CodePen](http://codepen.io/) to demonstrate and play with new frontend concepts. Whenever possible, as we learn a concept, we’ll embed a CodePen that you’ll be able to inspect and modify to see the concept in action.

In this assignment, you’ll sign up for CodePen, and then we’ll walk you through creating a simple *About me* page, using some basic HTML and CSS. Moving forward, you’ll be comfortable working with CodePen in later assignments.

### A CodePen speaks a thousand words

The easiest way to get a sense of what CodePen is all about is to look at an example. Let’s look at this CodePen, which displays two moving bicycles (adapted from [here](http://codepen.io/lucawater/full/feuar/)).

Click on the *HTML* tab at the top, and you’ll see the HTML for this CodePen. If this is your first time looking at HTML, you might not be able to make much out of this code; don’t worry, you’ll know how to read and write HTML soon.

For now, know that you can *edit* CodePens and see changes in real time. Inside the *HTML* panel, you’ll see that line 1 is blank. Try pasting the following code into that first line: `<h1>These are bicycles!</h1>`.

Also note that you can view and edit the CSS and JavaScript by clicking on the *CSS* and *JS* tabs, respectively. And if you click on “Edit on CodePen” at the top right, you’ll be taken to CodePen’s site.

Next, you’re going to sign up for a free CodePen account, and then we’ll walk through creating a simple “About me” page.

### Sign up for CodePen and Create an “About Me”

Signing up for CodePen just takes a second. Head over to the [signup page for free accounts](https://codepen.io/accounts/signup/user/free) and fill out the form. After you submit the form, you’ll be prompted to provide your profile info, which you can complete or skip. Either way, click “Save & Continue” once you’re ready.

Now we’re ready to create an “About me” page. In the following instructions, we're going to create an "About me" for a fictional person named “Sally Student”. As you create your own CodePen feel free to use your own info.

Before we begin, let's quickly go over the *HTML tags* we'll use to create this page. There are eight of them:

- `<h1>` - A *first level heading* tag. Normally there’s only one of these on a page, and it’s used to indicate the most important header.
- `<h2>` - A *second level heading* tag. This is used for headers that are less important than `<h1>`. HTML gives us `<h1>` to `<h6>`. From `<h2>` on, it’s fine to use more than one on a page. Note that these heading tags help Google’s web crawlers understand what a page is about, and therefore are crucial for SEO (search engine optimization). They also set default styling for any text they wrap (so an H1, for instance, will have bigger, bolder font than a paragraph, by default in all modern browsers).
- `<p>` - The *paragraph* tag, which you’ll be shocked to learn is used to indicate that a grouping of text is a paragraph.
- `<ul>` - The *unordered list* tag is used in conjunction with the `<li>` tag to represent un-numbered, bulleted lists of items.
- `<li>` - Used to indicate a *list item* in a `<ul>`.
- `<a>` - The *anchor* tag, which is used to link to another part of the page, or another page entirely.
- `<div>` - The *div* tag, which is a generic container element, used to group together content.

Let’s put these tags into action. Follow these steps:

1. Go to CodePen.io and click “New pen” at the top of page.

2. We’ll enter our HTML code inside the “HTML” panel at the top left. Click the HTML panel, then type in: `<h1>Sally Student</h1>`. Note how we wrap our content (“Sally Student”) between *opening*and *closing* tags. The opening and closing tags are identical except that the closing tag has a forward slash before the tag name. Once you’ve added this `<h1>` element, you should see “Sally Student” appear in bold, big font in the display panel at the bottom of the CodePen interface.

3. Now on the next line just below our `<h1>` element, type the following code to get a paragraph: `<p>I'm an aspiring full stack web developer. I love cats, coding, and crocheting.</p>`. You should see this text appear below “Sally Student”, and it will be smaller than the `<h1>` text.

4. Next let’s make a section to display Sally’s skills. Below the paragraph element you just created, type the following HTML: `<h2>Skills</h2>`. You’ll see new text appear in the display panel, and it will be smaller than the `<h1>` text but bigger than the `<p>` text.

5. To list off Sally’s skills, we’ll create one `<ul>` element with four `<li>` children. Type the following code:

   ```html
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
    </ul>
   ```

   Once you’ve written this code, you should see a bulleted list with four items appear in the display panel.

6. Now we’re ready to create a contact info section, starting with another `<h2>` element. On the line below the closing `</ul>` tag, type `<h2>Contact Info</h2>`.

7. Time to add a link to Sally’s Twitter account. For that we’ll use the `<a>` tag. Below the contact info `<h2>` element, type the following code: `<p>Twitter: <a href="https://twitter.com/sallyStudent">@sallyStudent</a></p>`. Here, we're wrapping our `<a>` element in a paragraph. You'll also note that we're setting the `href` attribute, which is used to indicate where the link directs you when you click it.

8. At this point, we've got all the content we need on the page, but it's admittedly not much to look at. You're going to learn about using CSS to style HTML content in depth later in this unit, but for now, let's make some small changes to get a background color, a border, and some padding, so our text doesn't brush up right against the top and left edges of the display interface.

9. To add our styling, we're going to need to group all the elements we've created so far in a single `<div>` element that we can hang some styles on. At the very top of your HTML code, add a new line, and insert an opening `<div>` tag. Then, at the bottom of your HTML code, on a new line, add a closing `</div>` tag. Click the dropdown at the top right of the HTML panel, and click "Tidy HTML" to properly indent your code. Note that when we wrap our original content in a single `<div>` element, it looks exactly the same as before.

10. At this point, here's what the entirety of your HTML code should look like:

    ```html
    <div>
      <h1>Sally Student</h1>
      <p>I'm an aspiring full stack web developer. I love cats, coding, and crocheting</p>
    
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
      </ul>
    
      <h2>Contact Info</h2>
      <p>Twitter: <a href="https://twitter.com/sallyStudent">@sallyStudent</a></p>
    </div>
    ```

11. Now we're going to add some CSS styles that target our `<div>`element. In the CSS panel, input the following code:

    ```html
    div {
      background-color: azure;
      border: 1px solid aquamarine;
      padding: 30px;
    }
    ```

    This code tells the browser that any and all `<div>` elements should get an azure colored background, a 1 pixel wide, solid aquamarine border, and 30 pixels of padding, which you can see in the "Result" panel. Remember, this assignment is just meant to be a teaser, so if the CSS doesn't make sense, don't worry, we'll cover that topic in depth throughout this unit.

And with that, we're done creating our simple "About me" CodePen. CodePen automatically saves as you go along, but to be safe, you can click the "Save" button at the top of the interface.

Your final result should look more or less like this:

<iframe ng-non-bindable="" height="450" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/bpXXPg/?height=450&amp;theme-id=0&amp;default-tab=result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

Finally, note that if you want to share this or any CodePen with the outside world, you can do that by sharing the link that appears in your browser (in which case, the viewer will see the HTML/CSS/JS tabs just like you do). If you want to only share the final result, you can click "Change view" --> "Full Page" and copy and share the resulting URL that appears in the browser.

At this point, you should feel comfortable creating, editing, and sharing CodePens. But if you have any questions or ran into difficulties, be sure to let your mentor know, or reach out in the Slack community.

#Sublime Text and Basic Project Structure

In the previous assignment, we created a simple "About me" page using CodePen. CodePen is great for showcasing and experimenting, but it's not a tool you'd normally use to write production code.

Most of the time, you'll use a *text editor* to write your HTML, CSS, and JavaScript. A text editor is any program that allows you to write, edit, and save text files. While in theory it would be possible to use Microsoft Word or Google Docs to write code, professional programmers use specialized text editors with features that make us more productive, for example by catching syntax errors using highlighting (a programming version of spell check).

In this course, we recommend that you use Sublime Text 3. It is one of the most popular editors, in large part because it is easy to use and learn, lightweight, highly configurable, free to download, and has a rich ecosystem of plugins and integrations.

In this assignment, you'll get up and running with Sublime Text 3. We'll walk through creating a simple project with HTML and CSS files and code. Then we'll port the "About me" page from the previous assignment to a project folder on your computer. In addition to Sublime Text basics, we'll touch on:

- Naming conventions for HTML and CSS files
- How to structure project directories
- 6 new HTML tags:
  - `<!DOCTYPE>`
  - `<html>`
  - `<head>`
  - `<title>`
  - `<body>`
  - `<link>`
- how to link to a CSS file from an HTML file
- how to preview a web page you're working on in the browser

Let's get started.

### First steps with Sublime Text 3

Head over to the Sublime Text 3 [download page](https://www.sublimetext.com/3) to get the installer that's right for your operating system.

Note that Sublime Text 3 is free to download and use, but if you choose not to purchase it, you'll regularly be prompted to consider paying. At the time of writing, Sublime Text 3 costs $70 to purchase. It is a great piece of software, and once you start using it, if you like it as much as we do at Thinkful, consider supporting the project by purchasing it.

Once you've downloaded and installed Sublime Text, open the program. You'll see a blank file that looks like this:

![sublimestartupscreen.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.1.2_sublime_text_basic_project_structure/sublimestartupscreen.png)

Feel free to click on the file and enter any text you like. Also note that you can set tab size and the syntax of the language you're typing by clicking on the respective controls in the bottom right corner of the interface.

###### The Sublime Text package ecosystem is expansive, and the program itself is highly configurable. There are many high-quality blog posts on customizing Sublime Text, and it's definitely worth talking to your mentor about configuring Sublime Text to power up your development workflow. If you're interested in exploring what's out there, go through the "Simple" instructions for installing Sublime Text Package Control [here](https://packagecontrol.io/installation) and review the Package Control docs.

You can also set syntax by invoking the *command palette*. One keyboard command you'll definitely want to memorize is

**Mac**: ⌘ + Shift + P

**Win**: Ctrl + Shift + P

This opens the command palette, which is your portal to a bunch of other Sublime Text commands.

Go ahead and use the keyboard shortcut to invoke the command palette, then type "HTML". Among the various HTML related commands, you'll see `Set syntax: HTML`.

Once Sublime Text knows the syntax of the language you're writing in, you can start to take advantage of its valuable *tab completion* features. Let's create a new file (⌘ + N **or** Ctrl + N ) and immediately save it (⌘ + S **or** Ctrl + S) to your desktop as `foo.html`, and notice that this is yet another way to get Sublime Text to recognize the syntax of your file (HTML in this case, due to the `.html` suffix.

Now, on the first line of your new html file, type `html` and then hit the tab button. You should see the following code automatically appear in your file:

```
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>

</body>
</html>
```

The snippet that Sublime Text has inserted is the boilerplate code you need to include on any and all HTML pages. The snippet includes five (technically four -- see the description of `<!DOCTYPE html>` below) new HTML elements:

- `<!DOCTYPE html>`: Strictly speaking, this is not a tag, but rather a command to the browser to parse the page as HTML5, which is the most recent version of HTML. We'll learn more about HTML5 later in this unit.
- `<html>`: The html element is bounded by opening and closing `<html>` tags. We say that the *HTML element is the root element*and all other HTML elements are *children* of this element, meaning they’re contained within the HTML tags.
- `<head>`: The head element contains metadata about the HTML document. By default, we get + `<title>` inside the head (discussed next). There are numerous children types that can appear in the head. If you take a look at head elements out in the wild, you'll often find metadata related to SEO (search engine optimization), Facebook sharing, or definition of document wide variables going on in document heads. For now though, just remember that the head element is where we put document metadata.
- `<title>`: Web browsers display the text in the title element in the browser tab. Web crawlers also look to this element to help classify web pages, so it plays an important part in SEO.
- `<body>`: Body tags are used to delineate the main displayable elements of a web page.

Let's give this page a title. Between the title tags (`<title></title>`), input some text. Then on a new line underneath the opening body tag, hit tab once (the convention with HTML is to indent your code one tab for each level deep in the hierarchy), and type `p`, followed by tab. Sublime Text autocompletes *p* to a paragraph element.

In between the paragraph tags, type `a` and then hit tab. Sublime Text generates an anchor element, and prompts to input the href attribute. Let's add "[https://www.thinkful.com"](https://www.thinkful.com%22/) for the href, then put the text `foo bar bizz bang` in between the `<a></a>` tags, then save.

Let’s now look at our web page in the browser: for Mac users, ctrl-click, and for Windows users, right click, and then select "Open in browser".

### Setting up a basic HTML and CSS project

To wrap up this assignment, let's go through setting up a basic web page using Sublime Text.

1. First we need to create a folder for this project. On your desktop, create a new folder called "projects". You can use this folder to store all your projects for this course.

2. Inside of your projects folder, create a folder called "foo-bar".

3. Now in Sublime Text, open this folder. Since we haven't put any contents inside the folder, you'll only get an untitled window.

4. Try typing ⌘ + K, B **or** Ctrl + K, B (where the comma is used to separate one grouping of keystrokes from another -- in other words, hold down ⌘ or Ctrl, and while still holding it down, press K then B). This toggles the side bar, which is where you can see the contents of the current folder, if any. And if you accidentally type ⌘/Ctrl B, just hit *escape* to exit the Sublime Text terminal.

5. Now let's create two new files. Inside of your project folder, create one file called *index.html* and another called *main.css*. You can do this by creating new files in Sublime Text and saving them in the right place or by using your operating system's file management system. For example, on a Mac, open Finder, find the folder, and create a file inside that folder. If you're interested in Sublime Text packages, be sure to checkout [AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile), which can be installed through Package Control (discussed above). Note that both files become visible in Sublime Text's sidebar as soon as they've been created.

6. Inside of index.html, insert the appropriate boilerplate code using the tab completion trick we discussed before (type *html* and then hit tab).

7. Inside of the head element of your html file, add some text to the title element.

8. Also in the head element, type *link* and then press tab. This will generate a link element that looks like this: `<link rel="stylesheet" type="text/css" href="">`.

9. Set the href attribute's value to *main.css*. This tells the browser to look for a file called `main.css` in the same folder as the HTML page itself.

10. Inside of the body element, add a new paragraph element with the text "foo bar".

11. Consider adding an anchor element (`<a>`) around one of the words to practice that syntax.

12. Save your html file.

13. Now open main.css in Sublime Text. You can do this by expanding your project folder in the sidebar and clicking the file. Add the following CSS rule and then save:

    ```
    p {
      color: red;
    }
    ```

14. Open index.html in the browser. You'll know that all of your code is correct and that you've successfully linked to your CSS file in your HTML file if you see red text that says "foo bar". Note that if you added an anchor element, it will probably appear as blue and underlined, depending on your browser's default styling for links.

15. Finally, let's try out one more Sublime Text command worth memorizing. Type ⌘ + P (Mac) **or** Ctrl + P (Windows). You'll get a popup where you can access index.html and main.css. Although our current project is easy enough to navigate, the ⌘/Ctrl P command is powerful when dealing with projects that contain large numbers of folders and files because Sublime Text applies typeahead logic when you input in the resulting input.

###### Sublime Text has a whole bunch of keyboard shortcuts, and you can also create new ones. Keyboard shortcuts can be a great way to increase your productivity after you've mastered the basics of Sublime Text. You can find an unofficial guide to Sublime Text 3 keyboard shortcuts [here for Mac](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html) and [here for Windows](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_win.html).

## Challenge: Move Your "About Me" to Standard HTML and CSS Files

In the previous assignment, you learned how to create a simple web page with separate HTML and CSS files. In this short challenge, we'd like you to reinforce that knowledge by moving the "About me" page you created in the previous assignment into the separate HTML and CSS files.

###### Below you will find a list of *requirements* (also known as a *functional specification*, or *specs*) for the page you need to create. Throughout this course, we'll give you challenges that require you to create a page or app that conforms to a set of requirements. We use these for a few reasons: First, these are a form of “active learning.” By putting into practice what you’ve read about and tried (crucially, *without* step-by-step guidance), you’re forced to understand concepts more deeply and you’ll retain them longer. Second, these challenges give you valuable engineering experience: on the job, software engineers often start with a functional specification devised by the product team, and it's the job of the engineer to implement an app that conforms to the spec.

### Requirements

- Create a new project folder, and create index.html and main.css files inside that folder
- Link to the main.css file in the head of the index.html file
- When you preview this page in the browser, what you see should be similar to what you saw in the CodePen result at the end of the previous assignment. If you see the right text content, but are missing styling, that most likely means that you made a mistake linking your CSS file in the head of your HTML file.

Be sure to use this challenge as an opportunity to practice the keyboard shortcuts and tab completion tricks we covered in the previous assignment.

If you get stuck, don't hesitate to reach out for help!

## Wrap Up

In this lesson, we got set up with CodePen and Sublime Text, and learned the basics of HTML and CSS. Hopefully this has given you confidence that you’re capable of building these skills and creating great products over time.

We also learned about some essential HTML tags and how to structure a project folder for a simple website. At this point, you should feel comfortable with the following:

- Creating HTML and CSS files, and linking to a CSS file inside your HTML
- Structuring a simple project folder
- Creating CodePens to showcase your work
- Using Sublime Text to create and edit files
- Inserting the boilerplate code that all HTML pages need (by using the Sublime Text tab completion shortcut `html` followed by a tab).

If you're unclear on any of the above, be sure to follow up with your mentor.

## Recommended resources

If you're looking for some additional study about the concepts covered in this lesson, below you'll find a curated list of resources. You are not required or expected to check out any of them, but if you find yourself wanting to know more about the topics in this lesson, they're a good starting point.

### How the web works

The following resources can help you build up your mental model of how the web works:

- Mozilla Developer Network's guide to [How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- Marc Cohen's short, sweet guide to [How the Web Works in One Easy Lesson](http://mkcohen.com/how-the-web-works-in-one-easy-lesson)
- Short video on [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)

### Sublime Text

Sublime Text is highly configurable and offers some great plugins and keyboard shortcuts. The following resources can help you get up to speed on some of these features:

- Scotch.io's 8-part video series on [Getting Started with Sublime Text](https://school.scotch.io/getting-started-with-sublime-text/getting-started)
- Also from Scotch.io, [the Complete Visual Guide to Sublime Text 3: Getting Started and Keyboard Shortcuts](https://scotch.io/bar-talk/the-complete-visual-guide-to-sublime-text-3-getting-started-and-keyboard-shortcuts)
- [Sublime Tutor](https://sublimetutor.com/) is a tutorial you can complete inside Sublime Text to build up your working knowledge of keyboard shortcuts and other time-saving features. Note that this resource goes deep, and at this stage in your learning, you probably won't have much use for some of the more advanced features it covers.













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



# Version control with Git and GitHub

This lesson will get you up to speed on professional work flows for Git and GitHub, the most popular combo of products for version control. Git is a tool that allows you to take snapshots of your code at different points in time. By working with Git, you create a history of different moments in the life of your code, and you can jump between those points as needed. Concretely, Git allows us to back up our work and collaborate with other people working on the same project. Github is an online service that allows you to store and share GitHub repos.

First, you'll learn command line basics, which you'll need to use Git effectively. After that, you'll learn more about doing version control with Git and GitHub. Finally, you'll learn how to use [GitHub pages](https://pages.github.com/), which is a GitHub feature that allows you to host and publish live websites from your GitHub repo.

By the end of this lesson, you'll know the basics of working from the command line and key version control concepts using Git and GitHub.

# The Command Line

A command line interface (or the command line) is a tool for browsing and interacting with your computer by typing commands. By the end of this assignment, you'll know how to control your machine from the command line using basic commands that every developer uses. Specifically, you'll learn how to create a file and a folder (sometimes called a "directory") and navigate your computer. You've probably done each of these things in the past using the graphical interface, but as a developer you'll do these things so often that you need a faster method.

It takes some time – probably a few weeks – to become comfortable at the command line. Until that happens, know that although it's a powerful tool, you won't harm your computer if you make a mistake, so don't be afraid to make mistakes while you're still getting comfortable. This assignment is focused on understanding these commands; at the end of the assignment you will find a list of commands you should memorize.

For Mac users, your command line application is called Terminal. Open it now and you'll see something like this:

![terminal.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.1_the_command_line/terminal.png)

My username is dfriedman. You created a user account when you set up your computer the first time.

For PC users, the command line that we recommend using is the GitBash (which is automatically included in the install package from [git-scm](http://git-scm.org/)) Please take the opportunity now to install it with the link. After you have done so the GitBash should look like this:

![GitBash.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.1_the_command_line/GitBash.png)

All of the commands used in this assignment are the same in Git Bash on PC and the Terminal on Mac and Linux; however, more advanced commands differ between the two. When searching for more advanced commands further in the course make sure you're searching for the proper command for your system.

Now start making.

\###pwd

Type `pwd` into your terminal and hit enter. You should see something like this:

```
$ pwd
/Users/dfriedman
$
```

`pwd` stands for "print working directory." You'll want to remember this command, so when you type `pwd` try saying "print working directory" out loud (unless you're working in a coffeeshop...). Press enter, and your command line will print the location in your computer that it currently points to, also known as a "path". When moving around in the command line, it is no different than if you were clicking through folders with your mouse. The graphical equivalent of that path looks like the image below:

![path.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.1_the_command_line/path.png)

In a moment, you'll start moving around your file system; if you ever feel lost, simply type `pwd` and your command line will tell you where it's currently pointed.

\###Creating and Deleting Folders

Now let's make a test folder. The command to create a folder is `mkdir`(make directory) and it's followed by the name of the folder you want to create. Type `mkdir test` into your command line. It should look like this:

```
$ mkdir test
$
```

How do you know something actually happened? You need to list the contents of the directory you're currently pointing to. To do that, type `ls`. The result looks like this:

![ls.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.1_the_command_line/ls.png)

Notice the folder called `test`? Your command line should list the same one, but will have different contents than mine. Open Finder (for Mac users) or Windows Explorer (for PC users) and find the test folder, like so:

![test.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.1_the_command_line/test.png)

Once again, creating a folder at the command line is exactly the same as creating one using your mouse.

You just learned how to create a folder, next you will create a file using the `touch` command. To create file type the command `touch testfile.md`. If you check out Windows Explorer or Finder, you will now see that it contains a file called testfile.md.

You've just practiced creating a folder and a file, next you will learn to delete them. First you will delete the file using the `rm` command. At the command line type `rm testfile.md`. You will see that the file has been deleted. Note that this file is *deleted* not put in the trash. `rm` is a permanent change, that cannot be undone on your computer. Luckily, as long as you're using version control (like Git) you will have the ability to get the file back that way.

Now you will delete the `test` folder. The command to delete a folder is `rmdir`. Type `rmdir test`. You should see it disappear in Finder or Windows explorer.

To confirm you deleted the folder and file without looking for it in the graphical interface, you have to list the contents of the directory (`ls`). `test` and `testfile.md` should no longer appear in the list.

It's probably good to mention that you cannot use `rmdir` on a directory containing files. You will need to remove each of the files manually, or you can use `rm -rf test`. The `-rf` are options, or flags, which we can pass to tell the command what to do. In this case the `r` tells the command (`rm`) to recursively remove the directory and its contents and the `f` forces the command to execute without a prompt and ignoring any warnings that are encountered. Like `rm`, this is a permanent change that can only be undone using version control (like Git).

Before moving on, practice the process of creating and deleting a folder and file again. You may name it whatever you want, but make sure that it gets deleted.

\###Navigating Your Computer

Now that you can create and delete folders, it's time to start moving around your computer from the command line. The primary command you'll use to move is `cd` which stands for "change directory". Every time you type `cd`, say "change directory" out loud.

Before you change directories, you've got a problem: how do you know which directory you want to change into? Start by listing the contents of your current directory. You should see the `Desktop` directory. Type `cd Desktop` and hit return to enter the folder. Type `pwd` and hit enter to confirm that you've entered your desktop directory (are you still saying "print working directory" out loud?).

###### In an earlier assignment, we advised you to create a folder to hold all your projects for this course on your desktop. If you don't have a projects folder on your desktop, create one now by entering `mkdir projects`.

From the desktop folder, navigate into the projects folder by entering `cd projects`, followed by enter.

Now that you know how to enter a directory, you need to learn how to exit it, or "go up a level". Type `cd .` and hit enter. Now print your working directory (type `pwd`). What happened?

Nothing. `.` is a shortcut for your current directory, so when you type `cd .` you don't move. `..` is a shortcut for the directory above your current directory. Type `cd ..` and hit enter. Print your working directory. Where are you now?

There's one final shortcut you should know: `~` means home directory. Enter your projects directory. Print your working directory to confirm where you are. Now type `cd ~`. Print your working directory. Where are you?

Now find your projects folder. Enter it and exit it three times, speaking the commands out loud as you go.

\###Moving and copying files

There's two more commands to learn: `cp` and `mv`. `cp` copies files, in the same folder or a new folder, and `mv` moves files.

Navigate to your projects directory. Print the contents. If you don't have anything in it, create a file called `test.md` (`touch test.md`). To copy that file in the same directory, type:

```
$ cp test.md test2.md
$
```

Now if you list the contents, you'll see your original file and the copy. You can also use `cp` to copy a file into a new directory, by specifying that directory (make sure to substitute your username for mine):

```
$ cp test.md /Users/dfriedman/test3.md
$
```

Now if you navigate up a level from your projects directory and list the contents, you should see the copy there.

If you want to move a file instead of copying it to a new location, use `mv` instead. Navigate to your projects directory, where you should have at least `test.md` and `test2.md`. Let's move test2 to your home directory.

```
$ mv test2.md /Users/dfriedman
$
```

Now navigate to your home directory (`cd ~`) and list the contents: you should see `test2.md`. Delete that file so you don't leave a mess.

\###Try it!

Time to put it all together. Close your command line and reopen it so you're starting clean. Navigate into a random folder that has nothing to do with this work. To do so, list the contents of your home folder, enter something you don't recognize, and repeat. Get lost.

Now navigate back to somewhere you recognize by typing `cd ..` and then checking where you are with `pwd` as you go.

Get lost again. Now navigate back to your root directory in one command. Remember the shortcut for home directory?

Now enter your projects folder. Create a folder called `command-line-exercises`. Enter it. Create a file. Copy that file. Move that file up one level to your projects folder. Navigate to your projects directory and delete that file. Now delete the folder `command-line-exercises`.

Go home (on your computer; we don't care where you're working). If you can comfortably walk through these steps, you're ready to move on to the next assignment.

Here's the list of commands you should memorize at this point:

- `pwd`
- `ls`
- `cd`
- `mkdir`
- `rmdir`
- `cp`
- `mv`

If you can't articulate what each of these does, go back to the relevant section and repeat the example.

# Git and GitHub

In this assignment, you'll learn and practice the basics of Git and GitHub. By the end of the assignment, you'll be able to:

1. Initialize (create) a new Git repository
2. Add and commit (save) files to a repository
3. Create a repository on GitHub for your project
4. Push your commits to the GitHub repository
5. Recover lost work from GitHub

There's way more you can do with Git and GitHub, and more you'll have to learn to work as a developer, but you should become comfortable with these basics during this course before learning more advanced workflows.

### Git and GitHub: The Mile High view

Git is the most popular program used for "version control." Git lets you save snapshots of your project as you build it. Each time you save a snapshot, it shows you how the version you just saved differs from the previous version. You can (and will) use Git on any kind of project, whether it's a simple website or complex iOS app.

Git on its own is useful, but if you want to work from multiple computers or collaborate with friends, simply saving a snapshot to your local machine isn't enough; you need to save a version to a server in the cloud that your co-workers can access. For that, you'll use GitHub, the most popular service for hosting code remotely. After saving a snapshot to Git, you'll "push it" to GitHub and then you'll have a copy stored on their servers. If you then switched to a new computer (or if a collaborator logged in from a different computer), you could "pull" a copy from GitHub, and work from exactly where you left off.

### Installing Git and GitHub

First, you'll need a GitHub account. Create an account by clicking [this link](https://github.com/join) and following their instructions.

Next, you need to install Git. One approach is installing GitHub's Mac or Windows interface (or GUI), and letting their GUI take care of the rest (note that you could use their GUI to control Git, but you will learn how to control Git from the command line as most developers do).

**Mac Users**

Newer Mac's come with git installed. To test if you have git already, open the terminal program and type `git --version`. That should give you a version number. The specific number isn't overly important, and you can check with your mentor to ensure you are up to date.

If you get an error, then you will need to visit [GitHub for Mac](https://mac.github.com/) then download and open the application. You'll be greeted with a setup window; enter the same credentials that you used for GitHub (don't worry about the 2-factor authentication at this point). In the same pop-up, there is an advanced tab. In the advanced tab, click `Install Command Line Tools`. You can also access the same menu by clicking the application name, and opening the preferences.

Installing the command line tools will prompt you for your administrator password, and then you'll be ready to use Git from the command line.

From here on out, try not to use the GUI to help you get used to using the command line. As a developer, there are many powerful tools at your disposal that require the command line, so getting used to it now will be very beneficial.

**Windows GUI Install**

Visit [GitHub for Windows Website](https://windows.github.com/) and follow their installation instructions. Once you've installed and opened it, you'll be greeted with a setup window; enter the same credentials that you used for GitHub (don't worry about the 2-factor authentication at this point). Once you have finished the walkthrough, you won't need to use the GUI anymore. You may notice that the installer also installed a second program called `Git bash`. This is a unix style terminal application that will allow you to interact with Git and your computer using the same commands as a Mac or Linux.

\###Configuring Git

First, save your user name and Email in Git. You'll only have to do this once. Make sure the username and Email matches the credentials of your GitHub account. Use the following commands:

```
git config --global user.name "Beyonce Knowles"
git config --global user.email beyonce@thinkful.com
```

### Initializing a Git Repository

We're going to learn how to *initialize*. This refers to when you add Git's version control to a project.

To do this, let's quickly create a throwaway project that we can push to GitHub. From the command line, navigate to your projects folder, and then create a new folder called "first_push" by running `mkdir first_push`. Now run `cd first_push` to move inside folder.

Next we need to create a file inside of this folder, because Git doesn't pay attention to empty folders. Enter the command `touch README.md`. It's a common convention to add a file called README.md. `.md` is the suffix for [Markdown files](http://daringfireball.net/projects/markdown/), and Markdown is a language that looks a lot like plain text, but that gets translated into HTML. You'll probably want to learn Markdown at some point in your career as a frontend developer, but don't worry about that for now.

For good measure, let's add some text to README.md. You can do this by opening the file in Sublime Text and saving some text, or you can try doing this from the command line with `echo "foo bar bizz bang" >> README.md`.

Now that we have a throwaway project, we're ready to initialize. Verify that you're inside of your `first_push` folder by printing your working directory (are you still saying 'pwd' out loud?). If you aren't, navigate there.

Now, use the `git init` command to "initialize" the repository:

```
$ cd projects/first_push/
$ git init
Initialized empty Git repository in /home/Desktop/projects/first_push/.git/
```

Notice how Git tells you that you created the repository in the *.git*directory. This is a new directory that Git creates where all of the history for the project will be stored. The existence of a *.git* directory is also used to inform Git that you are working within a repository. The dot at the start of the directory name indicates that it is a hidden directory (you won't see it if you open the folder in a graphical interface).

\###Checking Status and Branches

Take a look at what Git sees when a new repository is initialized. To do that, type `git status` into your command line. This command will soon be your best friend when using Git: it tells you everything you need to know about the current state of the repository. It's similar to `pwd` in that it doesn't cause anything to change; rather it's a sort of check for where you are:

```
$ git status
# On branch master
#
# Initial commit
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       README.md
#
nothing added to commit but untracked files present (use "git add" to track)
```

First it tells you that you're working on the **master branch**. A single repository can have multiple branches, each containing a different version of the code. It's common to use master as the stable branch, which contains production-ready code (the code powering your actual, live product), and a development branch which is used as you develop new features (code not shipped to users until it's ready). For now, just use the master branch and do all your development on that.

### "Saving" your Progress

The next important piece of information Git gives when you type `git status` is the status of the files. Currently you have one "untracked" file. Untracked files are ones that are inside the repository but not under version control. To take a step back, when you save a Word document, you only need to do one thing: hit "save." In Git, saving a file requires two steps: telling Git to track the file (what's called, "adding" it), and then saving it (what's called "committing").

Generally you don't want to have untracked files within your repository. So use `git add` followed by the file name to tell Git to track any changes made to the files. Type the following two lines:

```
$ git add README.md
```

Now see what's changed in your status:

```
$ git status
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached <file>..." to unstage)
#
#       new file:   README.md
#
```

Now that Git is tracking your README.md, you can commit it to store this particular snapshot of your project. Try committing the changes using the `git commit` command:

```
$ git commit -m "Initial commit"
[master (root-commit) f9ba0e4] Initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
```

The file has been committed successfully. To confirm that everything was committed properly, type `git status`:

```
$ git status
# On branch master
nothing to commit, working directory clean
```

When you see `nothing to commit, working directory clean`, you know that all your recent work was committed.

\###Saving your Snapshot to GitHub

Now that you have your first Git repo up and running you want to send it to GitHub so your co-workers can start adding to it. Go to the [create new repository page](https://github.com/new), fill in the information for your repository, and hit *Create Repository*:

![Creating a GitHub repo](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.2_git_and_github/create_repo.png)

When you have created the GitHub repository you will be shown a screen with some instructions for linking your Git repository with the remote GitHub repository:

![GitHub setup](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.2_git_and_github/github_setup.png)

Because you have an existing repository set up on your computer, follow the second set of instructions. First, add the GitHub repository as a remote to your local Git repository using the `git remote add`command (copy the command from GitHub rather than here):

```bash
$ git remote add origin https://github.com/benjaminEwhite/first_push.git
```

A remote is a copy of your local repository which is held somewhere else (on GitHub's servers, in this case). You can push changes to a remote or pull changes from a remote to make sure that your local and remote repositories stay in sync. You can have more than one remote for a single repository. For example, you may have a remote which belongs to a collaborator so you can pull changes they have made into your local repository. Or you may have a separate remote which you will push to in order to deploy the latest version of your code.

Here you are creating a remote called *origin*. This is the name that is conventionally given to your main remote. You should push changes up to your origin remote on a regular basis so you have an up-to-date backup of your code and its history.

### Push your commits to the GitHub repository.

Now back on the command line, send your changes to the remote repository using the `git push` command. If it asks for your password, and you notice that it doesn't seem to respond as you type, know that the terminal is registering your keystrokes; as a security feature, it won't provide visual feedback that reveals the length of your password.

```bash
$ git push origin master
Username for 'https://github.com': benjaminEwhite
Password for 'https://benjaminEwhite@github.com':
Counting objects: 3, done.
Writing objects: 100% (3/4), 235 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/benjaminEwhite/first_push.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```

This command is doing a couple of things. First, it will create the master branch in the remote repository because it does not currently exist. Then it sends the most recent snapshot of the newly created master branch so the copy on GitHub matches our local copy.

Try visiting your repository on the GitHub website. You should see that your local files and change history are now available to view online.

### Pulling from GitHub

There's one more basic function of Git you need to know: how to pull from a remote repository so that your version matches the version on a remote server. To do so, you'll use the `git pull` command, pulling from the master branch. Type the following command:

```
$ git pull origin master
Already up-to-date.
```

Since the repo you're pulling from is already the same as your local repo, git compares the two and notifies you that your local version is up-to-date. If the remote version were different than your local version, it would overwrite your local version with any updated changes, such as a new feature or bug fix that a co-worker had developed.

### Practicing this workflow: Challenge

This workflow is the same one you should follow with every project: initialize a Git repository on the folder of a specific project (make sure to initialize it in the right place), add your files, commit them, and then push them to GitHub. If it's your first time pushing a project to GitHub, you'll need to visit the GitHub website, create a repository there, and then set your local repository up to match that with the command provided by GitHub.

A common mantra with Git is: "commit early and often." You want to save your work frequently so you don't lose progress, and so that you can review the history of your progress in logical steps when you're finished (there's a page on GitHub where you can see a history of commits).

Run through this workflow one more time with a new project:

1. Create a new folder in your "projects" folder. Name it whatever you'd like.
2. Add at least two files to this folder.
3. Initialize the repository using Git from the command line.
4. Create a repository on GitHub and connect your local repository to it.
5. Add and commit your files.
6. Push them to GitHub.

You'll likely find yourself referencing the commands for each of these steps. If you are, do the challenge one more time to get comfortable with the workflow.

To complete this lesson, submit the new project you create in the steps above to your mentor using the GitHub link to your project (for example: <https://github.com/benjaminEwhite/practice_project>). Your mentor can confirm that you've saved everything to GitHub properly.

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

\###Git Cheatsheet

Use this cheatsheet as a reference for each of the steps in the basic git workflow.

How to commit your work for the first time in a new project:

- Initialize a repository: type `git init`. Command line should say "Initialized empty Git repository"
- Check the repository: type `git status`. It should show you the untracked files.
- Save your progress: track the file by adding it using `git add`followed by each of the filenames, one at a time.
- Check what has changed: type `git status`.
- Commit the changes: type `git commit -m "commit message"`
- Success! If you type `git status` You should see "nothing to commit, working directory clean"

Pushing your snapshot to GitHub:

- Go to github.com and create a new repository
- Add GitHub repository as a remote branch: Use `git remote add origin git@github.com...` (follow GitHub's instructions for this line)
- Send changes to repository: type `git push origin master` to send your committed changes.
- To pull from GitHub: Use the command `git pull` to keep your version up-to-date with the remote version

If you get stuck later in the course, or encounter something new with git that trips you up, you can head over to Slack and type `!git-help`or `!github-help` and get a link to useful cheatsheets

###### From this point on, for full-fledged projects like this one where you need to submit a link to your mentor, you'll see the submission interface below. When you submit a link here, your mentor will be notified.

# Publishing with GitHub pages

In this assignment, we'll learn how to use [GitHub Pages](https://pages.github.com/) to host web pages on GitHub. We'll walk through publishing the "About me" page from earlier in this unit.

1. From the command line, navigate into the folder that has your "About me" page in it.

2. Run the command `git init` to activate Git for this project.

3. Add and commit the files in this folder with `git add .` followed by `git commit -m 'initial commit'`.

4. Go to [GitHub](https://github.com/) in your browser and click the plus sign in the top right hand corner, and then click "New repository" and provide a name and description for this repo. Keep the "Public" option, which is the default, and leave "Initialize this repository with a README" unchecked.

   ![about-me-github-1.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.3_publish_with_github_pages/about-me-github-1.png)

5. In the ensuing screen, follow the instructions in the "…or push an existing repository from the command line" section to push your local repository up to GitHub.

   ![about-me-push-to-github.gif](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.3_publish_with_github_pages/about-me-push-to-github.gif)

6. Now if you refresh the page for this repo on GitHub, you should see the index.html and main.css files that we just pushed up.

7. Click on the "Settings" tab for your repo and scroll down to the GitHub Pages section. Here, we specify that whenever we push changes to one specific branch on this repo, those changes should be published on a live version of the page. In the source subsection, choose "master branch", then click "Save". This will cause GitHub to publish the master branch of your repo. The settings page will automatically reload. Scroll down to the GitHub pages section, where you'll now find a link to the live version of your page. You can copy this link and share it with others.

   ![about-me-publish-gh-pages.gif](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.4.3_publish_with_github_pages/about-me-publish-gh-pages.gif)

And with that, you've published a web page using GitHub pages. Moving forward, you can use this same process to publish static web pages using GitHub.

# Recommended resources

### Command Line

- For more practice with the command line basics covered in this course, Digital Ocean's tutorial on [Basic Linux Navigation and File Management](https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management) is a good, quick read.
- The [Learning the Shell](http://linuxcommand.org/lc3_learning_the_shell.php) guide from LinuxCommand.org covers command line basics, and also gets into more advanced topics like shell scripting and permissioning. To be clear, you don't need to know any of the more advanced topics to succeed in this course, but you might consider filing this away under the "good to learn later" category.

### Git and GitHub

- For guided practice on using basic Git commands, [tryGit](https://try.github.io/levels/1/challenges/1) is a worthwhile place to spend ~15 minutes learning the basics.
- This hour and a half long lecture [Git for ages 4 and up](https://www.youtube.com/watch?v=1ffBJ4sVUb4) does a good job introducing basic Git commands and workflows and explaining the underlying mental model needed to understand Git.
- GitHub's official guide on [GitHub flow](https://guides.github.com/introduction/flow/) introduces a tried and true way to use branches when collaborating on projects.

# CSS Layouts

In the previous lesson you got up to speed on CSS basics. In this lesson we'll tackle what most frontend developers regard as the most difficult part of CSS: layout. *Layout* describes the *placement of elements* on the page.

Some examples of common layout problems are:

- Creating a fixed navbar that stays at the top of the screen even when you scroll
- Creating a three (or two, or four, etc.) column layout
- Horizontally or vertically centering a piece of content

Layout can be difficult, and even experienced frontend developers find themselves getting stuck trying to implement a layout from a design. The goal of this lesson is *not* to teach you everything there is to know about layout, but instead to teach you enough to get your footing dealing with common layout problems, and equip you with the mindset to solve new layout problems you encounter in the future.

We'll focus on the following CSS properties:

- margin
- text-align
- display
- position
- float
- left, right, top, bottom (which together are known as *offsets*)

You'll learn about each property and the layout problems it's best suited for. At the end of the readings on display, position, and float, you'll do a small project to reinforce the concept. This will also be an opportunity to practice your Git and GitHub skills, as we provide you with a repository of starter files that you must fork and iterate on.

In the last assignment, you code up an online classified ads search result page. We give you a design file, which is to say, pictures of what you need to make, along with annotations (i.e., notes on the picture). You'll write HTML and CSS that implements the design.

By the end of this lesson, you'll be comfortable solving common layout problems and moving from designs to code.

# Horizontal alignment

This assignment shows you how to use `margin: auto` and `text-align` to horizontally center content.

### Horizontal centering with `margin: auto`

When you need to horizontally center block level content relative to a parent element, `margin: auto` is your friend.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/Mepvzj/?height=300&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In the CodePen above, the green box is centered within its parent element (`<main>`). Try commenting out the `margin-left` and `margin-right`, and you'll see that the green box moves to left, which is the default behavior for a *block level* (discussed later in this lesson) element (like divs, unordered and ordered lists, paragraphs, etc.).

In order to horizontally center `.container`, we set its left and right margin values to `auto`. The total width of `.container` (200px) is less than the total width of the parent element (`<main>`); the `auto`values for margin tell the browser to take any extra space on the sides of `.container` and automatically divide it equally between the left and right sides.

Know that this approach works only for *block level* elements. We discuss what this means in depth later in this lesson, but for now know that there are block level elements which by default extend to the full width of their parent container, and there are inline elements, which take up only as much space as is required by the text that appears inside of them. In our example above, `<div>` is a block level element whose width we've limited to 200px.

`margin-left: auto; margin-right: auto` is a valuable recipe that you should memorize. Whenever you need to horizontally center a block level content within some parent element, this technique is your friend. By setting left and right margins to auto, it ensures that the element will remain centered, even if its parent element changes in size or moves.

### Centering inline-* elements with `text-align`

When you need to horizontally center inline elements within a block element, `text-align: center` does the trick.

<iframe ng-non-bindable="" height="399" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/VjpzJE/?height=399&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In our CSS, we've set `text-align: center` on the header element, which causes all inline elements within it (that is, the text inside the `<h1>` and `<h3>` elements) to be horizontally centered. Note that the text alignment behavior of h1 and h3 is being inherited from the rule we put on the header element.

We also use `text-align: center` to align non text-elements such as images (for a full list of inline elements, see [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)).

<iframe ng-non-bindable="" height="400" scrolling="no" title="`text-align: center` example for images" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/Maxim-Filimonov/embed/VmBegK/?height=265&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

Like `margin-left: auto; margin-right: auto;`, `text-align: center` is a CSS setting you should memorize. Pull out this tool when you have text content that you need to horizontally center.

# The display property

In this assignment, we cover the display property. The *display* property determines how an element's block is rendered in the browser (recall that we learned that all HTML elements are blocks, as described by the *box model*).

We'll walk through the difference between *inline*, *block-level*, and *inline-block* elements. Then at the end of this reading, you'll fork a GitHub repo we've created, and build new features that require working with the display property.

### Inline elements

An *inline element* – for example, `a`, `strong`, `em`, or `span`– doesn't start on a new line and usually does not contain additional elements, but instead just contains text. You can't explicitly set the `width`,`height`, margin, or padding of an inline element; instead, its dimensions are determined by how much space its contents require. However, the text in an inline element can be set to a large or smaller font-size or different color, and it will be different than the text around it. Below, we can see how this works with a `span` element:

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/rLMGPB/?height=300&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

If you look at the HTML in this CodePen, you'll see that we've put a `.red` class on the span so it can be clearly seen. The `span` is displayed *inline* with the rest of the text of the paragraph (which is its parent). The `span` does not appear on a new line. If you add a `width: 500px;` declaration to the `.red` class, you'll see it has no effect. You can find a [comprehensive list of inline elements here](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements)).

### Block-level elements

A *block-level* element has the opposite qualities. It gets displayed on a new line (and takes up the whole available line), may contain additional block-level or inline elements, and its height and width can be explicitly set. In the CodePen above, the first paragraph contains a span element, and the second paragraph gets displayed on a new line, below the first paragraph. Note how we've also explicitly set a max-width for paragraph elements appearing in this CodePen (a common practice because it's hard for users to read overly wide paragraphs).

By default, block-level elements will take up the entire width of whatever element they appear inside of, but we can override this by explicitly setting the `width` or `max-width` property on an element.

<iframe ng-non-bindable="" height="410" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/yJaPgL/?height=410&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

As you can see, `.inner-one` takes up 100% of its parent's width by default, while `.inner-two` only takes up 50% of its parent's width because we have explicitly set the `width` property. You can find a [comprehensive list of block level elements here](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements).

### Inline-block elements

The final display value we'll discuss here is *inline-block*, which combine characteristics of both inline and block-level elements. An *inline-block*element displays inline like a `span` or `a` element, but you can give it an explicit width, height, margin, and padding. This can be a good approach when you need to create elements with a set width, but you also need them to display side by side.

In the following example, we've made 4 inner divs inline-block with a fixed width of 25%.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/XKjzgj/?height=300&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

As you can see, our divs, which would normally be block level elements, are rendered side by side. Because we've set their width to 25%, together, they take up 100% of the width of their parent (the `<main>`element).

If you look over the CSS in this CodePen closely, however, you may find something that looks suspicious. What on earth is the `font-size: 0;` declaration on the `main` element? For better or worse, it's a common CSS hack used to remove whitespace between inline-block elements. Try removing the `font-size: 0;` declaration from this CodePen, and you'll see that our divs now spill onto a second row, and there's a small white space between each one.

So where is the white space coming from? To understand this, let's have a look at what happens when we put span elements (which are inline by default) on separate lines, which is what we did above with our div elements.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/rLMJLP/?height=300&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In the first paragraph, "foo" and "bar" have no white space because the spans are right next to each other. In the second paragraph, however, there's a space between "bizz" and "bang" because the browser interprets the line break between the two spans as a space.

One of the solutions to this problem is to set `font-size: 0;` on the parent element, as we did above in the example with the colored boxes. This solution works because when the browser tries to render a space between the elements, that space gets a size of 0. There are other approaches, which you can read about [here](https://css-tricks.com/fighting-the-space-between-inline-block-elements/), but we recommend the `font-size: 0;` approach.

Also know that there are other strategies for solving the underlying layout problem (*How do I get set width elements to appear together on the same line?*). One is to use the `float` property, and another is to use `<table>` elements for layout. Before `inline-block` was implemented, these were the only two ways to solve this problem, but there are drawbacks to both. Be prepared to encounter legacy code and outdated tutorials that use floats and tables to get set-width elements to appear on the same line, but don't use these solutions in your own work. Tables are for displaying tabular data, and floats have some good use cases (one of which is discussed below), but don't use them to achieve what inline-block gives you.

You should also be aware that the new `display: flex` (aka, *flexbox*) setting provides a robust solution to this layout problem. Once you've got a solid understanding of layout without flexbox, you can learn about it on your own (and when you're ready, [Flexbox Froggy](http://flexboxfroggy.com/) is a great place to start).

Note that you can set an element to be inline even if, by default, it’s set to block (and vice-versa). This is a good strategy when you want to use a particular element because it is semantically correct but its default display is not what your designs call for. One common place you'll see this is in the list of links that appear in a nav bar. By default, both unordered lists and list items are block level elements, but by setting their display property to *inline-block*, you can get them to display side by side in the nav.

### Wrap up

In this assignment, we've only covered some of the values that the `display` property can get. At this point in your learning, if you understand the difference between `inline`, `block`, and `inline-block`, you'll be able to solve most layout problems involving the `display` property. You also should make sure you understand the 'whitespace problem' introduced by inline-block, and how to fix it.

Finally, a word of caution: a common beginner mistake is to start setting the display property on all your CSS classes. Don't do this. Oftentimes, the default settings will be what you need. Only explicitly set the display property if you have a specific reason to do so.

### Exercise

In this exercise, you'll have to use your knowledge of the position property to achieve the layout specified in the design files below.

Unlike in previous challenges, for this one we're not going to use CodePen. Instead, you're going to need [this repository of starter files](https://github.com/Thinkful-Ed/css_layout_exercises_starter_files)from Thinkful. You'll push to this repo when you complete this exercise, as well as the exercises at the end of the next two assignments.

To get your starter files:

1. Go to the [GitHub repo](https://github.com/Thinkful-Ed/css_layout_exercises_starter_files) in your browser.
2. Click on the "Fork" button on the right side of the page. "Forking" refers to when you copy a new version of someone else's repository into your own GitHub account. The original repo you forked may change, but yours will be unaffected. Similarly, if you make changes and push to master of your forked repo, it won't affect the original one.
3. You'll be redirected to the page for your fork of Thinkful's repo. On the new page, click the "Clone or download" button on the right hand side of the page, and copy the repo location.
4. From the command line, navigate to your projects directory, then type `git clone` and paste in the text you just copied from GitHub. Hit enter, and wait for the repo to be cloned.
5. Open css_layout_exercises in Sublime Text. This is where you'll do your work.
6. As you work on this and the other assignments that go in this repo, be sure to commit your work and push it back up to GitHub frequently.

Now that you have your starter files, we're ready to see the design files and requirements for this exercise.

### Unannotated design file

![display_exercise_design.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.2_the_display_property/display_exercise_design.png)

### Annotated design file

![display_exercise_design_annoated.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.2_the_display_property/display_exercise_design_annotated.png)

### Requirements

- Save all your work in the repo of starter files you forked. Put your HTML for this page in the `display-exercise.html` file. Put your CSS in `styles/display-page.css`.
- Use the display property (and any other required properties) to write CSS rules that accomplish the design above. Remember, don't set the display property for all elements. Remember that elements have default display values, and you should only override them when you have a specific reason to (and to be clear, you *will*need to explicitly set display values in at least one style rule for this exercise).
- Save, commit, and push your work up to GitHub when you're done.
- Submit a link below to a GitHub pages hosted version of the page or the original source code on GitHub. When you submit your project link, your mentor will be notified to check out your work.
- Limit yourself to 30 minutes for this exercise. If you can't complete it by then have a look at the solution below, and even if you do complete it within 30 minutes, still have a look and compare your code to the solution below.
- Note that in order to get the box containing the colored boxes to horizontally center, you'll need to use one of the strategies from the previous reading on horizontal alignment.

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Solution

Don't look at the links below until you've tried for at least 30 minutes in working on your own:

- [Live page](https://thinkful-ed.github.io/css_layout_exercises/display-exercise.html)
- Source code:
  - [HTML](https://github.com/Thinkful-Ed/css_layout_exercises/blob/solutions/display-exercise.html)
  - [CSS](https://github.com/Thinkful-Ed/css_layout_exercises/blob/solutions/styles/display-page.css)

# The position property

The `position` property is all about the *flow* of elements in an HTML document. The most common values used for `position` are *static*(which is the default value), *absolute*, *relative*, and *fixed*. Each of these values is used to solve specific layout problems, which we'll cover in this section.

### static

Any HTML element with the `position: static` (which is also to say, any element that you don't explicitly set position to a different value on) will have what is called *normal flow*. *Normal flow* refers to the default way browsers render content. Under *normal flow*, block level elements get rendered in the same order that they appear in the HTML markup, one on top of another, starting from the top left corner of the document, and inline elements stretch as wide as their inside content (usually text).

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/WxGLrr/?height=300&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, all of the elements get `position: static` by default. div.foo appears first, since it's first in the HTML. Within div.foo, two paragraphs are rendered, also in the order they appear in the HTML. After div.foo, div.bar is rendered, and inside of it, the two spans are also rendered in the order they appear.

`position: static` – or rather, **not** setting any value for position on an element – is often the behavior we want. Unless you have a specific reason to choose one of the other possible values discussed below, then don't explicitly set position.

### fixed

When an element's position is set to *fixed*, it will stay in place even when the user scrolls. Fixed elements are *taken out of the normal flow*and other elements will position themselves as if the fixed element does not exist. For navbars or footers that you want to remain stuck to the top or bottom of the screen, this is often the best approach.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/OXRrbJ/?height=300&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

Hover your mouse over the display tab of the CodePen, and scroll down until you get to the bottom. As you can see, several *lorem ipsum*paragraphs scroll past, but the blue box to the right of the text stays fixed in place, even though we're scrolling. This is because fixed elements are fixed in relation to the viewport (aka, browser window) itself.

*offsets*: Also, note the use of the `left` property in our `.foo` ruleset. CSS gives us four *offset* properties: left, right, top, bottom. These properties can be used on elements whose position is set to fixed, relative, and absolute, but not static. In the example above, we have `left: 350px`, which offsets div.foo 350px from the left side of the viewport.

### relative

When an element's position property is set to *relative*, it is still in the normal flow (in other words, relatively positioned elements are rendered in the order they appear in HTML), but unlike with static elements, we can use offset properties (left, right, top, bottom) with *relative*elements.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/MejZQE/?height=300&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, all of the divs have their position set to relative. The last three divs have `left` offsets set. Unlike fixed elements, however, these divs scroll like normal.

Also, note how the second blue box appears above the second red box, even though the blue box appears after the red box in our HTML. This is because we're setting the bottom offset property to 100px. Crucially, even though we're offsetting the blue box from its bottom, the green box that comes after it is unaffected and is still positioned as though the blue box were not offset. Note that any offsets on a relative element are in relation to where they would be in the normal flow, not the viewport. You can see this by adding the following ruleset to the CodePen above

```
main {
  margin-left: 90px;
}
```

### absolute

The final position value to cover is *absolute*. Like fixed elements, absolute elements are *outside the normal flow* and can be offset, but unlike fixed elements, they are offset in relation to the first parent container with a non-static position.

A common use case for absolute positioning is when you have a nav bar where you want to align a logo to the left, and a set of links to the right, like in the following example:

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/vKXPrr/?height=300&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, we've set `text-align: right` on the `nav`element, in order to get the links to align to the right. In order to get the kitten logo to align to the left, we set its position to absolute, and then use a left offset so it doesn't run directly against the left border of the nav.

We just said that an absolute element's offsets are in relation to the first parent element that has a non-static position setting. Try commenting out the `position: relative;` line in the nav's CSS ruleset, and you can see this point in action. When you do, the left offset is now in relation to the viewport, and our logo is running up against the left border (not what we wanted!).

### Exercise

To practice the position settings we just discussed, we'd like you to spend up to but no more than 60 minutes attempting to code up the design below. We'll describe the order you should code things up in, and you'll try to get as much of the layout done as possible within this time constraint.

Note that 60 minutes is not a lot of time to complete this exercise, and it's fine if you don't get all of the features done. Make a good faith attempt, productively struggle, and then at the end of the time limit, look at the solution we provided.

As in the previous assignment, in this one you'll continue working on the css_layout_exercises repo you cloned, this time creating the position-exercise.html page.

This design is....*special*. Below are two pictures of the design at different browser widths to give you an understanding of how the background image should expand to fill the width of the browser window.

![position-exercise-design-1.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.3_the_position_property/position-exercise-design-1.png)

And here it is with a wider browser view:

![position-exercise-design-2.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.3_the_position_property/position-exercise-design-2.png)

In the annotated design below, we've removed the background image to make it easier to read. To be clear, the design calls for the space background image from the design (available at images/outerspace_landscape.jpeg).

![position-exercise-design-annotated.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.3_the_position_property/position-exercise-design-annotated.png)

### Requirements

- Save all your work in the repo of starter files you forked. Put your HTML for this page in the `position-exercise.html` file. Put your CSS in `position-page.css`.
- First do the nav bar, which is fixed. We've given you the HTML you need, you just need to write and add classes as necessary.
- To implement the dotted green box, you can use `border: 10px green dotted`.
- Next do the dotted green box with the cat and dog images. To complete this part of the challenge, you'll have to use `position:relative` and `position:absolute`, along with offsets. But that's as much of a hint as we're giving you!
- Finally, try to implement the background image. It should scale to the width of the browser window. For guidance on full page backgrounds, you can look at [this tutorial](https://css-tricks.com/perfect-full-page-background-image/). If you don't get this one, don't worry -- the main point of this exercise is to get you working with the position property. But do make sure to have a look at how we've implemented it in our solution, once you've finished your attempt.
- Save, commit, and push your work up to GitHub when you're done.
- Submit a link below to a GitHub pages hosted version of the page or the original source code on GitHub. When you submit your project link, your mentor will be notified to check out your work.
- Limit yourself to 60 minutes for this exercise. If you can't complete it by then have a look at the solution below, and even if you do complete it within 60 minutes, still have a look and compare your code to the solution below.

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Solution

Don't look at the links below until you've tried for at least 60 minutes in working on your own:

- [Live page](https://thinkful-ed.github.io/css_layout_exercises/position-exercise.html)
- Source code:
  - [HTML](https://github.com/Thinkful-Ed/css_layout_exercises/blob/solutions/position-exercise.html)
  - [CSS](https://github.com/Thinkful-Ed/css_layout_exercises/blob/solutions/styles/position-page.css)



# The float property

The primary use case for floats is getting text to wrap around an image (or some other container). Know that there are other uses for floats - for instance, implementing responsive grids, which we'll cover later - but for now, you only need to understand wrapping images with text.

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/NrRoVL/?height=300&amp;theme-id=9607&amp;default-tab=css,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, we've set `float: left;` on the .left class, and applied that class to the three image elements. By doing so, we've taken the images *out of the normal flow*, and pushed them to the left. The paragraph text, which is in the normal flow, wraps to the right of the images. We've set the right margin on the images so there's a gap between each one, and a gap between the rightmost image and the text.

Note that if we set `float: right;` instead, the images would move to the right of the page, and the text would wrap on the left.

When you have more than one floated element, as we do in the example above, those elements will continue to horizontally stack next to one another, as long as there is space in the parent container. If there's not enough space, they'll go on to the next line (if you want to see this behavior, copy and paste the image element a couple more times in the CodePen above).

For some layouts, you need to set the `clear` property in an element immediately following a floated element. Let's have a look at a problem case where this is necessary:

<iframe ng-non-bindable="" height="300" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/qNagPE/?height=300&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

In this example, you might expect that div.foo (the red box) would appear on a new line by itself. After all, it's a block level element, and we haven't set the float property on it, but nevertheless, it's appearing on the same line as our floated kitten images.

Recall that floated images are taken out of the normal flow. That means that as far as the red box is concerned, it *is* on a new line, by itself. It's as though the red box has no idea about its kitten neighbors to the right.

The way to solve this is by setting the `clear` property on div.foo. We've already set this property but commented out in the CSS for `.foo`. If you uncomment that line, you'll see the red box shift down to be on a line of its own. In this instance, we set it to `clear: right` in order to make div.foo aware of the right floated elements and move to the next line.

There are additional uses for floats, such as responsive grid systems, which we'll cover later in this course. As we said in the section on the `display` property, there are also many examples of floats being used to achieve layouts that would be better achieved by using `display: inline-block;`. Our advice for you at this point in your learning is to use floats only when you need to wrap text around an element.

### Exercise

To practice the float settings we just discussed, we'd like you to spend up to but no more than 20 minutes attempting to code up the design below.

As in the previous assignment, in this one you'll continue working on the css_layout_exercises repo you cloned, this time creating the float-exercise.html page. Your CSS will go in styles/float-page.css.

While you may need to add classes to the HTML, to complete this exercise, you should **not** add or remove any HTML elements.

![float-exercise-design.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.4_the_float_property/float-exercise-design.png)

### Requirements

- Save all your work in the repo of starter files you forked. Put your HTML for this page in the `float-exercise.html` file. Put your CSS in `float-page.css`.
- Save, commit, and push your work up to GitHub when you're done.
- Submit a link below to a GitHub pages hosted version of the page or the original source code on GitHub. When you submit your project link, your mentor will be notified to check out your work.
- Limit yourself to 20 minutes for this exercise. If you can't complete it by then have a look at the solution below, and even if you do complete it within 20 minutes, still have a look and compare your code to the solution below.

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Solution

Don't look at the links below until you've tried for at least 20 minutes in working on your own:

- [Live page](https://thinkful-ed.github.io/css_layout_exercises/float-exercise.html)
- [CSS source code](https://github.com/Thinkful-Ed/css_layout_exercises/blob/solutions/styles/float-page.css)

# Reasoning about layout

In this brief assignment, we'd like to give some general pointers for thinking through CSS layouts.

As a frontend developer, your starting point will usually be a design, which you'll be responsible for implementing. Before you write a single line of HTML or CSS, you should analyze your wireframe, breaking it down into sections, using your knowledge of the box model to help you along the way.

Let's look at a quick example. The following image is a screenshot of Reddit, but for our purposes, let's imagine it's a polished design handed to us by our designer and we’re responsible for coding it up.

![reddit-screenshot.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.5_reasoning_about_layout/reddit-screenshot.png)

We can begin breaking this design down into sections, top to bottom, left to right. The first section to notice is the header. The header itself doesn't appear to require any special positioning, it takes up the full width of its parent, and after asking our designer, we learn that it's not meant to stick to the top of the page when you scroll.

Within the header, the Reddit logo looks like a normal inline element. The tabs (“hot, new, rising”...) look like they could be captured nicely using an unordered list (`<ul>`). This is a common approach for links in a nav, and one we'd strongly consider using here. The only problem is that an unordered list and the child list items are usually block level elements, and so we'll need to be sure to set them as inline-block. And then there's the signup/login portion, which is aligned to the right. Looks like we'll need to set its container to have absolute positioning with a right offset of 0, so it runs up against the right of the nav.

We're not going to go through the entirety of this wireframe, but the process for every section of the page is the same: find a distinct horizontal section and draw a box around it. Ask, what, if anything, special do I need to do to get this box to behave in the way the design calls for. Then work inwards to the next level of element within that box, until you’re down to the smallest details.

Crucially, don't automatically assume that you always need to explicitly set the display, position, float, or offset (top, bottom, left, right) properties. That's a common mistake among new developers and one that can lead to unnecessarily complex and brittle style rules. As you think through your layout options in CSS, try to recall the primary use case for each setting.

Finally, keep in mind that layout is probably the hardest part of CSS, frustrating even seasoned developers. It will take time to master, and the only way you'll break through is by coding up web pages from designs.

# Challenge: From designs to code

In this challenge, you will code up a webpage that implements the styling and layout required by a specific set of design files. The design files tell you what the page should look like, and you have to code it from scratch, relying on your own mastery of the materials in this lesson.

Your challenge is to code up the search results page for *Greg's List*, a simple online classified advertisement site. This site is similar to Craigslist, but be forewarned: the real Craigslist, notwithstanding its notoriety, is not an example of good HTML and CSS. Our advice is don't waste your time seeing how Craigslist implemented their site, and savor the knowledge that even as a beginner, you can probably do a better job coding up a Craiglist-inspired design than Craigslist itself did.

To complete this challenge requires:

- an `<input>` element
- constructing HTML elements and assigning CSS classes to those elements
- dealing with layout requirements, including a fixed navigation bar (or *nav* as developers commonly call it) and creating HTML for repeated items
- creating interactive hover behavior
- using Git and GitHub to save, backup, and share your work

Expect to get stuck, strive to get unstuck, and get help when you're spinning your wheels. Plan to spend up to 3 hours on this project. It's fine if it takes longer than that for you to complete, but if you've hit the three hour mark, and you're still far off from finishing it, check in with your mentor to ease through some of the challenges you’re running into.

###### In this and later challenges in this course, we'll provide a *scenario* which is an exemplary story about how the task we're asking you to do might actually happen in a real world environment. With these scenarios, you’ll not only gain experience with the specific concepts we’ve introduced, but you’ll also start building and refining your intuition on one of the dynamics of the software engineering workplace: estimating how long it will take to a finish a new project.

### The Scenario: Greg's List

You're the product engineer on a v1 (version one) prototype for *Greg's List*, an old-school classified ads site. Gregslist intends to first do *as well as* their main competitor, Craigslist, and in later releases to do better. For the upcoming product meeting, you're expected to provide a v1 of an HTML/CSS implementation of the search result page for Gregslist (see designs and requirements below). Your v1 should be as polished as possible so that you leave a good impression with your teammates.

### Requirements

You are building a search results page as represented in the designs found below this list of requirements. For the prototype you'll demo to your team, you'll provide results to a user search for software jobs.

- Reasonable but not [pixel perfect](https://www.quora.com/What-does-pixel-perfect-mean) implementation of the designs provided below.
- For each result item, use the same element structure and classes. In other words, you should only have to write style rules once for a search result item, and then use the same class on each individual search item. Feel free to repeat the text between search items, but try to get titles of different lengths so you can see how it impacts your layout.
- The design calls for a magnifying glass icon. Use this image file (which you can download by right clicking and saving):



- Put the `<input>` and the element with the magnifying glass in a common `<form>` element. We'll do a deep dive on forms later in this unit, but for now, just know you can wrap the `input` element and the element you create for the magnifying glass inside a `<form>`.
- Use semantic HTML throughout the page.
- Include a page title (aka, use a `<title>` element) and [meta description](https://moz.com/learn/seo/meta-description) in the head.
- Back up and save your work using Git and GitHub (from the command line).
- Submit a link to your project below to let your mentor know it's time to review your code.
- Don't waste your time looking at how Craiglist (your competitor!) coded up their site, as it doesn't follow best practices.

### Unannotated Design Prototype

![gregs-list-unann_1.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.6_challenge_design_to_code/gregs-list-unann_1.png)

### Annotated Design Prototype

![gregs-list-ann_1.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.5.6_challenge_design_to_code/gregs-list-ann_1.png)

### Getting started

When you're first learning to code up web pages from scratch, you may not know how to start. We recommend working top down, left to right. For example, the first element you should work on for Greg's List is the nav bar. Start with the HTML for the navbar, deciding how you'll mark up the section, the logo, and the items to the post/account links at the right. Once you've decided, use CSS to position everything appropriately. Then add border/color. Once you have the nav bar complete, move on to the next section.

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Solution

You're on the honor system here, but we ask that you not look at the solution until you've spent at least 3 hours trying to make it through on your own. That **does not mean 3 hours of working alone**. If you get stuck working on this project, by all means, talk to others. And if it takes you less than three hours, that's great too. The point is to make a good faith effort before looking at the solution.

Also, know that all the CSS required to accomplish the layout has been covered in this lesson. If you find yourself stuck on a concept, go back to the materials that originally taught it, and brush up on your knowledge of the principle.

- [Live page](https://thinkful-ed.github.io/gregs-list)
- [Source code](https://github.com/Thinkful-Ed/gregs-list)

# Wrap up

In this lesson, we covered the CSS layouts. You learned how the display, position, and float properties can be used to solve common layout problems, and you got experience using these properties in several small projects.

At this point, you should feel comfortable with the following:

- Explaining and implementing horizontal centering for inline and block level elements
- Explaining and using the `display: block` vs. `display: inline-block` vs. `display: inline`
- Explaining the so-called "white-space" problem and how to solve it
- Explaining and using `position: static` vs. `position: relative` vs. `position: fixed` vs. `position: absolute`
- Explaining and using the `float` property to get text to wrap around images or other content
- Coding up a wide range of layouts from designs.

If you're unclear on any of the above, be sure to follow up with your mentor.

# Recommended resources

Looking for more practice with CSS layouts? Here are some good resources to check out (keeping in mind that the way you'll ultimately master CSS layouts is by building real webpages!):

- The [Learn CSS Layout](http://learnlayout.com/) guide provides clear, easy to understand examples of all the important concepts in CSS layout.
- Shay Howe's lessons on [the box model](http://learn.shayhowe.com/html-css/opening-the-box-model/) and [positioning content](http://learn.shayhowe.com/html-css/positioning-content/)do a good job introducing CSS layouts.
- We don't teach [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) in this course because at the time of writing browser support is still inconsistent. That said, flexbox is expected to eventually become the standard solution for dealing with complex layouts. [Flexbox Froggy](http://flexboxfroggy.com/) is an interactive game that teaches you how to use flexbox to achieve different layouts.
- At times, the seemingly simple task of centering HTML elements can prove to be difficult (*especially* vertical centering). This [CSS-Tricks article](https://css-tricks.com/centering-css-complete-guide/) on centering does a good job breaking down this problem. More generally, CSS-Tricks is a great resource for knowledge of CSS.

# Forms and Inputs

In this short lesson, we cover HTML forms and inputs, the two main tools for getting data from users. We'll cover commonly used input elements and their attributes, and learn to do form validation with HTML.

As in previous lessons, we'll start with an in depth reading on forms and inputs. After that, you'll demonstrate your mastery of the material by coding a simple signup page for a company called "AnalogSea".

Moving forward, you'll still have plenty to discover about how to design and implement effective user experiences with forms, but you'll feel confident determining which input types to use and how to submit forms to a server.

# Anatomy of Forms and Inputs

This reading walks through getting data from users in HTML, using forms and the various inputs offered by HTML.

*Forms* are containers that hold a set of inputs. You’ve interacted with forms thousands of times, for example when you provide contact info, answer questions, or order something online.

*Inputs* are individual components that a user interacts with - typically corresponding to a single data point. HTML provides numerous input types (text, email, number, password, etc.), and input types differ in how they are rendered. Inputs also vary in how they are validated.

In the remainder of this reading, we'll cover best practices for using forms. We won't cover every input type – [there's a lot of them](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) – but we'll teach you enough that, moving forward, you'll be comfortable researching and implementing any form type. We'll teach you how to configure forms, correctly label inputs, follow accessibility best practices (i.e., make your form friendly for screen readers and web crawlers), and validate user inputs.

## Overview of form features

The following form demonstrates all of the functionality we'll cover in this reading:

<iframe ng-non-bindable="" height="544" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" src="https://codepen.io/team/thinkful/embed/peYJKj/?height=544&amp;theme-id=9607&amp;default-tab=html,result&amp;embed-version=2&amp;editable=true" style="box-sizing: inherit; border: 0px; font: inherit; vertical-align: baseline; margin: 0px; padding: 0px; max-width: 100%; width: 943px; background-color: rgb(253, 253, 253); visibility: visible; opacity: 1; transition: opacity 0.5s ease 0s; display: block;"></iframe>

Try out these behaviors, and note what happens:

- Leave all of the fields blank, then click submit. You'll see that the phone number input is required, displaying red.
- Reset the form. The values are blanked out.
- Put "foobar" in the email field, and "555-555-5555" in the phone number field, and submit. You'll be told the email field is invalid.
- Reset the form again to clear out the values. Put "foobar" in the phone number field, and submit. You'll get a message telling you to put a valid phone number.
- Try out the two questions. The first one lets you select from a dropdown, with "Pretty great" as its default value. The second one is a set of radio boxes where you can choose only one.

The above behaviors encompass most of what can be done with only HTML and CSS on a form. We've got labels for each input, required fields (phone number), fields that validate (email and telephone), a dropdown, radio tick boxes, and submit and reset buttons. While there are other input types and some other form-related elements (`<textarea>`, for instance) not represented in the form above, most of what you need to know about working with forms is contained in the CodePen. Let's step through this example.

### The `<form>` element

The `<form>` element wraps all our inputs and labels. To progressively support all users you'll want to set the `action` and `method`attributes. This will ensure user input can be submitted even if JavaScript is disabled or breaks. The `action` attribute is the URL of the server endpoint that submitted form data should be sent to. The `method` attribute is the *request method* that the browser should use when sending the data to the server. Usually you'll want `method="post"`, but `method="get"` is also possible. We won't go into details of get vs. post for now, but know that the server will expect to receive data via one of these two methods, and you'll need to adjust your form's `method` accordingly. So, when the user submits the form above, the form data will be posted to `/some-server-endpoint`. There are [other attributes that can be set on forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes), but the crucial ones to know for now are `action` and `method`.

### The `<fieldset>` and `<legend>` elements

The fieldset element is used to group together related inputs and labels. In the example above, we use a fieldset to group together the contact info related inputs and their labels. In the CSS for this CodePen, we've overridden some default styling for our fieldsets. The main reason to use fieldsets is that they help web crawlers and screen readers understand how inputs are grouped together (even if this is not revealed visually to sighted end users).

The legend element is like a title for the fieldset.

### Inputs and Labels

Our first and last name inputs above are standard `type=text` inputs, with no special validation rules. Notice how we use labels for both inputs (and indeed all the inputs in the demo form). Labels tell human users, web crawlers, and screen readers what an input is for -- using the `for` attribute.

The `for` attribute goes on a label, and its value should be set to the ID of the input it's for. Note that although you're generally discouraged from using IDs as CSS selectors, using them to link inputs and labels is *best practice*.

While the label element requires opening and closing tags, inputs do not.

In the example above, we've used the following approach for labeling:

```
<label for="first-name">First name</label><input id="first-name" name="first-name" type="text">
```

Know that you can also wrap the input in a label element (some people prefer this method):

```
<label for="first-name">First name <input id="first-name" type="text"></label>
```

You'll find proponents of both approaches, and choosing between the two is largely a matter of personal preference and the details of the layout you're trying to achieve. We lean slightly towards the first method, because when the label wraps the input, `margin-right`behavior is surprising -- we think of labels as coming before the input, but if you set a right margin on a label wrapping an input, that margin right will appear to come after the input, not the label.

Either way, always be sure to use the `for` attribute on your labels.

### Input attributes

Looking at the inputs in the demo form, there are several attributes being used.

`placeholder` is used to set text that initially displays before the user has input any data. Typically placeholders are used for example entries, and usually they're styled to be lighter than user input text.

`required` is used to indicate that an input *must* be filled out. When the user submits the form, if there are any required child inputs on the form, the browser will display a message telling the user where they need to supply data.

The `pattern` attribute is used to supply [regular expression](https://en.wikipedia.org/wiki/Regular_expression) patterns that the user's input must match with in order to be valid. In the example above, we use this to require that the phone number entry consists of only numbers, and optionally dashes.

Finally, we find the `type` attribute. This attribute determines how the element looks and how its validation works. For instance, an input with `type='email'` will be valid if the user inputs text that has an `@` with text before and after.

Have a close look at the `type="radio"` input from the demo form. In order to get the "pick one and only one" behavior out of the radio inputs in the form, we've used the same `name` element on each input.

### The `<select>` and `<option>` elements

The `<select>` element is used to let users choose from a list of options. In the demo form above, we've used it for the first question. `<select>` tags wrap a set of one or more options, and you can pre-select an individual `<option>` by adding the `selected` attribute.

Although the example above does not use it, it's possible to use an `<optgroup>` element to wrap multiple `<option>` elements under a given group name. This is helpful to organize a large set of options.

### Buttons

Our form uses `<button>` elements to allow users to submit and reset the form. This is done by setting the `type` attribute.

Buttons have many uses beyond forms once you start working with JavaScript, but when you're only working with HTML and CSS, their use is usually limited to simple form controls.

## Form design and user experience

The final form-related topic we'd like to discuss is design and user experience. This course does not go into depth about design, as that is a wide topic. Often times on the job, as a frontend engineer you'll be executing designs that a designer has created.

On the other hand, there will be times (especially if you're freelancing) where you'll be responsible for designing your pages. And even if you're not, a good engineer knows enough about design that they can ask questions and "push back" if they're given a design that will create a bad user experience.

With that in mind, there is a simple principle you should strive to follow when designing forms: keep them simple and short as possible. Remember, forms require a user to do something, and the more distance you put between the start of the thing they need to do, and the end where they submit, the less likely they are to follow through.

This means that it's important to balance the desire to get data from customers via a form, with the need to keep forms short and simple, so that users actually get to the point of submitting. When a user sees your form, you want it to be as fast and painless as possible to get through the form.

# Challenge: Signup Page

In the previous assignment, you learned about form basics. Now you're ready to work through a challenge to reinforce these skills. In this assignment you're responsible for creating a simple signup form for a client company called "AnalogSea". This will also be an opportunity to get more experience with CSS layouts.

As in the Greg's List challenge earlier in this unit, your starting point is a design file that describes what the end user should see. We're including an annotated and unannotated version.

### The Scenario: AnalogSea Signup Form

You're freelancing for a cloud computing startup called AnalogSea. The task for today is to code up the first version (aka, v1) of a simple account creation page based on the designs below. For v1, the client wants clean, SEO and accessibility friendly HTML. They're providing you with a design file and a list of requirements for the form, and by end of day, you need to deliver a live version of the page they can preview on GitHub pages.

### Requirements

You are building a signup page as represented in the designs found below this list of requirements.

- Respect any widths and heights indicated in the annotated design file.

- AnalogSea's logo appears at the top of the page. Save it from here by right/Ctrl clicking the logo and choosing the right option from the popup:

  

- The form should *post* to the url `/signup/` when the user submits it.

- The email and password fields are both *required*.

- The form should validate the email field for a valid email address.

- The login link should point to `/login`.

- The logo and form should be horizontally centered, and have a height of 35px, as indicated in the design. Although the source file has a height of 111px, use CSS to set its height to 35px.

- Stretch feature: When the user hovers over the submit button, it should transition to a darker shade of green.

- The page should be SEO and accessibility friendly. That means including a title and description in the head of the document, and using labels with their `for` attribute set on the form.

- Use Git to save your work as you go, and push up your master branch to GitHub when you're done.

- Also publish the finished project using GitHub pages.

- Submit a link to your project below to let your mentor know it's time to review your code.

### Unannotated Design Prototype

![analog-sea-unannotated.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.6.2_challenge_signup_form/analog-sea-unannotated.png)

### Annotated Design Prototype

![analog-sea-annotated.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.6.2_challenge_signup_form/analog-sea-annotated.png)

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Compare your solution

When you've completed this assignment, take a look at this sample solution: [live](https://thinkful-ed.github.io/analog-sea/) or [the source code](https://github.com/Thinkful-Ed/analog-sea). When you discuss your solution with your mentor, it may be productive to compare and contrast your approach with the solution we've provided.

And in case you're tempted, try not to view the solution before putting in at least 1-2 hours on this project on your own. In order to advance your skills, it's important to make a good faith effort to complete each project on your own.

# Wrap up

In this lesson, we covered working with forms in HTML and CSS. You learned how to configure forms and inputs and how to do basic client side validation.

At this point, you should feel comfortable with the following:

- Following accessibility best practices for forms
- Validating form inputs
- Creating and describing forms and form elements
- Learning new input types

If you're unclear on any of the above, be sure to follow up with your mentor.

# Recommended resources

Below, you'll find some resources we think do a great job explaining HTML forms:

- Shay Howe's [lesson on building forms](http://learn.shayhowe.com/html-css/building-forms/) does a good job introducing the HTML elements used in forms and how to think about styling them.
- Forms are the primary way users can supply inputs for our webpages, and following best practices for accessibility is crucial. *Web Accessibility in Mind's* [guide to creating accessible forms](http://webaim.org/techniques/forms/) will help you understand how to ensure your forms are accessible for all users.

# Responsive Design Basics

In this lesson, we introduce responsive design, a technique for creating web pages that work well on a phone, a large desktop monitor, and everything in between.

First we'll introduce the idea of responsive, reviewing the tools CSS gives us (media queries, fluid grids, flexible images) and the best practices (content-driven, mobile-first, fluid).

After that, we'll have an in depth look at an implementation of a fluid CSS grid.

Finally, in the final assignment for this lesson and unit, you'll code up a responsive site that has distinct mobile and desktop states, bringing together everything you’ve learned into one project.

By the end of this lesson, you'll understand the underlying principles of responsive design, how responsive grids work, and how to implement web pages with presentation that changes according to the device the user is browsing with.

# Anatomy of Responsive Design

### The problem

Responsive design addresses a fundamental problem for the contemporary frontend engineer: how do you ship product that works on an ever growing variety of devices and screen sizes?



While the expansive real-estate of a large monitor is a nice luxury to design and code for, many if not most web users (depending on your product) are on mobile devices. So who should you prioritize? iPhone users in landscape mode? Desktop users with Chrome open at full screen with a 21:9 aspect ratio on a 4k monitor? Laptop users because they're in between the two extremes?

### Responsive design to the rescue

So which user should you design and code for? The answer is that *you don't have to choose*. By learning the principles of *responsive*, *content-driven*, *mobile-first* design, you can provide users with a good experience no matter their viewport dimensions and pixel density.

*Responsive* means creating layouts that can dynamically respond to the dimensions of the user’s viewport. For instance, viewed on a desktop, 7 horizontally laid out links can be a good user experience. But on a tiny mobile screen, users are going to have trouble distinguishing all 7 links. And forget about clicking on them! The responsive design solution is to change the layout and presentation of the navigation bar when users are viewing it on small screens. With a responsive layout, a subset of the navigation links will be rendered in the navbar, and the omitted ones will be pushed into a dropdown (the "More" item in the nav), instead of being laid out side by side across the nav bar (the desktop view).

*Content-driven* means recognizing that our users are real people with real goals. Your challenge is to enable users to access and consume (or produce, in some cases) the content they expect to work with on our page. For instance, the main reason people visit airline websites is to purchase or manage tickets. And much of this happens on mobile devices. A content driven approach would have us optimize our site for helping users access the content they need.

With content-driven design, the way our site looks and behaves is a result of designing to best deliver our specific content. There's still a place for polish and detail (say, background color or font size), but these considerations always play second fiddle to the fundamental concern: is this page enabling users to access the content that they need to access?

*Mobile-first* means that when designing web pages, and also when coding them up, we start with the mobile experience. Mobile devices have the smallest screen size, and by designing for them first, with a content driven approach, we ensure that our web site has "good bones". The idea is that if we can make our content work first within the small confines of a mobile screen, it is fundamentally working. We take these good bones and then can choose to *progressively enhance* this baseline experience on larger devices (that is, add additional "nice-to-have" features when there's more screen real estate).

Mobile-first also means respecting that many web users have limited download bandwidth, and might pay by the megabyte. If a user is accessing a page on a 250px wide screen, there's not much point in them downloading a 2000px wide image which will just be scaled down by the browser anyways.

These are the principles of mobile design. They should guide design processes, from conceptualization to implementation. Because of this, they span multiple parts of a product team, involving conversations between engineers, designers, and product management.

This course is more narrowly concerned with the engineering side of responsive design. HTML and CSS provide three primary tools that we can use to act on these principles: media queries, fluid grids, and responsive images.

*Media queries* are a tool that CSS gives us to apply blocks of CSS rules to only certain viewports. So on a single stylesheet, we can specify how things should look at one viewport size, and specify a different layout and appearance at a different viewport size. Here's the syntax:

```
@media only screen and (min-width: 640px) {

  .foo {
    /* do something to
    over-ride default settings*/
  }
}

@media only screen and (min-width: 800px) {

  .foo {
    /* do something to
    over-ride settings at previous threshold settings*/
  }
}
```

When following the mobile first principle, we write baseline styles that should apply to mobile. Then we override styles as needed with increasing viewport sizes. The snippet above says that when the page is loaded on a screen with a minimum width of 640px, apply the CSS rulesets contained within the media query block; then at a minimum width of 800px, apply the next block of rules, overriding the rules from 640px when they clash.

We explore *fluid grids* in the next assignment. For now, know that with CSS you can build grid systems to get neat, predictable layouts.

*Responsive images* are the final technical side of responsive design with respect to HTML and CSS. We will not explore them in depth in this course because browser support is still inconsistent and best practices are still emerging. Know that HTML5 provides elements for implementing responsive images (`<picture>`, `<sourceset>`, and `<sizes`>). If you'd like to read more about this topic later, [this List Apart article](http://alistapart.com/article/responsive-images-in-practice) is a good starting point.

Know that some of the characteristic behaviors of responsive sites can't be achieved without JavaScript -- for instance, the classic burger icon on the top right of a mobile navigation bar that you can click to get a dropdown of navigation links.

For the most part, people in the software world recognize the need to design for a wide variety of viewport sizes. Expect that most sites you develop will be responsive in the coming years, at least until the next paradigm emerges. Responsive is the emerging standard for frontend web development.

### Exploring Vox with Dev Tools and Device Preview Settings

To close out this assignment, we're going to take a quick tour of the [Vox](http://www.vox.com/) news site to see a responsive site "in the wild" and to gain experience inspecting and debugging with Chrome Developer Tools.

1. In Chrome, visit <http://www.vox.com/>.

2. Assuming you're on a desktop, observe the layout of the Vox.com site. This is the desktop layout. We'll see how the layout changes as we use devices with different viewports.

3. Open Developer Tools. In the top left hand corner of the Dev Tools window, click the device panel icon (circled in red here):

   

4. Chrome will open the device toolbar. At the top you can select between preset viewport sizes for iPad, iPhone, Galaxy, and other popular devices.

5. Choose "iPhone6" from the list of devices, and Chrome will render the page as though you were on an iPhone. Notice how you get a typical nav bar with a "burger" icon on the top right to access a dropdown of nav links.

   

6. Now choose "iPad" and then click the rotate icon at the top of Dev Tools in order to switch the iPad viewport to landscape mode. Note the changes to the layout.

   

7. Exit the device panel by clicking the device icon again.

8. Try out different widths with the default browser window, and find the breakpoints where the layout changes.

As you can see, the Vox site optimizes for the latest news content. It comes first in the mobile, desktop, and tablet views, and individual articles move below the fold on smaller devices. Notice how some content that sits side by side on wider viewports stacks top to bottom on smaller ones. This is a classic responsive design technique.

You can use this functionality in Dev Tools to preview sites you're working on using different devices.

# Responsive Grids

In this assignment, we explore one of the most prevalent and useful frontend design patterns: the responsive grid system. First we'll describe the behavior of a standard 960px, 12 column grid system. After that we'll view an implementation of our grid using the CSS `float`property, which is one of three common solutions to the grid layout problem. We'll walk through writing CSS for rows and variable width columns, and you'll write the remaining rulesets in a partially completed stylesheet for our responsive grid. You'll reuse this grid in the final assignment in this lesson to code up a responsive website.

###### Know that on the job, you'll often use off the shelf CSS grid systems, provided by your engineering team, or by a third party CSS library (for example, Bootstrap). Our goal is not for you to come away from this lesson having memorized how to roll your own 960px grid from scratch (though if you do memorize this strategy, we won't complain). Instead, we want to ensure you understand the grid from a conceptual standpoint, and that you gain experience with one such that you could use another grid if you’re asked to in a code challenge or on the job. In short, we want you to be able to effectively reason about CSS grids.

### The classic grid: 960px, 12 columns

Before we analyze our CSS implementation of a responsive grid system, we need to establish the behaviors of a grid from a design perspective.

![grid_annotated_design.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.2_responsive_grids/grid_annotated_design.png)

The annotated design above illustrates most of the behaviors of our grid system. The entire 960px grid gets wrapped in a container whose max width is 1000px, and the 960px grid gets centered in this container. This ensures that even if you're viewing the page with your browser window (aka, *viewport*) at 1000px, the overall grid will get 20px left and right padding from the edge.

Each row in the grid consists of 12 columns. Each column is 60px wide, and columns are separated by 20px gutters. So 12 total columns with gutters is `12 * 60 + 12 * 20` = 960px wide. That's twelve 60px columns, and 12 20px gutters. Eleven of those gutters come in between columns, and the remaining gutter is accounted for by the half gutters on the left and right of the first and last columns, respectively.

Our grid system should give us an easy way to make content take up 1, 2, 3, etc. columns of width. This is represented above by the grey boxes at the bottom of the diagram.

Another feature of our grid is that column width should be *fluid*. This means that the columns should scale in size relative to the current width of the row. When the row is at its max width of 960px, 1 column is equal to 60px. That can be expressed as a percentage: `60/960 = 0.0625` which means that the width of a single column is 6.25% of its parent row. Fluid columns scale up or down with row width.

The same fluid behavior is also true of the gutters in our grid. We saw that at the full 960px width, the gutter is 20px wide. The gutter can be expressed as a percentage of the parent row, then, as: `20/960 = 0.02083333333.. ~= 0.0208` which is 2.08%.

It should also be possible for us to specify a minimum width below which the grid ceases to behave as a fluid grid. If the user's viewport is 320px wide, a 1-column of content would be `320px * 6.25% = 20px`;any content in a 20px row would be unreadable. We need to specify that if the viewport is below a minimum width, stack the columns one on top of the other, and have them take up 100% of their parent element's width.

These are the characteristics of a barebones 960px, 12 column grid system. There are more complex features that you'll learn about as you work more with grids, but we won't dive into those here. One example is column offsets. A column offset is what allows you to have, for instance, a row that has a single 6 column wide piece of content that is offset by 6 columns (plus gutters) from the left edge. If you're using an off the shelf grid system, chances are it will have styles you can apply to achieve offset behavior.

### A simple implementation using the `float`property

There are three main approaches to implementing the grid design described above. One uses `display: inline-block;` along with variable, percentage based widths on column elements in order to get them to line up side by side. Another approach is to use the new [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) feature.

The third implementation, which we explore here, also uses percentage based widths for columns and uses `float: left;` to get columns to line up with one another. We're teaching this approach because compared to flexbox it's guaranteed to be supported on all browsers. And compared to the `display: inline-block;` solution, it's easier to grasp. It's a time tested implementation, and is the approach that several popular CSS frameworks use (for instance, the popular [Twitter Bootstrap](http://getbootstrap.com/css/#grid)).

Understanding the float approach will take you far, and we leave learning about the flexbox and inline-block approaches as an exercise for you to do some time in the future.

To follow along with this walk through of our grid system, head over to [this repo on GitHub](https://github.com/Thinkful-Ed/responsive-grid-example-and-challenge-starter-files) and fork it. Clone it locally, and do your work inside the master branch of the repo (which is the branch you'll see by default when you first clone the repo).

Next, have a look at our grid demo page. You can do this by opening your local index.html file in your browser, or by viewing [this live version on GitHub pages](https://thinkful-ed.github.io/responsive-grid-example-and-challenge/). First view it with a wide browser window. Then try slowly moving the browser to smaller and wider widths. You'll see that at under 640px wide, the colored boxes (which are each 3 columns wide) stack on top of each other, while at wider than 640px, they display side by side. And as you move up from 640px to 1000px wide, the boxes and their gutters grow proportionately with the viewport. Beyond a 1000px wide, the row and columns stop getting larger, and the grid gets horizontally centered in its parent container.

![grid-exercise-screen-shot-1.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.2_responsive_grids/grid-exercise-screen-shot-1.png)

Next, open Dev Tools, and view it in iPhone 6 dimensions:

![grid-exercise-screen-shot-2.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.2_responsive_grids/grid-exercise-screen-shot-2.png)

Let's walk through the HTML and CSS and see how this behavior is achieved for the first row of 3-column wide boxes.

```
<div class="row">
      <div class="col-3">
        <div class="box orange">3 columns</div>
      </div>
```

To implement this grid in our html, we use container divs with the `.row`class. Inside each `div.row`, we put divs with the `.col-3` class, which is also a container, and inside of each column, we put our content, in this case, divs with the .box and a color class applied. In our row, we use four 3-width columns to get a total of 12 columns of width.

Note that we're putting our styling for everything aside from the grid (that is, our main content) inside the main.css file. This is a good practice to follow: store your grid in a stylesheet whose only purpose is to set the rules for your grid. This code can be reused across sites, and it's easier to manage when it's separate from CSS whose job is to style content that is unique to a given page.

Looking at float-grid.css, the first thing to notice is that `box-sizing: border-box` gets applied to all body elements. We discussed this setting earlier in this unit, but if you need a refresher, recall that when box sizing is set to border-box, any explicit width settings are *guarantees* that the element will take up no more than that width. If we didn't have this setting, our grid would behave unpredictably.

Next we have the ruleset for the `.row` class:

```
.row {
  max-width: 1000px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
}
```

As you can see, rows get automatically centered in their parent container. They have a max-width of 1000px, and they get 20px of left and right padding (which, as we said in the previous section, is necessary to ensure that our content doesn't come right up to the edge when the viewport is at small sizes).

Since we'll be using the `.row` class on divs, which are by default block level elements, our `div.row`s will behave how one would expect, each keeping to its own horizontal line.

Now what some people think of as the ugly side of the float solution, some `::before` and `::after` rules for our `.row` class.

```
/* Clearfix */
.row::before,
.row::after {
  display: table;
  content: '';
}

.row::after {
  clear: both;
}
```

The quick explanation of this code is that it accomplishes two objectives. The first ruleset forces the height of each row to expand to the height of its tallest child element. That means that rows will vertically contain all their content.

The second ruleset, with `clear: both;`, is a clearfix, and it ensures that any content that comes after the row will act as though the preceding row was in the normal flow, instead of butting up against the top of the row container.

Next we have a set of rules for our column classes:

```
.col-3, .col-4, .col-6, .col-12 {
  float: left;
  padding-left: 1.04166666%;
  padding-right: 1.04166666%;
}
```

We're saying that all columns should float to the left, displaying side by side as long as there's enough space in their parent container. Regardless of its individual width (that is, a 3-wide vs. a 6-wide column), each column gets a constant, percentage based left and right padding, which gives the gutter behavior we specified in the design section above (and note that the way we implement the 2.08% gutter discussed above is by splitting it in half on the left and right).

Next we have our mobile defaults:

```
/* Mobile defaults */
.col-3, .col-4, .col-6, .col-12 {
  width: 100%;
}
```

This specifies that by default, columns will take up 100% of their parent's width, which accomplishes the stacking behavior for columns at narrow viewport widths.

Finally, we have a media query that overrides our default styling for column widths on screens that are 640px and wider:

```
/* Non-mobile, grid */
@media only screen and (min-width: 640px) {
  /* 3 columns, 3/12 in % */
  .col-3 {
    min-width: 25%;
  }

  /* 4 columns */
  .col-4 {
  }

  /* 6 columns */
  .col-6 {

  }

  /* 12 columns */
  .col-12 {
  }
}
```

When the viewport is wider than 640px, a 3-width column should take up 25% of its parent row element's width. Since we're using `box-sizing: border-box;`, that width value is inclusive of the percentage based padding we saw in the earlier ruleset for left and right padding on column classes.

As you can see, we've only completed the overrides for `.col3`. To close out this assignment, your challenge is to complete the grid CSS, and alter the HTML to achieve a simple design objective.

### Your turn

Your challenge is to:

- code up the remaining CSS for the grid
- add a row with three 4-width columns. Each column should have a colored box
- add a row with two 6-width columns. Each column should have a colored box
- add a row with one 12-width column. This column should have a colored box

Here's what the finished page should look like (it's fine if you use different background colors for the boxes):

![grid-exercise-solution.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.2_responsive_grids/grid-exercise-solution.png)

Limit yourself to 45 minutes for this exercise. At that point, whether you're finished or not, call it quits, save your work in Git, push it up to GitHub, submit a link to your project below, and check out the solution we've provided.

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Solution

Remember, as always, you're on the honor system. Once you've completed the challenge or put in a good faith effort for at least 45 minutes (whichever comes first), review the following solution:

- [Source code](https://github.com/Thinkful-Ed/responsive-grid-example-and-challenge/tree/solution)

# Challenge: Responsive Layout

To close out this lesson, you're responsible for creating a responsive web page for a Star Wars "trading card" site. You'll have to write CSS for a 960px 12 column responsive grid, and HTML and CSS to implement the layout called for by our designs. This project will demonstrate your mastery of responsive design basics.

You'll fork a GitHub repo we provide with some of the files you'll need to complete this project (including the image files). As in the challenge at the end of the previous lesson on forms, we provide a scenario followed by project requirements and designs, and finally a link to an example solution.

### The Scenario: From Toppz to bottom (and back again?)

Throughout the twentieth century, Toppz was the top brand in [baseball trading cards](https://en.wikipedia.org/wiki/Baseball_card). However, in the digital twenty-first century, Toppz has seen sales plummet, and the company is experimenting with digital trading cards as a new product.

The product team is in the prototyping stage, and they've tasked you with implementing the designs below. Your job is to create a page for a line of Star Wars themed trading cards. The page has two layouts, one for mobile, and one for screens wider than 640px. Note that some of the cards may have factual errors on them, but this isn't your responsibility; the digital trading cards have to match the physical cards.

### Requirements

You are building a page as represented in the design found below this list of requirements.

- First fork [this repo](https://github.com/Thinkful-Ed/star-wars-responsive-challenge-starter-files), then clone it to your local machine. Save all your work on the master branch of this repo, and push up to GitHub each time you commit. Continue using the command line for all Git work.
- Implement and use a 960px 12 column grid system using the `float: left;` approach. Code for your grid should go in a separate stylesheet.
- Modify the existing index.html as necessary to achieve the layout.
- Add a main.css file for any styles you need to achieve the layout. The CSS for your grid, however, should not go in this file.
- When the screen width is less than 640px, columns should take up 100% of their parent container's width, but there should continue to be padding between the card and the edge of the viewport.
- When the screen is 640px or wider, the columns should take up the correct width. So a 1-column wide column should take up 6.25% of the row.
- When the screen is wider than 1000px, the grid should stop expanding, and it should be centered in the browser window.
- The page should be SEO and accessibility friendly. From now on, these should be default requirements for every page you create.
- When you're done, save your work and push up to GitHub. Submit a link to your project below to let your mentor know it's time to review your code.
- Be sure to discuss this project with your mentor when you're finished.

### Design

Mobile state

![star-wars-challenge-mobile.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.3_challenge_responsive_layout/star-wars-challenge-mobile.png)

Desktop state ![star-wars-challenge-desktop.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.3_challenge_responsive_layout/star-wars-challenge-desktop.png)

Desktop state with grid superimposed ![star-wars-challenge-grid-superimposed.png](https://tf-curricula-prod.s3.amazonaws.com/curricula/5b3249003592fc371bac5c6254b50c9c/FEWD-001/v6/assets2/1.7.3_challenge_responsive_layout/star-wars-challenge-grid-super-imposed.png)

###### Hey friend, we’re here to help! Just a reminder that you can always check out the [Q&A sessions](https://www.thinkful.com/open-sessions/qa-sessions/) if you’re stuck or have questions. Feel free to drop by for a few minutes or the full hour. Happy coding!

### Solution

As always, you're on the honor system. Before peeking at this solution, we ask that you spend at least 3 hours trying to code this project on your own. That doesn't mean you shouldn't reach out for help if you get stuck. If you're stuck, but still within the three hour time limit, reach out to a fellow student or mentor on Slack.

- [Live version](https://thinkful-ed.github.io/star-wars-responsive-challenge/)
- [Source code](https://github.com/Thinkful-Ed/star-wars-responsive-challenge/tree/solution)

# Wrap up

In this lesson, we covered responsive design basics. We got a high level view of the key principles of responsive design (mobile-first, content-driven, responsive), and learned about the features that HTML and CSS provide for creating responsive sites, focusing on media queries and responsive grid systems.

We then described the behavior of a responsive grid system from a design standpoint, before implementing a simple 960px grid system using the `float: left;` strategy for getting columns to appear side by side.

Finally, you demonstrated your mastery of this material by implementing a responsive web page with a desktop and mobile state.

At this point, you should feel comfortable with the following:

- Explaining the principles of responsive design (mobile first, content-driven, responsive)
- Using media queries to override default styles
- Analyzing and explaining the `float: left;` approach to implementing a responsive grid
- Coding up designs that call for more than one layout, depending on the width of the viewport

If you're unclear on any of the above, be sure to follow up with your mentor.

# Recommended resources

Here are some resources we like for further reading on responsive design:

- Luke Wroblewski is the author of one of the best books on mobile-first design (fittingly-titled *Mobile First*). His blog post [Which One: Responsive Design, Device Experiences, or RESS?](http://www.lukew.com/ff/entry.asp?1509) provides an overview and resources about different approaches to responsive design.
- Brad Frost is web designer and authority on responsive design. Check out his [responsive patterns](https://bradfrost.github.io/this-is-responsive/patterns.html) page to see how to implement various responsive designs, and check out his [responsive resources](https://bradfrost.github.io/this-is-responsive/resources.html) page for a roundup of the best resources available on responsive web design.