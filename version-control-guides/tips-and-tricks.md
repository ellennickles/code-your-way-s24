# Tips and Tricks

A place to list optimizations to our version control workflows and related
recommendations 🙌

## Command Line / Terminal / Shell

### Oh My Zsh!

Zsh, or the Z shell, is an application that interprets commands to interact
with your computer's operating system using your command line interface /
terminal. Oh My Zsh is a Zsh framework that provides additional customization
and functionality, including a Git plugin, which among _many_ other features
automatically displays when you are in a Git repository and the current branch.

- [Installing Zsh and Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki)
- [My Zsh Documentation](https://ohmyz.sh)
- Coding Train videos (from 2018):
  [(Oh My Zsh) Shell](https://thecodingtrain.com/tracks/2018-workflow/workflow/3-shell) and [Git](https://thecodingtrain.com/tracks/2018-workflow/workflow/4-git)

## Visual Studio Code

### Shell command

Launch projects (open directories or individual files) in Visual Studio Code
directly from your terminal. Steps to install this functionality:

1. In Visual Studio Code open the Command Palette (Mac: **command-shift-p** or
   Windows: **ctrl-shift-p**)
2. Start typing **shell** and select **Shell Command: Install 'code' command in
   PATH**
3. Launch Visual Studio Code directly from your terminal:
    - To open a directory, `cd` into the directory and then type `code .`
    - To open a file, navigate to the file's location and then type `code nameoffile`

Or follow this [Coding Train video (from 2018) on Visual Studio
Code](https://youtu.be/yJw0SyKO9IU?t=220)

More information at [Visual Studio Code: Command Line Interface (CLI) - Opening
Files and Folders](https://code.visualstudio.com/docs/editor/command-line#_opening-files-and-folders)

### Integrated terminal

Too many windows on your Desktop? View your terminal directly
inside of Visual Studio Code with **View > Terminal** or **Terminal >
New Terminal**. More information at [Visual Studio Code: Terminal Basics](https://code.visualstudio.com/docs/terminal/basics)

### Integrated Git support

Visual Studio Code provides integrated Git support to manage version control
through its graphical interface, as opposed to typing commands in your terminal
application. The functionality is limited but handles the [main Git operations](https://www.git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Visual-Studio-Code) and will probably take care of everything that you need right now.

TIP: Use this feature OR your terminal (standalone or the integrated view
mentioned above) to avoid confusion and unintentional mishaps. For example,
switching your branch through Visual Studio Code's graphical user interface (GUI) will not auto update your branch designation in your current terminal view.

More information (including video tutorials) at [Visual Studio Code: Using Git
source control in VS
Code](https://code.visualstudio.com/docs/sourcecontrol/overview) and
[Introduction to Git in VS
Code](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git).

## GitHub

### GitHub Pages

Create a webpage from a public repository, hosted and published with GitHub
Pages, a "a static site hosting service that takes HTML, CSS, and JavaScript
files straight from a repository on GitHub".

For example, here are the steps publish a p5 project:

1. In GitHub, navigate to the project's repository
2. Under the repository's name, click **Settings**
3. In the sidebar menu, click **Pages**
4. Build and deployment > Source: select **Deploy from a branch**
5. Branch > select **main** and click **Save**
6. NOTE: The build time can sometimes take seconds or a couple of hours!
7. When it's deployed, visit your live site at yourgithubusername.github.io/nameofrespository

More information at the official [GitHub Pages Documentation](https://docs.github.com/en/pages).
