# Event Management System

![badge-platform] ![badge-node] ![badge-mit]

[badge-platform]: https://img.shields.io/badge/Platform-Angular%207.3-red
[badge-node]: https://img.shields.io/badge/Node-12.22.12-green
[badge-mit]: https://img.shields.io/badge/license-MIT-blue.svg

This project was generated with 

- [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.
- Node Version: 12.22.12
- For mock API, used JSON server. Run 'npm install -g json-server@0.16.3' to install JSON Server. 

## Third party library
- Angular Material
- Run command npm install '@angular/material@7.3.7'
- Add below line changes in angular.json file
   - "styles": [
         "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
          "src/styles.css"
]
- Import and export Material required module in  /share/custom-material.module.ts file

## Stack

- Angular
- Single page application (SPA)
- Angular Material
- Reactive Form
- Auth Guard
- RxJS 
- Pipe
- Services
- Dependency Injection
- Routing
- HTML
- CSS
- JSON server

## Run the Project

1. Install node module
      Run `npm install` to install the dependancies.

2. Start the development server
 
     Run `json-server --watch mock-api/db.json --port 3000` to start sever.

3. Run the application

    Run `ng serve` for a application. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

Event management application is to manage any events. An events refers to social gathering or activity, such as a festival, a ceremony or party. It is used to manage activity related to event.
The objective of this application is to develop a system that effectively manages all the data related to the various events.

This app covers following functionality:

      - Registration
      - Login/ Logout
      - Add Event
      - Modify Event
      - View list of Event
      - Delete Event

## Login Registration Flow

https://github.com/user-attachments/assets/32fb23b7-4859-45a6-8103-64c6ecc7fd51

## Event List

https://github.com/user-attachments/assets/6d551583-947a-482e-b149-c880b9491179




