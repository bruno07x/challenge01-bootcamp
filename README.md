![go-stack_1050x240.png](:/3f59ab7da10d424e98e4101cd7bb9a51)
<h1 align="center">Challenge01 - API Rest</h1>
---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This API Rest was developed to practice a simple CRUD using [Express](https://expressjs.com) as a framework and it was created in order to practice its concept. All data is stored in an array.


* * *

## 🏁 Getting Started <a name = "getting_started"></a>

### Install

> `yarn install`

### Init API

> `yarn start`

### Prerequisites

[NodeJS]() - Version 12.13.1

[yarn](https://legacy.yarnpkg.com/pt-BR/docs/install) - Version 1.21.1 or [npm](https://www.npmjs.com/get-npm) - Version 6.12.1

* * *

## 🎈 Usage <a name="usage"></a>

### Routes:

**GET**

> http://localhost:3000/projects

Read the projects, return json.

```
[
  {
    "id": "1",
    "title": "Title Project",
    "task": []
  }
]
```

**POST**

> http://localhost:3000/projects

Create a project. Need to pass a json format content an `id` and `title`.
```
{
    "id" : "1",
    "title" : "Project title"
}

```
> http://localhost:3000/projects/1/tasks

Create a tasks for the project. Need to pass a json format content `title`.

```
{
    "title" : "task name"
}
```

**PUT**
> `http://localhost:3000/projects/1`

Update a project. Need to pass a json format content a new `title`.

```
{
   "title" : "new title"
}
```
**DELETE**

> `http://localhost:3000/projects/1`

Delete a project equal the id.

* * *

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@bruno07x](https://github.com/bruno07x) - Idea & Initial work