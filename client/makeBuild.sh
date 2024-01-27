#!/bin/bash

sudo npm run build
sudo cp -R /home/RANKERS/client/build /var/www
sudo service nginx reload
echo "build and copy and Nginx reload done!"
