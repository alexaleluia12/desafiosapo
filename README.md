# Primeiro passo
```sh
git clone https://github.com/alexaleluia12/desafiosapo.git
cd desafiosapo
```
# Start front
```sh
cd front
npm install
npm start
# abra o navegador em localhost:3000
```
# Start back-end
```sh
# preparar ambiente
cd back
virtualenv env
source env/bin/activate
pip install -r requirements.txt
# criar base de dados SQLite
python setupDB.py
# iniciar aplicação http - Flask
python app.py
```
