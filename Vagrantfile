Vagrant.configure(2) do |config|
  #konfigurasi box untuk sistem operasi ubuntu trusty 64 bit
  config.vm.box = "ubuntu/trusty64"

  config.vm.provider "virtualbox" do |vb|

	 # konfigurasi virtual box dengan ram 1 GB
     vb.memory = "1024"
  end

  #konfigurasi provisioning
  config.vm.provision "shell", path: "install-vagrant.sh"

  #konfigurasi network
  #port forwarding
  config.vm.network "forwarded_port", guest: 80, host: 3000
end
