# This is a Pytest series using Jupyter Notebooks. The .ipynb's are found in the projects folder. 

## Or, you can git clone this project and run them in a docker container. Instructions below:

## Linux/Mac Users
#### git clone repo

#### Add all your notebooks to the project directory, then build the image

#### Add all python packages to requirements.txt file

docker build --tag pytest-docker .

###### installs Jupyter in directory /usr/local/bin

## To start jupyter notebook
docker run -it -p 3000:8900 pytest-docker:latest
###### first port is local port, second port is docker port

## Go to
http://localhost:3000/

### Windows 7/10 Home users with Docker Toolbox
### Run Docker Toolbox as administrator
### cd C:\Program Files\Docker Toolbox
### git clone https://github.com/jcamier/pytest-docker.git
### Go to your virtual box settings
### Network/Adapter 1 choose Attached to NAT
### Under advanced click Port Forwarding
### Add a Rule Host Port 3000 Guest Port 8900
### Launch docker toolbox
### cd pytest-docker
### dos2unix start_jupyter.sh
### docker build --tag pytest-docker .
### docker run -it -p 3000:8900 pytest-docker
http://192.168.99.100:3000/ 


##### To access container using bash
docker run -it -p 3000:8900 pytest-docker:latest /bin/bash

##### To access container using sh
docker run -it -p 3000:8900 pytest-docker:latest /bin/sh
