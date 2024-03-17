---
title: "Compilers and Interpreters Simplified"
date: 2024-02-28T15:00:00+00:00
tags: ["fundamentals",]
catalogs: ["programming"]
author: "Berkin Tosun"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
disableHLJS: true
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
---

## Introduction
Ever wondered how the computer understands the code you write? 🤔 I had juniors and students who were struggling to understand this process. Terms such as compilers and interpreters can be scary for people who do not have theoretical background in Computer Science and this can make us procrastinate the learning attempts. You might think that it is okay to not understand as long as you can provide executable code but remember, your goal should not be just delivering a code, it should be delivering the best product. Let's demystify them a bit.

These tools transform the code you write into a language that computers can understand, acting as the bridge between human ideas and machine execution. Let's dive into the intriguing world of compilers and interpreters, breaking down complex ideas with simple explanations. This one will be aimed at explaining the concept by simplifying some stuff about the whole process. If this topic intrigues you, then I highly suggest checking the in-depth explanation.

## What are Compilers and Interpreters?
At their core, compilers and interpreters are translators. But instead of translating Albanian to English, they translate programming languages into machine language, the only language a computer truly understands.

### Compiler
Think of a compiler as a book translator, translating an entire book from one language to another before any reader gets a chance to see it. When you read an English book that is translated into your language, you do not see or have any interaction with the translator of the book, right? A compiler is also like that. It takes your entire program, analyzes it, and converts it into machine code, all at once. This machine code is then executed by your computer. You don`t need to have the compiler on your computer after this process.

### Interpreter
An interpreter, on the other hand, is like a live translator/interpreter in a meeting, translating sentences from one language to another in real time. It reads your code line by line, executing it as it goes, without waiting to analyze the entire program first.

## Key Differences

While both serve the same ultimate purpose—making your code understandable to a computer—they go about it in different ways

### Execution Time

Compilers convert all at once before execution, while interpreters do it on the fly.

### Error Detection

Compilers can detect all errors at once before execution. Interpreters stop at the first error they find.

### Performance

Generally, compiled code runs faster than interpreted code because it's directly converted into machine language ahead of time.

Compilers are great for production environments where performance is key. Interpreters are excellent for development and scripting, where flexibility and quick testing are beneficial. Startups tend to use interpreted languages more often as they provide fast development and rapid implementations are the key factor to attract customers and angel investors.


## Real-World Examples

**Javascript** uses mainly interpreter with Just-In-Time compiler for performance optimizations.

**Java** uses both a compiler and an interpreter. The Java compiler converts code into bytecode, which the Java Virtual Machine (JVM) then interprets and executes.

**Python** is primarily interpreted, making it great for rapid development and testing.

**Go/C/C++** These languages are compiled, resulting in fast and efficient executable programs.

Did you realize that I said **_primarily_** when I mentioned Python? Yes, you are right! This means there might be a compiler and an interpreter for a language! This is the beauty of the freedom that our field provides us and I am loving it. Every language has their intended usage and official implementation of it but developers can bring their own solution and make their own compilers or interpreters. This topic is a bit advanced for the intended level of this post so I will just provide keywords for people who are interested in. Feel free to check out Cython, Nuitka for python to dive into this rabbit hole.

## Why Does It Matter?

Every option have their own advantages and disadvantages and as an engineer, you should make a decision that benefits to your case the most. While interpreters are very convenient in terms of <abbr title="Developer Experience">DevEx</abbr>, it also brings downsides such as not being able to detect bugs efficiently and runtime performance as it brings an extra overhead.


## Conclusion
Compilers and interpreters are the core steps laying down in the process of software development, turning human-readable code into instructions that computers can execute. Whether you're just starting in programming or looking to deepen your understanding, appreciating the role of these tools is a step towards becoming a better developer than <abbr title="Before">T-1</abbr>.