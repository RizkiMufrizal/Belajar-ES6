#Author : Rizki Mufrizal (mufrizalrizki@gmail.com)
#!/bin/sh

echo "mulai Provisioning"

echo "software source dan repository"
cp /vagrant/config/sources.list /etc/apt/sources.list
cp /vagrant/config/mongodb-org-3.2.list /etc/apt/sources.list.d/mongodb-org-3.2.list
cp /vagrant/config/environment /etc/environment

apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

add-apt-repository -y ppa:git-core/ppa
add-apt-repository -y ppa:nginx/stable

apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y

apt-get -y install build-essential libssl-dev curl

echo "instalasi git"
apt-get install -y git

echo "instalasi nginx"
apt-get install -y nginx

echo "instalasi mongodb"
apt-get install -y mongodb-org

echo "curl node js setup"
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -

echo "instalasi node js"
apt-get install -y nodejs

echo "instalasi coffeescript"
npm install -g coffee-script

echo "instalasi nodemon"
npm install -g nodemon

echo "instalasi gulp"
npm install -g gulp

echo "clone project"
git clone https://github.com/RizkiMufrizal/Belajar-ES6.git

echo "akses folder project"
cd Belajar-ES6

echo "akses folder client"
cd Client

echo "instalasi dependency"
npm install

echo "build client dengan gulp"
gulp build

echo "keluar dari folder client"
cd ..

echo "akses folder server"
cd Server

echo "instalasi dependency"
npm install

echo "jalankan Server"
nodemon app.coffee
