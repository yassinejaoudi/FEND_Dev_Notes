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

### Lesson 19: Document object model "DOM":

* The DOM stands for "Document Object Model" and is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.
* constructed from the browser
* is globally accessible by JavaScript code using the `document` object

* interface = blueprint
* properties = data
* methods = functionality

### Lesson 20: Creating Content with JS:

#### Update existing page content:

*** In this section, we looked at multiple ways to change page content: ***

* `.innerHTML`
* `.outerHTML`
* `.textContent`
* `.innerText`

We saw that to set HTML content for an element, out of the three properties list above, we can only use `.innerHTML`. Using .`textContent` will erroneously include the HTML characters as plain text inside the element.

We also looked at the difference between `.textContent` and `.innerText`. `.textContent` completely ignores any CSS styling and returns all of the element's HTML just as it's listed in the HTML. On the other hand, the `.innerText` property will take CSS styling into consideration and will return the text that is visibly rendered on the page.

#### Add new page content:

***In this section, we learned how to create new DOM elements and add them to the page. We looked at the following methods:***

* `.createElement()` to create new elements
* `.appendChild()` to add a child element to a parent element as its last child
* `.createTextNode()` to create a text node
* `.insertAdjacentHTML()` to put HTML text anywhere around an element

***Some important things to note are:***

if an element already exists in the DOM and this element is passed to `.appendChild()`, the  `.appendChild()` methodwill move it rather than duplicating it
an element's .textContent property is used more often than creating a text node with the `.createTextNode() ` method
the `.insertAdjacentHTML()` method's second argument has to be text, you can't pass an element

#### Remove Page Content:

*** In this short section, we learned two ways to remove an element from the page. You learned about: ***

* `.removeChild()`
* `.remove()`

The difference is that with .removeChild() must be called on the parent of the element being removed and must be passed the child to be removed, while .remove() can be called directly on the element to delete.

*** We also learned about the following helpful properties: ***

* `.firstChild`
* `.firstElementChild`
* `.parentElement`

The difference between .firstChild and .firstElementChild, is that .firstElementChild will always return the first element, while .firstChild might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code.