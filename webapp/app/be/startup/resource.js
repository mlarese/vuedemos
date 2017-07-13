import Vue from 'vue'

let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');
let mock = Vue.$ioc.resolve('mock');
let mockActive = Vue.$ioc.resolve('const/mock_active');
let Logger = Vue.$ioc.resolve('Logger');

export default {
    getConfig(){    return ajax.get(api.API_BE_USER_STARTUP);   }
};

Logger.info("[be/startup/resource] isMockActive = "+mockActive);

if(mockActive){
    mock.onGet(api.API_BE_USER_STARTUP).reply(200, {
        label:{
            'waiting payment-pl':'E\' in attesa di evasione::: Sono in attesa di evasione',
            'waiting-send-pl':'E\' in attesa di invio ::: Sono in attesa di invio',
            'subscribe-pl':'E\' iscritto al programma fedeltà ::: Sono iscritti al programma fedeltà',
            'user-pl':'Utente ::: Utenti',
            'gift-pl':'Premio ::: Premi',
            'adult-pl':'{count} Adulto ::: {count} Adulti',
            'child-pl':'{count} Bambino ::: {count} Bambini',
            'filter users':'Filtra gli utenti iscritti al fidelity program',
            'for this user':'Per questo utente',
            'found users':'{count} Utente trovato ::: {count} Utenti trovati',
            'cashback earned':'Cashback acc.',
            'cashback retired':'Cashback ritir.',

            'cashback total used':'Totale Cashback ritirato',
            'cashback total earned':'Totale Cashback maturato',
            'cashback total waiting':'Totale Cashback in attesa di accredito',
            'cashback total':'Totale Cashback ritirabile',

            'fidelity total used':'Totale Punti già utilizzati',
            'fidelity total earned':'Totale Punti maturato',
            'fidelity total waiting':'Totale Punti in attesa di accredito',
            'fidelity total':'Saldo Punti',

            'cashback':'Cashback',
            'name or user code':'Nome o codice utente',
            'total awards':'Premi ritirati',
            'last booking made':'Ultima prenotazione il',
            'reservation made':'{count} prenotazione effettuata ::: {count} prenotazioni effettuate',
            'count-user-text':'da {from} a {to} di {count} utenti|{count} utenti|1 utente',
            'user profile':'Vedi scheda utente completa',
            'total points':'Saldo punti',
            'users':'Utenti',
            'portal':'Portale',
            'order-by':'Ordina',
            'search':'Cerca',
            'user since':'Iscritto dal',
            'user code':'Codice utente',
            'you have request cashback':'Hai una richiesta di cashback di',
            'you have request to send':'Hai una richiesta per l\'invio di',
            'user since':'Iscritto dal',
            'default':'Default',
            'user-code':'Cod. utente',
            'user-name-a-z':'User name a-z',
            'user-name-z-a':'User name z-a',
            'Fidelity program manage':'Gestione e dati degli iscritti al programma fedeltà',
            'No matching names':'Nessun utente trovato',

            "hello user":"Ciao %s!","your profile":"Il tuo profilo","firstname":"Nome","lastname":"Cognome","gender":"Sesso","m":"Maschio","f":"Femmina",
            "date_of_birth":"Data di nascita","traveller_type":"Viaggi con","single traveller":"Viaggiatore singolo","young couple":"Coppia giovane","mature couple":"Coppia matura",
            "family with young children":"Famiglia con figli piccoli","family with older children":"Famiglia con figli grandi",
            "with friends":"Con amici",
            "email address":"Indirizzo e-mail",
            "telephone":"Telefono","city":"Città","address":"Indirizzo","zipcode":"CAP",
            "user code":"Codice utente","Value is required and can\'t be empty":"Il valore è richiesto e non può essere vuoto",
            "The fullname field cannot be empty":"Il campo cognome non può essere vuoto","The surname field cannot be empty":"Il campo nome non può essere vuoto",
            "The input does not appear a valid gender value":"Il valore del gender non è valido","The input does not appear to be a valid date":"La data non è valida, controlla il formato: d-m-Y",
            "The input does not appear a valid traveller value":"Il valore del tipo di viaggiatore non è valido","The telephone field cannot be empty":"Il campo telefono non può essere vuoto",
            "The city field cannot be empty":"Il campo città non puà essere vuoto","The address field cannot be empty":"Il campo indirizzo non può essere vuoto","your reservations":"Le tue prenotazioni",
            "your messages":"Le tue conversazioni","points balance":"Saldo punti","require gifts":"Richiedi premi","require cashback":"Richiedi cashback","yourreservations":"Le tue prenotazioni","made":"Effettuata il",
            "reservationNumber":"N° prenotazione","from":"dal","to":"al","for":"per",
            "adult":"adulto","adults":"adulti",
            "child":"bambino",
            "children":"bambini",
            "total":"totale",
            "BB":"Camera e colazione",
            "OB":"Solo Camera",
            "FB":"Trattamento completo",
            "HB":"Mezza pensione",
            "earnedCashback":"Cashback maturati","cashbackWillEarn":"Cashback che maturerai",
            "pointsWillEarn":"Punti che maturerai","manageReservations":"Gestisci Prenotazione","details":"Dettagli","cancel management":"annulla gestione","find":"cerca","new date range is available":"Il periodo indicato è disponibile",
            "new date range is not available":"Il periodo indicato non è disponibile","confirm the new date range":"conferma le nuove date","modify reservation date range":"Modifica le date del soggiorno","check new reservation date range":"verifica la disponibilità per le nuove date",
            "new reservation date range disclaimer":"Modificando le date il costo totale del soggiorno potrebbe subire delle variazioni. Il numero di ospiti e la tipologia di alloggio selezionato non può essere modificato se non previa cancellazione e nuovo processo di prenotazione",
            "cancel reservation":"Cancella prenotazione","cancel this reservation":"cancella questa prenotazione",
            "cancel reservation disclaimer":"Richiedendo la cancellazione della prenotazione verrà inviata una richiesta all\'operatore dedicato che confermerà l\'esito dell\'operazione ove le politiche di cancellazione lo consentano",
            "archivedReservations":"Ecco lo storico delle tue prenotazioni passate","roomType":"Tipologia camera","your points balance":"Il tuo saldo punti","total earned points":"Totale punti maturati","total used points":"Totale punti utilizzati",
            "total balance points":"Il tuo saldo punti aggiornato ammonta a","total credit points":"Totale punti in attesa di accredito *",
            "credit points disclaimer":"I punti in attesa di accredito si riferiscono a soggiorni prenotati ma non ancora trascorsi. Al ritorno dai soggiorni i punti accumulati con tali prenotazioni verranno accreditati.<br>In caso di cancellazione dei soggiorni non verrà accreditato nessun punto.<br>In caso di modifica delle date o del numero di ospiti il numero totale di punti potrebbe subire delle variazioni in base al costo totale del soggiorno.","your reservation details":"Ecco il dettaglio delle operazioni","reservation":"Prenotazione","registration":"Registrazione","prize request":"Richiesta premio","booking on":"Effettuata il","waiting for credit":"In attesa di accredito","you cannot receive this prize":"Non puoi ricevere questo premio perchè non hai ancora raggiunto la soglia necessaria","confirm reservation period change":"Confermi la modifica del periodo della prenotazione?","we are sorry reservation period not available":"Siamo spiacenti, non è possibile effettuare la modifica del periodo di prenotazione","we are sorry system error":"Siamo spiacenti ma non è possibile al momento eseguire l\'operazione","reservation modified":"Prenotazione modificata","ok":"Ok","new period":"Nuovo periodo","original period":"Periodo originale"

        },
        profile:{
            portalName:'Offerte settimana bianca',
            portalType:'portal',
            avatar:'//reservation.cmsone.it/common/images/sb/settimana-bianca-avatar.jpg'
        }
    });
}