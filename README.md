# TypeScript

A little TypeScript Overview

## General

* Superset of JavaScript developed by Microsoft
* Compiles to plain JavaScript
* Easily integrated into JavaScript projects
* Designed for development of large applications

## What Does TypeScript Offer?

### Static Type Checking
* With TypeScript we can check and assign variable, parameter and function types
    * It is completely optional
    * Helps us find and prevent bugs and stop future issues from happening
    * Makes our code much more readable and descriptive
* TypeScript Types
    * String
    * Number
    * Boolean
    * Array
    * Any
    * Void
    * Never
    * Enum
    * Generics
### Class Based Objects
* Object Oriented Programming in JS!
* No Prototypes
* Encapsulation
* Inheritance
* Modifiers
### Modularity
### ES6 Features
### Syntax closer to Java/C# and other high level languages
### TypeScript Compiler (tsc)
Written in Typescript itself
Compiles .ts files to .js
Installed as an NPM package
Supports ES6 Syntax

## Install

```
yarn add typescript

tsc test.ts --target ES6

tsc *.ts --watch --target ES6
```

## Code

* [Basic Types](01_basicTypes.ts)
* [Interfaces](02_interfaces.ts)
* [Classes](03_classes.js)
* [Functions](04_functions.ts)
* [Generics](05_generics.ts)

## Seems also interesting

* Namespaces and Modules

## Resources

* [TypeScriptLang.org](http://www.typescriptlang.org/)
* [TypeScript Crash Course](https://youtu.be/rAy_3SIqT-E)
* [TypeScirpt Tutorial](https://youtu.be/-PR_XqW9JJU)