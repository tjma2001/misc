sudo apt-get update
sudo apt-get upgrade
sudo apt-get install pulseaudio-module-bluetooth bluez-tools

sudo gpasswd -a $USER pulse
sudo gpasswd -a $USER lp
sudo gpasswd -a pulse lp
sudo gpasswd -a $USER audio
sudo gpasswd -a pulse audio

sudo sh -c "echo 'extra-arguments = --exit-idle-time=-1 --log-target=syslog' >> /etc/pulse/client.conf"
sudo hciconfig hci0 up
sudo hciconfig hci0 class 0x200414
# This class sets it up for speaker
sudo reboot