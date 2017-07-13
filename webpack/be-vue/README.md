
# START dell'applicazione

Assicurarsi che nella macchina in cui stiamo lavorando siano presenti NODE ( Versione >=4 ) e NPM ( Versione >=3 ).
^^
Installare tutte le dependencies e le devDependencies con il seguente comando:
```sh
$ npm install
```
#### Development 
Lanciare il comdando 
```sh
$ npm run dev
```
una volta lanciato il comando collegarsi all'url 

Per inizializzare l'ambiente di produzione 
```sh
http://localhost:4000/#/
```


### Produzione
Lanciare il comdando 
```sh
$ npm run build
```
Una volta terminato il processo di build creerà all'interno della cartella `dist` i seguenti file:

* `client.XXXX.js`
* `vendor.XXXX.js`
* `style.XXXX.css`

(Il valore XXXX sta ad indicare un identificativo randomico generato da webpack durante il deploy)

Copiare i file soprastanti rispettivamente:

* nella cartella `js`
* nella cartella `css`

contenute nella cartella: `/shcore/public/AbsFrequentGuest`

Ultima operazione:

* Aprire il file: `/shcore/module/AbsFrequentGuest/view/layout/layout.phtml`
* Aggiornare i nome dei file JS s CSS inclusi nel template



