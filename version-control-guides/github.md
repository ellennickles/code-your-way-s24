# GitHub Introduction

## Contents

- [Part 0: Create a GitHub account](#part-0-create-a-github-account)
- [Part 1: Set up SSH keys for GitHub authentication](#part-1-set-up-ssh-keys-for-github-authentication)
  - [Step 1: Generate a new SSH key pair on your local computer](#step-1-generate-a-new-ssh-key-pair-on-your-local-computer)
  - [Step 2: Add the SSH private key to the ssh-agent](#step-2-add-the-ssh-private-key-to-the-ssh-agent)
  - [Step 3: Add the SSH public key to your GitHub account](#step-3-add-the-ssh-public-key-to-your-github-account)
  - [Step 4: Test your SSH connection](#step-4-test-your-ssh-connection)
- [Part 2: Integrating GitHub](#part-2-integrating-github)
  - [Step 1: Add a local Git repository to GitHub](#step-1-add-a-local-git-repository-to-github)
  - [Step 2: Push changes to a remote repository](#step-2-push-changes-to-a-remote-repository)
  - [Step 3: Pull changes from a remote repository](#step-3-pull-changes-from-a-remote-repository)
  - [Option: Clone a GitHub repository to a local directory](#option-clone-a-github-repository-to-a-local-directory)
- [Part 4: Resources](#part-4-resources)

## Part 0: Create a GitHub account

Github is a online service that allows you to host your Git version-controlled
projects. It's a platform from which you can easily share your projects,
software or otherwise, and also develop projects with others. The general idea
is to motivate open software, knowledge sharing, and collaboration.

First create a [GitHub
account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
if you don't already have one.

## Part 1: Set up SSH keys for GitHub authentication

 To connect to GitHub from your local repositories, you'll need to set up
 [Secure Shell Protocol (SSH)](https://en.wikipedia.org/wiki/Secure_Shell) keys
 to authenticate from the terminal/command line and **push** or
 **pull** changes from GitHub to your local computer.

 SSH is a secure way to connect to remote accounts over unsecure networks based
 on a [public-key
 cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) encryption
 system. Watch this short Kahn Academy video, [Encryption and public
 keys](https://www.youtube.com/watch?v=6-JjHa-qLPk&t=387s), to learn more.

 NOTE: The process of setting up these keys might be different for everyone
 depending on their operating system version. If you run into issues, refer to
 the linked tutorials as a starting point.

### Step 1: Generate a new SSH key pair on your local computer

>_Reference: [Generating a new SSH
  key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)_

1. Open Terminal
2. Paste the text below (but not the prompt `$` if that is visible to you here), substituting in **your GitHub
   email address**:

    ```ssh
    ssh-keygen -t ed25519 -C "your_github_email@example.com"
    ```

    The output should look something like this:

    ```txt
    Generating public/private ed25519 key pair.
    ```

3. You will be prompted to "Enter a file in which to save the key" AND you will
   be prompted with a default file location to save that key, something like:

    ```txt
    Enter a file in which to save the key (/Users/YOU/.ssh/ed25519: [Press enter]
    ```

    **Don't type anything**, just **press Enter** to accept the current
    location.

4. Next you will prompted to add a
   [passphrase](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)
   for an extra layer of security protection. Skip this for now: **press Enter twice** to leave the passphrase empty. You can always add one later.

5. Once the key is saved, the output will look something like this:

    ```txt
    Your identification has been saved in /Users/YOU/.ssh/ed25519.
    Your public key has been saved in /Users/YOU/.ssh/ed25519.pub.
    The fingerprint key is: SHA256:...and a looong string of characters your_github_email@example.com
    The key's randomart image is: +--[ED25519 256]--+ ...and more characters
    ```

### Step 2: Add the SSH private key to the ssh-agent

In order to use your SSH private key, add it to another program called the
**ssh-agent** on your computer.

>_Reference: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)_

1. Start the ssh-agent in the background:

    ```ssh
    eval "$(ssh-agent -s)"
    ```

    The output should look something like this:

   ```text
    > Agent pid 59566
    ```

    NOTE: Depending on your environment, you may need to run a different
    command. Check the tutorial above for options.

2. If you're using macOS Sierra 10.12.2 or later, you will need to modify your
   ~/.ssh/config file to automatically load keys into the ssh-agent and store
   passphrases in your keychain. (If you are not using macOS Sierra 10.12.2 or
   later, skip this step.)

   - First, check to see if your `~/.ssh/config` file exists in the default
     location by printing its contents:
  
      ```ssh
      cat ~/.ssh/config
      ```

   - If the file doesn't exist, create the file:

      ```ssh
      touch ~/.ssh/config
      ```

   - Open your `~/.ssh/config` file, then modify the file to contain the
     following lines. This command expects that the [default text
     editor is configured to use Visual Studio
     Code](https://github.com/ellennickles/code-your-way-s24/blob/main/week5/git.md#set-default-text-editor):

      ```ssh
      code ~/.ssh/config
      ```

    - **NOTE:** If Visual Studio Code is not your default text editor, instead
      use Nano in the terminal (another text editor) to modify the config file:

        ```ssh
        nano ~/.ssh/config
        ```

   - The config file should open in a new window in Visual Studio Code or if
     using Nano, within the Terminal window. Add the following lines. If you
     copy and paste, take care not to include extra spaces at the end. You can
     also manually type these commands into the file.

      ```txt
      Host github.com
        AddKeysToAgent yes
        IdentityFile ~/.ssh/id_ed25519
      ```

   - Save and close the file and return to the terminal.

   - Print out the contents of the file to verify the change:

      ```ssh
      cat ~/.ssh/config
      ```

3. Add your SSH private key to the ssh-agent:

    ```ssh
    ssh-add ~/.ssh/id_ed25519
    ```

    The output should look something like this:

    ```txt
    Identity added: /Users/YOU/.ssh/id_ed25519 (your_github_email@example.com)
    ```

### Step 3: Add the SSH public key to your GitHub account

>_Reference: [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)._

  1. Copy the SSH public key to your clipboard:

      ```ssh
      pbcopy < ~/.ssh/id_ed25519.pub
      ```

      **NOTE:** If `pbcopy` isn't working, print the contents and copy it to your
      clipboard:

      ```ssh
      cat ~/.ssh/id_ed25519.pub
      ```

  2. Navigate to your GitHub account > Click your profile photo (upper right) >
      **Settings**

  3. Sidebar > **SSH and GPG keys**

  4. Click **New SSH key** or **Add SSH key**

  5. Complete the following:
      - **Title**: Add a descriptive label for the new key. For example,
      if you're using a personal laptop, you might call this key "Personal
      laptop"
      - **Key type**: Authentication key
      - **Key**: paste in public key (copied in Step 1 above)
      - Click **Add SSH Key**

  6. If prompted, confirm access to your account on GitHub.

### Step 4: Test your SSH connection

>_Reference: [Testing your SSH
>connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)._

1. Open your terminal

2. Enter the following:

    ```sh
    ssh -T git@github.com
    ```

    You might see a warning like this:

    ```ssh
    > The authenticity of host 'github.com (IP ADDRESS)' can't be established.
    > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
    > Are you sure you want to continue connecting (yes/no)?  
    ```

3. Verify that the fingerprint in the message you see matches [GitHub's public
   key fingerprint](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints). If it does, then type `yes`:

    ```sh
    yes
    ```

    The output might look something like this:

    ```ssh
    > Hi YOURGITHUBUSERNAME! You've successfully authenticated, but GitHub does not provide shell access.  
    ```
  
4. Verify that the resulting message contains your username. If you receive a
   "permission denied" message, see "[Error: Permission denied
   (publickey)](https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickey)."

## PART 2: Integrating GitHub

### Step 1: Add a local Git repository to GitHub

>_References: [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) and [Adding a local repository to GitHub using
Git](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git)_

You can **push** a local Git repository to GitHub.com store and share with
others. (You can also make repositories on GitHub private.)

1. Make sure you have a local Git repository. If you need to, refer to our Git
   Intro guide for how to [initialize a repository in a local p5 project
   directory](https://github.com/ellennickles/code-your-way-s24/blob/main/version-control-guides/git.md#initialize-a-repository-in-a-local-p5-project-directory).

2. In your GitHub.com account, create a **new repository**. (You'll connect your
   **local** repository to this new **remote** repository in a minute.) From
   the **+ menu** in the upper left corner > **New repository**

3. Complete the following:

    - **Repository name**: For consistency, use the same name as your local Git
    repository. Do not include spaces. For example: **p5demo**
    - Set the visibility of the repository. For now, and to share projects in our
      course, use: **Public**
    - Skip the other optional steps and click: **Create Repository**

4. Copy the SSH URL from: **Quick setup** > SSH button > SSH URL

5. In your terminal, navigate into your local Git repository:

    - Ensure that all of your recent changes have been staged (added) and
      committed
    - Ensure that you are on the main branch:

      ```sh
      git checkout main
      ```

6. To connect your **local** repository to your new **remote** repository, type
   these commands using the SSH URL you copied before:

      ```sh
      git remote add origin git@github.com:YOURGITHUBUSERNAME/p5demo.git
      git push -u origin main
      ```

    `origin` is the name of your remote repository. I know, it's confusing
    because the repository _originated_ on your local computer! You can change
    the remote name to `destination` following the steps in this tutorial,
    [Renaming a remote
    repository](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories?platform=mac#renaming-a-remote-repository)

7. Return to your GitHub account and refresh your remote repository page to
    find your project's files. NOTE: After you connect your local repository to
    a remote repository, any commits that you make on your local machine will
    not automatically be "saved" in the remote repository. You'll need to `push`
    those changes to the remote.

### Step 2: Push changes to a remote repository

After you connect your local repository to a remote repository, local commits
are not automatically "saved" in the remote repository. You'll need to `push`
those commits to the remote repository on GitHub with this command:

  ```sh
  git push origin main
  ```

Refresh your remote repository page on GitHub to see the changes.

### Step 3: Pull changes from a remote repository

Similarly, if you make any changes to the remote repository on GitHub, those
updates are not automatically reflected in the repository on your local
computer.

For example, if you followed the steps above, then your project does
not have a README file to describe your project to others on GitHub. We can
certainly create this file on our local machines (using the `touch README.md`
command), but let's make the update in the remote repository on GitHub and then
pull it down to the local repository:

1. On your remote repository, click **Add a README**
2. GitHub automatically generates a title for the page from your repository's
   name using Markdown. Markdown syntax to format plain text: [Getting started with writing and formatting
   on
   GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
3. Feel free to change the title and add a project description
4. **Preview** the results
5. When finished, scroll to the bottom of the page to commit this file to
   your repository's `main` branch:
    - Enter a commit message. The default message is: `Create README.md`
    - Click **Commit new file**
6. In the terminal, type this command to pull changes into your local
   repository:

    ```sh
    git pull origin main
    ```

7. On your local computer, look for the new README.md file in your project's directory

### Option: Clone a GitHub repository to a local directory

If you want to pull a local version of your repository to different place on your computer
(or to another local computer or to a server on a hosting service), or if you want a local
version of another repository that you find on GitHub:

1. Navigate to the repository on GitHub
2. From the **<> Code** menu > Local: Clone: SSH > **Copy the SSH URL**
3. In the terminal, navigate to a location on your local computer to clone the
   repository and use this command:

    ```sh
    git clone git@github.com:THEGITHUBACCOUNT/REPONAME.git
    ```

## Part 4: Resources

- [About Git (and how it works with
  GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
- [Hello World: Follow this Hello World exercise to get started with
  GitHub](https://docs.github.com/en/get-started/quickstart/hello-world)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Pro Git book:
  GitHub](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project)
  (on collaborating)
- Coding Train videos: [Introduction to Git and
  GitHub](https://thecodingtrain.com/tracks/git-and-github-for-poets/git/1-fundamentals/1-intro)
  (from 2016)
- [Markdown Basic writing and formatting
  syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Communicate using
  Markdown](https://github.com/skills/communicate-using-markdown)
- [Markdown Tutorial](https://www.markdowntutorial.com/)
