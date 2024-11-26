# librairie FLASK
## executer un script.sh



# librairie CUPS
## imprimer depuis linux

## installation python
### installer environnemnt virtuel python 
creation espace de travail
```bash
su nodeuser    (temporairement)
mkdir /home/nodeuser/Python
cd /home/nodeuser/Python
```
soit sur raspbian      creation environement virtuel

soit sur debian        installation de pyhton3-xxxxx
### creation environement virtuel              rasbian
```bash
python -m venv env
```
utilisation : 
```bash
source /home/nodeuser/Python/env/bin/activate

pip list
pip install .....

deactivate
```
### installation de pyhton3-xxxxx                debian
```bash
sudo apt install python3-flask-cors
```
