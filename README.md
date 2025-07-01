# Event Management System

![badge-platform] ![badge-node] ![badge-mit]

[badge-platform]: https://img.shields.io/badge/Platform-Angular%207.3-red
[badge-node]: https://img.shields.io/badge/Node-12.22.12-green
[badge-mit]: https://img.shields.io/badge/license-MIT-blue.svg


This project was generated with 

- [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.
- Node Version: 12.22.12
- For mock API, used JSON server. Run 'npm install -g json-server@0.16.3'

## Third party library
- Angular Material
- Run command npm install '@angular/material@7.3.7'
- Add below line changes in angular.json file
   - "styles": [
         "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
          "src/styles.css"
]
- Import and export Material required module in  /share/custom-material.module.ts file

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `json-server --watch mock-api/db.json --port 3000` to start sever.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Description

Event management is the application of project management to the creation and development of the large scale events. An events refers to social gathering or activity, such as a festival, a ceremony and party. It is used to manage activity related to event.
The objective of this application is to develop a system that effectively manages all the data relatd to the various events that takes place in the organization. The purpose is to maintaina centralized database of all evets related information.
In this application user has to be register to access the application. Once he registered , he can login and access the application. After login, user can see events list. Also user can add events, update events, delete events.

## Login Registration Flow

https://github.com/user-attachments/assets/32fb23b7-4859-45a6-8103-64c6ecc7fd51

## Event List

https://github.com/user-attachments/assets/6d551583-947a-482e-b149-c880b9491179




