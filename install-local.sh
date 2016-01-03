#Author : Rizki Mufrizal (mufrizalrizki@gmail.com)
#!/bin/sh

echo "instalasi coffeescript"
npm install -g coffee-script

echo "instalasi gulp"
npm install -g gulp

echo "instalasi Nodemon"
npm install -g nodemon

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
