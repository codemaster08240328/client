# Media Showing Application
This was initialized by `Create React App`. 

> NODE 14.x is recommended.
## Purpose of this application
1. Confirm the usage of web-component built in [here](https://github.com/codemaster08240328/web-components)
2. Confirm the usage of restful API built in [here](https://github.com/codemaster08240328/server)


## How to run this project locally?
1. Clone the `web-component` repository
```bash
$ git clone https://github.com/codemaster08240328/web-components
```
2. Go inside and link.
```bash
$ cd web-components
$ npm i
$ npm run build
$ npm link
```
3. Clone the `server` respository for backend.
```bash
$ git clone https://github.com/codemaster08240328/server
```
4. Run the server.
```bash
$ cd server
$ npm i
$ npm start
```
> Check if the server works correctly by hitting this url: http://localhost:4000/health

5. Finally run the client application
```bash
$ cd client
$ npm i
$ npm link web-components
$ npm start
```
> Check if the app is running correctly. http://localhost:3000

## TroubleShooting
1. If you get an error related to web components?
- Check `link` again.
- Confirm you are using the same node version in `web-components` and `client`.

## What could be done?
1. Local script for managing all installation steps mentioned above.
2. Pipeline for CI/CD.
3. Automation Test.
4. Separate environment management for production/development