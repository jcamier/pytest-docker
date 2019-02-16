FROM ubuntu:18.04

MAINTAINER Jack Camier

RUN apt-get update && apt-get install -yq \
                        python3 python3-pip htop nano git wget \
                        libglib2.0-0 autoconf automake \
                        libtool build-essential unzip \
                        libarchive-dev vim python-virtualenv

RUN mkdir /projects
RUN cd /projects
COPY requirements.txt .

RUN virtualenv -p python3 /projects/py36
RUN /bin/bash -c "source /projects/py36/bin/activate && pip install --upgrade pip"
RUN /bin/bash -c "source /projects/py36/bin/activate && pip install -r requirements.txt"
RUN /bin/bash -c "source /projects/py36/bin/activate && pip install jupyter"
RUN cd /projects/py36/bin

RUN echo "c.NotebookApp.allow_origin = '*'"
RUN echo "c.NotebookApp.ip = '0.0.0.0'"
RUN echo "c.NotebookApp.port = 8080"
RUN echo "c.NotebookApp.token = ''"

WORKDIR /projects
EXPOSE 8080
CMD ["py36/bin/jupyter-notebook", "--ip=0.0.0.0"]

#ENV PATH="~/.local/bin/jupyter-notebook":$PATH
#

