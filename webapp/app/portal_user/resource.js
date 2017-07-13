import Vue from 'vue';
import _filter from 'lodash/filter'
import _toLower from 'lodash/toLower'
import _clone from 'lodash/clone'
import _orderBy from 'lodash/orderBy'
import _get from 'lodash/get'

let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');
let mock = Vue.$ioc.resolve('mock');
let mockActive = Vue.$ioc.resolve('const/mock_active');


export default {
    loadUsers( {page,perPage,order,search} ){
        let id = _get(search,'id',null);

        let params = {page,perPage,order};

        if(id) {
            return ajax.get(api.API_BE_USER_SEARCH + '/' + id, {params});
        }else{
            params.search = search;
            return ajax.get(api.API_BE_USER_SEARCH,{params} );
        }
    },
    loadUsersOptions( {q} ){
        let params = {q};
        return ajax.get(api.API_BE_USER_OPTIONS,{params} );
    }
};


/**
 *
 [{
   'repeat(5, 100)': {
   id: '{{objectId()}}',
   age: '{{integer(20, 40)}}',
   fullname: '{{firstName()}}',
   surname: '{{surname()}}',
   gender:  '{{random("f", "m" )}}',
   traveller_type: '{{random("single traveller" ,"young couple" ,"mature couple" ,"family with young children" ,"family with older children" ,"with friends"  )}}',
   email: function (tags) {
       return (this.fullname + '.' + this.surname + '@gmail.com') ;
     },
   telephone: '+1 {{phone()}}',
   city:'{{city()}}',
   zipcode:' {{integer(100, 10000)}}',
   address: '{{street()}}',
   date_of_birth:'{{moment(this.date(new Date(1950, 0, 1), new Date(1997, 0, 1))).format("DD-MM-YYYY")}}',
   image_path:null,
   image_title:null,
   language:'{{random("it","de","en")}}',
   code:'OSH{{integer(1000, 9999)}}',
   cashback:{earned:'{{integer(0, 999)}}',retired:'{{integer(0, 999)}}'   },fidelity:{earned:'{{integer(0, 999)}}'    ,retired:'{{integer(0, 999)}}' },
   reservationCount:'{{integer(0, 20)}}',
   userSince:'{{moment(this.date(new Date(2016, 10, 1), new Date( ))).format("DD-MM-YYYY")}}'  ,
   lastBookingDate:'{{moment(this.date(new Date(2016, 0, 1), new Date( ))).format("DD-MM-YYYY")}}'
   }
 }]
 */

/**
 [
 {
   'repeat(5, 10)': {
     id: '{{integer(1, 140)}}',
     note:'{{lorem(1, "paragraphs")}}',
     prize:{
       id: '{{integer(1, 9999)}}',
       additionalDescription:'{{lorem(1, "paragraphs")}}',
       description:'{{lorem(10, "words")}}',
       image:'http://placehold.it/64x64',
       imageDescription:'{{lorem(1, "paragraphs")}}',
       imageTitle:'{{lorem(10, "words")}}',
       name:'{{lorem(5, "words")}}',
       requiredPoints:'{{integer(50, 9999)}}'
     },
     shippingdata:{
       fullname:'{{firstName()}}',
       surname:'{{surname()}}',
       address:'{{integer(1, 999)}} {{street()}}',
       city:'{{city()}}',
       zipcode:'{{integer(10000, 99999)}}',
       country:'{{country()}}',
       telephone: '+39 {{phone()}}'
     },
     status:'{{random("w", "s")}}'
   }
 }
 ]
 */


if(mockActive){
    const usersOption =[
         { userName:'Bernard Kirsten',userCode:'OSH2599'}
        ,{ userName:'Durham Christian',userCode:'OSH8719'}
        ,{ userName:'Shepherd Luz',userCode:'OSH3168'}
        ,{ userName:'Lucas Roberto',userCode:'OSH2489'}
        ,{ userName:'surname Fry',userCode:'OSH2291'}

    ];
    const users = [
        {
            "lastBookingDate": "09-05-2017",
            "userSince":"05-11-2016",
            "reservationCount": 3,
            "fidelity": {
                "retired": 776,
                "earned": 135
            },
            "cashback": {
                "retired": 597,
                "earned": 131
            },
            "code": "OSH2599",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "27-06-1982",
            "address": "Hillel Place",
            "zipcode": " 2890",
            "city": "Murillo",
            "telephone": "+1 (908) 505-2670",
            "email": "Kirsten.Bernard@gmail.com",
            "traveller_type": "family with young children",
            "gender": "m",
            "surname": "Bernard",
            "fullname": "Kirsten",
            "age": 20,
            "id": "5936a7824c86667d8a01884e"
        },
        {
            "lastBookingDate": "26-03-2017",
            "userSince": "28-04-2017",
            "reservationCount": 19,
            "fidelity": {
                "retired": 390,
                "earned": 344
            },
            "cashback": {
                "retired": 551,
                "earned": 746
            },
            "code": "OSH8719",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "18-11-1970",
            "address": "Pine Street",
            "zipcode": " 9047",
            "city": "Loyalhanna",
            "telephone": "+1 (955) 423-2729",
            "email": "Durham.Christian@gmail.com",
            "traveller_type": "young couple",
            "gender": "f",
            "surname": "Christian",
            "fullname": "Durham",
            "age": 31,
            "id": "5936a782dc5af630bbe10811"
        },
        {
            "lastBookingDate": "19-03-2016",
            "userSince": "09-12-2016",
            "reservationCount": 0,
            "fidelity": {
                "retired": 22,
                "earned": 423
            },
            "cashback": {
                "retired": 543,
                "earned": 680
            },
            "code": "OSH3168",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "24-03-1981",
            "address": "Arlington Avenue",
            "zipcode": " 7026",
            "city": "Clarence",
            "telephone": "+1 (887) 424-3892",
            "email": "Luz.Shepherd@gmail.com",
            "traveller_type": "young couple",
            "gender": "m",
            "surname": "Shepherd",
            "fullname": "Luz",
            "age": 37,
            "id": "5936a782a27df307fff302a0"
        },
        {
            "lastBookingDate": "15-02-2016",
            "userSince": "12-05-2017",
            "reservationCount": 0,
            "fidelity": {
                "retired": 705,
                "earned": 464
            },
            "cashback": {
                "retired": 793,
                "earned": 548
            },
            "code": "OSH2489",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "19-02-1964",
            "address": "Lewis Avenue",
            "zipcode": " 6625",
            "city": "Connerton",
            "telephone": "+1 (887) 444-2445",
            "email": "Deborah.Lucas@gmail.com",
            "traveller_type": "family with young children",
            "gender": "m",
            "surname": "Lucas",
            "fullname": "Deborah",
            "age": 22,
            "id": "5936a7828b78688d037419bb"
        },
        {
            "lastBookingDate": "07-02-2016",
            "userSince": "22-04-2017",
            "reservationCount": 11,
            "fidelity": {
                "retired": 305,
                "earned": 540
            },
            "cashback": {
                "retired": 787,
                "earned": 890
            },
            "code": "OSH2291",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "21-12-1950",
            "address": "Woodside Avenue",
            "zipcode": " 5211",
            "city": "Slovan",
            "telephone": "+1 (831) 559-2939",
            "email": "Fry.Landry@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Landry",
            "fullname": "Fry",
            "age": 32,
            "id": "5936a782194b0f14709604ab"
        },
        {
            "lastBookingDate": "06-05-2017",
            "userSince": "05-11-2016",
            "reservationCount": 2,
            "fidelity": {
                "retired": 375,
                "earned": 389
            },
            "cashback": {
                "retired": 318,
                "earned": 202
            },
            "code": "OSH4077",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "31-08-1980",
            "address": "Goodwin Place",
            "zipcode": " 2036",
            "city": "Rew",
            "telephone": "+1 (925) 535-2937",
            "email": "Macdonald.Johns@gmail.com",
            "traveller_type": "single traveller",
            "gender": "f",
            "surname": "Johns",
            "fullname": "Macdonald",
            "age": 34,
            "id": "5936a782e41a493784e2ec55"
        },
        {
            "lastBookingDate": "07-10-2016",
            "userSince": "21-02-2017",
            "reservationCount": 7,
            "fidelity": {
                "retired": 278,
                "earned": 924
            },
            "cashback": {
                "retired": 706,
                "earned": 670
            },
            "code": "OSH5446",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "21-04-1976",
            "address": "Ocean Parkway",
            "zipcode": " 9360",
            "city": "Lithium",
            "telephone": "+1 (803) 576-2370",
            "email": "Joyce.Rosa@gmail.com",
            "traveller_type": "single traveller",
            "gender": "m",
            "surname": "Rosa",
            "fullname": "Joyce",
            "age": 31,
            "id": "5936a7824624e07aeae81d68"
        },
        {
            "lastBookingDate": "07-01-2017",
            "userSince": "01-03-2017",
            "reservationCount": 0,
            "fidelity": {
                "retired": 102,
                "earned": 248
            },
            "cashback": {
                "retired": 464,
                "earned": 117
            },
            "code": "OSH9411",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "25-10-1979",
            "address": "Dunne Place",
            "zipcode": " 4779",
            "city": "Veyo",
            "telephone": "+1 (992) 460-3297",
            "email": "Bettie.Ross@gmail.com",
            "traveller_type": "with friends",
            "gender": "f",
            "surname": "Ross",
            "fullname": "Bettie",
            "age": 24,
            "id": "5936a7824feb773bd9f2d2e5"
        },
        {
            "lastBookingDate": "05-06-2016",
            "userSince": "11-05-2017",
            "reservationCount": 15,
            "fidelity": {
                "retired": 67,
                "earned": 383
            },
            "cashback": {
                "retired": 283,
                "earned": 690
            },
            "code": "OSH7340",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "29-05-1960",
            "address": "Beacon Court",
            "zipcode": " 4259",
            "city": "Maxville",
            "telephone": "+1 (852) 408-2613",
            "email": "Goff.Dyer@gmail.com",
            "traveller_type": "with friends",
            "gender": "f",
            "surname": "Dyer",
            "fullname": "Goff",
            "age": 35,
            "id": "5936a78297c8d1b533ca3d7a"
        },
        {
            "lastBookingDate": "03-09-2016",
            "userSince": "04-11-2016",
            "reservationCount": 2,
            "fidelity": {
                "retired": 631,
                "earned": 529
            },
            "cashback": {
                "retired": 111,
                "earned": 106
            },
            "code": "OSH4688",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "18-04-1984",
            "address": "Dahl Court",
            "zipcode": " 9989",
            "city": "Rivera",
            "telephone": "+1 (839) 457-2255",
            "email": "Kathrine.Schroeder@gmail.com",
            "traveller_type": "young couple",
            "gender": "m",
            "surname": "Schroeder",
            "fullname": "Kathrine",
            "age": 21,
            "id": "5936a782cd9ea6b5ee56a707"
        },
        {
            "lastBookingDate": "01-04-2016",
            "userSince": "11-02-2017",
            "reservationCount": 20,
            "fidelity": {
                "retired": 441,
                "earned": 399
            },
            "cashback": {
                "retired": 56,
                "earned": 798
            },
            "code": "OSH8555",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "02-08-1960",
            "address": "Langham Street",
            "zipcode": " 8587",
            "city": "Marbury",
            "telephone": "+1 (815) 589-3291",
            "email": "Burks.Burns@gmail.com",
            "traveller_type": "mature couple",
            "gender": "f",
            "surname": "Burns",
            "fullname": "Burks",
            "age": 26,
            "id": "5936a782faffde843a131551"
        },
        {
            "lastBookingDate": "24-05-2016",
            "userSince": "16-12-2016",
            "reservationCount": 7,
            "fidelity": {
                "retired": 657,
                "earned": 140
            },
            "cashback": {
                "retired": 126,
                "earned": 544
            },
            "code": "OSH9032",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "13-01-1964",
            "address": "Rockaway Parkway",
            "zipcode": " 982",
            "city": "Tivoli",
            "telephone": "+1 (839) 431-2938",
            "email": "Rodgers.Frank@gmail.com",
            "traveller_type": "family with young children",
            "gender": "f",
            "surname": "Frank",
            "fullname": "Rodgers",
            "age": 28,
            "id": "5936a7826c6469f8bc324b3a"
        },
        {
            "lastBookingDate": "11-04-2016",
            "userSince": "18-02-2017",
            "reservationCount": 9,
            "fidelity": {
                "retired": 420,
                "earned": 983
            },
            "cashback": {
                "retired": 734,
                "earned": 619
            },
            "code": "OSH4923",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "12-08-1957",
            "address": "Sunnyside Avenue",
            "zipcode": " 8572",
            "city": "Haring",
            "telephone": "+1 (807) 563-3995",
            "email": "Clarke.Gallegos@gmail.com",
            "traveller_type": "mature couple",
            "gender": "f",
            "surname": "Gallegos",
            "fullname": "Clarke",
            "age": 28,
            "id": "5936a78202aecb2c895a2a80"
        },
        {
            "lastBookingDate": "03-04-2017",
            "userSince": "28-11-2016",
            "reservationCount": 18,
            "fidelity": {
                "retired": 987,
                "earned": 563
            },
            "cashback": {
                "retired": 973,
                "earned": 848
            },
            "code": "OSH6985",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "23-10-1989",
            "address": "Buffalo Avenue",
            "zipcode": " 700",
            "city": "Titanic",
            "telephone": "+1 (905) 468-2573",
            "email": "Tammi.Williamson@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Williamson",
            "fullname": "Tammi",
            "age": 31,
            "id": "5936a782c9e33763c52d9ee5"
        },
        {
            "lastBookingDate": "11-04-2016",
            "userSince": "11-04-2017",
            "reservationCount": 16,
            "fidelity": {
                "retired": 520,
                "earned": 649
            },
            "cashback": {
                "retired": 27,
                "earned": 681
            },
            "code": "OSH4848",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "30-04-1959",
            "address": "Cambridge Place",
            "zipcode": " 7211",
            "city": "Como",
            "telephone": "+1 (890) 529-3711",
            "email": "Mullen.Gibbs@gmail.com",
            "traveller_type": "family with young children",
            "gender": "f",
            "surname": "Gibbs",
            "fullname": "Mullen",
            "age": 32,
            "id": "5936a782334eaef6e607729e"
        },
        {
            "lastBookingDate": "22-04-2016",
            "userSince": "03-02-2017",
            "reservationCount": 17,
            "fidelity": {
                "retired": 382,
                "earned": 739
            },
            "cashback": {
                "retired": 354,
                "earned": 27
            },
            "code": "OSH2884",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "26-08-1991",
            "address": "Arlington Place",
            "zipcode": " 7020",
            "city": "Dargan",
            "telephone": "+1 (816) 446-2579",
            "email": "Marissa.Preston@gmail.com",
            "traveller_type": "young couple",
            "gender": "m",
            "surname": "Preston",
            "fullname": "Marissa",
            "age": 29,
            "id": "5936a782a3daae3df1195de6"
        },
        {
            "lastBookingDate": "31-03-2017",
            "userSince": "26-11-2016",
            "reservationCount": 13,
            "fidelity": {
                "retired": 814,
                "earned": 581
            },
            "cashback": {
                "retired": 139,
                "earned": 161
            },
            "code": "OSH2595",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "26-06-1951",
            "address": "Highland Place",
            "zipcode": " 6610",
            "city": "Dotsero",
            "telephone": "+1 (804) 402-3671",
            "email": "Stanley.Roberson@gmail.com",
            "traveller_type": "young couple",
            "gender": "f",
            "surname": "Roberson",
            "fullname": "Stanley",
            "age": 31,
            "id": "5936a782cd07bcd5107ecc07"
        },
        {
            "lastBookingDate": "18-11-2016",
            "userSince": "02-11-2016",
            "reservationCount": 1,
            "fidelity": {
                "retired": 841,
                "earned": 887
            },
            "cashback": {
                "retired": 187,
                "earned": 751
            },
            "code": "OSH8965",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "17-03-1957",
            "address": "Halleck Street",
            "zipcode": " 9409",
            "city": "Movico",
            "telephone": "+1 (862) 572-3371",
            "email": "Kimberly.Carver@gmail.com",
            "traveller_type": "mature couple",
            "gender": "m",
            "surname": "Carver",
            "fullname": "Kimberly",
            "age": 28,
            "id": "5936a782e8240675a5e64bff"
        },
        {
            "lastBookingDate": "21-05-2016",
            "userSince": "26-03-2017",
            "reservationCount": 3,
            "fidelity": {
                "retired": 661,
                "earned": 651
            },
            "cashback": {
                "retired": 302,
                "earned": 953
            },
            "code": "OSH4521",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "03-05-1954",
            "address": "Bay Avenue",
            "zipcode": " 1934",
            "city": "Datil",
            "telephone": "+1 (966) 493-2397",
            "email": "James.Donovan@gmail.com",
            "traveller_type": "family with older children",
            "gender": "f",
            "surname": "Donovan",
            "fullname": "James",
            "age": 35,
            "id": "5936a782eb668ff7b274c8fb"
        },
        {
            "lastBookingDate": "30-09-2016",
            "userSince": "07-02-2017",
            "reservationCount": 20,
            "fidelity": {
                "retired": 193,
                "earned": 585
            },
            "cashback": {
                "retired": 484,
                "earned": 500
            },
            "code": "OSH4566",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "18-07-1959",
            "address": "Agate Court",
            "zipcode": " 4503",
            "city": "Ypsilanti",
            "telephone": "+1 (934) 440-3152",
            "email": "Toni.Terry@gmail.com",
            "traveller_type": "mature couple",
            "gender": "f",
            "surname": "Terry",
            "fullname": "Toni",
            "age": 31,
            "id": "5936a782ccaba842a6b9ebf7"
        },
        {
            "lastBookingDate": "29-03-2016",
            "userSince": "06-02-2017",
            "reservationCount": 2,
            "fidelity": {
                "retired": 711,
                "earned": 252
            },
            "cashback": {
                "retired": 978,
                "earned": 827
            },
            "code": "OSH6156",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "20-12-1977",
            "address": "Butler Street",
            "zipcode": " 3375",
            "city": "Derwood",
            "telephone": "+1 (914) 542-3805",
            "email": "Casey.Maynard@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Maynard",
            "fullname": "Casey",
            "age": 22,
            "id": "5936a782760922f80da50eea"
        },
        {
            "lastBookingDate": "17-06-2016",
            "userSince": "27-02-2017",
            "reservationCount": 15,
            "fidelity": {
                "retired": 486,
                "earned": 754
            },
            "cashback": {
                "retired": 456,
                "earned": 956
            },
            "code": "OSH5915",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "17-11-1994",
            "address": "Heath Place",
            "zipcode": " 3355",
            "city": "Snowville",
            "telephone": "+1 (907) 581-2157",
            "email": "Katheryn.Allen@gmail.com",
            "traveller_type": "with friends",
            "gender": "f",
            "surname": "Allen",
            "fullname": "Katheryn",
            "age": 30,
            "id": "5936a7828710a87aa9ead063"
        },
        {
            "lastBookingDate": "19-01-2016",
            "userSince": "22-01-2017",
            "reservationCount": 13,
            "fidelity": {
                "retired": 373,
                "earned": 112
            },
            "cashback": {
                "retired": 689,
                "earned": 571
            },
            "code": "OSH2443",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "20-11-1956",
            "address": "Adler Place",
            "zipcode": " 7585",
            "city": "Drummond",
            "telephone": "+1 (915) 441-3873",
            "email": "Simpson.Pacheco@gmail.com",
            "traveller_type": "single traveller",
            "gender": "f",
            "surname": "Pacheco",
            "fullname": "Simpson",
            "age": 37,
            "id": "5936a7826d21e689f2ad345c"
        },
        {
            "lastBookingDate": "22-04-2016",
            "userSince": "23-11-2016",
            "reservationCount": 18,
            "fidelity": {
                "retired": 576,
                "earned": 390
            },
            "cashback": {
                "retired": 354,
                "earned": 811
            },
            "code": "OSH9774",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "06-10-1963",
            "address": "Dekalb Avenue",
            "zipcode": " 8075",
            "city": "Rockhill",
            "telephone": "+1 (938) 577-2129",
            "email": "Watts.Zamora@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Zamora",
            "fullname": "Watts",
            "age": 40,
            "id": "5936a782e09814df2cc80a50"
        },
        {
            "lastBookingDate": "13-12-2016",
            "userSince": "02-12-2016",
            "reservationCount": 20,
            "fidelity": {
                "retired": 886,
                "earned": 202
            },
            "cashback": {
                "retired": 967,
                "earned": 3
            },
            "code": "OSH7878",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "23-05-1961",
            "address": "Grove Street",
            "zipcode": " 4286",
            "city": "Detroit",
            "telephone": "+1 (893) 443-3413",
            "email": "Hopkins.Wiggins@gmail.com",
            "traveller_type": "family with young children",
            "gender": "m",
            "surname": "Wiggins",
            "fullname": "Hopkins",
            "age": 30,
            "id": "5936a7822c82aa861830dc90"
        },
        {
            "lastBookingDate": "26-09-2016",
            "userSince": "21-11-2016",
            "reservationCount": 10,
            "fidelity": {
                "retired": 894,
                "earned": 834
            },
            "cashback": {
                "retired": 756,
                "earned": 578
            },
            "code": "OSH4279",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "25-10-1951",
            "address": "Caton Avenue",
            "zipcode": " 7834",
            "city": "Kennedyville",
            "telephone": "+1 (820) 513-2673",
            "email": "Sharpe.Frederick@gmail.com",
            "traveller_type": "single traveller",
            "gender": "m",
            "surname": "Frederick",
            "fullname": "Sharpe",
            "age": 25,
            "id": "5936a782ad7c171fb48b5a23"
        },
        {
            "lastBookingDate": "26-09-2016",
            "userSince": "24-12-2016",
            "reservationCount": 14,
            "fidelity": {
                "retired": 203,
                "earned": 633
            },
            "cashback": {
                "retired": 289,
                "earned": 408
            },
            "code": "OSH7599",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "03-08-1955",
            "address": "Herkimer Court",
            "zipcode": " 4963",
            "city": "Russellville",
            "telephone": "+1 (971) 440-3588",
            "email": "Lakisha.Buckner@gmail.com",
            "traveller_type": "family with older children",
            "gender": "m",
            "surname": "Buckner",
            "fullname": "Lakisha",
            "age": 34,
            "id": "5936a782e06945e12862cc33"
        },
        {
            "lastBookingDate": "19-03-2017",
            "userSince": "05-06-2017",
            "reservationCount": 19,
            "fidelity": {
                "retired": 871,
                "earned": 688
            },
            "cashback": {
                "retired": 42,
                "earned": 106
            },
            "code": "OSH7739",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "06-10-1958",
            "address": "Nautilus Avenue",
            "zipcode": " 644",
            "city": "Bowden",
            "telephone": "+1 (875) 545-3017",
            "email": "Marisol.Cochran@gmail.com",
            "traveller_type": "family with older children",
            "gender": "f",
            "surname": "Cochran",
            "fullname": "Marisol",
            "age": 27,
            "id": "5936a78295d130307a13802f"
        },
        {
            "lastBookingDate": "02-03-2017",
            "userSince": "27-03-2017",
            "reservationCount": 7,
            "fidelity": {
                "retired": 327,
                "earned": 688
            },
            "cashback": {
                "retired": 611,
                "earned": 604
            },
            "code": "OSH3648",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "06-04-1995",
            "address": "Colby Court",
            "zipcode": " 5225",
            "city": "Holcombe",
            "telephone": "+1 (898) 502-2195",
            "email": "Downs.Mcconnell@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Mcconnell",
            "fullname": "Downs",
            "age": 31,
            "id": "5936a782428d191c4749a25c"
        },
        {
            "lastBookingDate": "14-11-2016",
            "userSince": "07-05-2017",
            "reservationCount": 5,
            "fidelity": {
                "retired": 760,
                "earned": 887
            },
            "cashback": {
                "retired": 897,
                "earned": 439
            },
            "code": "OSH3549",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "27-09-1979",
            "address": "Sharon Street",
            "zipcode": " 4246",
            "city": "Nash",
            "telephone": "+1 (944) 577-2238",
            "email": "Sparks.Jefferson@gmail.com",
            "traveller_type": "single traveller",
            "gender": "m",
            "surname": "Jefferson",
            "fullname": "Sparks",
            "age": 33,
            "id": "5936a782d70a04a50b7a9962"
        },
        {
            "lastBookingDate": "03-02-2016",
            "userSince": "15-02-2017",
            "reservationCount": 3,
            "fidelity": {
                "retired": 814,
                "earned": 175
            },
            "cashback": {
                "retired": 980,
                "earned": 732
            },
            "code": "OSH1718",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "28-08-1992",
            "address": "Hanover Place",
            "zipcode": " 5729",
            "city": "Glenville",
            "telephone": "+1 (969) 493-3504",
            "email": "Roberta.Maxwell@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Maxwell",
            "fullname": "Roberta",
            "age": 35,
            "id": "5936a78219fad018ba44e669"
        },
        {
            "lastBookingDate": "31-05-2017",
            "userSince": "09-03-2017",
            "reservationCount": 20,
            "fidelity": {
                "retired": 40,
                "earned": 855
            },
            "cashback": {
                "retired": 801,
                "earned": 201
            },
            "code": "OSH4109",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "11-05-1979",
            "address": "Chester Street",
            "zipcode": " 5817",
            "city": "Sidman",
            "telephone": "+1 (855) 546-3844",
            "email": "Bettye.Robles@gmail.com",
            "traveller_type": "family with young children",
            "gender": "f",
            "surname": "Robles",
            "fullname": "Bettye",
            "age": 24,
            "id": "5936a7825cbbc43e1d7e4e12"
        },
        {
            "lastBookingDate": "07-01-2017",
            "userSince": "27-05-2017",
            "reservationCount": 0,
            "fidelity": {
                "retired": 77,
                "earned": 608
            },
            "cashback": {
                "retired": 779,
                "earned": 681
            },
            "code": "OSH5559",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "24-08-1968",
            "address": "Eaton Court",
            "zipcode": " 6108",
            "city": "Shepardsville",
            "telephone": "+1 (940) 509-2931",
            "email": "Sherrie.Mendez@gmail.com",
            "traveller_type": "with friends",
            "gender": "f",
            "surname": "Mendez",
            "fullname": "Sherrie",
            "age": 39,
            "id": "5936a7821041a607c22d8758"
        },
        {
            "lastBookingDate": "01-01-2016",
            "userSince": "07-04-2017",
            "reservationCount": 20,
            "fidelity": {
                "retired": 593,
                "earned": 866
            },
            "cashback": {
                "retired": 563,
                "earned": 991
            },
            "code": "OSH8264",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "17-03-1962",
            "address": "Monument Walk",
            "zipcode": " 6202",
            "city": "Roland",
            "telephone": "+1 (955) 475-3221",
            "email": "Magdalena.Higgins@gmail.com",
            "traveller_type": "with friends",
            "gender": "m",
            "surname": "Higgins",
            "fullname": "Magdalena",
            "age": 33,
            "id": "5936a78241f945e63540eb4a"
        },
        {
            "lastBookingDate": "30-09-2016",
            "userSince": "03-02-2017",
            "reservationCount": 9,
            "fidelity": {
                "retired": 488,
                "earned": 915
            },
            "cashback": {
                "retired": 513,
                "earned": 247
            },
            "code": "OSH1293",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "07-02-1982",
            "address": "Doughty Street",
            "zipcode": " 187",
            "city": "Snyderville",
            "telephone": "+1 (945) 413-3751",
            "email": "Murphy.Boyle@gmail.com",
            "traveller_type": "young couple",
            "gender": "m",
            "surname": "Boyle",
            "fullname": "Murphy",
            "age": 36,
            "id": "5936a782e855a598a561a534"
        },
        {
            "lastBookingDate": "25-02-2017",
            "userSince": "05-03-2017",
            "reservationCount": 16,
            "fidelity": {
                "retired": 902,
                "earned": 459
            },
            "cashback": {
                "retired": 131,
                "earned": 926
            },
            "code": "OSH4583",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "08-04-1984",
            "address": "Adelphi Street",
            "zipcode": " 9860",
            "city": "Longbranch",
            "telephone": "+1 (939) 467-2253",
            "email": "Vonda.Gordon@gmail.com",
            "traveller_type": "family with young children",
            "gender": "m",
            "surname": "Gordon",
            "fullname": "Vonda",
            "age": 21,
            "id": "5936a782ea426f699c93ea0d"
        },
        {
            "lastBookingDate": "13-01-2017",
            "userSince": "21-02-2017",
            "reservationCount": 1,
            "fidelity": {
                "retired": 239,
                "earned": 57
            },
            "cashback": {
                "retired": 506,
                "earned": 99
            },
            "code": "OSH9938",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "14-03-1970",
            "address": "Menahan Street",
            "zipcode": " 4237",
            "city": "Richville",
            "telephone": "+1 (823) 535-2014",
            "email": "Rena.Shaffer@gmail.com",
            "traveller_type": "family with young children",
            "gender": "m",
            "surname": "Shaffer",
            "fullname": "Rena",
            "age": 24,
            "id": "5936a78273ea8aa586340b4c"
        },
        {
            "lastBookingDate": "07-04-2017",
            "userSince": "04-04-2017",
            "reservationCount": 17,
            "fidelity": {
                "retired": 862,
                "earned": 268
            },
            "cashback": {
                "retired": 845,
                "earned": 877
            },
            "code": "OSH5137",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "19-06-1984",
            "address": "Montrose Avenue",
            "zipcode": " 8197",
            "city": "Crawfordsville",
            "telephone": "+1 (863) 540-2384",
            "email": "Marie.Reed@gmail.com",
            "traveller_type": "family with young children",
            "gender": "f",
            "surname": "Reed",
            "fullname": "Marie",
            "age": 39,
            "id": "5936a7829a7ebcd87a103569"
        },
        {
            "lastBookingDate": "25-03-2016",
            "userSince": "03-12-2016",
            "reservationCount": 7,
            "fidelity": {
                "retired": 601,
                "earned": 525
            },
            "cashback": {
                "retired": 978,
                "earned": 977
            },
            "code": "OSH1425",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "28-12-1950",
            "address": "Farragut Place",
            "zipcode": " 386",
            "city": "Hendersonville",
            "telephone": "+1 (958) 575-2661",
            "email": "Pearlie.Cooke@gmail.com",
            "traveller_type": "single traveller",
            "gender": "f",
            "surname": "Cooke",
            "fullname": "Pearlie",
            "age": 25,
            "id": "5936a782202d83bd87afe79e"
        },
        {
            "lastBookingDate": "04-09-2016",
            "userSince": "14-03-2017",
            "reservationCount": 9,
            "fidelity": {
                "retired": 204,
                "earned": 905
            },
            "cashback": {
                "retired": 30,
                "earned": 684
            },
            "code": "OSH4484",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "01-03-1977",
            "address": "School Lane",
            "zipcode": " 5984",
            "city": "Caspar",
            "telephone": "+1 (984) 502-2789",
            "email": "Mccarthy.Cooper@gmail.com",
            "traveller_type": "mature couple",
            "gender": "m",
            "surname": "Cooper",
            "fullname": "Mccarthy",
            "age": 35,
            "id": "5936a782e7fca4e358ffee13"
        },
        {
            "lastBookingDate": "09-07-2016",
            "userSince": "27-11-2016",
            "reservationCount": 13,
            "fidelity": {
                "retired": 945,
                "earned": 752
            },
            "cashback": {
                "retired": 613,
                "earned": 467
            },
            "code": "OSH8107",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "23-08-1972",
            "address": "Nevins Street",
            "zipcode": " 7114",
            "city": "Fontanelle",
            "telephone": "+1 (960) 412-3779",
            "email": "Deidre.Miranda@gmail.com",
            "traveller_type": "family with older children",
            "gender": "m",
            "surname": "Miranda",
            "fullname": "Deidre",
            "age": 34,
            "id": "5936a7825bdbc4af866bdfdb"
        },
        {
            "lastBookingDate": "14-03-2016",
            "userSince": "03-06-2017",
            "reservationCount": 18,
            "fidelity": {
                "retired": 337,
                "earned": 390
            },
            "cashback": {
                "retired": 121,
                "earned": 485
            },
            "code": "OSH3935",
            "language": "it",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "08-02-1981",
            "address": "Matthews Court",
            "zipcode": " 3546",
            "city": "Eureka",
            "telephone": "+1 (992) 588-2947",
            "email": "Barlow.Walls@gmail.com",
            "traveller_type": "family with older children",
            "gender": "m",
            "surname": "Walls",
            "fullname": "Barlow",
            "age": 30,
            "id": "5936a782e37e7d28178fdc4a"
        },
        {
            "lastBookingDate": "01-02-2016",
            "userSince": "24-04-2017",
            "reservationCount": 6,
            "fidelity": {
                "retired": 547,
                "earned": 362
            },
            "cashback": {
                "retired": 2,
                "earned": 174
            },
            "code": "OSH8696",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "17-03-1976",
            "address": "Colonial Road",
            "zipcode": " 5319",
            "city": "Zortman",
            "telephone": "+1 (852) 588-2215",
            "email": "Rivas.Nieves@gmail.com",
            "traveller_type": "family with older children",
            "gender": "m",
            "surname": "Nieves",
            "fullname": "Rivas",
            "age": 27,
            "id": "5936a782c9dc5e7943d62a48"
        },
        {
            "lastBookingDate": "01-07-2016",
            "userSince": "10-11-2016",
            "reservationCount": 17,
            "fidelity": {
                "retired": 436,
                "earned": 856
            },
            "cashback": {
                "retired": 471,
                "earned": 995
            },
            "code": "OSH1124",
            "language": "de",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "11-10-1956",
            "address": "Seaview Avenue",
            "zipcode": " 1483",
            "city": "Diaperville",
            "telephone": "+1 (925) 417-3671",
            "email": "Ruiz.West@gmail.com",
            "traveller_type": "single traveller",
            "gender": "m",
            "surname": "West",
            "fullname": "Ruiz",
            "age": 33,
            "id": "5936a782403b4e1d6b50b85c"
        },
        {
            "lastBookingDate": "01-03-2017",
            "userSince": "21-04-2017",
            "reservationCount": 9,
            "fidelity": {
                "retired": 398,
                "earned": 309
            },
            "cashback": {
                "retired": 944,
                "earned": 990
            },
            "code": "OSH7761",
            "language": "en",
            "image_title": null,
            "image_path": null,
            "date_of_birth": "05-02-1956",
            "address": "Dinsmore Place",
            "zipcode": " 7712",
            "city": "Elrama",
            "telephone": "+1 (983) 578-3404",
            "email": "Petra.Mays@gmail.com",
            "traveller_type": "with friends",
            "gender": "f",
            "surname": "Mays",
            "fullname": "Petra",
            "age": 23,
            "id": "5936a782996bb45a06a305e8"
        }
    ]

    /**
     * search guest select
     */
    mock.onGet(api.API_BE_USER_OPTIONS).reply(config=>{
        let  search  = config.params.q ,tmpUsers;

        if(search && search!=''){
            search = _toLower(search);
            tmpUsers = _filter( usersOption, usr=>{
                if( _toLower(usr.userName).includes(search) ) return true;
                if( _toLower(usr.userCode).includes(search) ) return true;
                return false;
            });
        }else {
            tmpUsers = _clone( usersOption );
        }

        let selectedUsers =[];
        for(let i=0;i<tmpUsers.length;i++){
            selectedUsers.push(tmpUsers[i].userName);
        }

        return [200, {data:selectedUsers}]
    });

    /**
     * guests list
     */
    mock.onGet(api.API_BE_USER_SEARCH).reply(config=>{
        let  {page,perPage,order,search}  = config.params ;
        let offset = ( page - 1) *  perPage,tmpUsers;

        if(search && search!=''){
            search = _toLower(search);
            tmpUsers = _filter( users, usr=>{
                if( _toLower(usr.userSurname + ' ' + usr.userName).includes(search) ) return true;
                if( _toLower(usr.userCode).includes(search) ) return true;
                return false;
            });
        }else {
            tmpUsers = _clone( users );
        }

        let selectedUsers;

        if(order && order!='default'){
            let direction ='asc';
            if(order=='user-name-z-a')
                direction = 'desc';

            tmpUsers=_orderBy(tmpUsers,['userSurname','userName'],[direction,direction]  );
        }

        if(page>0)
            selectedUsers = tmpUsers.slice(offset, offset + perPage);
        else
            selectedUsers = tmpUsers;


        return [200, {data:selectedUsers,count:tmpUsers.length,totalRecord:users.length}]
    });

    /**
     * be guest reservations
     */
    mock.onGet(api.API_BE_USER_RESERVATION).reply(config=>{
            let data = [
                {"id":"483721","number":"8003/2017/R1","opendate":"2017-03-13 18:03:37","checkin":"2017-05-09","checkout":"2017-05-11","status":"0","name":"Mattias","surname":"Costantini","mail":"mattias.costantini@mm-one.com","phone":"","mobile":"","address":"","city":"","nation":"IT","zipcode":"","language":"it","notes":"-","numpersons":"3","price":720,"deposit":"720.00 EUR","currency":"EUR","rooms":"1","cancellationPolicy":"Room 1<br>",
                "roomsDetails":[{"id":"2061561","roomId":"8798","name":"MX Sup.","list":"1","board":"OB","cancellationPolicy":"","guests":{"adults":"1","children":{"count":2,"ages":[15,16]}}}],
                "structure_name":"Overlook Hotel","reservationId":254,"cashback":{"waiting":0,"removed":0,"earned":7.2},"fidelity":{"waiting":0,"removed":0,"earned":720},"modifyRequest":{"checkin":"2017-05-16","checkout":"2017-05-19","price":"1020","currency":"EUR"}},

                {"id":"482424","number":"8001/2017/R1","opendate":"2017-03-10 16:24:51","checkin":"2017-03-25","checkout":"2017-03-28","status":"20","name":"Mattias","surname":"Costantini","mail":"mattias.costantini@mm-one.com","phone":"","mobile":"","address":"","city":"","nation":"IT","zipcode":"","language":"it","notes":"-","numpersons":"3","price":900,"deposit":"900 EUR","currency":"EUR","rooms":"1","cancellationPolicy":"Room 1<br>",
                "roomsDetails":[{"id":"2055600","roomId":"8798","name":"MX Sup.","list":"1","board":"OB","cancellationPolicy":"","guests":{"adults":"1","children":{"count":2,"ages":[15,16]}},"accessories":[],"totalAccessories":0,"products":[],"price":900}],
                "pendingRequest":false,"products":[],"totalEcommerce":0,"totalAccessories":0,"installation_code":"RES","portal_id":"1","structure_id":1,"structure_name":"Overlook Hotel","reservationId":255,"cashback":{"waiting":0,"removed":10,"earned":0},"fidelity":{"waiting":0,"removed":900,"earned":0}},

                {"id":"489379","number":"8019/2017/R1","opendate":"2017-03-24 10:15:05","checkin":"2017-04-28","checkout":"2017-04-30","status":"20","name":"Mattias","surname":"Costantini","mail":"mattias.costantini@mm-one.com","phone":"","mobile":"","address":"","city":"","nation":"IT","zipcode":"","language":"it","notes":"-","numpersons":"4","price":1640,"deposit":"1640 EUR","currency":"EUR","rooms":"1","cancellationPolicy":"Room 1<br>",
                "roomsDetails":[{"id":"2089019","roomId":"8794","name":"MX Sup.","list":"1","board":"OB","cancellationPolicy":"","guests":{"adults":"2","children":{"count":2,"ages":[15,17]}},"accessories":[{"price":40,"name":"Aperitivo all'arrivo"},{"price":10,"name":"garage (servizi extra a richiesta (da pagare all’arrivo))"}],"totalAccessories":50,"products":[],"price":1590}],
                "pendingRequest":false,"products":[],"totalEcommerce":0,"totalAccessories":50,"installation_code":"RES","portal_id":"1","structure_id":1,"structure_name":"Overlook Hotel","reservationId":256,"cashback":{"waiting":0,"removed":16.4,"earned":0},"fidelity":{"waiting":0,"removed":1640,"earned":0},"modifyRequest":{"checkin":"2017-04-28","checkout":"2017-04-30","price":"1640","currency":"EUR"}},

                {"id":"532749","number":"8062/2017/R1","opendate":"2017-06-06 14:40:09","checkin":"2017-07-04","checkout":"2017-07-08","status":"0","name":"Mattias","surname":"Costantini","mail":"mattias.costantini@mm-one.com","phone":"-","mobile":"-","address":"-","city":"-","nation":"IT","zipcode":"-","language":"it","notes":"-","numpersons":"2","price":844,"deposit":"844 EUR","currency":"EUR","rooms":"1","cancellationPolicy":"Room 1<br>",
                "roomsDetails":[{"id":"2304345","roomId":"8458","name":"M Classic","list":"1","board":"BB","cancellationPolicy":"","guests":{"adults":"2","children":{"count":0,"ages":[]}},"accessories":[],"totalAccessories":0,"products":[],"price":844}],
                "pendingRequest":false,"products":[],"totalEcommerce":0,"totalAccessories":0,"installation_code":"RES","portal_id":"1","structure_id":1,"structure_name":"Overlook Hotel","reservationId":257,"cashback":{"waiting":7.2,"removed":0,"earned":0},"fidelity":{"waiting":844,"removed":0,"earned":0}},

                {"id":"532745","number":"8061/2017/R1","opendate":"2017-06-06 14:33:49","checkin":"2017-06-09","checkout":"2017-06-17","status":"0","name":"Mattias","surname":"Costantini","mail":"mattias.costantini@mm-one.com","phone":"","mobile":"","address":"","city":"","nation":"IT","zipcode":"","language":"it","notes":"-","numpersons":"2","price":44,"deposit":"44 EUR","currency":"EUR","rooms":"1","cancellationPolicy":"Room 1<br>",
                "roomsDetails":[{"id":"2304333","roomId":"8458","name":"M Classic","list":"1","board":"BB","cancellationPolicy":"","guests":{"adults":"2","children":{"count":0,"ages":[]}},"accessories":[],"totalAccessories":0,"products":[],"price":44}],
                "pendingRequest":false,"products":[],"totalEcommerce":0,"totalAccessories":0,"installation_code":"RES","portal_id":"1","structure_id":1,"structure_name":"Overlook Hotel","reservationId":258,"cashback":{"waiting":1,"removed":0,"earned":0},"fidelity":{"waiting":44,"removed":0,"earned":0}}
        ];

        return [200, {data}]
    });

    /**
     * be guest fidelity
     */
    mock.onGet(api.API_BE_USER_FIDELITY).reply(config=>{
        let data = {
            "recap":{"earnedPoints":1130,"usedPoints":950,"balancePoints":180,"accreditPoints":888},
            "history":[
                {"structureName":"Overlook Hotel","updateOn":"2017-03-13","status":"e","points":720},
                {"structureName":"Overlook Hotel","updateOn":"2017-03-10","status":"r","points":900},
                {"structureName":null,"updateOn":"2017-03-17","status":"e","points":100},
                {"structureName":null,"updateOn":"2017-03-17","status":"e","points":100},
                {"structureName":null,"updateOn":"2017-03-17","status":"e","points":200},
                {"structureName":null,"updateOn":"2017-03-17","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-03-17","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-03-17","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-03-17","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-03-17","status":"e","points":10},
                {"structureName":null,"updateOn":"2017-03-21","status":"u","points":50},
                {"structureName":"Overlook Hotel","updateOn":"2017-03-24","status":"r","points":1640},
                {"structureName":null,"updateOn":"2017-05-23","status":"u","points":50},
                {"structureName":"Overlook Hotel","updateOn":"2017-06-06","status":"c","points":844},
                {"structureName":"Overlook Hotel","updateOn":"2017-06-06","status":"c","points":44},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":50},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":200},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":200},
                {"structureName":null,"updateOn":"2017-06-07","status":"u","points":50}]
        } ;

        return [200, {data}]
    });

    /**
     * be guest prizes
     */
    mock.onGet(api.API_BE_USER_PRIZE).reply(config=>{
        let data = [
            {
                "status": "s",
                "shippingdata": {
                    "telephone": "+39 (803) 450-2252",
                    "country": "Zambia",
                    "zipcode": 49515,
                    "city": "Thynedale",
                    "address": "498 Hubbard Place",
                    "surname": "Daugherty",
                    "fullname": "Rosalind"
                },
                "prize": {
                    "requiredPoints": 7323,
                    "name": "ullamco id dolore est exercitation",
                    "imageTitle": "in consequat Lorem Lorem ad labore exercitation velit cillum ea",
                    "imageDescription": "Cillum ea deserunt ad fugiat aliqua non non pariatur esse exercitation reprehenderit. Voluptate labore voluptate tempor cupidatat irure do dolore enim. Elit et minim aliqua ullamco sint anim veniam deserunt consectetur amet labore do dolore. Elit eiusmod voluptate sit labore. Exercitation aliqua reprehenderit cupidatat Lorem laborum ullamco ipsum tempor nisi incididunt. Eiusmod cupidatat nisi laboris sit ea reprehenderit tempor occaecat magna minim in sunt anim consequat.",
                    "image": "http://placehold.it/64x64",
                    "description": "culpa proident dolore aute exercitation cupidatat excepteur consectetur exercitation ad",
                    "additionalDescription": "Voluptate deserunt in et nisi nulla veniam aliqua irure fugiat occaecat. Ea incididunt tempor magna exercitation Lorem cillum amet pariatur eu. Proident sit commodo labore laborum est ullamco elit irure est aliqua excepteur aute nisi. Officia ut enim duis labore in veniam cupidatat enim ut dolor laborum.",
                    "id": 9783
                },
                "sentDate": "29-06-2016",
                "requestDate": "14-03-2016",
                "note": "Incididunt qui consequat cupidatat reprehenderit. Incididunt incididunt proident tempor exercitation consectetur nisi fugiat veniam duis consequat ullamco ipsum et. Aliquip deserunt voluptate irure dolore aliquip elit excepteur sint do officia minim labore anim magna. Id enim labore sint ea eiusmod enim dolore ad do exercitation. Mollit Lorem nostrud deserunt esse veniam dolor sunt. Eiusmod in ea aliqua minim aliquip irure.",
                "id": 101
            },
            {
                "status": "w",
                "shippingdata": {
                    "telephone": "+39 (894) 535-3154",
                    "country": "French Guiana",
                    "zipcode": 46208,
                    "city": "Edmund",
                    "address": "2 Fleet Street",
                    "surname": "Macias",
                    "fullname": "Parker"
                },
                "prize": {
                    "requiredPoints": 1970,
                    "name": "amet Lorem aliquip dolor mollit",
                    "imageTitle": "aliqua proident laboris laboris occaecat laborum ut nisi et ea",
                    "imageDescription": "Enim quis eu enim non eiusmod tempor eu et id. Sunt magna reprehenderit proident tempor sit dolore ut et. Proident esse cillum fugiat id dolor proident laborum ut mollit anim occaecat. Duis irure elit est minim laboris. Do deserunt officia anim mollit dolor deserunt dolor duis reprehenderit incididunt est.",
                    "image": "http://placehold.it/64x64",
                    "description": "est in sit est non adipisicing amet Lorem officia dolor",
                    "additionalDescription": "Dolor duis irure dolore consequat elit ea. Ut mollit proident duis consequat cillum aliqua excepteur labore occaecat irure aute excepteur nostrud. Tempor consequat consectetur id culpa proident ullamco reprehenderit qui enim aute excepteur laboris anim reprehenderit. Proident officia ullamco magna velit aute aliquip ad ad aliquip ut ut fugiat in dolore. Id consequat Lorem labore elit Lorem velit nisi proident culpa eiusmod pariatur. Aliquip ad consequat qui voluptate.",
                    "id": 7133
                },
                "sentDate": "15-03-2016",
                "requestDate": "23-09-2016",
                "note": "Nulla laborum in voluptate labore reprehenderit. Mollit duis irure nulla tempor cillum qui et voluptate incididunt elit cillum exercitation labore voluptate. Pariatur adipisicing eiusmod ipsum ex sint irure non reprehenderit ut sint nisi velit amet. Cupidatat ex reprehenderit in id. Ut sit cillum nostrud sit laboris eiusmod eu minim reprehenderit nostrud.",
                "id": 31
            },
            {
                "status": "w",
                "shippingdata": {
                    "telephone": "+39 (952) 538-3964",
                    "country": "Ghana",
                    "zipcode": 68752,
                    "city": "Savannah",
                    "address": "436 Monaco Place",
                    "surname": "Larson",
                    "fullname": "Polly"
                },
                "prize": {
                    "requiredPoints": 1261,
                    "name": "ea labore elit id do",
                    "imageTitle": "ea ex deserunt sit pariatur labore voluptate ad adipisicing anim",
                    "imageDescription": "Elit aliqua cillum ipsum nostrud reprehenderit ad sunt cillum. Voluptate culpa reprehenderit aute sint quis Lorem aliqua exercitation aliqua sint. Sint anim est est minim duis eiusmod. Deserunt aliqua culpa exercitation officia fugiat cillum do consectetur sit irure tempor. Sint enim est qui sit nostrud nulla fugiat quis duis et.",
                    "image": "http://placehold.it/64x64",
                    "description": "labore non aute anim ullamco ad nulla reprehenderit aliquip tempor",
                    "additionalDescription": "Excepteur velit duis pariatur elit ex sunt. Commodo ad sit sunt velit fugiat tempor adipisicing in cupidatat. Dolor do amet ullamco ex exercitation sit qui quis ex ex in.",
                    "id": 544
                },
                "sentDate": "28-10-2016",
                "requestDate": "01-03-2016",
                "note": "Consectetur culpa consequat veniam eu mollit sint elit velit ut commodo aliqua. Velit ea sint ea esse nulla fugiat nostrud fugiat deserunt proident aliqua. Velit ipsum tempor ex laboris aliqua ex eiusmod do quis. In laboris exercitation ea cupidatat nostrud nisi ad consequat deserunt velit.",
                "id": 56
            },
            {
                "status": "s",
                "shippingdata": {
                    "telephone": "+39 (971) 425-2278",
                    "country": "Korea (South)",
                    "zipcode": 48687,
                    "city": "Lopezo",
                    "address": "394 Cedar Street",
                    "surname": "Chandler",
                    "fullname": "Gallagher"
                },
                "prize": {
                    "requiredPoints": 4397,
                    "name": "nisi mollit sit elit sint",
                    "imageTitle": "incididunt cillum est magna cupidatat quis enim esse est sint",
                    "imageDescription": "Ad pariatur ut incididunt nulla laboris commodo ullamco veniam labore aute aliqua Lorem esse esse. Deserunt magna enim dolore non ipsum magna cupidatat cillum duis reprehenderit veniam proident labore. Occaecat adipisicing dolor aliqua mollit est quis consectetur ex tempor ullamco esse aute reprehenderit anim. Mollit duis ipsum nisi enim officia fugiat eiusmod cupidatat veniam proident irure amet magna excepteur.",
                    "image": "http://placehold.it/64x64",
                    "description": "magna amet irure exercitation mollit incididunt voluptate consectetur velit eu",
                    "additionalDescription": "Nisi ut eiusmod consectetur Lorem sint ipsum in ut anim adipisicing tempor incididunt aute. Reprehenderit labore fugiat incididunt ut proident culpa anim non magna. Amet laboris incididunt voluptate cupidatat adipisicing mollit ex consectetur veniam nostrud est proident. Cillum exercitation consequat minim duis. Esse cupidatat dolor officia quis ad nostrud non. Tempor nisi commodo eu voluptate ullamco nulla sit ex aliqua officia ad eu ut magna.",
                    "id": 4616
                },
                "sentDate": "05-09-2016",
                "requestDate": "28-11-2016",
                "note": "Anim ad exercitation enim officia in incididunt aliquip excepteur irure irure. Duis amet adipisicing culpa qui tempor mollit irure. Irure in culpa pariatur aliqua commodo officia enim pariatur nostrud elit quis. Do ex nisi irure aute dolor minim nisi dolor occaecat nisi. Do quis deserunt eiusmod veniam Lorem tempor nulla duis ut sit laboris cillum. Consectetur et nostrud nisi id non. Excepteur officia id aute consectetur officia occaecat consequat dolor est est laboris anim esse excepteur.",
                "id": 79
            },
            {
                "status": "w",
                "shippingdata": {
                    "telephone": "+39 (941) 513-2191",
                    "country": "Brunei Darussalam",
                    "zipcode": 85976,
                    "city": "Sultana",
                    "address": "212 Krier Place",
                    "surname": "Mcpherson",
                    "fullname": "Estella"
                },
                "prize": {
                    "requiredPoints": 5778,
                    "name": "amet labore non adipisicing et",
                    "imageTitle": "nulla magna est sunt aliqua eu commodo sint eiusmod aliquip",
                    "imageDescription": "Dolore culpa aliquip cillum enim excepteur esse proident voluptate sint. Lorem excepteur tempor quis proident velit aliquip Lorem Lorem elit officia. Lorem nisi cillum tempor cupidatat exercitation sit exercitation aliquip veniam sit commodo occaecat occaecat. Esse duis dolor reprehenderit minim consectetur minim do aliquip.",
                    "image": "http://placehold.it/64x64",
                    "description": "nisi culpa proident fugiat dolore eiusmod sit anim excepteur minim",
                    "additionalDescription": "Esse commodo aute laboris deserunt fugiat aute pariatur. Deserunt pariatur ullamco dolor magna amet ipsum quis reprehenderit commodo aliquip anim. Occaecat cupidatat id nostrud ullamco sit exercitation anim mollit. Cupidatat minim enim id deserunt consectetur tempor cupidatat incididunt labore irure magna. Aliqua velit esse excepteur excepteur. Magna ea elit Lorem tempor duis ea tempor elit ullamco. Pariatur amet quis nostrud consequat enim in ut ad sit esse quis nostrud ullamco veniam.",
                    "id": 9352
                },
                "sentDate": "27-10-2016",
                "requestDate": "20-07-2016",
                "note": "Adipisicing reprehenderit elit qui eu nostrud veniam nostrud incididunt ea dolor et. Irure Lorem et cillum ex elit sunt ad pariatur. Elit laboris deserunt occaecat quis elit est eu veniam dolor ipsum non consequat.",
                "id": 14
            },
            {
                "status": "s",
                "shippingdata": {
                    "telephone": "+39 (993) 568-2371",
                    "country": "Cayman Islands",
                    "zipcode": 99315,
                    "city": "Wolcott",
                    "address": "368 Bancroft Place",
                    "surname": "Lowe",
                    "fullname": "Cross"
                },
                "prize": {
                    "requiredPoints": 4284,
                    "name": "eiusmod elit in occaecat aliquip",
                    "imageTitle": "officia nostrud aliqua elit reprehenderit excepteur laborum officia est enim",
                    "imageDescription": "Dolore fugiat pariatur occaecat tempor sint adipisicing consequat anim aliquip. In ea elit culpa excepteur exercitation eu ullamco ex ad labore aute fugiat. Sint nisi cillum laboris minim esse quis ea sit non ex. Ad commodo ad elit Lorem anim eiusmod ea velit ex. Laborum sunt ea commodo elit sunt dolore consectetur laborum. Exercitation laboris proident eu labore mollit. Est qui consectetur laborum cillum cillum cillum non elit occaecat ea veniam culpa nostrud.",
                    "image": "http://placehold.it/64x64",
                    "description": "aliqua eu Lorem consequat sit velit labore laboris voluptate labore",
                    "additionalDescription": "Est labore minim non exercitation magna sunt tempor ex anim proident excepteur culpa commodo. Irure ullamco aliquip proident duis in mollit consectetur pariatur. Fugiat anim irure ex commodo exercitation proident mollit qui.",
                    "id": 4627
                },
                "sentDate": "27-04-2016",
                "requestDate": "30-10-2016",
                "note": "Consectetur aute enim voluptate laboris qui nulla amet nostrud ex irure aute aliqua. Aute officia qui dolor ipsum sunt anim amet esse anim anim sunt do. Eiusmod pariatur tempor est duis tempor dolor in. Amet qui nostrud ea duis. Aute consectetur ea excepteur laborum deserunt proident non ipsum magna mollit dolore. Irure fugiat tempor esse ut ipsum cillum.",
                "id": 93
            }
        ];

        return [200, {data}]
    });

    /**
     * be guest cashback
     */
    mock.onGet(api.API_BE_USER_CASHBACK).reply(config=>{
        let data = {
            "recap":{"earnedCashback":1130,"usedCashback":950,"balanceCashback":180,"accreditCashback":888},
            "history":[
                {
                    "note": "irure ad sit",
                    "iban": "IT62101950400002810",
                    "country": "Andorra",
                    "surname": "Mcclure",
                    "name": "Albert",
                    "done": false,
                    "value": 704,
                    "status": "d",
                    "upDate": "01-07-2016",
                    "crDate": "26-01-2016",
                    "id": 134
                },
                {
                    "note": "ullamco ut laboris",
                    "iban": "IT67949133100008683",
                    "country": "Kuwait",
                    "surname": "Sargent",
                    "name": "Winters",
                    "done": true,
                    "value": 337,
                    "status": "t",
                    "upDate": "22-07-2016",
                    "crDate": "14-09-2016",
                    "id": 121
                },
                {
                    "note": "dolore dolor ipsum",
                    "iban": "IT64318404700007855",
                    "country": "Mayotte",
                    "surname": "Hurley",
                    "name": "Nancy",
                    "done": false,
                    "value": 159,
                    "status": "c",
                    "upDate": "21-10-2016",
                    "crDate": "27-10-2016",
                    "id": 70
                },
                {
                    "note": "sunt sunt magna",
                    "iban": "IT62416218100002870",
                    "country": "Australia",
                    "surname": "Benjamin",
                    "name": "Twila",
                    "done": false,
                    "value": 331,
                    "status": "u",
                    "upDate": "04-05-2016",
                    "crDate": "20-12-2016",
                    "id": 134
                },
                {
                    "note": "irure laborum in",
                    "iban": "IT62637634900005667",
                    "country": "Barbados",
                    "surname": "Knapp",
                    "name": "Craig",
                    "done": true,
                    "value": 269,
                    "status": "e",
                    "upDate": "02-06-2016",
                    "crDate": "17-09-2016",
                    "id": 8
                }
            ],
        } ;

        return [200, {data}]
    });
};