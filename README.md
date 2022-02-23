# My Notes

[Background Reading: Out of the Tar Pit, Moseley & Marks](./MoseleyMarks06a.pdf)

If you want to change the quality of code than an engineer is writing, first of all, you don't change the way that they code, you change the way that they think. You do that by understanding programming **first principles**. 

The antidote to complexity ==> simplicity

Managing complexity is the most chalenging thing about programming

The greatest contributor to complexity is: **state**. If you fail to manage state properly, you're going to exponentially increase your code volume.

**The Iron triangle of programming:**

- Handling of state
- Code volume
- Flow of control (communication)

**Shared mutable state** is incredibly dangerous

Always ask yourself, **can I test this code?** Can I reuse it? Is it portable? 

**It is impossible to write good tests for bad code**

<center><b>***If you're committed to writing tests, then you must commit to writing testable code***</b></center>

We all know we should write tests, but why don't we? Why don't people write tests? ==> because the barrier to writing tests is too high, because the code is so bad.

### Extract to Method

Functions can become unstable because of **hidden state**. This happens when your function violates the **single responsibility principle**. Solution ==> extract to method.

We want to go from coarse-grained code to fine-grained code ==> Delegate ftw!



# Enteprise Patterns Course

This is the sample project for the Enteprise Patterns course for Frontend Masters.

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node.js and NPM – we recommend using [NVM (Linux/Mac)](https://github.com/creationix/nvm) or [NVM-Windows (Windows)](https://github.com/coreybutler/nvm-windows)
- Install Angular CLI via `npm i -g @angular/cli`

## Web: Getting Started

```
git clone https://github.com/onehungrymind/fem-enterprise-patterns.git
cd fem-enterprise-patterns
yarn
```

You can run the **micro** app via `npm run serve:micro`

The micro application will open to [http://localhost:4400](http://localhost:4400) in your browser.

You can run the **meso** app via `npm run serve:meso`

The meso application will open to [http://localhost:4500](http://localhost:4500) in your browser.

You can run the **macro** app via `npm run serve:all`

The micro application will open to [http://localhost:4200](http://localhost:4200) in your browser.

The `serve:all` command is a convenience methods that runs the `serve:api` and `serve:macro` commands concurrently. You can run each command separately if you need to.

```
"serve:api": "nx run api:serve",
"serve:micro": "nx run micro:serve --port=4400 --open",
"serve:meso": "nx run meso:serve --port=4500 --open",
"serve:macro": "ng serve --open",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:macro\"",
```

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.

## Challenges

If you want to follow along with the challenges, you can check out the `start` branch to see the code without solutions. 

```
git checkout start
```
