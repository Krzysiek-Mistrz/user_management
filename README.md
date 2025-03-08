# user_management
project for creating server architecture using Node.js and MongoDB

# What you need to use
**npm**  
**docker**  
**mongodb**  
**nodejs v16 min**  

# Changing instructions
After pulling this repo consider changing JWT key in .env cause in *userController.js* I added this functionality.
And if you want to use this app in docker you may also want to replace jwt key in *docker-compose.yml*. And for real 
It's pretty much it. I added short description to each file for you to be able to comprehend what's goin on.

# How to run 
```npm src/index.js``` which runs server.js, which runs app.js, which runs ... (you get my point). of course you need to first launch mongodb: ```sudo systemctl start mongodb``` or ```mongod``` depends...   
After you can post some data to check whether everything is ok: ```curl -X POST -H "Content-Type: application/json" -d '{"username": "peterp", "email": "peter@example.com", "password": "password123"}' http://localhost:5000/api/users/register``` or you can also use postman if you like. I don't so I use simpler tools.  
you can of course run this app in docker:  
```docker compose build```   
```docker compose up```
```docker compose down```

# Cheers Mates  
*~Krzychu*
