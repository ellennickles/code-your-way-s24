# Git Introduction

>_This guide was adapted with permission from
[Joey Lee](https://github.com/joeyklee) and [Cassie
Tarakajian's](https://github.com/catarak) [Git
Guide](https://github.com/itp-dwd/2020-spring/blob/master/guides/git.md)._

## Contents

- [About Git](#about-git)
- [Install and configure](#install-and-configure)
  - [Check if Git is installed](#check-if-git-is-installed)
  - [Install Git](#install-git)
  - [Configure Git](#configure-git)
    - [Set username](#set-username)
    - [Set email](#set-email)
    - [Set default text editor](#set-default-text-editor)
    - [Set default branch name](#set-default-branch-name)
    - [Check settings](#check-settings)
- [Create a Git repository](#create-a-git-repository)
  - [About repositories](#about-repositories)
  - [Initialize a repository in a local p5 project directory](#initialize-a-repository-in-a-local-p5-project-directory)
- [Add and commit changes](#add-and-commit-changes)
  - [Check the status of your files](#check-the-status-of-your-files)
  - [Track new files and stage modified files to
    commit](#track-new-files-and-stage-modified-files-to-commit)
    - [Add and commit ALL changes](#add-and-commit-all-changes)
    - [Add a single file and commit](#add-a-single-file-and-commit)
    - [Add multiples files and commit](#add-multiples-files-and-commit)
  - [Show commit history](#show-commit-history)
  - [Ignore files from Git tracking](#ignore-files-from-git-tracking)
- [Undo changes](#undo-changes)
  - [Revert to the last commit](#revert-to-the-last-commit)
  - [Revert to a specified commit](#revert-to-a-specified-commit)
- [Branching and merging](#branching-and-merging)
  - [Branching](#branching)
    - [Create a branch](#create-a-branch)
    - [Switch branch](#switch-branch)
    - [Create and switch branches](#create-and-switch-branches)
    - [View all branches](#view-all-branches)
  - [Merging](#merging)
- [Resources](#resources)

## About Git

The best thing you can do for yourself on your developer journey is to use version control and get into the good practice of tracking your project evolution with a version control system. At the time of this writing (and quite likely into the future) we use **Git** to do version control.

**Git is a software** that allows you to do version control. Like other softwares, the Git software is something that you download (or is natively installed on your computer) and can be accessed either via the command line or using a desktop GUI.

You can think of Git as a system that allows you to drop "breadcrumbs" along the process of developing a project so that you can:

1. Track how your project develops (e.g. when you add new files, make changes to those files, add new features, etc.)
2. Go _back in time_ in case you break something, or want to return to a previous state of your project, or retrieve the previous state of a file within your project history

In this way, Git is kind of like a time machine ✨ -- this is what we mean by
**version control**: we're tracking the lifetime (the versions) of files as they
change as your projects develop.

Git provides many benefits which are outlined here in the [About section of this Git documentation](https://www.git-scm.com/about).

## Install and configure

### Check if Git is installed

Open [Terminal
(Mac)](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac)
or [Terminal or Command Prompt
(Windows)](https://www.lifewire.com/how-to-open-command-prompt-2618089) and
type:

```sh
$ git --version
```

If installed, the output will look something like this:

```sh
$ git version 2.33.0
```

### Install Git

If git is not installed, follow these installation steps:

- [Install on Mac](https://git-scm.com/download/mac)
  - There are many options!
  - Try first: **Binary installer** from Tim Harper > Version 2.33.0 > Automatic download > Install
  - Type `git --version` again to verify that the installation is complete
  - Keep the installer package with the README.txt for information if you need
    to resolve any issues
- [Install on Windows](https://git-scm.com/download/win)
  - Try the first link > "Click here to download"
  - Type `git --version` again to verify that the installation is complete

### Configure Git

#### Set username

Set a username:

```sh
$ git config --global user.name "Awesome Person"
```

#### Set email

Use any email address:

```sh
$ git config --global user.email awesomeperson@example.com
```

#### Set default text editor

Sometimes Git needs us to type in a message. Let's use Visual Studio Code:

```sh
$  git config --global core.editor "code --wait"
```

#### Set default branch name

**Branches** are the key to working on different versions of our projects. With
**branching** in Git, say good bye to crazy file and experimental feature
testing gymnastics like "myProject-final-1", "myProject-final-final",
"myProject-version-with-rainbows" etc. Git provides you with ability to create
**branches** or other versions of your project without needing to duplicate your
project or create experimental files and so on.

The default branch name of a new Git repository is called **master**.
[Let's change this](https://www.wired.com/story/tech-confronts-use-labels-master-slave/) to **main**:

```sh
$ git config --global init.defaultBranch main
```

#### Check settings

Type to verify individual settings:

```sh
$ git config user.name
$ git config user.email
$ git config core.editor
$ git config init.defaultBranch
```

## Create a Git repository

### About repositories

A **Git repository** is a collection of files and directories (folders) that are
managed using the version control system, Git. It is a central location, like a
database, to store, track, and manage changes to your code over
time.

When you create a Git repository, Git tracks changes to your files by creating a snapshot of the entire repository each time you commit changes. Git stores these snapshots as **commits**, which are like milestones that mark the history of your project. By doing so, Git makes it easy to track changes, collaborate with others, and revert to earlier versions of your code.

Git repositories can be hosted locally on your computer or remotely on a server
and can be accessed using Git commands or through Git hosting platforms like
GitHub, GitLab, and Bitbucket. These platforms provide a web-based interface for
managing repositories, collaborating with others, and performing common Git
operations like cloning, pulling, pushing, and merging changes. (Modified
response to ChatGPT prompt: _What's a git repository?_)

To start, we'll host a Git repository locally on your computer.

### Initialize a repository in a local p5 project directory

There are a couple of ways to set up a git repository. We'll start with
initializing an existing local directory on your computer. For this example we'll initialize the directory of a local p5 project.

1. Create new local p5 project

   - If you're using Visual Studio Code and you haven't already done so, install
  the extension **p5.vscode**
   - Open the **Command Palette** (Mac: command-shift-p / Windows: ctrl-shift-p)
   - Type and select **Create p5.js Project**
   - Select a location on your computer, for now **choose Desktop**
   - Create and title a **New Folder**, for example:

      ```sh
      $ myproject
      ```

   - Click Open

2. Initialize the new directory as a Git repository

    - From the command line, navigate into that project's directory:

      ```sh
      $ cd Desktop/myproject
      ```

    - Type:

      ```sh
      $ git init
      ```

3. Check the status of your repository with `git status`:

    ```sh
    $ git status
    ```

    The output will look something like this:
    
    ```sh
    On branch main

    No commits yet

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      index.html
      jsconfig.json
      libraries/
      sketch.js
      style.css

    nothing added to commit but untracked files present (use "git add" to track)
    ```

4. To start version controlling the project, you need to start tracking those
   files by (1) **staging** (or adding) and (2) then **committing** them to the
   **working tree**, the collection of files and directories that exist in your
   local Git repository **which are currently being worked on or modified**.

    a. Stage all files:

      ```sh
      $ git add .
      ```

    b. Check the status to help you build a mental model of what just happened:

      ```sh
      $ git status
      ```

    c. Then commit (or save) the files in you local repository with a short
      message describing the commit:

      ```sh
      $ git commit -m "Initial commit"
      ```

    d. Check the status again:

      ```sh
      $ git status
      ```

## Add and commit changes

Most of the time, you will be adding and committing changes. The following commands and the combinations will become part of your brain and muscle memory!

### Check the status of your files

Check the status of the files that have or have not been added to Git's tracking
system:

```sh
$ git status
```

**Run the `git status` command all the time** to help you build a mental model of the repository.

### Track new files and stage modified files to commit

NOTE: As you work on your project in Visual Studio Code, saving changes there
will not be automatically added to your Git repository. To "save" changes to
your Git repository, it's a two-step process in your terminal of staging (adding) your files and then committing them:

1. **Stage** with the `git add` command to start tracking a new file. If you update a file (with code, comments, etc.) that's already tracked, then you still need run `git add` to stage the file before the next commit. You can add all files at once, individually, or in small
groups (see below).
2. **Commit** the files. Only files that are staged will go into the commit. The `-m` flag appends a short message to describe the commit.

#### Add and commit ALL changes

`git add .` adds all files that are new or modified in your project folder:

```sh
$ git add .
$ git commit -m "adds any new or changed files"
```

(_How can you make this commit message more descriptive to fit your project?_)

#### Add a single file and commit

```sh
$ git add sketch.js
$ git commit -m "refactor with class to create many ball objects"
```

#### Add multiples files and directories and commit

Let's say you decide to separate your ball class (from the above example) into a
separate JavaScript file called `ball.js`. The staging and commit might look like:

```sh
$ git add index.html ball.js
$ git commit -m "updates index with reference to new ball.js"
```

### Show commit history

The `git log` command shows the past commits in reverse chronological order and is useful if you need to get the commit id number so that you can revert back to that ID:

```sh
$ git log
```

In your console, you'll see something like this:

```sh
commit 45d57112e59d0d5c31976a205de4688a19e4a436 (HEAD -> main)
Author: yourGithubHandle 
Date:   Mon Feb 27 13:38:05 2023 -0500

    add second circle

commit b5fb295283083775c550980bc4da8ec3050b8761
Author: yourGithubHandle 
Date:   Mon Feb 27 13:37:38 2023 -0500

    adds circle

commit ff1aae083c35a6bea9ffed83e3a269593a9ded77
Author: yourGithubHandle 
Date:   Mon Feb 27 13:36:15 2023 -0500

    Initial commit
```

Type the letter **q** to exit and return to the command line prompt.

### Ignore files from Git tracking

You can ignore files in Git by adding a file to your project folder named
`.gitignore`:

```sh
$ cd Desktop/myproject
$ touch .gitignore
```

Within `.gitignore` it is common to add:

```txt
# the macOS Finder file which is usually hidden to users
.DS_Store

# any secret files or folders 
.env
private/*

# big files you don't want to be tracked in git
my200mbImageFile.tiff
```

## Undo changes

There are a number of ways to "revert" or "reset" to a different version of a
file in Git.

For details about the differences and methods for reverting vs resetting, as
well as other "undo" options, read the [Undoing Commits & Changes Atlassian tutorial](https://www.atlassian.com/git/tutorials/undoing-changes)

### Revert to the last commit

```sh
$ git revert HEAD
```

This command will open the message window your default editor, such as
Visual Studio Code (if you set it in the step above). Save and close the file to
revert back to the last commit.

### Revert to a specified commit

```sh
$ git revert <commit id number>
```

Example: `git revert 3602d8815dbfa78cd37cd4d189552764b5e96c58`

This command will open the message window your default editor, such as
Visual Studio Code (if you set it in the step above). Save and close the file to
revert back to the specified commit.

## Branching and merging

Along with **tracking file changes**, git also offers up other functionality that help make it easier to develop projects (often times code, but can be other things too). One of these key offerings is a concept called **branching**.

The idea with branching is that you can create different versions of your
project (the branches) and then, if you want to or if it is relevant, you can
**merge** those versions or experiments into the project. In professional
software development, where many developers are working on the same repository,
developers will work on **feature branches** and then merge to `main` once the
feature is complete and tested.

When are you working in a new branch, you can add files and commit changes
just as before, but without interfering with the files in other branches.

### Branching

#### Create a branch

Create a new branch by using `git branch <name of branch>`

```sh
$ (main): git branch new-feature
```

* NOTE: the `(<branchName>):` before the `git` command is to indicate which branch you're currently in. DO NOT type in `(main):`.

#### Switch branch

Switch branches by using `git checkout <name of branch>`

```sh
$ (main): git checkout new-feature
$ (new-feature):
```

Depending on your terminal shell, run `git status` to verify your current branch.

* NOTE: the `(<branchName>):` before the `git` command is to indicate which branch you're currently in. DO NOT type in `(main):`.

#### Create and switch branches

Combine the above steps in one command!

```sh
$ (main) git checkout -b new-feature
$ (new-title-branch):
```

* NOTE: the `(<branchName>):` before the `git` command is to indicate which
  branch you're currently in. DO NOT type in `(main):`.

#### View all branches

```sh
$ git branch
```

Type the letter **q** to exit and return to the command line prompt.

### Merging

To merge a branch into another branch, you would first:

1. `git checkout` the branch you want your changes **to come into** then...
2. `git merge <the name of branch whose features you want to get>`

For example here we are saying, "I want to get the new updates from the `new-feature` and merge them into the `main` branch." In the example below the features from the `new-feature` will be merged into the `main` branch.

```sh
$ (main): git merge new-feature
```

To delete a branch after it is has been merged:

```sh
$ (main): git branch -d new-feature
```

## Resources

- At the command line, type `git help` for a list of git commands.
- [Git Cheat Sheet (pdf)](https://education.github.com/git-cheat-sheet-education.pdf)
- [Git Documentation](https://git-scm.com/doc)
- [Introduction to version control with Git from Microsoft
  Learn](https://learn.microsoft.com/en-us/training/paths/intro-to-vc-git/)
- [Oh Shit, Git!?!](https://ohshitgit.com/)
