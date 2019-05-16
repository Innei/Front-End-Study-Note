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