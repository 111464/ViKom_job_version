/* Данные рекламных конструкций (источник — коммерческое предложение, 56 мест / 113 сторон).
   photo — локальный файл: положите снимок в assets/billboards/bb-NN.jpg, пока файла нет — показывается заглушка.
   photoLinks — исходные ссылки на фото (Яндекс Диск) по сторонам.
   mapLink — ссылка на Яндекс Карты из исходного файла. */
const BILLBOARDS = [
 {
  "id": "bb-01",
  "num": 1,
  "lat": 52.324904,
  "lng": 38.337122,
  "city": "с. Долгоруково",
  "title": "ул. К. Маркса, 6",
  "address": "с. Долгоруково, ул. К Маркса, д. 6",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-01.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/hxFIMzcIIxIuSg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/yZsGbAG7AcZBJw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10712/lipetsk-oblast/?ll=38.340856%2C52.324555&mode=whatshere&whatshere%5Bpoint%5D=38.337122%2C52.324904&whatshere%5Bzoom%5D=16.46&z=16.46",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-02",
  "num": 2,
  "lat": 52.323624,
  "lng": 38.338354,
  "city": "с. Долгоруково",
  "title": "ул. К. Маркса, 16",
  "address": "с. Долгоруково, ул. К Маркса, д. 16",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-02.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/4Yn7wkUdHwxzyQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/9o-6CZyNL-X_9g"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10712/lipetsk-oblast/?ll=38.340856%2C52.324555&mode=whatshere&whatshere%5Bpoint%5D=38.338354%2C52.323624&whatshere%5Bzoom%5D=16.46&z=16.46",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-03",
  "num": 3,
  "lat": 52.322413,
  "lng": 38.33927,
  "city": "с. Долгоруково",
  "title": "ул. К. Маркса, 28",
  "address": "с. Долгоруково, ул. К Маркса, д. 28",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-03.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/6tyhlgAlbpqzrw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/MxwsNPyPgbd3UA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10712/lipetsk-oblast/?ll=38.341828%2C52.322345&mode=whatshere&whatshere%5Bpoint%5D=38.339270%2C52.322413&whatshere%5Bzoom%5D=18.8&z=16.8",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-04",
  "num": 4,
  "lat": 52.383617,
  "lng": 38.937381,
  "city": "г. Задонск",
  "title": "ул. Коммуны, щит № 1",
  "address": "г. Задонск, ул. Коммуны, М4 альтернатива, билборд № 1",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-04.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/enF0zjNEcy3GNA"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/f_fYoCR8d0X1og"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.938034%2C52.383620&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.937381%2C52.383617&whatshere%5Bzoom%5D=19.08&z=19.08",
  "benefits": [
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-05",
  "num": 5,
  "lat": 52.383432,
  "lng": 38.937384,
  "city": "г. Задонск",
  "title": "ул. Коммуны, щит № 2",
  "address": "г. Задонск, ул. Коммуны, М4 альтернатива, билборд № 2",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-05.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/l--K4YBz5A0HVg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/dYAujjxZ_1N9AA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?source=serp_navig&text=52.383432%2C%2038.937384&mode=search&sll=38.929499%2C52.375832&ll=38.929499%2C52.375832",
  "benefits": [
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-06",
  "num": 6,
  "lat": 52.388639,
  "lng": 38.933852,
  "city": "г. Задонск",
  "title": "Автовокзал",
  "address": "г. Задонск, ул. Степанищева, д. 5, М4 альтернатива, территория автовокзала",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-06.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/v-yVc5TmoQpACw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/wKRvj9ksMZxjPw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/20212/zadonsk/?from=tabbar&ll=38.933637%2C52.388890&mode=search&sctx=ZAAAAAgBEAAaKAoSCSLElbN3QENAEcA%2BOnXlT0pAEhIJ3e9QFOgTxT8RMbd7uU%2BOsj8iBgABAgMEBSgKOABA2VNIAWI1cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9zZXJwX2Zvcm11bGE9MC44OmwzX2RjNjY4ODRiNHJlbGV2X3JhbmtpbmdfaGVhdnlfY2xpY2tfbWFwc19mb3JtdWxhPTAuMjpmbWw4Njg0OTJiNXJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfbWFwc19mb3JtdWxhPTAuODpsM19kYzY2ODg0YjRyZWxldl9yYW5raW5nX2hlYXZ5X2NsaWNrX3NlcnBfZm9ybXVsYT0wLjI6Zm1sODY4NDkyYityZWFycj1zY2hlbWVfTG9jYWwvR2VvL0VuYWJsZUJlYXV0eUZpbHRlcj0xagJydZ0BzcxMPaABAKgBAL0BFvujzsIBBufAuZrPA%2BoBAPIBAPgBAIICI9Cw0LLRgtC%2B0LLQvtC60LfQsNC7INC30LDQtNC%2B0L3RgdC6igIAkgIFMjAyMTKaAgxkZXNrdG9wLW1hcHM%3D&sll=38.933637%2C52.388890&source=serp_navig&sspn=0.008733%2C0.003195&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%20%D0%B7%D0%B0%D0%B4%D0%BE%D0%BD%D1%81%D0%BA&whatshere%5Bpoint%5D=38.933852%2C52.388639&whatshere%5Bzoom%5D=17.77&z=17.77",
  "benefits": [
   "У автовокзала",
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-07",
  "num": 7,
  "lat": 53.244919,
  "lng": 39.141164,
  "city": "г. Данков",
  "title": "Напротив пл. Ленина",
  "address": "г. Данков, ул. Урицкого, напротив пл. Ленина",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-07.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/jnVHnUHHk8n6Fg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/3brS2hQA5yZgtw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/20211/dankov/?ll=39.141755%2C53.244911&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.141164%2C53.244919&whatshere%5Bzoom%5D=18.6&z=18.6",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-08",
  "num": 8,
  "lat": 53.225777,
  "lng": 39.94448,
  "city": "г. Чаплыгин",
  "title": "Кривополянье",
  "address": "г. Чаплыгин, р-н Кривополянье, ул. Центральная, 76",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-08.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/RUgomsfApTNxhQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/s3umKYFz4Sqfxg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?l=map&ll=39.945276%2C53.226080&mode=whatshere&whatshere%5Bpoint%5D=39.944480%2C53.225777&whatshere%5Bzoom%5D=19&z=19",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-09",
  "num": 9,
  "lat": 53.254089,
  "lng": 39.98501,
  "city": "г. Чаплыгин",
  "title": "ул. Горького, 136",
  "address": "г. Чаплыгин, ул. Горького, д. 136",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-09.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/q7ek0EZMJrhY6w"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/funRwerAwWmDbw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10714/chapligin/?from=tabbar&ll=39.982256%2C53.254945&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.985010%2C53.254089&whatshere%5Bzoom%5D=17.12&z=14.92",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-10",
  "num": 10,
  "lat": 53.233128,
  "lng": 39.989043,
  "city": "г. Чаплыгин",
  "title": "ул. Советская",
  "address": "г. Чаплыгин, ул. Советская (50 м от ж/дома № 2В)",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-10.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/LubntKBZ8pEDbw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/7XBjBdemvWd70w"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10714/chapligin/?ll=39.988445%2C53.233469&mode=whatshere&whatshere%5Bpoint%5D=39.989043%2C53.233128&whatshere%5Bzoom%5D=18.13&z=18.13",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-11",
  "num": 11,
  "lat": 52.14594,
  "lng": 38.285695,
  "city": "с. Тербуны",
  "title": "Ул. Октябрьская, 100 м",
  "address": "с. Тербуны, ул. Октябрьская, 100 м от автовокзала",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-11.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://yadi.sk/i/Mke139f_FvLWuQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/t011uB1YKzpI9Q"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.286522%2C52.145780&mode=whatshere&whatshere%5Bpoint%5D=38.285695%2C52.145940&whatshere%5Bzoom%5D=17.36&z=17.36",
  "benefits": [
   "Рядом с автовокзалом",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-12",
  "num": 12,
  "lat": 52.145502,
  "lng": 38.285692,
  "city": "с. Тербуны",
  "title": "Ул. Октябрьская, 200 м",
  "address": "с. Тербуны, ул. Октябрьская, 200 м от автовокзала",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-12.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://yadi.sk/i/y2BtIAiFQaaa1g"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/KcOdc3i31lHQKw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.286169%2C52.145502&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.285692%2C52.145502&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Рядом с автовокзалом",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-13",
  "num": 13,
  "lat": 52.140922,
  "lng": 38.285561,
  "city": "с. Тербуны",
  "title": "Ул. Октябрьская, 700 м",
  "address": "с. Тербуны, ул. Октябрьская, 700 м от автовокзала",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-13.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/tCvJ73SIcgA3ng"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/EXolJimJpQojFw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.287431%2C52.141758&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.285561%2C52.140922&whatshere%5Bzoom%5D=17.4&z=17.4",
  "benefits": [
   "Рядом с автовокзалом",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-14",
  "num": 14,
  "lat": 52.197162,
  "lng": 39.086435,
  "city": "с. Хлевное",
  "title": "Рынок, щит № 1",
  "address": "с. Хлевное, ул. Свободы, территория рынка, М4 альтернатива, билборд № 1",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-14.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://yadi.sk/i/aSbA1FHmIN7qNw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/7X5b1e9-NAyu7w"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=39.087433%2C52.197027&mode=whatshere&whatshere%5Bpoint%5D=39.086435%2C52.197162&whatshere%5Bzoom%5D=19&z=19.23",
  "benefits": [
   "На территории рынка",
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-15",
  "num": 15,
  "lat": 52.197339,
  "lng": 39.086211,
  "city": "с. Хлевное",
  "title": "Рынок, щит № 2",
  "address": "с. Хлевное, ул. Свободы, территория рынка, М4 альтернатива, билборд № 2",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-15.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/BJ7KRNAD9R3Edw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/c2CnqlCP5iMQYw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?l=map&ll=39.086656%2C52.198564&mode=search&sll=39.086399%2C52.197443&text=52.197339%2C%2039.086211&z=17",
  "benefits": [
   "На территории рынка",
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-16",
  "num": 16,
  "lat": 52.756085,
  "lng": 38.321455,
  "city": "с. Становое",
  "title": "ул. Московская, 40",
  "address": "с. Становое, ул. Московская, 40 (М4 альтернатива)",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-16.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/JrcHtO9WsVXBEw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/B_En6Yld-xZSgg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?from=tabbar&ll=38.321777%2C52.756111&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.321455%2C52.756085&whatshere%5Bzoom%5D=18.6&z=18.6",
  "benefits": [
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-17",
  "num": 17,
  "lat": 52.73342,
  "lng": 38.320111,
  "city": "с. Становое",
  "title": "ул. Московская, 102",
  "address": "с. Становое, ул. Московская, 102 (М4 альтернатива)",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-17.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/kmz9wjtyZHPElQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/-S8fQnsqqQEArQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.334345%2C52.738707&mode=whatshere&whatshere%5Bpoint%5D=38.320111%2C52.733420&whatshere%5Bzoom%5D=18.92&z=14.73",
  "benefits": [
   "Трасса М4-альтернатива",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-18",
  "num": 18,
  "lat": 52.694061,
  "lng": 37.944348,
  "city": "с. Измалково",
  "title": "ул. Октябрьская",
  "address": "с. Измалково, ул. Октябрьская",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-18.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/7gACGdV05d1ZBg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/uocvDikLAlKLRw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?l=map&ll=37.945501%2C52.693868&mode=whatshere&whatshere%5Bpoint%5D=37.944348%2C52.694061&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-19",
  "num": 19,
  "lat": 52.632624,
  "lng": 38.280776,
  "city": "с. Казаки",
  "title": "Трасса Р119, щит № 1",
  "address": "с. Казаки, ул. Мира, автодорога Р119, билборд № 1",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-19.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/d/Apxi56hfnw0Mzg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/NRsZS5qZFLTDPw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.278793%2C52.631727&mode=whatshere&whatshere%5Bpoint%5D=38.280776%2C52.632624&whatshere%5Bzoom%5D=17.37&z=17.37",
  "benefits": [
   "Автодорога Р119",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-20",
  "num": 20,
  "lat": 52.632718,
  "lng": 38.280939,
  "city": "с. Казаки",
  "title": "Трасса Р119, щит № 2",
  "address": "с. Казаки, ул. Мира, автодорога Р119, билборд № 2",
  "type": "Билборд",
  "format": "3×6 м",
  "lit": false,
  "photo": "assets/billboards/bb-20.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/_z5kLZeUTa99sw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/FpP8DNBvDqGq7w"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?l=map&ll=38.277133%2C52.629738&mode=search&sll=38.277133%2C52.629738&text=52.632718%2C%2038.280939",
  "benefits": [
   "Автодорога Р119",
   "Формат 3×6 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 3×6 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-21",
  "num": 21,
  "lat": 52.570364,
  "lng": 39.514868,
  "city": "г. Липецк",
  "title": "Воронежское шоссе",
  "address": "г. Липецк, Воронежское ш. — ул. Стаханова",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-21.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/Khiixinp3V1RAg"
   },
   {
    "label": "Сторона Б",
    "url": "https://yadi.sk/i/QVC_gsA2IgDuJw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/9/lipetsk/?from=tabbar&ll=39.514868%2C52.570359&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.514868%2C52.570364&whatshere%5Bzoom%5D=17.42&z=17.62",
  "benefits": [
   "Воронежское шоссе",
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-22",
  "num": 22,
  "lat": 52.612717,
  "lng": 39.484673,
  "city": "г. Липецк",
  "title": "Северный обход, уч. 86",
  "address": "г. Липецк, автодорога Северный обход, Р119, направление Липецк — Тамбов, уч. 86",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-22.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/d/1EklATznlVV7Rw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/qFye6lfTfunyrQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/9/lipetsk/?ll=39.478554%2C52.609324&mode=search&sll=39.484673%2C52.612717&text=52.612717%2C39.484673&z=15",
  "benefits": [
   "Автодорога Р119",
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-23",
  "num": 23,
  "lat": 52.628566,
  "lng": 39.510916,
  "city": "г. Липецк",
  "title": "Северный обход, уч. 1489А",
  "address": "г. Липецк, автодорога Северный обход, Р119, направление Липецк — Тамбов, уч. 1489А",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-23.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/-RB4TrADg-aHIQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/P3Tjy3C-oJJZzA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/9/lipetsk/?ll=39.511195%2C52.628320&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.510916%2C52.628566&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Автодорога Р119",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-24",
  "num": 24,
  "lat": 52.068466,
  "lng": 39.746052,
  "city": "г. Усмань",
  "title": "Бочиновка",
  "address": "г. Усмань, р-н Бочиновка",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-24.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/UNH6NWFABeNJMQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/h0AYLYdLvmRNJw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?from=tabbar&ll=39.753530%2C52.070345&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.746052%2C52.068466&whatshere%5Bzoom%5D=15.39&z=15.39",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-25",
  "num": 25,
  "lat": 52.032011,
  "lng": 39.743577,
  "city": "г. Усмань",
  "title": "Новоуглянка, АЗК",
  "address": "г. Усмань, р-н Новоуглянка, ул. Свободная, АЗК",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-25.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/wNfcsQe41s2YAQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/xo0KSihKBUubkQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?from=tabbar&ll=39.746964%2C52.032663&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.743577%2C52.032011&whatshere%5Bzoom%5D=18.6&z=16.8",
  "benefits": [
   "У АЗК",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-26",
  "num": 26,
  "lat": 53.154537,
  "lng": 38.093272,
  "city": "г. Ефремов",
  "title": "ул. Строителей",
  "address": "г. Ефремов, ул. Строителей, в р-не дома № 35",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-26.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/d/hHNiKqQ6zrq4mA"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/ULmsqw7OLzhHVw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10828/efremov/?from=tabbar&ll=38.092763%2C53.154455&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.093272%2C53.154537&whatshere%5Bzoom%5D=18.2&z=18.2",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-27",
  "num": 27,
  "lat": 53.150238,
  "lng": 38.071147,
  "city": "г. Ефремов",
  "title": "Тульское шоссе",
  "address": "г. Ефремов, ул. Тульское шоссе",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-27.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/ZE74iSOfnS9E5Q"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/5JIbucND25BcjA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10828/efremov/?from=tabbar&ll=38.072092%2C53.150467&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.071147%2C53.150238&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Тульское шоссе",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-28",
  "num": 28,
  "lat": 53.149331,
  "lng": 38.085503,
  "city": "г. Ефремов",
  "title": "ул. Мира, 2",
  "address": "г. Ефремов, ул. Мира, 2",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-28.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/yx61IVhdUDgtHw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/lL_iuNsZLTPbEg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10828/efremov/?ll=38.087236%2C53.149581&mode=whatshere&whatshere%5Bpoint%5D=38.085503%2C53.149331&whatshere%5Bzoom%5D=18.8&z=18",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-29",
  "num": 29,
  "lat": 53.15288,
  "lng": 38.087174,
  "city": "г. Ефремов",
  "title": "ул. Мира, 11",
  "address": "г. Ефремов, ул. Мира, 11",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-29.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/AMHyWaRZpAqbfQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/U-rpx8gvm3xGhQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10828/efremov/?ll=38.087099%2C53.152741&mode=whatshere&whatshere%5Bpoint%5D=38.087174%2C53.152880&whatshere%5Bzoom%5D=17&z=17",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-30",
  "num": 30,
  "lat": 53.116713,
  "lng": 38.1377,
  "city": "г. Ефремов",
  "title": "Дорога 70К-125",
  "address": "г. Ефремов, автодорога 70К-125",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-30.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/QP-HJeYgcXtgHw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/xbyScTfRBQVfZQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10828/efremov/?ll=38.139000%2C53.117480&mode=search&sll=38.137700%2C53.116713&source=serp_navig&text=53.116713%2C38.137700&z=16.78",
  "benefits": [
   "Автодорога 70К-125",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-31",
  "num": 31,
  "lat": 53.109577,
  "lng": 38.143909,
  "city": "г. Ефремов",
  "title": "Дорога Р141",
  "address": "г. Ефремов, автодорога Р141",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-31.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/EQKABgWuAhmRMA"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/5fGf3nmGRMJwuw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10828/efremov/?ll=38.146977%2C53.110153&mode=search&sll=38.143909%2C53.109577&source=serp_navig&text=53.109577%2C38.143909&z=16.9",
  "benefits": [
   "Автодорога Р141",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-32",
  "num": 32,
  "lat": 53.096068,
  "lng": 38.156446,
  "city": "г. Ефремов",
  "title": "М-4 «Дон», 319 км",
  "address": "г. Ефремов, М-4 «Дон», 319-й километр",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-32.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/KjHHScOnyW91iA"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/fnUowicD-Vfu7Q"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=38.157574%2C53.096612&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.156446%2C53.096068&whatshere%5Bzoom%5D=17.37&z=17.37",
  "benefits": [
   "Трасса М-4 «Дон»",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-33",
  "num": 33,
  "lat": 52.035875,
  "lng": 37.886899,
  "city": "с. Волово",
  "title": "ул. Советская, 138",
  "address": "с. Волово, ул. Советская, д. 138",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-33.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/PtuXl-DkCJ8zhg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/G0YHmQ-gy0CqFw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?ll=37.887246%2C52.035928&mode=whatshere&whatshere%5Bpoint%5D=37.886899%2C52.035875&whatshere%5Bzoom%5D=18&z=19.6",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-34",
  "num": 34,
  "lat": 53.009633,
  "lng": 39.147052,
  "city": "г. Лебедянь",
  "title": "ул. К. Маркса, 24",
  "address": "г. Лебедянь, ул. К Маркса, д. 24",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-34.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/eNGnI0R6fj9_IQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/Wt252vOGrUCjVw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/20213/lebedyan/?from=tabbar&ll=39.146935%2C53.009662&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.147052%2C53.009633&whatshere%5Bzoom%5D=19.6&z=19.6",
  "benefits": [
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-35",
  "num": 35,
  "lat": 53.023484,
  "lng": 39.173607,
  "city": "г. Лебедянь",
  "title": "Шоссейный проезд",
  "address": "г. Лебедянь, ул. Шоссейный проезд",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-35.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/fB9zKavwLDUrFw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/vFzx1LPC4Nx-aA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/20213/lebedyan/?from=tabbar&ll=39.174314%2C53.022902&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.173607%2C53.023484&whatshere%5Bzoom%5D=16.84&z=16.84",
  "benefits": [
   "Шоссейный проезд",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-36",
  "num": 36,
  "lat": 53.017845,
  "lng": 39.174939,
  "city": "г. Лебедянь",
  "title": "ул. Газина",
  "address": "г. Лебедянь, ул. Газина",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-36.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/pKK6D6_RQRFrDg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/IhHcHEcjfGLluA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/20213/lebedyan/?from=tabbar&ll=39.174675%2C53.017779&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.174939%2C53.017845&whatshere%5Bzoom%5D=18.79&z=18.79",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-37",
  "num": 37,
  "lat": 53.010133,
  "lng": 39.163676,
  "city": "г. Лебедянь",
  "title": "ул. 1-Пушкари, 90",
  "address": "г. Лебедянь, ул. 1-Пушкари, 90",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-37.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/ZHYQQfUcZo9bGw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/XhIDPA-gbZjd9A"
   }
  ],
  "mapLink": "https://yandex.ru/maps/20213/lebedyan/?from=tabbar&ll=39.163584%2C53.010187&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=39.163676%2C53.010133&whatshere%5Bzoom%5D=19.33&z=19",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-38",
  "num": 38,
  "lat": 52.417248,
  "lng": 37.597264,
  "city": "г. Ливны",
  "title": "ул. Гражданская, щит № 1",
  "address": "г. Ливны, ул. Гражданская, билборд № 1",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-38.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/eHiPIvMoB1uRcw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/Fh78RgNP-ar17g"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10769/livny/?ll=37.597526%2C52.417137&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=37.597264%2C52.417248&whatshere%5Bzoom%5D=18.52&z=18.52",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-39",
  "num": 39,
  "lat": 52.416684,
  "lng": 37.597472,
  "city": "г. Ливны",
  "title": "ул. Гражданская, щит № 2",
  "address": "г. Ливны, ул. Гражданская, билборд № 2",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-39.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/TWXyok169F1Z4w"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/1t82kwH7XV689g"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10769/livny/?ll=37.597526%2C52.417137&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=37.597472%2C52.416684&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-40",
  "num": 40,
  "lat": 52.591881,
  "lng": 38.594831,
  "city": "г. Елец",
  "title": "Солидарность, 100 м от стеллы",
  "address": "г. Елец, пос. Солидарность, 100 м от стеллы, справа",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-40.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/uuj2sZOaHyJUwg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/zf8Uj3YthjFmIA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?from=tabbar&ll=38.596133%2C52.592818&mode=whatshere&whatshere%5Bpoint%5D=38.594831%2C52.591881&whatshere%5Bzoom%5D=16.34&z=16.34",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-41",
  "num": 41,
  "lat": 52.591472,
  "lng": 38.595361,
  "city": "г. Елец",
  "title": "Солидарность, 150 м от стеллы",
  "address": "г. Елец, пос. Солидарность, 150 м от стеллы, слева",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-41.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/ZUOrK8d_hzznlg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/pSowkIsUZ-C2oQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?from=tabbar&ll=38.596133%2C52.592818&mode=whatshere&whatshere%5Bpoint%5D=38.595361%2C52.591472&whatshere%5Bzoom%5D=16&z=16",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-42",
  "num": 42,
  "lat": 52.591224,
  "lng": 38.597485,
  "city": "г. Елец",
  "title": "Солидарность, 500 м от стеллы",
  "address": "г. Елец, пос. Солидарность, 500 м от стеллы, справа",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-42.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://yadi.sk/i/QbVdqMvqxvdRa"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/client/search?idContext=%2Fsearch%2Fhttps%3A%2F%2Fdisk.yandex.ru%2Fi%2FPuGDktsLry_jaQ%2Fdisk&querySearch=https%3A%2F%2Fdisk.yandex.ru%2Fi%2FPuGDktsLry_jaQ&scopeSearch=%2Fdisk&idApp=client&dialog=slider&idDialog=%2Fdisk%2FЕлец%2C%20пос%20Солидарность%2C%20500м%2C%20ст%20Б.jpg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/?from=tabbar&ll=38.596133%2C52.592818&mode=whatshere&whatshere%5Bpoint%5D=38.597485%2C52.591224&whatshere%5Bzoom%5D=16&z=16",
  "benefits": [
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-43",
  "num": 43,
  "lat": 52.630036,
  "lng": 38.446889,
  "city": "г. Елец",
  "title": "Орловское шоссе, щит № 1",
  "address": "г. Елец, Орловское ш., 10А, билборд № 1",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-43.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/QlNdo1UK923C2g"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/_g373WUYUXH3Gg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?from=tabbar&ll=38.448021%2C52.630095&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.446889%2C52.630036&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Орловское шоссе",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-44",
  "num": 44,
  "lat": 52.629981,
  "lng": 38.447883,
  "city": "г. Елец",
  "title": "Орловское шоссе, щит № 2",
  "address": "г. Елец, Орловское ш., 10А, билборд № 2",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-44.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/wjRfAqFTRC_oaQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/nV-TEaeWhHy9dw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?from=tabbar&ll=38.448021%2C52.630095&mode=whatshere&source=serp_navig&whatshere%5Bpoint%5D=38.447883%2C52.629981&whatshere%5Bzoom%5D=18.63&z=18.63",
  "benefits": [
   "Орловское шоссе",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б)."
 },
 {
  "id": "bb-45",
  "num": 45,
  "lat": 52.608057,
  "lng": 38.50076,
  "city": "г. Елец",
  "title": "Брандмауэр, ул. Пушкина",
  "address": "г. Елец, ул. Пушкина, д. 16",
  "type": "Брандмауэр",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-45.jpg",
  "photoLinks": [
   {
    "label": "Место № 1",
    "url": "https://disk.yandex.ru/i/BCxtJr5dfrORDQ"
   },
   {
    "label": "Место № 2",
    "url": "https://disk.yandex.ru/i/BCxtJr5dfrORDQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?l=map&ll=38.500760%2C52.607705&mode=search&sll=38.500760%2C52.607705&text=52.608057%2C%2038.500760",
  "benefits": [
   "Брандмауэр 6×3 м",
   "2 места",
   "Монтаж с автовышки"
  ],
  "description": "Брандмауэр 6×3 м, вертикально, 2 места. Монтаж с автовышки."
 },
 {
  "id": "bb-46",
  "num": 46,
  "lat": 52.610856,
  "lng": 38.476152,
  "city": "г. Елец",
  "title": "Брандмауэр, ул. Радиотехническая",
  "address": "г. Елец, ул. Радиотехническая, 6а",
  "type": "Брандмауэр",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-46.jpg",
  "photoLinks": [
   {
    "label": "Место № 1",
    "url": "https://yadi.sk/i/yHmnI_sU3TfzDx"
   },
   {
    "label": "Место № 2",
    "url": "https://yadi.sk/i/yHmnI_sU3TfzDx"
   },
   {
    "label": "Место № 3",
    "url": "https://yadi.sk/i/yHmnI_sU3TfzDx"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?l=map&ll=38.475904%2C52.611046&mode=search&sll=38.475904%2C52.611046&text=52.610856%2C%2038.476152",
  "benefits": [
   "Брандмауэр 6×3 м",
   "3 места",
   "Монтаж с автовышки"
  ],
  "description": "Брандмауэр 6×3 м, вертикально, 3 места. Монтаж с автовышки."
 },
 {
  "id": "bb-47",
  "num": 47,
  "lat": 52.59095,
  "lng": 38.498821,
  "city": "г. Елец",
  "title": "Брандмауэр, на Воронеж",
  "address": "г. Елец, М4 альтернатива, перекрёсток ул. Промышленная — ул. Ломоносова, направление на Воронеж",
  "type": "Брандмауэр",
  "format": "8,1×2,6 м",
  "lit": false,
  "photo": "assets/billboards/bb-47.jpg",
  "photoLinks": [
   {
    "label": "Место № 1",
    "url": "https://yadi.sk/i/rBk07LjafYx3eg"
   },
   {
    "label": "Место № 2",
    "url": "https://yadi.sk/i/rBk07LjafYx3eg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?l=map&ll=38.495322%2C52.595634&mode=search&sll=38.566562%2C52.620493&text=52.590950%2C%2038.498821&z=14",
  "benefits": [
   "Брандмауэр 8,1×2,6 м",
   "2 места",
   "Трасса М4-альтернатива",
   "Монтаж силами альпинистов"
  ],
  "description": "Брандмауэр 8,1×2,6 м, горизонтально, 2 места. Монтаж силами альпинистов."
 },
 {
  "id": "bb-48",
  "num": 48,
  "lat": 52.59095,
  "lng": 38.498821,
  "city": "г. Елец",
  "title": "Брандмауэр, на Москву",
  "address": "г. Елец, М4 альтернатива, перекрёсток ул. Промышленная — ул. Ломоносова, направление на Москву",
  "type": "Брандмауэр",
  "format": "8,1×2,6 м",
  "lit": false,
  "photo": "assets/billboards/bb-48.jpg",
  "photoLinks": [
   {
    "label": "Место № 1",
    "url": "https://disk.yandex.ru/d/zs8DOtFA3Vz2Vi"
   },
   {
    "label": "Место № 2",
    "url": "https://disk.yandex.ru/d/zs8DOtFA3Vz2Vi"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?ll=38.495322%2C52.595634&mode=search&sll=38.498821%2C52.590950&text=52.590950%2C38.498821&z=14",
  "benefits": [
   "Брандмауэр 8,1×2,6 м",
   "2 места",
   "Трасса М4-альтернатива",
   "Монтаж силами альпинистов"
  ],
  "description": "Брандмауэр 8,1×2,6 м, горизонтально, 2 места. Монтаж силами альпинистов."
 },
 {
  "id": "bb-49",
  "num": 49,
  "lat": 52.590973,
  "lng": 38.496493,
  "city": "г. Елец",
  "title": "Брандмауэр, на Лавы",
  "address": "г. Елец, М4 альтернатива, перекрёсток ул. Промышленная — ул. Ломоносова, направление на Лавы",
  "type": "Брандмауэр",
  "format": "8,1×2,7 м",
  "lit": false,
  "photo": "assets/billboards/bb-49.jpg",
  "photoLinks": [
   {
    "label": "Место № 1",
    "url": "https://yadi.sk/i/D3bmP0OJnvNM0Q"
   },
   {
    "label": "Место № 2",
    "url": "https://yadi.sk/i/D3bmP0OJnvNM0Q"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?l=map&ll=38.496520%2C52.592717&mode=search&sll=38.496520%2C52.592717&text=52.590973%2C%2038.496493",
  "benefits": [
   "Брандмауэр 8,1×2,7 м",
   "2 места",
   "Трасса М4-альтернатива",
   "Монтаж силами альпинистов"
  ],
  "description": "Брандмауэр 8,1×2,7 м, горизонтально, 2 места. Монтаж силами альпинистов."
 },
 {
  "id": "bb-50",
  "num": 50,
  "lat": 52.633704,
  "lng": 38.455204,
  "city": "г. Елец",
  "title": "Рынок «Дионис», щит № 1",
  "address": "г. Елец, территория рынка «Дионис», ул. Александровская, билборд № 1 (от поворота)",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-50.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/Q5o_Qc2QvmgpxA"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/B6wHNfCb5ckvow"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?l=stv%2Csta&ll=38.455162%2C52.633615&mode=whatshere&rtext=52.633643%2C38.455194&rtt=comparison&ruri=&whatshere%5Bpoint%5D=38.455204%2C52.633704&whatshere%5Bzoom%5D=18.11&z=18.11",
  "benefits": [
   "На территории рынка",
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-51",
  "num": 51,
  "lat": 52.633704,
  "lng": 38.455204,
  "city": "г. Елец",
  "title": "Рынок «Дионис», щит № 2",
  "address": "г. Елец, территория рынка «Дионис», ул. Александровская, билборд № 2 (ближе к бугру)",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-51.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/Nze_LrxWI1TprA"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/Pr2y31o4hqXIZA"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?l=stv%2Csta&ll=38.455162%2C52.633615&mode=whatshere&rtext=52.633643%2C38.455194&rtt=comparison&ruri=&whatshere%5Bpoint%5D=38.455204%2C52.633704&whatshere%5Bzoom%5D=18.11&z=18.11",
  "benefits": [
   "На территории рынка",
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-52",
  "num": 52,
  "lat": 52.628293,
  "lng": 38.466652,
  "city": "г. Елец",
  "title": "ул. Коммунаров, 70",
  "address": "г. Елец, ул. Коммунаров, 70",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-52.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/lldsCLIJVvW_Zw"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/NxS7XfIJVXf3Qg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?ll=38.466820%2C52.628357&mode=whatshere&whatshere%5Bpoint%5D=38.466652%2C52.628293&whatshere%5Bzoom%5D=17.91&z=17.91",
  "benefits": [
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-53",
  "num": 53,
  "lat": 52.628426,
  "lng": 38.465384,
  "city": "г. Елец",
  "title": "Медиаэкран, ул. Коммунаров, 70Б",
  "address": "г. Елец, ул. Коммунаров, 70Б",
  "type": "Медиаэкран",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-53.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/vQpwX4FprXt07g"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/swh-O_dvmZmrYQ"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?ll=38.465757%2C52.628284&mode=whatshere&whatshere%5Bpoint%5D=38.465384%2C52.628426&whatshere%5Bzoom%5D=18.82&z=18.82",
  "benefits": [
   "Видеоролик 7 сек",
   "748 выходов в сутки (7:00–23:00)"
  ],
  "description": "Медиаэкран 6×3 м, горизонтальный, стороны А и Б. Ролик идёт 7 секунд, 748 выходов в сутки (экран работает с 7:00 до 23:00)."
 },
 {
  "id": "bb-54",
  "num": 54,
  "lat": 52.608707,
  "lng": 38.472647,
  "city": "г. Елец",
  "title": "ул. Радиотехническая, 1а",
  "address": "г. Елец, ул. Радиотехническая, 1а",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-54.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/OBA4Lg2vQMhJqg"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/9yhy7K2Hzj5pvg"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?indoorLevel=1&ll=38.473135%2C52.608909&mode=whatshere&whatshere%5Bpoint%5D=38.472647%2C52.608707&whatshere%5Bzoom%5D=18&z=18",
  "benefits": [
   "Ночная подсветка",
   "Формат 6×3 м",
   "Две рекламные стороны"
  ],
  "description": "Билборд 6×3 м, горизонтально, две стороны (А и Б). Подсветка в тёмное время суток."
 },
 {
  "id": "bb-55",
  "num": 55,
  "lat": 52.608334,
  "lng": 38.471622,
  "city": "г. Елец",
  "title": "Медиаэкран, ул. Радиотехническая, 1а",
  "address": "г. Елец, ул. Радиотехническая, 1а",
  "type": "Медиаэкран",
  "format": "6×3 м",
  "lit": false,
  "photo": "assets/billboards/bb-55.jpg",
  "photoLinks": [
   {
    "label": "Сторона А",
    "url": "https://disk.yandex.ru/i/oEq22AhjPdsKtQ"
   },
   {
    "label": "Сторона Б",
    "url": "https://disk.yandex.ru/i/dk7K-6RWlLAQGw"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?ll=38.472620%2C52.608527&mode=whatshere&whatshere%5Bpoint%5D=38.471622%2C52.608334&whatshere%5Bzoom%5D=18.8&z=18",
  "benefits": [
   "Видеоролик 7 сек",
   "748 выходов в сутки (7:00–23:00)"
  ],
  "description": "Медиаэкран 6×3 м, горизонтальный, стороны А и Б. Ролик идёт 7 секунд, 748 выходов в сутки (экран работает с 7:00 до 23:00)."
 },
 {
  "id": "bb-56",
  "num": 56,
  "lat": 52.632469,
  "lng": 38.454952,
  "city": "г. Елец",
  "title": "Московское шоссе, АЗК",
  "address": "г. Елец, Московское шоссе, территория АЗК",
  "type": "Билборд",
  "format": "6×3 м",
  "lit": true,
  "photo": "assets/billboards/bb-56.jpg",
  "photoLinks": [
   {
    "label": "Сторона А (билборд)",
    "url": "https://disk.yandex.ru/i/rJ9_IkxmkXhHSw"
   },
   {
    "label": "Сторона Б (медиаэкран)",
    "url": "https://disk.yandex.ru/i/MfOa3OwxdbpA8Q"
   }
  ],
  "mapLink": "https://yandex.ru/maps/10713/yelets/?ll=38.454930%2C52.632401&mode=search&sctx=ZAAAAAgBEAAaKAoSCXAofLYOQENAEbCNeLKbT0pAEhIJ3e9QFOgTxT8RMbd7uU%2BOsj8iBgABAgMEBSgKOABA2VNIAWoCcnWdAc3MTD2gAQCoAQC9AaCjvYTCAQbl5Oyp7QSCAhjQs9C%2FINC70LjQvdC40Y8g0LXQu9C10YaKAgCSAgUxMDcxM5oCDGRlc2t0b3AtbWFwcw%3D%3D&sll=38.454930%2C52.632401&source=serp_navig&sspn=0.005157%2C0.001876&text=%D0%B3%D0%BF%20%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F%20%D0%B5%D0%BB%D0%B5%D1%86&whatshere%5Bpoint%5D=38.454952%2C52.632469&whatshere%5Bzoom%5D=18.53&z=18.53",
  "benefits": [
   "На территории АЗК",
   "Билборд с ночной подсветкой",
   "Медиаэкран на обратной стороне"
  ],
  "description": "Две стороны: сторона А — билборд 6×3 м с ночной подсветкой, сторона Б — медиаэкран 6×3 м (ролик 7 сек, 748 выходов в сутки, 7:00–23:00)."
 }
];
