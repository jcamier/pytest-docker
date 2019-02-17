FROM ubuntu:18.04

LABEL maintainer="Jack Camier"

RUN apt-get update && apt-get install -yq python3 python3-pip

ADD requirements.txt .

RUN pip3 install -r requirements.txt

EXPOSE 8080
ADD start-script.sh .

# RUN "jupyter notebook --ip=0.0.0.0 --port 8080 --allow-root --no-browser --NotebookApp.token='' --NotebookApp.password='' &"

CMD start-script.sh