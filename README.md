**Udacity image processing API project**

## Overview

The first project of the advanced web application Nondegree
on Udacity web platform. Image name with the desired width and height
will be resized.

Using dependencies and devdependencies to help by processing images
express: to create a server
typescript: to enable typing TS
sharp: to process images
dotenv: to call the process/env
nodemon: to run the server and watch any changes
jasmine: to test code
ESLint, Prettier: to format code according to our rule

## How to successfully run it

1.You should install the dependencies and devdependencies
by running the following script: 
`npm install`

2.Run the following command to convert the TS code into JavaScript
`npm run build`

3.To run the server `npm run serve`

4.Visit the following address
[basic url](http://localhost:3000/api/images?filename=&width=&height=)

\*After the equal sign '=', you can type the proper values you want.

## Note:

a valid image name, 100px <= width, height <= 1200px must be given

5.To test some cases run the following script
`npm run test`

# assets/images are where the original images

# output/imgs folder is where the rezised images will be saved
