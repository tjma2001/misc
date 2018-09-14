sudo apt-get update
sudo apt-get upgrade
sudo apt-get install pulseaudio-module-bluetooth bluez-tools

sudo gpasswd -a xbian pulse
sudo gpasswd -a xbian lp
sudo gpasswd -a pulse lp
sudo gpasswd -a xbian audio
sudo gpasswd -a pulse audio

sudo sh -c "echo 'extra-arguments = --exit-idle-time=-1 --log-target=syslog' >> /etc/pulse/client.conf"
sudo hciconfig hci0 up
sudo hciconfig hci0 class 0x200414
# This class sets it up for speaker
sudo reboot