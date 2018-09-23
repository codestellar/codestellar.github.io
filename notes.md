---
title: Codestellar Notebook
---

# Codestellar Notebook

## Why I created this notebook?

* I needed a super simple solution to create notes
* I wanted that whatever can be useful to other devs, I should share that
* And thus I wanted to pubish the notes as a Single Page Website
* A simple git push should publish my website. Github Pages is a great way but I wanted a custom template as well.
* Wordpress, Blogger and N number of soultions are there but this attracted me.

## Getting Started
Want to own this notebook? Here are the steps
* Get your own repository [link](https://pages.github.com/)
* Download my repository
* Copy code in <yourrepo>.github.io local repo
* Update notes.md
* Download [Pandoc](https://pandoc.org/installing.html)
* Run the command in readme.md in commandline
* Commit and Push your changes
* Yay! you own it.
* All you need to do is to update notes.md next time.

## About Me

![](images/me.jpg)
1. Principal Consultant at Technossus
2. 7+ years of experience in Web Application Development
3. MCSD App Builder
4. Open Teacher
5. Learner.

# Angular Notes

## Angular NGRX

* What is **state**?
What the user did? What the user sees? Some of the state we might want to save to make it persistent.

* What is the problem? Why it is so hard?
Always tracking where a change happened, where the state of the application got changed.

* How we are informing?
Event Emitters, Subjects to announce that 'this' has been changed. Well, we are doing it right.

* As your app grows, even this service driven subjects may be hard to maintain.

* So, we want to have 1 central place to maintain application state. Single Source of Truth. 

* How do we change the state? REDUX PATTERN
** Actions - Dispatch action and sent to. e.g. SAVE
** Reducer - Take the payload as input and override the state i.e. immutable.
** Store - Which is containing the state.

So, we are achieving this in Angular using ngrx.



