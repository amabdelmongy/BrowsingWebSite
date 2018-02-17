
Coding Challenge
================
  
### Problem Description

Build a website about beer :) You should be able to search, sort and filter and show detail information.

You are free in choosing languages and frameworks and how much you want to use from the following API

http://www.brewerydb.com/developers/docs (API key: ee8a1a84bc76fd7d7ae6dd0dc45583e3)
    
### Solution Description

I'm Start Front end web site untill i have answer for all my question 
	- The application dependce on modules to enable lazy loading :-
		- first module contains Dashboard , Search   and side menu 
    - Using HttpInterceptor 
	    - to insert Authorization Bearer at any Http request header  
	    - Redirect to login page if the web api server throw 401 excepation 
   - live demo 
 

### Technology   
 -  using Angular 5.1 , Angular cli , Type Script , Bootstrap , HTML, CSS and primeng 
  

###  How to run the code

Front End Angular 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0 and angular 5.x.

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) already. If not, please install.
5. Run in terminal: ```npm install```
6. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
7. Build to productaion: ng build -prod 
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Development server
In order to avoid encountering a CORS browser error run the application with the command:

ng serve --proxy proxy.config.json

This provides a proxy path to the beer API. More information about that here. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


### ToDo  
- move all URLs to webconfig.json file to enable change all urls in production mode
