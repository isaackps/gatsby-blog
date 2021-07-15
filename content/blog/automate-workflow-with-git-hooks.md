---
date: 2021-07-14T07:56:42.064Z
title: Automate workflow with git hooks
description: Boost productivity with git hooks!
thumbnail: /images/uploads/321-3210662_git-hooks-git.png
banner: /images/uploads/githooksdirectory.png
tag: Javascript Programming
---
There are a lot of guidelines and processes while doing development and most of the time some of us will forget some steps. It make me wonder how nice if it were all automated.

In this article, lets' discuss automation for minor but important stuffs like linting, formatting and testing using git hooks.     

---

## What are git hooks?

Git hooks are scripts that you can set up to run at certain events in the Git lifecycle. These events include different stages of a commit, like before a commit (pre-commit) and after a commit (post-commit).

These are very useful as they allow developers to run custom code tasks or enforce standards by automating scripts.

## How to use git hooks?

First of all, when you initialise a repo with git, there will be a hidden folder with some sample hooks.

```
cd .git/hooks
```

And if you open the file, for example, `pre-commit.sample`, you will see some shell commands. You can update/edit it and rename the file to `pre-commit` and when you do a commit it will run this pre-commit hook before committing.

But by doing so, you are to write your own conditions for the hook to exit. Exiting with anything other than zero aborts the commit, and if there isn't any exit, it will not proceed. 

Then is there an easier way to use git hooks?

Luckily for us, yes there is!

There is to be a tool call husky that simplifies this process.

--- 

## What is husky?

Husky is a tool that allows us to easily deal git hooks and run the scripts we want. 

## How to use husky?

Firstly, we need to install husky package into our project and adjust some configurations and it will work like a charm!

### Step 1: Install husky to a project (automatic way)

```
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2
```

Running this command will setup husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit.

Once the package has finished installing, we should be able to add and modify hooks.

### Step 2: Add new hooks

```
npx husky add .husky/post-checkout 'npm i'
```

For this example, we want it to do a `npm install` after we checkout a branch.

Now, you can test it out to see what happens when u do a checkout.

```
git checkout -b feat/test-new-branch
```

### Step 3: Update/modify existing hooks

To update the hook it is quite simple, all you have to do is to add the commands you want into the shell script.

Navigate and open pre-commit file, `.husky/pre-commit`. 

Now, we can add `npm run lint` or any command that you would want to run. Save the file and it's all done!

You can then run your commit command and we can see that the Husky pre-commit hook kicks in.

Simpler right?

---

## Conclusion

With useful tooling, it can help us, developers, with our workflow and code quality and even make our lives much more simpler.

If you have not tried it out yet, please have a go at it. I personally think that it is very useful, especially the pre-commit hook as it will ensure tests, lints and formats to be consistent and passing before a commit happens.


Thanks for reading!

*NOTE: This article is written for Husky v7.0.0, any later version may have some implementation differences, please visit [Husky documentation](https://typicode.github.io/husky/#/) if needed.*








