#!/bin/bash

NAME="react"                              #Name of the application (*)
DJANGODIR=/home/ubuntu/public_html/prod_dir    # Django project directory (*)
NUM_WORKERS=4                                             # how many worker processes should Gunicorn spawn (*)
DJANGO_SETTINGS_MODULE=react.settings             # which settings file should Django use (*)
DJANGO_WSGI_MODULE=react.wsgi                     # WSGI module name (*)
LOGFILE=/home/ubuntu/public_html/logs/gunicorn.log
echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $DJANGODIR
source /home/ubuntu/ve/bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH


# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec /home/ubuntu/ve/bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  --log-level=debug \
  --bind unix:/home/ubuntu/public_html/prod_dir/reactedu.sock \
  --log-file=$LOGFILE 2>>$LOGFILE
