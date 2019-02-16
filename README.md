## Docker image for this Tutorial
docker build --tag pytest-docker .


docker run -it -p 3000:8080 pytest-docker /bin/bash