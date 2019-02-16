docker build --tag pytest-docker .

docker run -it pytest-docker /bin/bash -c '. py36/bin/activate'

docker run -it -p 3000:8080 pytest-docker /bin/bash