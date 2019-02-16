FROM ubuntu:18.04

MAINTAINER Jack Camier

RUN apt-get update && apt-get install -yq \
                        python3 python3-pip htop nano git wget \
                        libglib2.0-0 autoconf automake \
                        libtool build-essential unzip \
                        libarchive-dev vim python-virtualenv


COPY requirements.txt .


RUN virtualenv -p python3 py36
RUN /bin/bash -c "source py36/bin/activate && pip install --upgrade pip"
RUN /bin/bash -c "source py36/bin/activate && pip install -r requirements.txt"
RUN /bin/bash -c "source py36/bin/activate && pip install jupyter"
RUN cd py36/bin

RUN echo "c.NotebookApp.allow_origin = '*'"
RUN echo "c.NotebookApp.ip = '0.0.0.0'"
RUN echo "c.NotebookApp.port = 8080"
RUN echo "c.NotebookApp.token = ''"


EXPOSE 8080
CMD ["py36/bin/jupyter-notebook", "--ip=0.0.0.0"]

#ENV PATH="~/.local/bin/jupyter-notebook":$PATH
#
## Install Jupyter.
#RUN jupyter nbextension enable --py --sys-prefix widgetsnbextension
#RUN jupyter contrib nbextension install
#RUN jupyter nbextension enable codefolding/main
#RUN echo "c.NotebookApp.ip = '*'" >> /root/.jupyter/jupyter_notebook_config.py
#RUN echo "c.NotebookApp.port = 8080" >> /root/.jupyter/jupyter_notebook_config.py
#RUN echo "c.NotebookApp.token = ''" >> /root/.jupyter/jupyter_notebook_config.py
#RUN echo "jupyter notebook --no-browser --allow-root" >> /usr/local/bin/run_notebook && chmod +x /usr/local/bin/run_notebook
#
#WORKDIR /root
#EXPOSE 8080
#
