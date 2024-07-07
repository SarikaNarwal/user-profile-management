#How to start user-profile-management application on your local system.

1. Firstly clone git repository on your local system using the below command. 

	git clone https://github.com/SarikaNarwal/user-profile-management.git

   Now you can see two folders in this repository user-profile-backend for backend and the user-profile-frontend for the frontend.

2. Backend setup:  

   Backend (Django)
   1.) Requirements
       Make sure you have the following installed on your machine:

       I) Python 3.8+
       II) Django 4.2+
       III) Django REST framework
       IV) django-cors-headers
       V) SQLite (default database)

       You can install dependences using pip command ( pip3 install django djangorestframework django-cors-headers )

3. Now start backend for this application 
 
     I) cd user-profile-backend

     II) python3 manage.py runserver & #It will start backend application in background.

4. Frontend setup:
    
   Frontend (React)
   1.) Requirements
       Ensure you have the following installed on your machine:

       I) Node.js 14+
       II) npm 

       For npm and nodejs installation follow below steps  
   
       I) apt install npm

       II) curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

       III) export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

       IV) export NODE_OPTIONS=--openssl-legacy-provider

       V) source ~/.bashrc  # or source ~/.zshrc, or source ~/.profile

       VI) nvm install --lts

       VII) nvm use --lts

 
5.  Now start frontend for this application

       I) cd user-profile-frontend

       II) npm install

       III) npm start 

6. Now your both backend and frontend started. You can access application using http://localhost:3000/ domain.

   
NOTE:- Installation steps are for Ubuntu OS.
