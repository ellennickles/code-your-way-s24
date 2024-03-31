# Command Line Introduction

>_This guide was adapted with permission from
[Joey Lee](https://github.com/joeyklee) and [Cassie
Tarakajian's](https://github.com/catarak) [An introduction to the command line](https://github.com/itp-dwd/2020-spring/blob/master/guides/commandline.md)._

## Contents

- [Graphical user interface](#graphical-user-interface)
- [Command line interface](#command-line-interface)
- [Getting started](#getting-started)
  - [Prompt](#prompt)
  - [Running commands](#running-commands)
  - [Paths](#paths)
- [Common commands](#common-commands)
  - [Navigation](#navigation)
  - [Directories and files](#directories-and-files)
  - [Tips](#tips)
- [DO NOT BLINDLY RUN COMMANDS THAT YOU FIND ON THE INTERNET](#do-not-blindly-run-commands-that-you-find-on-the-internet)
- [Cheat sheet](#cheat-sheet)

## Graphical user interface

You're probably familiar with interacting with your computer using its Graphical User Interface, or GUI. If you want to open an application, say Firefox, you might find a graphical icon that represents the browser, use your mouse to hover over it, and double click on the icon to open the application. This is, in fact, how you do most of the actions on your computer, interacting with icons, or dropdown menus, or other visual elements.

## Command line interface

You can, however, interface with your computer only using text. You write commands using text, and the computer will execute those commands. Sometimes it writes text back at you, or it might open an application, or produce a sound—-it will do whatever you told it to do. You can write these commands to your computer using the **command line**, also known as the command line interface, or CLI.

![Screenshot of macOS terminal window](https://github.com/ellennickles/code-your-way-s23/blob/main/version-control-guides/assets/commandline.png)

**Why use the command line?** You may find the command line difficult or tedious
to use. However, it is an essential tool to developing software and important
that you start to get comfortable using it in the context of our course for
learning how to implement version control in our projects. It enables you to
do new things with your computer that aren't even possible just using the GUI!

**Beware!** It also gives you the power to break your computer in major ways—with
great power comes great responsibility. See [Do not blindly run commands that you
find on the
Internet](#do-not-blindly-run-commands-that-you-find-on-the-internet).

A **terminal** is a command line interface tool that comes pre-installed on
computers: [Terminal
(Mac)](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac)
or [Terminal or Command Prompt
(Windows)](https://www.lifewire.com/how-to-open-command-prompt-2618089).


## Getting started

### Prompt

When you open a terminal application on your computer (see above), you'll
get a prompt which looks something like this:

```sh
enickless-Macbook-Air-2:~ codeyourway$
```

followed by a cursor, blinking, ready for input. Let's break down what all of
this means:

- `enickless-Macbook-Air-2`
  - This is the name of the computer that you have a terminal session open to.
    In this case, it is the name of my computer. It may seem obvious, like,
    "duh, if I've opened Terminal on my computer, I'm trying to connect to my
    computer. However, through the Terminal interface, you can connect to any
    computer connected to your network or the Internet (provided you have the
    correct credentials).
- `~`
  - This is where you are (which folder you have open) on your computer. `~` is shorthand for your "home" directory. 
- `codeyourway`
  - This is the account you are running commands as, which is the account you're
    logged in as on your computer. It is possible to switch accounts, but most
    of the time you will not need to. (NOTE: I created an account on my computer
    called, _codeyourway_, to match the name of our course for demo purposes.)
- `$`
  - This is a symbol that represents the prompt. It tells us that our machine is ready and awaiting commands.

### Running commands

Let's input our first command. From now on, I'm going to shorten the prompt to
just `$`, which **you do not need to type** when inputting commands. Type `pwd`:

```sh
$ pwd
```

and hit enter. `pwd` stands for "print working directory" and it tells us where
we are. You should get something like:

```sh
/Users/codeyourway
```

Since I'm logged in as `codeyourway`, this makes sense. `~` stands for the home directory for this account. `/Users/codeyourway` is the [path](#paths) to where you are currently located.

Let's try some more commands! Try:

```sh
$ ls
```

and hit enter. `ls` is short for "list", and tells you all of the files that are
in a directory. You might see something like:

```sh
Desktop         Downloads       Movies      Pictures
Documents       Library         Music       Public    
```

Commands often have arguments which specify how the command should run. For
example, to move into the Desktop directory run `cd` for "change directory" followed by the name of the directory:

```sh
$ cd Desktop
```

Now if we enter the command:

```sh
$ ls
```

..we should see a list of all the files within the current directory, in this
case on the Desktop.

We can verify that we've changed location in a few ways. Your command prompt has probably changed to:

```sh
enickless-Macbook-Air-2:Desktop codeyourway$
```

re-enter:

```sh
$ pwd
```

and you should see:

```sh
/Users/codeyourway/Desktop
```

### Paths

When you interact with your computer using the GUI, you use windows, icons,
keyboard shortcuts, and dropdown menus to navigate around your computer. But on
the command line, you don't have access to these things, all you have is your
computer's file system. Everything is either a file or a folder. When we write
software, we're creating a collection of files that all belong to a project
(that share a root folder). Using paths is essential to getting around your
computer from the command line interface.

## Common commands

We're barely scratching the surface, but here are some commands to get you
started:

### Navigation

| Command      | Description                                | Example      |
| ------------ | -------------------------------------------|------------- |
| `pwd`        | Returns the path to the current directory | `$ pwd`      |
| `ls`         | Lists the contents of the current directory | `$ ls`     |
| `ls -a`      | Lists the contents of the current directory including any hidden files | `$ ls`     |
| `ls <path/to/directory>` | Lists the contents of the given directory | `$ ls /Users/codeyourway` |
| `ls -1`      | List all files in the current directory separated by a line break | `$ ls -1` |
| `ls -1a` | List all files in the current directory separated by a line break including any hidden files | `$ ls -1a` |
| `cd <directory>`  | Move into a directory located in your current directory   | `$ cd Desktop` |
| `cd <path/to/directory>`| Move into the given directory from another location | `$ cd /Users/codeyourway/Desktop` |
| `cd ..`      | Move up one level to the parent directory | `$ cd ..` |
| `cd ../..`   | Move up two levels | `$ cd ../..` |
| `cd ~`       | Return to the home directory | `$ cd ~` |

### Directories and files

| Command      | Description                                | Example      |
| ------------ | -------------------------------------------|------------- |
| `mkdir`      | Creates a directory in the current directory | `$ mkdir myproject` |
| `mkdir <path/to/directory>` | Creates a directory with a given path | `$ mkdir /Users/codeyourway/Desktop/myproject` |
| `touch <filename.extension>` | Create a file in the current directory | `$ touch sketch.js` |
| `cat <filename.extension>` | Prints the contents of a file | `$ cat sketch.js` |
| `nano <filename.extension>` | Edit the contents of a file in default editor | `$ nano sketch.js` |
| `mv <currentname.extension> <newname.extension>` | Renames the file | `$ mv sketch.js script.js` |
| `cp <currentfile.extension> <filecopy.extension>` | Copies the contents of a file to a new one with a different name | `$ cp one.js two.js` |

### Tips

| Command      | Description                                |
| ------------ | -------------------------------------------|
| Up arrow key | Cycles through previously-run commands so you don't have to retype them |
| Tab | Auto-completes a directory or filename |
| `clear` | Clears the terminal window by moving content out of sight (scroll up to see it) |
| Control + A | Keyboard shortcut to jump to the start of a command |
| Control + E | Keyboard shortcut to jump to the end of a command |
| Control + U | Clears the current command before you run it |
| Control + C | Quits an active task |

## DO NOT BLINDLY RUN COMMANDS THAT YOU FIND ON THE INTERNET

Don't blindly copy and paste commands into the terminal that you found on Stack Overflow, especially ones that contain `sudo` or `rm`. This is a great way to mess up your computer! Take a moment to try to understand what is happening, or why someone is suggesting it, or look at a few different suggestions before choosing one.

## Cheat sheet

[Command Line Cheat Sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/) by Tobias Günther
