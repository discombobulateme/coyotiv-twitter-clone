# Coyotiv Twitter Clone

This is an ongoing learning purpuse project, part of [Coyotiv School of Software Engineer](https://www.coyotiv.com/school-of-software-engineering/)

We are building the back and frontend of a website using JavaScript stack: Node.js & Vue.js and MongoDB as database.  We are usig Twitter as a model and excuse to understand how does the web applications we use on daily basis are built

It was build together with @dashersw during Live Pair Programming sessions, you can find the recordings and follow along here:
- [Pair programming session: How to build a Twitter clone](https://www.youtube.com/watch?v=K_9t3lAJxw4&t=6297s&ab_channel=Coyotiv)
- [Pair programming session: How to build a Twitter clone - Part 2](https://youtu.be/JB_89ndjQAI)
- [Pair programming session: How to build a Twitter clone - Part 3](https://youtu.be/hoWuk2HOWQo)


# Get Started

Fork this repository 

Navigate to a directory you will like to have it

Clone it :) 

```
$ git clone git@github.com:discombobulateme/coyotiv-twitter-clone.git
```

Open the project folder

```
$ cd coyotiv-twitter-clone
```
Intall all the dependencies... 

# Installation

## Installing dependencies

```
$ docker-compose up --build
```

## Running the stack

```sh
$ docker-compose up
```

## Accessing the stack from a browser

The starter stack works with a load balancer that binds to ports 80 and 443. It currently serves the domain http://stack.localhost. In order to reach the frontend through the stack, you need to edit your `hosts` file (usually under `/etc/hosts` in UNIX environments and `C:\Windows\System32\Drivers\etc\hosts` in Windows) and add the following line:

```
127.0.0.1 stack.localhost
```

Now if you visit http://stack.localhost, you will be greeted with the frontend starter project.

## Changing the local domain

If you wish to use a domain name other than http://stack.localhost, simply set the environment variable `DOMAIN` to any domain you want.

```sh
$ DOMAIN=another-domain.localhost docker-compose up
```

You then also need to update your `hosts` file accordingly.

## Debugging

You can debug the backend while it's running in VSCode. Instead of running `docker-compose up`, run the following command:

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.debug.yml up
```

This starts the backend service in the debug mode, so you can use the built-in debug task `Attach to backend` to debug your backend service.

# Running tests

## Running backend tests

```sh
$ cd backend
$ npm i
$ npm test
```

## Running frontend tests

```sh
$ cd frontend
$ npm i
$ npm test:unit
$ npm test:e2e
```

# Linting

Run `npm install` on the root folder and it will set up a pre-commit hook to lint the staged files. You will also have two lint commands, `npm run lint` and `npm run lint-staged` that you can run on the root folder.

These commands run the individual `lint` and `lint-staged` scripts in both the `frontend` and the `backend` folders, and they will respect individual configurations of these folders.

# Acknowledgments

This project uses [Coyotiv Stack Template Repository](https://github.com/coyotiv/stack) as base


# License

MIT License

Copyright (c) 2020 Coyotiv®

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
