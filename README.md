# FluxJs

## About
We all want to create API endpoints for our projects, but we don't want to write the same code over and over again. FluxJs is a simple API framework that allows you to create API endpoints in seconds. It is based on the MVC pattern and uses the ExpressJs framework. 

## Installation

```bash
git clone https://github.com/flutterde/fluxjs.git
cd fluxjs
npm install
cp .env.example .env
```
after that you need to edit the .env file by adding your credentials.

## Database
Now it's time to link your database with your project, Add your database link to DATABASE_URL in .env file, then run:

```bash
npx prisma db push
```


## Usage

```bash
nodemon app.js
```