const users = [
    {
        "_id": "64ef3bb5f508b89b6896fdf4",
        "name": "Yoga",
        "eyeColor": "blue",
        "age": 22,
        "balance": "$1,609.63",
        "gender": "female",
        "company": "QUAILCOM",
        "email": "jeaninebauer@quailcom.com",
        "phone": "+1 (911) 539-2871",
        "address": "700 Seaview Avenue, Trona, Wyoming, 9794",
        "registered": "2014-09-26T02:11:06 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Imam"
            },
            {
                "id": 1,
                "name": "Adella"
            },
            {
                "id": 2,
                "name": "Alim"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "64ef3bb5eff923ac29b9548e",
        "name": "Dorsey Jimenez",
        "eyeColor": "brown",
        "age": 34,
        "balance": "$3,149.90",
        "gender": "male",
        "company": "TROPOLI",
        "email": "dorseyjimenez@tropoli.com",
        "phone": "+1 (978) 494-2582",
        "address": "414 Elton Street, Fairforest, Northern Mariana Islands, 371",
        "registered": "2014-06-30T10:12:26 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Imam"
            },
            {
                "id": 1,
                "name": "Irfi"
            },
            {
                "id": 2,
                "name": "Irfi"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "64ef3bb5844c559ed1f25b3d",
        "name": "Lavonne Boone",
        "eyeColor": "green",
        "age": 34,
        "balance": "$3,990.54",
        "gender": "female",
        "company": "VIXO",
        "email": "lavonneboone@vixo.com",
        "phone": "+1 (966) 415-2906",
        "address": "892 Cortelyou Road, Gibsonia, Nevada, 2328",
        "registered": "2016-10-22T10:27:48 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Irfi"
            },
            {
                "id": 1,
                "name": "Irfi"
            },
            {
                "id": 2,
                "name": "Adella"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "64ef3bb55de3c0e00a0e838f",
        "name": "Lorna Serrano",
        "eyeColor": "blue",
        "age": 22,
        "balance": "$3,065.11",
        "gender": "female",
        "company": "LINGOAGE",
        "email": "lornaserrano@lingoage.com",
        "phone": "+1 (904) 575-3489",
        "address": "144 Schroeders Avenue, Stollings, Kentucky, 9059",
        "registered": "2016-09-18T06:39:15 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Adrian"
            },
            {
                "id": 1,
                "name": "Alim"
            },
            {
                "id": 2,
                "name": "Grace"
            }
        ],
        "favoriteFruit": "banana"
    },
    {
        "_id": "64ef3bb5cdf2fd810edfb07d",
        "name": "Romero Franco",
        "eyeColor": "green",
        "age": 33,
        "balance": "$3,193.23",
        "gender": "male",
        "company": "PLASMOSIS",
        "email": "romerofranco@plasmosis.com",
        "phone": "+1 (857) 598-2026",
        "address": "577 Bush Street, Martinez, Vermont, 8937",
        "registered": "2014-03-20T02:55:38 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Adella"
            },
            {
                "id": 1,
                "name": "Imam"
            },
            {
                "id": 2,
                "name": "Imam"
            }
        ],
        "favoriteFruit": "banana"
    },
    {
        "_id": "64ef3bb582c832cb387f3e3f",
        "name": "Polly Colon",
        "eyeColor": "brown",
        "age": 37,
        "balance": "$2,795.85",
        "gender": "female",
        "company": "ACCUSAGE",
        "email": "pollycolon@accusage.com",
        "phone": "+1 (807) 503-3272",
        "address": "968 Roosevelt Court, Fairmount, North Dakota, 2836",
        "registered": "2023-04-30T09:36:59 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Adella"
            },
            {
                "id": 1,
                "name": "Adrian"
            },
            {
                "id": 2,
                "name": "Imam"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "64ef3bb55dd2e5b1c7b22033",
        "name": "Salazar Juarez",
        "eyeColor": "green",
        "age": 21,
        "balance": "$3,353.87",
        "gender": "male",
        "company": "RODEMCO",
        "email": "salazarjuarez@rodemco.com",
        "phone": "+1 (905) 484-2854",
        "address": "412 Kosciusko Street, Williamson, Arkansas, 9026",
        "registered": "2015-03-25T05:08:08 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Grace"
            },
            {
                "id": 1,
                "name": "Imam"
            },
            {
                "id": 2,
                "name": "Imam"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "64ef3bb5117ec9f7109dbf5a",
        "name": "Compton Carlson",
        "eyeColor": "brown",
        "age": 34,
        "balance": "$3,445.30",
        "gender": "male",
        "company": "ZAJ",
        "email": "comptoncarlson@zaj.com",
        "phone": "+1 (975) 424-2237",
        "address": "873 Turnbull Avenue, Tedrow, Texas, 6811",
        "registered": "2017-02-23T06:27:01 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Imam"
            },
            {
                "id": 1,
                "name": "Adella"
            },
            {
                "id": 2,
                "name": "Imam"
            }
        ],
        "favoriteFruit": "banana"
    }
];

/*
    soal :
    tentukan user yang registered pada tahun 2014 sampai dengan 2018 dan ada berapa jumlah user nya
*/

const checkYearRegistered = users => {
    let result = {
        users: [],
        total: 0
    }
    users.forEach(user => {
        let yearRegistered = "";
        for (let i = 0; i < 4; i++) {
            yearRegistered += user.registered[i]
        }

        if (yearRegistered >= 2014 && yearRegistered <= 2018) {
            result.users.push(user);
            result.total++;
        }
    });
    return result;
}

console.log(`total: ${checkYearRegistered(users).total}`);
console.log(checkYearRegistered(users).users);