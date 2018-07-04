## Lesson 8: Syntax:


* Hoisting is a result of how JS is interpreted in the browser. Essantially, before any JS code is executed all variables are hoisted which means they are raised to the top of the fct scope.
* Variables declared with `let` and `const` eliminate the hoisting issue because they are scoped to the block and not to the function (when using `var`, variables are either scoped *globally* or *locally*.
* __Rules for using let and const__ : Use `let` when you are planning to change the value of the variable later in the code.
* Template literals.
* Destructure. 
* Object Literal Shorthand.
* For .... of loop 
* Spread Operator
* Rest Parameter 

### Lesson 9: Shell Workshop:


* commands reviewed in this lesson are: `pwd` print working directory, `cd` change directory, `cd ..` change to the parent directory, `mv` move file, `mkdir` make directory, `rm` remove file, `rmdir` remove directory, `curl` downloading, `less` viewing files in the shell, `cat` reads the file and output the content (runs several things together), `ls` list directory, `ls-l` list it with parameters, `grep` searching and pipes, `grep -c` searching the count of ... , `echo` print to the shell, `$` Set it to a variable in the shell

### Lesson 10, 11, 12, 13: Version Control:

* `git status`, `git init`, `git clone`, `git push`, `git push`, `git commit`, `git log`, `git log --oneline`,  `git log --stat`, `git show`, `git log -p`, `git log -p --stat`, `git log -p -w`, `git log --stat SHA#`, `git log --oneline --decorate --graph --all`, `git merge heading-update`

### Lesson 14: Tagging, branching, and merging:

* `git tag`: add tags to specific commits, whats recommeded is the annotated tag and it can be done by using the flag `-a` which looks as follow `git tag -a` and to delete a tag we can use `git tag -d`
* `git branch`: able to create multiple lines of developement
* `git checkout`: able to switch between different branches and tags
* `git merge`: take changes on different branches and conbine them

### Lesson 15: Undoing changes:

* `git commit --amend`: alter the most recent commit (you can do this if you forgot to include a file in the commit or have a typo in the commit message)
* `git revert SHA#`: Reverses changes of the commit
* `git reset`: delete commits
* `git reflog`: to access commits deleted (30 days before git erases)

### Lesson 16: Working with remotes:

* `git remote`: to manage the remote repository
* `git push <remote-shortname> <branch>`: to send changes up to the repository
* `git pull`: retrieve update from the repo
* `git remote add`: to create a connection from my local repo to the remote one
* `git remote -v`: to verify the shortname with the correct URL
* `git fetch`:  It just retrieves the commits and moves the tracking branch. It does not merge the local branch with the tracking branch

### Lesson 17: Working on another' Developer's repository:

* `git shortlog` : A quick way that we can see how many commits each contributor has added to the repository.
* `git shortlog -s -n`: `-s` flag is to show just the number of commits (rather than each commit's message) and `-n` flag to sort them numerically (rather than alphabetically by author name)
* `git log --author=` : to filter the commits to the provided author.
* `git log --oneline --author=`: 

__Filters Commits by Search__:

* In case the commit message is long, you can provide its details in the description because If you write a descriptive commit message, then it's so much easier to search through the commit messages, later, to find exactly what you're looking for. And remember, if the commit message is not enough for you to explain what the commit is for, you can provide a detailed description of exactly why the commit is needed in the description area.
* `git show SHA#` show the specific commit with the detailed description.

__Recap:__

The git log command is extremely powerful, and you can use it to discover a lot about a repository. But it can be especially helpful to discover information about a repository that you're collaborating on with others. You can use git log to:

* group commits by author with `git shortlog`
* filter commits with the --author flag: __Example:__ `$ git log --author="Richard Kalehoff"`
* filter commits using the --grep flag: __Example:__ `$ git log --grep="border radius issue in Safari"`


### Lesson 18: Staying in sync with a remote repo:





### Lesson 19: Document object model "DOM":

* The DOM stands for "Document Object Model" and is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.
* constructed from the browser
* is globally accessible by JavaScript code using the `document` object

* interface = blueprint
* properties = data
* methods = functionality

### Lesson 20: Creating Content with JS:

#### Update existing page content:

__ In this section, we looked at multiple ways to change page content: __

* `.innerHTML`
* `.outerHTML`
* `.textContent`
* `.innerText`

We saw that to set HTML content for an element, out of the three properties list above, we can only use `.innerHTML`. Using .`textContent` will erroneously include the HTML characters as plain text inside the element.

We also looked at the difference between `.textContent` and `.innerText`. `.textContent` completely ignores any CSS styling and returns all of the element's HTML just as it's listed in the HTML. On the other hand, the `.innerText` property will take CSS styling into consideration and will return the text that is visibly rendered on the page.

#### Add new page content:

__In this section, we learned how to create new DOM elements and add them to the page. We looked at the following methods:__

* `.createElement()` to create new elements
* `.appendChild()` to add a child element to a parent element as its last child
* `.createTextNode()` to create a text node
* `.insertAdjacentHTML()` to put HTML text anywhere around an element

__Some important things to note are:__

if an element already exists in the DOM and this element is passed to `.appendChild()`, the  `.appendChild()` methodwill move it rather than duplicating it
an element's .textContent property is used more often than creating a text node with the `.createTextNode() ` method
the `.insertAdjacentHTML()` method's second argument has to be text, you can't pass an element

#### Remove Page Content:

__In this short section, we learned two ways to remove an element from the page. You learned about:__

* `.removeChild()`
* `.remove()`

The difference is that with .removeChild() must be called on the parent of the element being removed and must be passed the child to be removed, while .remove() can be called directly on the element to delete.

__We also learned about the following helpful properties:__

* `.firstChild`
* `.firstElementChild`
* `.parentElement`

The difference between .firstChild and .firstElementChild, is that .firstElementChild will always return the first element, while .firstChild might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code.

#### Style page content:

__We learned a ton of content in this section! We looked at:__

* modifying individual styles with `.style.<prop>`
* updating multiple styles at once with `.style.cssText`
* getting/setting a list of classes with `.className`
* getting/setting/toggling CSS classes with `.classList`

My recommendation to you is that, out of the list of techniques you learned in this section, to use the `.classList` property more than any other. `.classList` is by far the most helpful property of the bunch, and it helps to keep your CSS styling out of your JavaScript code.

### Lesson 21: Working with Browser Events:

#### Respond to events:

In this section, you learned all about events, the EventTarget Interface, and how to add event listeners. We used the `.addEventListener()` method to attach listeners to:

* the document
* a Node
* an Element

basically anything that inherits from the EventTarget Interface. We also saw that there are three main parts to an event listener:

* an event target - the target
* the type of event to listen for - the type
* a function to run when the event occurs - the listener

#### Remove an Event listener:

In this section, you learned about how to remove event listeners. You took a dive into object equality and how that plays a huge part in removing an event. Lastly, we also looked at how you can find out what event listener a DOM element has by using the DevTools.

#### Phases of an event:

We covered a number of important aspects of events and event listeners in this section! We looked at:

* the phases of an event:
    * the `capturing` phase
    * the `at target` phase
    * the `bubbling`  phase
* the event object
* prevent the default action with `.preventDefault()`


#### Avoid too many events:

In this section, we looked at Event Delegation. Event Delegation is the process of delegating to a parent element the ability to manage events for child elements. We were able to do this by making use of:

* The event object and its `.target` property
* The different phases of an event

#### Know when the DOM is ready:

__In this section, we learned about the helpful `DOMContentLoaded` event.__

Along the way, we reviewed how the HTML code is parsed incrementally and how this affects JavaScript/DOM code. We also looked at why writing DOM-manipulation code in the <head> can cause errors.

### Lesson 23: Performance:

#### Add page content efficiently:

In this section, we took a brief dive into the performance implications of the code we write. We looked at a specific chunk of code and came up with ways that we could improve its performance simply by rearranging when the code was running (moving initialization code out of the `for` loop).

We also looked at how to measure how long it takes code to run using `performance.now()`

Lastly, we looked at using a DocumentFragment `createDocumentFragment()` to prevent performance issues and to prevent adding unnecessary elements to the DOM.

#### Reflow and repaint:

In this section, we took a brief look at what reflow and repaint are and saw how they can impact the performance of a website.

Reflow is the process of calculating the dimensions and position of page elements. This is a computationally intensive (slow) tasks. Repaint is the process of drawing the pixels to the screen. This is faster than reflow, but is still not a fast process. You want to make sure that your code causes the fewest number of reflows as possible.

PS: In general, if you have to make a group of changes, hide/change all/show is a great pattern to use if the changes are relatively contained.

#### The call stack:

In this section, we looked at how JavaScript is a single-threaded programming language, which means it can only execute one thing at a time. We looked at how JavaScript keeps track of what functions are running by using the Call Stack.

#### The event loop:

This section uncovered how JavaScript works under the hood; We looked at how JavaScript, the DOM, and Web APIs all fit together.

Specifically, we looked at how JavaScript is a single-threaded programming language, which means it can only execute one thing at a time. We looked at how JavaScript keeps track of what functions are running by using the Call Stack. We also looked at how asynchronous code is handled.

Asynchronous code makes use of the JavaScript Event Loop. Any asynchronous code (like setTimeout or the function passed to .addEventListener()) is handled by the browser. When this asynchronous code is ready to be executed, it's moved to the queue where it waits until the Call Stack is empty. Whenever the Call Stack is empty, code moves from the Queue over to the Call Stack and gets executed.

Knowing how JavaScript and the Event Loop work can help us write code that is more efficient.

#### SetTimeout:

The browser-provided `setTimeout()` function takes another function and a delay, and invokes the function after the delay has passed.

Knowing how the JavaScript Event Loop works, we can use the `setTimeout()` method to help us write code that allows the browser to handle user interactions.
