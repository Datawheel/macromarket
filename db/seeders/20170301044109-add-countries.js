'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const oec_countries = [
  		{
  			"id": "afago",
  			"name": "Angola",
  			"continent": "Africa",
  			"id_3char": "ago",
  			"flickr_link": "https://flic.kr/p/kPLXP",
  			"flickr_author": "kaysha"
  		},
  		{
  			"id": "afbdi",
  			"name": "Burundi",
  			"continent": "Africa",
  			"id_3char": "bdi",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afben",
  			"name": "Benin",
  			"continent": "Africa",
  			"id_3char": "ben",
  			"flickr_link": "https://flic.kr/p/hN9FEK",
  			"flickr_author": "Panoramas"
  		},
  		{
  			"id": "afbfa",
  			"name": "Burkina Faso",
  			"continent": "Africa",
  			"id_3char": "bfa",
  			"flickr_link": "https://flic.kr/p/7WdQPR",
  			"flickr_author": "Cordelia Persen"
  		},
  		{
  			"id": "afbwa",
  			"name": "Botswana",
  			"continent": "Africa",
  			"id_3char": "bwa",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afcaf",
  			"name": "Central African Republic",
  			"continent": "Africa",
  			"id_3char": "caf",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afciv",
  			"name": "Cote d'Ivoire",
  			"continent": "Africa",
  			"id_3char": "civ",
  			"flickr_link": "https://flic.kr/p/dd4Jxb",
  			"flickr_author": "Mire de rien"
  		},
  		{
  			"id": "afcmr",
  			"name": "Cameroon",
  			"continent": "Africa",
  			"id_3char": "cmr",
  			"flickr_link": "https://flic.kr/p/iEwZry",
  			"flickr_author": "jbdodane"
  		},
  		{
  			"id": "afcod",
  			"name": "Democratic Republic of the Congo",
  			"continent": "Africa",
  			"id_3char": "cod",
  			"flickr_link": "https://flic.kr/p/nMtMf2",
  			"flickr_author": "Joseph King"
  		},
  		{
  			"id": "afcog",
  			"name": "Republic of the Congo",
  			"continent": "Africa",
  			"id_3char": "cog",
  			"flickr_link": "https://flic.kr/p/dnKWH5",
  			"flickr_author": "United Nations Photo"
  		},
  		{
  			"id": "afcom",
  			"name": "Comoros",
  			"continent": "Africa",
  			"id_3char": "com",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afcpv",
  			"name": "Cape Verde",
  			"continent": "Africa",
  			"id_3char": "cpv",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afdji",
  			"name": "Djibouti",
  			"continent": "Africa",
  			"id_3char": "dji",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afdza",
  			"name": "Algeria",
  			"continent": "Africa",
  			"id_3char": "dza",
  			"flickr_link": "https://flic.kr/p/b4As6r",
  			"flickr_author": "Bachir"
  		},
  		{
  			"id": "afegy",
  			"name": "Egypt",
  			"continent": "Africa",
  			"id_3char": "egy",
  			"flickr_link": "https://flic.kr/p/9RAYbU",
  			"flickr_author": "Chris Ford"
  		},
  		{
  			"id": "aferi",
  			"name": "Eritrea",
  			"continent": "Africa",
  			"id_3char": "eri",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afesh",
  			"name": "Western Sahara",
  			"continent": "Africa",
  			"id_3char": "esh",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afeth",
  			"name": "Ethiopia",
  			"continent": "Africa",
  			"id_3char": "eth",
  			"flickr_link": "https://flic.kr/p/anU9KF",
  			"flickr_author": "Dan Harrison"
  		},
  		{
  			"id": "afgab",
  			"name": "Gabon",
  			"continent": "Africa",
  			"id_3char": "gab",
  			"flickr_link": "https://flic.kr/p/8CZNVy",
  			"flickr_author": "D. Julien"
  		},
  		{
  			"id": "afgha",
  			"name": "Ghana",
  			"continent": "Africa",
  			"id_3char": "gha",
  			"flickr_link": "https://flic.kr/p/6qtbZd",
  			"flickr_author": "Francisco Anzola"
  		},
  		{
  			"id": "afgin",
  			"name": "Guinea",
  			"continent": "Africa",
  			"id_3char": "gin",
  			"flickr_link": "https://flic.kr/p/6mW4Uq",
  			"flickr_author": "Jurgen"
  		},
  		{
  			"id": "afgmb",
  			"name": "Gambia",
  			"continent": "Africa",
  			"id_3char": "gmb",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afgnb",
  			"name": "Guinea-Bissau",
  			"continent": "Africa",
  			"id_3char": "gnb",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afgnq",
  			"name": "Equatorial Guinea",
  			"continent": "Africa",
  			"id_3char": "gnq",
  			"flickr_link": "https://flic.kr/p/8RkBkV",
  			"flickr_author": "Embassy of Equatorial Guinea"
  		},
  		{
  			"id": "afken",
  			"name": "Kenya",
  			"continent": "Africa",
  			"id_3char": "ken",
  			"flickr_link": "https://flic.kr/p/swAPWQ",
  			"flickr_author": "ninara"
  		},
  		{
  			"id": "aflbr",
  			"name": "Liberia",
  			"continent": "Africa",
  			"id_3char": "lbr",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "aflby",
  			"name": "Libya",
  			"continent": "Africa",
  			"id_3char": "lby",
  			"flickr_link": "https://flic.kr/p/6fsy7W",
  			"flickr_author": "sejanc"
  		},
  		{
  			"id": "aflso",
  			"name": "Lesotho",
  			"continent": "Africa",
  			"id_3char": "lso",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afmar",
  			"name": "Morocco",
  			"continent": "Africa",
  			"id_3char": "mar",
  			"flickr_link": "https://flic.kr/p/sNGpTR",
  			"flickr_author": "Jamie McCaffrey"
  		},
  		{
  			"id": "afmdg",
  			"name": "Madagascar",
  			"continent": "Africa",
  			"id_3char": "mdg",
  			"flickr_link": "https://flic.kr/p/8xWMDi",
  			"flickr_author": "Rafael Medina"
  		},
  		{
  			"id": "afmli",
  			"name": "Mali",
  			"continent": "Africa",
  			"id_3char": "mli",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afmoz",
  			"name": "Mozambique",
  			"continent": "Africa",
  			"id_3char": "moz",
  			"flickr_link": "https://flic.kr/p/6UaKv7",
  			"flickr_author": "Rosino"
  		},
  		{
  			"id": "afmrt",
  			"name": "Mauritania",
  			"continent": "Africa",
  			"id_3char": "mrt",
  			"flickr_link": "https://flic.kr/p/oPHRYM",
  			"flickr_author": "Ammar Hassan"
  		},
  		{
  			"id": "afmus",
  			"name": "Mauritius",
  			"continent": "Africa",
  			"id_3char": "mus",
  			"flickr_link": "https://flic.kr/p/6TrnkM",
  			"flickr_author": "Marco Mornati"
  		},
  		{
  			"id": "afmwi",
  			"name": "Malawi",
  			"continent": "Africa",
  			"id_3char": "mwi",
  			"flickr_link": "https://flic.kr/p/cPQCKb",
  			"flickr_author": "Skip Russell"
  		},
  		{
  			"id": "afmyt",
  			"name": "Mayotte",
  			"continent": "Africa",
  			"id_3char": "myt",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afnam",
  			"name": "Namibia",
  			"continent": "Africa",
  			"id_3char": "nam",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afner",
  			"name": "Niger",
  			"continent": "Africa",
  			"id_3char": "ner",
  			"flickr_link": "https://flic.kr/p/aw1FkY",
  			"flickr_author": "Roland"
  		},
  		{
  			"id": "afnga",
  			"name": "Nigeria",
  			"continent": "Africa",
  			"id_3char": "nga",
  			"flickr_link": "https://flic.kr/p/8q5Gd",
  			"flickr_author": "Kipp Jones"
  		},
  		{
  			"id": "afreu",
  			"name": "Reunion",
  			"continent": "Africa",
  			"id_3char": "reu",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afrwa",
  			"name": "Rwanda",
  			"continent": "Africa",
  			"id_3char": "rwa",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afsdn",
  			"name": "Sudan",
  			"continent": "Africa",
  			"id_3char": "sdn",
  			"flickr_link": "https://flic.kr/p/dB3bwK",
  			"flickr_author": "Mark Fischer"
  		},
  		{
  			"id": "afsen",
  			"name": "Senegal",
  			"continent": "Africa",
  			"id_3char": "sen",
  			"flickr_link": "https://flic.kr/p/933TN8",
  			"flickr_author": "Jeff Attaway"
  		},
  		{
  			"id": "afshn",
  			"name": "Saint Helena",
  			"continent": "Africa",
  			"id_3char": "shn",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afsle",
  			"name": "Sierra Leone",
  			"continent": "Africa",
  			"id_3char": "sle",
  			"flickr_link": "https://flic.kr/p/aAg4Gf",
  			"flickr_author": "Eduardo Fonseca Arraes"
  		},
  		{
  			"id": "afsom",
  			"name": "Somalia",
  			"continent": "Africa",
  			"id_3char": "som",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afssd",
  			"name": "South Sudan",
  			"continent": "Africa",
  			"id_3char": "ssd",
  			"flickr_link": "https://flic.kr/p/d8aArN",
  			"flickr_author": "Quade Hermann"
  		},
  		{
  			"id": "afstp",
  			"name": "Sao Tome and Principe",
  			"continent": "Africa",
  			"id_3char": "stp",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afswz",
  			"name": "Swaziland",
  			"continent": "Africa",
  			"id_3char": "swz",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "afsyc",
  			"name": "Seychelles",
  			"continent": "Africa",
  			"id_3char": "syc",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "aftcd",
  			"name": "Chad",
  			"continent": "Africa",
  			"id_3char": "tcd",
  			"flickr_link": "https://flic.kr/p/67gFV6",
  			"flickr_author": "afcone"
  		},
  		{
  			"id": "aftgo",
  			"name": "Togo",
  			"continent": "Africa",
  			"id_3char": "tgo",
  			"flickr_link": "https://flic.kr/p/nqrNMd",
  			"flickr_author": "Panoramas"
  		},
  		{
  			"id": "aftun",
  			"name": "Tunisia",
  			"continent": "Africa",
  			"id_3char": "tun",
  			"flickr_link": "https://flic.kr/p/94asmu",
  			"flickr_author": "Renaud Torres"
  		},
  		{
  			"id": "aftza",
  			"name": "Tanzania",
  			"continent": "Africa",
  			"id_3char": "tza",
  			"flickr_link": "https://flic.kr/p/nzg2Kv",
  			"flickr_author": "Roman Boed"
  		},
  		{
  			"id": "afuga",
  			"name": "Uganda",
  			"continent": "Africa",
  			"id_3char": "uga",
  			"flickr_link": "https://flic.kr/p/daCkrV",
  			"flickr_author": "beccacantpark"
  		},
  		{
  			"id": "afzaf",
  			"name": "South Africa",
  			"continent": "Africa",
  			"id_3char": "zaf",
  			"flickr_link": "https://flic.kr/p/qaitU3",
  			"flickr_author": "Paul Saad"
  		},
  		{
  			"id": "afzmb",
  			"name": "Zambia",
  			"continent": "Africa",
  			"id_3char": "zmb",
  			"flickr_link": "https://flic.kr/p/f7fyk5",
  			"flickr_author": "WorldFish"
  		},
  		{
  			"id": "afzwe",
  			"name": "Zimbabwe",
  			"continent": "Africa",
  			"id_3char": "zwe",
  			"flickr_link": "https://flic.kr/p/bUj5MV",
  			"flickr_author": "Derek Winterburn"
  		},
  		{
  			"id": "anata",
  			"name": "Antarctica",
  			"continent": "Antarctica",
  			"id_3char": "ata",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "anatf",
  			"name": "French South Antarctic Territory",
  			"continent": "Antarctica",
  			"id_3char": "atf",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "anbvt",
  			"name": "Bouvet Island",
  			"continent": "Antarctica",
  			"id_3char": "bvt",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "anhmd",
  			"name": "Heard Island and McDonald Islands",
  			"continent": "Antarctica",
  			"id_3char": "hmd",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ansgs",
  			"name": "South Georgia South Sandwich Islands",
  			"continent": "Antarctica",
  			"id_3char": "sgs",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asafg",
  			"name": "Afghanistan",
  			"continent": "Asia",
  			"id_3char": "afg",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asare",
  			"name": "United Arab Emirates",
  			"continent": "Asia",
  			"id_3char": "are",
  			"flickr_link": "https://flic.kr/p/dLR13b",
  			"flickr_author": "Chris Hopkins Images"
  		},
  		{
  			"id": "asarm",
  			"name": "Armenia",
  			"continent": "Asia",
  			"id_3char": "arm",
  			"flickr_link": "https://flic.kr/p/JvQbF",
  			"flickr_author": "Grigory Gusev"
  		},
  		{
  			"id": "asaze",
  			"name": "Azerbaijan",
  			"continent": "Asia",
  			"id_3char": "aze",
  			"flickr_link": "https://flic.kr/p/5PrY2p",
  			"flickr_author": "David Davidson"
  		},
  		{
  			"id": "asbgd",
  			"name": "Bangladesh",
  			"continent": "Asia",
  			"id_3char": "bgd",
  			"flickr_link": "https://flic.kr/p/r4kEcS",
  			"flickr_author": "Saad Faruque"
  		},
  		{
  			"id": "asbhr",
  			"name": "Bahrain",
  			"continent": "Asia",
  			"id_3char": "bhr",
  			"flickr_link": "https://flic.kr/p/5CZrze",
  			"flickr_author": "philippe leroyer"
  		},
  		{
  			"id": "asbrn",
  			"name": "Brunei",
  			"continent": "Asia",
  			"id_3char": "brn",
  			"flickr_link": "https://flic.kr/p/9mafP1",
  			"flickr_author": "henrykkcheung"
  		},
  		{
  			"id": "asbtn",
  			"name": "Bhutan",
  			"continent": "Asia",
  			"id_3char": "btn",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ascck",
  			"name": "Cocos (Keeling) Islands",
  			"continent": "Asia",
  			"id_3char": "cck",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "aschn",
  			"name": "China",
  			"continent": "Asia",
  			"id_3char": "chn",
  			"flickr_link": "https://flic.kr/p/8SLRid",
  			"flickr_author": "Mike Behnken"
  		},
  		{
  			"id": "ascxr",
  			"name": "Christmas Island",
  			"continent": "Asia",
  			"id_3char": "cxr",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ascyp",
  			"name": "Cyprus",
  			"continent": "Asia",
  			"id_3char": "cyp",
  			"flickr_link": "https://flic.kr/p/a8maHb",
  			"flickr_author": "Lefteris Katsouromallis"
  		},
  		{
  			"id": "asfio",
  			"name": "Fr Ind O",
  			"continent": "Asia",
  			"id_3char": null,
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asgeo",
  			"name": "Georgia",
  			"continent": "Asia",
  			"id_3char": "geo",
  			"flickr_link": "https://flic.kr/p/6BfHoc",
  			"flickr_author": "Philip Milne"
  		},
  		{
  			"id": "ashkg",
  			"name": "Hong Kong",
  			"continent": "Asia",
  			"id_3char": "hkg",
  			"flickr_link": "https://flic.kr/p/aCXkva",
  			"flickr_author": "Barbara Willi"
  		},
  		{
  			"id": "asidn",
  			"name": "Indonesia",
  			"continent": "Asia",
  			"id_3char": "idn",
  			"flickr_link": "https://flic.kr/p/aXZ52F",
  			"flickr_author": "Jose Javier Martin Espartosa"
  		},
  		{
  			"id": "asind",
  			"name": "India",
  			"continent": "Asia",
  			"id_3char": "ind",
  			"flickr_link": "https://flic.kr/p/fFQ4xd",
  			"flickr_author": "sandeepachetan.com travel photography"
  		},
  		{
  			"id": "asiot",
  			"name": "British Indian Ocean Territory",
  			"continent": "Asia",
  			"id_3char": "iot",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asirn",
  			"name": "Iran",
  			"continent": "Asia",
  			"id_3char": "irn",
  			"flickr_link": "https://flic.kr/p/6ar8Gf",
  			"flickr_author": "Siavash Sam Anvari"
  		},
  		{
  			"id": "asirq",
  			"name": "Iraq",
  			"continent": "Asia",
  			"id_3char": "irq",
  			"flickr_link": "https://flic.kr/p/deZPcm",
  			"flickr_author": "Jason Pitcher"
  		},
  		{
  			"id": "asisr",
  			"name": "Israel",
  			"continent": "Asia",
  			"id_3char": "isr",
  			"flickr_link": "https://flic.kr/p/pVyAYg",
  			"flickr_author": "BORIS G"
  		},
  		{
  			"id": "asjor",
  			"name": "Jordan",
  			"continent": "Asia",
  			"id_3char": "jor",
  			"flickr_link": "https://flic.kr/p/7i684",
  			"flickr_author": "premasagar"
  		},
  		{
  			"id": "asjpn",
  			"name": "Japan",
  			"continent": "Asia",
  			"id_3char": "jpn",
  			"flickr_link": "https://flic.kr/p/jUwxyP",
  			"flickr_author": "Alpha 2008"
  		},
  		{
  			"id": "askaz",
  			"name": "Kazakhstan",
  			"continent": "Asia",
  			"id_3char": "kaz",
  			"flickr_link": "https://flic.kr/p/rhr9c2",
  			"flickr_author": "NASA HQ PHOTO"
  		},
  		{
  			"id": "askgz",
  			"name": "Kyrgyzstan",
  			"continent": "Asia",
  			"id_3char": "kgz",
  			"flickr_link": "https://flic.kr/p/8EscZ9",
  			"flickr_author": "kanglapass"
  		},
  		{
  			"id": "askhm",
  			"name": "Cambodia",
  			"continent": "Asia",
  			"id_3char": "khm",
  			"flickr_link": "https://flic.kr/p/bvkVAV",
  			"flickr_author": "Judith"
  		},
  		{
  			"id": "askor",
  			"name": "South Korea",
  			"continent": "Asia",
  			"id_3char": "kor",
  			"flickr_link": "https://flic.kr/p/zb8sF",
  			"flickr_author": "ryan pikkel"
  		},
  		{
  			"id": "askwt",
  			"name": "Kuwait",
  			"continent": "Asia",
  			"id_3char": "kwt",
  			"flickr_link": "https://flic.kr/p/3iaWci",
  			"flickr_author": "Khalid Almasoud"
  		},
  		{
  			"id": "aslao",
  			"name": "Laos",
  			"continent": "Asia",
  			"id_3char": "lao",
  			"flickr_link": "https://flic.kr/p/8NazR6",
  			"flickr_author": "Xavi"
  		},
  		{
  			"id": "aslbn",
  			"name": "Lebanon",
  			"continent": "Asia",
  			"id_3char": "lbn",
  			"flickr_link": "https://flic.kr/p/9HbyFE",
  			"flickr_author": "Omar Chatriwala"
  		},
  		{
  			"id": "aslka",
  			"name": "Sri Lanka",
  			"continent": "Asia",
  			"id_3char": "lka",
  			"flickr_link": "https://flic.kr/p/857f6v",
  			"flickr_author": "Ronald Saunders"
  		},
  		{
  			"id": "asmac",
  			"name": "Macau",
  			"continent": "Asia",
  			"id_3char": "mac",
  			"flickr_link": "https://flic.kr/p/dTR4UR",
  			"flickr_author": "5oulscape"
  		},
  		{
  			"id": "asmdv",
  			"name": "Maldives",
  			"continent": "Asia",
  			"id_3char": "mdv",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asmid",
  			"name": "Midway",
  			"continent": "Asia",
  			"id_3char": "mid",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asmmr",
  			"name": "Burma",
  			"continent": "Asia",
  			"id_3char": "mmr",
  			"flickr_link": "https://flic.kr/p/qdACC3",
  			"flickr_author": "Gzooh"
  		},
  		{
  			"id": "asmng",
  			"name": "Mongolia",
  			"continent": "Asia",
  			"id_3char": "mng",
  			"flickr_link": "https://flic.kr/p/8uDRi7",
  			"flickr_author": "Paulo Philippidis"
  		},
  		{
  			"id": "asmys",
  			"name": "Malaysia",
  			"continent": "Asia",
  			"id_3char": "mys",
  			"flickr_link": "https://flic.kr/p/dYmd33",
  			"flickr_author": "Spreng Ben"
  		},
  		{
  			"id": "asnpl",
  			"name": "Nepal",
  			"continent": "Asia",
  			"id_3char": "npl",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asomn",
  			"name": "Oman",
  			"continent": "Asia",
  			"id_3char": "omn",
  			"flickr_link": "https://flic.kr/p/q7V2mA",
  			"flickr_author": "Marco Zanferrari"
  		},
  		{
  			"id": "aspak",
  			"name": "Pakistan",
  			"continent": "Asia",
  			"id_3char": "pak",
  			"flickr_link": "https://flic.kr/p/3vuzBX",
  			"flickr_author": "Faisal Saeed"
  		},
  		{
  			"id": "asphl",
  			"name": "Philippines",
  			"continent": "Asia",
  			"id_3char": "phl",
  			"flickr_link": "https://flic.kr/p/qa9EHi",
  			"flickr_author": "travel oriented"
  		},
  		{
  			"id": "asprk",
  			"name": "North Korea",
  			"continent": "Asia",
  			"id_3char": "prk",
  			"flickr_link": "https://flic.kr/p/8Dbtxa",
  			"flickr_author": "Roman Harak"
  		},
  		{
  			"id": "aspse",
  			"name": "Palestine",
  			"continent": "Asia",
  			"id_3char": "pse",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asqat",
  			"name": "Qatar",
  			"continent": "Asia",
  			"id_3char": "qat",
  			"flickr_link": "https://flic.kr/p/83xdKR",
  			"flickr_author": "Christian Senger"
  		},
  		{
  			"id": "assau",
  			"name": "Saudi Arabia",
  			"continent": "Asia",
  			"id_3char": "sau",
  			"flickr_link": "https://flic.kr/p/5RexJX",
  			"flickr_author": "Abdullah"
  		},
  		{
  			"id": "assgp",
  			"name": "Singapore",
  			"continent": "Asia",
  			"id_3char": "sgp",
  			"flickr_link": "https://flic.kr/p/dsYYd3",
  			"flickr_author": "William Cho"
  		},
  		{
  			"id": "assyr",
  			"name": "Syria",
  			"continent": "Asia",
  			"id_3char": "syr",
  			"flickr_link": "https://flic.kr/p/aGMfi2",
  			"flickr_author": "Arian Zwegers"
  		},
  		{
  			"id": "astha",
  			"name": "Thailand",
  			"continent": "Asia",
  			"id_3char": "tha",
  			"flickr_link": "https://flic.kr/p/4HE9RP",
  			"flickr_author": "shapour bahrami"
  		},
  		{
  			"id": "astjk",
  			"name": "Tajikistan",
  			"continent": "Asia",
  			"id_3char": "tjk",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "astkm",
  			"name": "Turkmenistan",
  			"continent": "Asia",
  			"id_3char": "tkm",
  			"flickr_link": "https://flic.kr/p/snMCZ6",
  			"flickr_author": "2008+"
  		},
  		{
  			"id": "astls",
  			"name": "Timor-Leste",
  			"continent": "Asia",
  			"id_3char": "tls",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "astur",
  			"name": "Turkey",
  			"continent": "Asia",
  			"id_3char": "tur",
  			"flickr_link": "https://flic.kr/p/8SQsPJ",
  			"flickr_author": "Christine und Hagen Graf"
  		},
  		{
  			"id": "astwn",
  			"name": "Taiwan",
  			"continent": "Asia",
  			"id_3char": "twn",
  			"flickr_link": "https://flic.kr/p/8obrdt",
  			"flickr_author": "CHEZ ANDRE 1"
  		},
  		{
  			"id": "asuzb",
  			"name": "Uzbekistan",
  			"continent": "Asia",
  			"id_3char": "uzb",
  			"flickr_link": "https://flic.kr/p/8w3K4m",
  			"flickr_author": "Fulvio Spada"
  		},
  		{
  			"id": "asvnm",
  			"name": "Vietnam",
  			"continent": "Asia",
  			"id_3char": "vnm",
  			"flickr_link": "https://flic.kr/p/bjB1JL",
  			"flickr_author": "Sacha Fernandez"
  		},
  		{
  			"id": "aswak",
  			"name": "Wake Island",
  			"continent": "Asia",
  			"id_3char": null,
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asyar",
  			"name": "Yemen Arab Republic",
  			"continent": "Asia",
  			"id_3char": "yar",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "asyem",
  			"name": "Yemen",
  			"continent": "Asia",
  			"id_3char": "yem",
  			"flickr_link": "https://flic.kr/p/gEGfPg",
  			"flickr_author": "Rod Waddington"
  		},
  		{
  			"id": "asymd",
  			"name": "Democratic Yemen",
  			"continent": "Asia",
  			"id_3char": "ymd",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eualb",
  			"name": "Albania",
  			"continent": "Europe",
  			"id_3char": "alb",
  			"flickr_link": "https://flic.kr/p/9ZVEcG",
  			"flickr_author": "Muharem Bendo"
  		},
  		{
  			"id": "euand",
  			"name": "Andorra",
  			"continent": "Europe",
  			"id_3char": "and",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "euaut",
  			"name": "Austria",
  			"continent": "Europe",
  			"id_3char": "aut",
  			"flickr_link": "https://flic.kr/p/iuf1Em",
  			"flickr_author": "barnyz"
  		},
  		{
  			"id": "eubel",
  			"name": "Belgium",
  			"continent": "Europe",
  			"id_3char": "bel",
  			"flickr_link": "https://flic.kr/p/muQs32",
  			"flickr_author": "Dennis Jarvis"
  		},
  		{
  			"id": "eubgr",
  			"name": "Bulgaria",
  			"continent": "Europe",
  			"id_3char": "bgr",
  			"flickr_link": "https://flic.kr/p/cjS9rm",
  			"flickr_author": "Dennis Jarvis"
  		},
  		{
  			"id": "eubih",
  			"name": "Bosnia and Herzegovina",
  			"continent": "Europe",
  			"id_3char": "bih",
  			"flickr_link": "https://flic.kr/p/dKiVsL",
  			"flickr_author": "Michael Newman"
  		},
  		{
  			"id": "eublr",
  			"name": "Belarus",
  			"continent": "Europe",
  			"id_3char": "blr",
  			"flickr_link": "https://flic.kr/p/gBtp96",
  			"flickr_author": "Paval Hadzinski"
  		},
  		{
  			"id": "eublx",
  			"name": "Belgium-Luxembourg",
  			"continent": "Europe",
  			"id_3char": "blx",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "euche",
  			"name": "Switzerland",
  			"continent": "Europe",
  			"id_3char": "che",
  			"flickr_link": "https://flic.kr/p/4RaVww",
  			"flickr_author": "CandyTian"
  		},
  		{
  			"id": "euchi",
  			"name": "Channel Islands",
  			"continent": "Europe",
  			"id_3char": "chi",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eucsk",
  			"name": "Czechoslovakia",
  			"continent": "Europe",
  			"id_3char": "csk",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eucze",
  			"name": "Czech Republic",
  			"continent": "Europe",
  			"id_3char": "cze",
  			"flickr_link": "https://flic.kr/p/5uZbXK",
  			"flickr_author": "Ricardo Liberato"
  		},
  		{
  			"id": "euddr",
  			"name": "Democratic Republic of Germany",
  			"continent": "Europe",
  			"id_3char": "ddr",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eudeu",
  			"name": "Germany",
  			"continent": "Europe",
  			"id_3char": "deu",
  			"flickr_link": "https://flic.kr/p/fidWfA",
  			"flickr_author": "Alexander Annenkov"
  		},
  		{
  			"id": "eudnk",
  			"name": "Denmark",
  			"continent": "Europe",
  			"id_3char": "dnk",
  			"flickr_link": "https://flic.kr/p/apmoqx",
  			"flickr_author": "magnetismus"
  		},
  		{
  			"id": "euesp",
  			"name": "Spain",
  			"continent": "Europe",
  			"id_3char": "esp",
  			"flickr_link": "https://flic.kr/p/pt5WE8",
  			"flickr_author": "Harshil Shah"
  		},
  		{
  			"id": "euest",
  			"name": "Estonia",
  			"continent": "Europe",
  			"id_3char": "est",
  			"flickr_link": "https://flic.kr/p/dgTN3j",
  			"flickr_author": "Pablo Andrés Rivero"
  		},
  		{
  			"id": "eufdr",
  			"name": "Federal Republic of Germany",
  			"continent": "Europe",
  			"id_3char": "fdr",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eufin",
  			"name": "Finland",
  			"continent": "Europe",
  			"id_3char": "fin",
  			"flickr_link": "https://flic.kr/p/jxxBEb",
  			"flickr_author": "edweerdt"
  		},
  		{
  			"id": "eufra",
  			"name": "France",
  			"continent": "Europe",
  			"id_3char": "fra",
  			"flickr_link": "https://flic.kr/p/8YUXB9",
  			"flickr_author": "Moyan Brenn"
  		},
  		{
  			"id": "eufro",
  			"name": "Faroe Islands",
  			"continent": "Europe",
  			"id_3char": "fro",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eugbr",
  			"name": "United Kingdom",
  			"continent": "Europe",
  			"id_3char": "gbr",
  			"flickr_link": "https://flic.kr/p/7Zuzdg",
  			"flickr_author": "Giuseppe Moscato"
  		},
  		{
  			"id": "eugib",
  			"name": "Gibraltar",
  			"continent": "Europe",
  			"id_3char": "gib",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eugrc",
  			"name": "Greece",
  			"continent": "Europe",
  			"id_3char": "grc",
  			"flickr_link": "https://flic.kr/p/7THE9v",
  			"flickr_author": "David Spender"
  		},
  		{
  			"id": "euhrv",
  			"name": "Croatia",
  			"continent": "Europe",
  			"id_3char": "hrv",
  			"flickr_link": "https://flic.kr/p/oTAgSL",
  			"flickr_author": "Mikko Muinonen"
  		},
  		{
  			"id": "euhun",
  			"name": "Hungary",
  			"continent": "Europe",
  			"id_3char": "hun",
  			"flickr_link": "https://flic.kr/p/c9XWuN",
  			"flickr_author": "Dennis Jarvis"
  		},
  		{
  			"id": "euimn",
  			"name": "Isle of Man",
  			"continent": "Europe",
  			"id_3char": "imn",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "euirl",
  			"name": "Ireland",
  			"continent": "Europe",
  			"id_3char": "irl",
  			"flickr_link": "https://flic.kr/p/4R4EPq",
  			"flickr_author": "Elena"
  		},
  		{
  			"id": "euisl",
  			"name": "Iceland",
  			"continent": "Europe",
  			"id_3char": "isl",
  			"flickr_link": "https://flic.kr/p/getDiR",
  			"flickr_author": "Moyan Brenn"
  		},
  		{
  			"id": "euita",
  			"name": "Italy",
  			"continent": "Europe",
  			"id_3char": "ita",
  			"flickr_link": "https://flic.kr/p/gonJ3Y",
  			"flickr_author": "Steffen Ramsaier"
  		},
  		{
  			"id": "euksv",
  			"name": "Kosovo",
  			"continent": "Europe",
  			"id_3char": "ksv",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eulie",
  			"name": "Liechtenstein",
  			"continent": "Europe",
  			"id_3char": "lie",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eultu",
  			"name": "Lithuania",
  			"continent": "Europe",
  			"id_3char": "ltu",
  			"flickr_link": "https://flic.kr/p/aBzJRA",
  			"flickr_author": "Mindaugas Danys"
  		},
  		{
  			"id": "eulux",
  			"name": "Luxembourg",
  			"continent": "Europe",
  			"id_3char": "lux",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eulva",
  			"name": "Latvia",
  			"continent": "Europe",
  			"id_3char": "lva",
  			"flickr_link": "https://flic.kr/p/uou4WS",
  			"flickr_author": "Julie Kertesz"
  		},
  		{
  			"id": "eumad",
  			"name": "Madeira",
  			"continent": "Europe",
  			"id_3char": null,
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eumco",
  			"name": "Monaco",
  			"continent": "Europe",
  			"id_3char": "mco",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eumda",
  			"name": "Moldova",
  			"continent": "Europe",
  			"id_3char": "mda",
  			"flickr_link": "https://flic.kr/p/7C4GW2",
  			"flickr_author": "Liviuss76"
  		},
  		{
  			"id": "eumkd",
  			"name": "Macedonia",
  			"continent": "Europe",
  			"id_3char": "mkd",
  			"flickr_link": "https://flic.kr/p/eJWPCa",
  			"flickr_author": "Marjan Lazarevski"
  		},
  		{
  			"id": "eumlt",
  			"name": "Malta",
  			"continent": "Europe",
  			"id_3char": "mlt",
  			"flickr_link": "https://flic.kr/p/bxWQkM",
  			"flickr_author": "Tony Hisgett"
  		},
  		{
  			"id": "eumne",
  			"name": "Montenegro",
  			"continent": "Europe",
  			"id_3char": "mne",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eunld",
  			"name": "Netherlands",
  			"continent": "Europe",
  			"id_3char": "nld",
  			"flickr_link": "https://flic.kr/p/domxGZ",
  			"flickr_author": "Tom Jutte"
  		},
  		{
  			"id": "eunor",
  			"name": "Norway",
  			"continent": "Europe",
  			"id_3char": "nor",
  			"flickr_link": "https://flic.kr/p/4vsfKk",
  			"flickr_author": "Michael Gwyther-Jones"
  		},
  		{
  			"id": "eupol",
  			"name": "Poland",
  			"continent": "Europe",
  			"id_3char": "pol",
  			"flickr_link": "https://flic.kr/p/c27eNN",
  			"flickr_author": "Adam Smok"
  		},
  		{
  			"id": "euprt",
  			"name": "Portugal",
  			"continent": "Europe",
  			"id_3char": "prt",
  			"flickr_link": "https://flic.kr/p/rnYtpe",
  			"flickr_author": "Rick Ligthelm"
  		},
  		{
  			"id": "eurou",
  			"name": "Romania",
  			"continent": "Europe",
  			"id_3char": "rou",
  			"flickr_link": "https://flic.kr/p/cSKTNj",
  			"flickr_author": "Dennis Jarvis"
  		},
  		{
  			"id": "eurus",
  			"name": "Russia",
  			"continent": "Europe",
  			"id_3char": "rus",
  			"flickr_link": "https://flic.kr/p/ppr95L",
  			"flickr_author": "Greg Wass"
  		},
  		{
  			"id": "euscg",
  			"name": "Serbia and Montenegro",
  			"continent": "Europe",
  			"id_3char": "scg",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eusjm",
  			"name": "Svalbard",
  			"continent": "Europe",
  			"id_3char": "sjm",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eusmr",
  			"name": "San Marino",
  			"continent": "Europe",
  			"id_3char": "smr",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eusrb",
  			"name": "Serbia",
  			"continent": "Europe",
  			"id_3char": "srb",
  			"flickr_link": "https://flic.kr/p/op4Uze",
  			"flickr_author": "Rick (瑞克)"
  		},
  		{
  			"id": "eusun",
  			"name": "USSR",
  			"continent": "Europe",
  			"id_3char": "sun",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "eusvk",
  			"name": "Slovakia",
  			"continent": "Europe",
  			"id_3char": "svk",
  			"flickr_link": "https://flic.kr/p/oCtEiy",
  			"flickr_author": "Alexander Russy"
  		},
  		{
  			"id": "eusvn",
  			"name": "Slovenia",
  			"continent": "Europe",
  			"id_3char": "svn",
  			"flickr_link": "https://flic.kr/p/atrqe3",
  			"flickr_author": "Lovro67"
  		},
  		{
  			"id": "euswe",
  			"name": "Sweden",
  			"continent": "Europe",
  			"id_3char": "swe",
  			"flickr_link": "https://flic.kr/p/D2MUz",
  			"flickr_author": "december_snowdrift"
  		},
  		{
  			"id": "euukr",
  			"name": "Ukraine",
  			"continent": "Europe",
  			"id_3char": "ukr",
  			"flickr_link": "https://flic.kr/p/dKskVo",
  			"flickr_author": "Alexxx Malev"
  		},
  		{
  			"id": "euvat",
  			"name": "Holy See (Vatican City)",
  			"continent": "Europe",
  			"id_3char": "vat",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "euyug",
  			"name": "Yugoslavia",
  			"continent": "Europe",
  			"id_3char": "yug",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "naabw",
  			"name": "Aruba",
  			"continent": "North America",
  			"id_3char": "abw",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "naaia",
  			"name": "Anguilla",
  			"continent": "North America",
  			"id_3char": "aia",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "naant",
  			"name": "Netherlands Antilles",
  			"continent": "North America",
  			"id_3char": "ant",
  			"flickr_link": "https://flic.kr/p/aTWPhM",
  			"flickr_author": "Pat Hawks"
  		},
  		{
  			"id": "naatg",
  			"name": "Antigua and Barbuda",
  			"continent": "North America",
  			"id_3char": "atg",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nabes",
  			"name": "Bonaire",
  			"continent": "North America",
  			"id_3char": "bes",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nabhs",
  			"name": "Bahamas",
  			"continent": "North America",
  			"id_3char": "bhs",
  			"flickr_link": "https://flic.kr/p/iSzmAU",
  			"flickr_author": "Trish Hartmann"
  		},
  		{
  			"id": "nablm",
  			"name": "Saint Barthélemy",
  			"continent": "North America",
  			"id_3char": "blm",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nablz",
  			"name": "Belize",
  			"continent": "North America",
  			"id_3char": "blz",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nabmu",
  			"name": "Bermuda",
  			"continent": "North America",
  			"id_3char": "bmu",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nabrb",
  			"name": "Barbados",
  			"continent": "North America",
  			"id_3char": "brb",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nacan",
  			"name": "Canada",
  			"continent": "North America",
  			"id_3char": "can",
  			"flickr_link": "https://flic.kr/p/59wAvs",
  			"flickr_author": "paul bica"
  		},
  		{
  			"id": "nacri",
  			"name": "Costa Rica",
  			"continent": "North America",
  			"id_3char": "cri",
  			"flickr_link": "https://flic.kr/p/6evkWP",
  			"flickr_author": "kansasphoto"
  		},
  		{
  			"id": "nacub",
  			"name": "Cuba",
  			"continent": "North America",
  			"id_3char": "cub",
  			"flickr_link": "https://flic.kr/p/6oPu7S",
  			"flickr_author": "paul bica"
  		},
  		{
  			"id": "nacuw",
  			"name": "Curaçao",
  			"continent": "North America",
  			"id_3char": "cuw",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nacym",
  			"name": "Cayman Islands",
  			"continent": "North America",
  			"id_3char": "cym",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nadma",
  			"name": "Dominica",
  			"continent": "North America",
  			"id_3char": "dma",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nadom",
  			"name": "Dominican Republic",
  			"continent": "North America",
  			"id_3char": "dom",
  			"flickr_link": "https://flic.kr/p/b9vvF2",
  			"flickr_author": "Ian Bruce"
  		},
  		{
  			"id": "nagrd",
  			"name": "Grenada",
  			"continent": "North America",
  			"id_3char": "grd",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nagrl",
  			"name": "Greenland",
  			"continent": "North America",
  			"id_3char": "grl",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nagtm",
  			"name": "Guatemala",
  			"continent": "North America",
  			"id_3char": "gtm",
  			"flickr_link": "https://flic.kr/p/4Ub2jD",
  			"flickr_author": "Dave Wilson"
  		},
  		{
  			"id": "nahnd",
  			"name": "Honduras",
  			"continent": "North America",
  			"id_3char": "hnd",
  			"flickr_link": "https://flic.kr/p/mtHJ5x",
  			"flickr_author": "Nan Palmero"
  		},
  		{
  			"id": "nahti",
  			"name": "Haiti",
  			"continent": "North America",
  			"id_3char": "hti",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "najam",
  			"name": "Jamaica",
  			"continent": "North America",
  			"id_3char": "jam",
  			"flickr_link": "https://flic.kr/p/99dUpF",
  			"flickr_author": "jgull85"
  		},
  		{
  			"id": "nakna",
  			"name": "Saint Kitts and Nevis",
  			"continent": "North America",
  			"id_3char": "kna",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nalca",
  			"name": "Saint Lucia",
  			"continent": "North America",
  			"id_3char": "lca",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "namaf",
  			"name": "Saint Maarten",
  			"continent": "North America",
  			"id_3char": "maf",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "namex",
  			"name": "Mexico",
  			"continent": "North America",
  			"id_3char": "mex",
  			"flickr_link": "https://flic.kr/p/aynAgS",
  			"flickr_author": "Carlos Ortega"
  		},
  		{
  			"id": "namsr",
  			"name": "Montserrat",
  			"continent": "North America",
  			"id_3char": "msr",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "namtq",
  			"name": "Martinique",
  			"continent": "North America",
  			"id_3char": "mtq",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nanaa",
  			"name": "Netherland Antilles and Aruba",
  			"continent": "North America",
  			"id_3char": "naa",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nanic",
  			"name": "Nicaragua",
  			"continent": "North America",
  			"id_3char": "nic",
  			"flickr_link": "https://flic.kr/p/r1f8nf",
  			"flickr_author": "Céline Colin"
  		},
  		{
  			"id": "napan",
  			"name": "Panama",
  			"continent": "North America",
  			"id_3char": "pan",
  			"flickr_link": "https://flic.kr/p/ex76Ni",
  			"flickr_author": "BORIS G"
  		},
  		{
  			"id": "napci",
  			"name": "Pacific Island (US)",
  			"continent": "North America",
  			"id_3char": "pci",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "napcz",
  			"name": "Panama Canal Zone",
  			"continent": "North America",
  			"id_3char": "pcz",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "napri",
  			"name": "Puerto Rico",
  			"continent": "North America",
  			"id_3char": "pri",
  			"flickr_link": "https://flic.kr/p/dCaHuT",
  			"flickr_author": "Trish Hartmann"
  		},
  		{
  			"id": "naslv",
  			"name": "El Salvador",
  			"continent": "North America",
  			"id_3char": "slv",
  			"flickr_link": "https://flic.kr/p/gVCZEx",
  			"flickr_author": "Cam Ventoza"
  		},
  		{
  			"id": "naspm",
  			"name": "Saint Pierre and Miquelon",
  			"continent": "North America",
  			"id_3char": "spm",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "natca",
  			"name": "Turks and Caicos Islands",
  			"continent": "North America",
  			"id_3char": "tca",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "natto",
  			"name": "Trinidad and Tobago",
  			"continent": "North America",
  			"id_3char": "tto",
  			"flickr_link": "https://flic.kr/p/ntJLad",
  			"flickr_author": "Teresa Frost"
  		},
  		{
  			"id": "naumi",
  			"name": "United States Minor Outlying Islands",
  			"continent": "North America",
  			"id_3char": "umi",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "nausa",
  			"name": "United States",
  			"continent": "North America",
  			"id_3char": "usa",
  			"flickr_link": "https://flic.kr/p/8CZkZ7",
  			"flickr_author": "Aurelien Guichard"
  		},
  		{
  			"id": "navct",
  			"name": "Saint Vincent and the Grenadines",
  			"continent": "North America",
  			"id_3char": "vct",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "navgb",
  			"name": "British Virgin Islands",
  			"continent": "North America",
  			"id_3char": "vgb",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "navir",
  			"name": "Virgin Islands",
  			"continent": "North America",
  			"id_3char": "vir",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocasm",
  			"name": "American Samoa",
  			"continent": "Oceania",
  			"id_3char": "asm",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocaus",
  			"name": "Australia",
  			"continent": "Oceania",
  			"id_3char": "aus",
  			"flickr_link": "https://flic.kr/p/4RnAGG",
  			"flickr_author": "Michael McDonough"
  		},
  		{
  			"id": "occok",
  			"name": "Cook Islands",
  			"continent": "Oceania",
  			"id_3char": "cok",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocfji",
  			"name": "Fiji",
  			"continent": "Oceania",
  			"id_3char": "fji",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocfsm",
  			"name": "Micronesia",
  			"continent": "Oceania",
  			"id_3char": "fsm",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocglp",
  			"name": "Guadeloupe",
  			"continent": "Oceania",
  			"id_3char": "glp",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocgum",
  			"name": "Guam",
  			"continent": "Oceania",
  			"id_3char": "gum",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocjtn",
  			"name": "Johnston Atoll",
  			"continent": "Oceania",
  			"id_3char": null,
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ockir",
  			"name": "Kiribati",
  			"continent": "Oceania",
  			"id_3char": "kir",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocmhl",
  			"name": "Marshall Islands",
  			"continent": "Oceania",
  			"id_3char": "mhl",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocmnp",
  			"name": "Northern Mariana Islands",
  			"continent": "Oceania",
  			"id_3char": "mnp",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocncl",
  			"name": "New Caledonia",
  			"continent": "Oceania",
  			"id_3char": "ncl",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocnfk",
  			"name": "Norfolk Island",
  			"continent": "Oceania",
  			"id_3char": "nfk",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocniu",
  			"name": "Niue",
  			"continent": "Oceania",
  			"id_3char": "niu",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocnru",
  			"name": "Nauru",
  			"continent": "Oceania",
  			"id_3char": "nru",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocnzl",
  			"name": "New Zealand",
  			"continent": "Oceania",
  			"id_3char": "nzl",
  			"flickr_link": "https://flic.kr/p/nmeWgG",
  			"flickr_author": "Andy Smith"
  		},
  		{
  			"id": "ocpcn",
  			"name": "Pitcairn Islands",
  			"continent": "Oceania",
  			"id_3char": "pcn",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocplw",
  			"name": "Palau",
  			"continent": "Oceania",
  			"id_3char": "plw",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocpng",
  			"name": "Papua New Guinea",
  			"continent": "Oceania",
  			"id_3char": "png",
  			"flickr_link": "https://flic.kr/p/nTYfKA",
  			"flickr_author": "collusion"
  		},
  		{
  			"id": "ocpyf",
  			"name": "French Polynesia",
  			"continent": "Oceania",
  			"id_3char": "pyf",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocslb",
  			"name": "Solomon Islands",
  			"continent": "Oceania",
  			"id_3char": "slb",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "octkl",
  			"name": "Tokelau",
  			"continent": "Oceania",
  			"id_3char": "tkl",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "octon",
  			"name": "Tonga",
  			"continent": "Oceania",
  			"id_3char": "ton",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "octuv",
  			"name": "Tuvalu",
  			"continent": "Oceania",
  			"id_3char": "tuv",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocvut",
  			"name": "Vanuatu",
  			"continent": "Oceania",
  			"id_3char": "vut",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocwlf",
  			"name": "Wallis and Futuna",
  			"continent": "Oceania",
  			"id_3char": "wlf",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "ocwsm",
  			"name": "Samoa",
  			"continent": "Oceania",
  			"id_3char": "wsm",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "saarg",
  			"name": "Argentina",
  			"continent": "South America",
  			"id_3char": "arg",
  			"flickr_link": "https://flic.kr/p/a1d5UZ",
  			"flickr_author": "@Doug88888"
  		},
  		{
  			"id": "sabol",
  			"name": "Bolivia",
  			"continent": "South America",
  			"id_3char": "bol",
  			"flickr_link": "https://flic.kr/p/7ff9xV",
  			"flickr_author": "Pedro Szekely"
  		},
  		{
  			"id": "sabra",
  			"name": "Brazil",
  			"continent": "South America",
  			"id_3char": "bra",
  			"flickr_link": "https://flic.kr/p/fFgpps",
  			"flickr_author": "Lima Pix"
  		},
  		{
  			"id": "sachl",
  			"name": "Chile",
  			"continent": "South America",
  			"id_3char": "chl",
  			"flickr_link": "https://flic.kr/p/g2TM9U",
  			"flickr_author": "alobos Life"
  		},
  		{
  			"id": "sacol",
  			"name": "Colombia",
  			"continent": "South America",
  			"id_3char": "col",
  			"flickr_link": "https://flic.kr/p/9LaCwi",
  			"flickr_author": "Pedro Szekely"
  		},
  		{
  			"id": "saecu",
  			"name": "Ecuador",
  			"continent": "South America",
  			"id_3char": "ecu",
  			"flickr_link": "https://flic.kr/p/73nuhJ",
  			"flickr_author": "Alex Proimos"
  		},
  		{
  			"id": "saflk",
  			"name": "Falkland Islands",
  			"continent": "South America",
  			"id_3char": "flk",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "saguf",
  			"name": "French Guiana",
  			"continent": "South America",
  			"id_3char": "guf",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "saguy",
  			"name": "Guyana",
  			"continent": "South America",
  			"id_3char": "guy",
  			"flickr_link": "https://flic.kr/p/7dYNf1",
  			"flickr_author": "Amanda Richards"
  		},
  		{
  			"id": "saper",
  			"name": "Peru",
  			"continent": "South America",
  			"id_3char": "per",
  			"flickr_link": "https://flic.kr/p/4dXWrK",
  			"flickr_author": "Pedro Szekely"
  		},
  		{
  			"id": "sapry",
  			"name": "Paraguay",
  			"continent": "South America",
  			"id_3char": "pry",
  			"flickr_link": "https://flic.kr/p/9AQFvm",
  			"flickr_author": "Arcadiuš"
  		},
  		{
  			"id": "sasur",
  			"name": "Suriname",
  			"continent": "South America",
  			"id_3char": "sur",
  			"flickr_link": null,
  			"flickr_author": null
  		},
  		{
  			"id": "saury",
  			"name": "Uruguay",
  			"continent": "South America",
  			"id_3char": "ury",
  			"flickr_link": "https://flic.kr/p/aeP3L9",
  			"flickr_author": "Ana Raquel S. Hernandes"
  		},
  		{
  			"id": "saven",
  			"name": "Venezuela",
  			"continent": "South America",
  			"id_3char": "ven",
  			"flickr_link": "https://flic.kr/p/bkS2B",
  			"flickr_author": "Daniel"
  		}
    ];
    return queryInterface.bulkInsert("Countries", oec_countries, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Countries", null, {});
  }
};
