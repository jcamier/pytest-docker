### Add all your notebooks to the project directory, then build the image

### Docker image for this Tutorial
docker build --tag pytest-docker .
###### installs Jupyter in directory /usr/local/bin


## To start jupyter notebook
docker run -it -p 3000:8900 pytest-docker

## Go to
http://localhost:3000/

##### To access container using bash
docker run -it -p 3000:8900 pytest-docker /bin/bash

##### To access container using sh
docker run -it -p 3000:8900 pytest-docker /bin/sh
