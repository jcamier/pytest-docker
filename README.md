# Currently Jupyter not staying in running state after container start

docker build -t pytest-docker .
docker run -d -p 8080:8080 pytest-docker