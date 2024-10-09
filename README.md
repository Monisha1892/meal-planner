# meal-planner

## Required

[Install homebrew](https://brew.sh/) (Mac OS)

[Install homebrew](https://blog.devops.dev/how-to-install-homebrew-on-windows-61fe1c2b173) (Windows)

Homebrew is a free and open-source software package management system that simplifies the installation of software on operating systems like macOS, Linux, and Windows.


[Node](https://nodejs.org/en/download/current) version 18-20

Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.

[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

Yarn is one of the main JavaScript package managers for the Node.js JavaScript runtime environment. An alternative to the npm package manager, Yarn was created as a collaboration of Facebook, Exponent, Google, and Tilde to solve consistency, security, and performance problems with large codebase.

[Install MySQL](https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html) (Mac OS)

[Install MySQL](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html) (Windows)

MySQL is a relational database management system. It is free and open-source.

[MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

MySQL Workbench is a visual tool to manage and access the local MySQL server. It allows you to see your data and execute queries in given text areas.


## Useful links and tutorials

#### CLI
[What is a CLI?](https://www.w3schools.com/whatis/whatis_cli.asp)

[How to use the Terminal command line in macOS](https://macpaw.com/how-to/use-terminal-on-mac)

[Command Line Commands – CLI Tutorial (Windows)](https://www.freecodecamp.org/news/command-line-commands-cli-tutorial/)

#### git and GitHub
[Git Tutorial](https://www.w3schools.com/git/)

[GitHub Basics Made Easy: A Fast Beginner's Tutorial! (video)](https://www.youtube.com/watch?v=Oaj3RBIoGFc)

[Git and GitHub Tutorial for Beginners (video)](https://www.youtube.com/watch?v=tRZGeaHPoaw)

#### React and React Native
[React Native tutorial](https://reactnative.dev/docs/tutorial)

[Core Components and Native Components](https://reactnative.dev/docs/intro-react-native-components)

#### Tailwind (Nativewind)
[Nativewind overview](https://www.nativewind.dev/overview/)

[React Native with Tailwind CSS in 2023 (video tutorial)](https://www.youtube.com/watch?v=UHMyREDtp8s)

#### Express
[Express documentation](https://expressjs.com/en/starter/hello-world.html)

[Database integration](https://expressjs.com/en/guide/database-integration.html#mysql)

#### Docker
[Docker downloads](https://docker.com/)

[Docker documentation](https://docs.docker.com/)

#### MySQL
[Install MySQL Server on Mac](https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html)

[Install MySQL Server on Windows](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html)

[Download MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

[Data types](https://dev.mysql.com/doc/refman/8.4/en/data-types.html)

#### AWS S3
[What is S3?](https://cloudian.com/blog/s3-storage-behind-the-scenes/)

[AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

## Getting started

#### Mobile Frontend
```
cd mobile-app
yarn run install
yarn run start
```

#### API
```
cd api
yarn run install
node app.js
```

#### Database
1. Start MySQL server and open Workbench.
2. Copy and execute the files in `./database` in the following order:
    1. `meal_planner_database.sql`
    2. `populate_database.sql`
    3. `ingredients.sql`
    4. `ingredients_to_recipes.sql`
