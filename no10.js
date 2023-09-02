const users = [
    {
        "_id": "64f062480b22481089a51025",
        "name": "Isabelle French",
        "eyeColor": "blue",
        "age": 34,
        "balance": "$1,212.25",
        "gender": "female",
        "company": "EXOSWITCH",
        "email": "isabellefrench@exoswitch.com",
        "phone": "+1 (874) 558-2936",
        "address": "450 Dunham Place, Thermal, New York, 8094",
        "registered": "2015-12-22T02:06:48 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Adrian"
            },
            {
                "id": 1,
                "name": "Adrian"
            },
            {
                "id": 2,
                "name": "Alim"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "64f06248ad495b6ba815a5af",
        "name": "Reed Swanson",
        "eyeColor": "brown",
        "age": 33,
        "balance": "$2,868.77",
        "gender": "male",
        "company": "DYNO",
        "email": "reedswanson@dyno.com",
        "phone": "+1 (947) 400-3892",
        "address": "297 Revere Place, Kenwood, Alaska, 1866",
        "registered": "2018-07-21T02:07:42 -07:00",
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
                "name": "Adella"
            }
        ],
        "favoriteFruit": "apple"
    },
    {
        "_id": "64f06248a8ecef07c0ce5371",
        "name": "Stevenson Harmon",
        "eyeColor": "green",
        "age": 23,
        "balance": "$2,083.98",
        "gender": "male",
        "company": "BOINK",
        "email": "stevensonharmon@boink.com",
        "phone": "+1 (951) 421-2569",
        "address": "604 Hawthorne Street, Chelsea, Hawaii, 8483",
        "registered": "2023-06-07T02:37:45 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Adella"
            },
            {
                "id": 1,
                "name": "Grace"
            },
            {
                "id": 2,
                "name": "Adrian"
            }
        ],
        "favoriteFruit": "banana"
    },
    {
        "_id": "64f062486af77489c6ee41bc",
        "name": "Curtis Hays",
        "eyeColor": "blue",
        "age": 29,
        "balance": "$3,351.85",
        "gender": "male",
        "company": "BUZZOPIA",
        "email": "curtishays@buzzopia.com",
        "phone": "+1 (857) 507-2798",
        "address": "782 Jamison Lane, Odessa, Iowa, 2460",
        "registered": "2022-02-26T01:28:32 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Alim"
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
        "_id": "64f06248149e34b8996e74f8",
        "name": "Traci Goodwin",
        "eyeColor": "brown",
        "age": 38,
        "balance": "$3,346.15",
        "gender": "female",
        "company": "MAGNEATO",
        "email": "tracigoodwin@magneato.com",
        "phone": "+1 (905) 409-3830",
        "address": "397 Seagate Terrace, Fairforest, Utah, 1428",
        "registered": "2022-05-19T02:11:03 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Alim"
            },
            {
                "id": 1,
                "name": "Irfi"
            },
            {
                "id": 2,
                "name": "Imam"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "64f062486a727be3113897c6",
        "name": "Solis Price",
        "eyeColor": "green",
        "age": 37,
        "balance": "$2,958.73",
        "gender": "male",
        "company": "RODEOMAD",
        "email": "solisprice@rodeomad.com",
        "phone": "+1 (990) 412-2189",
        "address": "661 Canarsie Road, Cuylerville, New Hampshire, 7044",
        "registered": "2020-04-18T10:30:51 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Adrian"
            },
            {
                "id": 1,
                "name": "Adella"
            },
            {
                "id": 2,
                "name": "Adrian"
            }
        ],
        "favoriteFruit": "banana"
    },
    {
        "_id": "64f0624831a3e59baa688db5",
        "name": "Sexton Harrell",
        "eyeColor": "blue",
        "age": 25,
        "balance": "$2,125.58",
        "gender": "male",
        "company": "MOTOVATE",
        "email": "sextonharrell@motovate.com",
        "phone": "+1 (884) 541-2207",
        "address": "715 Wolf Place, Smock, Wisconsin, 2289",
        "registered": "2016-09-09T05:48:48 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Grace"
            },
            {
                "id": 1,
                "name": "Adella"
            },
            {
                "id": 2,
                "name": "Adella"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "64f06248b68579644f3a0042",
        "name": "Knox Strickland",
        "eyeColor": "brown",
        "age": 30,
        "balance": "$2,657.66",
        "gender": "male",
        "company": "NITRACYR",
        "email": "knoxstrickland@nitracyr.com",
        "phone": "+1 (917) 559-2025",
        "address": "836 Greene Avenue, Roland, New Jersey, 3064",
        "registered": "2023-05-20T02:39:02 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Irfi"
            },
            {
                "id": 1,
                "name": "Adrian"
            },
            {
                "id": 2,
                "name": "Grace"
            }
        ],
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "64f06248a72f8ae454d5ebe5",
        "name": "Holly Norton",
        "eyeColor": "blue",
        "age": 37,
        "balance": "$2,705.09",
        "gender": "female",
        "company": "ZENTILITY",
        "email": "hollynorton@zentility.com",
        "phone": "+1 (986) 423-2829",
        "address": "750 Ash Street, Zarephath, Alabama, 6970",
        "registered": "2019-12-29T02:03:57 -07:00",
        "friends": [
            {
                "id": 0,
                "name": "Irfi"
            },
            {
                "id": 1,
                "name": "Adrian"
            },
            {
                "id": 2,
                "name": "Alim"
            }
        ],
        "favoriteFruit": "strawberry"
    }
]

/*
    soal :
    tentukan user yang berumur dibawah 30 dan registered sesudah tahun 2018 dan berapa jumlah nya
*/

const checkAgeAndYearRegistered = users => {
    let result = {
        users: [],
        total: 0,
    }

    users.forEach(user => {
        let yearRegistered = "";
        for (let i = 0; i < 4; i++) {
            yearRegistered += user.registered[i];
        }

        if (user.age < 30 && yearRegistered > 2018) {
            result.users.push(user);
            result.total++;
        }
    });
    return result
}

console.log(`total: ${checkAgeAndYearRegistered(users).total}`);
console.log(checkAgeAndYearRegistered(users).users);