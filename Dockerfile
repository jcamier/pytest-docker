FROM python:3.6.8-jessie

MAINTAINER Jack Camier

ENV LANG=C.UTF-8

COPY requirements.txt .

RUN apt-get -y update && \
    apt-get -y upgrade && \
    apt-get -y install wget bzip2 vim

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install jupyter

# Creating config file in /root/.jupyter and add custom settings
RUN jupyter notebook --generate-config

RUN echo "c.NotebookApp.allow_root = True" >> /root/.jupyter/jupyter_notebook_config.py
RUN echo "c.NotebookApp.port = 8900" >> /root/.jupyter/jupyter_notebook_config.py
RUN echo "c.NotebookApp.token = ''" >> /root/.jupyter/jupyter_notebook_config.py
RUN echo "c.NotebookApp.ip = '0.0.0.0'" >> /root/.jupyter/jupyter_notebook_config.py

USER root

RUN mkdir projects

#COPY projects/hello_world.ipynb /projects
ADD projects /projects
COPY start_jupyter.sh /projects
WORKDIR /projects

RUN chmod +x start_jupyter.sh

EXPOSE 8900

CMD ["./start_jupyter.sh"]