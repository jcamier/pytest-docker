## Linux/Mac Users
#### git clone repo

#### Add all your notebooks to the project directory, then build the image

#### Add all python packages to requirements.txt file

docker build --tag pytest-docker .

###### installs Jupyter in directory /usr/local/bin

## To start jupyter notebook
docker run -it -p 3000:8900 pytest-docker
###### first port is local port, second port is docker port

## Go to
http://localhost:3000/

### Windows 7/10 Home users with Docker Toolbox
### Run Docker Toolbox as administrator
### cd C:\Program Files\Docker Toolbox
### git clone https://github.com/jcamier/pytest-docker.git
### Launch docker toolbox
### cd pytest-docker
### dos2unix start_jupyter.sh
### docker build --tag pytest-docker .
### docker run -it -p 3000:8900 pytest-docker
http://192.168.99.100:3000/




##### To access container using bash
docker run -it -p 3000:8900 pytest-docker /bin/bash

##### To access container using sh
docker run -it -p 3000:8900 pytest-docker /bin/sh
