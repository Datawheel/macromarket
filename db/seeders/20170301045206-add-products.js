'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const oec_products = [
  		{
  			"id": "01",
  			"id_hs92": null,
  			"name": "Animal Products"
  		},
  		{
  			"id": "010101",
  			"id_hs92": "0101",
  			"name": "Horses"
  		},
  		{
  			"id": "01010111",
  			"id_hs92": "010111",
  			"name": "Horses, live pure-bred breeding"
  		},
  		{
  			"id": "01010119",
  			"id_hs92": "010119",
  			"name": "Horses, live except pure-bred breeding"
  		},
  		{
  			"id": "01010120",
  			"id_hs92": "010120",
  			"name": "Asses, mules and hinnies, live"
  		},
  		{
  			"id": "010102",
  			"id_hs92": "0102",
  			"name": "Bovine"
  		},
  		{
  			"id": "01010210",
  			"id_hs92": "010210",
  			"name": "Bovine animals, live pure-bred breeding"
  		},
  		{
  			"id": "01010290",
  			"id_hs92": "010290",
  			"name": "Bovine animals, live, except pure-bred breeding"
  		},
  		{
  			"id": "010103",
  			"id_hs92": "0103",
  			"name": "Pigs"
  		},
  		{
  			"id": "01010310",
  			"id_hs92": "010310",
  			"name": "Swine, live pure-bred breeding"
  		},
  		{
  			"id": "01010391",
  			"id_hs92": "010391",
  			"name": "Swine, live except pure-bred breeding < 50 kg"
  		},
  		{
  			"id": "01010392",
  			"id_hs92": "010392",
  			"name": "Swine, live except pure-bred breeding > 50 kg"
  		},
  		{
  			"id": "010104",
  			"id_hs92": "0104",
  			"name": "Sheep and Goats"
  		},
  		{
  			"id": "01010410",
  			"id_hs92": "010410",
  			"name": "Sheep, live"
  		},
  		{
  			"id": "01010420",
  			"id_hs92": "010420",
  			"name": "Goats, live"
  		},
  		{
  			"id": "010105",
  			"id_hs92": "0105",
  			"name": "Poultry"
  		},
  		{
  			"id": "01010511",
  			"id_hs92": "010511",
  			"name": "Fowls, live domestic < 185 grams"
  		},
  		{
  			"id": "01010519",
  			"id_hs92": "010519",
  			"name": "Poultry, live except domestic fowls, < 185 grams"
  		},
  		{
  			"id": "01010591",
  			"id_hs92": "010591",
  			"name": "Fowls, live domestic > 185 grams"
  		},
  		{
  			"id": "01010599",
  			"id_hs92": "010599",
  			"name": "Poultry, live except domestic fowls, > 185 grams"
  		},
  		{
  			"id": "010106",
  			"id_hs92": "0106",
  			"name": "Other Animals"
  		},
  		{
  			"id": "01010600",
  			"id_hs92": "010600",
  			"name": "Animals, live, except farm animals"
  		},
  		{
  			"id": "010201",
  			"id_hs92": "0201",
  			"name": "Bovine Meat"
  		},
  		{
  			"id": "01020110",
  			"id_hs92": "020110",
  			"name": "Bovine carcasses and half carcasses, fresh or chilled"
  		},
  		{
  			"id": "01020120",
  			"id_hs92": "020120",
  			"name": "Bovine cuts bone in, fresh or chilled"
  		},
  		{
  			"id": "01020130",
  			"id_hs92": "020130",
  			"name": "Bovine cuts boneless, fresh or chilled"
  		},
  		{
  			"id": "010202",
  			"id_hs92": "0202",
  			"name": "Frozen Bovine Meat"
  		},
  		{
  			"id": "01020210",
  			"id_hs92": "020210",
  			"name": "Bovine carcasses and half carcasses, frozen"
  		},
  		{
  			"id": "01020220",
  			"id_hs92": "020220",
  			"name": "Bovine cuts bone in, frozen"
  		},
  		{
  			"id": "01020230",
  			"id_hs92": "020230",
  			"name": "Bovine cuts boneless, frozen"
  		},
  		{
  			"id": "010203",
  			"id_hs92": "0203",
  			"name": "Pig Meat"
  		},
  		{
  			"id": "01020311",
  			"id_hs92": "020311",
  			"name": "Swine carcasses and half carcasses, fresh or chilled"
  		},
  		{
  			"id": "01020312",
  			"id_hs92": "020312",
  			"name": "Swine hams, shoulders & cuts bone in, fresh or chille"
  		},
  		{
  			"id": "01020319",
  			"id_hs92": "020319",
  			"name": "Swine cuts, fresh or chilled, nes"
  		},
  		{
  			"id": "01020321",
  			"id_hs92": "020321",
  			"name": "Swine carcasses and half carcasses, frozen"
  		},
  		{
  			"id": "01020322",
  			"id_hs92": "020322",
  			"name": "Hams, shoulders and cuts, of swine, bone in, frozen"
  		},
  		{
  			"id": "01020329",
  			"id_hs92": "020329",
  			"name": "Swine cuts, frozen nes"
  		},
  		{
  			"id": "010204",
  			"id_hs92": "0204",
  			"name": "Sheep and Goat Meat"
  		},
  		{
  			"id": "01020410",
  			"id_hs92": "020410",
  			"name": "Lamb carcasses and half carcasses, fresh or chilled"
  		},
  		{
  			"id": "01020421",
  			"id_hs92": "020421",
  			"name": "Sheep carcasses and half carcasses, fresh or chilled"
  		},
  		{
  			"id": "01020422",
  			"id_hs92": "020422",
  			"name": "Sheep cuts, bone in, fresh or chilled"
  		},
  		{
  			"id": "01020423",
  			"id_hs92": "020423",
  			"name": "Sheep cuts, boneless, fresh or chilled"
  		},
  		{
  			"id": "01020430",
  			"id_hs92": "020430",
  			"name": "Lamb carcasses and half carcasses, frozen"
  		},
  		{
  			"id": "01020441",
  			"id_hs92": "020441",
  			"name": "Sheep carcasses and half carcasses, frozen"
  		},
  		{
  			"id": "01020442",
  			"id_hs92": "020442",
  			"name": "Sheep cuts, bone in, frozen"
  		},
  		{
  			"id": "01020443",
  			"id_hs92": "020443",
  			"name": "Sheep cuts, boneless, frozen"
  		},
  		{
  			"id": "01020450",
  			"id_hs92": "020450",
  			"name": "Goat meat, fresh, chilled or frozen"
  		},
  		{
  			"id": "010205",
  			"id_hs92": "0205",
  			"name": "Horse Meat"
  		},
  		{
  			"id": "01020500",
  			"id_hs92": "020500",
  			"name": "Horse, ass, mule, hinny meat, fresh, chilled or froze"
  		},
  		{
  			"id": "010206",
  			"id_hs92": "0206",
  			"name": "Edible Offal"
  		},
  		{
  			"id": "01020610",
  			"id_hs92": "020610",
  			"name": "Bovine edible offal, fresh or chilled"
  		},
  		{
  			"id": "01020621",
  			"id_hs92": "020621",
  			"name": "Bovine tongues, frozen"
  		},
  		{
  			"id": "01020622",
  			"id_hs92": "020622",
  			"name": "Bovine livers, frozen"
  		},
  		{
  			"id": "01020629",
  			"id_hs92": "020629",
  			"name": "Bovine edible offal, frozen except livers and tongues"
  		},
  		{
  			"id": "01020630",
  			"id_hs92": "020630",
  			"name": "Swine edible offal, fresh or chilled"
  		},
  		{
  			"id": "01020641",
  			"id_hs92": "020641",
  			"name": "Swine livers, frozen"
  		},
  		{
  			"id": "01020649",
  			"id_hs92": "020649",
  			"name": "Swine edible offal, frozen except livers"
  		},
  		{
  			"id": "01020680",
  			"id_hs92": "020680",
  			"name": "Sheep, goat, ass, mule, hinnie offal, fresh or chille"
  		},
  		{
  			"id": "01020690",
  			"id_hs92": "020690",
  			"name": "Sheep, goat, ass, mule, hinnie edible offal, frozen"
  		},
  		{
  			"id": "010207",
  			"id_hs92": "0207",
  			"name": "Poultry Meat"
  		},
  		{
  			"id": "01020710",
  			"id_hs92": "020710",
  			"name": "Poultry, domestic, whole, fresh or chilled"
  		},
  		{
  			"id": "01020721",
  			"id_hs92": "020721",
  			"name": "Fowls, domestic, whole, frozen"
  		},
  		{
  			"id": "01020722",
  			"id_hs92": "020722",
  			"name": "Turkeys, domestic, whole, frozen"
  		},
  		{
  			"id": "01020723",
  			"id_hs92": "020723",
  			"name": "Ducks, geese and guinea fowls, domestic, whole, froze"
  		},
  		{
  			"id": "01020731",
  			"id_hs92": "020731",
  			"name": "Fatty livers (geese,ducks) domestic fresh or chilled"
  		},
  		{
  			"id": "01020739",
  			"id_hs92": "020739",
  			"name": "Poultry cuts & offal, except livers, fresh or chilled"
  		},
  		{
  			"id": "01020741",
  			"id_hs92": "020741",
  			"name": "Fowl cuts & offal, domestic, except livers, frozen"
  		},
  		{
  			"id": "01020742",
  			"id_hs92": "020742",
  			"name": "Turkey cuts & offal, except livers, frozen"
  		},
  		{
  			"id": "01020743",
  			"id_hs92": "020743",
  			"name": "Duck, goose, guinea fowl cuts, offal not liver, froze"
  		},
  		{
  			"id": "01020750",
  			"id_hs92": "020750",
  			"name": "Poultry livers, domestic, frozen"
  		},
  		{
  			"id": "010208",
  			"id_hs92": "0208",
  			"name": "Other Meat"
  		},
  		{
  			"id": "01020810",
  			"id_hs92": "020810",
  			"name": "Rabbit or hare meat, offal, fresh, chilled or frozen"
  		},
  		{
  			"id": "01020820",
  			"id_hs92": "020820",
  			"name": "Frog legs, fresh, chilled or frozen"
  		},
  		{
  			"id": "01020890",
  			"id_hs92": "020890",
  			"name": "Meat and edible offal nes fresh, chilled or frozen"
  		},
  		{
  			"id": "010209",
  			"id_hs92": "0209",
  			"name": "Animal Fat"
  		},
  		{
  			"id": "01020900",
  			"id_hs92": "020900",
  			"name": "Pig and poultry fat, unrendered"
  		},
  		{
  			"id": "010210",
  			"id_hs92": "0210",
  			"name": "Preserved Meat"
  		},
  		{
  			"id": "01021011",
  			"id_hs92": "021011",
  			"name": "Hams and shoulders, swine, salted, dried or smoked"
  		},
  		{
  			"id": "01021012",
  			"id_hs92": "021012",
  			"name": "Bellies (streaky) of swine, salted, dried or smoked"
  		},
  		{
  			"id": "01021019",
  			"id_hs92": "021019",
  			"name": "Swine meat, salted/dried/smoked not ham/shoulder/bell"
  		},
  		{
  			"id": "01021020",
  			"id_hs92": "021020",
  			"name": "Bovine meat salted, dried or smoked"
  		},
  		{
  			"id": "01021090",
  			"id_hs92": "021090",
  			"name": "Meat and edible meat offal cured, flours, meals nes"
  		},
  		{
  			"id": "010301",
  			"id_hs92": "0301",
  			"name": "Live Fish"
  		},
  		{
  			"id": "01030110",
  			"id_hs92": "030110",
  			"name": "Ornamental fish, live"
  		},
  		{
  			"id": "01030191",
  			"id_hs92": "030191",
  			"name": "Trout, live"
  		},
  		{
  			"id": "01030192",
  			"id_hs92": "030192",
  			"name": "Eels, live"
  		},
  		{
  			"id": "01030193",
  			"id_hs92": "030193",
  			"name": "Carp, live"
  		},
  		{
  			"id": "01030199",
  			"id_hs92": "030199",
  			"name": "Fish live, except trout, eel or carp"
  		},
  		{
  			"id": "010302",
  			"id_hs92": "0302",
  			"name": "Non-fillet Fresh Fish"
  		},
  		{
  			"id": "01030211",
  			"id_hs92": "030211",
  			"name": "Trout, fresh or chilled, whole"
  		},
  		{
  			"id": "01030212",
  			"id_hs92": "030212",
  			"name": "Salmon fresh or chilled, whole"
  		},
  		{
  			"id": "01030219",
  			"id_hs92": "030219",
  			"name": "Salmonidae, not trout or salmon,fresh or chilled whol"
  		},
  		{
  			"id": "01030221",
  			"id_hs92": "030221",
  			"name": "Halibut, fresh or chilled, whole"
  		},
  		{
  			"id": "01030222",
  			"id_hs92": "030222",
  			"name": "Plaice, fresh or chilled, whole"
  		},
  		{
  			"id": "01030223",
  			"id_hs92": "030223",
  			"name": "Sole, fresh or chilled, whole"
  		},
  		{
  			"id": "01030229",
  			"id_hs92": "030229",
  			"name": "Flatfish, fresh/chilled not halibut/plaice/sole, whol"
  		},
  		{
  			"id": "01030231",
  			"id_hs92": "030231",
  			"name": "Tuna(albacore,longfin) fresh or chilled, whole"
  		},
  		{
  			"id": "01030232",
  			"id_hs92": "030232",
  			"name": "Tuna(yellowfin) fresh or chilled, whole"
  		},
  		{
  			"id": "01030233",
  			"id_hs92": "030233",
  			"name": "Skipjack,stripe-belly bonito, fresh or chilled, whole"
  		},
  		{
  			"id": "01030239",
  			"id_hs92": "030239",
  			"name": "Tuna nes, fresh or chilled, whole"
  		},
  		{
  			"id": "01030240",
  			"id_hs92": "030240",
  			"name": "Herring, fresh or chilled, whole"
  		},
  		{
  			"id": "01030250",
  			"id_hs92": "030250",
  			"name": "Cod, fresh or chilled, whole"
  		},
  		{
  			"id": "01030261",
  			"id_hs92": "030261",
  			"name": "Sardines,brisling,sprats, fresh or chilled, whole"
  		},
  		{
  			"id": "01030262",
  			"id_hs92": "030262",
  			"name": "Haddock, fresh or chilled, whole"
  		},
  		{
  			"id": "01030263",
  			"id_hs92": "030263",
  			"name": "Coalfish, fresh or chilled, whole"
  		},
  		{
  			"id": "01030264",
  			"id_hs92": "030264",
  			"name": "Mackerel, fresh or chilled, whole"
  		},
  		{
  			"id": "01030265",
  			"id_hs92": "030265",
  			"name": "Dogfish and other sharks, fresh or chilled, whole"
  		},
  		{
  			"id": "01030266",
  			"id_hs92": "030266",
  			"name": "Eels, fresh or chilled, whole"
  		},
  		{
  			"id": "01030269",
  			"id_hs92": "030269",
  			"name": "Fish nes, fresh or chilled, whole"
  		},
  		{
  			"id": "01030270",
  			"id_hs92": "030270",
  			"name": "Fish livers and roes, fresh or chilled"
  		},
  		{
  			"id": "010303",
  			"id_hs92": "0303",
  			"name": "Non-fillet Frozen Fish"
  		},
  		{
  			"id": "01030310",
  			"id_hs92": "030310",
  			"name": "Salmon, Pacific, frozen, whole"
  		},
  		{
  			"id": "01030321",
  			"id_hs92": "030321",
  			"name": "Trout, frozen, whole"
  		},
  		{
  			"id": "01030322",
  			"id_hs92": "030322",
  			"name": "Salmon Atlantic or Danube, frozen, whole"
  		},
  		{
  			"id": "01030329",
  			"id_hs92": "030329",
  			"name": "Salmonidae, nes,frozen, whole"
  		},
  		{
  			"id": "01030331",
  			"id_hs92": "030331",
  			"name": "Halibut, frozen, whole"
  		},
  		{
  			"id": "01030332",
  			"id_hs92": "030332",
  			"name": "Plaice, frozen, whole"
  		},
  		{
  			"id": "01030333",
  			"id_hs92": "030333",
  			"name": "Sole, frozen, whole"
  		},
  		{
  			"id": "01030339",
  			"id_hs92": "030339",
  			"name": "Flatfish except halibut, plaice or sole, frozen, whol"
  		},
  		{
  			"id": "01030341",
  			"id_hs92": "030341",
  			"name": "Tunas(albacore,longfin), frozen, whole"
  		},
  		{
  			"id": "01030342",
  			"id_hs92": "030342",
  			"name": "Tunas(yellowfin) frozen, whole"
  		},
  		{
  			"id": "01030343",
  			"id_hs92": "030343",
  			"name": "Skipjack,stripe-bellied bonito, frozen, whole"
  		},
  		{
  			"id": "01030349",
  			"id_hs92": "030349",
  			"name": "Tunas nes, frozen, whole"
  		},
  		{
  			"id": "01030350",
  			"id_hs92": "030350",
  			"name": "Herrings, frozen, whole"
  		},
  		{
  			"id": "01030360",
  			"id_hs92": "030360",
  			"name": "Cod, frozen, whole"
  		},
  		{
  			"id": "01030371",
  			"id_hs92": "030371",
  			"name": "Sardines,brisling,sprats, frozen, whole"
  		},
  		{
  			"id": "01030372",
  			"id_hs92": "030372",
  			"name": "Haddock, frozen, whole"
  		},
  		{
  			"id": "01030373",
  			"id_hs92": "030373",
  			"name": "Coalfish, frozen, whole"
  		},
  		{
  			"id": "01030374",
  			"id_hs92": "030374",
  			"name": "Mackerel, frozen, whole"
  		},
  		{
  			"id": "01030375",
  			"id_hs92": "030375",
  			"name": "Dogfish and other sharks, frozen, whole"
  		},
  		{
  			"id": "01030376",
  			"id_hs92": "030376",
  			"name": "Eels, frozen, whole"
  		},
  		{
  			"id": "01030377",
  			"id_hs92": "030377",
  			"name": "Sea bass, frozen, whole"
  		},
  		{
  			"id": "01030378",
  			"id_hs92": "030378",
  			"name": "Hake, frozen, whole"
  		},
  		{
  			"id": "01030379",
  			"id_hs92": "030379",
  			"name": "Fish nes, frozen, whole"
  		},
  		{
  			"id": "01030380",
  			"id_hs92": "030380",
  			"name": "Fish livers and roes, frozen"
  		},
  		{
  			"id": "010304",
  			"id_hs92": "0304",
  			"name": "Fish Fillets"
  		},
  		{
  			"id": "01030410",
  			"id_hs92": "030410",
  			"name": "Fish fillet or meat, fresh or chilled, not liver, roe"
  		},
  		{
  			"id": "01030420",
  			"id_hs92": "030420",
  			"name": "Fish fillets, frozen"
  		},
  		{
  			"id": "01030490",
  			"id_hs92": "030490",
  			"name": "Fish meat & mince, except liver, roe & fillets, froze"
  		},
  		{
  			"id": "010305",
  			"id_hs92": "0305",
  			"name": "Processed Fish"
  		},
  		{
  			"id": "01030510",
  			"id_hs92": "030510",
  			"name": "Flours, meals & pellets of fish for human consumption"
  		},
  		{
  			"id": "01030520",
  			"id_hs92": "030520",
  			"name": "Livers and roes, dried, smoked, salted or in brine"
  		},
  		{
  			"id": "01030530",
  			"id_hs92": "030530",
  			"name": "Fish fillets, dried, salted or in brine, not smoked"
  		},
  		{
  			"id": "01030541",
  			"id_hs92": "030541",
  			"name": "Salmon, smoked, including fillets"
  		},
  		{
  			"id": "01030542",
  			"id_hs92": "030542",
  			"name": "Herrings, smoked, including fillets"
  		},
  		{
  			"id": "01030549",
  			"id_hs92": "030549",
  			"name": "Smoked fish & fillets other than herrings or salmon"
  		},
  		{
  			"id": "01030551",
  			"id_hs92": "030551",
  			"name": "Cod dried, whether or not salted but not smoked"
  		},
  		{
  			"id": "01030559",
  			"id_hs92": "030559",
  			"name": "Dried fish, other than cod, not smoked"
  		},
  		{
  			"id": "01030561",
  			"id_hs92": "030561",
  			"name": "Herrings, salted or in brine, not dried or smoked"
  		},
  		{
  			"id": "01030562",
  			"id_hs92": "030562",
  			"name": "Cod, salted or in brine, not dried or smoked"
  		},
  		{
  			"id": "01030563",
  			"id_hs92": "030563",
  			"name": "Anchovies, salted or in brine, not dried or smoked"
  		},
  		{
  			"id": "01030569",
  			"id_hs92": "030569",
  			"name": "Fish nes, salted or in brine, not dried or smoked"
  		},
  		{
  			"id": "010306",
  			"id_hs92": "0306",
  			"name": "Crustaceans"
  		},
  		{
  			"id": "01030611",
  			"id_hs92": "030611",
  			"name": "Rock lobster and other sea crawfish, frozen"
  		},
  		{
  			"id": "01030612",
  			"id_hs92": "030612",
  			"name": "Lobsters (Homarus) frozen"
  		},
  		{
  			"id": "01030613",
  			"id_hs92": "030613",
  			"name": "Shrimps and prawns, frozen"
  		},
  		{
  			"id": "01030614",
  			"id_hs92": "030614",
  			"name": "Crabs, frozen"
  		},
  		{
  			"id": "01030619",
  			"id_hs92": "030619",
  			"name": "Crustaceans nes, frozen,"
  		},
  		{
  			"id": "01030621",
  			"id_hs92": "030621",
  			"name": "Rock lobster and other sea crawfish not frozen"
  		},
  		{
  			"id": "01030622",
  			"id_hs92": "030622",
  			"name": "Lobsters (Homarus), not frozen"
  		},
  		{
  			"id": "01030623",
  			"id_hs92": "030623",
  			"name": "Shrimps and prawns, not frozen"
  		},
  		{
  			"id": "01030624",
  			"id_hs92": "030624",
  			"name": "Crabs, not frozen"
  		},
  		{
  			"id": "01030629",
  			"id_hs92": "030629",
  			"name": "Crustaceans nes, not frozen"
  		},
  		{
  			"id": "010307",
  			"id_hs92": "0307",
  			"name": "Molluscs"
  		},
  		{
  			"id": "01030710",
  			"id_hs92": "030710",
  			"name": "Oysters"
  		},
  		{
  			"id": "01030721",
  			"id_hs92": "030721",
  			"name": "Scallops, live, fresh or chilled"
  		},
  		{
  			"id": "01030729",
  			"id_hs92": "030729",
  			"name": "Scallops other than live, fresh or chilled"
  		},
  		{
  			"id": "01030731",
  			"id_hs92": "030731",
  			"name": "Mussels, shelled or not, live, fresh or chilled"
  		},
  		{
  			"id": "01030739",
  			"id_hs92": "030739",
  			"name": "Mussels, frozen, dried, salted or in brine"
  		},
  		{
  			"id": "01030741",
  			"id_hs92": "030741",
  			"name": "Cuttle fish, squid, live, fresh or chilled"
  		},
  		{
  			"id": "01030749",
  			"id_hs92": "030749",
  			"name": "Cuttle fish, squid, frozen, dried, salted or in brine"
  		},
  		{
  			"id": "01030751",
  			"id_hs92": "030751",
  			"name": "Octopus, live, fresh or chilled"
  		},
  		{
  			"id": "01030759",
  			"id_hs92": "030759",
  			"name": "Octopus, frozen, dried, salted or in brine"
  		},
  		{
  			"id": "01030760",
  			"id_hs92": "030760",
  			"name": "Snails, edible (except sea snails)"
  		},
  		{
  			"id": "01030791",
  			"id_hs92": "030791",
  			"name": "Aquatic invertebrates nes, fresh or chilled, live"
  		},
  		{
  			"id": "01030799",
  			"id_hs92": "030799",
  			"name": "Aquatic invertebrates nes, frozen or preserved"
  		},
  		{
  			"id": "010401",
  			"id_hs92": "0401",
  			"name": "Milk"
  		},
  		{
  			"id": "01040110",
  			"id_hs92": "040110",
  			"name": "Milk not concentrated nor sweetened < 1% fat"
  		},
  		{
  			"id": "01040120",
  			"id_hs92": "040120",
  			"name": "Milk not concentrated nor sweetened 1-6% fat"
  		},
  		{
  			"id": "01040130",
  			"id_hs92": "040130",
  			"name": "Milk and cream not concentrated nor sweetened < 6% fa"
  		},
  		{
  			"id": "010402",
  			"id_hs92": "0402",
  			"name": "Concentrated Milk"
  		},
  		{
  			"id": "01040210",
  			"id_hs92": "040210",
  			"name": "Milk powder < 1.5% fat"
  		},
  		{
  			"id": "01040221",
  			"id_hs92": "040221",
  			"name": "Milk and cream powder unsweetened < 1.5% fat"
  		},
  		{
  			"id": "01040229",
  			"id_hs92": "040229",
  			"name": "Milk and cream powder sweetened < 1.5% fat"
  		},
  		{
  			"id": "01040291",
  			"id_hs92": "040291",
  			"name": "Milk and cream unsweetened, concentrated"
  		},
  		{
  			"id": "01040299",
  			"id_hs92": "040299",
  			"name": "Milk and cream nes sweetened or concentrated"
  		},
  		{
  			"id": "010403",
  			"id_hs92": "0403",
  			"name": "Fermented Milk Products"
  		},
  		{
  			"id": "01040310",
  			"id_hs92": "040310",
  			"name": "Yogurt"
  		},
  		{
  			"id": "01040390",
  			"id_hs92": "040390",
  			"name": "Buttermilk, curdled milk, cream, kephir, etc."
  		},
  		{
  			"id": "010404",
  			"id_hs92": "0404",
  			"name": "Whey"
  		},
  		{
  			"id": "01040410",
  			"id_hs92": "040410",
  			"name": "Whey"
  		},
  		{
  			"id": "01040490",
  			"id_hs92": "040490",
  			"name": "Natural milk products nes"
  		},
  		{
  			"id": "010405",
  			"id_hs92": "0405",
  			"name": "Butter"
  		},
  		{
  			"id": "01040500",
  			"id_hs92": "040500",
  			"name": "Butter and other fats and oils derived from milk"
  		},
  		{
  			"id": "010406",
  			"id_hs92": "0406",
  			"name": "Cheese"
  		},
  		{
  			"id": "01040610",
  			"id_hs92": "040610",
  			"name": "Fresh cheese, unfermented whey cheese, curd"
  		},
  		{
  			"id": "01040620",
  			"id_hs92": "040620",
  			"name": "Cheese, grated or powdered, of all kinds"
  		},
  		{
  			"id": "01040630",
  			"id_hs92": "040630",
  			"name": "Cheese processed, not grated or powdered"
  		},
  		{
  			"id": "01040640",
  			"id_hs92": "040640",
  			"name": "Cheese, blue-veined"
  		},
  		{
  			"id": "01040690",
  			"id_hs92": "040690",
  			"name": "Cheese except fresh, grated, processed or blue-veined"
  		},
  		{
  			"id": "010407",
  			"id_hs92": "0407",
  			"name": "Eggs"
  		},
  		{
  			"id": "01040700",
  			"id_hs92": "040700",
  			"name": "Birds eggs, in shell, fresh, preserved or cooked"
  		},
  		{
  			"id": "010408",
  			"id_hs92": "0408",
  			"name": "Processed Egg Products"
  		},
  		{
  			"id": "01040811",
  			"id_hs92": "040811",
  			"name": "Egg yolks dried"
  		},
  		{
  			"id": "01040819",
  			"id_hs92": "040819",
  			"name": "Egg yolks except dried"
  		},
  		{
  			"id": "01040891",
  			"id_hs92": "040891",
  			"name": "Eggs, bird, not in shell, dried"
  		},
  		{
  			"id": "01040899",
  			"id_hs92": "040899",
  			"name": "Eggs, bird, not in shell not dried"
  		},
  		{
  			"id": "010409",
  			"id_hs92": "0409",
  			"name": "Honey"
  		},
  		{
  			"id": "01040900",
  			"id_hs92": "040900",
  			"name": "Honey, natural"
  		},
  		{
  			"id": "010410",
  			"id_hs92": "0410",
  			"name": "Other Edible Animal Products"
  		},
  		{
  			"id": "01041000",
  			"id_hs92": "041000",
  			"name": "Edible products of animal origin nes"
  		},
  		{
  			"id": "010501",
  			"id_hs92": "0501",
  			"name": "Human Hair"
  		},
  		{
  			"id": "01050100",
  			"id_hs92": "050100",
  			"name": "Hair, human, unworked, waste of human hair"
  		},
  		{
  			"id": "010502",
  			"id_hs92": "0502",
  			"name": "Pig Hair"
  		},
  		{
  			"id": "01050210",
  			"id_hs92": "050210",
  			"name": "Bristles, hair & waste thereof of pigs, hogs or boars"
  		},
  		{
  			"id": "01050290",
  			"id_hs92": "050290",
  			"name": "Hair & waste of badger and of other brush making hair"
  		},
  		{
  			"id": "010503",
  			"id_hs92": "0503",
  			"name": "Horse Hair"
  		},
  		{
  			"id": "01050300",
  			"id_hs92": "050300",
  			"name": "Horsehair, waste"
  		},
  		{
  			"id": "010504",
  			"id_hs92": "0504",
  			"name": "Animal Organs"
  		},
  		{
  			"id": "01050400",
  			"id_hs92": "050400",
  			"name": "Guts, bladders and stomachs of animals except fish"
  		},
  		{
  			"id": "010505",
  			"id_hs92": "0505",
  			"name": "Bird Feathers and Skins"
  		},
  		{
  			"id": "01050510",
  			"id_hs92": "050510",
  			"name": "Feathers and down used for stuffing"
  		},
  		{
  			"id": "01050590",
  			"id_hs92": "050590",
  			"name": "Feathers, down, etc. of birds, except for stuffing"
  		},
  		{
  			"id": "010506",
  			"id_hs92": "0506",
  			"name": "Processed Bones"
  		},
  		{
  			"id": "01050610",
  			"id_hs92": "050610",
  			"name": "Ossein and bones treated with acid"
  		},
  		{
  			"id": "01050690",
  			"id_hs92": "050690",
  			"name": "Bones and horn-cores unworked or simply worked nes"
  		},
  		{
  			"id": "010507",
  			"id_hs92": "0507",
  			"name": "Raw Bones"
  		},
  		{
  			"id": "01050710",
  			"id_hs92": "050710",
  			"name": "Ivory, unworked or simply prepared, powder and waste"
  		},
  		{
  			"id": "01050790",
  			"id_hs92": "050790",
  			"name": "Whalebone, horns, etc unworked or simply prepared nes"
  		},
  		{
  			"id": "010508",
  			"id_hs92": "0508",
  			"name": "Coral and Shells"
  		},
  		{
  			"id": "01050800",
  			"id_hs92": "050800",
  			"name": "Coral,seashell,cuttle bone,etc, unworked,powder,waste"
  		},
  		{
  			"id": "010509",
  			"id_hs92": "0509",
  			"name": "Sponges"
  		},
  		{
  			"id": "01050900",
  			"id_hs92": "050900",
  			"name": "Sponges, natural, of animal origin"
  		},
  		{
  			"id": "010510",
  			"id_hs92": "0510",
  			"name": "Pharmaceutical Animal Products"
  		},
  		{
  			"id": "01051000",
  			"id_hs92": "051000",
  			"name": "Ambergris, civet, musk, etc for pharmaceutical use"
  		},
  		{
  			"id": "010511",
  			"id_hs92": "0511",
  			"name": "Other Inedible Animal Products"
  		},
  		{
  			"id": "01051110",
  			"id_hs92": "051110",
  			"name": "Semen bovine"
  		},
  		{
  			"id": "01051191",
  			"id_hs92": "051191",
  			"name": "Fish, shellfish and crustaceans (non-food)"
  		},
  		{
  			"id": "01051199",
  			"id_hs92": "051199",
  			"name": "Animal products and domestic animal carcass (non-food"
  		},
  		{
  			"id": "02",
  			"id_hs92": null,
  			"name": "Vegetable Products"
  		},
  		{
  			"id": "020601",
  			"id_hs92": "0601",
  			"name": "Bulbs and Roots"
  		},
  		{
  			"id": "02060110",
  			"id_hs92": "060110",
  			"name": "Bulbs, tubers, corms, crowns and rhizomes, dormant"
  		},
  		{
  			"id": "02060120",
  			"id_hs92": "060120",
  			"name": "Bulbs, tubers, corms etc in growth, chicory plants"
  		},
  		{
  			"id": "020602",
  			"id_hs92": "0602",
  			"name": "Other Live Plants"
  		},
  		{
  			"id": "02060210",
  			"id_hs92": "060210",
  			"name": "Cuttings and slips, not rooted"
  		},
  		{
  			"id": "02060220",
  			"id_hs92": "060220",
  			"name": "Trees, edible fruit or nut, shrubs and bushes"
  		},
  		{
  			"id": "02060230",
  			"id_hs92": "060230",
  			"name": "Rhododendrons and azaleas"
  		},
  		{
  			"id": "02060240",
  			"id_hs92": "060240",
  			"name": "Roses"
  		},
  		{
  			"id": "02060291",
  			"id_hs92": "060291",
  			"name": "Mushroom spawn"
  		},
  		{
  			"id": "02060299",
  			"id_hs92": "060299",
  			"name": "Plants, live (including their roots),nes"
  		},
  		{
  			"id": "020603",
  			"id_hs92": "0603",
  			"name": "Cut Flowers"
  		},
  		{
  			"id": "02060310",
  			"id_hs92": "060310",
  			"name": "Cut flowers and flower buds for bouquets, etc., fresh"
  		},
  		{
  			"id": "02060390",
  			"id_hs92": "060390",
  			"name": "Cut flowers and flower buds for bouquets, dried, etc."
  		},
  		{
  			"id": "020604",
  			"id_hs92": "0604",
  			"name": "Foliage"
  		},
  		{
  			"id": "02060410",
  			"id_hs92": "060410",
  			"name": "Mosses and lichens for bouquets, ornamental purposes"
  		},
  		{
  			"id": "02060491",
  			"id_hs92": "060491",
  			"name": "Foliage,branches, for bouquets, etc. - fresh"
  		},
  		{
  			"id": "02060499",
  			"id_hs92": "060499",
  			"name": "Foliage,branches, for bouquets, etc. - except fresh"
  		},
  		{
  			"id": "020701",
  			"id_hs92": "0701",
  			"name": "Potatoes"
  		},
  		{
  			"id": "02070110",
  			"id_hs92": "070110",
  			"name": "Potatoes seed, fresh or chilled"
  		},
  		{
  			"id": "02070190",
  			"id_hs92": "070190",
  			"name": "Potatoes, fresh or chilled except seed"
  		},
  		{
  			"id": "020702",
  			"id_hs92": "0702",
  			"name": "Tomatoes"
  		},
  		{
  			"id": "02070200",
  			"id_hs92": "070200",
  			"name": "Tomatoes, fresh or chilled"
  		},
  		{
  			"id": "020703",
  			"id_hs92": "0703",
  			"name": "Onions"
  		},
  		{
  			"id": "02070310",
  			"id_hs92": "070310",
  			"name": "Onions and shallots, fresh or chilled"
  		},
  		{
  			"id": "02070320",
  			"id_hs92": "070320",
  			"name": "Garlic, fresh or chilled"
  		},
  		{
  			"id": "02070390",
  			"id_hs92": "070390",
  			"name": "Leeks & other alliaceous vegetables, fresh or chilled"
  		},
  		{
  			"id": "020704",
  			"id_hs92": "0704",
  			"name": "Cabbages"
  		},
  		{
  			"id": "02070410",
  			"id_hs92": "070410",
  			"name": "Cauliflowers and headed broccoli, fresh or chilled"
  		},
  		{
  			"id": "02070420",
  			"id_hs92": "070420",
  			"name": "Brussels sprouts, fresh or chilled"
  		},
  		{
  			"id": "02070490",
  			"id_hs92": "070490",
  			"name": "Edible brassicas nes, fresh or chilled"
  		},
  		{
  			"id": "020705",
  			"id_hs92": "0705",
  			"name": "Lettuce"
  		},
  		{
  			"id": "02070511",
  			"id_hs92": "070511",
  			"name": "Cabbage lettuce (head lettuce) fresh or chilled"
  		},
  		{
  			"id": "02070519",
  			"id_hs92": "070519",
  			"name": "Lettuce, fresh or chilled except cabbage lettuce"
  		},
  		{
  			"id": "02070521",
  			"id_hs92": "070521",
  			"name": "Witloof chicory, fresh or chilled"
  		},
  		{
  			"id": "02070529",
  			"id_hs92": "070529",
  			"name": "Chicory, fresh or chilled, except witloof"
  		},
  		{
  			"id": "020706",
  			"id_hs92": "0706",
  			"name": "Root Vegetables"
  		},
  		{
  			"id": "02070610",
  			"id_hs92": "070610",
  			"name": "Carrots and turnips, fresh or chilled"
  		},
  		{
  			"id": "02070690",
  			"id_hs92": "070690",
  			"name": "Beetroot,salsify,celeriac,radishes etc. fresh, chille"
  		},
  		{
  			"id": "020707",
  			"id_hs92": "0707",
  			"name": "Cucumbers"
  		},
  		{
  			"id": "02070700",
  			"id_hs92": "070700",
  			"name": "Cucumbers and gherkins, fresh or chilled"
  		},
  		{
  			"id": "020708",
  			"id_hs92": "0708",
  			"name": "Legumes"
  		},
  		{
  			"id": "02070810",
  			"id_hs92": "070810",
  			"name": "Peas, shelled or unshelled, fresh or chilled"
  		},
  		{
  			"id": "02070820",
  			"id_hs92": "070820",
  			"name": "Beans, shelled or unshelled, fresh or chilled"
  		},
  		{
  			"id": "02070890",
  			"id_hs92": "070890",
  			"name": "Legumes except peas & beans, fresh or chilled"
  		},
  		{
  			"id": "020709",
  			"id_hs92": "0709",
  			"name": "Other Vegetables"
  		},
  		{
  			"id": "02070910",
  			"id_hs92": "070910",
  			"name": "Globe artichokes, fresh or chilled"
  		},
  		{
  			"id": "02070920",
  			"id_hs92": "070920",
  			"name": "Asparagus, fresh or chilled"
  		},
  		{
  			"id": "02070930",
  			"id_hs92": "070930",
  			"name": "Aubergines(egg-plants), fresh or chilled"
  		},
  		{
  			"id": "02070940",
  			"id_hs92": "070940",
  			"name": "Celery, other than celeriac, fresh or chilled"
  		},
  		{
  			"id": "02070951",
  			"id_hs92": "070951",
  			"name": "Mushrooms, fresh or chilled"
  		},
  		{
  			"id": "02070952",
  			"id_hs92": "070952",
  			"name": "Truffles, fresh or chilled"
  		},
  		{
  			"id": "02070960",
  			"id_hs92": "070960",
  			"name": "Peppers (Capsicum, Pimenta) fresh or chilled"
  		},
  		{
  			"id": "02070970",
  			"id_hs92": "070970",
  			"name": "Spinach fresh or chilled"
  		},
  		{
  			"id": "02070990",
  			"id_hs92": "070990",
  			"name": "Vegetables, fresh or chilled nes"
  		},
  		{
  			"id": "020710",
  			"id_hs92": "0710",
  			"name": "Frozen Vegetables"
  		},
  		{
  			"id": "02071010",
  			"id_hs92": "071010",
  			"name": "Potatoes, frozen, uncooked steamed or boiled"
  		},
  		{
  			"id": "02071021",
  			"id_hs92": "071021",
  			"name": "Peas, frozen, uncooked steamed or boiled"
  		},
  		{
  			"id": "02071022",
  			"id_hs92": "071022",
  			"name": "Beans, frozen, uncooked steamed or boiled"
  		},
  		{
  			"id": "02071029",
  			"id_hs92": "071029",
  			"name": "Legumes, except peas and beans, frozen"
  		},
  		{
  			"id": "02071030",
  			"id_hs92": "071030",
  			"name": "Spinach, frozen, uncooked steamed or boiled"
  		},
  		{
  			"id": "02071040",
  			"id_hs92": "071040",
  			"name": "Sweet corn, frozen, uncooked steamed or boiled"
  		},
  		{
  			"id": "02071080",
  			"id_hs92": "071080",
  			"name": "Vegetables, frozen nes, uncooked steamed or boiled"
  		},
  		{
  			"id": "02071090",
  			"id_hs92": "071090",
  			"name": "Frozen vegetable mixtures, uncooked, boiled or steame"
  		},
  		{
  			"id": "020711",
  			"id_hs92": "0711",
  			"name": "Preserved Vegetables"
  		},
  		{
  			"id": "02071110",
  			"id_hs92": "071110",
  			"name": "Onions, provisionally preserved"
  		},
  		{
  			"id": "02071120",
  			"id_hs92": "071120",
  			"name": "Olives, provisionally preserved"
  		},
  		{
  			"id": "02071130",
  			"id_hs92": "071130",
  			"name": "Capers, provisionally preserved"
  		},
  		{
  			"id": "02071140",
  			"id_hs92": "071140",
  			"name": "Cucumbers and gherkins provisionally preserved"
  		},
  		{
  			"id": "02071190",
  			"id_hs92": "071190",
  			"name": "Vegetables nes and mixtures provisionally preserved"
  		},
  		{
  			"id": "020712",
  			"id_hs92": "0712",
  			"name": "Dried Vegetables"
  		},
  		{
  			"id": "02071210",
  			"id_hs92": "071210",
  			"name": "Potatoes, dried, not further prepared"
  		},
  		{
  			"id": "02071220",
  			"id_hs92": "071220",
  			"name": "Onions, dried, not further prepared"
  		},
  		{
  			"id": "02071230",
  			"id_hs92": "071230",
  			"name": "Mushrooms and truffles, dried, not further prepared"
  		},
  		{
  			"id": "02071290",
  			"id_hs92": "071290",
  			"name": "Vegetables nes & mixtures, dried, not further prepare"
  		},
  		{
  			"id": "020713",
  			"id_hs92": "0713",
  			"name": "Dried Legumes"
  		},
  		{
  			"id": "02071310",
  			"id_hs92": "071310",
  			"name": "Peas dried, shelled"
  		},
  		{
  			"id": "02071320",
  			"id_hs92": "071320",
  			"name": "Chickpeas, dried, shelled"
  		},
  		{
  			"id": "02071331",
  			"id_hs92": "071331",
  			"name": "Urd,mung,black or green gram beans dried shelled"
  		},
  		{
  			"id": "02071332",
  			"id_hs92": "071332",
  			"name": "Beans, small red (Adzuki) dried, shelled"
  		},
  		{
  			"id": "02071333",
  			"id_hs92": "071333",
  			"name": "Kidney beans and white pea beans dried shelled"
  		},
  		{
  			"id": "02071339",
  			"id_hs92": "071339",
  			"name": "Beans dried, shelled, nes"
  		},
  		{
  			"id": "02071340",
  			"id_hs92": "071340",
  			"name": "Lentils dried, shelled"
  		},
  		{
  			"id": "02071350",
  			"id_hs92": "071350",
  			"name": "Broad beans and horse beans dried, shelled"
  		},
  		{
  			"id": "02071390",
  			"id_hs92": "071390",
  			"name": "Leguminous vegetables dried, shelled"
  		},
  		{
  			"id": "020714",
  			"id_hs92": "0714",
  			"name": "Cassava"
  		},
  		{
  			"id": "02071410",
  			"id_hs92": "071410",
  			"name": "Manioc (cassava), fresh or dried"
  		},
  		{
  			"id": "02071420",
  			"id_hs92": "071420",
  			"name": "Sweet potatoes, fresh or dried"
  		},
  		{
  			"id": "02071490",
  			"id_hs92": "071490",
  			"name": "Arrowroot, salep, etc fresh or dried and sago pith"
  		},
  		{
  			"id": "020801",
  			"id_hs92": "0801",
  			"name": "Coconuts, Brazil Nuts, and Cashews"
  		},
  		{
  			"id": "02080110",
  			"id_hs92": "080110",
  			"name": "Coconuts, fresh or dried"
  		},
  		{
  			"id": "02080120",
  			"id_hs92": "080120",
  			"name": "Brazil nuts, fresh or dried"
  		},
  		{
  			"id": "02080130",
  			"id_hs92": "080130",
  			"name": "Cashew nuts, fresh or dried"
  		},
  		{
  			"id": "020802",
  			"id_hs92": "0802",
  			"name": "Other Nuts"
  		},
  		{
  			"id": "02080211",
  			"id_hs92": "080211",
  			"name": "Almonds in shell fresh or dried"
  		},
  		{
  			"id": "02080212",
  			"id_hs92": "080212",
  			"name": "Almonds,fresh or dried, shelled"
  		},
  		{
  			"id": "02080221",
  			"id_hs92": "080221",
  			"name": "Hazelnuts and filberts in shell fresh or dried"
  		},
  		{
  			"id": "02080222",
  			"id_hs92": "080222",
  			"name": "Hazelnuts and filberts, fresh or dried, shelled"
  		},
  		{
  			"id": "02080231",
  			"id_hs92": "080231",
  			"name": "Walnuts in shell, fresh or dried"
  		},
  		{
  			"id": "02080232",
  			"id_hs92": "080232",
  			"name": "Walnuts, fresh or dried, shelled"
  		},
  		{
  			"id": "02080240",
  			"id_hs92": "080240",
  			"name": "Chestnuts, fresh or dried"
  		},
  		{
  			"id": "02080250",
  			"id_hs92": "080250",
  			"name": "Pistachios, fresh or dried"
  		},
  		{
  			"id": "02080290",
  			"id_hs92": "080290",
  			"name": "Nuts edible, fresh or dried, nes"
  		},
  		{
  			"id": "020803",
  			"id_hs92": "0803",
  			"name": "Bananas"
  		},
  		{
  			"id": "02080300",
  			"id_hs92": "080300",
  			"name": "Bananas, including plantains, fresh or dried"
  		},
  		{
  			"id": "020804",
  			"id_hs92": "0804",
  			"name": "Tropical Fruits"
  		},
  		{
  			"id": "02080410",
  			"id_hs92": "080410",
  			"name": "Dates, fresh or dried"
  		},
  		{
  			"id": "02080420",
  			"id_hs92": "080420",
  			"name": "Figs, fresh or dried"
  		},
  		{
  			"id": "02080430",
  			"id_hs92": "080430",
  			"name": "Pineapples, fresh or dried"
  		},
  		{
  			"id": "02080440",
  			"id_hs92": "080440",
  			"name": "Avocados, fresh or dried"
  		},
  		{
  			"id": "02080450",
  			"id_hs92": "080450",
  			"name": "Guavas, mangoes and mangosteens, fresh or dried"
  		},
  		{
  			"id": "020805",
  			"id_hs92": "0805",
  			"name": "Citrus"
  		},
  		{
  			"id": "02080510",
  			"id_hs92": "080510",
  			"name": "Oranges, fresh or dried"
  		},
  		{
  			"id": "02080520",
  			"id_hs92": "080520",
  			"name": "Mandarin, clementine & citrus hybrids, fresh or dried"
  		},
  		{
  			"id": "02080530",
  			"id_hs92": "080530",
  			"name": "Lemons and limes, fresh or dried"
  		},
  		{
  			"id": "02080540",
  			"id_hs92": "080540",
  			"name": "Grapefruit, fresh or dried"
  		},
  		{
  			"id": "02080590",
  			"id_hs92": "080590",
  			"name": "Citrus fruits, fresh or dried, nes"
  		},
  		{
  			"id": "020806",
  			"id_hs92": "0806",
  			"name": "Grapes"
  		},
  		{
  			"id": "02080610",
  			"id_hs92": "080610",
  			"name": "Grapes, fresh"
  		},
  		{
  			"id": "02080620",
  			"id_hs92": "080620",
  			"name": "Grapes, dried"
  		},
  		{
  			"id": "020807",
  			"id_hs92": "0807",
  			"name": "Melons"
  		},
  		{
  			"id": "02080710",
  			"id_hs92": "080710",
  			"name": "Melons (including watermelons), fresh"
  		},
  		{
  			"id": "02080720",
  			"id_hs92": "080720",
  			"name": "Papaws (papayas), fresh"
  		},
  		{
  			"id": "020808",
  			"id_hs92": "0808",
  			"name": "Apples and Pears"
  		},
  		{
  			"id": "02080810",
  			"id_hs92": "080810",
  			"name": "Apples, fresh"
  		},
  		{
  			"id": "02080820",
  			"id_hs92": "080820",
  			"name": "Pears and quinces, fresh"
  		},
  		{
  			"id": "020809",
  			"id_hs92": "0809",
  			"name": "Pitted Fruits"
  		},
  		{
  			"id": "02080910",
  			"id_hs92": "080910",
  			"name": "Apricots, fresh"
  		},
  		{
  			"id": "02080920",
  			"id_hs92": "080920",
  			"name": "Cherries, fresh"
  		},
  		{
  			"id": "02080930",
  			"id_hs92": "080930",
  			"name": "Peaches, nectarines, fresh"
  		},
  		{
  			"id": "02080940",
  			"id_hs92": "080940",
  			"name": "Plums, sloes, fresh"
  		},
  		{
  			"id": "020810",
  			"id_hs92": "0810",
  			"name": "Other Fruits"
  		},
  		{
  			"id": "02081010",
  			"id_hs92": "081010",
  			"name": "Strawberries, fresh"
  		},
  		{
  			"id": "02081020",
  			"id_hs92": "081020",
  			"name": "Raspberry, blackberry, mulberry and loganberry, fresh"
  		},
  		{
  			"id": "02081030",
  			"id_hs92": "081030",
  			"name": "Black, white or red currants and gooseberries, fresh"
  		},
  		{
  			"id": "02081040",
  			"id_hs92": "081040",
  			"name": "Cranberries, bilberries, similar fruits, fresh"
  		},
  		{
  			"id": "02081090",
  			"id_hs92": "081090",
  			"name": "Fruits, fresh nes"
  		},
  		{
  			"id": "020811",
  			"id_hs92": "0811",
  			"name": "Frozen Fruits and Nuts"
  		},
  		{
  			"id": "02081110",
  			"id_hs92": "081110",
  			"name": "Strawberries, (uncooked steamed or boiled), frozen"
  		},
  		{
  			"id": "02081120",
  			"id_hs92": "081120",
  			"name": "Rasp-, mul-berries, etc (uncooked, steam, boil),froze"
  		},
  		{
  			"id": "02081190",
  			"id_hs92": "081190",
  			"name": "Fruits and nuts (uncooked, steamed, boiled) frozen,ne"
  		},
  		{
  			"id": "020812",
  			"id_hs92": "0812",
  			"name": "Preserved Fruits and Nuts"
  		},
  		{
  			"id": "02081210",
  			"id_hs92": "081210",
  			"name": "Cherries provisionally preserved"
  		},
  		{
  			"id": "02081220",
  			"id_hs92": "081220",
  			"name": "Strawberries provisionally preserved"
  		},
  		{
  			"id": "02081290",
  			"id_hs92": "081290",
  			"name": "Fruits and nuts, provisionally preserved nes"
  		},
  		{
  			"id": "020813",
  			"id_hs92": "0813",
  			"name": "Dried Fruits"
  		},
  		{
  			"id": "02081310",
  			"id_hs92": "081310",
  			"name": "Apricots, dried"
  		},
  		{
  			"id": "02081320",
  			"id_hs92": "081320",
  			"name": "Prunes, dried"
  		},
  		{
  			"id": "02081330",
  			"id_hs92": "081330",
  			"name": "Apples, dried"
  		},
  		{
  			"id": "02081340",
  			"id_hs92": "081340",
  			"name": "Fruits, dried nes"
  		},
  		{
  			"id": "02081350",
  			"id_hs92": "081350",
  			"name": "Mixtures of edible nuts, dried and preserved fruits"
  		},
  		{
  			"id": "020814",
  			"id_hs92": "0814",
  			"name": "Citrus and Melon Peels"
  		},
  		{
  			"id": "02081400",
  			"id_hs92": "081400",
  			"name": "Peel of citrus fruit or melons"
  		},
  		{
  			"id": "020901",
  			"id_hs92": "0901",
  			"name": "Coffee"
  		},
  		{
  			"id": "02090111",
  			"id_hs92": "090111",
  			"name": "Coffee, not roasted, not decaffeinated"
  		},
  		{
  			"id": "02090112",
  			"id_hs92": "090112",
  			"name": "Coffee, not roasted, decaffeinated"
  		},
  		{
  			"id": "02090121",
  			"id_hs92": "090121",
  			"name": "Coffee, roasted, not decaffeinated"
  		},
  		{
  			"id": "02090122",
  			"id_hs92": "090122",
  			"name": "Coffee, roasted, decaffeinated"
  		},
  		{
  			"id": "02090130",
  			"id_hs92": "090130",
  			"name": "Coffee husks and skins"
  		},
  		{
  			"id": "02090140",
  			"id_hs92": "090140",
  			"name": "Coffee substitutes containing coffee"
  		},
  		{
  			"id": "020902",
  			"id_hs92": "0902",
  			"name": "Tea"
  		},
  		{
  			"id": "02090210",
  			"id_hs92": "090210",
  			"name": "Tea, green (unfermented) in packages < 3 kg"
  		},
  		{
  			"id": "02090220",
  			"id_hs92": "090220",
  			"name": "Tea, green (unfermented) in packages > 3 kg"
  		},
  		{
  			"id": "02090230",
  			"id_hs92": "090230",
  			"name": "Tea, black (fermented or partly) in packages < 3 kg"
  		},
  		{
  			"id": "02090240",
  			"id_hs92": "090240",
  			"name": "Tea, black (fermented or partly) in packages > 3 kg"
  		},
  		{
  			"id": "020903",
  			"id_hs92": "0903",
  			"name": "Maté"
  		},
  		{
  			"id": "02090300",
  			"id_hs92": "090300",
  			"name": "Mate"
  		},
  		{
  			"id": "020904",
  			"id_hs92": "0904",
  			"name": "Pepper"
  		},
  		{
  			"id": "02090411",
  			"id_hs92": "090411",
  			"name": "Pepper of the genus Piper, whole"
  		},
  		{
  			"id": "02090412",
  			"id_hs92": "090412",
  			"name": "Pepper of the genus Piper, crushed or ground"
  		},
  		{
  			"id": "02090420",
  			"id_hs92": "090420",
  			"name": "Capsicum or Pimenta, dried, crushed or ground"
  		},
  		{
  			"id": "020905",
  			"id_hs92": "0905",
  			"name": "Vanilla"
  		},
  		{
  			"id": "02090500",
  			"id_hs92": "090500",
  			"name": "Vanilla beans"
  		},
  		{
  			"id": "020906",
  			"id_hs92": "0906",
  			"name": "Cinnamon"
  		},
  		{
  			"id": "02090610",
  			"id_hs92": "090610",
  			"name": "Cinnamon and cinnamon-tree flowers whole"
  		},
  		{
  			"id": "02090620",
  			"id_hs92": "090620",
  			"name": "Cinnamon and cinnamon-tree flowers crushed or ground"
  		},
  		{
  			"id": "020907",
  			"id_hs92": "0907",
  			"name": "Cloves"
  		},
  		{
  			"id": "02090700",
  			"id_hs92": "090700",
  			"name": "Cloves (whole fruit, cloves and stems)"
  		},
  		{
  			"id": "020908",
  			"id_hs92": "0908",
  			"name": "Nutmeg"
  		},
  		{
  			"id": "02090810",
  			"id_hs92": "090810",
  			"name": "Nutmeg"
  		},
  		{
  			"id": "02090820",
  			"id_hs92": "090820",
  			"name": "Mace"
  		},
  		{
  			"id": "02090830",
  			"id_hs92": "090830",
  			"name": "Cardamoms"
  		},
  		{
  			"id": "020909",
  			"id_hs92": "0909",
  			"name": "Spice Seeds"
  		},
  		{
  			"id": "02090910",
  			"id_hs92": "090910",
  			"name": "Anise or badian seeds"
  		},
  		{
  			"id": "02090920",
  			"id_hs92": "090920",
  			"name": "Coriander seeds"
  		},
  		{
  			"id": "02090930",
  			"id_hs92": "090930",
  			"name": "Cumin seeds"
  		},
  		{
  			"id": "02090940",
  			"id_hs92": "090940",
  			"name": "Caraway seeds"
  		},
  		{
  			"id": "02090950",
  			"id_hs92": "090950",
  			"name": "Fennel seeds, juniper berries"
  		},
  		{
  			"id": "020910",
  			"id_hs92": "0910",
  			"name": "Spices"
  		},
  		{
  			"id": "02091010",
  			"id_hs92": "091010",
  			"name": "Ginger"
  		},
  		{
  			"id": "02091020",
  			"id_hs92": "091020",
  			"name": "Saffron"
  		},
  		{
  			"id": "02091030",
  			"id_hs92": "091030",
  			"name": "Turmeric (curcuma)"
  		},
  		{
  			"id": "02091040",
  			"id_hs92": "091040",
  			"name": "Thyme and bay leaves"
  		},
  		{
  			"id": "02091050",
  			"id_hs92": "091050",
  			"name": "Curry"
  		},
  		{
  			"id": "02091091",
  			"id_hs92": "091091",
  			"name": "Mixtures of spices"
  		},
  		{
  			"id": "02091099",
  			"id_hs92": "091099",
  			"name": "Spices nes"
  		},
  		{
  			"id": "021001",
  			"id_hs92": "1001",
  			"name": "Wheat"
  		},
  		{
  			"id": "02100110",
  			"id_hs92": "100110",
  			"name": "Durum wheat"
  		},
  		{
  			"id": "02100190",
  			"id_hs92": "100190",
  			"name": "Wheat except durum wheat, and meslin"
  		},
  		{
  			"id": "021002",
  			"id_hs92": "1002",
  			"name": "Rye"
  		},
  		{
  			"id": "02100200",
  			"id_hs92": "100200",
  			"name": "Rye"
  		},
  		{
  			"id": "021003",
  			"id_hs92": "1003",
  			"name": "Barley"
  		},
  		{
  			"id": "02100300",
  			"id_hs92": "100300",
  			"name": "Barley"
  		},
  		{
  			"id": "021004",
  			"id_hs92": "1004",
  			"name": "Oats"
  		},
  		{
  			"id": "02100400",
  			"id_hs92": "100400",
  			"name": "Oats"
  		},
  		{
  			"id": "021005",
  			"id_hs92": "1005",
  			"name": "Corn"
  		},
  		{
  			"id": "02100510",
  			"id_hs92": "100510",
  			"name": "Maize (corn) seed"
  		},
  		{
  			"id": "02100590",
  			"id_hs92": "100590",
  			"name": "Maize except seed corn"
  		},
  		{
  			"id": "021006",
  			"id_hs92": "1006",
  			"name": "Rice"
  		},
  		{
  			"id": "02100610",
  			"id_hs92": "100610",
  			"name": "Rice in the husk (paddy or rough)"
  		},
  		{
  			"id": "02100620",
  			"id_hs92": "100620",
  			"name": "Rice, husked (brown)"
  		},
  		{
  			"id": "02100630",
  			"id_hs92": "100630",
  			"name": "Rice, semi-milled or wholly milled"
  		},
  		{
  			"id": "02100640",
  			"id_hs92": "100640",
  			"name": "Rice, broken"
  		},
  		{
  			"id": "021007",
  			"id_hs92": "1007",
  			"name": "Sorghum"
  		},
  		{
  			"id": "02100700",
  			"id_hs92": "100700",
  			"name": "Grain sorghum"
  		},
  		{
  			"id": "021008",
  			"id_hs92": "1008",
  			"name": "Buckwheat"
  		},
  		{
  			"id": "02100810",
  			"id_hs92": "100810",
  			"name": "Buckwheat"
  		},
  		{
  			"id": "02100820",
  			"id_hs92": "100820",
  			"name": "Millet"
  		},
  		{
  			"id": "02100830",
  			"id_hs92": "100830",
  			"name": "Canary seed"
  		},
  		{
  			"id": "02100890",
  			"id_hs92": "100890",
  			"name": "Cereals unmilled nes"
  		},
  		{
  			"id": "021101",
  			"id_hs92": "1101",
  			"name": "Wheat Flours"
  		},
  		{
  			"id": "02110100",
  			"id_hs92": "110100",
  			"name": "Wheat or meslin flour"
  		},
  		{
  			"id": "021102",
  			"id_hs92": "1102",
  			"name": "Cereal Flours"
  		},
  		{
  			"id": "02110210",
  			"id_hs92": "110210",
  			"name": "Rye flour"
  		},
  		{
  			"id": "02110220",
  			"id_hs92": "110220",
  			"name": "Maize (corn) flour"
  		},
  		{
  			"id": "02110230",
  			"id_hs92": "110230",
  			"name": "Rice flour"
  		},
  		{
  			"id": "02110290",
  			"id_hs92": "110290",
  			"name": "Cereal flour except wheat, meslin, rye, maize, rice"
  		},
  		{
  			"id": "021103",
  			"id_hs92": "1103",
  			"name": "Cereal Meal and Pellets"
  		},
  		{
  			"id": "02110311",
  			"id_hs92": "110311",
  			"name": "Wheat meal"
  		},
  		{
  			"id": "02110312",
  			"id_hs92": "110312",
  			"name": "Oat groats or meal"
  		},
  		{
  			"id": "02110313",
  			"id_hs92": "110313",
  			"name": "Maize (corn) groats or meal"
  		},
  		{
  			"id": "02110314",
  			"id_hs92": "110314",
  			"name": "Rice groats or meal"
  		},
  		{
  			"id": "02110319",
  			"id_hs92": "110319",
  			"name": "Cereal groats or meal except wheat, maize, rice, oats"
  		},
  		{
  			"id": "02110321",
  			"id_hs92": "110321",
  			"name": "Wheat pellets"
  		},
  		{
  			"id": "02110329",
  			"id_hs92": "110329",
  			"name": "Cereal pellets except wheat"
  		},
  		{
  			"id": "021104",
  			"id_hs92": "1104",
  			"name": "Processed Cereals"
  		},
  		{
  			"id": "02110411",
  			"id_hs92": "110411",
  			"name": "Barley, rolled or flaked grains"
  		},
  		{
  			"id": "02110412",
  			"id_hs92": "110412",
  			"name": "Oats, rolled or flaked grains"
  		},
  		{
  			"id": "02110419",
  			"id_hs92": "110419",
  			"name": "Cereals, rolled or flaked grains nes"
  		},
  		{
  			"id": "02110421",
  			"id_hs92": "110421",
  			"name": "Barley, hulled, pearled, sliced or kibbled"
  		},
  		{
  			"id": "02110422",
  			"id_hs92": "110422",
  			"name": "Oats, hulled, pearled, sliced or kibbled"
  		},
  		{
  			"id": "02110423",
  			"id_hs92": "110423",
  			"name": "Maize (corn), hulled, pearled, sliced or kibbled"
  		},
  		{
  			"id": "02110429",
  			"id_hs92": "110429",
  			"name": "Cereals, hulled, pearled, sliced or kibbled nes"
  		},
  		{
  			"id": "02110430",
  			"id_hs92": "110430",
  			"name": "Germ of cereals, whole, rolled, flaked or ground"
  		},
  		{
  			"id": "021105",
  			"id_hs92": "1105",
  			"name": "Potato Flours"
  		},
  		{
  			"id": "02110510",
  			"id_hs92": "110510",
  			"name": "Potato flour or meal"
  		},
  		{
  			"id": "02110520",
  			"id_hs92": "110520",
  			"name": "Potato flakes, granules and pellets"
  		},
  		{
  			"id": "021106",
  			"id_hs92": "1106",
  			"name": "Legume Flours"
  		},
  		{
  			"id": "02110610",
  			"id_hs92": "110610",
  			"name": "Flour or meal of dried legumes"
  		},
  		{
  			"id": "02110620",
  			"id_hs92": "110620",
  			"name": "Flour or meal of sago, starchy roots or tubers"
  		},
  		{
  			"id": "02110630",
  			"id_hs92": "110630",
  			"name": "Flour, meal, powder of fruit/nut, citrus or melon pee"
  		},
  		{
  			"id": "021107",
  			"id_hs92": "1107",
  			"name": "Malt"
  		},
  		{
  			"id": "02110710",
  			"id_hs92": "110710",
  			"name": "Malt, not roasted"
  		},
  		{
  			"id": "02110720",
  			"id_hs92": "110720",
  			"name": "Malt, roasted"
  		},
  		{
  			"id": "021108",
  			"id_hs92": "1108",
  			"name": "Starches"
  		},
  		{
  			"id": "02110811",
  			"id_hs92": "110811",
  			"name": "Wheat, starch"
  		},
  		{
  			"id": "02110812",
  			"id_hs92": "110812",
  			"name": "Maize (corn) starch"
  		},
  		{
  			"id": "02110813",
  			"id_hs92": "110813",
  			"name": "Potato starch"
  		},
  		{
  			"id": "02110814",
  			"id_hs92": "110814",
  			"name": "Manioc (cassava) starch"
  		},
  		{
  			"id": "02110819",
  			"id_hs92": "110819",
  			"name": "Starches except wheat, maize, potato, manioc"
  		},
  		{
  			"id": "02110820",
  			"id_hs92": "110820",
  			"name": "Inulin"
  		},
  		{
  			"id": "021109",
  			"id_hs92": "1109",
  			"name": "Wheat Gluten"
  		},
  		{
  			"id": "02110900",
  			"id_hs92": "110900",
  			"name": "Wheat gluten"
  		},
  		{
  			"id": "021201",
  			"id_hs92": "1201",
  			"name": "Soybeans"
  		},
  		{
  			"id": "02120100",
  			"id_hs92": "120100",
  			"name": "Soya beans"
  		},
  		{
  			"id": "021202",
  			"id_hs92": "1202",
  			"name": "Ground Nuts"
  		},
  		{
  			"id": "02120210",
  			"id_hs92": "120210",
  			"name": "Ground-nuts in shell not roasted or cooked"
  		},
  		{
  			"id": "02120220",
  			"id_hs92": "120220",
  			"name": "Ground-nuts shelled, not roasted or cooked"
  		},
  		{
  			"id": "021203",
  			"id_hs92": "1203",
  			"name": "Copra"
  		},
  		{
  			"id": "02120300",
  			"id_hs92": "120300",
  			"name": "Copra"
  		},
  		{
  			"id": "021204",
  			"id_hs92": "1204",
  			"name": "Linseed"
  		},
  		{
  			"id": "02120400",
  			"id_hs92": "120400",
  			"name": "Linseed"
  		},
  		{
  			"id": "021205",
  			"id_hs92": "1205",
  			"name": "Rapeseed"
  		},
  		{
  			"id": "02120500",
  			"id_hs92": "120500",
  			"name": "Rape or colza seeds"
  		},
  		{
  			"id": "021206",
  			"id_hs92": "1206",
  			"name": "Sunflower Seeds"
  		},
  		{
  			"id": "02120600",
  			"id_hs92": "120600",
  			"name": "Sunflower seeds"
  		},
  		{
  			"id": "021207",
  			"id_hs92": "1207",
  			"name": "Other Oily Seeds"
  		},
  		{
  			"id": "02120710",
  			"id_hs92": "120710",
  			"name": "Palm nuts and kernels"
  		},
  		{
  			"id": "02120720",
  			"id_hs92": "120720",
  			"name": "Cotton seeds"
  		},
  		{
  			"id": "02120730",
  			"id_hs92": "120730",
  			"name": "Castor oil seeds"
  		},
  		{
  			"id": "02120740",
  			"id_hs92": "120740",
  			"name": "Sesamum seeds"
  		},
  		{
  			"id": "02120750",
  			"id_hs92": "120750",
  			"name": "Mustard seeds"
  		},
  		{
  			"id": "02120760",
  			"id_hs92": "120760",
  			"name": "Safflower seeds"
  		},
  		{
  			"id": "02120791",
  			"id_hs92": "120791",
  			"name": "Poppy seeds"
  		},
  		{
  			"id": "02120792",
  			"id_hs92": "120792",
  			"name": "Shea nuts (karite nuts)"
  		},
  		{
  			"id": "02120799",
  			"id_hs92": "120799",
  			"name": "Oil seeds and oleaginous fruits, nes"
  		},
  		{
  			"id": "021208",
  			"id_hs92": "1208",
  			"name": "Oil Seed Flower"
  		},
  		{
  			"id": "02120810",
  			"id_hs92": "120810",
  			"name": "Soya bean flour or meal"
  		},
  		{
  			"id": "02120890",
  			"id_hs92": "120890",
  			"name": "Flour or meal of oil seed, fruit, except mustard, soy"
  		},
  		{
  			"id": "021209",
  			"id_hs92": "1209",
  			"name": "Sowing Seeds"
  		},
  		{
  			"id": "02120911",
  			"id_hs92": "120911",
  			"name": "Seed, sugar beet, for sowing"
  		},
  		{
  			"id": "02120919",
  			"id_hs92": "120919",
  			"name": "Seed, beet, except sugar, for sowing"
  		},
  		{
  			"id": "02120921",
  			"id_hs92": "120921",
  			"name": "Seed, lucerne (alfalfa), for sowing"
  		},
  		{
  			"id": "02120922",
  			"id_hs92": "120922",
  			"name": "Seed, clover, for sowing"
  		},
  		{
  			"id": "02120923",
  			"id_hs92": "120923",
  			"name": "Seed, fescue, for sowing"
  		},
  		{
  			"id": "02120924",
  			"id_hs92": "120924",
  			"name": "Seed, Kentucky blue grass, for sowing"
  		},
  		{
  			"id": "02120925",
  			"id_hs92": "120925",
  			"name": "Seed, rye grass, for sowing"
  		},
  		{
  			"id": "02120926",
  			"id_hs92": "120926",
  			"name": "Seed, Timothy grass, for sowing"
  		},
  		{
  			"id": "02120929",
  			"id_hs92": "120929",
  			"name": "Seed, forage plants, for sowing nes"
  		},
  		{
  			"id": "02120930",
  			"id_hs92": "120930",
  			"name": "Seed, flower, for sowing"
  		},
  		{
  			"id": "02120991",
  			"id_hs92": "120991",
  			"name": "Seed, vegetable, nes for sowing"
  		},
  		{
  			"id": "02120999",
  			"id_hs92": "120999",
  			"name": "Seed, fruits and spores for sowing, nes"
  		},
  		{
  			"id": "021210",
  			"id_hs92": "1210",
  			"name": "Hops"
  		},
  		{
  			"id": "02121010",
  			"id_hs92": "121010",
  			"name": "Hop cones, not ground, powdered or pelleted"
  		},
  		{
  			"id": "02121020",
  			"id_hs92": "121020",
  			"name": "Hop cones, ground, powdered or pelleted and lupulin"
  		},
  		{
  			"id": "021211",
  			"id_hs92": "1211",
  			"name": "Perfume Plants"
  		},
  		{
  			"id": "02121110",
  			"id_hs92": "121110",
  			"name": "Liquorice roots"
  		},
  		{
  			"id": "02121120",
  			"id_hs92": "121120",
  			"name": "Ginseng roots"
  		},
  		{
  			"id": "02121190",
  			"id_hs92": "121190",
  			"name": "Other plants of a kind use for perfumery, pharmacy, insecticidal purpose (fresh or dried)"
  		},
  		{
  			"id": "021212",
  			"id_hs92": "1212",
  			"name": "Locust beans, seaweed, sugar beet, cane, for food"
  		},
  		{
  			"id": "02121210",
  			"id_hs92": "121210",
  			"name": "Locust beans and seeds"
  		},
  		{
  			"id": "02121220",
  			"id_hs92": "121220",
  			"name": "Seaweeds and other algae"
  		},
  		{
  			"id": "02121230",
  			"id_hs92": "121230",
  			"name": "Apricot, peach or plum stones"
  		},
  		{
  			"id": "02121291",
  			"id_hs92": "121291",
  			"name": "Sugar beet"
  		},
  		{
  			"id": "02121292",
  			"id_hs92": "121292",
  			"name": "Sugar cane"
  		},
  		{
  			"id": "02121299",
  			"id_hs92": "121299",
  			"name": "Other vegetable products (chicory roots, tuber of koyaku etc)"
  		},
  		{
  			"id": "021213",
  			"id_hs92": "1213",
  			"name": "Cereal Straws"
  		},
  		{
  			"id": "02121300",
  			"id_hs92": "121300",
  			"name": "Cereal straw & husks, unprepared"
  		},
  		{
  			"id": "021214",
  			"id_hs92": "1214",
  			"name": "Forage Crops"
  		},
  		{
  			"id": "02121410",
  			"id_hs92": "121410",
  			"name": "Lucerne (alfalfa) meal and pellets"
  		},
  		{
  			"id": "02121490",
  			"id_hs92": "121490",
  			"name": "Other fodder and forage products, roots, etc."
  		},
  		{
  			"id": "021301",
  			"id_hs92": "1301",
  			"name": "Insect Resins"
  		},
  		{
  			"id": "02130110",
  			"id_hs92": "130110",
  			"name": "Lac"
  		},
  		{
  			"id": "02130120",
  			"id_hs92": "130120",
  			"name": "Gum arabic"
  		},
  		{
  			"id": "02130190",
  			"id_hs92": "130190",
  			"name": "Natural gum, resin, gum-resin, balsam, not gum arabic"
  		},
  		{
  			"id": "021302",
  			"id_hs92": "1302",
  			"name": "Vegetable Saps"
  		},
  		{
  			"id": "02130211",
  			"id_hs92": "130211",
  			"name": "Opium sap"
  		},
  		{
  			"id": "02130212",
  			"id_hs92": "130212",
  			"name": "Liquorice extract"
  		},
  		{
  			"id": "02130213",
  			"id_hs92": "130213",
  			"name": "Hop extract"
  		},
  		{
  			"id": "02130214",
  			"id_hs92": "130214",
  			"name": "Pyrethrum, roots containing rotenone, extracts"
  		},
  		{
  			"id": "02130219",
  			"id_hs92": "130219",
  			"name": "Vegetable saps and extracts nes"
  		},
  		{
  			"id": "02130220",
  			"id_hs92": "130220",
  			"name": "Pectic substances, pectinates, pectates"
  		},
  		{
  			"id": "02130231",
  			"id_hs92": "130231",
  			"name": "Agar-agar"
  		},
  		{
  			"id": "02130232",
  			"id_hs92": "130232",
  			"name": "Mucilages & thickeners, from locust bean, guar seeds"
  		},
  		{
  			"id": "02130239",
  			"id_hs92": "130239",
  			"name": "Mucilages and thickeners nes"
  		},
  		{
  			"id": "021401",
  			"id_hs92": "1401",
  			"name": "Vegetable Plaiting Materials"
  		},
  		{
  			"id": "02140110",
  			"id_hs92": "140110",
  			"name": "Bamboos used primarily for plaiting"
  		},
  		{
  			"id": "02140120",
  			"id_hs92": "140120",
  			"name": "Rattan used primarily for plaiting"
  		},
  		{
  			"id": "02140190",
  			"id_hs92": "140190",
  			"name": "Vegetable materials nes, used primarily for plaiting"
  		},
  		{
  			"id": "021402",
  			"id_hs92": "1402",
  			"name": "Vegetable Stuffing Materials"
  		},
  		{
  			"id": "02140210",
  			"id_hs92": "140210",
  			"name": "Kapok"
  		},
  		{
  			"id": "02140291",
  			"id_hs92": "140291",
  			"name": "Vegetable hair used as stuffing or padding"
  		},
  		{
  			"id": "02140299",
  			"id_hs92": "140299",
  			"name": "Vegetable material nes used as stuffing"
  		},
  		{
  			"id": "021403",
  			"id_hs92": "1403",
  			"name": "Vegetable Brush Materials"
  		},
  		{
  			"id": "02140310",
  			"id_hs92": "140310",
  			"name": "Broom corn used in brooms or brushes"
  		},
  		{
  			"id": "02140390",
  			"id_hs92": "140390",
  			"name": "Vegetable material nes used in brooms or brushes"
  		},
  		{
  			"id": "021404",
  			"id_hs92": "1404",
  			"name": "Other Vegetable Products"
  		},
  		{
  			"id": "02140410",
  			"id_hs92": "140410",
  			"name": "Raw vegetable materials for dyeing or tanning"
  		},
  		{
  			"id": "02140420",
  			"id_hs92": "140420",
  			"name": "Cotton linters"
  		},
  		{
  			"id": "02140490",
  			"id_hs92": "140490",
  			"name": "Vegetable products nes"
  		},
  		{
  			"id": "03",
  			"id_hs92": null,
  			"name": "Animal and Vegetable Bi-Products"
  		},
  		{
  			"id": "031501",
  			"id_hs92": "1501",
  			"name": "Pig and Poultry Fat"
  		},
  		{
  			"id": "03150100",
  			"id_hs92": "150100",
  			"name": "Lard, other pig fat and poultry fat, rendered"
  		},
  		{
  			"id": "031502",
  			"id_hs92": "1502",
  			"name": "Bovine, Sheep, and Goat Fat"
  		},
  		{
  			"id": "03150200",
  			"id_hs92": "150200",
  			"name": "Bovine, sheep and goat fats, raw or rendered"
  		},
  		{
  			"id": "031503",
  			"id_hs92": "1503",
  			"name": "Lard"
  		},
  		{
  			"id": "03150300",
  			"id_hs92": "150300",
  			"name": "Lard stearin, oleostearin & oils, natural tallow oil"
  		},
  		{
  			"id": "031504",
  			"id_hs92": "1504",
  			"name": "Fish Oil"
  		},
  		{
  			"id": "03150410",
  			"id_hs92": "150410",
  			"name": "Fish-liver oils, fractions, not chemically modified"
  		},
  		{
  			"id": "03150420",
  			"id_hs92": "150420",
  			"name": "Fish oils except liver, not chemically modified"
  		},
  		{
  			"id": "03150430",
  			"id_hs92": "150430",
  			"name": "Marine mammal fats, oils, etc. not chemically modifie"
  		},
  		{
  			"id": "031505",
  			"id_hs92": "1505",
  			"name": "Wool Grease"
  		},
  		{
  			"id": "03150510",
  			"id_hs92": "150510",
  			"name": "Wool grease, crude"
  		},
  		{
  			"id": "03150590",
  			"id_hs92": "150590",
  			"name": "Derivatives of wool grease (including lanolin)"
  		},
  		{
  			"id": "031506",
  			"id_hs92": "1506",
  			"name": "Other Animal Fats"
  		},
  		{
  			"id": "03150600",
  			"id_hs92": "150600",
  			"name": "Animal fats,oils,fractions not chemically modified ne"
  		},
  		{
  			"id": "031507",
  			"id_hs92": "1507",
  			"name": "Soybean Oil"
  		},
  		{
  			"id": "03150710",
  			"id_hs92": "150710",
  			"name": "Soya-bean oil crude, whether or not degummed"
  		},
  		{
  			"id": "03150790",
  			"id_hs92": "150790",
  			"name": "Refined soya-bean oil, not chemically modified"
  		},
  		{
  			"id": "031508",
  			"id_hs92": "1508",
  			"name": "Ground Nut Oil"
  		},
  		{
  			"id": "03150810",
  			"id_hs92": "150810",
  			"name": "Ground-nut oil, crude"
  		},
  		{
  			"id": "03150890",
  			"id_hs92": "150890",
  			"name": "Refined ground-nut oil not chemically modified"
  		},
  		{
  			"id": "031509",
  			"id_hs92": "1509",
  			"name": "Pure Olive Oil"
  		},
  		{
  			"id": "03150910",
  			"id_hs92": "150910",
  			"name": "Olive oil, virgin"
  		},
  		{
  			"id": "03150990",
  			"id_hs92": "150990",
  			"name": "Olive oil, fractions, refined, not chemically modifie"
  		},
  		{
  			"id": "031510",
  			"id_hs92": "1510",
  			"name": "Olive Oil"
  		},
  		{
  			"id": "03151000",
  			"id_hs92": "151000",
  			"name": "Olive oil, fractions, blends, not chemically modified"
  		},
  		{
  			"id": "031511",
  			"id_hs92": "1511",
  			"name": "Palm Oil"
  		},
  		{
  			"id": "03151110",
  			"id_hs92": "151110",
  			"name": "Palm oil, crude"
  		},
  		{
  			"id": "03151190",
  			"id_hs92": "151190",
  			"name": "Palm oil or fractions simply refined"
  		},
  		{
  			"id": "031512",
  			"id_hs92": "1512",
  			"name": "Seed Oils"
  		},
  		{
  			"id": "03151211",
  			"id_hs92": "151211",
  			"name": "Sunflower-seed or safflower oil, crude"
  		},
  		{
  			"id": "03151219",
  			"id_hs92": "151219",
  			"name": "Sunflower or safflower oil,fractions simply refined"
  		},
  		{
  			"id": "03151221",
  			"id_hs92": "151221",
  			"name": "Cotton-seed oil crude"
  		},
  		{
  			"id": "03151229",
  			"id_hs92": "151229",
  			"name": "Cotton-seed or fractions simply refined"
  		},
  		{
  			"id": "031513",
  			"id_hs92": "1513",
  			"name": "Coconut Oil"
  		},
  		{
  			"id": "03151311",
  			"id_hs92": "151311",
  			"name": "Coconut (copra) oil crude"
  		},
  		{
  			"id": "03151319",
  			"id_hs92": "151319",
  			"name": "Coconut (copra) oil or fractions simply refined"
  		},
  		{
  			"id": "03151321",
  			"id_hs92": "151321",
  			"name": "Palm kernel or babassu oil, crude"
  		},
  		{
  			"id": "03151329",
  			"id_hs92": "151329",
  			"name": "Palm kernel & babassu oil, fractions, simply refined"
  		},
  		{
  			"id": "031514",
  			"id_hs92": "1514",
  			"name": "Rapeseed Oil"
  		},
  		{
  			"id": "03151410",
  			"id_hs92": "151410",
  			"name": "Canola, rape, colza or mustard oil, crude"
  		},
  		{
  			"id": "03151490",
  			"id_hs92": "151490",
  			"name": "Canola, rape, colza or mustard oil, fractions, refine"
  		},
  		{
  			"id": "031515",
  			"id_hs92": "1515",
  			"name": "Other Pure Vegetable Oils"
  		},
  		{
  			"id": "03151511",
  			"id_hs92": "151511",
  			"name": "Linseed oil, crude"
  		},
  		{
  			"id": "03151519",
  			"id_hs92": "151519",
  			"name": "Linseed oil,fractions, refined not chemically modifie"
  		},
  		{
  			"id": "03151521",
  			"id_hs92": "151521",
  			"name": "Maize oil crude"
  		},
  		{
  			"id": "03151529",
  			"id_hs92": "151529",
  			"name": "Maize oil, fractions, refined not chemically modified"
  		},
  		{
  			"id": "03151530",
  			"id_hs92": "151530",
  			"name": "Castor oil or fractions not chemically modified"
  		},
  		{
  			"id": "03151540",
  			"id_hs92": "151540",
  			"name": "Tung oil or fractions not chemically modified"
  		},
  		{
  			"id": "03151550",
  			"id_hs92": "151550",
  			"name": "Sesame oil or fractions not chemically modified"
  		},
  		{
  			"id": "03151560",
  			"id_hs92": "151560",
  			"name": "Jojoba oil or fractions not chemically modified"
  		},
  		{
  			"id": "03151590",
  			"id_hs92": "151590",
  			"name": "Veg fats, oils nes, fractions, not chemically modifie"
  		},
  		{
  			"id": "031516",
  			"id_hs92": "1516",
  			"name": "Other Vegetable Oils"
  		},
  		{
  			"id": "03151610",
  			"id_hs92": "151610",
  			"name": "Animal fats, oils, fractions, hydrogenated, esterifie"
  		},
  		{
  			"id": "03151620",
  			"id_hs92": "151620",
  			"name": "Veg fats, oils or fractions hydrogenated, esterified"
  		},
  		{
  			"id": "031517",
  			"id_hs92": "1517",
  			"name": "Margarine"
  		},
  		{
  			"id": "03151710",
  			"id_hs92": "151710",
  			"name": "Margarine, except liquid margarine"
  		},
  		{
  			"id": "03151790",
  			"id_hs92": "151790",
  			"name": "Edible mix & preparations of animal & veg fat, oil ne"
  		},
  		{
  			"id": "031518",
  			"id_hs92": "1518",
  			"name": "Inedible Fats and Oils"
  		},
  		{
  			"id": "03151800",
  			"id_hs92": "151800",
  			"name": "Processed animal, vegetable oils, industrial preps ne"
  		},
  		{
  			"id": "031519",
  			"id_hs92": "1519",
  			"name": "Stearic Acid"
  		},
  		{
  			"id": "03151911",
  			"id_hs92": "151911",
  			"name": "Stearic acid"
  		},
  		{
  			"id": "03151912",
  			"id_hs92": "151912",
  			"name": "Oleic acid"
  		},
  		{
  			"id": "03151913",
  			"id_hs92": "151913",
  			"name": "Tall oil fatty acids"
  		},
  		{
  			"id": "03151919",
  			"id_hs92": "151919",
  			"name": "Industrial monocarboxylic fatty acids, nes, acid oils"
  		},
  		{
  			"id": "03151920",
  			"id_hs92": "151920",
  			"name": "Acid oils from refining"
  		},
  		{
  			"id": "03151930",
  			"id_hs92": "151930",
  			"name": "Industrial fatty alcohols"
  		},
  		{
  			"id": "031520",
  			"id_hs92": "1520",
  			"name": "Glycerol"
  		},
  		{
  			"id": "03152010",
  			"id_hs92": "152010",
  			"name": "Glycerol (glycerine), crude and glycerol waters & lye"
  		},
  		{
  			"id": "03152090",
  			"id_hs92": "152090",
  			"name": "Glycerol (glycerine), nes including synthetic glycero"
  		},
  		{
  			"id": "031521",
  			"id_hs92": "1521",
  			"name": "Waxes"
  		},
  		{
  			"id": "03152110",
  			"id_hs92": "152110",
  			"name": "Vegetable waxes except triglycerides"
  		},
  		{
  			"id": "03152190",
  			"id_hs92": "152190",
  			"name": "Beeswax, other insect waxes and spermaceti"
  		},
  		{
  			"id": "031522",
  			"id_hs92": "1522",
  			"name": "Fat and Oil Residues"
  		},
  		{
  			"id": "03152200",
  			"id_hs92": "152200",
  			"name": "Degras, residues from treatment animal & veg waxes"
  		},
  		{
  			"id": "04",
  			"id_hs92": null,
  			"name": "Foodstuffs"
  		},
  		{
  			"id": "041601",
  			"id_hs92": "1601",
  			"name": "Sausages"
  		},
  		{
  			"id": "04160100",
  			"id_hs92": "160100",
  			"name": "Sausages, similar products of meat, meat offal & bloo"
  		},
  		{
  			"id": "041602",
  			"id_hs92": "1602",
  			"name": "Other Prepared Meat"
  		},
  		{
  			"id": "04160210",
  			"id_hs92": "160210",
  			"name": "Homogenized preparations of meat and meat offal"
  		},
  		{
  			"id": "04160220",
  			"id_hs92": "160220",
  			"name": "Livers of any animal prepared or preserved"
  		},
  		{
  			"id": "04160231",
  			"id_hs92": "160231",
  			"name": "Turkey meat, offal prepared or preserved, except live"
  		},
  		{
  			"id": "04160239",
  			"id_hs92": "160239",
  			"name": "Fowl, duck,goose, offal, prepared, preserved not live"
  		},
  		{
  			"id": "04160241",
  			"id_hs92": "160241",
  			"name": "Swine hams & cuts thereof, prepared or preserved"
  		},
  		{
  			"id": "04160242",
  			"id_hs92": "160242",
  			"name": "Swine shoulders & cuts thereof, prepared or preserved"
  		},
  		{
  			"id": "04160249",
  			"id_hs92": "160249",
  			"name": "Swine meat or offal nes, prepared,preserved, not live"
  		},
  		{
  			"id": "04160250",
  			"id_hs92": "160250",
  			"name": "Bovine meat, offal nes, not livers, prepared/preserve"
  		},
  		{
  			"id": "04160290",
  			"id_hs92": "160290",
  			"name": "Meat, meat offal and blood, prepared or preserved, ne"
  		},
  		{
  			"id": "041603",
  			"id_hs92": "1603",
  			"name": "Animal Extracts"
  		},
  		{
  			"id": "04160300",
  			"id_hs92": "160300",
  			"name": "Extracts, juices of meat, fish, aquatic invertebrates"
  		},
  		{
  			"id": "041604",
  			"id_hs92": "1604",
  			"name": "Processed Fish"
  		},
  		{
  			"id": "04160411",
  			"id_hs92": "160411",
  			"name": "Salmon prepared or preserved, not minced"
  		},
  		{
  			"id": "04160412",
  			"id_hs92": "160412",
  			"name": "Herrings, prepared or preserved, not minced"
  		},
  		{
  			"id": "04160413",
  			"id_hs92": "160413",
  			"name": "Sardine, brisling, sprat prepared/preserved,not mince"
  		},
  		{
  			"id": "04160414",
  			"id_hs92": "160414",
  			"name": "Tuna, skipjack, bonito, prepared/preserved, not mince"
  		},
  		{
  			"id": "04160415",
  			"id_hs92": "160415",
  			"name": "Mackerel, prepared or preserved, not minced"
  		},
  		{
  			"id": "04160416",
  			"id_hs92": "160416",
  			"name": "Anchovies, prepared or preserved, not minced"
  		},
  		{
  			"id": "04160419",
  			"id_hs92": "160419",
  			"name": "Fish nes, prepared or preserved, not minced"
  		},
  		{
  			"id": "04160420",
  			"id_hs92": "160420",
  			"name": "Fish prepared or preserved, except whole, in pieces"
  		},
  		{
  			"id": "04160430",
  			"id_hs92": "160430",
  			"name": "Caviar and caviar substitutes prepared from fish eggs"
  		},
  		{
  			"id": "041605",
  			"id_hs92": "1605",
  			"name": "Processed Crustaceans"
  		},
  		{
  			"id": "04160510",
  			"id_hs92": "160510",
  			"name": "Crab, prepared or preserved"
  		},
  		{
  			"id": "04160520",
  			"id_hs92": "160520",
  			"name": "Shrimps and prawns, prepared or preserved"
  		},
  		{
  			"id": "04160530",
  			"id_hs92": "160530",
  			"name": "Lobster, prepared or preserved"
  		},
  		{
  			"id": "04160540",
  			"id_hs92": "160540",
  			"name": "Crustaceans nes, prepared or preserved"
  		},
  		{
  			"id": "04160590",
  			"id_hs92": "160590",
  			"name": "Molluscs and shellfish nes, prepared or preserved"
  		},
  		{
  			"id": "041701",
  			"id_hs92": "1701",
  			"name": "Raw Sugar"
  		},
  		{
  			"id": "04170111",
  			"id_hs92": "170111",
  			"name": "Raw sugar, cane"
  		},
  		{
  			"id": "04170112",
  			"id_hs92": "170112",
  			"name": "Raw sugar, beet"
  		},
  		{
  			"id": "04170191",
  			"id_hs92": "170191",
  			"name": "Refined sugar, in solid form, flavoured or coloured"
  		},
  		{
  			"id": "04170199",
  			"id_hs92": "170199",
  			"name": "Refined sugar, in solid form, nes, pure sucrose"
  		},
  		{
  			"id": "041702",
  			"id_hs92": "1702",
  			"name": "Other Sugars"
  		},
  		{
  			"id": "04170210",
  			"id_hs92": "170210",
  			"name": "Lactose and lactose syrup"
  		},
  		{
  			"id": "04170220",
  			"id_hs92": "170220",
  			"name": "Maple sugar and maple syrup"
  		},
  		{
  			"id": "04170230",
  			"id_hs92": "170230",
  			"name": "Glucose, glucose syrup < 20% fructose"
  		},
  		{
  			"id": "04170240",
  			"id_hs92": "170240",
  			"name": "Glucose including syrup of 20%-50% dry weight fructos"
  		},
  		{
  			"id": "04170250",
  			"id_hs92": "170250",
  			"name": "Fructose, chemically pure"
  		},
  		{
  			"id": "04170260",
  			"id_hs92": "170260",
  			"name": "Fructose, syrup > 50% fructose, not pure fructose"
  		},
  		{
  			"id": "04170290",
  			"id_hs92": "170290",
  			"name": "Sugar nes, invert sugar, caramel and artificial honey"
  		},
  		{
  			"id": "041703",
  			"id_hs92": "1703",
  			"name": "Molasses"
  		},
  		{
  			"id": "04170310",
  			"id_hs92": "170310",
  			"name": "Cane molasses"
  		},
  		{
  			"id": "04170390",
  			"id_hs92": "170390",
  			"name": "Molasses, except cane molasses"
  		},
  		{
  			"id": "041704",
  			"id_hs92": "1704",
  			"name": "Confectionery Sugar"
  		},
  		{
  			"id": "04170410",
  			"id_hs92": "170410",
  			"name": "Chewing gum containing sugar, except medicinal"
  		},
  		{
  			"id": "04170490",
  			"id_hs92": "170490",
  			"name": "Sugar confectionery not chewing gum, no cocoa content"
  		},
  		{
  			"id": "041801",
  			"id_hs92": "1801",
  			"name": "Cocoa Beans"
  		},
  		{
  			"id": "04180100",
  			"id_hs92": "180100",
  			"name": "Cocoa beans, whole or broken, raw or roasted"
  		},
  		{
  			"id": "041802",
  			"id_hs92": "1802",
  			"name": "Cocoa Shells"
  		},
  		{
  			"id": "04180200",
  			"id_hs92": "180200",
  			"name": "Cocoa shells, husks, skins and waste"
  		},
  		{
  			"id": "041803",
  			"id_hs92": "1803",
  			"name": "Cocoa Paste"
  		},
  		{
  			"id": "04180310",
  			"id_hs92": "180310",
  			"name": "Cocoa paste not defatted"
  		},
  		{
  			"id": "04180320",
  			"id_hs92": "180320",
  			"name": "Cocoa paste wholly or partly defatted"
  		},
  		{
  			"id": "041804",
  			"id_hs92": "1804",
  			"name": "Cocoa Butter"
  		},
  		{
  			"id": "04180400",
  			"id_hs92": "180400",
  			"name": "Cocoa butter, fat, oil"
  		},
  		{
  			"id": "041805",
  			"id_hs92": "1805",
  			"name": "Cocoa Powder"
  		},
  		{
  			"id": "04180500",
  			"id_hs92": "180500",
  			"name": "Cocoa powder, unsweetened"
  		},
  		{
  			"id": "041806",
  			"id_hs92": "1806",
  			"name": "Chocolate"
  		},
  		{
  			"id": "04180610",
  			"id_hs92": "180610",
  			"name": "Cocoa powder, sweetened"
  		},
  		{
  			"id": "04180620",
  			"id_hs92": "180620",
  			"name": "Chocolate and other food preps containing cocoa > 2 k"
  		},
  		{
  			"id": "04180631",
  			"id_hs92": "180631",
  			"name": "Chocolate, cocoa preps, block, slab, bar, filled, >2k"
  		},
  		{
  			"id": "04180632",
  			"id_hs92": "180632",
  			"name": "Chocolate, cocoa prep, block/slab/bar, not filled,>2k"
  		},
  		{
  			"id": "04180690",
  			"id_hs92": "180690",
  			"name": "Chocolate/cocoa food preparations nes"
  		},
  		{
  			"id": "041901",
  			"id_hs92": "1901",
  			"name": "Malt Extract"
  		},
  		{
  			"id": "04190110",
  			"id_hs92": "190110",
  			"name": "Infant foods of cereals, flour, starch or milk, retai"
  		},
  		{
  			"id": "04190120",
  			"id_hs92": "190120",
  			"name": "Mixes and doughs for bread, pastry, biscuits, etc."
  		},
  		{
  			"id": "04190190",
  			"id_hs92": "190190",
  			"name": "Malt extract & limited cocoa pastrycooks products nes"
  		},
  		{
  			"id": "041902",
  			"id_hs92": "1902",
  			"name": "Pasta"
  		},
  		{
  			"id": "04190211",
  			"id_hs92": "190211",
  			"name": "Uncooked egg pasta not stuffed or prepared"
  		},
  		{
  			"id": "04190219",
  			"id_hs92": "190219",
  			"name": "Uncooked pasta, not stuffed or prepared, without eggs"
  		},
  		{
  			"id": "04190220",
  			"id_hs92": "190220",
  			"name": "Stuffed pasta"
  		},
  		{
  			"id": "04190230",
  			"id_hs92": "190230",
  			"name": "Pasta except uncooked or stuffed"
  		},
  		{
  			"id": "04190240",
  			"id_hs92": "190240",
  			"name": "Couscous"
  		},
  		{
  			"id": "041903",
  			"id_hs92": "1903",
  			"name": "Tapioca"
  		},
  		{
  			"id": "04190300",
  			"id_hs92": "190300",
  			"name": "Tapioca and tapioca substitutes"
  		},
  		{
  			"id": "041904",
  			"id_hs92": "1904",
  			"name": "Prepared Cereals"
  		},
  		{
  			"id": "04190410",
  			"id_hs92": "190410",
  			"name": "Cereal foods obtained by swelling, roasting of cereal"
  		},
  		{
  			"id": "04190490",
  			"id_hs92": "190490",
  			"name": "Cereals, except maize grain, prepared nes"
  		},
  		{
  			"id": "041905",
  			"id_hs92": "1905",
  			"name": "Baked Goods"
  		},
  		{
  			"id": "04190510",
  			"id_hs92": "190510",
  			"name": "Crispbread"
  		},
  		{
  			"id": "04190520",
  			"id_hs92": "190520",
  			"name": "Gingerbread and the like"
  		},
  		{
  			"id": "04190530",
  			"id_hs92": "190530",
  			"name": "Sweet biscuits, waffles and wafers"
  		},
  		{
  			"id": "04190540",
  			"id_hs92": "190540",
  			"name": "Rusks, toasted bread and similar toasted products"
  		},
  		{
  			"id": "04190590",
  			"id_hs92": "190590",
  			"name": "Communion wafers, rice paper, bakers wares nes"
  		},
  		{
  			"id": "042001",
  			"id_hs92": "2001",
  			"name": "Pickled Foods"
  		},
  		{
  			"id": "04200110",
  			"id_hs92": "200110",
  			"name": "Cucumbers,gherkins, prepared or preserved by vinegar"
  		},
  		{
  			"id": "04200120",
  			"id_hs92": "200120",
  			"name": "Onions prepared or preserved by vinegar"
  		},
  		{
  			"id": "04200190",
  			"id_hs92": "200190",
  			"name": "Veg, fruit, nuts nes prepared or preserved by vinegar"
  		},
  		{
  			"id": "042002",
  			"id_hs92": "2002",
  			"name": "Processed Tomatoes"
  		},
  		{
  			"id": "04200210",
  			"id_hs92": "200210",
  			"name": "Tomatoes, whole/pieces, prepared/preserved, no vinega"
  		},
  		{
  			"id": "04200290",
  			"id_hs92": "200290",
  			"name": "Tomatoes nes, prepared or preserved, not in vinegar"
  		},
  		{
  			"id": "042003",
  			"id_hs92": "2003",
  			"name": "Processed Mushrooms"
  		},
  		{
  			"id": "04200310",
  			"id_hs92": "200310",
  			"name": "Mushrooms, prepared or preserved, not in vinegar"
  		},
  		{
  			"id": "04200320",
  			"id_hs92": "200320",
  			"name": "Truffles, prepared or preserved, not in vinegar"
  		},
  		{
  			"id": "042004",
  			"id_hs92": "2004",
  			"name": "Other Frozen Vegetables"
  		},
  		{
  			"id": "04200410",
  			"id_hs92": "200410",
  			"name": "Potatoes, prepared, frozen"
  		},
  		{
  			"id": "04200490",
  			"id_hs92": "200490",
  			"name": "Vegetables nes and mixtures, prepared, frozen"
  		},
  		{
  			"id": "042005",
  			"id_hs92": "2005",
  			"name": "Other Processed Vegetables"
  		},
  		{
  			"id": "04200510",
  			"id_hs92": "200510",
  			"name": "Homogenized vegetable preparations, not frozen/vinega"
  		},
  		{
  			"id": "04200520",
  			"id_hs92": "200520",
  			"name": "Potatoes, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200530",
  			"id_hs92": "200530",
  			"name": "Sauerkraut, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200540",
  			"id_hs92": "200540",
  			"name": "Peas, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200551",
  			"id_hs92": "200551",
  			"name": "Beans, shelled, prepared/preserved, not frozen/vinega"
  		},
  		{
  			"id": "04200559",
  			"id_hs92": "200559",
  			"name": "Beans nes, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200560",
  			"id_hs92": "200560",
  			"name": "Asparagus, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200570",
  			"id_hs92": "200570",
  			"name": "Olives, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200580",
  			"id_hs92": "200580",
  			"name": "Sweet corn, prepared or preserved, not frozen/vinegar"
  		},
  		{
  			"id": "04200590",
  			"id_hs92": "200590",
  			"name": "Veg nes, mixes, prepared/preserved, not frozen/vinega"
  		},
  		{
  			"id": "042006",
  			"id_hs92": "2006",
  			"name": "Sugar Preserved Foods"
  		},
  		{
  			"id": "04200600",
  			"id_hs92": "200600",
  			"name": "Fruits, nuts, fruit-peel, etc preserved by sugar"
  		},
  		{
  			"id": "042007",
  			"id_hs92": "2007",
  			"name": "Jams"
  		},
  		{
  			"id": "04200710",
  			"id_hs92": "200710",
  			"name": "Homogenised jams, jellies, etc"
  		},
  		{
  			"id": "04200791",
  			"id_hs92": "200791",
  			"name": "Citrus based jams jellies marmalade, etc."
  		},
  		{
  			"id": "04200799",
  			"id_hs92": "200799",
  			"name": "Jams, fruit jellies, purees and pastes, except citrus"
  		},
  		{
  			"id": "042008",
  			"id_hs92": "2008",
  			"name": "Other Processed Fruits and Nuts"
  		},
  		{
  			"id": "04200811",
  			"id_hs92": "200811",
  			"name": "Ground-nuts otherwise prepared or preserved"
  		},
  		{
  			"id": "04200819",
  			"id_hs92": "200819",
  			"name": "Nuts, seeds & mixes, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200820",
  			"id_hs92": "200820",
  			"name": "Pineapples, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200830",
  			"id_hs92": "200830",
  			"name": "Citrus fruits, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200840",
  			"id_hs92": "200840",
  			"name": "Pears, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200850",
  			"id_hs92": "200850",
  			"name": "Apricots, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200860",
  			"id_hs92": "200860",
  			"name": "Cherries, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200870",
  			"id_hs92": "200870",
  			"name": "Peaches, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200880",
  			"id_hs92": "200880",
  			"name": "Strawberries, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200891",
  			"id_hs92": "200891",
  			"name": "Palm hearts, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200892",
  			"id_hs92": "200892",
  			"name": "Fruit mixtures, otherwise prepared or preserved"
  		},
  		{
  			"id": "04200899",
  			"id_hs92": "200899",
  			"name": "Fruit, edible plants nes otherwise prepared/preserved"
  		},
  		{
  			"id": "042009",
  			"id_hs92": "2009",
  			"name": "Fruit Juice"
  		},
  		{
  			"id": "04200911",
  			"id_hs92": "200911",
  			"name": "Orange juice, frozen, not fermented or spirited"
  		},
  		{
  			"id": "04200919",
  			"id_hs92": "200919",
  			"name": "Orange juice, not fermented, spirited, or frozen"
  		},
  		{
  			"id": "04200920",
  			"id_hs92": "200920",
  			"name": "Grapefruit juice, not fermented or spirited"
  		},
  		{
  			"id": "04200930",
  			"id_hs92": "200930",
  			"name": "Citrus juice nes (one fruit) not fermented or spirite"
  		},
  		{
  			"id": "04200940",
  			"id_hs92": "200940",
  			"name": "Pineapple juice, not fermented or spirited"
  		},
  		{
  			"id": "04200950",
  			"id_hs92": "200950",
  			"name": "Tomato juice not fermented or spirited"
  		},
  		{
  			"id": "04200960",
  			"id_hs92": "200960",
  			"name": "Grape juice or must not fermented or spirited"
  		},
  		{
  			"id": "04200970",
  			"id_hs92": "200970",
  			"name": "Apple juice not fermented or spirited"
  		},
  		{
  			"id": "04200980",
  			"id_hs92": "200980",
  			"name": "Single fruit, veg juice nes, not fermented or spirite"
  		},
  		{
  			"id": "04200990",
  			"id_hs92": "200990",
  			"name": "Mixtures of juices not fermented or spirited"
  		},
  		{
  			"id": "042101",
  			"id_hs92": "2101",
  			"name": "Coffee and Tea Extracts"
  		},
  		{
  			"id": "04210110",
  			"id_hs92": "210110",
  			"name": "Coffee extracts, essences, concentrates, preparations"
  		},
  		{
  			"id": "04210120",
  			"id_hs92": "210120",
  			"name": "Tea and mate extracts, essences and concentrates"
  		},
  		{
  			"id": "04210130",
  			"id_hs92": "210130",
  			"name": "Chicory & other coffee substitutes, roasted & product"
  		},
  		{
  			"id": "042102",
  			"id_hs92": "2102",
  			"name": "Yeast"
  		},
  		{
  			"id": "04210210",
  			"id_hs92": "210210",
  			"name": "Yeasts, active"
  		},
  		{
  			"id": "04210220",
  			"id_hs92": "210220",
  			"name": "Yeasts, inactive, dead unicellular organisms nes"
  		},
  		{
  			"id": "04210230",
  			"id_hs92": "210230",
  			"name": "Baking powders, prepared"
  		},
  		{
  			"id": "042103",
  			"id_hs92": "2103",
  			"name": "Sauces and Seasonings"
  		},
  		{
  			"id": "04210310",
  			"id_hs92": "210310",
  			"name": "Soya sauce"
  		},
  		{
  			"id": "04210320",
  			"id_hs92": "210320",
  			"name": "Tomato ketchup and other tomato sauces"
  		},
  		{
  			"id": "04210330",
  			"id_hs92": "210330",
  			"name": "Mustard flour or meal and prepared mustard"
  		},
  		{
  			"id": "04210390",
  			"id_hs92": "210390",
  			"name": "Sauces nes, mixed condiments, mixed seasoning"
  		},
  		{
  			"id": "042104",
  			"id_hs92": "2104",
  			"name": "Soups and Broths"
  		},
  		{
  			"id": "04210410",
  			"id_hs92": "210410",
  			"name": "Soups and broths and preparations thereof"
  		},
  		{
  			"id": "04210420",
  			"id_hs92": "210420",
  			"name": "Homogenised composite food preparations"
  		},
  		{
  			"id": "042105",
  			"id_hs92": "2105",
  			"name": "Ice Cream"
  		},
  		{
  			"id": "04210500",
  			"id_hs92": "210500",
  			"name": "Ice cream and other edible ice"
  		},
  		{
  			"id": "042106",
  			"id_hs92": "2106",
  			"name": "Other Edible Preparations"
  		},
  		{
  			"id": "04210610",
  			"id_hs92": "210610",
  			"name": "Protein concentrates and textured protein substances"
  		},
  		{
  			"id": "04210690",
  			"id_hs92": "210690",
  			"name": "Food preparations nes"
  		},
  		{
  			"id": "042201",
  			"id_hs92": "2201",
  			"name": "Water"
  		},
  		{
  			"id": "04220110",
  			"id_hs92": "220110",
  			"name": "Mineral and aerated waters not sweetened or flavoured"
  		},
  		{
  			"id": "04220190",
  			"id_hs92": "220190",
  			"name": "Ice, snow and potable water not sweetened or flavoure"
  		},
  		{
  			"id": "042202",
  			"id_hs92": "2202",
  			"name": "Flavored Water"
  		},
  		{
  			"id": "04220210",
  			"id_hs92": "220210",
  			"name": "Beverage waters, sweetened or flavoured"
  		},
  		{
  			"id": "04220290",
  			"id_hs92": "220290",
  			"name": "Non-alcoholic beverages nes, except fruit, veg juices"
  		},
  		{
  			"id": "042203",
  			"id_hs92": "2203",
  			"name": "Beer"
  		},
  		{
  			"id": "04220300",
  			"id_hs92": "220300",
  			"name": "Beer made from malt"
  		},
  		{
  			"id": "042204",
  			"id_hs92": "2204",
  			"name": "Wine"
  		},
  		{
  			"id": "04220410",
  			"id_hs92": "220410",
  			"name": "Grape wines, sparkling"
  		},
  		{
  			"id": "04220421",
  			"id_hs92": "220421",
  			"name": "Grape wines nes, fortified wine or must, pack < 2l"
  		},
  		{
  			"id": "04220429",
  			"id_hs92": "220429",
  			"name": "Grape wines, alcoholic grape must nes"
  		},
  		{
  			"id": "04220430",
  			"id_hs92": "220430",
  			"name": "Grape must, unfermented, except as fruit juice"
  		},
  		{
  			"id": "042205",
  			"id_hs92": "2205",
  			"name": "Vermouth"
  		},
  		{
  			"id": "04220510",
  			"id_hs92": "220510",
  			"name": "Vermouth and other flavoured grape wines - pack < 2l"
  		},
  		{
  			"id": "04220590",
  			"id_hs92": "220590",
  			"name": "Vermouth and other flavoured grape wines - pack > 2l"
  		},
  		{
  			"id": "042206",
  			"id_hs92": "2206",
  			"name": "Other Fermented Beverages"
  		},
  		{
  			"id": "04220600",
  			"id_hs92": "220600",
  			"name": "Fermented beverages nes (eg cider, perry, mead, etc)"
  		},
  		{
  			"id": "042207",
  			"id_hs92": "2207",
  			"name": "Alcohol > 80% ABV"
  		},
  		{
  			"id": "04220710",
  			"id_hs92": "220710",
  			"name": "Undenatured ethyl alcohol > 80% by volume"
  		},
  		{
  			"id": "04220720",
  			"id_hs92": "220720",
  			"name": "Ethyl alcohol and other spirits, denatured"
  		},
  		{
  			"id": "042208",
  			"id_hs92": "2208",
  			"name": "Hard Liquor"
  		},
  		{
  			"id": "04220810",
  			"id_hs92": "220810",
  			"name": "Compound alcoholic preps for beverage manufacture"
  		},
  		{
  			"id": "04220820",
  			"id_hs92": "220820",
  			"name": "Spirits obtained by distilling grape wine, grape marc"
  		},
  		{
  			"id": "04220830",
  			"id_hs92": "220830",
  			"name": "Whiskies"
  		},
  		{
  			"id": "04220840",
  			"id_hs92": "220840",
  			"name": "Rum and tafia"
  		},
  		{
  			"id": "04220850",
  			"id_hs92": "220850",
  			"name": "Gin and Geneva"
  		},
  		{
  			"id": "04220890",
  			"id_hs92": "220890",
  			"name": "Alcoholic liqueurs nes"
  		},
  		{
  			"id": "042209",
  			"id_hs92": "2209",
  			"name": "Vinegar"
  		},
  		{
  			"id": "04220900",
  			"id_hs92": "220900",
  			"name": "Vinegar and substitutes for vinegar from acetic acid"
  		},
  		{
  			"id": "042301",
  			"id_hs92": "2301",
  			"name": "Animal Meal and Pellets"
  		},
  		{
  			"id": "04230110",
  			"id_hs92": "230110",
  			"name": "Flour or meal, pellet of meat or offal for animal fee"
  		},
  		{
  			"id": "04230120",
  			"id_hs92": "230120",
  			"name": "Flour or meal, pellet, fish, etc, for animal feed"
  		},
  		{
  			"id": "042302",
  			"id_hs92": "2302",
  			"name": "Bran"
  		},
  		{
  			"id": "04230210",
  			"id_hs92": "230210",
  			"name": "Maize bran, sharps, other residues"
  		},
  		{
  			"id": "04230220",
  			"id_hs92": "230220",
  			"name": "Rice bran, sharps, other residues"
  		},
  		{
  			"id": "04230230",
  			"id_hs92": "230230",
  			"name": "Wheat bran, sharps, other residues"
  		},
  		{
  			"id": "04230240",
  			"id_hs92": "230240",
  			"name": "Cereal bran, sharps, residue except maize, wheat, ric"
  		},
  		{
  			"id": "04230250",
  			"id_hs92": "230250",
  			"name": "Bran, sharps and other residues of leguminous plants"
  		},
  		{
  			"id": "042303",
  			"id_hs92": "2303",
  			"name": "Starch Residue"
  		},
  		{
  			"id": "04230310",
  			"id_hs92": "230310",
  			"name": "Residues of starch manufacture and similar residues"
  		},
  		{
  			"id": "04230320",
  			"id_hs92": "230320",
  			"name": "Beet-pulp, bagasse & other waste of sugar manufacture"
  		},
  		{
  			"id": "04230330",
  			"id_hs92": "230330",
  			"name": "Brewing or distilling dregs and waste"
  		},
  		{
  			"id": "042304",
  			"id_hs92": "2304",
  			"name": "Soybean Meal"
  		},
  		{
  			"id": "04230400",
  			"id_hs92": "230400",
  			"name": "Soya-bean oil-cake and other solid residues"
  		},
  		{
  			"id": "042305",
  			"id_hs92": "2305",
  			"name": "Ground Nut Meal"
  		},
  		{
  			"id": "04230500",
  			"id_hs92": "230500",
  			"name": "Ground-nut oil-cake and other solid residues"
  		},
  		{
  			"id": "042306",
  			"id_hs92": "2306",
  			"name": "Other Vegetable Residues"
  		},
  		{
  			"id": "04230610",
  			"id_hs92": "230610",
  			"name": "Cotton seed oil-cake and other solid residues"
  		},
  		{
  			"id": "04230620",
  			"id_hs92": "230620",
  			"name": "Linseed oil-cake and other solid residues"
  		},
  		{
  			"id": "04230630",
  			"id_hs92": "230630",
  			"name": "Sunflower seed oil-cake and other solid residues"
  		},
  		{
  			"id": "04230640",
  			"id_hs92": "230640",
  			"name": "Rape or colza seed oil-cake and other solid residues"
  		},
  		{
  			"id": "04230650",
  			"id_hs92": "230650",
  			"name": "Coconut or copra oil-cake and other solid residues"
  		},
  		{
  			"id": "04230660",
  			"id_hs92": "230660",
  			"name": "Palm nut or kernel oil cake and other solid residues"
  		},
  		{
  			"id": "04230690",
  			"id_hs92": "230690",
  			"name": "Vegetable oil-cake and other solid residues nes"
  		},
  		{
  			"id": "042307",
  			"id_hs92": "2307",
  			"name": "Wine Lees"
  		},
  		{
  			"id": "04230700",
  			"id_hs92": "230700",
  			"name": "Wine lees, argol"
  		},
  		{
  			"id": "042308",
  			"id_hs92": "2308",
  			"name": "Other Vegetable Residues and Waste"
  		},
  		{
  			"id": "04230810",
  			"id_hs92": "230810",
  			"name": "Acorns and horse-chestnuts for animal feed"
  		},
  		{
  			"id": "04230890",
  			"id_hs92": "230890",
  			"name": "Vegetable wastes and residues nes for animal feed"
  		},
  		{
  			"id": "042309",
  			"id_hs92": "2309",
  			"name": "Animal Food"
  		},
  		{
  			"id": "04230910",
  			"id_hs92": "230910",
  			"name": "Dog or cat food (retail)"
  		},
  		{
  			"id": "04230990",
  			"id_hs92": "230990",
  			"name": "Animal feed preparations nes"
  		},
  		{
  			"id": "042401",
  			"id_hs92": "2401",
  			"name": "Raw Tobacco"
  		},
  		{
  			"id": "04240110",
  			"id_hs92": "240110",
  			"name": "Tobacco, unmanufactured, not stemmed or stripped"
  		},
  		{
  			"id": "04240120",
  			"id_hs92": "240120",
  			"name": "Tobacco, unmanufactured, stemmed or stripped"
  		},
  		{
  			"id": "04240130",
  			"id_hs92": "240130",
  			"name": "Tobacco refuse"
  		},
  		{
  			"id": "042402",
  			"id_hs92": "2402",
  			"name": "Rolled Tobacco"
  		},
  		{
  			"id": "04240210",
  			"id_hs92": "240210",
  			"name": "Cigars, cheroots and cigarillos, containing tobacco"
  		},
  		{
  			"id": "04240220",
  			"id_hs92": "240220",
  			"name": "Cigarettes containing tobacco"
  		},
  		{
  			"id": "04240290",
  			"id_hs92": "240290",
  			"name": "Cigars, cheroots, cigarettes, with tobacco substitute"
  		},
  		{
  			"id": "042403",
  			"id_hs92": "2403",
  			"name": "Processed Tobacco"
  		},
  		{
  			"id": "04240310",
  			"id_hs92": "240310",
  			"name": "Cigarette or pipe tobacco and tobacco substitute mixe"
  		},
  		{
  			"id": "04240391",
  			"id_hs92": "240391",
  			"name": "Homogenized or reconstituted tobacco"
  		},
  		{
  			"id": "04240399",
  			"id_hs92": "240399",
  			"name": "Products of tobacco, substitute nes, extract, essence"
  		},
  		{
  			"id": "05",
  			"id_hs92": null,
  			"name": "Mineral Products"
  		},
  		{
  			"id": "052501",
  			"id_hs92": "2501",
  			"name": "Salt"
  		},
  		{
  			"id": "05250100",
  			"id_hs92": "250100",
  			"name": "Salt (sodium chloride) including solution, salt water"
  		},
  		{
  			"id": "052502",
  			"id_hs92": "2502",
  			"name": "Iron Pyrites"
  		},
  		{
  			"id": "05250200",
  			"id_hs92": "250200",
  			"name": "Unroasted iron pyrites"
  		},
  		{
  			"id": "052503",
  			"id_hs92": "2503",
  			"name": "Sulphur"
  		},
  		{
  			"id": "05250310",
  			"id_hs92": "250310",
  			"name": "Sulphur, crude or unrefined"
  		},
  		{
  			"id": "05250390",
  			"id_hs92": "250390",
  			"name": "refined sulphur, not sublimate, precipitate, colloida"
  		},
  		{
  			"id": "052504",
  			"id_hs92": "2504",
  			"name": "Graphite"
  		},
  		{
  			"id": "05250410",
  			"id_hs92": "250410",
  			"name": "Natural graphite in powder or flakes"
  		},
  		{
  			"id": "05250490",
  			"id_hs92": "250490",
  			"name": "Natural graphite, except powder or flakes"
  		},
  		{
  			"id": "052505",
  			"id_hs92": "2505",
  			"name": "Sand"
  		},
  		{
  			"id": "05250510",
  			"id_hs92": "250510",
  			"name": "Silica sands and quartz sands"
  		},
  		{
  			"id": "05250590",
  			"id_hs92": "250590",
  			"name": "Natural sands nes, except sand for mineral extraction"
  		},
  		{
  			"id": "052506",
  			"id_hs92": "2506",
  			"name": "Quartz"
  		},
  		{
  			"id": "05250610",
  			"id_hs92": "250610",
  			"name": "Quartz (other than natural sands)"
  		},
  		{
  			"id": "05250621",
  			"id_hs92": "250621",
  			"name": "Quartzite, crude or roughly trimmed"
  		},
  		{
  			"id": "05250629",
  			"id_hs92": "250629",
  			"name": "Quartzite, slabs etc."
  		},
  		{
  			"id": "052507",
  			"id_hs92": "2507",
  			"name": "Kaolin"
  		},
  		{
  			"id": "05250700",
  			"id_hs92": "250700",
  			"name": "Kaolin and other kaolinic clays"
  		},
  		{
  			"id": "052508",
  			"id_hs92": "2508",
  			"name": "Clays"
  		},
  		{
  			"id": "05250810",
  			"id_hs92": "250810",
  			"name": "Bentonite"
  		},
  		{
  			"id": "05250820",
  			"id_hs92": "250820",
  			"name": "Decolourising earths and fuller's earth"
  		},
  		{
  			"id": "05250830",
  			"id_hs92": "250830",
  			"name": "Fire-clay"
  		},
  		{
  			"id": "05250840",
  			"id_hs92": "250840",
  			"name": "Other clays(except expanded clay for insulation)"
  		},
  		{
  			"id": "05250850",
  			"id_hs92": "250850",
  			"name": "Andalusite, kyanite and sillimanite"
  		},
  		{
  			"id": "05250860",
  			"id_hs92": "250860",
  			"name": "Mullite"
  		},
  		{
  			"id": "05250870",
  			"id_hs92": "250870",
  			"name": "Chamotte or dinas earths"
  		},
  		{
  			"id": "052509",
  			"id_hs92": "2509",
  			"name": "Chalk"
  		},
  		{
  			"id": "05250900",
  			"id_hs92": "250900",
  			"name": "Chalk"
  		},
  		{
  			"id": "052510",
  			"id_hs92": "2510",
  			"name": "Calcium Phosphates"
  		},
  		{
  			"id": "05251010",
  			"id_hs92": "251010",
  			"name": "Natural calcium phosphates, unground"
  		},
  		{
  			"id": "05251020",
  			"id_hs92": "251020",
  			"name": "Natural calcium phosphates, ground"
  		},
  		{
  			"id": "052511",
  			"id_hs92": "2511",
  			"name": "Barium Sulphate"
  		},
  		{
  			"id": "05251110",
  			"id_hs92": "251110",
  			"name": "Natural barium sulphate (barytes)"
  		},
  		{
  			"id": "05251120",
  			"id_hs92": "251120",
  			"name": "Natural barium carbonate (witherite)"
  		},
  		{
  			"id": "052512",
  			"id_hs92": "2512",
  			"name": "Siliceous Fossil Meals"
  		},
  		{
  			"id": "05251200",
  			"id_hs92": "251200",
  			"name": "Siliceous fossil meals and earths"
  		},
  		{
  			"id": "052513",
  			"id_hs92": "2513",
  			"name": "Pumice"
  		},
  		{
  			"id": "05251311",
  			"id_hs92": "251311",
  			"name": "Pumice stones, crude or in irregular pieces"
  		},
  		{
  			"id": "05251319",
  			"id_hs92": "251319",
  			"name": "Pumice stone, worked"
  		},
  		{
  			"id": "05251321",
  			"id_hs92": "251321",
  			"name": "Emery & natural abrasives nes, crude, irregular piece"
  		},
  		{
  			"id": "05251329",
  			"id_hs92": "251329",
  			"name": "Emery, natural corundum/garnet, including heat treate"
  		},
  		{
  			"id": "052514",
  			"id_hs92": "2514",
  			"name": "Slate"
  		},
  		{
  			"id": "05251400",
  			"id_hs92": "251400",
  			"name": "Slate"
  		},
  		{
  			"id": "052515",
  			"id_hs92": "2515",
  			"name": "Marble, Travertine and Alabaster"
  		},
  		{
  			"id": "05251511",
  			"id_hs92": "251511",
  			"name": "Marble and travertine, crude or roughly trimmed"
  		},
  		{
  			"id": "05251512",
  			"id_hs92": "251512",
  			"name": "Marble and travertine in blocks etc."
  		},
  		{
  			"id": "05251520",
  			"id_hs92": "251520",
  			"name": "Ecaussine, calcareous building stone nes, alabaster"
  		},
  		{
  			"id": "052516",
  			"id_hs92": "2516",
  			"name": "Granite"
  		},
  		{
  			"id": "05251611",
  			"id_hs92": "251611",
  			"name": "Granite, crude or roughly trimmed"
  		},
  		{
  			"id": "05251612",
  			"id_hs92": "251612",
  			"name": "Granite, merely cut into blocks etc"
  		},
  		{
  			"id": "05251621",
  			"id_hs92": "251621",
  			"name": "Sandstone, crude or roughly trimmed"
  		},
  		{
  			"id": "05251622",
  			"id_hs92": "251622",
  			"name": "Sandstone, merely cut into blocks etc"
  		},
  		{
  			"id": "05251690",
  			"id_hs92": "251690",
  			"name": "Monumental or building stone nes, porphyry and basalt"
  		},
  		{
  			"id": "052517",
  			"id_hs92": "2517",
  			"name": "Gravel and Crushed Stone"
  		},
  		{
  			"id": "05251710",
  			"id_hs92": "251710",
  			"name": "Pebbles, gravel, broken & crushed stone for aggregate"
  		},
  		{
  			"id": "05251720",
  			"id_hs92": "251720",
  			"name": "Macadam of slag, dross or similar industrial waste"
  		},
  		{
  			"id": "05251730",
  			"id_hs92": "251730",
  			"name": "Tarred macadam"
  		},
  		{
  			"id": "05251741",
  			"id_hs92": "251741",
  			"name": "Marble granules, chipping and powder"
  		},
  		{
  			"id": "05251749",
  			"id_hs92": "251749",
  			"name": "Granules, chippings, powder of granite,sandstone,etc"
  		},
  		{
  			"id": "052518",
  			"id_hs92": "2518",
  			"name": "Dolomite"
  		},
  		{
  			"id": "05251810",
  			"id_hs92": "251810",
  			"name": "Dolomite not calcined"
  		},
  		{
  			"id": "05251820",
  			"id_hs92": "251820",
  			"name": "Calcined dolomite"
  		},
  		{
  			"id": "05251830",
  			"id_hs92": "251830",
  			"name": "Agglomerated dolomite (including tarred dolomite)"
  		},
  		{
  			"id": "052519",
  			"id_hs92": "2519",
  			"name": "Magnesium Carbonate"
  		},
  		{
  			"id": "05251910",
  			"id_hs92": "251910",
  			"name": "Natural magnesium carbonate (magnesite)"
  		},
  		{
  			"id": "05251990",
  			"id_hs92": "251990",
  			"name": "Magnesia, fused, dead-burned etc and magnesium oxide"
  		},
  		{
  			"id": "052520",
  			"id_hs92": "2520",
  			"name": "Gypsum"
  		},
  		{
  			"id": "05252010",
  			"id_hs92": "252010",
  			"name": "Gypsum, anhydride"
  		},
  		{
  			"id": "05252020",
  			"id_hs92": "252020",
  			"name": "Plasters (calcined gypsum or calcium sulphate) etc"
  		},
  		{
  			"id": "052521",
  			"id_hs92": "2521",
  			"name": "Limestone"
  		},
  		{
  			"id": "05252100",
  			"id_hs92": "252100",
  			"name": "Limestone materials for manufacture of lime or cement"
  		},
  		{
  			"id": "052522",
  			"id_hs92": "2522",
  			"name": "Quicklime"
  		},
  		{
  			"id": "05252210",
  			"id_hs92": "252210",
  			"name": "Quicklime"
  		},
  		{
  			"id": "05252220",
  			"id_hs92": "252220",
  			"name": "Slaked lime"
  		},
  		{
  			"id": "05252230",
  			"id_hs92": "252230",
  			"name": "Hydraulic lime"
  		},
  		{
  			"id": "052523",
  			"id_hs92": "2523",
  			"name": "Cement"
  		},
  		{
  			"id": "05252310",
  			"id_hs92": "252310",
  			"name": "Cement clinkers"
  		},
  		{
  			"id": "05252321",
  			"id_hs92": "252321",
  			"name": "Portland cement, white or white artificially coloured"
  		},
  		{
  			"id": "05252329",
  			"id_hs92": "252329",
  			"name": "Portland cement, other than white cement"
  		},
  		{
  			"id": "05252330",
  			"id_hs92": "252330",
  			"name": "Aluminous cement"
  		},
  		{
  			"id": "05252390",
  			"id_hs92": "252390",
  			"name": "Hydraulic cements except portland or aluminous"
  		},
  		{
  			"id": "052524",
  			"id_hs92": "2524",
  			"name": "Asbestos"
  		},
  		{
  			"id": "05252400",
  			"id_hs92": "252400",
  			"name": "Asbestos"
  		},
  		{
  			"id": "052525",
  			"id_hs92": "2525",
  			"name": "Mica"
  		},
  		{
  			"id": "05252510",
  			"id_hs92": "252510",
  			"name": "Mica in crude form, sheets and splittings"
  		},
  		{
  			"id": "05252520",
  			"id_hs92": "252520",
  			"name": "Mica powder"
  		},
  		{
  			"id": "05252530",
  			"id_hs92": "252530",
  			"name": "Mica waste"
  		},
  		{
  			"id": "052526",
  			"id_hs92": "2526",
  			"name": "Soapstone"
  		},
  		{
  			"id": "05252610",
  			"id_hs92": "252610",
  			"name": "Natural steatite, not crushed or powdered"
  		},
  		{
  			"id": "05252620",
  			"id_hs92": "252620",
  			"name": "Natural steatite, crushed or powdered"
  		},
  		{
  			"id": "052527",
  			"id_hs92": "2527",
  			"name": "Cryolite"
  		},
  		{
  			"id": "05252700",
  			"id_hs92": "252700",
  			"name": "Natural cryolite, natural chiolite"
  		},
  		{
  			"id": "052528",
  			"id_hs92": "2528",
  			"name": "Borax"
  		},
  		{
  			"id": "05252810",
  			"id_hs92": "252810",
  			"name": "Natural sodium borates and concentrates"
  		},
  		{
  			"id": "05252890",
  			"id_hs92": "252890",
  			"name": "Natural borates etc nes, natural boric acid (<85%)"
  		},
  		{
  			"id": "052529",
  			"id_hs92": "2529",
  			"name": "Feldspar"
  		},
  		{
  			"id": "05252910",
  			"id_hs92": "252910",
  			"name": "Feldspar"
  		},
  		{
  			"id": "05252921",
  			"id_hs92": "252921",
  			"name": "Fluorspar, <97% calcium fluoride"
  		},
  		{
  			"id": "05252922",
  			"id_hs92": "252922",
  			"name": "Fluorspar, >97% calcium fluoride"
  		},
  		{
  			"id": "05252930",
  			"id_hs92": "252930",
  			"name": "Leucite, nepheline and nepheline syenite"
  		},
  		{
  			"id": "052530",
  			"id_hs92": "2530",
  			"name": "Other Mineral"
  		},
  		{
  			"id": "05253010",
  			"id_hs92": "253010",
  			"name": "Vermiculite, perlite and chlorites, unexpanded"
  		},
  		{
  			"id": "05253020",
  			"id_hs92": "253020",
  			"name": "Kieserite, epsomite (natural magnesium sulphates)"
  		},
  		{
  			"id": "05253030",
  			"id_hs92": "253030",
  			"name": "Earth colours"
  		},
  		{
  			"id": "05253040",
  			"id_hs92": "253040",
  			"name": "Natural micaceous iron oxides"
  		},
  		{
  			"id": "05253090",
  			"id_hs92": "253090",
  			"name": "Mineral substances, nes"
  		},
  		{
  			"id": "052601",
  			"id_hs92": "2601",
  			"name": "Iron Ore"
  		},
  		{
  			"id": "05260111",
  			"id_hs92": "260111",
  			"name": "Iron ore, concentrate, not iron pyrites,unagglomerate"
  		},
  		{
  			"id": "05260112",
  			"id_hs92": "260112",
  			"name": "Iron ore, concentrate, not iron pyrites, agglomerated"
  		},
  		{
  			"id": "05260120",
  			"id_hs92": "260120",
  			"name": "Roasted iron pyrites"
  		},
  		{
  			"id": "052602",
  			"id_hs92": "2602",
  			"name": "Manganese Ore"
  		},
  		{
  			"id": "05260200",
  			"id_hs92": "260200",
  			"name": "Manganese ores, concentrates, iron ores >20% Manganes"
  		},
  		{
  			"id": "052603",
  			"id_hs92": "2603",
  			"name": "Copper Ore"
  		},
  		{
  			"id": "05260300",
  			"id_hs92": "260300",
  			"name": "Copper ores and concentrates"
  		},
  		{
  			"id": "052604",
  			"id_hs92": "2604",
  			"name": "Nickel Ore"
  		},
  		{
  			"id": "05260400",
  			"id_hs92": "260400",
  			"name": "Nickel ores and concentrates"
  		},
  		{
  			"id": "052605",
  			"id_hs92": "2605",
  			"name": "Cobalt Ore"
  		},
  		{
  			"id": "05260500",
  			"id_hs92": "260500",
  			"name": "Cobalt ores and concentrates"
  		},
  		{
  			"id": "052606",
  			"id_hs92": "2606",
  			"name": "Aluminium Ore"
  		},
  		{
  			"id": "05260600",
  			"id_hs92": "260600",
  			"name": "Aluminium ores and concentrates"
  		},
  		{
  			"id": "052607",
  			"id_hs92": "2607",
  			"name": "Lead Ore"
  		},
  		{
  			"id": "05260700",
  			"id_hs92": "260700",
  			"name": "Lead ores and concentrates"
  		},
  		{
  			"id": "052608",
  			"id_hs92": "2608",
  			"name": "Zinc Ore"
  		},
  		{
  			"id": "05260800",
  			"id_hs92": "260800",
  			"name": "Zinc ores and concentrates"
  		},
  		{
  			"id": "052609",
  			"id_hs92": "2609",
  			"name": "Tin Ores"
  		},
  		{
  			"id": "05260900",
  			"id_hs92": "260900",
  			"name": "Tin ores and concentrates"
  		},
  		{
  			"id": "052610",
  			"id_hs92": "2610",
  			"name": "Chromium Ore"
  		},
  		{
  			"id": "05261000",
  			"id_hs92": "261000",
  			"name": "Chromium ores and concentrates"
  		},
  		{
  			"id": "052611",
  			"id_hs92": "2611",
  			"name": "Tungsten Ore"
  		},
  		{
  			"id": "05261100",
  			"id_hs92": "261100",
  			"name": "Tungsten ores and concentrates"
  		},
  		{
  			"id": "052612",
  			"id_hs92": "2612",
  			"name": "Uranium and Thorium Ore"
  		},
  		{
  			"id": "05261210",
  			"id_hs92": "261210",
  			"name": "Uranium ores and concentrates"
  		},
  		{
  			"id": "05261220",
  			"id_hs92": "261220",
  			"name": "Thorium ores and concentrates"
  		},
  		{
  			"id": "052613",
  			"id_hs92": "2613",
  			"name": "Molybdenum Ore"
  		},
  		{
  			"id": "05261310",
  			"id_hs92": "261310",
  			"name": "Molybdenum concentrates, roasted"
  		},
  		{
  			"id": "05261390",
  			"id_hs92": "261390",
  			"name": "Molybdenum ores and concentrates except roasted"
  		},
  		{
  			"id": "052614",
  			"id_hs92": "2614",
  			"name": "Titanium Ore"
  		},
  		{
  			"id": "05261400",
  			"id_hs92": "261400",
  			"name": "Titanium ores and concentrates"
  		},
  		{
  			"id": "052615",
  			"id_hs92": "2615",
  			"name": "Niobium, Tantalum, Vanadium and Zirconium Ore"
  		},
  		{
  			"id": "05261510",
  			"id_hs92": "261510",
  			"name": "Zirconium ores and concentrates"
  		},
  		{
  			"id": "05261590",
  			"id_hs92": "261590",
  			"name": "Niobium, tantalum and vanadium ores and concentrates"
  		},
  		{
  			"id": "052616",
  			"id_hs92": "2616",
  			"name": "Precious Metal Ore"
  		},
  		{
  			"id": "05261610",
  			"id_hs92": "261610",
  			"name": "Silver ores and concentrates"
  		},
  		{
  			"id": "05261690",
  			"id_hs92": "261690",
  			"name": "Precious metal ores and concentrates except silver"
  		},
  		{
  			"id": "052617",
  			"id_hs92": "2617",
  			"name": "Other Ores"
  		},
  		{
  			"id": "05261710",
  			"id_hs92": "261710",
  			"name": "Antimony ores and concentrates"
  		},
  		{
  			"id": "05261790",
  			"id_hs92": "261790",
  			"name": "ores and concentrates nes"
  		},
  		{
  			"id": "052618",
  			"id_hs92": "2618",
  			"name": "Granulated Slag"
  		},
  		{
  			"id": "05261800",
  			"id_hs92": "261800",
  			"name": "Granulated slag (slag sand) from iron, steel industry"
  		},
  		{
  			"id": "052619",
  			"id_hs92": "2619",
  			"name": "Slag Dross"
  		},
  		{
  			"id": "05261900",
  			"id_hs92": "261900",
  			"name": "Waste, scale, dross, slag of iron or steel industry"
  		},
  		{
  			"id": "052620",
  			"id_hs92": "2620",
  			"name": "Non-Iron and Steel Slag, Ash and Residues"
  		},
  		{
  			"id": "05262011",
  			"id_hs92": "262011",
  			"name": "Ash or residues containing hard zinc spelter"
  		},
  		{
  			"id": "05262019",
  			"id_hs92": "262019",
  			"name": "Ash or residues containing mainly zinc (not spelter)"
  		},
  		{
  			"id": "05262020",
  			"id_hs92": "262020",
  			"name": "Ash or residues containing mainly lead"
  		},
  		{
  			"id": "05262030",
  			"id_hs92": "262030",
  			"name": "Ash or residues containing mainly copper"
  		},
  		{
  			"id": "05262040",
  			"id_hs92": "262040",
  			"name": "Ash or residues containing mainly aluminium"
  		},
  		{
  			"id": "05262050",
  			"id_hs92": "262050",
  			"name": "Ash or residues containing mainly vanadium"
  		},
  		{
  			"id": "05262090",
  			"id_hs92": "262090",
  			"name": "Ash or residues containing metals, metal compounds ne"
  		},
  		{
  			"id": "052621",
  			"id_hs92": "2621",
  			"name": "Other Slag and Ash"
  		},
  		{
  			"id": "05262100",
  			"id_hs92": "262100",
  			"name": "Slag and ash nes, including seaweed ash (kelp)"
  		},
  		{
  			"id": "052701",
  			"id_hs92": "2701",
  			"name": "Coal Briquettes"
  		},
  		{
  			"id": "05270111",
  			"id_hs92": "270111",
  			"name": "Anthracite, not agglomerated"
  		},
  		{
  			"id": "05270112",
  			"id_hs92": "270112",
  			"name": "Bituminous coal, not agglomerated"
  		},
  		{
  			"id": "05270119",
  			"id_hs92": "270119",
  			"name": "Coal except anthracite or bituminous, not agglomerate"
  		},
  		{
  			"id": "05270120",
  			"id_hs92": "270120",
  			"name": "Coal briquettes, ovoids, similar made solid fuels"
  		},
  		{
  			"id": "052702",
  			"id_hs92": "2702",
  			"name": "Lignite"
  		},
  		{
  			"id": "05270210",
  			"id_hs92": "270210",
  			"name": "Lignite, not agglomerated"
  		},
  		{
  			"id": "05270220",
  			"id_hs92": "270220",
  			"name": "Lignite, agglomerated"
  		},
  		{
  			"id": "052703",
  			"id_hs92": "2703",
  			"name": "Peat"
  		},
  		{
  			"id": "05270300",
  			"id_hs92": "270300",
  			"name": "Peat (including peat litter)"
  		},
  		{
  			"id": "052704",
  			"id_hs92": "2704",
  			"name": "Coke"
  		},
  		{
  			"id": "05270400",
  			"id_hs92": "270400",
  			"name": "Coke, semi-coke of coal, lignite, peat & retort carbo"
  		},
  		{
  			"id": "052705",
  			"id_hs92": "2705",
  			"name": "Non-Petroleum Gas"
  		},
  		{
  			"id": "05270500",
  			"id_hs92": "270500",
  			"name": "Coal gas, water gas, etc. (not gaseous hydrocarbons)"
  		},
  		{
  			"id": "052706",
  			"id_hs92": "2706",
  			"name": "Tar"
  		},
  		{
  			"id": "05270600",
  			"id_hs92": "270600",
  			"name": "Tar from coal, lignite or peat, other mineral tars"
  		},
  		{
  			"id": "052707",
  			"id_hs92": "2707",
  			"name": "Coal Tar Oil"
  		},
  		{
  			"id": "05270710",
  			"id_hs92": "270710",
  			"name": "Benzol"
  		},
  		{
  			"id": "05270720",
  			"id_hs92": "270720",
  			"name": "Toluole"
  		},
  		{
  			"id": "05270730",
  			"id_hs92": "270730",
  			"name": "Xylole"
  		},
  		{
  			"id": "05270740",
  			"id_hs92": "270740",
  			"name": "Naphthalene"
  		},
  		{
  			"id": "05270750",
  			"id_hs92": "270750",
  			"name": "Aromatic hydrocarbon mixtures from coal tar, nes"
  		},
  		{
  			"id": "05270760",
  			"id_hs92": "270760",
  			"name": "Phenols"
  		},
  		{
  			"id": "05270791",
  			"id_hs92": "270791",
  			"name": "Creosote oils"
  		},
  		{
  			"id": "05270799",
  			"id_hs92": "270799",
  			"name": "Coal tar distillation products nes"
  		},
  		{
  			"id": "052708",
  			"id_hs92": "2708",
  			"name": "Pitch Coke"
  		},
  		{
  			"id": "05270810",
  			"id_hs92": "270810",
  			"name": "Pitch"
  		},
  		{
  			"id": "05270820",
  			"id_hs92": "270820",
  			"name": "Pitch coke"
  		},
  		{
  			"id": "052709",
  			"id_hs92": "2709",
  			"name": "Crude Petroleum"
  		},
  		{
  			"id": "05270900",
  			"id_hs92": "270900",
  			"name": "Petroleum oils, oils from bituminous minerals, crude"
  		},
  		{
  			"id": "052710",
  			"id_hs92": "2710",
  			"name": "Refined Petroleum"
  		},
  		{
  			"id": "05271000",
  			"id_hs92": "271000",
  			"name": "Oils petroleum, bituminous, distillates, except crude"
  		},
  		{
  			"id": "05271011",
  			"id_hs92": "271011",
  			"name": "Aviation spirit"
  		},
  		{
  			"id": "05271012",
  			"id_hs92": "271012",
  			"name": "Petroleum spirit for motor vehicles"
  		},
  		{
  			"id": "05271013",
  			"id_hs92": "271013",
  			"name": "Petroleum spirit except aviation or motor fuel"
  		},
  		{
  			"id": "05271014",
  			"id_hs92": "271014",
  			"name": "Petroleum spirit-type fuel"
  		},
  		{
  			"id": "05271015",
  			"id_hs92": "271015",
  			"name": "White spirit"
  		},
  		{
  			"id": "05271016",
  			"id_hs92": "271016",
  			"name": "Petroleum naphtha"
  		},
  		{
  			"id": "05271019",
  			"id_hs92": "271019",
  			"name": "Light petroleum distillates nes"
  		},
  		{
  			"id": "05271021",
  			"id_hs92": "271021",
  			"name": "Kerosene jet fuel"
  		},
  		{
  			"id": "05271022",
  			"id_hs92": "271022",
  			"name": "Kerosene, for furnaces"
  		},
  		{
  			"id": "05271025",
  			"id_hs92": "271025",
  			"name": "Kerosene lamp oil, motor kerosene, light diesel, etc"
  		},
  		{
  			"id": "05271026",
  			"id_hs92": "271026",
  			"name": "Gas oils - bunker oil, No.1 furnace, motor diesel"
  		},
  		{
  			"id": "05271027",
  			"id_hs92": "271027",
  			"name": "Diesel oils- No.2 furnace, marine diesel"
  		},
  		{
  			"id": "05271029",
  			"id_hs92": "271029",
  			"name": "Fuel oils nes, heavy distillates"
  		},
  		{
  			"id": "05271091",
  			"id_hs92": "271091",
  			"name": "Heavy furnace oil (heating or motor fuel) <1% sulphur"
  		},
  		{
  			"id": "05271093",
  			"id_hs92": "271093",
  			"name": "Heavy furnace oil nes"
  		},
  		{
  			"id": "05271094",
  			"id_hs92": "271094",
  			"name": "Petroleum oil used in road building"
  		},
  		{
  			"id": "05271095",
  			"id_hs92": "271095",
  			"name": "Petroleum lubricating oils"
  		},
  		{
  			"id": "05271096",
  			"id_hs92": "271096",
  			"name": "Petroleum lubricating greases"
  		},
  		{
  			"id": "05271099",
  			"id_hs92": "271099",
  			"name": "Petroleum oils and products nes"
  		},
  		{
  			"id": "052711",
  			"id_hs92": "2711",
  			"name": "Petroleum Gas"
  		},
  		{
  			"id": "05271111",
  			"id_hs92": "271111",
  			"name": "Natural gas, liquefied"
  		},
  		{
  			"id": "05271112",
  			"id_hs92": "271112",
  			"name": "Propane, liquefied"
  		},
  		{
  			"id": "05271113",
  			"id_hs92": "271113",
  			"name": "Butanes, liquefied"
  		},
  		{
  			"id": "05271114",
  			"id_hs92": "271114",
  			"name": "Ethylene, propylene, butylene, butadiene, liquefied"
  		},
  		{
  			"id": "05271119",
  			"id_hs92": "271119",
  			"name": "Petroleum gases & gaseous hydrocarbons nes, liquefied"
  		},
  		{
  			"id": "05271121",
  			"id_hs92": "271121",
  			"name": "Natural gas in gaseous state"
  		},
  		{
  			"id": "05271129",
  			"id_hs92": "271129",
  			"name": "Petroleum gases and gaseous hydrocarbons nes, as gas"
  		},
  		{
  			"id": "052712",
  			"id_hs92": "2712",
  			"name": "Petroleum Jelly"
  		},
  		{
  			"id": "05271210",
  			"id_hs92": "271210",
  			"name": "Petroleum jelly"
  		},
  		{
  			"id": "05271220",
  			"id_hs92": "271220",
  			"name": "Paraffin wax containing <0.75% oil"
  		},
  		{
  			"id": "05271290",
  			"id_hs92": "271290",
  			"name": "Mineral waxes nes"
  		},
  		{
  			"id": "052713",
  			"id_hs92": "2713",
  			"name": "Petroleum Coke"
  		},
  		{
  			"id": "05271311",
  			"id_hs92": "271311",
  			"name": "Petroleum coke, not calcined"
  		},
  		{
  			"id": "05271312",
  			"id_hs92": "271312",
  			"name": "Petroleum coke, calcined"
  		},
  		{
  			"id": "05271320",
  			"id_hs92": "271320",
  			"name": "Petroleum bitumen"
  		},
  		{
  			"id": "05271390",
  			"id_hs92": "271390",
  			"name": "Residues of petroleum oils etc. nes"
  		},
  		{
  			"id": "052714",
  			"id_hs92": "2714",
  			"name": "Asphalt"
  		},
  		{
  			"id": "05271410",
  			"id_hs92": "271410",
  			"name": "Bituminous or oil shale and tar sands"
  		},
  		{
  			"id": "05271490",
  			"id_hs92": "271490",
  			"name": "Bitumen and asphalt, asphaltites and asphaltic rocks"
  		},
  		{
  			"id": "052715",
  			"id_hs92": "2715",
  			"name": "Asphalt Mixtures"
  		},
  		{
  			"id": "05271500",
  			"id_hs92": "271500",
  			"name": "Bituminous mix, mastic from asphalt, bitumen/tar/pitc"
  		},
  		{
  			"id": "052716",
  			"id_hs92": "2716",
  			"name": "Electricity"
  		},
  		{
  			"id": "05271600",
  			"id_hs92": "271600",
  			"name": "Electrical energy"
  		},
  		{
  			"id": "06",
  			"id_hs92": null,
  			"name": "Chemical Products"
  		},
  		{
  			"id": "062801",
  			"id_hs92": "2801",
  			"name": "Halogens"
  		},
  		{
  			"id": "06280110",
  			"id_hs92": "280110",
  			"name": "Chlorine"
  		},
  		{
  			"id": "06280120",
  			"id_hs92": "280120",
  			"name": "Iodine"
  		},
  		{
  			"id": "06280130",
  			"id_hs92": "280130",
  			"name": "Fluorine, bromine"
  		},
  		{
  			"id": "062802",
  			"id_hs92": "2802",
  			"name": "Sulfur"
  		},
  		{
  			"id": "06280200",
  			"id_hs92": "280200",
  			"name": "Sulphur, sublimed or precipitated, colloidal sulphur"
  		},
  		{
  			"id": "062803",
  			"id_hs92": "2803",
  			"name": "Carbon"
  		},
  		{
  			"id": "06280300",
  			"id_hs92": "280300",
  			"name": "Carbon (carbon blacks and other forms of carbon, nes)"
  		},
  		{
  			"id": "062804",
  			"id_hs92": "2804",
  			"name": "Hydrogen"
  		},
  		{
  			"id": "06280410",
  			"id_hs92": "280410",
  			"name": "Hydrogen"
  		},
  		{
  			"id": "06280421",
  			"id_hs92": "280421",
  			"name": "Argon"
  		},
  		{
  			"id": "06280429",
  			"id_hs92": "280429",
  			"name": "Rare gases other than argon"
  		},
  		{
  			"id": "06280430",
  			"id_hs92": "280430",
  			"name": "Nitrogen"
  		},
  		{
  			"id": "06280440",
  			"id_hs92": "280440",
  			"name": "Oxygen"
  		},
  		{
  			"id": "06280450",
  			"id_hs92": "280450",
  			"name": "Boron, tellurium"
  		},
  		{
  			"id": "06280461",
  			"id_hs92": "280461",
  			"name": "Silicon, >99.99% pure"
  		},
  		{
  			"id": "06280469",
  			"id_hs92": "280469",
  			"name": "Silicon, <99.99% pure"
  		},
  		{
  			"id": "06280470",
  			"id_hs92": "280470",
  			"name": "Phosphorus"
  		},
  		{
  			"id": "06280480",
  			"id_hs92": "280480",
  			"name": "Arsenic"
  		},
  		{
  			"id": "06280490",
  			"id_hs92": "280490",
  			"name": "Selenium"
  		},
  		{
  			"id": "062805",
  			"id_hs92": "2805",
  			"name": "Alkaline Metals"
  		},
  		{
  			"id": "06280511",
  			"id_hs92": "280511",
  			"name": "Sodium"
  		},
  		{
  			"id": "06280519",
  			"id_hs92": "280519",
  			"name": "Alkali metals other than sodium"
  		},
  		{
  			"id": "06280521",
  			"id_hs92": "280521",
  			"name": "Calcium"
  		},
  		{
  			"id": "06280522",
  			"id_hs92": "280522",
  			"name": "Strontium and barium"
  		},
  		{
  			"id": "06280530",
  			"id_hs92": "280530",
  			"name": "Rare-earth metals, scandium and yttrium"
  		},
  		{
  			"id": "06280540",
  			"id_hs92": "280540",
  			"name": "Mercury"
  		},
  		{
  			"id": "062806",
  			"id_hs92": "2806",
  			"name": "Hydrochloric Acid"
  		},
  		{
  			"id": "06280610",
  			"id_hs92": "280610",
  			"name": "Hydrogen chloride (hydrochloric acid)"
  		},
  		{
  			"id": "06280620",
  			"id_hs92": "280620",
  			"name": "Chlorosulphuric acid"
  		},
  		{
  			"id": "062807",
  			"id_hs92": "2807",
  			"name": "Sulfuric Acid"
  		},
  		{
  			"id": "06280700",
  			"id_hs92": "280700",
  			"name": "Sulphuric acid, oleum"
  		},
  		{
  			"id": "062808",
  			"id_hs92": "2808",
  			"name": "Nitric Acids"
  		},
  		{
  			"id": "06280800",
  			"id_hs92": "280800",
  			"name": "Nitric acid, sulphonitric acids"
  		},
  		{
  			"id": "062809",
  			"id_hs92": "2809",
  			"name": "Phosphoric Acid"
  		},
  		{
  			"id": "06280910",
  			"id_hs92": "280910",
  			"name": "Diphosphorus pentaoxide"
  		},
  		{
  			"id": "06280920",
  			"id_hs92": "280920",
  			"name": "Phosphoric acid and polyphosphoric acids"
  		},
  		{
  			"id": "062810",
  			"id_hs92": "2810",
  			"name": "Boron"
  		},
  		{
  			"id": "06281000",
  			"id_hs92": "281000",
  			"name": "Oxides of boron, boric acids"
  		},
  		{
  			"id": "062811",
  			"id_hs92": "2811",
  			"name": "Other Inorganic Acids"
  		},
  		{
  			"id": "06281111",
  			"id_hs92": "281111",
  			"name": "Hydrogen fluoride (hydrofluoric acid)"
  		},
  		{
  			"id": "06281119",
  			"id_hs92": "281119",
  			"name": "Inorganic acids nes"
  		},
  		{
  			"id": "06281121",
  			"id_hs92": "281121",
  			"name": "Carbon dioxide"
  		},
  		{
  			"id": "06281122",
  			"id_hs92": "281122",
  			"name": "Silicon dioxide"
  		},
  		{
  			"id": "06281123",
  			"id_hs92": "281123",
  			"name": "Sulphur dioxide"
  		},
  		{
  			"id": "06281129",
  			"id_hs92": "281129",
  			"name": "Inorganic oxygen compounds of non-metals nes"
  		},
  		{
  			"id": "062812",
  			"id_hs92": "2812",
  			"name": "Halides"
  		},
  		{
  			"id": "06281210",
  			"id_hs92": "281210",
  			"name": "Chlorides and chloride oxides of non-metals"
  		},
  		{
  			"id": "06281290",
  			"id_hs92": "281290",
  			"name": "Halides & halide oxides of non-metals (not chlorides)"
  		},
  		{
  			"id": "062813",
  			"id_hs92": "2813",
  			"name": "Nonmetal Sulfides"
  		},
  		{
  			"id": "06281310",
  			"id_hs92": "281310",
  			"name": "Carbon disulphide"
  		},
  		{
  			"id": "06281390",
  			"id_hs92": "281390",
  			"name": "Sulphides of non-metals except carbon disulphide"
  		},
  		{
  			"id": "062814",
  			"id_hs92": "2814",
  			"name": "Ammonia"
  		},
  		{
  			"id": "06281410",
  			"id_hs92": "281410",
  			"name": "Anhydrous ammonia"
  		},
  		{
  			"id": "06281420",
  			"id_hs92": "281420",
  			"name": "Ammonia in aqueous solution"
  		},
  		{
  			"id": "062815",
  			"id_hs92": "2815",
  			"name": "Sodium or Potassium Peroxides"
  		},
  		{
  			"id": "06281511",
  			"id_hs92": "281511",
  			"name": "Sodium hydroxide (caustic soda) solid"
  		},
  		{
  			"id": "06281512",
  			"id_hs92": "281512",
  			"name": "Sodium hydroxide (caustic soda) in aqueous solution"
  		},
  		{
  			"id": "06281520",
  			"id_hs92": "281520",
  			"name": "Potassium hydroxide (caustic potash)"
  		},
  		{
  			"id": "06281530",
  			"id_hs92": "281530",
  			"name": "Peroxides of sodium or potassium"
  		},
  		{
  			"id": "062816",
  			"id_hs92": "2816",
  			"name": "Magnesium Hydroxide and Peroxide"
  		},
  		{
  			"id": "06281610",
  			"id_hs92": "281610",
  			"name": "Magnesium hydroxide and peroxide"
  		},
  		{
  			"id": "06281620",
  			"id_hs92": "281620",
  			"name": "Strontium oxide, hydroxide and peroxide"
  		},
  		{
  			"id": "06281630",
  			"id_hs92": "281630",
  			"name": "Barium oxide, hydroxide and peroxide"
  		},
  		{
  			"id": "062817",
  			"id_hs92": "2817",
  			"name": "Zinc Oxide and Peroxide"
  		},
  		{
  			"id": "06281700",
  			"id_hs92": "281700",
  			"name": "Zinc oxide and peroxide"
  		},
  		{
  			"id": "062818",
  			"id_hs92": "2818",
  			"name": "Aluminium Oxide"
  		},
  		{
  			"id": "06281810",
  			"id_hs92": "281810",
  			"name": "Artificial corundum"
  		},
  		{
  			"id": "06281820",
  			"id_hs92": "281820",
  			"name": "Aluminium oxide, except artificial corundum"
  		},
  		{
  			"id": "06281830",
  			"id_hs92": "281830",
  			"name": "Aluminium hydroxide"
  		},
  		{
  			"id": "062819",
  			"id_hs92": "2819",
  			"name": "Chromium Oxides and Hydroxides"
  		},
  		{
  			"id": "06281910",
  			"id_hs92": "281910",
  			"name": "Chromium trioxide"
  		},
  		{
  			"id": "06281990",
  			"id_hs92": "281990",
  			"name": "Chromium oxides, hydroxides except chromium trioxide"
  		},
  		{
  			"id": "062820",
  			"id_hs92": "2820",
  			"name": "Manganese Oxides"
  		},
  		{
  			"id": "06282010",
  			"id_hs92": "282010",
  			"name": "Manganese dioxide"
  		},
  		{
  			"id": "06282090",
  			"id_hs92": "282090",
  			"name": "Manganese oxides other than manganese dioxide"
  		},
  		{
  			"id": "062821",
  			"id_hs92": "2821",
  			"name": "Iron Oxides and Hydroxides"
  		},
  		{
  			"id": "06282110",
  			"id_hs92": "282110",
  			"name": "Iron oxides and hydroxides"
  		},
  		{
  			"id": "06282120",
  			"id_hs92": "282120",
  			"name": "Earth colours with >70% iron as Ferrous oxide"
  		},
  		{
  			"id": "062822",
  			"id_hs92": "2822",
  			"name": "Cobalt Oxides and Hydroxides"
  		},
  		{
  			"id": "06282200",
  			"id_hs92": "282200",
  			"name": "Cobalt oxides and hydroxides"
  		},
  		{
  			"id": "062823",
  			"id_hs92": "2823",
  			"name": "Titanium Oxides"
  		},
  		{
  			"id": "06282300",
  			"id_hs92": "282300",
  			"name": "Titanium oxides"
  		},
  		{
  			"id": "062824",
  			"id_hs92": "2824",
  			"name": "Lead Oxides"
  		},
  		{
  			"id": "06282410",
  			"id_hs92": "282410",
  			"name": "Lead monoxide (litharge, massicot)"
  		},
  		{
  			"id": "06282420",
  			"id_hs92": "282420",
  			"name": "Red lead and orange lead"
  		},
  		{
  			"id": "06282490",
  			"id_hs92": "282490",
  			"name": "Lead oxides other than monoxide, red and orange lead"
  		},
  		{
  			"id": "062825",
  			"id_hs92": "2825",
  			"name": "Inorganic Salts"
  		},
  		{
  			"id": "06282510",
  			"id_hs92": "282510",
  			"name": "Hydrazine and hydroxylamine, inorganic salts"
  		},
  		{
  			"id": "06282520",
  			"id_hs92": "282520",
  			"name": "Lithium oxide and hydroxide"
  		},
  		{
  			"id": "06282530",
  			"id_hs92": "282530",
  			"name": "Vanadium oxides and hydroxides"
  		},
  		{
  			"id": "06282540",
  			"id_hs92": "282540",
  			"name": "Nickel oxides and hydroxides"
  		},
  		{
  			"id": "06282550",
  			"id_hs92": "282550",
  			"name": "Copper oxides and hydroxides"
  		},
  		{
  			"id": "06282560",
  			"id_hs92": "282560",
  			"name": "Germanium oxides and zirconium dioxide"
  		},
  		{
  			"id": "06282570",
  			"id_hs92": "282570",
  			"name": "Molybdenum oxides and hydroxides"
  		},
  		{
  			"id": "06282580",
  			"id_hs92": "282580",
  			"name": "Antimony oxides"
  		},
  		{
  			"id": "06282590",
  			"id_hs92": "282590",
  			"name": "Metal bases, oxides, hydroxides, peroxides, nes"
  		},
  		{
  			"id": "062826",
  			"id_hs92": "2826",
  			"name": "Fluorides"
  		},
  		{
  			"id": "06282611",
  			"id_hs92": "282611",
  			"name": "Fluorides of ammonium or of sodium"
  		},
  		{
  			"id": "06282612",
  			"id_hs92": "282612",
  			"name": "Aluminium fluoride"
  		},
  		{
  			"id": "06282619",
  			"id_hs92": "282619",
  			"name": "Fluorides of metals except ammonium, sodium, aluminiu"
  		},
  		{
  			"id": "06282620",
  			"id_hs92": "282620",
  			"name": "Fluorosilicates of sodium or of potassium"
  		},
  		{
  			"id": "06282630",
  			"id_hs92": "282630",
  			"name": "Sodium hexafluoroaluminate (synthetic cryolite)"
  		},
  		{
  			"id": "06282690",
  			"id_hs92": "282690",
  			"name": "Complex fluorine salts except synthetic cryolite"
  		},
  		{
  			"id": "062827",
  			"id_hs92": "2827",
  			"name": "Chlorides"
  		},
  		{
  			"id": "06282710",
  			"id_hs92": "282710",
  			"name": "Ammonium chloride"
  		},
  		{
  			"id": "06282720",
  			"id_hs92": "282720",
  			"name": "Calcium chloride"
  		},
  		{
  			"id": "06282731",
  			"id_hs92": "282731",
  			"name": "Magnesium chloride"
  		},
  		{
  			"id": "06282732",
  			"id_hs92": "282732",
  			"name": "Aluminium chloride"
  		},
  		{
  			"id": "06282733",
  			"id_hs92": "282733",
  			"name": "Iron chlorides"
  		},
  		{
  			"id": "06282734",
  			"id_hs92": "282734",
  			"name": "Cobalt chloride"
  		},
  		{
  			"id": "06282735",
  			"id_hs92": "282735",
  			"name": "Nickel chloride"
  		},
  		{
  			"id": "06282736",
  			"id_hs92": "282736",
  			"name": "Zinc chloride"
  		},
  		{
  			"id": "06282737",
  			"id_hs92": "282737",
  			"name": "Tin chlorides"
  		},
  		{
  			"id": "06282738",
  			"id_hs92": "282738",
  			"name": "Barium chloride"
  		},
  		{
  			"id": "06282739",
  			"id_hs92": "282739",
  			"name": "Chlorides of metals nes"
  		},
  		{
  			"id": "06282741",
  			"id_hs92": "282741",
  			"name": "Chloride oxides and chloride hydroxides of copper"
  		},
  		{
  			"id": "06282749",
  			"id_hs92": "282749",
  			"name": "Chloride oxides, hydroxides of metals except copper"
  		},
  		{
  			"id": "06282751",
  			"id_hs92": "282751",
  			"name": "Bromides of sodium and potassium"
  		},
  		{
  			"id": "06282759",
  			"id_hs92": "282759",
  			"name": "Bromides and bromide oxides of non-alkali metals"
  		},
  		{
  			"id": "06282760",
  			"id_hs92": "282760",
  			"name": "Iodides and odide oxides of metals"
  		},
  		{
  			"id": "062828",
  			"id_hs92": "2828",
  			"name": "Hypochlorites"
  		},
  		{
  			"id": "06282810",
  			"id_hs92": "282810",
  			"name": "Commercial and other calcium hypochlorite"
  		},
  		{
  			"id": "06282890",
  			"id_hs92": "282890",
  			"name": "Hypochlorites nes, chlorites & hypobromites of metals"
  		},
  		{
  			"id": "062829",
  			"id_hs92": "2829",
  			"name": "Chlorates and Perchlorates"
  		},
  		{
  			"id": "06282911",
  			"id_hs92": "282911",
  			"name": "Sodium chlorate"
  		},
  		{
  			"id": "06282919",
  			"id_hs92": "282919",
  			"name": "Chlorates of metals except sodium"
  		},
  		{
  			"id": "06282990",
  			"id_hs92": "282990",
  			"name": "Perchlorates, bromates & per-,iodates & per- of metal"
  		},
  		{
  			"id": "062830",
  			"id_hs92": "2830",
  			"name": "Sulfides"
  		},
  		{
  			"id": "06283010",
  			"id_hs92": "283010",
  			"name": "Sodium sulphides"
  		},
  		{
  			"id": "06283020",
  			"id_hs92": "283020",
  			"name": "Zinc sulphide"
  		},
  		{
  			"id": "06283030",
  			"id_hs92": "283030",
  			"name": "Cadmium sulphide"
  		},
  		{
  			"id": "06283090",
  			"id_hs92": "283090",
  			"name": "Sulphides of metals nes, polysulphides of metals"
  		},
  		{
  			"id": "062831",
  			"id_hs92": "2831",
  			"name": "Dithionites and Sulfoxylates"
  		},
  		{
  			"id": "06283110",
  			"id_hs92": "283110",
  			"name": "Dithionites and sulphoxylates of sodium"
  		},
  		{
  			"id": "06283190",
  			"id_hs92": "283190",
  			"name": "Dithionites and sulphoxylates of metals except sodium"
  		},
  		{
  			"id": "062832",
  			"id_hs92": "2832",
  			"name": "Sulfites"
  		},
  		{
  			"id": "06283210",
  			"id_hs92": "283210",
  			"name": "Sodium sulphites"
  		},
  		{
  			"id": "06283220",
  			"id_hs92": "283220",
  			"name": "Sulphites of metals other than sodium"
  		},
  		{
  			"id": "06283230",
  			"id_hs92": "283230",
  			"name": "Thiosulphates of metals"
  		},
  		{
  			"id": "062833",
  			"id_hs92": "2833",
  			"name": "Sulfates"
  		},
  		{
  			"id": "06283311",
  			"id_hs92": "283311",
  			"name": "Disodium sulphate"
  		},
  		{
  			"id": "06283319",
  			"id_hs92": "283319",
  			"name": "Sodium sulphates other than disodium sulphate"
  		},
  		{
  			"id": "06283321",
  			"id_hs92": "283321",
  			"name": "Magnesium sulphate"
  		},
  		{
  			"id": "06283322",
  			"id_hs92": "283322",
  			"name": "Aluminium sulphate"
  		},
  		{
  			"id": "06283323",
  			"id_hs92": "283323",
  			"name": "Chromium sulphates"
  		},
  		{
  			"id": "06283324",
  			"id_hs92": "283324",
  			"name": "Nickel sulphates"
  		},
  		{
  			"id": "06283325",
  			"id_hs92": "283325",
  			"name": "Copper sulphates"
  		},
  		{
  			"id": "06283326",
  			"id_hs92": "283326",
  			"name": "Zinc sulphate"
  		},
  		{
  			"id": "06283327",
  			"id_hs92": "283327",
  			"name": "Barium sulphate"
  		},
  		{
  			"id": "06283329",
  			"id_hs92": "283329",
  			"name": "Sulphates of metals nes"
  		},
  		{
  			"id": "06283330",
  			"id_hs92": "283330",
  			"name": "Alums"
  		},
  		{
  			"id": "06283340",
  			"id_hs92": "283340",
  			"name": "Peroxosulphates (persulphates) of metals"
  		},
  		{
  			"id": "062834",
  			"id_hs92": "2834",
  			"name": "Nitrites and Nitrates"
  		},
  		{
  			"id": "06283410",
  			"id_hs92": "283410",
  			"name": "Nitrites of metals"
  		},
  		{
  			"id": "06283421",
  			"id_hs92": "283421",
  			"name": "Potassium nitrate"
  		},
  		{
  			"id": "06283422",
  			"id_hs92": "283422",
  			"name": "Bismuth nitrates"
  		},
  		{
  			"id": "06283429",
  			"id_hs92": "283429",
  			"name": "Nitrates of metals except potassium and bismuth"
  		},
  		{
  			"id": "062835",
  			"id_hs92": "2835",
  			"name": "Phosphinates and Phosphonates"
  		},
  		{
  			"id": "06283510",
  			"id_hs92": "283510",
  			"name": "Phosphinates and phosphonates"
  		},
  		{
  			"id": "06283521",
  			"id_hs92": "283521",
  			"name": "Triammonium phosphate"
  		},
  		{
  			"id": "06283522",
  			"id_hs92": "283522",
  			"name": "Mono- or di-sodium phosphates"
  		},
  		{
  			"id": "06283523",
  			"id_hs92": "283523",
  			"name": "Trisodium phosphate"
  		},
  		{
  			"id": "06283524",
  			"id_hs92": "283524",
  			"name": "Potassium phosphates"
  		},
  		{
  			"id": "06283525",
  			"id_hs92": "283525",
  			"name": "Calcium hydrogen-orthophosphate"
  		},
  		{
  			"id": "06283526",
  			"id_hs92": "283526",
  			"name": "Calcium phosphates except hydrogen-orthophosphate"
  		},
  		{
  			"id": "06283529",
  			"id_hs92": "283529",
  			"name": "Phosphates of metals nes"
  		},
  		{
  			"id": "06283531",
  			"id_hs92": "283531",
  			"name": "Sodium triphosphate"
  		},
  		{
  			"id": "06283539",
  			"id_hs92": "283539",
  			"name": "Polyphosphates of metals except sodium triphosphate"
  		},
  		{
  			"id": "062836",
  			"id_hs92": "2836",
  			"name": "Carbonates"
  		},
  		{
  			"id": "06283610",
  			"id_hs92": "283610",
  			"name": "Ammonium carbonate (including commercial)"
  		},
  		{
  			"id": "06283620",
  			"id_hs92": "283620",
  			"name": "Disodium carbonate"
  		},
  		{
  			"id": "06283630",
  			"id_hs92": "283630",
  			"name": "Sodium bicarbonate"
  		},
  		{
  			"id": "06283640",
  			"id_hs92": "283640",
  			"name": "Potassium carbonates"
  		},
  		{
  			"id": "06283650",
  			"id_hs92": "283650",
  			"name": "Calcium carbonate"
  		},
  		{
  			"id": "06283660",
  			"id_hs92": "283660",
  			"name": "Barium carbonate"
  		},
  		{
  			"id": "06283670",
  			"id_hs92": "283670",
  			"name": "Lead carbonate"
  		},
  		{
  			"id": "06283691",
  			"id_hs92": "283691",
  			"name": "Lithium carbonates"
  		},
  		{
  			"id": "06283692",
  			"id_hs92": "283692",
  			"name": "Strontium carbonate"
  		},
  		{
  			"id": "06283693",
  			"id_hs92": "283693",
  			"name": "Bismuth carbonate"
  		},
  		{
  			"id": "06283699",
  			"id_hs92": "283699",
  			"name": "Carbonates of metals nes"
  		},
  		{
  			"id": "062837",
  			"id_hs92": "2837",
  			"name": "Cyanides"
  		},
  		{
  			"id": "06283711",
  			"id_hs92": "283711",
  			"name": "Cyanides and cyanide oxides of sodium"
  		},
  		{
  			"id": "06283719",
  			"id_hs92": "283719",
  			"name": "Cyanides and cyanide oxides of metals except sodium"
  		},
  		{
  			"id": "06283720",
  			"id_hs92": "283720",
  			"name": "Complex cyanides of metals"
  		},
  		{
  			"id": "062838",
  			"id_hs92": "2838",
  			"name": "Fulminates"
  		},
  		{
  			"id": "06283800",
  			"id_hs92": "283800",
  			"name": "Fulminates, cyanates and thiocyanates"
  		},
  		{
  			"id": "062839",
  			"id_hs92": "2839",
  			"name": "Silicates"
  		},
  		{
  			"id": "06283911",
  			"id_hs92": "283911",
  			"name": "Sodium metasilicates"
  		},
  		{
  			"id": "06283919",
  			"id_hs92": "283919",
  			"name": "Silicates of sodium other than metasilicates"
  		},
  		{
  			"id": "06283920",
  			"id_hs92": "283920",
  			"name": "Potassium silicates"
  		},
  		{
  			"id": "06283990",
  			"id_hs92": "283990",
  			"name": "Commercial alkali metal silicates, silicates nes"
  		},
  		{
  			"id": "062840",
  			"id_hs92": "2840",
  			"name": "Borates"
  		},
  		{
  			"id": "06284011",
  			"id_hs92": "284011",
  			"name": "Disodium tetraborate (refined borax) anhydrous"
  		},
  		{
  			"id": "06284019",
  			"id_hs92": "284019",
  			"name": "Disodium tetraborate (refined borax) hydrated"
  		},
  		{
  			"id": "06284020",
  			"id_hs92": "284020",
  			"name": "Borates of metals except refined borax"
  		},
  		{
  			"id": "06284030",
  			"id_hs92": "284030",
  			"name": "Peroxoborates (perborates) of metals"
  		},
  		{
  			"id": "062841",
  			"id_hs92": "2841",
  			"name": "Oxometallic or Peroxometallic Acid Salts"
  		},
  		{
  			"id": "06284110",
  			"id_hs92": "284110",
  			"name": "Metallic aluminates"
  		},
  		{
  			"id": "06284120",
  			"id_hs92": "284120",
  			"name": "Chromates of zinc or of lead"
  		},
  		{
  			"id": "06284130",
  			"id_hs92": "284130",
  			"name": "Sodium dichromate"
  		},
  		{
  			"id": "06284140",
  			"id_hs92": "284140",
  			"name": "Potassium dichromate"
  		},
  		{
  			"id": "06284150",
  			"id_hs92": "284150",
  			"name": "Chromates, dichromates, peroxochromates nes"
  		},
  		{
  			"id": "06284160",
  			"id_hs92": "284160",
  			"name": "Manganites, manganates and permanganates of metals"
  		},
  		{
  			"id": "06284170",
  			"id_hs92": "284170",
  			"name": "Metallic molybdates"
  		},
  		{
  			"id": "06284180",
  			"id_hs92": "284180",
  			"name": "Metallic tungstates (wolframates)"
  		},
  		{
  			"id": "06284190",
  			"id_hs92": "284190",
  			"name": "Salts of oxymetallic or peroxometallic acids nes"
  		},
  		{
  			"id": "062842",
  			"id_hs92": "2842",
  			"name": "Other Inorganic Acids Salts"
  		},
  		{
  			"id": "06284210",
  			"id_hs92": "284210",
  			"name": "Double or complex silicates of metals"
  		},
  		{
  			"id": "06284290",
  			"id_hs92": "284290",
  			"name": "Metallic salts of inorganic acids nes, except azides"
  		},
  		{
  			"id": "062843",
  			"id_hs92": "2843",
  			"name": "Precious Metal Compounds"
  		},
  		{
  			"id": "06284310",
  			"id_hs92": "284310",
  			"name": "Colloidal precious metals"
  		},
  		{
  			"id": "06284321",
  			"id_hs92": "284321",
  			"name": "Silver nitrate"
  		},
  		{
  			"id": "06284329",
  			"id_hs92": "284329",
  			"name": "Silver compounds other than silver nitrate"
  		},
  		{
  			"id": "06284330",
  			"id_hs92": "284330",
  			"name": "Gold compounds"
  		},
  		{
  			"id": "06284390",
  			"id_hs92": "284390",
  			"name": "Precious metal compounds except gold, silver, amalgam"
  		},
  		{
  			"id": "062844",
  			"id_hs92": "2844",
  			"name": "Radioactive Chemicals"
  		},
  		{
  			"id": "06284410",
  			"id_hs92": "284410",
  			"name": "Natural uranium, its compounds, mixtures"
  		},
  		{
  			"id": "06284420",
  			"id_hs92": "284420",
  			"name": "Uranium (enriched U235), plutonium compounds, alloys"
  		},
  		{
  			"id": "06284430",
  			"id_hs92": "284430",
  			"name": "Uranium (depleted U235), thorium compounds, products"
  		},
  		{
  			"id": "06284440",
  			"id_hs92": "284440",
  			"name": "Radio-actives nes, their mixtures and compounds"
  		},
  		{
  			"id": "06284450",
  			"id_hs92": "284450",
  			"name": "Spent fuel elements of nuclear reactors"
  		},
  		{
  			"id": "062845",
  			"id_hs92": "2845",
  			"name": "Other Isotopes"
  		},
  		{
  			"id": "06284510",
  			"id_hs92": "284510",
  			"name": "Heavy water (deuterium oxide)"
  		},
  		{
  			"id": "06284590",
  			"id_hs92": "284590",
  			"name": "Isotopes nes, compounds"
  		},
  		{
  			"id": "062846",
  			"id_hs92": "2846",
  			"name": "Rare-Earth Metal Compounds"
  		},
  		{
  			"id": "06284610",
  			"id_hs92": "284610",
  			"name": "Cerium compounds"
  		},
  		{
  			"id": "06284690",
  			"id_hs92": "284690",
  			"name": "Compounds, mixes of rare-earths, yttrium, scandium ne"
  		},
  		{
  			"id": "062847",
  			"id_hs92": "2847",
  			"name": "Hydrogen peroxide"
  		},
  		{
  			"id": "06284700",
  			"id_hs92": "284700",
  			"name": "Hydrogen peroxide"
  		},
  		{
  			"id": "062848",
  			"id_hs92": "2848",
  			"name": "Phosphides"
  		},
  		{
  			"id": "06284810",
  			"id_hs92": "284810",
  			"name": "Phosphides of copper containing > 15% phosphorous"
  		},
  		{
  			"id": "06284890",
  			"id_hs92": "284890",
  			"name": "Phosphides of other metals or of non-metals"
  		},
  		{
  			"id": "062849",
  			"id_hs92": "2849",
  			"name": "Carbides"
  		},
  		{
  			"id": "06284910",
  			"id_hs92": "284910",
  			"name": "Calcium carbide"
  		},
  		{
  			"id": "06284920",
  			"id_hs92": "284920",
  			"name": "Silicon carbide"
  		},
  		{
  			"id": "06284990",
  			"id_hs92": "284990",
  			"name": "Carbides except calcium and silicon"
  		},
  		{
  			"id": "062850",
  			"id_hs92": "2850",
  			"name": "Hydrides and other anions"
  		},
  		{
  			"id": "06285000",
  			"id_hs92": "285000",
  			"name": "Hydrides, nitrides, azides, silicides and borides"
  		},
  		{
  			"id": "062851",
  			"id_hs92": "2851",
  			"name": "Inorganic Compounds"
  		},
  		{
  			"id": "06285100",
  			"id_hs92": "285100",
  			"name": "Inorganic compounds,liquid/compressed air,amalgams ne"
  		},
  		{
  			"id": "062901",
  			"id_hs92": "2901",
  			"name": "Acyclic Hydrocarbons"
  		},
  		{
  			"id": "06290110",
  			"id_hs92": "290110",
  			"name": "Saturated acyclic hydrocarbons"
  		},
  		{
  			"id": "06290121",
  			"id_hs92": "290121",
  			"name": "Ethylene"
  		},
  		{
  			"id": "06290122",
  			"id_hs92": "290122",
  			"name": "Propene (propylene)"
  		},
  		{
  			"id": "06290123",
  			"id_hs92": "290123",
  			"name": "Butene (butylene) and isomers thereof"
  		},
  		{
  			"id": "06290124",
  			"id_hs92": "290124",
  			"name": "Buta-1, 3-diene and isoprene"
  		},
  		{
  			"id": "06290129",
  			"id_hs92": "290129",
  			"name": "Unsaturated acyclic hydrocarbons nes"
  		},
  		{
  			"id": "062902",
  			"id_hs92": "2902",
  			"name": "Cyclic Hydrocarbons"
  		},
  		{
  			"id": "06290211",
  			"id_hs92": "290211",
  			"name": "Cyclohexane"
  		},
  		{
  			"id": "06290219",
  			"id_hs92": "290219",
  			"name": "Cyclanes, cyclenes and cycloterpenes nes"
  		},
  		{
  			"id": "06290220",
  			"id_hs92": "290220",
  			"name": "Benzene"
  		},
  		{
  			"id": "06290230",
  			"id_hs92": "290230",
  			"name": "Toluene"
  		},
  		{
  			"id": "06290241",
  			"id_hs92": "290241",
  			"name": "O-xylene"
  		},
  		{
  			"id": "06290242",
  			"id_hs92": "290242",
  			"name": "M-xylene"
  		},
  		{
  			"id": "06290243",
  			"id_hs92": "290243",
  			"name": "P-xylene"
  		},
  		{
  			"id": "06290244",
  			"id_hs92": "290244",
  			"name": "Mixed xylene isomers"
  		},
  		{
  			"id": "06290250",
  			"id_hs92": "290250",
  			"name": "Styrene"
  		},
  		{
  			"id": "06290260",
  			"id_hs92": "290260",
  			"name": "Ethylbenzene"
  		},
  		{
  			"id": "06290270",
  			"id_hs92": "290270",
  			"name": "Cumene"
  		},
  		{
  			"id": "06290290",
  			"id_hs92": "290290",
  			"name": "Cyclic hydrocarbons nes"
  		},
  		{
  			"id": "062903",
  			"id_hs92": "2903",
  			"name": "Halogenated Hydrocarbons"
  		},
  		{
  			"id": "06290311",
  			"id_hs92": "290311",
  			"name": "Chloromethane and chloroethane"
  		},
  		{
  			"id": "06290312",
  			"id_hs92": "290312",
  			"name": "Dichloromethane (methylene chloride)"
  		},
  		{
  			"id": "06290313",
  			"id_hs92": "290313",
  			"name": "Chloroform (trichloromethane)"
  		},
  		{
  			"id": "06290314",
  			"id_hs92": "290314",
  			"name": "Carbon tetrachloride"
  		},
  		{
  			"id": "06290315",
  			"id_hs92": "290315",
  			"name": "1,2-dichloroethane(ethylene dichloride)"
  		},
  		{
  			"id": "06290316",
  			"id_hs92": "290316",
  			"name": "1,2-dichloropropane and dichlorobutanes"
  		},
  		{
  			"id": "06290319",
  			"id_hs92": "290319",
  			"name": "Chlorinated derivs saturated acyclic hydrocarbons, ne"
  		},
  		{
  			"id": "06290321",
  			"id_hs92": "290321",
  			"name": "Vinyl chloride (chloroethylene)"
  		},
  		{
  			"id": "06290322",
  			"id_hs92": "290322",
  			"name": "Trichloroethylene"
  		},
  		{
  			"id": "06290323",
  			"id_hs92": "290323",
  			"name": "Tetrachloroethylene (perchloroethylene)"
  		},
  		{
  			"id": "06290329",
  			"id_hs92": "290329",
  			"name": "Chlorinated derivs unsaturated acyclic hydrocarbon ne"
  		},
  		{
  			"id": "06290330",
  			"id_hs92": "290330",
  			"name": "Fluor-/brom-/iodin-ated derivs of acyclic hydrocarbon"
  		},
  		{
  			"id": "06290340",
  			"id_hs92": "290340",
  			"name": "Multi-halogen derivatives of acyclic hydrocarbons"
  		},
  		{
  			"id": "06290351",
  			"id_hs92": "290351",
  			"name": "1,2,3,4,5,6-hexachlorocyclohexane"
  		},
  		{
  			"id": "06290359",
  			"id_hs92": "290359",
  			"name": "Halogenated cyclanic/cyclenic/cycloterpen hydrocarbon"
  		},
  		{
  			"id": "06290361",
  			"id_hs92": "290361",
  			"name": "Chlorobenzene, o-dichlorobenzene and p-dichlorobenzen"
  		},
  		{
  			"id": "06290362",
  			"id_hs92": "290362",
  			"name": "Hexachlorobenzene and DDT"
  		},
  		{
  			"id": "06290369",
  			"id_hs92": "290369",
  			"name": "Halogenated derivatives of aromatic hydrocarbons, nes"
  		},
  		{
  			"id": "062904",
  			"id_hs92": "2904",
  			"name": "Sulfonated, Nitrated or Nitrosated Hydrocarbons"
  		},
  		{
  			"id": "06290410",
  			"id_hs92": "290410",
  			"name": "Sulphonated hydrocarbons, salts and ethyl esters"
  		},
  		{
  			"id": "06290420",
  			"id_hs92": "290420",
  			"name": "Nitrated, nitrosated hydrocarbons"
  		},
  		{
  			"id": "06290490",
  			"id_hs92": "290490",
  			"name": "Hydrocarbon derivs, mixed sulpho/nitro/nitroso groups"
  		},
  		{
  			"id": "062905",
  			"id_hs92": "2905",
  			"name": "Acyclic Alcohols"
  		},
  		{
  			"id": "06290511",
  			"id_hs92": "290511",
  			"name": "Methyl alcohol"
  		},
  		{
  			"id": "06290512",
  			"id_hs92": "290512",
  			"name": "Propyl alcohol and isopropyl alcohol"
  		},
  		{
  			"id": "06290513",
  			"id_hs92": "290513",
  			"name": "N-butyl alcohol"
  		},
  		{
  			"id": "06290514",
  			"id_hs92": "290514",
  			"name": "Butanols nes"
  		},
  		{
  			"id": "06290515",
  			"id_hs92": "290515",
  			"name": "Pentanol, isomers"
  		},
  		{
  			"id": "06290516",
  			"id_hs92": "290516",
  			"name": "Octanol(octyl alcohol), isomers"
  		},
  		{
  			"id": "06290517",
  			"id_hs92": "290517",
  			"name": "Dodecan-1-ol, hexadecan-1-ol and octadecan-1-ol"
  		},
  		{
  			"id": "06290519",
  			"id_hs92": "290519",
  			"name": "Saturated monohydric acyclic alcohols nes"
  		},
  		{
  			"id": "06290521",
  			"id_hs92": "290521",
  			"name": "Allyl alcohol"
  		},
  		{
  			"id": "06290522",
  			"id_hs92": "290522",
  			"name": "Acyclic terpene alcohols"
  		},
  		{
  			"id": "06290529",
  			"id_hs92": "290529",
  			"name": "Unsaturated monohydric acyclic alcohols nes"
  		},
  		{
  			"id": "06290531",
  			"id_hs92": "290531",
  			"name": "Ethylene glycol (ethanediol)"
  		},
  		{
  			"id": "06290532",
  			"id_hs92": "290532",
  			"name": "Propylene glycol (propane-1,2-diol)"
  		},
  		{
  			"id": "06290539",
  			"id_hs92": "290539",
  			"name": "Diols except ethylene and propylene glycol"
  		},
  		{
  			"id": "06290541",
  			"id_hs92": "290541",
  			"name": "Trimethylolpropane"
  		},
  		{
  			"id": "06290542",
  			"id_hs92": "290542",
  			"name": "Pentaerythritol"
  		},
  		{
  			"id": "06290543",
  			"id_hs92": "290543",
  			"name": "Mannitol"
  		},
  		{
  			"id": "06290544",
  			"id_hs92": "290544",
  			"name": "D-glucitol (sorbitol)"
  		},
  		{
  			"id": "06290549",
  			"id_hs92": "290549",
  			"name": "Polyhydric acyclic alcohols nes"
  		},
  		{
  			"id": "06290550",
  			"id_hs92": "290550",
  			"name": "Derivatives of acyclic alcohols"
  		},
  		{
  			"id": "062906",
  			"id_hs92": "2906",
  			"name": "Cyclic Alcohols"
  		},
  		{
  			"id": "06290611",
  			"id_hs92": "290611",
  			"name": "Menthol"
  		},
  		{
  			"id": "06290612",
  			"id_hs92": "290612",
  			"name": "Cyclohexanol,methylcyclohexanol, dimethylcyclohexanol"
  		},
  		{
  			"id": "06290613",
  			"id_hs92": "290613",
  			"name": "Sterols and inositols"
  		},
  		{
  			"id": "06290614",
  			"id_hs92": "290614",
  			"name": "Terpineols"
  		},
  		{
  			"id": "06290619",
  			"id_hs92": "290619",
  			"name": "Cyclic alcohols, derivatives, other than aromatic, ne"
  		},
  		{
  			"id": "06290621",
  			"id_hs92": "290621",
  			"name": "Benzyl alcohol"
  		},
  		{
  			"id": "06290629",
  			"id_hs92": "290629",
  			"name": "Aromatic alcohols, derivatives, except benzyl alcohol"
  		},
  		{
  			"id": "062907",
  			"id_hs92": "2907",
  			"name": "Phenols"
  		},
  		{
  			"id": "06290711",
  			"id_hs92": "290711",
  			"name": "Phenol (hdroxybenzene), salts"
  		},
  		{
  			"id": "06290712",
  			"id_hs92": "290712",
  			"name": "Cresols, salts"
  		},
  		{
  			"id": "06290713",
  			"id_hs92": "290713",
  			"name": "Octylphenol, nonylphenol and isomers, salts thereof"
  		},
  		{
  			"id": "06290714",
  			"id_hs92": "290714",
  			"name": "Xylenols, salts"
  		},
  		{
  			"id": "06290715",
  			"id_hs92": "290715",
  			"name": "Naphthols, salts"
  		},
  		{
  			"id": "06290719",
  			"id_hs92": "290719",
  			"name": "Monophenols nes"
  		},
  		{
  			"id": "06290721",
  			"id_hs92": "290721",
  			"name": "Resorcinol, salts"
  		},
  		{
  			"id": "06290722",
  			"id_hs92": "290722",
  			"name": "Hydroquinone (quinol), salts"
  		},
  		{
  			"id": "06290723",
  			"id_hs92": "290723",
  			"name": "Bisphenol A, diphenylolpropane, salts"
  		},
  		{
  			"id": "06290729",
  			"id_hs92": "290729",
  			"name": "Polyphenols nes"
  		},
  		{
  			"id": "06290730",
  			"id_hs92": "290730",
  			"name": "Phenol-alcohols"
  		},
  		{
  			"id": "062908",
  			"id_hs92": "2908",
  			"name": "Phenol Derivatives"
  		},
  		{
  			"id": "06290810",
  			"id_hs92": "290810",
  			"name": "Halogen derivs of phenols or phenol-alcohols, & salts"
  		},
  		{
  			"id": "06290820",
  			"id_hs92": "290820",
  			"name": "Sulpho- derivs of phenols or phenol-alcohols, & salts"
  		},
  		{
  			"id": "06290890",
  			"id_hs92": "290890",
  			"name": "Derivatives of phenols or phenol-alcohols, nes"
  		},
  		{
  			"id": "062909",
  			"id_hs92": "2909",
  			"name": "Ethers"
  		},
  		{
  			"id": "06290911",
  			"id_hs92": "290911",
  			"name": "Diethyl ether"
  		},
  		{
  			"id": "06290919",
  			"id_hs92": "290919",
  			"name": "Acyclic ethers nes, derivatives of acyclic ethers"
  		},
  		{
  			"id": "06290920",
  			"id_hs92": "290920",
  			"name": "Cyclanic, cyclenic or cycloterpenic ethers and derivs"
  		},
  		{
  			"id": "06290930",
  			"id_hs92": "290930",
  			"name": "Aromatic ethers, derivatives"
  		},
  		{
  			"id": "06290941",
  			"id_hs92": "290941",
  			"name": "2,2'-oxydiethanol(diethylene glycol)"
  		},
  		{
  			"id": "06290942",
  			"id_hs92": "290942",
  			"name": "Monomethyl ethers of ethylene and diethylene glycol"
  		},
  		{
  			"id": "06290943",
  			"id_hs92": "290943",
  			"name": "Monobutyl ethers of ethylene and diethylene glycol"
  		},
  		{
  			"id": "06290944",
  			"id_hs92": "290944",
  			"name": "Monoalkyl ethers of ethylene, diethylene glycol, nes"
  		},
  		{
  			"id": "06290949",
  			"id_hs92": "290949",
  			"name": "Ether-alcohols nes, derivatives of ether-alcohols"
  		},
  		{
  			"id": "06290950",
  			"id_hs92": "290950",
  			"name": "Ether-phenols, ether-alcohol-phenols and derivatives"
  		},
  		{
  			"id": "06290960",
  			"id_hs92": "290960",
  			"name": "Alcohol, ether, ketone peroxides, derivatives"
  		},
  		{
  			"id": "062910",
  			"id_hs92": "2910",
  			"name": "Epoxides"
  		},
  		{
  			"id": "06291010",
  			"id_hs92": "291010",
  			"name": "Oxirane (ethylene oxide)"
  		},
  		{
  			"id": "06291020",
  			"id_hs92": "291020",
  			"name": "Methyloxirane (propylene oxide)"
  		},
  		{
  			"id": "06291030",
  			"id_hs92": "291030",
  			"name": "1-chloro-2,3-epoxypropane(epichlorohy-drin)"
  		},
  		{
  			"id": "06291090",
  			"id_hs92": "291090",
  			"name": "Epoxides, epoxy-alcohols,-phenols,-ethers nes, derivs"
  		},
  		{
  			"id": "062911",
  			"id_hs92": "2911",
  			"name": "Acetals and Hemiacetals"
  		},
  		{
  			"id": "06291100",
  			"id_hs92": "291100",
  			"name": "Acetals and hemiacetals, derivatives"
  		},
  		{
  			"id": "062912",
  			"id_hs92": "2912",
  			"name": "Aldehydes"
  		},
  		{
  			"id": "06291211",
  			"id_hs92": "291211",
  			"name": "Methanal (formaldehyde)"
  		},
  		{
  			"id": "06291212",
  			"id_hs92": "291212",
  			"name": "Ethanal (acetaldehyde)"
  		},
  		{
  			"id": "06291213",
  			"id_hs92": "291213",
  			"name": "Butanal (butyraldehyde, normal isomer)"
  		},
  		{
  			"id": "06291219",
  			"id_hs92": "291219",
  			"name": "Acyclic aldehydes without other oxygen function, nes"
  		},
  		{
  			"id": "06291221",
  			"id_hs92": "291221",
  			"name": "Benzaldehyde"
  		},
  		{
  			"id": "06291229",
  			"id_hs92": "291229",
  			"name": "Cyclic aldehydes without other oxygen function, nes"
  		},
  		{
  			"id": "06291230",
  			"id_hs92": "291230",
  			"name": "Aldehyde-alcohols"
  		},
  		{
  			"id": "06291241",
  			"id_hs92": "291241",
  			"name": "Vanillin(4-hydroxy-3-methoxybenzaldehyde)"
  		},
  		{
  			"id": "06291242",
  			"id_hs92": "291242",
  			"name": "Ethylvanillin(3-ethoxy-4-hydroxybenzaldehyde)"
  		},
  		{
  			"id": "06291249",
  			"id_hs92": "291249",
  			"name": "Aldehydes, derivs with other oxygen function"
  		},
  		{
  			"id": "06291250",
  			"id_hs92": "291250",
  			"name": "Cyclic polymers of aldehydes"
  		},
  		{
  			"id": "06291260",
  			"id_hs92": "291260",
  			"name": "Paraformaldehyde"
  		},
  		{
  			"id": "062913",
  			"id_hs92": "2913",
  			"name": "Aldehyde Derivatives"
  		},
  		{
  			"id": "06291300",
  			"id_hs92": "291300",
  			"name": "Hydrogenated, sulphonated, nitrated aldehydes"
  		},
  		{
  			"id": "062914",
  			"id_hs92": "2914",
  			"name": "Ketones and Quinones"
  		},
  		{
  			"id": "06291411",
  			"id_hs92": "291411",
  			"name": "Acetone"
  		},
  		{
  			"id": "06291412",
  			"id_hs92": "291412",
  			"name": "Butanone (methyl ethyl ketone)"
  		},
  		{
  			"id": "06291413",
  			"id_hs92": "291413",
  			"name": "4-methylpentan-2-one(methyl isobutyl ketone)"
  		},
  		{
  			"id": "06291419",
  			"id_hs92": "291419",
  			"name": "Acyclic ketones without other oxygen function, nes"
  		},
  		{
  			"id": "06291421",
  			"id_hs92": "291421",
  			"name": "Camphor"
  		},
  		{
  			"id": "06291422",
  			"id_hs92": "291422",
  			"name": "Cyclohexanone and methylcyclohexanones"
  		},
  		{
  			"id": "06291423",
  			"id_hs92": "291423",
  			"name": "Ionones and methylionones"
  		},
  		{
  			"id": "06291429",
  			"id_hs92": "291429",
  			"name": "Cyclanic/cyclenic/cycloterp ketones,no oxygen functio"
  		},
  		{
  			"id": "06291430",
  			"id_hs92": "291430",
  			"name": "Aromatic ketones without other oxygen function"
  		},
  		{
  			"id": "06291441",
  			"id_hs92": "291441",
  			"name": "4-hydroxy-4-methylpentan-2-one(diacetone alcohol)"
  		},
  		{
  			"id": "06291449",
  			"id_hs92": "291449",
  			"name": "Ketone-alcohols nes, ketone-aldehydes"
  		},
  		{
  			"id": "06291450",
  			"id_hs92": "291450",
  			"name": "Ketone-phenols and ketones with other oxygen function"
  		},
  		{
  			"id": "06291461",
  			"id_hs92": "291461",
  			"name": "Anthraquinone"
  		},
  		{
  			"id": "06291469",
  			"id_hs92": "291469",
  			"name": "Quinones other than anthraquinone"
  		},
  		{
  			"id": "06291470",
  			"id_hs92": "291470",
  			"name": "Derivatives of ketones and quinones"
  		},
  		{
  			"id": "062915",
  			"id_hs92": "2915",
  			"name": "Saturated Acyclic Monocarboxylic Acids"
  		},
  		{
  			"id": "06291511",
  			"id_hs92": "291511",
  			"name": "Formic acid"
  		},
  		{
  			"id": "06291512",
  			"id_hs92": "291512",
  			"name": "Salts of formic acid"
  		},
  		{
  			"id": "06291513",
  			"id_hs92": "291513",
  			"name": "Esters of formic acid"
  		},
  		{
  			"id": "06291521",
  			"id_hs92": "291521",
  			"name": "Acetic acid"
  		},
  		{
  			"id": "06291522",
  			"id_hs92": "291522",
  			"name": "Sodium acetate"
  		},
  		{
  			"id": "06291523",
  			"id_hs92": "291523",
  			"name": "Cobalt acetates"
  		},
  		{
  			"id": "06291524",
  			"id_hs92": "291524",
  			"name": "Acetic anhydride"
  		},
  		{
  			"id": "06291529",
  			"id_hs92": "291529",
  			"name": "Acetic acid salts except cobalt and sodium"
  		},
  		{
  			"id": "06291531",
  			"id_hs92": "291531",
  			"name": "Ethyl acetate"
  		},
  		{
  			"id": "06291532",
  			"id_hs92": "291532",
  			"name": "Vinyl acetate"
  		},
  		{
  			"id": "06291533",
  			"id_hs92": "291533",
  			"name": "N-butyl acetate"
  		},
  		{
  			"id": "06291534",
  			"id_hs92": "291534",
  			"name": "Isobutyl acetate"
  		},
  		{
  			"id": "06291535",
  			"id_hs92": "291535",
  			"name": "2-ethoxyethyl acetate"
  		},
  		{
  			"id": "06291539",
  			"id_hs92": "291539",
  			"name": "Acetic acid esters nes"
  		},
  		{
  			"id": "06291540",
  			"id_hs92": "291540",
  			"name": "Mono-, di-, tri-chloroacetic acids, salts & esters"
  		},
  		{
  			"id": "06291550",
  			"id_hs92": "291550",
  			"name": "Propionic acid, its salts & esters"
  		},
  		{
  			"id": "06291560",
  			"id_hs92": "291560",
  			"name": "Butyric acids, valeric acids, their salts & esters"
  		},
  		{
  			"id": "06291570",
  			"id_hs92": "291570",
  			"name": "Palmitic acid, stearic acid, their salts & esters"
  		},
  		{
  			"id": "06291590",
  			"id_hs92": "291590",
  			"name": "Saturated acyclic monocarboxylic acids, derivs, nes"
  		},
  		{
  			"id": "062916",
  			"id_hs92": "2916",
  			"name": "Unsaturated Acyclic Monocarboxylic Acids"
  		},
  		{
  			"id": "06291611",
  			"id_hs92": "291611",
  			"name": "Acrylic acid, salts"
  		},
  		{
  			"id": "06291612",
  			"id_hs92": "291612",
  			"name": "Acrylic acid esters"
  		},
  		{
  			"id": "06291613",
  			"id_hs92": "291613",
  			"name": "Methacrylic acid, salts"
  		},
  		{
  			"id": "06291614",
  			"id_hs92": "291614",
  			"name": "Methacrylic acid esters"
  		},
  		{
  			"id": "06291615",
  			"id_hs92": "291615",
  			"name": "Oleic,linoleic or linolenic acids, salts & esters"
  		},
  		{
  			"id": "06291619",
  			"id_hs92": "291619",
  			"name": "Unsaturated acyclic monocarboxylic acids, derivatives"
  		},
  		{
  			"id": "06291620",
  			"id_hs92": "291620",
  			"name": "Cyclan-/cyclen-/cycloterpen-monocarboxylic acid/deriv"
  		},
  		{
  			"id": "06291631",
  			"id_hs92": "291631",
  			"name": "Benzoic acid, its salts & esters"
  		},
  		{
  			"id": "06291632",
  			"id_hs92": "291632",
  			"name": "Benzoyl peroxide and benzoyl chloride"
  		},
  		{
  			"id": "06291633",
  			"id_hs92": "291633",
  			"name": "Phenylacetic acid, its salts & esters"
  		},
  		{
  			"id": "06291639",
  			"id_hs92": "291639",
  			"name": "Aromatic monocarboxylic acids and derivatives, nes"
  		},
  		{
  			"id": "062917",
  			"id_hs92": "2917",
  			"name": "Polycarboxylic Acids"
  		},
  		{
  			"id": "06291711",
  			"id_hs92": "291711",
  			"name": "Oxalic acid, its salts & esters"
  		},
  		{
  			"id": "06291712",
  			"id_hs92": "291712",
  			"name": "Adipic acid, its salts & esters"
  		},
  		{
  			"id": "06291713",
  			"id_hs92": "291713",
  			"name": "Azelaic acid, sebacic acid, their salts & esters"
  		},
  		{
  			"id": "06291714",
  			"id_hs92": "291714",
  			"name": "Maleic anhydride"
  		},
  		{
  			"id": "06291719",
  			"id_hs92": "291719",
  			"name": "Acyclic polycarboxylic acids, derivatives, nes"
  		},
  		{
  			"id": "06291720",
  			"id_hs92": "291720",
  			"name": "Cyclan-, cyclen-, cycloterpen-poly-carboxylic acids"
  		},
  		{
  			"id": "06291731",
  			"id_hs92": "291731",
  			"name": "Dibutyl orthophthalates"
  		},
  		{
  			"id": "06291732",
  			"id_hs92": "291732",
  			"name": "Dioctyl orthophthalates"
  		},
  		{
  			"id": "06291733",
  			"id_hs92": "291733",
  			"name": "Dinonyl or didecyl orthophthalates"
  		},
  		{
  			"id": "06291734",
  			"id_hs92": "291734",
  			"name": "Orthophthalic acid esters, nes"
  		},
  		{
  			"id": "06291735",
  			"id_hs92": "291735",
  			"name": "Phthalic anhydride"
  		},
  		{
  			"id": "06291736",
  			"id_hs92": "291736",
  			"name": "Terephthalic acid, its salts"
  		},
  		{
  			"id": "06291737",
  			"id_hs92": "291737",
  			"name": "Dimethyl terephthalate"
  		},
  		{
  			"id": "06291739",
  			"id_hs92": "291739",
  			"name": "Aromatic polycarboxylic acids, derivatives, nes"
  		},
  		{
  			"id": "062918",
  			"id_hs92": "2918",
  			"name": "Carboxylic Acids"
  		},
  		{
  			"id": "06291811",
  			"id_hs92": "291811",
  			"name": "Lactic acid, its salts & esters"
  		},
  		{
  			"id": "06291812",
  			"id_hs92": "291812",
  			"name": "Tartaric acid"
  		},
  		{
  			"id": "06291813",
  			"id_hs92": "291813",
  			"name": "Salts & esters of tartaric acid"
  		},
  		{
  			"id": "06291814",
  			"id_hs92": "291814",
  			"name": "Citric acid"
  		},
  		{
  			"id": "06291815",
  			"id_hs92": "291815",
  			"name": "Salts & esters of citric acid"
  		},
  		{
  			"id": "06291816",
  			"id_hs92": "291816",
  			"name": "Gluconic acid, its salts & esters"
  		},
  		{
  			"id": "06291817",
  			"id_hs92": "291817",
  			"name": "Phenylglycolic acid, its salts & esters"
  		},
  		{
  			"id": "06291819",
  			"id_hs92": "291819",
  			"name": "Carboxylic acids (alcohol function only), derivatives"
  		},
  		{
  			"id": "06291821",
  			"id_hs92": "291821",
  			"name": "Salicylic acid, salts"
  		},
  		{
  			"id": "06291822",
  			"id_hs92": "291822",
  			"name": "O-acetylsalicylic acid, its salts & esters"
  		},
  		{
  			"id": "06291823",
  			"id_hs92": "291823",
  			"name": "Salicylic acid esters, nes, salts"
  		},
  		{
  			"id": "06291829",
  			"id_hs92": "291829",
  			"name": "Carboxylic acids (phenol function only) & derivatives"
  		},
  		{
  			"id": "06291830",
  			"id_hs92": "291830",
  			"name": "Carboxylic acids (aldehyde, ketone function), derivs"
  		},
  		{
  			"id": "06291890",
  			"id_hs92": "291890",
  			"name": "Carboxylic acids nes, derivativess"
  		},
  		{
  			"id": "062919",
  			"id_hs92": "2919",
  			"name": "Phosphoric Esters and Salts"
  		},
  		{
  			"id": "06291900",
  			"id_hs92": "291900",
  			"name": "Phosphoric esters, their salts and derivatives"
  		},
  		{
  			"id": "062920",
  			"id_hs92": "2920",
  			"name": "Other Esters"
  		},
  		{
  			"id": "06292010",
  			"id_hs92": "292010",
  			"name": "Thiophosphoric esters(phosphorothioates),salts,derivs"
  		},
  		{
  			"id": "06292090",
  			"id_hs92": "292090",
  			"name": "Esters of inorganic acids, nes, their salts, derivs"
  		},
  		{
  			"id": "062921",
  			"id_hs92": "2921",
  			"name": "Amine Compounds"
  		},
  		{
  			"id": "06292111",
  			"id_hs92": "292111",
  			"name": "Methylamine, di- or trimethylamine, salts"
  		},
  		{
  			"id": "06292112",
  			"id_hs92": "292112",
  			"name": "Diethylamine, its salts"
  		},
  		{
  			"id": "06292119",
  			"id_hs92": "292119",
  			"name": "Acyclic monoamines nes, derivatives and salts"
  		},
  		{
  			"id": "06292121",
  			"id_hs92": "292121",
  			"name": "Ethylenediamine, its salts"
  		},
  		{
  			"id": "06292122",
  			"id_hs92": "292122",
  			"name": "Hexamethylenediamine, its salts"
  		},
  		{
  			"id": "06292129",
  			"id_hs92": "292129",
  			"name": "Acyclic polyamines nes, their derivatives and salts"
  		},
  		{
  			"id": "06292130",
  			"id_hs92": "292130",
  			"name": "Cyclanic, cyclenic and cycloterpenic amines, compound"
  		},
  		{
  			"id": "06292141",
  			"id_hs92": "292141",
  			"name": "Aniline and its salts"
  		},
  		{
  			"id": "06292142",
  			"id_hs92": "292142",
  			"name": "Aniline derivatives, salts thereof"
  		},
  		{
  			"id": "06292143",
  			"id_hs92": "292143",
  			"name": "Toluidines, derivatives, salts thereof"
  		},
  		{
  			"id": "06292144",
  			"id_hs92": "292144",
  			"name": "Diphenylamine, derivatives, salts thereof"
  		},
  		{
  			"id": "06292145",
  			"id_hs92": "292145",
  			"name": "Naphthylamines, derivatives, salts thereof"
  		},
  		{
  			"id": "06292149",
  			"id_hs92": "292149",
  			"name": "Aromatic monoamines nes, derivatives, salts thereof"
  		},
  		{
  			"id": "06292151",
  			"id_hs92": "292151",
  			"name": "O-,M-,P-phenylenediamine,diaminotoluenes, derivs,salt"
  		},
  		{
  			"id": "06292159",
  			"id_hs92": "292159",
  			"name": "Aromatic polyamines nes, derivatives, salts thereof"
  		},
  		{
  			"id": "062922",
  			"id_hs92": "2922",
  			"name": "Oxygen Amino Compounds"
  		},
  		{
  			"id": "06292211",
  			"id_hs92": "292211",
  			"name": "Monoethanolmine, salts"
  		},
  		{
  			"id": "06292212",
  			"id_hs92": "292212",
  			"name": "Diethanolamine, salts"
  		},
  		{
  			"id": "06292213",
  			"id_hs92": "292213",
  			"name": "Triethanolamine, salts"
  		},
  		{
  			"id": "06292219",
  			"id_hs92": "292219",
  			"name": "Amino-alcohols nes, their ethers and esters, salts"
  		},
  		{
  			"id": "06292221",
  			"id_hs92": "292221",
  			"name": "Aminohydroxynaphthalenesulphonic acids and salts"
  		},
  		{
  			"id": "06292222",
  			"id_hs92": "292222",
  			"name": "Anisidines, dianisidines, phenetidines, and salts"
  		},
  		{
  			"id": "06292229",
  			"id_hs92": "292229",
  			"name": "Amino-naphthols/phenols nes, their ethers/esters/salt"
  		},
  		{
  			"id": "06292230",
  			"id_hs92": "292230",
  			"name": "Amino-aldehydes, ketones and quinones, salts thereof"
  		},
  		{
  			"id": "06292241",
  			"id_hs92": "292241",
  			"name": "Lysine, esters, salts thereof"
  		},
  		{
  			"id": "06292242",
  			"id_hs92": "292242",
  			"name": "Glutamic acid, salts"
  		},
  		{
  			"id": "06292249",
  			"id_hs92": "292249",
  			"name": "Amino-acids nes, esters, salts thereof"
  		},
  		{
  			"id": "06292250",
  			"id_hs92": "292250",
  			"name": "Amino-alcohol-phenols etc with oxygen function"
  		},
  		{
  			"id": "062923",
  			"id_hs92": "2923",
  			"name": "Quaternary Ammonium Salts and Hydroxides"
  		},
  		{
  			"id": "06292310",
  			"id_hs92": "292310",
  			"name": "Choline, salts"
  		},
  		{
  			"id": "06292320",
  			"id_hs92": "292320",
  			"name": "Lecithins and other phosphoaminolipids"
  		},
  		{
  			"id": "06292390",
  			"id_hs92": "292390",
  			"name": "Quarternary ammonium salts and hydroxides, nes"
  		},
  		{
  			"id": "062924",
  			"id_hs92": "2924",
  			"name": "Carboxyamide Compounds"
  		},
  		{
  			"id": "06292410",
  			"id_hs92": "292410",
  			"name": "Acyclic amides, derivatives, salts thereof"
  		},
  		{
  			"id": "06292421",
  			"id_hs92": "292421",
  			"name": "Ureines, derivatives, salts thereof"
  		},
  		{
  			"id": "06292429",
  			"id_hs92": "292429",
  			"name": "Cyclic amides, derivatives, nes, salts thereof"
  		},
  		{
  			"id": "062925",
  			"id_hs92": "2925",
  			"name": "Carboxyimide Compounds"
  		},
  		{
  			"id": "06292511",
  			"id_hs92": "292511",
  			"name": "Saccharin, salts"
  		},
  		{
  			"id": "06292519",
  			"id_hs92": "292519",
  			"name": "Imides except saccharin, derivatives, salts thereof"
  		},
  		{
  			"id": "06292520",
  			"id_hs92": "292520",
  			"name": "Imines, derivatives, salts thereof"
  		},
  		{
  			"id": "062926",
  			"id_hs92": "2926",
  			"name": "Nitrile Compounds"
  		},
  		{
  			"id": "06292610",
  			"id_hs92": "292610",
  			"name": "Acrylonitrile"
  		},
  		{
  			"id": "06292620",
  			"id_hs92": "292620",
  			"name": "1-cyanoguanidine (dicyandiamide)"
  		},
  		{
  			"id": "06292690",
  			"id_hs92": "292690",
  			"name": "Nitrile-function compounds, nes"
  		},
  		{
  			"id": "062927",
  			"id_hs92": "2927",
  			"name": "Diazo, Azo or Aoxy Compounds"
  		},
  		{
  			"id": "06292700",
  			"id_hs92": "292700",
  			"name": "Diazo-, azo- or azoxy-compounds"
  		},
  		{
  			"id": "062928",
  			"id_hs92": "2928",
  			"name": "Hydrazine or Hydroxylamine Derivatives"
  		},
  		{
  			"id": "06292800",
  			"id_hs92": "292800",
  			"name": "Organic derivatives of hydrazine or of hydroxylamine"
  		},
  		{
  			"id": "062929",
  			"id_hs92": "2929",
  			"name": "Other Nitrogen Compounds"
  		},
  		{
  			"id": "06292910",
  			"id_hs92": "292910",
  			"name": "Isocyanates"
  		},
  		{
  			"id": "06292990",
  			"id_hs92": "292990",
  			"name": "Compounds with other nitrogen function, nes"
  		},
  		{
  			"id": "062930",
  			"id_hs92": "2930",
  			"name": "Organo-Sulfur Compounds"
  		},
  		{
  			"id": "06293010",
  			"id_hs92": "293010",
  			"name": "Dithiocarbonates (xanthates)"
  		},
  		{
  			"id": "06293020",
  			"id_hs92": "293020",
  			"name": "Thiocarbamates and dithiocarbamates"
  		},
  		{
  			"id": "06293030",
  			"id_hs92": "293030",
  			"name": "Thiuram mono-, di- or tetra-sulphides"
  		},
  		{
  			"id": "06293040",
  			"id_hs92": "293040",
  			"name": "Methionine"
  		},
  		{
  			"id": "06293090",
  			"id_hs92": "293090",
  			"name": "Organo-sulphur compounds, nes"
  		},
  		{
  			"id": "062931",
  			"id_hs92": "2931",
  			"name": "Other Organo-Inorganic Compounds"
  		},
  		{
  			"id": "06293100",
  			"id_hs92": "293100",
  			"name": "Organo-inorganic compounds, nes"
  		},
  		{
  			"id": "062932",
  			"id_hs92": "2932",
  			"name": "Oxygen Heterocyclic Compounds"
  		},
  		{
  			"id": "06293211",
  			"id_hs92": "293211",
  			"name": "Tetrahydrofuran"
  		},
  		{
  			"id": "06293212",
  			"id_hs92": "293212",
  			"name": "2-furaldehyde (furfuraldehyde)"
  		},
  		{
  			"id": "06293213",
  			"id_hs92": "293213",
  			"name": "Furfuryl alcohol and tetrahydrofurfuryl alcohol"
  		},
  		{
  			"id": "06293219",
  			"id_hs92": "293219",
  			"name": "Heterocyclic compounds with unfused furan ring, nes"
  		},
  		{
  			"id": "06293221",
  			"id_hs92": "293221",
  			"name": "Coumarin, methylcoumarins and ethylcoumarins"
  		},
  		{
  			"id": "06293229",
  			"id_hs92": "293229",
  			"name": "Lactones, other than coumarins"
  		},
  		{
  			"id": "06293290",
  			"id_hs92": "293290",
  			"name": "Heterocyclic compound,oxygen hetero-atom(s) only,nes"
  		},
  		{
  			"id": "062933",
  			"id_hs92": "2933",
  			"name": "Nitrogen Heterocyclic Compounds"
  		},
  		{
  			"id": "06293311",
  			"id_hs92": "293311",
  			"name": "Phenazone (antipyrin), derivatives"
  		},
  		{
  			"id": "06293319",
  			"id_hs92": "293319",
  			"name": "Heterocyclic compounds with unfused pyrazole ring, ne"
  		},
  		{
  			"id": "06293321",
  			"id_hs92": "293321",
  			"name": "Hydantoin, derivatives"
  		},
  		{
  			"id": "06293329",
  			"id_hs92": "293329",
  			"name": "Heterocyclic compounds with unfused imidazole ring,ne"
  		},
  		{
  			"id": "06293331",
  			"id_hs92": "293331",
  			"name": "Pyridine, salts"
  		},
  		{
  			"id": "06293339",
  			"id_hs92": "293339",
  			"name": "Heterocyclic compounds with unfused pyridine ring,nes"
  		},
  		{
  			"id": "06293340",
  			"id_hs92": "293340",
  			"name": "Heterocyc cmpounds, quinoline ring not further fused"
  		},
  		{
  			"id": "06293351",
  			"id_hs92": "293351",
  			"name": "Barbituric acid, derivatives, salts thereof"
  		},
  		{
  			"id": "06293359",
  			"id_hs92": "293359",
  			"name": "Hetercyclic compounds with pyrimidine ring nes"
  		},
  		{
  			"id": "06293361",
  			"id_hs92": "293361",
  			"name": "Melamine"
  		},
  		{
  			"id": "06293369",
  			"id_hs92": "293369",
  			"name": "Heterocyclic compds with an unfused triazine ring nes"
  		},
  		{
  			"id": "06293371",
  			"id_hs92": "293371",
  			"name": "6-hexanelactam (epsilon-captolactam)"
  		},
  		{
  			"id": "06293379",
  			"id_hs92": "293379",
  			"name": "Lactams other than 6-hexanelactam"
  		},
  		{
  			"id": "06293390",
  			"id_hs92": "293390",
  			"name": "Heterocyclic compounds with N-hetero-atom(s) only, ne"
  		},
  		{
  			"id": "062934",
  			"id_hs92": "2934",
  			"name": "Nucleic Acids"
  		},
  		{
  			"id": "06293410",
  			"id_hs92": "293410",
  			"name": "Heterocyclic compounds with an unfused thiazole ring"
  		},
  		{
  			"id": "06293420",
  			"id_hs92": "293420",
  			"name": "Heterocyclic compounds containing a benzothiazole rin"
  		},
  		{
  			"id": "06293430",
  			"id_hs92": "293430",
  			"name": "Heterocyclic compounds containing a phenothiazine rin"
  		},
  		{
  			"id": "06293490",
  			"id_hs92": "293490",
  			"name": "Heterocyclic compounds, nes"
  		},
  		{
  			"id": "062935",
  			"id_hs92": "2935",
  			"name": "Sulfonamides"
  		},
  		{
  			"id": "06293500",
  			"id_hs92": "293500",
  			"name": "Sulphonamides in bulk"
  		},
  		{
  			"id": "062936",
  			"id_hs92": "2936",
  			"name": "Vitamins"
  		},
  		{
  			"id": "06293610",
  			"id_hs92": "293610",
  			"name": "Provitamins, unmixed"
  		},
  		{
  			"id": "06293621",
  			"id_hs92": "293621",
  			"name": "Vitamins A, derivatives, unmixed"
  		},
  		{
  			"id": "06293622",
  			"id_hs92": "293622",
  			"name": "Vitamin B1, derivatives, unmixed"
  		},
  		{
  			"id": "06293623",
  			"id_hs92": "293623",
  			"name": "Vitamin B2, derivatives, unmixed"
  		},
  		{
  			"id": "06293624",
  			"id_hs92": "293624",
  			"name": "Vitamin B3 & B5, D-or DL-panthothenic acid,derivative"
  		},
  		{
  			"id": "06293625",
  			"id_hs92": "293625",
  			"name": "Vitamin B6, derivatives, unmixed"
  		},
  		{
  			"id": "06293626",
  			"id_hs92": "293626",
  			"name": "Vitamin B12, derivatives, unmixed"
  		},
  		{
  			"id": "06293627",
  			"id_hs92": "293627",
  			"name": "Vitamin C, derivatives, unmixed"
  		},
  		{
  			"id": "06293628",
  			"id_hs92": "293628",
  			"name": "Vitamin E, derivatives, unmixed"
  		},
  		{
  			"id": "06293629",
  			"id_hs92": "293629",
  			"name": "Vitamins nes, derivatives, unmixed"
  		},
  		{
  			"id": "06293690",
  			"id_hs92": "293690",
  			"name": "Vitamin concentrates, intermixtures of vitamins"
  		},
  		{
  			"id": "062937",
  			"id_hs92": "2937",
  			"name": "Hormones"
  		},
  		{
  			"id": "06293710",
  			"id_hs92": "293710",
  			"name": "Pituitary anterior hormones and derivatives, in bulk"
  		},
  		{
  			"id": "06293721",
  			"id_hs92": "293721",
  			"name": "Cortisone,hydrocortisone,prednisone,prednisolone, bul"
  		},
  		{
  			"id": "06293722",
  			"id_hs92": "293722",
  			"name": "Halogenated derivs adrenalal cortical hormones, bulk"
  		},
  		{
  			"id": "06293729",
  			"id_hs92": "293729",
  			"name": "Adrenal cortical hormones nes, in bulk, derivatives"
  		},
  		{
  			"id": "06293791",
  			"id_hs92": "293791",
  			"name": "Insulin, salts, in bulk"
  		},
  		{
  			"id": "06293792",
  			"id_hs92": "293792",
  			"name": "Oestrogens and progestogens, in bulk"
  		},
  		{
  			"id": "06293799",
  			"id_hs92": "293799",
  			"name": "Hormones nes, derivatives, in bulk, steroids nes"
  		},
  		{
  			"id": "062938",
  			"id_hs92": "2938",
  			"name": "Glycosides"
  		},
  		{
  			"id": "06293810",
  			"id_hs92": "293810",
  			"name": "Rutoside (rutin), derivatives, in bulk"
  		},
  		{
  			"id": "06293890",
  			"id_hs92": "293890",
  			"name": "Glycosides and salts, ethers, esters, derivs nes, bul"
  		},
  		{
  			"id": "062939",
  			"id_hs92": "2939",
  			"name": "Vegetable Alkaloids"
  		},
  		{
  			"id": "06293910",
  			"id_hs92": "293910",
  			"name": "Opium alkaloids, their derivs, in bulk, salts thereof"
  		},
  		{
  			"id": "06293921",
  			"id_hs92": "293921",
  			"name": "Quinine, salts, in bulk"
  		},
  		{
  			"id": "06293929",
  			"id_hs92": "293929",
  			"name": "Cinchona alkaloids, derivatives nes, in bulk, salts"
  		},
  		{
  			"id": "06293930",
  			"id_hs92": "293930",
  			"name": "Caffeine, salts, in bulk"
  		},
  		{
  			"id": "06293940",
  			"id_hs92": "293940",
  			"name": "Ephedrines, salts, in bulk"
  		},
  		{
  			"id": "06293950",
  			"id_hs92": "293950",
  			"name": "Theophylline and aminophylline, derivs, in bulk, salt"
  		},
  		{
  			"id": "06293960",
  			"id_hs92": "293960",
  			"name": "Rye ergot alkaloids, derivatives, in bulk, salts"
  		},
  		{
  			"id": "06293970",
  			"id_hs92": "293970",
  			"name": "Nicotine, salts, in bulk"
  		},
  		{
  			"id": "06293990",
  			"id_hs92": "293990",
  			"name": "Vegetable alkaloids nes, salts, ethers, esters in bul"
  		},
  		{
  			"id": "062940",
  			"id_hs92": "2940",
  			"name": "Chemically Pure Sugars"
  		},
  		{
  			"id": "06294000",
  			"id_hs92": "294000",
  			"name": "Sugars, chem pure, their ethers, esters, salts in bul"
  		},
  		{
  			"id": "062941",
  			"id_hs92": "2941",
  			"name": "Antibiotics"
  		},
  		{
  			"id": "06294110",
  			"id_hs92": "294110",
  			"name": "Penicillins, derivatives, in bulk, salts"
  		},
  		{
  			"id": "06294120",
  			"id_hs92": "294120",
  			"name": "Streptomycins, derivatives, in bulk, salts"
  		},
  		{
  			"id": "06294130",
  			"id_hs92": "294130",
  			"name": "Tetracyclines, derivatives, in bulk, salts"
  		},
  		{
  			"id": "06294140",
  			"id_hs92": "294140",
  			"name": "Chloramphenicol, derivatives, in bulk, salts"
  		},
  		{
  			"id": "06294150",
  			"id_hs92": "294150",
  			"name": "Erythromycin, derivatives, in bulk, salts"
  		},
  		{
  			"id": "06294190",
  			"id_hs92": "294190",
  			"name": "Antibiotics nes, in bulk"
  		},
  		{
  			"id": "062942",
  			"id_hs92": "2942",
  			"name": "Other Organic Compounds"
  		},
  		{
  			"id": "06294200",
  			"id_hs92": "294200",
  			"name": "Organic compounds, nes"
  		},
  		{
  			"id": "063001",
  			"id_hs92": "3001",
  			"name": "Glands and Other Organs"
  		},
  		{
  			"id": "06300110",
  			"id_hs92": "300110",
  			"name": "Glands and other organs, dried, for therapeutic uses"
  		},
  		{
  			"id": "06300120",
  			"id_hs92": "300120",
  			"name": "Extracts of glands etc. for therapeutic use"
  		},
  		{
  			"id": "06300190",
  			"id_hs92": "300190",
  			"name": "Heparin, salts, for therapeutic use"
  		},
  		{
  			"id": "063002",
  			"id_hs92": "3002",
  			"name": "Human or Animal Blood"
  		},
  		{
  			"id": "06300210",
  			"id_hs92": "300210",
  			"name": "Antisera and other blood fractions"
  		},
  		{
  			"id": "06300220",
  			"id_hs92": "300220",
  			"name": "Vaccines, human use"
  		},
  		{
  			"id": "06300231",
  			"id_hs92": "300231",
  			"name": "Vaccines, foot and mouth disease, veterinary use"
  		},
  		{
  			"id": "06300239",
  			"id_hs92": "300239",
  			"name": "Vaccines, veterinary use, except foot and mouth"
  		},
  		{
  			"id": "06300290",
  			"id_hs92": "300290",
  			"name": "Blood, toxins, cultures, medical use, nes"
  		},
  		{
  			"id": "063003",
  			"id_hs92": "3003",
  			"name": "Unpackaged Medicaments"
  		},
  		{
  			"id": "06300310",
  			"id_hs92": "300310",
  			"name": "Penicillins or streptomycins and derivatives, in bulk"
  		},
  		{
  			"id": "06300320",
  			"id_hs92": "300320",
  			"name": "Antibiotics nes, formulated, in bulk"
  		},
  		{
  			"id": "06300331",
  			"id_hs92": "300331",
  			"name": "Insulin, formulated, in bulk"
  		},
  		{
  			"id": "06300339",
  			"id_hs92": "300339",
  			"name": "Hormones nes, no antibiotics, bulk, not contraceptive"
  		},
  		{
  			"id": "06300340",
  			"id_hs92": "300340",
  			"name": "Alkaloids, derivs, without antibiotics, hormones, bul"
  		},
  		{
  			"id": "06300390",
  			"id_hs92": "300390",
  			"name": "Medicaments nes, formulated, in bulk"
  		},
  		{
  			"id": "063004",
  			"id_hs92": "3004",
  			"name": "Packaged Medicaments"
  		},
  		{
  			"id": "06300410",
  			"id_hs92": "300410",
  			"name": "Penicillins and streptomycins, derivs, in dosage"
  		},
  		{
  			"id": "06300420",
  			"id_hs92": "300420",
  			"name": "Antibiotics nes, in dosage"
  		},
  		{
  			"id": "06300431",
  			"id_hs92": "300431",
  			"name": "Insulin, in dosage"
  		},
  		{
  			"id": "06300432",
  			"id_hs92": "300432",
  			"name": "Adrenal cortical hormones, in dosage"
  		},
  		{
  			"id": "06300439",
  			"id_hs92": "300439",
  			"name": "Hormones nes, except contraceptives, in dosage"
  		},
  		{
  			"id": "06300440",
  			"id_hs92": "300440",
  			"name": "Alkaloids, derivs, no antibiotics, hormones, in dosag"
  		},
  		{
  			"id": "06300450",
  			"id_hs92": "300450",
  			"name": "Vitamins, derivatives,in dosage"
  		},
  		{
  			"id": "06300490",
  			"id_hs92": "300490",
  			"name": "Medicaments nes, in dosage"
  		},
  		{
  			"id": "063005",
  			"id_hs92": "3005",
  			"name": "Bandages"
  		},
  		{
  			"id": "06300510",
  			"id_hs92": "300510",
  			"name": "Medical dressings etc. having an adhesive layer"
  		},
  		{
  			"id": "06300590",
  			"id_hs92": "300590",
  			"name": "Medical dressings etc except those with adhesive laye"
  		},
  		{
  			"id": "063006",
  			"id_hs92": "3006",
  			"name": "Special Pharmaceuticals"
  		},
  		{
  			"id": "06300610",
  			"id_hs92": "300610",
  			"name": "Suture materials, sterile surgical and dental goods"
  		},
  		{
  			"id": "06300620",
  			"id_hs92": "300620",
  			"name": "Blood-grouping reagents"
  		},
  		{
  			"id": "06300630",
  			"id_hs92": "300630",
  			"name": "Opacifying preparations, x-ray, diagnostic reagents"
  		},
  		{
  			"id": "06300640",
  			"id_hs92": "300640",
  			"name": "Dental cements and other dental fillings, bone cement"
  		},
  		{
  			"id": "06300650",
  			"id_hs92": "300650",
  			"name": "First-aid boxes and kits"
  		},
  		{
  			"id": "06300660",
  			"id_hs92": "300660",
  			"name": "Contraceptive preps based on hormones or spermicides"
  		},
  		{
  			"id": "063101",
  			"id_hs92": "3101",
  			"name": "Animal or Vegetable Fertilizers"
  		},
  		{
  			"id": "06310100",
  			"id_hs92": "310100",
  			"name": "Animal or vegetable fertilizers, in packs >10 kg"
  		},
  		{
  			"id": "063102",
  			"id_hs92": "3102",
  			"name": "Nitrogenous Fertilizers"
  		},
  		{
  			"id": "06310210",
  			"id_hs92": "310210",
  			"name": "Urea, including aqueous solution in packs >10 kg"
  		},
  		{
  			"id": "06310221",
  			"id_hs92": "310221",
  			"name": "Ammonium sulphate, in packs >10 kg"
  		},
  		{
  			"id": "06310229",
  			"id_hs92": "310229",
  			"name": "Ammonium sulphate-nitrate mix, double salts, pack>10k"
  		},
  		{
  			"id": "06310230",
  			"id_hs92": "310230",
  			"name": "Ammonium nitrate, including solution, in pack >10 kg"
  		},
  		{
  			"id": "06310240",
  			"id_hs92": "310240",
  			"name": "Ammonium nitrate limestone etc mixes, pack >10 kg"
  		},
  		{
  			"id": "06310250",
  			"id_hs92": "310250",
  			"name": "Sodium nitrate, in packs >10 kg"
  		},
  		{
  			"id": "06310260",
  			"id_hs92": "310260",
  			"name": "Calcium-ammonium nitrate mix, double salts pack >10kg"
  		},
  		{
  			"id": "06310270",
  			"id_hs92": "310270",
  			"name": "Calcium cyanamide in packs >10 kg"
  		},
  		{
  			"id": "06310280",
  			"id_hs92": "310280",
  			"name": "Urea-ammonium nitrate mixes in solution, pack >10 kg"
  		},
  		{
  			"id": "06310290",
  			"id_hs92": "310290",
  			"name": "Nitrogenous fertilizers, mixes, nes, pack >10 kg"
  		},
  		{
  			"id": "063103",
  			"id_hs92": "3103",
  			"name": "Phosphatic Fertilizers"
  		},
  		{
  			"id": "06310310",
  			"id_hs92": "310310",
  			"name": "Superphosphates, in packs >10 kg"
  		},
  		{
  			"id": "06310320",
  			"id_hs92": "310320",
  			"name": "Basic slag, in packs >10 kg"
  		},
  		{
  			"id": "06310390",
  			"id_hs92": "310390",
  			"name": "Phosphatic fertilizers, mixes, nes, pack >10kg"
  		},
  		{
  			"id": "063104",
  			"id_hs92": "3104",
  			"name": "Potassic Fertilizers"
  		},
  		{
  			"id": "06310410",
  			"id_hs92": "310410",
  			"name": "Carnallite, sylvite, crude potassium salts nes, >10kg"
  		},
  		{
  			"id": "06310420",
  			"id_hs92": "310420",
  			"name": "Potassium chloride, in packs >10 kg"
  		},
  		{
  			"id": "06310430",
  			"id_hs92": "310430",
  			"name": "Potassium sulphate, in packs >10 kg"
  		},
  		{
  			"id": "06310490",
  			"id_hs92": "310490",
  			"name": "Potassic fertilizers, mixes, nes, pack >10 kg"
  		},
  		{
  			"id": "063105",
  			"id_hs92": "3105",
  			"name": "Mixed Mineral or Chemical Fertilizers"
  		},
  		{
  			"id": "06310510",
  			"id_hs92": "310510",
  			"name": "Fertilizer mixes in tablets etc or in packs <10 kg"
  		},
  		{
  			"id": "06310520",
  			"id_hs92": "310520",
  			"name": "Nitrogen-phosphorus-potassium fertilizers, pack >10kg"
  		},
  		{
  			"id": "06310530",
  			"id_hs92": "310530",
  			"name": "Diammonium phosphate, in packs >10 kg"
  		},
  		{
  			"id": "06310540",
  			"id_hs92": "310540",
  			"name": "Monoammonium phosphate & mix with diammonium, <=10 kg"
  		},
  		{
  			"id": "06310551",
  			"id_hs92": "310551",
  			"name": "Fertilizers with nitrates and phosphates, nes, <=10kg"
  		},
  		{
  			"id": "06310559",
  			"id_hs92": "310559",
  			"name": "Fertilizers with nitrogen and phosphorus nes, <=10kg"
  		},
  		{
  			"id": "06310560",
  			"id_hs92": "310560",
  			"name": "Fertilizers containing phosphorus & potassium, <=10kg"
  		},
  		{
  			"id": "06310590",
  			"id_hs92": "310590",
  			"name": "Fertilizers, mixes, nes"
  		},
  		{
  			"id": "063201",
  			"id_hs92": "3201",
  			"name": "Vegetable Tanning Extracts"
  		},
  		{
  			"id": "06320110",
  			"id_hs92": "320110",
  			"name": "Quebracho tanning extract"
  		},
  		{
  			"id": "06320120",
  			"id_hs92": "320120",
  			"name": "Wattle tanning extract"
  		},
  		{
  			"id": "06320130",
  			"id_hs92": "320130",
  			"name": "Oak or chestnut tanning extract"
  		},
  		{
  			"id": "06320190",
  			"id_hs92": "320190",
  			"name": "Vegetable tanning extracts nes, tannins, salts, deriv"
  		},
  		{
  			"id": "063202",
  			"id_hs92": "3202",
  			"name": "Synthetic Tanning Extracts"
  		},
  		{
  			"id": "06320210",
  			"id_hs92": "320210",
  			"name": "Synthetic organic tanning substances"
  		},
  		{
  			"id": "06320290",
  			"id_hs92": "320290",
  			"name": "Inorganic tanning and pre-tanning preparations"
  		},
  		{
  			"id": "063203",
  			"id_hs92": "3203",
  			"name": "Vegetable or Animal Dyes"
  		},
  		{
  			"id": "06320300",
  			"id_hs92": "320300",
  			"name": "Colouring matter of vegetable or animal origin"
  		},
  		{
  			"id": "063204",
  			"id_hs92": "3204",
  			"name": "Synthetic Coloring Matter"
  		},
  		{
  			"id": "06320411",
  			"id_hs92": "320411",
  			"name": "Disperse dyes and preparations based thereon"
  		},
  		{
  			"id": "06320412",
  			"id_hs92": "320412",
  			"name": "Acid and mordant dyes and preparations based thereon"
  		},
  		{
  			"id": "06320413",
  			"id_hs92": "320413",
  			"name": "Basic dyes and preparations based thereon"
  		},
  		{
  			"id": "06320414",
  			"id_hs92": "320414",
  			"name": "Direct dyes and preparations based thereon"
  		},
  		{
  			"id": "06320415",
  			"id_hs92": "320415",
  			"name": "Vat dyes and preparations based thereon"
  		},
  		{
  			"id": "06320416",
  			"id_hs92": "320416",
  			"name": "Reactive dyes and preparations based thereon"
  		},
  		{
  			"id": "06320417",
  			"id_hs92": "320417",
  			"name": "Synthetic organic pigments and preps based thereon"
  		},
  		{
  			"id": "06320419",
  			"id_hs92": "320419",
  			"name": "Synthetic organic colouring matter nes"
  		},
  		{
  			"id": "06320420",
  			"id_hs92": "320420",
  			"name": "Synthetic organic fluorescent brightening agents"
  		},
  		{
  			"id": "06320490",
  			"id_hs92": "320490",
  			"name": "Synthetic organic products used as luminophores"
  		},
  		{
  			"id": "063205",
  			"id_hs92": "3205",
  			"name": "Lake Pigments"
  		},
  		{
  			"id": "06320500",
  			"id_hs92": "320500",
  			"name": "Colour lakes, preparations based thereon"
  		},
  		{
  			"id": "063206",
  			"id_hs92": "3206",
  			"name": "Other Coloring Matter"
  		},
  		{
  			"id": "06320610",
  			"id_hs92": "320610",
  			"name": "Pigments and preparations based on titanium dioxide"
  		},
  		{
  			"id": "06320620",
  			"id_hs92": "320620",
  			"name": "Pigments and preparations based on chromium compounds"
  		},
  		{
  			"id": "06320630",
  			"id_hs92": "320630",
  			"name": "Pigments and preparations based on cadmium compounds"
  		},
  		{
  			"id": "06320641",
  			"id_hs92": "320641",
  			"name": "Ultramarine and preparations based thereon"
  		},
  		{
  			"id": "06320642",
  			"id_hs92": "320642",
  			"name": "Pigments etc based on zinc sulphide, lithophone"
  		},
  		{
  			"id": "06320643",
  			"id_hs92": "320643",
  			"name": "Pigments and preparations based on hexacyanoferrates"
  		},
  		{
  			"id": "06320649",
  			"id_hs92": "320649",
  			"name": "Inorganic colouring matter nes, including preparation"
  		},
  		{
  			"id": "06320650",
  			"id_hs92": "320650",
  			"name": "Inorganic products used as luminophores"
  		},
  		{
  			"id": "063207",
  			"id_hs92": "3207",
  			"name": "Prepared Pigments"
  		},
  		{
  			"id": "06320710",
  			"id_hs92": "320710",
  			"name": "Pigment, opacifier, colours etc for ceramics or glass"
  		},
  		{
  			"id": "06320720",
  			"id_hs92": "320720",
  			"name": "Vitrifiable enamels, glazes etc for ceramics and glas"
  		},
  		{
  			"id": "06320730",
  			"id_hs92": "320730",
  			"name": "Liquid lustres and similar preparations"
  		},
  		{
  			"id": "06320740",
  			"id_hs92": "320740",
  			"name": "Glass frit and other glass (powder, granules, flakes)"
  		},
  		{
  			"id": "063208",
  			"id_hs92": "3208",
  			"name": "Nonaqueous Paints"
  		},
  		{
  			"id": "06320810",
  			"id_hs92": "320810",
  			"name": "Polyester based paints, varnishes, non-aqueous medium"
  		},
  		{
  			"id": "06320820",
  			"id_hs92": "320820",
  			"name": "Acrylic or vinyl polymer paint or varnish, non-aqueou"
  		},
  		{
  			"id": "06320890",
  			"id_hs92": "320890",
  			"name": "Polymer based paint, varnish in non-aqueous medium ne"
  		},
  		{
  			"id": "063209",
  			"id_hs92": "3209",
  			"name": "Aqueous Paints"
  		},
  		{
  			"id": "06320910",
  			"id_hs92": "320910",
  			"name": "Acrylic & vinyl polymer based paint, varnish, in wate"
  		},
  		{
  			"id": "06320990",
  			"id_hs92": "320990",
  			"name": "Polymer based paints & varnishes nes, aqueous medium"
  		},
  		{
  			"id": "063210",
  			"id_hs92": "3210",
  			"name": "Other Paints"
  		},
  		{
  			"id": "06321000",
  			"id_hs92": "321000",
  			"name": "Paints and varnishes nes, water pigments for leather"
  		},
  		{
  			"id": "063211",
  			"id_hs92": "3211",
  			"name": "Prepared Paint Driers"
  		},
  		{
  			"id": "06321100",
  			"id_hs92": "321100",
  			"name": "Prepared driers"
  		},
  		{
  			"id": "063212",
  			"id_hs92": "3212",
  			"name": "Nonaqueous Pigments"
  		},
  		{
  			"id": "06321210",
  			"id_hs92": "321210",
  			"name": "Stamping foils"
  		},
  		{
  			"id": "06321290",
  			"id_hs92": "321290",
  			"name": "Pigments for paints, dyes, etc packaged for retail"
  		},
  		{
  			"id": "063213",
  			"id_hs92": "3213",
  			"name": "Artistry Paints"
  		},
  		{
  			"id": "06321310",
  			"id_hs92": "321310",
  			"name": "Colours in sets"
  		},
  		{
  			"id": "06321390",
  			"id_hs92": "321390",
  			"name": "Artist, student & signwriter colours, small packs nes"
  		},
  		{
  			"id": "063214",
  			"id_hs92": "3214",
  			"name": "Glaziers Putty"
  		},
  		{
  			"id": "06321410",
  			"id_hs92": "321410",
  			"name": "Mastics, painters' fillings"
  		},
  		{
  			"id": "06321490",
  			"id_hs92": "321490",
  			"name": "Non-refractory surfacing preparations nes"
  		},
  		{
  			"id": "063215",
  			"id_hs92": "3215",
  			"name": "Ink"
  		},
  		{
  			"id": "06321511",
  			"id_hs92": "321511",
  			"name": "Printing ink, black"
  		},
  		{
  			"id": "06321519",
  			"id_hs92": "321519",
  			"name": "Printing ink, other than black"
  		},
  		{
  			"id": "06321590",
  			"id_hs92": "321590",
  			"name": "Ink, other than printing ink"
  		},
  		{
  			"id": "063301",
  			"id_hs92": "3301",
  			"name": "Essential Oils"
  		},
  		{
  			"id": "06330111",
  			"id_hs92": "330111",
  			"name": "Essential oils of bergamot"
  		},
  		{
  			"id": "06330112",
  			"id_hs92": "330112",
  			"name": "Essential oils of orange"
  		},
  		{
  			"id": "06330113",
  			"id_hs92": "330113",
  			"name": "Essential oils of lemon"
  		},
  		{
  			"id": "06330114",
  			"id_hs92": "330114",
  			"name": "Essential oils of lime"
  		},
  		{
  			"id": "06330119",
  			"id_hs92": "330119",
  			"name": "Essential oils of citrus fruits, nes"
  		},
  		{
  			"id": "06330121",
  			"id_hs92": "330121",
  			"name": "Essential oils of geranium"
  		},
  		{
  			"id": "06330122",
  			"id_hs92": "330122",
  			"name": "Essential oils of jasmin"
  		},
  		{
  			"id": "06330123",
  			"id_hs92": "330123",
  			"name": "Essential oils of lavender or of lavandin"
  		},
  		{
  			"id": "06330124",
  			"id_hs92": "330124",
  			"name": "Essential oils of peppermint"
  		},
  		{
  			"id": "06330125",
  			"id_hs92": "330125",
  			"name": "Essential oils of other mints"
  		},
  		{
  			"id": "06330126",
  			"id_hs92": "330126",
  			"name": "Essential oils of vetiver"
  		},
  		{
  			"id": "06330129",
  			"id_hs92": "330129",
  			"name": "Essential oils, nes"
  		},
  		{
  			"id": "06330130",
  			"id_hs92": "330130",
  			"name": "Resinoids"
  		},
  		{
  			"id": "06330190",
  			"id_hs92": "330190",
  			"name": "Essential oils, terpenic by-products etc., nes"
  		},
  		{
  			"id": "063302",
  			"id_hs92": "3302",
  			"name": "Scented Mixtures"
  		},
  		{
  			"id": "06330210",
  			"id_hs92": "330210",
  			"name": "Mixed odoriferous substances - food & drink industrie"
  		},
  		{
  			"id": "06330290",
  			"id_hs92": "330290",
  			"name": "Mixed odoriferous substances - industrial use nes"
  		},
  		{
  			"id": "063303",
  			"id_hs92": "3303",
  			"name": "Perfumes"
  		},
  		{
  			"id": "06330300",
  			"id_hs92": "330300",
  			"name": "Perfumes and toilet waters"
  		},
  		{
  			"id": "063304",
  			"id_hs92": "3304",
  			"name": "Beauty Products"
  		},
  		{
  			"id": "06330410",
  			"id_hs92": "330410",
  			"name": "Lip make-up preparations"
  		},
  		{
  			"id": "06330420",
  			"id_hs92": "330420",
  			"name": "Eye make-up preparations"
  		},
  		{
  			"id": "06330430",
  			"id_hs92": "330430",
  			"name": "Manicure or pedicure preparations"
  		},
  		{
  			"id": "06330491",
  			"id_hs92": "330491",
  			"name": "Powders, for skin care and make-up"
  		},
  		{
  			"id": "06330499",
  			"id_hs92": "330499",
  			"name": "Beauty, makeup and suntan preparations nes"
  		},
  		{
  			"id": "063305",
  			"id_hs92": "3305",
  			"name": "Hair Products"
  		},
  		{
  			"id": "06330510",
  			"id_hs92": "330510",
  			"name": "Hair shampoos"
  		},
  		{
  			"id": "06330520",
  			"id_hs92": "330520",
  			"name": "Hair waving or straightening preparations"
  		},
  		{
  			"id": "06330530",
  			"id_hs92": "330530",
  			"name": "Hair lacquers"
  		},
  		{
  			"id": "06330590",
  			"id_hs92": "330590",
  			"name": "Hair preparations, nes"
  		},
  		{
  			"id": "063306",
  			"id_hs92": "3306",
  			"name": "Dental Products"
  		},
  		{
  			"id": "06330610",
  			"id_hs92": "330610",
  			"name": "Dentifrices"
  		},
  		{
  			"id": "06330690",
  			"id_hs92": "330690",
  			"name": "Oral & dental hygiene preparations, except dentifrice"
  		},
  		{
  			"id": "063307",
  			"id_hs92": "3307",
  			"name": "Shaving Products"
  		},
  		{
  			"id": "06330710",
  			"id_hs92": "330710",
  			"name": "Pre-shave, shaving and after shaving preparations"
  		},
  		{
  			"id": "06330720",
  			"id_hs92": "330720",
  			"name": "Personal deodorants and antiperspirants"
  		},
  		{
  			"id": "06330730",
  			"id_hs92": "330730",
  			"name": "Perfumed bath salts and other bath preparations"
  		},
  		{
  			"id": "06330741",
  			"id_hs92": "330741",
  			"name": "Agarbatti, odorifers operated by burning"
  		},
  		{
  			"id": "06330749",
  			"id_hs92": "330749",
  			"name": "Room perfuming or deodorizing preparations, nes"
  		},
  		{
  			"id": "06330790",
  			"id_hs92": "330790",
  			"name": "Perfumery, cosmetic or toilet preparations, nes"
  		},
  		{
  			"id": "063401",
  			"id_hs92": "3401",
  			"name": "Soap"
  		},
  		{
  			"id": "06340111",
  			"id_hs92": "340111",
  			"name": "Soaps, for toilet use, solid"
  		},
  		{
  			"id": "06340119",
  			"id_hs92": "340119",
  			"name": "Soaps for purposes other than toilet soap, solid"
  		},
  		{
  			"id": "06340120",
  			"id_hs92": "340120",
  			"name": "Soaps nes"
  		},
  		{
  			"id": "063402",
  			"id_hs92": "3402",
  			"name": "Cleaning Products"
  		},
  		{
  			"id": "06340211",
  			"id_hs92": "340211",
  			"name": "Anionic surface-active agents"
  		},
  		{
  			"id": "06340212",
  			"id_hs92": "340212",
  			"name": "Cationic surface-active agents"
  		},
  		{
  			"id": "06340213",
  			"id_hs92": "340213",
  			"name": "Non-ionic surface active agents"
  		},
  		{
  			"id": "06340219",
  			"id_hs92": "340219",
  			"name": "Organic surface-active agents, nes"
  		},
  		{
  			"id": "06340220",
  			"id_hs92": "340220",
  			"name": "Washing and cleaning preparations, retail"
  		},
  		{
  			"id": "06340290",
  			"id_hs92": "340290",
  			"name": "Organic surfactant washing, cleaning preparations nes"
  		},
  		{
  			"id": "063403",
  			"id_hs92": "3403",
  			"name": "Lubricating Products"
  		},
  		{
  			"id": "06340311",
  			"id_hs92": "340311",
  			"name": "Lubricant <70% petroleum oil, textile or leather use"
  		},
  		{
  			"id": "06340319",
  			"id_hs92": "340319",
  			"name": "Lubricating oil etc containing <70% petroleum oil nes"
  		},
  		{
  			"id": "06340391",
  			"id_hs92": "340391",
  			"name": "Lubricants etc, no petroleum oil, textile, leather us"
  		},
  		{
  			"id": "06340399",
  			"id_hs92": "340399",
  			"name": "Lubricating preparations, zero petroleum content, nes"
  		},
  		{
  			"id": "063404",
  			"id_hs92": "3404",
  			"name": "Waxes"
  		},
  		{
  			"id": "06340410",
  			"id_hs92": "340410",
  			"name": "Artificial & prepared waxes, of modified lignite"
  		},
  		{
  			"id": "06340420",
  			"id_hs92": "340420",
  			"name": "Artificial and prepared waxes, of polyethylene glycol"
  		},
  		{
  			"id": "06340490",
  			"id_hs92": "340490",
  			"name": "Artificial and prepared waxes, nes"
  		},
  		{
  			"id": "063405",
  			"id_hs92": "3405",
  			"name": "Polishes and Creams"
  		},
  		{
  			"id": "06340510",
  			"id_hs92": "340510",
  			"name": "Polishes, creams etc. for footwear or leather"
  		},
  		{
  			"id": "06340520",
  			"id_hs92": "340520",
  			"name": "Polishes, creams etc. for maintenance of woodwork"
  		},
  		{
  			"id": "06340530",
  			"id_hs92": "340530",
  			"name": "Polishes etc. for coachwork, except metal polishes"
  		},
  		{
  			"id": "06340540",
  			"id_hs92": "340540",
  			"name": "Scouring pastes and powders and other scouring preps"
  		},
  		{
  			"id": "06340590",
  			"id_hs92": "340590",
  			"name": "Polishes, creams and similar preparations, nes"
  		},
  		{
  			"id": "063406",
  			"id_hs92": "3406",
  			"name": "Candles"
  		},
  		{
  			"id": "06340600",
  			"id_hs92": "340600",
  			"name": "Candles, tapers and the like"
  		},
  		{
  			"id": "063407",
  			"id_hs92": "3407",
  			"name": "Pastes and Waxes"
  		},
  		{
  			"id": "06340700",
  			"id_hs92": "340700",
  			"name": "Model paste, dental paste and wax, etc."
  		},
  		{
  			"id": "063501",
  			"id_hs92": "3501",
  			"name": "Casein"
  		},
  		{
  			"id": "06350110",
  			"id_hs92": "350110",
  			"name": "Casein"
  		},
  		{
  			"id": "06350190",
  			"id_hs92": "350190",
  			"name": "Casein glues, caseinates and other casein derivatives"
  		},
  		{
  			"id": "063502",
  			"id_hs92": "3502",
  			"name": "Water Soluble Proteins"
  		},
  		{
  			"id": "06350210",
  			"id_hs92": "350210",
  			"name": "Egg albumin"
  		},
  		{
  			"id": "06350290",
  			"id_hs92": "350290",
  			"name": "Albumins nes, albuminates & other albumin derivatives"
  		},
  		{
  			"id": "063503",
  			"id_hs92": "3503",
  			"name": "Gelatin"
  		},
  		{
  			"id": "06350300",
  			"id_hs92": "350300",
  			"name": "Gelatin & derivatives, isinglass, glues (animal) nes"
  		},
  		{
  			"id": "063504",
  			"id_hs92": "3504",
  			"name": "Peptones"
  		},
  		{
  			"id": "06350400",
  			"id_hs92": "350400",
  			"name": "Peptones, proteins and derivatives, nes, hide powder"
  		},
  		{
  			"id": "063505",
  			"id_hs92": "3505",
  			"name": "Dextrins"
  		},
  		{
  			"id": "06350510",
  			"id_hs92": "350510",
  			"name": "Dextrins and other modified starches"
  		},
  		{
  			"id": "06350520",
  			"id_hs92": "350520",
  			"name": "Glues based on starches, or modified starches"
  		},
  		{
  			"id": "063506",
  			"id_hs92": "3506",
  			"name": "Glues"
  		},
  		{
  			"id": "06350610",
  			"id_hs92": "350610",
  			"name": "Glues and adhesives of all kinds, package <1 kg"
  		},
  		{
  			"id": "06350691",
  			"id_hs92": "350691",
  			"name": "Adhesives based on rubber or plastic, package >1 kg"
  		},
  		{
  			"id": "06350699",
  			"id_hs92": "350699",
  			"name": "Glues or adhesives, prepared nes, package > 1kg"
  		},
  		{
  			"id": "063507",
  			"id_hs92": "3507",
  			"name": "Enzymes"
  		},
  		{
  			"id": "06350710",
  			"id_hs92": "350710",
  			"name": "Rennet and concentrates thereof"
  		},
  		{
  			"id": "06350790",
  			"id_hs92": "350790",
  			"name": "Enzymes nes, prepared enzymes nes, except rennet"
  		},
  		{
  			"id": "063601",
  			"id_hs92": "3601",
  			"name": "Propellant Powders"
  		},
  		{
  			"id": "06360100",
  			"id_hs92": "360100",
  			"name": "Propellent powders"
  		},
  		{
  			"id": "063602",
  			"id_hs92": "3602",
  			"name": "Prepared Explosives"
  		},
  		{
  			"id": "06360200",
  			"id_hs92": "360200",
  			"name": "Prepared explosives, except propellent powders"
  		},
  		{
  			"id": "063603",
  			"id_hs92": "3603",
  			"name": "Detonating Fuses"
  		},
  		{
  			"id": "06360300",
  			"id_hs92": "360300",
  			"name": "Safety or detonating fuses, detonators, igniters"
  		},
  		{
  			"id": "063604",
  			"id_hs92": "3604",
  			"name": "Fireworks"
  		},
  		{
  			"id": "06360410",
  			"id_hs92": "360410",
  			"name": "Fireworks"
  		},
  		{
  			"id": "06360490",
  			"id_hs92": "360490",
  			"name": "Signalling flares, fog signals, other pyrotechnics"
  		},
  		{
  			"id": "063605",
  			"id_hs92": "3605",
  			"name": "Matches"
  		},
  		{
  			"id": "06360500",
  			"id_hs92": "360500",
  			"name": "Matches"
  		},
  		{
  			"id": "063606",
  			"id_hs92": "3606",
  			"name": "Pyrophoric Alloys"
  		},
  		{
  			"id": "06360610",
  			"id_hs92": "360610",
  			"name": "Lighter refill fuels (pack < 300 cc)"
  		},
  		{
  			"id": "06360690",
  			"id_hs92": "360690",
  			"name": "Pyrophoric alloys, firelighters, etc"
  		},
  		{
  			"id": "063701",
  			"id_hs92": "3701",
  			"name": "Photographic Plates"
  		},
  		{
  			"id": "06370110",
  			"id_hs92": "370110",
  			"name": "X-ray plates and films"
  		},
  		{
  			"id": "06370120",
  			"id_hs92": "370120",
  			"name": "Photographic instant print film in the flat"
  		},
  		{
  			"id": "06370130",
  			"id_hs92": "370130",
  			"name": "Photo plates & film in the flat, nes, any side >255mm"
  		},
  		{
  			"id": "06370191",
  			"id_hs92": "370191",
  			"name": "Photographic plates and film in the flat, colour"
  		},
  		{
  			"id": "06370199",
  			"id_hs92": "370199",
  			"name": "Photographic plates, film in the flat, nes"
  		},
  		{
  			"id": "063702",
  			"id_hs92": "3702",
  			"name": "Photographic Film"
  		},
  		{
  			"id": "06370210",
  			"id_hs92": "370210",
  			"name": "Photographic film, rolls, for x-ray"
  		},
  		{
  			"id": "06370220",
  			"id_hs92": "370220",
  			"name": "Instant print film, rolls"
  		},
  		{
  			"id": "06370231",
  			"id_hs92": "370231",
  			"name": "Colour photo film, rolls, width <105mm"
  		},
  		{
  			"id": "06370232",
  			"id_hs92": "370232",
  			"name": "Silver halide photo film, rolls, width <105mm"
  		},
  		{
  			"id": "06370239",
  			"id_hs92": "370239",
  			"name": "Photo film nes, rolls, width < 105mm"
  		},
  		{
  			"id": "06370241",
  			"id_hs92": "370241",
  			"name": "Colour film in rolls, width >610mm, length > 200m"
  		},
  		{
  			"id": "06370242",
  			"id_hs92": "370242",
  			"name": "Film, rolls, except colour, width >610mm, length >200"
  		},
  		{
  			"id": "06370243",
  			"id_hs92": "370243",
  			"name": "Film in rolls, width >610mm, length <200 m, nes"
  		},
  		{
  			"id": "06370244",
  			"id_hs92": "370244",
  			"name": "Film in rolls, width 105-610 mm nes"
  		},
  		{
  			"id": "06370251",
  			"id_hs92": "370251",
  			"name": "Film, colour photo, rolls, width <16mm, <14 m long,ne"
  		},
  		{
  			"id": "06370252",
  			"id_hs92": "370252",
  			"name": "Film, colour photo, rolls, width <16mm, >14 m long,ne"
  		},
  		{
  			"id": "06370253",
  			"id_hs92": "370253",
  			"name": "Film, colour slide, rolls width 16-35mm, <30m long"
  		},
  		{
  			"id": "06370254",
  			"id_hs92": "370254",
  			"name": "Film, colour photo nes, rolls width 16-35mm,<30m long"
  		},
  		{
  			"id": "06370255",
  			"id_hs92": "370255",
  			"name": "Film for colour photo, rolls width 16-35mm, >30m long"
  		},
  		{
  			"id": "06370256",
  			"id_hs92": "370256",
  			"name": "Photographic film in rolls, colour, width >35 mm, nes"
  		},
  		{
  			"id": "06370291",
  			"id_hs92": "370291",
  			"name": "Photo film in rolls, width <16 mm, <14m long, nes"
  		},
  		{
  			"id": "06370292",
  			"id_hs92": "370292",
  			"name": "Photo film in rolls, width <16 mm, >14m long, nes"
  		},
  		{
  			"id": "06370293",
  			"id_hs92": "370293",
  			"name": "Photo film in rolls, width 16-35mm, <30m long, nes"
  		},
  		{
  			"id": "06370294",
  			"id_hs92": "370294",
  			"name": "Photo film in rolls, width 16-35mm, >30m long, nes"
  		},
  		{
  			"id": "06370295",
  			"id_hs92": "370295",
  			"name": "Photographic film, rolls, of a width <= 35 mm, nes"
  		},
  		{
  			"id": "063703",
  			"id_hs92": "3703",
  			"name": "Photographic Paper"
  		},
  		{
  			"id": "06370310",
  			"id_hs92": "370310",
  			"name": "Unexposed photographic paper,textile roll > 610mm wid"
  		},
  		{
  			"id": "06370320",
  			"id_hs92": "370320",
  			"name": "Unexposed colour photograhic paper, board or textile"
  		},
  		{
  			"id": "06370390",
  			"id_hs92": "370390",
  			"name": "Unexposed photographic paper, board or textile nes"
  		},
  		{
  			"id": "063704",
  			"id_hs92": "3704",
  			"name": "Undeveloped Exposed Photographic Material"
  		},
  		{
  			"id": "06370400",
  			"id_hs92": "370400",
  			"name": "Photographic plate, film, paper, exposed, undeveloped"
  		},
  		{
  			"id": "063705",
  			"id_hs92": "3705",
  			"name": "Developed Exposed Photographic Material"
  		},
  		{
  			"id": "06370510",
  			"id_hs92": "370510",
  			"name": "Photo plates and film, exposed & developed, for offse"
  		},
  		{
  			"id": "06370520",
  			"id_hs92": "370520",
  			"name": "Microfilms exposed and developed"
  		},
  		{
  			"id": "06370590",
  			"id_hs92": "370590",
  			"name": "Photographic plates or film, exposed or developed nes"
  		},
  		{
  			"id": "063706",
  			"id_hs92": "3706",
  			"name": "Motion-picture film, exposed and developed"
  		},
  		{
  			"id": "06370610",
  			"id_hs92": "370610",
  			"name": "Cinematograph film, exposed and developed, width >35m"
  		},
  		{
  			"id": "06370690",
  			"id_hs92": "370690",
  			"name": "Cinematograph film, exposed & developed, width <=35mm"
  		},
  		{
  			"id": "063707",
  			"id_hs92": "3707",
  			"name": "Photographic Chemicals"
  		},
  		{
  			"id": "06370710",
  			"id_hs92": "370710",
  			"name": "Sensitising emulsions"
  		},
  		{
  			"id": "06370790",
  			"id_hs92": "370790",
  			"name": "Chemical preparations for photographic uses, nes"
  		},
  		{
  			"id": "063801",
  			"id_hs92": "3801",
  			"name": "Artificial Graphite"
  		},
  		{
  			"id": "06380110",
  			"id_hs92": "380110",
  			"name": "Artificial graphite"
  		},
  		{
  			"id": "06380120",
  			"id_hs92": "380120",
  			"name": "Colloidal or semi-colloidal graphite"
  		},
  		{
  			"id": "06380130",
  			"id_hs92": "380130",
  			"name": "Carbonaceous pastes for electrodes, furnace linings"
  		},
  		{
  			"id": "06380190",
  			"id_hs92": "380190",
  			"name": "Graphite based products nes"
  		},
  		{
  			"id": "063802",
  			"id_hs92": "3802",
  			"name": "Activated Carbon"
  		},
  		{
  			"id": "06380210",
  			"id_hs92": "380210",
  			"name": "Activated carbon"
  		},
  		{
  			"id": "06380290",
  			"id_hs92": "380290",
  			"name": "Activated natural mineral products, animal black, nes"
  		},
  		{
  			"id": "063803",
  			"id_hs92": "3803",
  			"name": "Tall Oil"
  		},
  		{
  			"id": "06380300",
  			"id_hs92": "380300",
  			"name": "Tall oil, whether or not refined"
  		},
  		{
  			"id": "063804",
  			"id_hs92": "3804",
  			"name": "Wood Pulp Lyes"
  		},
  		{
  			"id": "06380400",
  			"id_hs92": "380400",
  			"name": "Residual lyes from the manufacture of wood pulp"
  		},
  		{
  			"id": "063805",
  			"id_hs92": "3805",
  			"name": "Turpentine"
  		},
  		{
  			"id": "06380510",
  			"id_hs92": "380510",
  			"name": "Gum, wood or sulphate turpentine oils"
  		},
  		{
  			"id": "06380520",
  			"id_hs92": "380520",
  			"name": "Pine oil"
  		},
  		{
  			"id": "06380590",
  			"id_hs92": "380590",
  			"name": "Terpenic oils nes, crude dipentene, paracymene"
  		},
  		{
  			"id": "063806",
  			"id_hs92": "3806",
  			"name": "Rosin"
  		},
  		{
  			"id": "06380610",
  			"id_hs92": "380610",
  			"name": "Rosin and resin acids"
  		},
  		{
  			"id": "06380620",
  			"id_hs92": "380620",
  			"name": "Rosin salts or resin acid salts"
  		},
  		{
  			"id": "06380630",
  			"id_hs92": "380630",
  			"name": "Ester gums"
  		},
  		{
  			"id": "06380690",
  			"id_hs92": "380690",
  			"name": "Resin acids and derivs nes, rosin derivs nes"
  		},
  		{
  			"id": "063807",
  			"id_hs92": "3807",
  			"name": "Wood Tar, Oils and Pitch"
  		},
  		{
  			"id": "06380700",
  			"id_hs92": "380700",
  			"name": "Wood tar, tar oils, creosote, naphtha, veg. pitches"
  		},
  		{
  			"id": "063808",
  			"id_hs92": "3808",
  			"name": "Pesticides"
  		},
  		{
  			"id": "06380810",
  			"id_hs92": "380810",
  			"name": "Insecticides, packaged for retail sale"
  		},
  		{
  			"id": "06380820",
  			"id_hs92": "380820",
  			"name": "Fungicides, packaged for retail sale"
  		},
  		{
  			"id": "06380830",
  			"id_hs92": "380830",
  			"name": "Herbicides, sprouting and growth regulators"
  		},
  		{
  			"id": "06380840",
  			"id_hs92": "380840",
  			"name": "Disinfectants, packaged for retail sale"
  		},
  		{
  			"id": "06380890",
  			"id_hs92": "380890",
  			"name": "Pesticides, rodenticides, nes, for retail sale"
  		},
  		{
  			"id": "063809",
  			"id_hs92": "3809",
  			"name": "Dyeing Finishing Agents"
  		},
  		{
  			"id": "06380910",
  			"id_hs92": "380910",
  			"name": "Finishing agents & dye carriers, amylaceous"
  		},
  		{
  			"id": "06380991",
  			"id_hs92": "380991",
  			"name": "Finishing agents, dye carriers, dressing, mordants ne"
  		},
  		{
  			"id": "06380992",
  			"id_hs92": "380992",
  			"name": "Finishing agents & dye carriers - paper industry"
  		},
  		{
  			"id": "06380993",
  			"id_hs92": "380993",
  			"name": "Other finishing agents of a kind used in the leather or like industries"
  		},
  		{
  			"id": "06380999",
  			"id_hs92": "380999",
  			"name": "Finishing agents & dye carriers - other industries"
  		},
  		{
  			"id": "063810",
  			"id_hs92": "3810",
  			"name": "Metal Pickling Preparations"
  		},
  		{
  			"id": "06381010",
  			"id_hs92": "381010",
  			"name": "Metal pickling preps, solder and brazing flux, etc."
  		},
  		{
  			"id": "06381090",
  			"id_hs92": "381090",
  			"name": "Electro-weld rod cores, coatings, etc."
  		},
  		{
  			"id": "063811",
  			"id_hs92": "3811",
  			"name": "Antiknock"
  		},
  		{
  			"id": "06381111",
  			"id_hs92": "381111",
  			"name": "Anti-knock preparations based on lead compounds"
  		},
  		{
  			"id": "06381119",
  			"id_hs92": "381119",
  			"name": "Anti-knock preparations, except lead compounds"
  		},
  		{
  			"id": "06381121",
  			"id_hs92": "381121",
  			"name": "Lubricating oil additives with petroleum, bitumen oil"
  		},
  		{
  			"id": "06381129",
  			"id_hs92": "381129",
  			"name": "Lubricating oil additives, no petroleum, bitumen oils"
  		},
  		{
  			"id": "06381190",
  			"id_hs92": "381190",
  			"name": "Oil additives nes, oxidation, corrosion, gum inhibito"
  		},
  		{
  			"id": "063812",
  			"id_hs92": "3812",
  			"name": "Prepared Rubber Accelerators"
  		},
  		{
  			"id": "06381210",
  			"id_hs92": "381210",
  			"name": "Prepared rubber accelerators"
  		},
  		{
  			"id": "06381220",
  			"id_hs92": "381220",
  			"name": "Compound plasticisers for rubber or plastic, nes"
  		},
  		{
  			"id": "06381230",
  			"id_hs92": "381230",
  			"name": "Anti-oxidisers and stabilizers for rubber or plastics"
  		},
  		{
  			"id": "063813",
  			"id_hs92": "3813",
  			"name": "Fire Extinguishers Preparations"
  		},
  		{
  			"id": "06381300",
  			"id_hs92": "381300",
  			"name": "Preparations and charges for fire-extinguishers"
  		},
  		{
  			"id": "063814",
  			"id_hs92": "3814",
  			"name": "Organic Composite Solvents"
  		},
  		{
  			"id": "06381400",
  			"id_hs92": "381400",
  			"name": "Organic composite solvents, paint, varnish remover et"
  		},
  		{
  			"id": "063815",
  			"id_hs92": "3815",
  			"name": "Reaction and Catalytic Products"
  		},
  		{
  			"id": "06381511",
  			"id_hs92": "381511",
  			"name": "Supported catalysts, nickel based"
  		},
  		{
  			"id": "06381512",
  			"id_hs92": "381512",
  			"name": "Supported catalysts, precious metal based"
  		},
  		{
  			"id": "06381519",
  			"id_hs92": "381519",
  			"name": "Supported catalysts, except nickel or precious metal"
  		},
  		{
  			"id": "06381590",
  			"id_hs92": "381590",
  			"name": "Reaction initiators, accelerators, catalysts, nes"
  		},
  		{
  			"id": "063816",
  			"id_hs92": "3816",
  			"name": "Refractory Cements"
  		},
  		{
  			"id": "06381600",
  			"id_hs92": "381600",
  			"name": "Refractory cements, mortars, concretes except graphit"
  		},
  		{
  			"id": "063817",
  			"id_hs92": "3817",
  			"name": "Alkylbenzenes and Alkylnaphthalenes"
  		},
  		{
  			"id": "06381710",
  			"id_hs92": "381710",
  			"name": "Mixed alkylbenzenes, nes"
  		},
  		{
  			"id": "06381720",
  			"id_hs92": "381720",
  			"name": "Mixed alkylnaphthalenes, nes"
  		},
  		{
  			"id": "063818",
  			"id_hs92": "3818",
  			"name": "Disc Chemicals for Electronics"
  		},
  		{
  			"id": "06381800",
  			"id_hs92": "381800",
  			"name": "Chemical element/compound wafers doped for electronic"
  		},
  		{
  			"id": "063819",
  			"id_hs92": "3819",
  			"name": "Hydraulic Brake Fluid"
  		},
  		{
  			"id": "06381900",
  			"id_hs92": "381900",
  			"name": "Hydraulic brake, transmission fluid <70% petroleum oi"
  		},
  		{
  			"id": "063820",
  			"id_hs92": "3820",
  			"name": "Antifreeze"
  		},
  		{
  			"id": "06382000",
  			"id_hs92": "382000",
  			"name": "Anti-freezing preps and prepared de-icing fluids"
  		},
  		{
  			"id": "063821",
  			"id_hs92": "3821",
  			"name": "Micro-Organism Culture Preparations"
  		},
  		{
  			"id": "06382100",
  			"id_hs92": "382100",
  			"name": "Prepared culture media for developing micro-organisms"
  		},
  		{
  			"id": "063822",
  			"id_hs92": "3822",
  			"name": "Laboratory Reagents"
  		},
  		{
  			"id": "06382200",
  			"id_hs92": "382200",
  			"name": "Composite diagnostic or laboratory reagents, nes"
  		},
  		{
  			"id": "063823",
  			"id_hs92": "3823",
  			"name": "Industrial Fatty Acids, Oils and Alcohols"
  		},
  		{
  			"id": "06382310",
  			"id_hs92": "382310",
  			"name": "Prepared binders for foundry moulds or cores"
  		},
  		{
  			"id": "06382320",
  			"id_hs92": "382320",
  			"name": "Naphthenic acids, water-insoluble salts & esters"
  		},
  		{
  			"id": "06382330",
  			"id_hs92": "382330",
  			"name": "Non-agglomerated metal carbides"
  		},
  		{
  			"id": "06382340",
  			"id_hs92": "382340",
  			"name": "Prepared additives for cements, mortars or concretes"
  		},
  		{
  			"id": "06382350",
  			"id_hs92": "382350",
  			"name": "Non-refractory mortars and concretes"
  		},
  		{
  			"id": "06382360",
  			"id_hs92": "382360",
  			"name": "Sorbitol except D-glucitol"
  		},
  		{
  			"id": "06382390",
  			"id_hs92": "382390",
  			"name": "Chemical industry products, preparations, mixtures ne"
  		},
  		{
  			"id": "07",
  			"id_hs92": null,
  			"name": "Plastics and Rubbers"
  		},
  		{
  			"id": "073901",
  			"id_hs92": "3901",
  			"name": "Ethylene Polymers"
  		},
  		{
  			"id": "07390110",
  			"id_hs92": "390110",
  			"name": "Polyethylene - specific gravity <0.94 in primary form"
  		},
  		{
  			"id": "07390120",
  			"id_hs92": "390120",
  			"name": "Polyethylene - specific gravity >0.94 in primary form"
  		},
  		{
  			"id": "07390130",
  			"id_hs92": "390130",
  			"name": "Ethylene-vinyl acetate copolymers in primary forms"
  		},
  		{
  			"id": "07390190",
  			"id_hs92": "390190",
  			"name": "Polymers of ethylene nes, in primary forms"
  		},
  		{
  			"id": "073902",
  			"id_hs92": "3902",
  			"name": "Propylene Polymers"
  		},
  		{
  			"id": "07390210",
  			"id_hs92": "390210",
  			"name": "Polypropylene in primary forms"
  		},
  		{
  			"id": "07390220",
  			"id_hs92": "390220",
  			"name": "Polyisobutylene in primary forms"
  		},
  		{
  			"id": "07390230",
  			"id_hs92": "390230",
  			"name": "Propylene copolymers in primary forms"
  		},
  		{
  			"id": "07390290",
  			"id_hs92": "390290",
  			"name": "Polymers of propylene, olefins nes in primary forms"
  		},
  		{
  			"id": "073903",
  			"id_hs92": "3903",
  			"name": "Styrene Polymers"
  		},
  		{
  			"id": "07390311",
  			"id_hs92": "390311",
  			"name": "Polystyrene, expansible in primary forms"
  		},
  		{
  			"id": "07390319",
  			"id_hs92": "390319",
  			"name": "Polystyrene, except expansible in primary forms"
  		},
  		{
  			"id": "07390320",
  			"id_hs92": "390320",
  			"name": "Styrene-acrylonitrile (SAN) copolymers, primary forms"
  		},
  		{
  			"id": "07390330",
  			"id_hs92": "390330",
  			"name": "Acrylonitrile-butadiene-styrene (ABS) copolymers"
  		},
  		{
  			"id": "07390390",
  			"id_hs92": "390390",
  			"name": "Polymers of styrene except SAN or ABS in primary form"
  		},
  		{
  			"id": "073904",
  			"id_hs92": "3904",
  			"name": "Vinyl Chloride Polymers"
  		},
  		{
  			"id": "07390410",
  			"id_hs92": "390410",
  			"name": "Polyvinyl chloride in primary forms"
  		},
  		{
  			"id": "07390421",
  			"id_hs92": "390421",
  			"name": "Polyvinyl chloride nes, not plasticised, primary form"
  		},
  		{
  			"id": "07390422",
  			"id_hs92": "390422",
  			"name": "Polyvinyl chloride nes, plasticised in primary forms"
  		},
  		{
  			"id": "07390430",
  			"id_hs92": "390430",
  			"name": "Vinyl chloride-vinyl acetate copolymers, primary form"
  		},
  		{
  			"id": "07390440",
  			"id_hs92": "390440",
  			"name": "Vinyl chloride copolymers nes in primary forms"
  		},
  		{
  			"id": "07390450",
  			"id_hs92": "390450",
  			"name": "Vinylidene chloride polymers in primary forms"
  		},
  		{
  			"id": "07390461",
  			"id_hs92": "390461",
  			"name": "Polytetrafluoroethylene in primary forms"
  		},
  		{
  			"id": "07390469",
  			"id_hs92": "390469",
  			"name": "Fluoro-polymers nes in primary forms"
  		},
  		{
  			"id": "07390490",
  			"id_hs92": "390490",
  			"name": "Polymers of vinyl chloride & halogenated olefins nes"
  		},
  		{
  			"id": "073905",
  			"id_hs92": "3905",
  			"name": "Other Vinyl Polymers"
  		},
  		{
  			"id": "07390511",
  			"id_hs92": "390511",
  			"name": "Polyvinyl acetate, in aqueous dispersion, primary for"
  		},
  		{
  			"id": "07390519",
  			"id_hs92": "390519",
  			"name": "Polyvinyl acetate except aqueous dispersion, primary"
  		},
  		{
  			"id": "07390520",
  			"id_hs92": "390520",
  			"name": "Polyvinyl alcohols in primary form"
  		},
  		{
  			"id": "07390590",
  			"id_hs92": "390590",
  			"name": "Vinyl polymers, halogenated olefins, primary form, ne"
  		},
  		{
  			"id": "073906",
  			"id_hs92": "3906",
  			"name": "Acrylic Polymers"
  		},
  		{
  			"id": "07390610",
  			"id_hs92": "390610",
  			"name": "Polymethyl methacrylate, in primary forms"
  		},
  		{
  			"id": "07390690",
  			"id_hs92": "390690",
  			"name": "Acrylic polymers nes, in primary forms"
  		},
  		{
  			"id": "073907",
  			"id_hs92": "3907",
  			"name": "Polyacetals"
  		},
  		{
  			"id": "07390710",
  			"id_hs92": "390710",
  			"name": "Polyacetals, in primary forms"
  		},
  		{
  			"id": "07390720",
  			"id_hs92": "390720",
  			"name": "Polyethers nes, in primary forms"
  		},
  		{
  			"id": "07390730",
  			"id_hs92": "390730",
  			"name": "Epoxide resins, in primary forms"
  		},
  		{
  			"id": "07390740",
  			"id_hs92": "390740",
  			"name": "Polycarbonates, in primary forms"
  		},
  		{
  			"id": "07390750",
  			"id_hs92": "390750",
  			"name": "Alkyd resins, in primary forms"
  		},
  		{
  			"id": "07390760",
  			"id_hs92": "390760",
  			"name": "Polyethylene terephthalate, in primary forms"
  		},
  		{
  			"id": "07390791",
  			"id_hs92": "390791",
  			"name": "Polyesters nes, unsaturated, in primary forms"
  		},
  		{
  			"id": "07390799",
  			"id_hs92": "390799",
  			"name": "Polyesters nes, in primary forms"
  		},
  		{
  			"id": "073908",
  			"id_hs92": "3908",
  			"name": "Polyamides"
  		},
  		{
  			"id": "07390810",
  			"id_hs92": "390810",
  			"name": "Polyamide-6, -11, -12, -6,6, -6,9, -6,10 or -6,12"
  		},
  		{
  			"id": "07390890",
  			"id_hs92": "390890",
  			"name": "Polyamides nes, in primary forms"
  		},
  		{
  			"id": "073909",
  			"id_hs92": "3909",
  			"name": "Amino-resins"
  		},
  		{
  			"id": "07390910",
  			"id_hs92": "390910",
  			"name": "Urea resins, thiourea resins, in primary forms"
  		},
  		{
  			"id": "07390920",
  			"id_hs92": "390920",
  			"name": "Melamine resins, in primary forms"
  		},
  		{
  			"id": "07390930",
  			"id_hs92": "390930",
  			"name": "Amino-resins nes, in primary forms"
  		},
  		{
  			"id": "07390940",
  			"id_hs92": "390940",
  			"name": "Phenolic resins, in primary forms"
  		},
  		{
  			"id": "07390950",
  			"id_hs92": "390950",
  			"name": "Polyurethanes in primary forms"
  		},
  		{
  			"id": "073910",
  			"id_hs92": "3910",
  			"name": "Silicone"
  		},
  		{
  			"id": "07391000",
  			"id_hs92": "391000",
  			"name": "Silicones in primary forms"
  		},
  		{
  			"id": "073911",
  			"id_hs92": "3911",
  			"name": "Petroleum Resins"
  		},
  		{
  			"id": "07391110",
  			"id_hs92": "391110",
  			"name": "Petroleum resins, coumarone, indene, polyterpenes"
  		},
  		{
  			"id": "07391190",
  			"id_hs92": "391190",
  			"name": "Polysulphides, polysulphones etc, nes in primary form"
  		},
  		{
  			"id": "073912",
  			"id_hs92": "3912",
  			"name": "Cellulose"
  		},
  		{
  			"id": "07391211",
  			"id_hs92": "391211",
  			"name": "Cellulose acetates, non-plasticised, in primary forms"
  		},
  		{
  			"id": "07391212",
  			"id_hs92": "391212",
  			"name": "Cellulose acetates, plasticised, in primary forms"
  		},
  		{
  			"id": "07391220",
  			"id_hs92": "391220",
  			"name": "Cellulose nitrates, collodions, in primary forms"
  		},
  		{
  			"id": "07391231",
  			"id_hs92": "391231",
  			"name": "Carboxymethylcellulose, salts, in primary forms"
  		},
  		{
  			"id": "07391239",
  			"id_hs92": "391239",
  			"name": "Cellulose ethers nes, in primary forms"
  		},
  		{
  			"id": "07391290",
  			"id_hs92": "391290",
  			"name": "Cellulose derivatives nes, in primary forms"
  		},
  		{
  			"id": "073913",
  			"id_hs92": "3913",
  			"name": "Natural Polymers"
  		},
  		{
  			"id": "07391310",
  			"id_hs92": "391310",
  			"name": "Alginic acid, its salts & esters, in primary forms"
  		},
  		{
  			"id": "07391390",
  			"id_hs92": "391390",
  			"name": "Polymers, natural or modified nes in primary forms ne"
  		},
  		{
  			"id": "073914",
  			"id_hs92": "3914",
  			"name": "Polymer Ion-Exchangers"
  		},
  		{
  			"id": "07391400",
  			"id_hs92": "391400",
  			"name": "Ion exchangers based on polymers in primary forms"
  		},
  		{
  			"id": "073915",
  			"id_hs92": "3915",
  			"name": "Scrap Plastic"
  		},
  		{
  			"id": "07391510",
  			"id_hs92": "391510",
  			"name": "Polyethylene waste or scrap"
  		},
  		{
  			"id": "07391520",
  			"id_hs92": "391520",
  			"name": "Polystyrene waste or scrap"
  		},
  		{
  			"id": "07391530",
  			"id_hs92": "391530",
  			"name": "Polyvinyl chloride waste or scrap"
  		},
  		{
  			"id": "07391590",
  			"id_hs92": "391590",
  			"name": "Plastics waste or scrap nes"
  		},
  		{
  			"id": "073916",
  			"id_hs92": "3916",
  			"name": "Monofilament"
  		},
  		{
  			"id": "07391610",
  			"id_hs92": "391610",
  			"name": "Monofilament(>1mm), rods, etc, ethylene polymers"
  		},
  		{
  			"id": "07391620",
  			"id_hs92": "391620",
  			"name": "Monofilament(>1mm), rods, etc, vinyl-chloride polymer"
  		},
  		{
  			"id": "07391690",
  			"id_hs92": "391690",
  			"name": "Monofilament(>1mm), rods,not ethylene or vinyl polyme"
  		},
  		{
  			"id": "073917",
  			"id_hs92": "3917",
  			"name": "Plastic Pipes"
  		},
  		{
  			"id": "07391710",
  			"id_hs92": "391710",
  			"name": "Sausage casings of hardened protein, cellulose"
  		},
  		{
  			"id": "07391721",
  			"id_hs92": "391721",
  			"name": "Tube, pipe or hose, rigid, of polyethylene"
  		},
  		{
  			"id": "07391722",
  			"id_hs92": "391722",
  			"name": "Tube, pipe or hose, rigid, of polypropylene"
  		},
  		{
  			"id": "07391723",
  			"id_hs92": "391723",
  			"name": "Tube, pipe or hose, rigid, of polyvinyl chloride"
  		},
  		{
  			"id": "07391729",
  			"id_hs92": "391729",
  			"name": "Plastic tube, pipe or hose, rigid, nes"
  		},
  		{
  			"id": "07391731",
  			"id_hs92": "391731",
  			"name": "Plastic tube, pipe or hose, flexible, mbp > 27.6 MPa"
  		},
  		{
  			"id": "07391732",
  			"id_hs92": "391732",
  			"name": "Flexible plastic tube/hose not reinforced, no fitting"
  		},
  		{
  			"id": "07391733",
  			"id_hs92": "391733",
  			"name": "Flexible plastic tube/hose with fitting not reinforce"
  		},
  		{
  			"id": "07391739",
  			"id_hs92": "391739",
  			"name": "Plastic tube, pipe or hose, flexible, nes"
  		},
  		{
  			"id": "07391740",
  			"id_hs92": "391740",
  			"name": "Fittings for plastic tube, pipe or hose"
  		},
  		{
  			"id": "073918",
  			"id_hs92": "3918",
  			"name": "Plastic Floor Coverings"
  		},
  		{
  			"id": "07391810",
  			"id_hs92": "391810",
  			"name": "Floor, wall, ceiling cover, roll, tile, vinyl chlorid"
  		},
  		{
  			"id": "07391890",
  			"id_hs92": "391890",
  			"name": "Floor/wall/ceiling cover, roll/tile not vinyl chlorid"
  		},
  		{
  			"id": "073919",
  			"id_hs92": "3919",
  			"name": "Self-adhesive Plastics"
  		},
  		{
  			"id": "07391910",
  			"id_hs92": "391910",
  			"name": "Self-adhesive plastic, rolls <20cm wide"
  		},
  		{
  			"id": "07391990",
  			"id_hs92": "391990",
  			"name": "Self-adhesive plates, sheets, film, plastic, w >20 cm"
  		},
  		{
  			"id": "073920",
  			"id_hs92": "3920",
  			"name": "Raw Plastic Sheeting"
  		},
  		{
  			"id": "07392010",
  			"id_hs92": "392010",
  			"name": "Sheet/film not cellular/reinf polymers of ethylene"
  		},
  		{
  			"id": "07392020",
  			"id_hs92": "392020",
  			"name": "Sheet/film not cellular/reinf polymers of propylene"
  		},
  		{
  			"id": "07392030",
  			"id_hs92": "392030",
  			"name": "Sheet/film not cellular/reinf polymers of styrene"
  		},
  		{
  			"id": "07392041",
  			"id_hs92": "392041",
  			"name": "Sheet/film not cellular/reinf rigid vinyl polymer"
  		},
  		{
  			"id": "07392042",
  			"id_hs92": "392042",
  			"name": "Sheet/film not cellular/reinf flexible vinyl polymer"
  		},
  		{
  			"id": "07392051",
  			"id_hs92": "392051",
  			"name": "Sheet/film not cellular/reinf polymethyl methacrylate"
  		},
  		{
  			"id": "07392059",
  			"id_hs92": "392059",
  			"name": "Sheet/film not cellular/reinf acrylic polymers nes"
  		},
  		{
  			"id": "07392061",
  			"id_hs92": "392061",
  			"name": "Sheet/film not cellular/reinf polycarbonates"
  		},
  		{
  			"id": "07392062",
  			"id_hs92": "392062",
  			"name": "Sheet/film not cellular/reinf polyethylene terephthal"
  		},
  		{
  			"id": "07392063",
  			"id_hs92": "392063",
  			"name": "Sheet/film not cellular/reinf unsaturated polyesters"
  		},
  		{
  			"id": "07392069",
  			"id_hs92": "392069",
  			"name": "Sheet/film not cellular/reinf polyesters nes"
  		},
  		{
  			"id": "07392071",
  			"id_hs92": "392071",
  			"name": "Sheet/film not cellular/reinf regenerated cellulose"
  		},
  		{
  			"id": "07392072",
  			"id_hs92": "392072",
  			"name": "Sheet/film not cellular/reinf vulcanised rubber"
  		},
  		{
  			"id": "07392073",
  			"id_hs92": "392073",
  			"name": "Sheet/film not cellular/reinf cellulose acetate"
  		},
  		{
  			"id": "07392079",
  			"id_hs92": "392079",
  			"name": "Sheet/film not cellular/reinf cellulose derivs nes"
  		},
  		{
  			"id": "07392091",
  			"id_hs92": "392091",
  			"name": "Sheet/film not cellular/reinf polyvinyl butyral"
  		},
  		{
  			"id": "07392092",
  			"id_hs92": "392092",
  			"name": "Sheet/film not cellular/reinf polyamides"
  		},
  		{
  			"id": "07392093",
  			"id_hs92": "392093",
  			"name": "Sheet/film not cellular/reinf amino-resins"
  		},
  		{
  			"id": "07392094",
  			"id_hs92": "392094",
  			"name": "Sheet/film not cellular/reinf phenolic resins"
  		},
  		{
  			"id": "07392099",
  			"id_hs92": "392099",
  			"name": "Sheet/film not cellular/reinf plastics nes"
  		},
  		{
  			"id": "073921",
  			"id_hs92": "3921",
  			"name": "Other Plastic Sheetings"
  		},
  		{
  			"id": "07392111",
  			"id_hs92": "392111",
  			"name": "Sheet etc, cellular of polymers of styrene"
  		},
  		{
  			"id": "07392112",
  			"id_hs92": "392112",
  			"name": "Sheet etc, cellular of polymers of vinyl chloride"
  		},
  		{
  			"id": "07392113",
  			"id_hs92": "392113",
  			"name": "Sheet etc, cellular of polyurethane"
  		},
  		{
  			"id": "07392114",
  			"id_hs92": "392114",
  			"name": "Sheet etc, cellular of regenerated cellulose"
  		},
  		{
  			"id": "07392119",
  			"id_hs92": "392119",
  			"name": "Sheet etc, cellular of plastics nes"
  		},
  		{
  			"id": "07392190",
  			"id_hs92": "392190",
  			"name": "Plastic sheet, film, foil or strip, nes"
  		},
  		{
  			"id": "073922",
  			"id_hs92": "3922",
  			"name": "Plastic Wash Basins"
  		},
  		{
  			"id": "07392210",
  			"id_hs92": "392210",
  			"name": "Baths, shower-baths and wash basins, of plastics"
  		},
  		{
  			"id": "07392220",
  			"id_hs92": "392220",
  			"name": "Lavatory seats and covers of plastics"
  		},
  		{
  			"id": "07392290",
  			"id_hs92": "392290",
  			"name": "Bathroom wares nes, of plastics"
  		},
  		{
  			"id": "073923",
  			"id_hs92": "3923",
  			"name": "Plastic Lids"
  		},
  		{
  			"id": "07392310",
  			"id_hs92": "392310",
  			"name": "Boxes, cases, crates etc. of plastic"
  		},
  		{
  			"id": "07392321",
  			"id_hs92": "392321",
  			"name": "Sacks & bags (including cones) of polymers of ethylen"
  		},
  		{
  			"id": "07392329",
  			"id_hs92": "392329",
  			"name": "Plastic sacks, bags, cone except of ethylene polymers"
  		},
  		{
  			"id": "07392330",
  			"id_hs92": "392330",
  			"name": "Plastic carboys, bottles and flasks, etc"
  		},
  		{
  			"id": "07392340",
  			"id_hs92": "392340",
  			"name": "Plastic spools, cops, bobbins and similar supports"
  		},
  		{
  			"id": "07392350",
  			"id_hs92": "392350",
  			"name": "Plastic stoppers, lids, caps and other closures"
  		},
  		{
  			"id": "07392390",
  			"id_hs92": "392390",
  			"name": "Plastic articles for goods conveyance or packing nes"
  		},
  		{
  			"id": "073924",
  			"id_hs92": "3924",
  			"name": "Plastic Housewares"
  		},
  		{
  			"id": "07392410",
  			"id_hs92": "392410",
  			"name": "Plastic table and kitchen ware"
  		},
  		{
  			"id": "07392490",
  			"id_hs92": "392490",
  			"name": "Plastic household, toilet articles not table, kitchen"
  		},
  		{
  			"id": "073925",
  			"id_hs92": "3925",
  			"name": "Plastic Building Materials"
  		},
  		{
  			"id": "07392510",
  			"id_hs92": "392510",
  			"name": "Plastic reservoirs, tanks, vats, etc, capacity <300l"
  		},
  		{
  			"id": "07392520",
  			"id_hs92": "392520",
  			"name": "Plastic doors and windows and frames thereof"
  		},
  		{
  			"id": "07392530",
  			"id_hs92": "392530",
  			"name": "Plastic shutters and blinds (including Venetian)"
  		},
  		{
  			"id": "07392590",
  			"id_hs92": "392590",
  			"name": "Plastic builders' ware nes"
  		},
  		{
  			"id": "073926",
  			"id_hs92": "3926",
  			"name": "Other Plastic Products"
  		},
  		{
  			"id": "07392610",
  			"id_hs92": "392610",
  			"name": "Plastic office and school articles and supplies"
  		},
  		{
  			"id": "07392620",
  			"id_hs92": "392620",
  			"name": "Plastic apparel and clothing accessories"
  		},
  		{
  			"id": "07392630",
  			"id_hs92": "392630",
  			"name": "Plastic fittings for furniture, coachwork, etc"
  		},
  		{
  			"id": "07392640",
  			"id_hs92": "392640",
  			"name": "Plastic statuettes and other ornamental articles"
  		},
  		{
  			"id": "07392690",
  			"id_hs92": "392690",
  			"name": "Plastic articles nes"
  		},
  		{
  			"id": "074001",
  			"id_hs92": "4001",
  			"name": "Rubber"
  		},
  		{
  			"id": "07400110",
  			"id_hs92": "400110",
  			"name": "Natural rubber latex, including prevulcanised"
  		},
  		{
  			"id": "07400121",
  			"id_hs92": "400121",
  			"name": "Natural rubber in smoked sheets"
  		},
  		{
  			"id": "07400122",
  			"id_hs92": "400122",
  			"name": "Technically specified natural rubber (TSNR)"
  		},
  		{
  			"id": "07400129",
  			"id_hs92": "400129",
  			"name": "Natural rubber in other forms"
  		},
  		{
  			"id": "07400130",
  			"id_hs92": "400130",
  			"name": "Balata, gutta-percha, guayule, chicle and similar gum"
  		},
  		{
  			"id": "074002",
  			"id_hs92": "4002",
  			"name": "Synthetic Rubber"
  		},
  		{
  			"id": "07400211",
  			"id_hs92": "400211",
  			"name": "Styrene-butadiene rubber (SBR/XSBR) latex"
  		},
  		{
  			"id": "07400219",
  			"id_hs92": "400219",
  			"name": "Styrene-butadiene rubber (SBR/XSBR) except latex"
  		},
  		{
  			"id": "07400220",
  			"id_hs92": "400220",
  			"name": "Butadiene rubber (BR)"
  		},
  		{
  			"id": "07400231",
  			"id_hs92": "400231",
  			"name": "Isobutene-isoprene (butyl) rubber (IIR)"
  		},
  		{
  			"id": "07400239",
  			"id_hs92": "400239",
  			"name": "Halo-isobutene-isoprene rubber (CIIR/BIIR)"
  		},
  		{
  			"id": "07400241",
  			"id_hs92": "400241",
  			"name": "Chloroprene (chlorobutadiene) rubber (CR) latex"
  		},
  		{
  			"id": "07400249",
  			"id_hs92": "400249",
  			"name": "Chloroprene (chlorobutadiene) rubber (CR) except late"
  		},
  		{
  			"id": "07400251",
  			"id_hs92": "400251",
  			"name": "Acrylonitrile-butadiene rubber (NBR), latex"
  		},
  		{
  			"id": "07400259",
  			"id_hs92": "400259",
  			"name": "Acrylonitrile-butadiene rubber (NBR) except as latex"
  		},
  		{
  			"id": "07400260",
  			"id_hs92": "400260",
  			"name": "Isoprene rubber (IR)"
  		},
  		{
  			"id": "07400270",
  			"id_hs92": "400270",
  			"name": "Ethylene-propylene-non-conj diene rubber (EPDM)"
  		},
  		{
  			"id": "07400280",
  			"id_hs92": "400280",
  			"name": "Mixtures of natural and synthetic rubbers"
  		},
  		{
  			"id": "07400291",
  			"id_hs92": "400291",
  			"name": "Synthetic rubber or factice latex from oils, nes"
  		},
  		{
  			"id": "07400299",
  			"id_hs92": "400299",
  			"name": "Synthetic rubber, factice except latex from oils, nes"
  		},
  		{
  			"id": "074003",
  			"id_hs92": "4003",
  			"name": "Reclaimed Rubber"
  		},
  		{
  			"id": "07400300",
  			"id_hs92": "400300",
  			"name": "Reclaimed rubber in primary forms or in sheets"
  		},
  		{
  			"id": "074004",
  			"id_hs92": "4004",
  			"name": "Scrap Rubber"
  		},
  		{
  			"id": "07400400",
  			"id_hs92": "400400",
  			"name": "Waste, parings and scrap (except hard rubber)"
  		},
  		{
  			"id": "074005",
  			"id_hs92": "4005",
  			"name": "Compounded Unvulcanised Rubber"
  		},
  		{
  			"id": "07400510",
  			"id_hs92": "400510",
  			"name": "Compounded (carbon black, silica) unvulcanised rubber"
  		},
  		{
  			"id": "07400520",
  			"id_hs92": "400520",
  			"name": "Rubber solutions, dispersions nes"
  		},
  		{
  			"id": "07400591",
  			"id_hs92": "400591",
  			"name": "Compounded unvulcanised rubber in plate, sheet, strip"
  		},
  		{
  			"id": "07400599",
  			"id_hs92": "400599",
  			"name": "Compounded unvulcanised rubber in primary forms nes"
  		},
  		{
  			"id": "074006",
  			"id_hs92": "4006",
  			"name": "Unvulcanised Rubber Products"
  		},
  		{
  			"id": "07400610",
  			"id_hs92": "400610",
  			"name": "Camel-back strips for retreading rubber tyres"
  		},
  		{
  			"id": "07400690",
  			"id_hs92": "400690",
  			"name": "Rubber unvulcanised as rods, tubes, profiles, etc"
  		},
  		{
  			"id": "074007",
  			"id_hs92": "4007",
  			"name": "Rubber Thread"
  		},
  		{
  			"id": "07400700",
  			"id_hs92": "400700",
  			"name": "Vulcanised rubber thread and cord"
  		},
  		{
  			"id": "074008",
  			"id_hs92": "4008",
  			"name": "Rubber Sheets"
  		},
  		{
  			"id": "07400811",
  			"id_hs92": "400811",
  			"name": "Plate, sheet, strip of vulcanised cellular rubber"
  		},
  		{
  			"id": "07400819",
  			"id_hs92": "400819",
  			"name": "Rod and profile shapes of vulcanised cellular rubber"
  		},
  		{
  			"id": "07400821",
  			"id_hs92": "400821",
  			"name": "Plate, sheet, strip of vulcanised non-cellular rubber"
  		},
  		{
  			"id": "07400829",
  			"id_hs92": "400829",
  			"name": "Rods, profile shapes of vulcanised non-cellular rubbe"
  		},
  		{
  			"id": "074009",
  			"id_hs92": "4009",
  			"name": "Rubber Pipes"
  		},
  		{
  			"id": "07400910",
  			"id_hs92": "400910",
  			"name": "Rubber tube, pipe or hose not reinforced, no fittings"
  		},
  		{
  			"id": "07400920",
  			"id_hs92": "400920",
  			"name": "Rubber tube, pipe, hose, metal reinforced, no fitting"
  		},
  		{
  			"id": "07400930",
  			"id_hs92": "400930",
  			"name": "Rubber tube, pipe, hose textile-reinforced no fitting"
  		},
  		{
  			"id": "07400940",
  			"id_hs92": "400940",
  			"name": "Rubber tube, pipe or hose, reinforced nes, no fitting"
  		},
  		{
  			"id": "07400950",
  			"id_hs92": "400950",
  			"name": "Rubber tube, pipe or hose with fittings"
  		},
  		{
  			"id": "074010",
  			"id_hs92": "4010",
  			"name": "Rubber Belting"
  		},
  		{
  			"id": "07401010",
  			"id_hs92": "401010",
  			"name": "Transmission belts etc, rubber, trapezoidal"
  		},
  		{
  			"id": "07401091",
  			"id_hs92": "401091",
  			"name": "Conveyor belts and belting, rubber, <20cm wide"
  		},
  		{
  			"id": "07401099",
  			"id_hs92": "401099",
  			"name": "Conveyor, transmission belts and belting, rubber nes"
  		},
  		{
  			"id": "074011",
  			"id_hs92": "4011",
  			"name": "Rubber Tires"
  		},
  		{
  			"id": "07401110",
  			"id_hs92": "401110",
  			"name": "Pneumatic tyres new of rubber for motor cars"
  		},
  		{
  			"id": "07401120",
  			"id_hs92": "401120",
  			"name": "Pneumatic tyres new of rubber for buses or lorries"
  		},
  		{
  			"id": "07401130",
  			"id_hs92": "401130",
  			"name": "Pneumatic tyres new of rubber for aircraft"
  		},
  		{
  			"id": "07401140",
  			"id_hs92": "401140",
  			"name": "Pneumatic tyres new of rubber for motorcycles"
  		},
  		{
  			"id": "07401150",
  			"id_hs92": "401150",
  			"name": "Pneumatic tyres new of rubber for bicycles"
  		},
  		{
  			"id": "07401191",
  			"id_hs92": "401191",
  			"name": "Pneumatic tyres new of rubber nes, herring-bone tread"
  		},
  		{
  			"id": "07401199",
  			"id_hs92": "401199",
  			"name": "Pneumatic tyres new of rubber nes"
  		},
  		{
  			"id": "074012",
  			"id_hs92": "4012",
  			"name": "Used Rubber Tires"
  		},
  		{
  			"id": "07401210",
  			"id_hs92": "401210",
  			"name": "Retreaded tyres"
  		},
  		{
  			"id": "07401220",
  			"id_hs92": "401220",
  			"name": "Pneumatic tyres used"
  		},
  		{
  			"id": "07401290",
  			"id_hs92": "401290",
  			"name": "Solid or cushioned tyres, interchangeable treads"
  		},
  		{
  			"id": "074013",
  			"id_hs92": "4013",
  			"name": "Rubber Inner Tubes"
  		},
  		{
  			"id": "07401310",
  			"id_hs92": "401310",
  			"name": "Inner tubes of rubber for motor vehicles"
  		},
  		{
  			"id": "07401320",
  			"id_hs92": "401320",
  			"name": "Inner tubes of rubber for bicycles"
  		},
  		{
  			"id": "07401390",
  			"id_hs92": "401390",
  			"name": "Inner tubes of rubber except bicycle or motor vehicle"
  		},
  		{
  			"id": "074014",
  			"id_hs92": "4014",
  			"name": "Pharmaceutical Rubber Products"
  		},
  		{
  			"id": "07401410",
  			"id_hs92": "401410",
  			"name": "Sheath contraceptives"
  		},
  		{
  			"id": "07401490",
  			"id_hs92": "401490",
  			"name": "Rubber hygienic, pharmacy items except contraceptives"
  		},
  		{
  			"id": "074015",
  			"id_hs92": "4015",
  			"name": "Rubber Apparel"
  		},
  		{
  			"id": "07401511",
  			"id_hs92": "401511",
  			"name": "Rubber surgical gloves"
  		},
  		{
  			"id": "07401519",
  			"id_hs92": "401519",
  			"name": "Gloves other than surgical, of rubber"
  		},
  		{
  			"id": "07401590",
  			"id_hs92": "401590",
  			"name": "Clothing and accessories except gloves, of rubber"
  		},
  		{
  			"id": "074016",
  			"id_hs92": "4016",
  			"name": "Other Rubber Products"
  		},
  		{
  			"id": "07401610",
  			"id_hs92": "401610",
  			"name": "Articles of cellular rubber"
  		},
  		{
  			"id": "07401691",
  			"id_hs92": "401691",
  			"name": "Floor coverings, mats of rubber except cellular, hard"
  		},
  		{
  			"id": "07401692",
  			"id_hs92": "401692",
  			"name": "Erasers (vulcanised rubber)"
  		},
  		{
  			"id": "07401693",
  			"id_hs92": "401693",
  			"name": "Gaskets, washers and other seals of vulcanised rubber"
  		},
  		{
  			"id": "07401694",
  			"id_hs92": "401694",
  			"name": "Boat and dock fenders, of vulcanised rubber"
  		},
  		{
  			"id": "07401695",
  			"id_hs92": "401695",
  			"name": "Rubber articles, inflatable nes, vulcanised rubber"
  		},
  		{
  			"id": "07401699",
  			"id_hs92": "401699",
  			"name": "Articles of vulcanised rubber nes, except hard rubber"
  		},
  		{
  			"id": "074017",
  			"id_hs92": "4017",
  			"name": "Hard Rubber"
  		},
  		{
  			"id": "07401700",
  			"id_hs92": "401700",
  			"name": "Hard rubber (eg ebonite) in all forms, articles,scrap"
  		},
  		{
  			"id": "08",
  			"id_hs92": null,
  			"name": "Animal Hides"
  		},
  		{
  			"id": "084101",
  			"id_hs92": "4101",
  			"name": "Equine and Bovine Hides"
  		},
  		{
  			"id": "08410110",
  			"id_hs92": "410110",
  			"name": "Bovine skins, whole, raw"
  		},
  		{
  			"id": "08410121",
  			"id_hs92": "410121",
  			"name": "Bovine hides, whole, fresh or wet-salted"
  		},
  		{
  			"id": "08410122",
  			"id_hs92": "410122",
  			"name": "Butts and bends, bovine, fresh or wet-salted"
  		},
  		{
  			"id": "08410129",
  			"id_hs92": "410129",
  			"name": "Hide sections, bovine, nes, fresh or wet-salted"
  		},
  		{
  			"id": "08410130",
  			"id_hs92": "410130",
  			"name": "Bovine hides, raw, nes"
  		},
  		{
  			"id": "08410140",
  			"id_hs92": "410140",
  			"name": "Equine hides and skins, raw"
  		},
  		{
  			"id": "084102",
  			"id_hs92": "4102",
  			"name": "Sheep Hides"
  		},
  		{
  			"id": "08410210",
  			"id_hs92": "410210",
  			"name": "Sheep or lamb skins, raw, wool on, except Persian etc"
  		},
  		{
  			"id": "08410221",
  			"id_hs92": "410221",
  			"name": "Sheep or lamb skins, pickled, without wool"
  		},
  		{
  			"id": "08410229",
  			"id_hs92": "410229",
  			"name": "Sheep or lamb skins, raw, except pickled, no wool"
  		},
  		{
  			"id": "084103",
  			"id_hs92": "4103",
  			"name": "Other Hides and Skins"
  		},
  		{
  			"id": "08410310",
  			"id_hs92": "410310",
  			"name": "Goat or kid hides and skins, raw, nes"
  		},
  		{
  			"id": "08410320",
  			"id_hs92": "410320",
  			"name": "Reptile skins, raw"
  		},
  		{
  			"id": "08410390",
  			"id_hs92": "410390",
  			"name": "Raw hide/skins except bovine/equine/sheep/goat/reptil"
  		},
  		{
  			"id": "084104",
  			"id_hs92": "4104",
  			"name": "Tanned Equine and Bovine Hides"
  		},
  		{
  			"id": "08410410",
  			"id_hs92": "410410",
  			"name": "Bovine skin leather, whole"
  		},
  		{
  			"id": "08410421",
  			"id_hs92": "410421",
  			"name": "Bovine leather, vegetable pre-tanned except whole ski"
  		},
  		{
  			"id": "08410422",
  			"id_hs92": "410422",
  			"name": "Bovine leather, otherwise pre-tanned except whole ski"
  		},
  		{
  			"id": "08410429",
  			"id_hs92": "410429",
  			"name": "Bovine and equine leather, tanned or retanned, nes"
  		},
  		{
  			"id": "08410431",
  			"id_hs92": "410431",
  			"name": "Bovine and equine leather, full or split grain, nes"
  		},
  		{
  			"id": "08410439",
  			"id_hs92": "410439",
  			"name": "Bovine and equine leather, nes"
  		},
  		{
  			"id": "084105",
  			"id_hs92": "4105",
  			"name": "Tanned Sheep Hides"
  		},
  		{
  			"id": "08410511",
  			"id_hs92": "410511",
  			"name": "Sheep or lamb skin leather, vegetable pre-tanned"
  		},
  		{
  			"id": "08410512",
  			"id_hs92": "410512",
  			"name": "Sheep or lamb skin leather, otherwise pre-tanned"
  		},
  		{
  			"id": "08410519",
  			"id_hs92": "410519",
  			"name": "Sheep or lamb skin leather, tanned or retanned, nes"
  		},
  		{
  			"id": "08410520",
  			"id_hs92": "410520",
  			"name": "Sheep or lamb skin leather, nes"
  		},
  		{
  			"id": "084106",
  			"id_hs92": "4106",
  			"name": "Tanned Goat Hides"
  		},
  		{
  			"id": "08410611",
  			"id_hs92": "410611",
  			"name": "Goat or kid skin leather, vegetable pre-tanned"
  		},
  		{
  			"id": "08410612",
  			"id_hs92": "410612",
  			"name": "Goat or kid skin leather, otherwise pre-tanned"
  		},
  		{
  			"id": "08410619",
  			"id_hs92": "410619",
  			"name": "Goat or kid skin leather, tanned or retanned, nes"
  		},
  		{
  			"id": "08410620",
  			"id_hs92": "410620",
  			"name": "Goat or kid skin leather, nes"
  		},
  		{
  			"id": "084107",
  			"id_hs92": "4107",
  			"name": "Leather of Other Animals"
  		},
  		{
  			"id": "08410710",
  			"id_hs92": "410710",
  			"name": "Swine leather"
  		},
  		{
  			"id": "08410721",
  			"id_hs92": "410721",
  			"name": "Reptile leather, vegetable pre-tanned"
  		},
  		{
  			"id": "08410729",
  			"id_hs92": "410729",
  			"name": "Reptile leather, other than vegetable pre-tanned"
  		},
  		{
  			"id": "08410790",
  			"id_hs92": "410790",
  			"name": "Leather, of animals nes"
  		},
  		{
  			"id": "084108",
  			"id_hs92": "4108",
  			"name": "Chamois Leather"
  		},
  		{
  			"id": "08410800",
  			"id_hs92": "410800",
  			"name": "Chamois (including combination chamois) leather"
  		},
  		{
  			"id": "084109",
  			"id_hs92": "4109",
  			"name": "Patent Leather"
  		},
  		{
  			"id": "08410900",
  			"id_hs92": "410900",
  			"name": "Patent leather, metallised leather"
  		},
  		{
  			"id": "084110",
  			"id_hs92": "4110",
  			"name": "Leather Waste"
  		},
  		{
  			"id": "08411000",
  			"id_hs92": "411000",
  			"name": "Parings and other waste of leather"
  		},
  		{
  			"id": "084111",
  			"id_hs92": "4111",
  			"name": "Leather Sheets"
  		},
  		{
  			"id": "08411100",
  			"id_hs92": "411100",
  			"name": "Composition leather, in slabs, sheets or strip"
  		},
  		{
  			"id": "084201",
  			"id_hs92": "4201",
  			"name": "Saddlery"
  		},
  		{
  			"id": "08420100",
  			"id_hs92": "420100",
  			"name": "Saddlery and harness, of any material"
  		},
  		{
  			"id": "084202",
  			"id_hs92": "4202",
  			"name": "Trunks and Cases"
  		},
  		{
  			"id": "08420211",
  			"id_hs92": "420211",
  			"name": "Trunks, suit-cases/etc, outer surface leather"
  		},
  		{
  			"id": "08420212",
  			"id_hs92": "420212",
  			"name": "Trunks, suit-cases, etc, outer surface plastic/textil"
  		},
  		{
  			"id": "08420219",
  			"id_hs92": "420219",
  			"name": "Trunks, suit-cases and similar containers, outer nes"
  		},
  		{
  			"id": "08420221",
  			"id_hs92": "420221",
  			"name": "Handbags with outer surface of leather"
  		},
  		{
  			"id": "08420222",
  			"id_hs92": "420222",
  			"name": "Handbags with outer surface plastics, textile materia"
  		},
  		{
  			"id": "08420229",
  			"id_hs92": "420229",
  			"name": "Handbags, of vulcanised fibre or paperboard"
  		},
  		{
  			"id": "08420231",
  			"id_hs92": "420231",
  			"name": "Articles for pocket or handbag, leather outer surface"
  		},
  		{
  			"id": "08420232",
  			"id_hs92": "420232",
  			"name": "Articles for pocket or handbag, plastic, textile oute"
  		},
  		{
  			"id": "08420239",
  			"id_hs92": "420239",
  			"name": "Articles for pocket or handbag, nes"
  		},
  		{
  			"id": "08420291",
  			"id_hs92": "420291",
  			"name": "Containers nes, outer surface of leather"
  		},
  		{
  			"id": "08420292",
  			"id_hs92": "420292",
  			"name": "Containers nes, outer surface plastic or textile"
  		},
  		{
  			"id": "08420299",
  			"id_hs92": "420299",
  			"name": "Gun, musical instrument, camera, etc cases, nes"
  		},
  		{
  			"id": "084203",
  			"id_hs92": "4203",
  			"name": "Leather Apparel"
  		},
  		{
  			"id": "08420310",
  			"id_hs92": "420310",
  			"name": "Articles of apparel of leather or composition leather"
  		},
  		{
  			"id": "08420321",
  			"id_hs92": "420321",
  			"name": "Leather, composition sports gloves, mittens and mitts"
  		},
  		{
  			"id": "08420329",
  			"id_hs92": "420329",
  			"name": "Leather, composition gloves & mittens except sports"
  		},
  		{
  			"id": "08420330",
  			"id_hs92": "420330",
  			"name": "Belts and bandoliers of leather or composition leathe"
  		},
  		{
  			"id": "08420340",
  			"id_hs92": "420340",
  			"name": "Clothing accessories nes, of leather or composition"
  		},
  		{
  			"id": "084204",
  			"id_hs92": "4204",
  			"name": "Leather Used in Machinery"
  		},
  		{
  			"id": "08420400",
  			"id_hs92": "420400",
  			"name": "Articles of leather & composition for technical uses"
  		},
  		{
  			"id": "084205",
  			"id_hs92": "4205",
  			"name": "Other Leather Articles"
  		},
  		{
  			"id": "08420500",
  			"id_hs92": "420500",
  			"name": "Articles of leather and composition leather, nes"
  		},
  		{
  			"id": "084206",
  			"id_hs92": "4206",
  			"name": "Articles of Gut"
  		},
  		{
  			"id": "08420610",
  			"id_hs92": "420610",
  			"name": "Articles of catgut"
  		},
  		{
  			"id": "08420690",
  			"id_hs92": "420690",
  			"name": "Articles of gut, goldbeater skin, bladder, tendons ne"
  		},
  		{
  			"id": "084301",
  			"id_hs92": "4301",
  			"name": "Raw Furskins"
  		},
  		{
  			"id": "08430110",
  			"id_hs92": "430110",
  			"name": "Raw mink furskins, whole"
  		},
  		{
  			"id": "08430120",
  			"id_hs92": "430120",
  			"name": "Raw rabbit or hare furskins, whole"
  		},
  		{
  			"id": "08430130",
  			"id_hs92": "430130",
  			"name": "Raw Persian and similar lamb furskins, whole"
  		},
  		{
  			"id": "08430140",
  			"id_hs92": "430140",
  			"name": "Raw beaver furskins, whole"
  		},
  		{
  			"id": "08430150",
  			"id_hs92": "430150",
  			"name": "Raw musk-rat furskins, whole"
  		},
  		{
  			"id": "08430160",
  			"id_hs92": "430160",
  			"name": "Raw fox furskins, whole"
  		},
  		{
  			"id": "08430170",
  			"id_hs92": "430170",
  			"name": "Raw seal furskins, whole"
  		},
  		{
  			"id": "08430180",
  			"id_hs92": "430180",
  			"name": "Raw furskins of other animals, whole"
  		},
  		{
  			"id": "08430190",
  			"id_hs92": "430190",
  			"name": "Raw furskin pieces (e.g. heads, tails, paws)"
  		},
  		{
  			"id": "084302",
  			"id_hs92": "4302",
  			"name": "Tanned Furskins"
  		},
  		{
  			"id": "08430211",
  			"id_hs92": "430211",
  			"name": "Tanned or dressed mink furskins, whole, unassembled"
  		},
  		{
  			"id": "08430212",
  			"id_hs92": "430212",
  			"name": "Tanned, dressed rabbit, hare skins, whole, unassemble"
  		},
  		{
  			"id": "08430213",
  			"id_hs92": "430213",
  			"name": "Tanned,dressed Persian/etc lambskin, whole,unassemble"
  		},
  		{
  			"id": "08430219",
  			"id_hs92": "430219",
  			"name": "Tanned,dressed whole furs except lamb/mink/rabbit/har"
  		},
  		{
  			"id": "08430220",
  			"id_hs92": "430220",
  			"name": "Tanned or dressed furskin pieces (heads, tails, paws)"
  		},
  		{
  			"id": "08430230",
  			"id_hs92": "430230",
  			"name": "Tanned or dressed whole furskins and pieces, assemble"
  		},
  		{
  			"id": "084303",
  			"id_hs92": "4303",
  			"name": "Furskin Apparel"
  		},
  		{
  			"id": "08430310",
  			"id_hs92": "430310",
  			"name": "Articles of apparel & clothing accessories of furskin"
  		},
  		{
  			"id": "08430390",
  			"id_hs92": "430390",
  			"name": "Articles of furskin except clothing and accessories"
  		},
  		{
  			"id": "084304",
  			"id_hs92": "4304",
  			"name": "Artificial Fur"
  		},
  		{
  			"id": "08430400",
  			"id_hs92": "430400",
  			"name": "Artificial fur and articles thereof"
  		},
  		{
  			"id": "09",
  			"id_hs92": null,
  			"name": "Wood Products"
  		},
  		{
  			"id": "094401",
  			"id_hs92": "4401",
  			"name": "Fuel Wood"
  		},
  		{
  			"id": "09440110",
  			"id_hs92": "440110",
  			"name": "Fuel wood"
  		},
  		{
  			"id": "09440121",
  			"id_hs92": "440121",
  			"name": "Wood in chips, coniferous"
  		},
  		{
  			"id": "09440122",
  			"id_hs92": "440122",
  			"name": "Wood in chips, non-coniferous"
  		},
  		{
  			"id": "09440130",
  			"id_hs92": "440130",
  			"name": "Sawdust, wood waste or scrap"
  		},
  		{
  			"id": "094402",
  			"id_hs92": "4402",
  			"name": "Wood Charcoal"
  		},
  		{
  			"id": "09440200",
  			"id_hs92": "440200",
  			"name": "Wood charcoal (including shell or nut charcoal)"
  		},
  		{
  			"id": "094403",
  			"id_hs92": "4403",
  			"name": "Rough Wood"
  		},
  		{
  			"id": "09440310",
  			"id_hs92": "440310",
  			"name": "Poles, treated or painted with preservatives"
  		},
  		{
  			"id": "09440320",
  			"id_hs92": "440320",
  			"name": "Logs, poles, coniferous not treated or painted"
  		},
  		{
  			"id": "09440331",
  			"id_hs92": "440331",
  			"name": "Logs, Meranti (light or dark red), Bakau"
  		},
  		{
  			"id": "09440332",
  			"id_hs92": "440332",
  			"name": "Logs, white Lauan/Meranti/Seraya/yellow Meranti/Alan"
  		},
  		{
  			"id": "09440333",
  			"id_hs92": "440333",
  			"name": "Logs, Keruing/Ramin/Kapur/Teak/Jongkong/Merbau/etc"
  		},
  		{
  			"id": "09440334",
  			"id_hs92": "440334",
  			"name": "Logs, Okoume/Obeche/Sapelli/Sipo/Acajou d'Afrique/etc"
  		},
  		{
  			"id": "09440335",
  			"id_hs92": "440335",
  			"name": "Logs, Tiama, Mansonia, Ilomba, Dibetou, Limba, Azobe"
  		},
  		{
  			"id": "09440391",
  			"id_hs92": "440391",
  			"name": "Logs, Oak (Quercus spp)"
  		},
  		{
  			"id": "09440392",
  			"id_hs92": "440392",
  			"name": "Logs, Beech (Fagus spp)"
  		},
  		{
  			"id": "09440399",
  			"id_hs92": "440399",
  			"name": "Logs, non-coniferous nes"
  		},
  		{
  			"id": "094404",
  			"id_hs92": "4404",
  			"name": "Wood Stakes"
  		},
  		{
  			"id": "09440410",
  			"id_hs92": "440410",
  			"name": "Poles, piles etc, coniferous, pointed but not sawn"
  		},
  		{
  			"id": "09440420",
  			"id_hs92": "440420",
  			"name": "Poles, piles etc, non-coniferous, pointed, not sawn"
  		},
  		{
  			"id": "094405",
  			"id_hs92": "4405",
  			"name": "Wood Wool"
  		},
  		{
  			"id": "09440500",
  			"id_hs92": "440500",
  			"name": "Wood wool, wood flour"
  		},
  		{
  			"id": "094406",
  			"id_hs92": "4406",
  			"name": "Railroad Ties"
  		},
  		{
  			"id": "09440610",
  			"id_hs92": "440610",
  			"name": "Ties, railway or tramway, wood not impregnated"
  		},
  		{
  			"id": "09440690",
  			"id_hs92": "440690",
  			"name": "Ties, railway or tramway, impregnated wood"
  		},
  		{
  			"id": "094407",
  			"id_hs92": "4407",
  			"name": "Sawn Wood"
  		},
  		{
  			"id": "09440710",
  			"id_hs92": "440710",
  			"name": "Lumber, coniferous (softwood) thickness < 6 mm"
  		},
  		{
  			"id": "09440721",
  			"id_hs92": "440721",
  			"name": "Lumber, Meranti red, Meranti Bakau, White Lauan etc"
  		},
  		{
  			"id": "09440722",
  			"id_hs92": "440722",
  			"name": "Lumber, Okoume, Obeche, Sapelli/Sipo/Acajou/Makore/et"
  		},
  		{
  			"id": "09440723",
  			"id_hs92": "440723",
  			"name": "Lumber, Baboen, Mahogany, Imbuia, Balsa"
  		},
  		{
  			"id": "09440791",
  			"id_hs92": "440791",
  			"name": "Lumber, Oak (Quercus spp)"
  		},
  		{
  			"id": "09440792",
  			"id_hs92": "440792",
  			"name": "Lumber, Beech (Fagus spp)"
  		},
  		{
  			"id": "09440799",
  			"id_hs92": "440799",
  			"name": "Lumber, non-coniferous nes"
  		},
  		{
  			"id": "094408",
  			"id_hs92": "4408",
  			"name": "Veneer Sheets"
  		},
  		{
  			"id": "09440810",
  			"id_hs92": "440810",
  			"name": "Veneer or ply sheet, coniferous (softwood) <6 mm thic"
  		},
  		{
  			"id": "09440820",
  			"id_hs92": "440820",
  			"name": "Veneer or ply sheet, tropical woods, <6 mm thick"
  		},
  		{
  			"id": "09440890",
  			"id_hs92": "440890",
  			"name": "Veneer,ply sheet, not conifer or tropical, <6 mm thic"
  		},
  		{
  			"id": "094409",
  			"id_hs92": "4409",
  			"name": "Shaped Wood"
  		},
  		{
  			"id": "09440910",
  			"id_hs92": "440910",
  			"name": "Coniferous wood continuously shaped along any edges"
  		},
  		{
  			"id": "09440920",
  			"id_hs92": "440920",
  			"name": "Non-conifer wood continuously shaped along any edges"
  		},
  		{
  			"id": "094410",
  			"id_hs92": "4410",
  			"name": "Particle Board"
  		},
  		{
  			"id": "09441010",
  			"id_hs92": "441010",
  			"name": "Particle board of wood"
  		},
  		{
  			"id": "09441090",
  			"id_hs92": "441090",
  			"name": "Particle board of ligneous materials except wood"
  		},
  		{
  			"id": "094411",
  			"id_hs92": "4411",
  			"name": "Wood Fiberboard"
  		},
  		{
  			"id": "09441111",
  			"id_hs92": "441111",
  			"name": "Fibreboard >0.8 g/cm2 not worked or surface covered"
  		},
  		{
  			"id": "09441119",
  			"id_hs92": "441119",
  			"name": "Fibreboard >0.8 g/cm2 worked/surface covered"
  		},
  		{
  			"id": "09441121",
  			"id_hs92": "441121",
  			"name": "Fibreboard 0.5 - 0.8 g/cm2 not worked/surface covered"
  		},
  		{
  			"id": "09441129",
  			"id_hs92": "441129",
  			"name": "Fibreboard 0.5 - 0.8 g/cm2 worked/surface covered"
  		},
  		{
  			"id": "09441131",
  			"id_hs92": "441131",
  			"name": "Fibreboard 0.35- 0.5 g/cm2 not worked/surface covered"
  		},
  		{
  			"id": "09441139",
  			"id_hs92": "441139",
  			"name": "Fibreboard 0.35- 0.5 g/cm2 worked/surface covered"
  		},
  		{
  			"id": "09441191",
  			"id_hs92": "441191",
  			"name": "Fibreboard nes not worked or surface covered nes"
  		},
  		{
  			"id": "09441199",
  			"id_hs92": "441199",
  			"name": "Fibreboard nes, worked or surface covered"
  		},
  		{
  			"id": "094412",
  			"id_hs92": "4412",
  			"name": "Plywood"
  		},
  		{
  			"id": "09441211",
  			"id_hs92": "441211",
  			"name": "Plywood 1 or 2 outer ply tropical hardwood (ply <6 mm"
  		},
  		{
  			"id": "09441212",
  			"id_hs92": "441212",
  			"name": "Plywood, 1 or 2 outer ply non-conifer nes (ply <6 mm)"
  		},
  		{
  			"id": "09441219",
  			"id_hs92": "441219",
  			"name": "Plywood, all softwood, each ply < 6mm thick"
  		},
  		{
  			"id": "09441221",
  			"id_hs92": "441221",
  			"name": "Panels, 1 outer ply non-conifer & 1 ply particle boar"
  		},
  		{
  			"id": "09441229",
  			"id_hs92": "441229",
  			"name": "Panels, 1 outer ply non-coniferous wood nes"
  		},
  		{
  			"id": "09441291",
  			"id_hs92": "441291",
  			"name": "Panels, 1 outer ply conifer wood,1 ply particle board"
  		},
  		{
  			"id": "09441299",
  			"id_hs92": "441299",
  			"name": "Panels, laminated wood, nes"
  		},
  		{
  			"id": "094413",
  			"id_hs92": "4413",
  			"name": "Densified Wood"
  		},
  		{
  			"id": "09441300",
  			"id_hs92": "441300",
  			"name": "Densified wood, in blocks, plates, strips or profile"
  		},
  		{
  			"id": "094414",
  			"id_hs92": "4414",
  			"name": "Wood Frames"
  		},
  		{
  			"id": "09441400",
  			"id_hs92": "441400",
  			"name": "Wooden frames for paintings, photographs, mirrors etc"
  		},
  		{
  			"id": "094415",
  			"id_hs92": "4415",
  			"name": "Wood Crates"
  		},
  		{
  			"id": "09441510",
  			"id_hs92": "441510",
  			"name": "Wooden cases, boxes, crates, drums and containers"
  		},
  		{
  			"id": "09441520",
  			"id_hs92": "441520",
  			"name": "Wooden pallets, box pallets and load boards"
  		},
  		{
  			"id": "094416",
  			"id_hs92": "4416",
  			"name": "Wood Barrels"
  		},
  		{
  			"id": "09441600",
  			"id_hs92": "441600",
  			"name": "Wooden casks, barrels, vats, tubs, etc."
  		},
  		{
  			"id": "094417",
  			"id_hs92": "4417",
  			"name": "Wooden Tool Handles"
  		},
  		{
  			"id": "09441700",
  			"id_hs92": "441700",
  			"name": "Tools, broom handles,bodies, etc, of wood"
  		},
  		{
  			"id": "094418",
  			"id_hs92": "4418",
  			"name": "Wood Carpentry"
  		},
  		{
  			"id": "09441810",
  			"id_hs92": "441810",
  			"name": "Windows, French-windows, frames, of wood"
  		},
  		{
  			"id": "09441820",
  			"id_hs92": "441820",
  			"name": "Doors, frames and thresholds, of wood"
  		},
  		{
  			"id": "09441830",
  			"id_hs92": "441830",
  			"name": "Parquet panels and tiles, of wood"
  		},
  		{
  			"id": "09441840",
  			"id_hs92": "441840",
  			"name": "Shuttering for concrete constructional work, of wood"
  		},
  		{
  			"id": "09441850",
  			"id_hs92": "441850",
  			"name": "Shingles and shakes, of wood"
  		},
  		{
  			"id": "09441890",
  			"id_hs92": "441890",
  			"name": "Builder's joinery and carpentry of wood nes"
  		},
  		{
  			"id": "094419",
  			"id_hs92": "4419",
  			"name": "Wood Kitchenware"
  		},
  		{
  			"id": "09441900",
  			"id_hs92": "441900",
  			"name": "Tableware and kitchenware, of wood"
  		},
  		{
  			"id": "094420",
  			"id_hs92": "4420",
  			"name": "Wood Ornaments"
  		},
  		{
  			"id": "09442010",
  			"id_hs92": "442010",
  			"name": "Statuettes and other ornaments of wood"
  		},
  		{
  			"id": "09442090",
  			"id_hs92": "442090",
  			"name": "Wood marquetry, laid; caskets & cases for jewels, etc"
  		},
  		{
  			"id": "094421",
  			"id_hs92": "4421",
  			"name": "Other Wood Articles"
  		},
  		{
  			"id": "09442110",
  			"id_hs92": "442110",
  			"name": "Clothes hangers of wood"
  		},
  		{
  			"id": "09442190",
  			"id_hs92": "442190",
  			"name": "Wooden articles nes"
  		},
  		{
  			"id": "094501",
  			"id_hs92": "4501",
  			"name": "Raw Cork"
  		},
  		{
  			"id": "09450110",
  			"id_hs92": "450110",
  			"name": "Natural cork, raw or simply prepared"
  		},
  		{
  			"id": "09450190",
  			"id_hs92": "450190",
  			"name": "Waste cork, crushed, granulated or ground"
  		},
  		{
  			"id": "094502",
  			"id_hs92": "4502",
  			"name": "Debacked Cork"
  		},
  		{
  			"id": "09450200",
  			"id_hs92": "450200",
  			"name": "Natural cork, debacked, roughly squared, in blocks et"
  		},
  		{
  			"id": "094503",
  			"id_hs92": "4503",
  			"name": "Natural Cork Articles"
  		},
  		{
  			"id": "09450310",
  			"id_hs92": "450310",
  			"name": "Corks and stoppers, natural cork"
  		},
  		{
  			"id": "09450390",
  			"id_hs92": "450390",
  			"name": "Natural cork articles other than corks or stoppers"
  		},
  		{
  			"id": "094504",
  			"id_hs92": "4504",
  			"name": "Agglomerated Cork"
  		},
  		{
  			"id": "09450410",
  			"id_hs92": "450410",
  			"name": "Blocks, sheets, strip and tiles of agglomerated cork"
  		},
  		{
  			"id": "09450490",
  			"id_hs92": "450490",
  			"name": "Articles of agglomerated cork"
  		},
  		{
  			"id": "094601",
  			"id_hs92": "4601",
  			"name": "Plaiting Products"
  		},
  		{
  			"id": "09460110",
  			"id_hs92": "460110",
  			"name": "Plaits and products of plaiting materials"
  		},
  		{
  			"id": "09460120",
  			"id_hs92": "460120",
  			"name": "Mats, matting and screens, vegetable plaiting materia"
  		},
  		{
  			"id": "09460191",
  			"id_hs92": "460191",
  			"name": "Plaited vegetable material articles not mats or scree"
  		},
  		{
  			"id": "09460199",
  			"id_hs92": "460199",
  			"name": "Products of non-vegetable plaiting materials"
  		},
  		{
  			"id": "094602",
  			"id_hs92": "4602",
  			"name": "Basketwork"
  		},
  		{
  			"id": "09460210",
  			"id_hs92": "460210",
  			"name": "Basketwork, wickerwork products of vegetable material"
  		},
  		{
  			"id": "09460290",
  			"id_hs92": "460290",
  			"name": "Basketwork and wickerwork products, non-vegetable"
  		},
  		{
  			"id": "10",
  			"id_hs92": null,
  			"name": "Paper Goods"
  		},
  		{
  			"id": "104701",
  			"id_hs92": "4701",
  			"name": "Mechanical Wood Pulp"
  		},
  		{
  			"id": "10470100",
  			"id_hs92": "470100",
  			"name": "Mechanical wood pulp"
  		},
  		{
  			"id": "104702",
  			"id_hs92": "4702",
  			"name": "Dissolving Grades Chemical Woodpulp"
  		},
  		{
  			"id": "10470200",
  			"id_hs92": "470200",
  			"name": "Chemical wood pulp, dissolving grades"
  		},
  		{
  			"id": "104703",
  			"id_hs92": "4703",
  			"name": "Sulfate Chemical Woodpulp"
  		},
  		{
  			"id": "10470311",
  			"id_hs92": "470311",
  			"name": "Chem wood pulp, soda or sulphate, conifer, unbleached"
  		},
  		{
  			"id": "10470319",
  			"id_hs92": "470319",
  			"name": "Chem wood pulp, soda/sulphate, non-conifer, unbleache"
  		},
  		{
  			"id": "10470321",
  			"id_hs92": "470321",
  			"name": "Chem wood pulp, soda or sulphate, conifer, bleached"
  		},
  		{
  			"id": "10470329",
  			"id_hs92": "470329",
  			"name": "Chem wood pulp, soda/sulphate, non-conifer, bleached"
  		},
  		{
  			"id": "104704",
  			"id_hs92": "4704",
  			"name": "Sulfite Chemical Woodpulp"
  		},
  		{
  			"id": "10470411",
  			"id_hs92": "470411",
  			"name": "Chem wood pulp, sulphite, coniferous unbleached"
  		},
  		{
  			"id": "10470419",
  			"id_hs92": "470419",
  			"name": "Chem wood pulp, sulphite, non-coniferous, unbleached"
  		},
  		{
  			"id": "10470421",
  			"id_hs92": "470421",
  			"name": "Chem wood pulp, sulphite, coniferous bleached"
  		},
  		{
  			"id": "10470429",
  			"id_hs92": "470429",
  			"name": "Chem wood pulp, sulphite, non-coniferous, bleached"
  		},
  		{
  			"id": "104705",
  			"id_hs92": "4705",
  			"name": "Semi chemical Woodpulp"
  		},
  		{
  			"id": "10470500",
  			"id_hs92": "470500",
  			"name": "Semi-chemical wood pulp"
  		},
  		{
  			"id": "104706",
  			"id_hs92": "4706",
  			"name": "Recovered Paper Pulp"
  		},
  		{
  			"id": "10470610",
  			"id_hs92": "470610",
  			"name": "Cotton linters pulp"
  		},
  		{
  			"id": "10470691",
  			"id_hs92": "470691",
  			"name": "Mechanical pulps of other fibrous material"
  		},
  		{
  			"id": "10470692",
  			"id_hs92": "470692",
  			"name": "Chemical pulps of other fibrous material"
  		},
  		{
  			"id": "10470693",
  			"id_hs92": "470693",
  			"name": "Semi-chemical pulps of other fibrous material"
  		},
  		{
  			"id": "104707",
  			"id_hs92": "4707",
  			"name": "Recovered Paper"
  		},
  		{
  			"id": "10470710",
  			"id_hs92": "470710",
  			"name": "Waste or scrap of unbleached kraft or paperboard"
  		},
  		{
  			"id": "10470720",
  			"id_hs92": "470720",
  			"name": "Waste, scrap of paper, board of bleached chemical pul"
  		},
  		{
  			"id": "10470730",
  			"id_hs92": "470730",
  			"name": "Waste or scrap of paper or board of mechanical pulp"
  		},
  		{
  			"id": "10470790",
  			"id_hs92": "470790",
  			"name": "Waste, scrap of paper, board, nes (including unsorted"
  		},
  		{
  			"id": "104801",
  			"id_hs92": "4801",
  			"name": "Newsprint"
  		},
  		{
  			"id": "10480100",
  			"id_hs92": "480100",
  			"name": "Newsprint"
  		},
  		{
  			"id": "104802",
  			"id_hs92": "4802",
  			"name": "Uncoated Paper"
  		},
  		{
  			"id": "10480210",
  			"id_hs92": "480210",
  			"name": "Paper, hand-made, uncoated"
  		},
  		{
  			"id": "10480220",
  			"id_hs92": "480220",
  			"name": "Paper, sensitising base stock"
  		},
  		{
  			"id": "10480230",
  			"id_hs92": "480230",
  			"name": "Paper, carbonising base, uncoated"
  		},
  		{
  			"id": "10480240",
  			"id_hs92": "480240",
  			"name": "Paper, wallpaper base, uncoated"
  		},
  		{
  			"id": "10480251",
  			"id_hs92": "480251",
  			"name": "Paper, fine, woodfree, <40 g/m2, uncoated, nes"
  		},
  		{
  			"id": "10480252",
  			"id_hs92": "480252",
  			"name": "Paper, fine, woodfree, 40 - 150 g/m2, uncoated"
  		},
  		{
  			"id": "10480253",
  			"id_hs92": "480253",
  			"name": "Paper, fine, woodfree, >150 g/m2, uncoated, nes"
  		},
  		{
  			"id": "10480260",
  			"id_hs92": "480260",
  			"name": "Paper, fine, wood-containing, uncoated, nes"
  		},
  		{
  			"id": "104803",
  			"id_hs92": "4803",
  			"name": "Facial Tissue"
  		},
  		{
  			"id": "10480300",
  			"id_hs92": "480300",
  			"name": "Paper, household, sanitary, width > 36 centimetres"
  		},
  		{
  			"id": "104804",
  			"id_hs92": "4804",
  			"name": "Uncoated Kraft Paper"
  		},
  		{
  			"id": "10480411",
  			"id_hs92": "480411",
  			"name": "Paper, Kraftliner, unbleached, uncoated"
  		},
  		{
  			"id": "10480419",
  			"id_hs92": "480419",
  			"name": "Paper, Kraftliner, other than unbleached, uncoated"
  		},
  		{
  			"id": "10480421",
  			"id_hs92": "480421",
  			"name": "Paper, sack kraft, unbleached, uncoated"
  		},
  		{
  			"id": "10480429",
  			"id_hs92": "480429",
  			"name": "Paper, sack kraft, other than unbleached, uncoated"
  		},
  		{
  			"id": "10480431",
  			"id_hs92": "480431",
  			"name": "Paper, kraft, <150g/m2, unbleached, uncoated, nes"
  		},
  		{
  			"id": "10480439",
  			"id_hs92": "480439",
  			"name": "Paper, kraft, <150g/m2, uncoated, nes"
  		},
  		{
  			"id": "10480441",
  			"id_hs92": "480441",
  			"name": "Paper, kraft, 150-225 g/m2, unbleached,uncoated nes"
  		},
  		{
  			"id": "10480442",
  			"id_hs92": "480442",
  			"name": "Paper, kraft, 150-225 g/m2, chem pulp not bleach/coat"
  		},
  		{
  			"id": "10480449",
  			"id_hs92": "480449",
  			"name": "Paper, kraft, 150-225 g/m2, uncoated, nes"
  		},
  		{
  			"id": "10480451",
  			"id_hs92": "480451",
  			"name": "Paper, kraft, >225g/m2, unbleached, uncoated, nes"
  		},
  		{
  			"id": "10480452",
  			"id_hs92": "480452",
  			"name": "Paper, kraft, >225g/m2,chemical pulp,bleached,uncoate"
  		},
  		{
  			"id": "10480459",
  			"id_hs92": "480459",
  			"name": "Paper, kraft, >225g/m2, uncoated, nes"
  		},
  		{
  			"id": "104805",
  			"id_hs92": "4805",
  			"name": "Other Uncoated Paper"
  		},
  		{
  			"id": "10480510",
  			"id_hs92": "480510",
  			"name": "Paper, fluting, in rolls, semi-chemical, uncoated"
  		},
  		{
  			"id": "10480521",
  			"id_hs92": "480521",
  			"name": "Paper, multi-ply, each layer bleached, uncoated, nes"
  		},
  		{
  			"id": "10480522",
  			"id_hs92": "480522",
  			"name": "Paper, multi-ply, one layer bleached, uncoated"
  		},
  		{
  			"id": "10480523",
  			"id_hs92": "480523",
  			"name": "Paper, multi-ply, <4 layers, outer bleached, uncoated"
  		},
  		{
  			"id": "10480529",
  			"id_hs92": "480529",
  			"name": "Paper, multi-ply, uncoated, nes"
  		},
  		{
  			"id": "10480530",
  			"id_hs92": "480530",
  			"name": "Paper, sulphite wrapping, uncoated"
  		},
  		{
  			"id": "10480540",
  			"id_hs92": "480540",
  			"name": "Paper, filter, uncoated"
  		},
  		{
  			"id": "10480550",
  			"id_hs92": "480550",
  			"name": "Paper, felt, uncoated"
  		},
  		{
  			"id": "10480560",
  			"id_hs92": "480560",
  			"name": "Paper, weighing 150 g/m2 or less, uncoated, nes"
  		},
  		{
  			"id": "10480570",
  			"id_hs92": "480570",
  			"name": "Paper, weighing 150 - 225 g/m2, uncoated, nes"
  		},
  		{
  			"id": "10480580",
  			"id_hs92": "480580",
  			"name": "Paper, weighing 225 g/m2 or more, uncoated, nes"
  		},
  		{
  			"id": "104806",
  			"id_hs92": "4806",
  			"name": "Vegetable Parchment"
  		},
  		{
  			"id": "10480610",
  			"id_hs92": "480610",
  			"name": "Paper, vegetable parchment"
  		},
  		{
  			"id": "10480620",
  			"id_hs92": "480620",
  			"name": "Paper, greaseproof"
  		},
  		{
  			"id": "10480630",
  			"id_hs92": "480630",
  			"name": "Paper, tracing"
  		},
  		{
  			"id": "10480640",
  			"id_hs92": "480640",
  			"name": "Paper, glassine, glazed transparent or translucent ne"
  		},
  		{
  			"id": "104807",
  			"id_hs92": "4807",
  			"name": "Composite Paper"
  		},
  		{
  			"id": "10480710",
  			"id_hs92": "480710",
  			"name": "Paper, laminated with bitumen tar or asphalt, uncoate"
  		},
  		{
  			"id": "10480791",
  			"id_hs92": "480791",
  			"name": "Straw paper, board, whether or not paper covered"
  		},
  		{
  			"id": "10480799",
  			"id_hs92": "480799",
  			"name": "Paper, composite, nes, not coated or impregnated"
  		},
  		{
  			"id": "104808",
  			"id_hs92": "4808",
  			"name": "Corrugated Paper"
  		},
  		{
  			"id": "10480810",
  			"id_hs92": "480810",
  			"name": "Paper, corrugated"
  		},
  		{
  			"id": "10480820",
  			"id_hs92": "480820",
  			"name": "Paper, sack kraft, creped or crinkled"
  		},
  		{
  			"id": "10480830",
  			"id_hs92": "480830",
  			"name": "Paper, kraft, creped or crinkled, not corrugated, sac"
  		},
  		{
  			"id": "10480890",
  			"id_hs92": "480890",
  			"name": "Paper crepe, crinkle, embossed, perforated, not kraft"
  		},
  		{
  			"id": "104809",
  			"id_hs92": "4809",
  			"name": "Carbon Paper"
  		},
  		{
  			"id": "10480910",
  			"id_hs92": "480910",
  			"name": "Paper, carbon or similar width >36 cm"
  		},
  		{
  			"id": "10480920",
  			"id_hs92": "480920",
  			"name": "Paper, self-copy, width > 36 cm"
  		},
  		{
  			"id": "10480990",
  			"id_hs92": "480990",
  			"name": "Paper, copying or transfer, width >36 cm"
  		},
  		{
  			"id": "104810",
  			"id_hs92": "4810",
  			"name": "Kaolin Coated Paper"
  		},
  		{
  			"id": "10481011",
  			"id_hs92": "481011",
  			"name": "Paper, fine, woodfree, <150 g/m2, clay coated"
  		},
  		{
  			"id": "10481012",
  			"id_hs92": "481012",
  			"name": "Paper, fine, woodfree, >150 g/m2, clay coated"
  		},
  		{
  			"id": "10481021",
  			"id_hs92": "481021",
  			"name": "Paper, fine, light weight coated"
  		},
  		{
  			"id": "10481029",
  			"id_hs92": "481029",
  			"name": "Paper, fine, wood containing clay coated, except ligh"
  		},
  		{
  			"id": "10481031",
  			"id_hs92": "481031",
  			"name": "Paper, kraft,>95% chem pulp,<150 g,bleached,clay coat"
  		},
  		{
  			"id": "10481032",
  			"id_hs92": "481032",
  			"name": "Paper, kraft,>95% chem pulp,>150 g,bleached,clay coat"
  		},
  		{
  			"id": "10481039",
  			"id_hs92": "481039",
  			"name": "Paper, kraft, clay coated, nes"
  		},
  		{
  			"id": "10481091",
  			"id_hs92": "481091",
  			"name": "Paper, multi-ply, clay coated, nes"
  		},
  		{
  			"id": "10481099",
  			"id_hs92": "481099",
  			"name": "Paper, clay coated, nes"
  		},
  		{
  			"id": "104811",
  			"id_hs92": "4811",
  			"name": "Cellulose Fibers Paper"
  		},
  		{
  			"id": "10481110",
  			"id_hs92": "481110",
  			"name": "Paper, tarred, bituminised or asphalted, nes"
  		},
  		{
  			"id": "10481121",
  			"id_hs92": "481121",
  			"name": "Paper, self-adhesive except labels"
  		},
  		{
  			"id": "10481129",
  			"id_hs92": "481129",
  			"name": "Paper, gummed or adhesive except self-adhesive, label"
  		},
  		{
  			"id": "10481131",
  			"id_hs92": "481131",
  			"name": "Paper, >150g/m2, bleached, plastic coated/impregnated"
  		},
  		{
  			"id": "10481139",
  			"id_hs92": "481139",
  			"name": "Paper, coated, impregnated, covered with plastics, ne"
  		},
  		{
  			"id": "10481140",
  			"id_hs92": "481140",
  			"name": "Paper, coat/impregnated with wax/stearin/glycerol, ne"
  		},
  		{
  			"id": "10481190",
  			"id_hs92": "481190",
  			"name": "Paper, coated/impregnated/covered/coloured/printed ne"
  		},
  		{
  			"id": "104812",
  			"id_hs92": "4812",
  			"name": "Paper Pulp Filter Blocks"
  		},
  		{
  			"id": "10481200",
  			"id_hs92": "481200",
  			"name": "Filter blocks, slabs and plates, of paper pulp"
  		},
  		{
  			"id": "104813",
  			"id_hs92": "4813",
  			"name": "Cigarette Paper"
  		},
  		{
  			"id": "10481310",
  			"id_hs92": "481310",
  			"name": "Paper, cigarette, in the form of booklets or tubes"
  		},
  		{
  			"id": "10481320",
  			"id_hs92": "481320",
  			"name": "Paper, cigarette, in rolls of a width < 5 cm"
  		},
  		{
  			"id": "10481390",
  			"id_hs92": "481390",
  			"name": "Paper, cigarette, except in rolls < 5 cm wide"
  		},
  		{
  			"id": "104814",
  			"id_hs92": "4814",
  			"name": "Wallpaper"
  		},
  		{
  			"id": "10481410",
  			"id_hs92": "481410",
  			"name": "Wallpaper \"Ingrain\"\"\""
  		},
  		{
  			"id": "10481420",
  			"id_hs92": "481420",
  			"name": "Wallpaper, coated or covered with a decorated plastic"
  		},
  		{
  			"id": "10481430",
  			"id_hs92": "481430",
  			"name": "Wallpaper, covered one side with plaiting material"
  		},
  		{
  			"id": "10481490",
  			"id_hs92": "481490",
  			"name": "Wallpaper and similar wall coverings, nes"
  		},
  		{
  			"id": "104815",
  			"id_hs92": "4815",
  			"name": "Paper Floor Coverings"
  		},
  		{
  			"id": "10481500",
  			"id_hs92": "481500",
  			"name": "Floor coverings on a base of paper"
  		},
  		{
  			"id": "104816",
  			"id_hs92": "4816",
  			"name": "Other Carbon Paper"
  		},
  		{
  			"id": "10481610",
  			"id_hs92": "481610",
  			"name": "Paper, carbon or similar copying, except rolls w >36c"
  		},
  		{
  			"id": "10481620",
  			"id_hs92": "481620",
  			"name": "Paper, self-copy, except in rolls > 36 cm wide"
  		},
  		{
  			"id": "10481630",
  			"id_hs92": "481630",
  			"name": "Duplicator stencils"
  		},
  		{
  			"id": "10481690",
  			"id_hs92": "481690",
  			"name": "Paper, copying or transfer, nes"
  		},
  		{
  			"id": "104817",
  			"id_hs92": "4817",
  			"name": "Letter Stock"
  		},
  		{
  			"id": "10481710",
  			"id_hs92": "481710",
  			"name": "Envelopes of paper"
  		},
  		{
  			"id": "10481720",
  			"id_hs92": "481720",
  			"name": "Letter or correspondence cards, plain postcards"
  		},
  		{
  			"id": "10481730",
  			"id_hs92": "481730",
  			"name": "Boxes, pouches, wallets, etc of stationary"
  		},
  		{
  			"id": "104818",
  			"id_hs92": "4818",
  			"name": "Toilet Paper"
  		},
  		{
  			"id": "10481810",
  			"id_hs92": "481810",
  			"name": "Toilet paper"
  		},
  		{
  			"id": "10481820",
  			"id_hs92": "481820",
  			"name": "Paper handkerchiefs, cleansing, facial tissues, towel"
  		},
  		{
  			"id": "10481830",
  			"id_hs92": "481830",
  			"name": "Paper tablecloths and serviettes"
  		},
  		{
  			"id": "10481840",
  			"id_hs92": "481840",
  			"name": "Sanitary articles of paper, sanitary towels, diapers"
  		},
  		{
  			"id": "10481850",
  			"id_hs92": "481850",
  			"name": "Clothing and accessories nes, of paper"
  		},
  		{
  			"id": "10481890",
  			"id_hs92": "481890",
  			"name": "Household, hospital & sanitary supplies, of paper, ne"
  		},
  		{
  			"id": "104819",
  			"id_hs92": "4819",
  			"name": "Paper Containers"
  		},
  		{
  			"id": "10481910",
  			"id_hs92": "481910",
  			"name": "Cartons, boxes & cases, of corrugated paper or board"
  		},
  		{
  			"id": "10481920",
  			"id_hs92": "481920",
  			"name": "Cartons, boxes & cases, folding, non-corrugated paper"
  		},
  		{
  			"id": "10481930",
  			"id_hs92": "481930",
  			"name": "Sacks and bags, of paper, having a width > 40 cm"
  		},
  		{
  			"id": "10481940",
  			"id_hs92": "481940",
  			"name": "Sacks and bags, of paper, nes, including cones"
  		},
  		{
  			"id": "10481950",
  			"id_hs92": "481950",
  			"name": "Containers, packing, nes of paper"
  		},
  		{
  			"id": "10481960",
  			"id_hs92": "481960",
  			"name": "Office box files, letter trays etc., of paper"
  		},
  		{
  			"id": "104820",
  			"id_hs92": "4820",
  			"name": "Paper Notebooks"
  		},
  		{
  			"id": "10482010",
  			"id_hs92": "482010",
  			"name": "Registers, account books, note books, diaries etc"
  		},
  		{
  			"id": "10482020",
  			"id_hs92": "482020",
  			"name": "School, etc, exercise books"
  		},
  		{
  			"id": "10482030",
  			"id_hs92": "482030",
  			"name": "Binders, not book covers, folder or file covers, pape"
  		},
  		{
  			"id": "10482040",
  			"id_hs92": "482040",
  			"name": "Business forms, interleaved carbon sets, etc"
  		},
  		{
  			"id": "10482050",
  			"id_hs92": "482050",
  			"name": "Albums for samples or for collections, of paper"
  		},
  		{
  			"id": "10482090",
  			"id_hs92": "482090",
  			"name": "Office supplies nes, of paper, book covers, blotters"
  		},
  		{
  			"id": "104821",
  			"id_hs92": "4821",
  			"name": "Paper Labels"
  		},
  		{
  			"id": "10482110",
  			"id_hs92": "482110",
  			"name": "Paper labels of all kinds, printed"
  		},
  		{
  			"id": "10482190",
  			"id_hs92": "482190",
  			"name": "Paper labels of all kinds, not printed"
  		},
  		{
  			"id": "104822",
  			"id_hs92": "4822",
  			"name": "Paper Spools"
  		},
  		{
  			"id": "10482210",
  			"id_hs92": "482210",
  			"name": "Bobbins, spools etc of paper, used for textile yarn"
  		},
  		{
  			"id": "10482290",
  			"id_hs92": "482290",
  			"name": "Bobbins, spools and similar supports of paper, nes"
  		},
  		{
  			"id": "104823",
  			"id_hs92": "4823",
  			"name": "Shaped Paper"
  		},
  		{
  			"id": "10482311",
  			"id_hs92": "482311",
  			"name": "Paper, self-adhesive, cut to size, in strips or rolls"
  		},
  		{
  			"id": "10482319",
  			"id_hs92": "482319",
  			"name": "Paper, gummed, adhesive nes, cut to size, strip, roll"
  		},
  		{
  			"id": "10482320",
  			"id_hs92": "482320",
  			"name": "Paper, filter, cut to size or shape"
  		},
  		{
  			"id": "10482330",
  			"id_hs92": "482330",
  			"name": "Cards, not punched, for punch card machines, paper"
  		},
  		{
  			"id": "10482340",
  			"id_hs92": "482340",
  			"name": "Paper rolls, sheets & dials for recording instruments"
  		},
  		{
  			"id": "10482351",
  			"id_hs92": "482351",
  			"name": "Paper, fine, cut, printed, embossed, perforated, nes"
  		},
  		{
  			"id": "10482359",
  			"id_hs92": "482359",
  			"name": "Paper, fine, cut to size or shape, nes"
  		},
  		{
  			"id": "10482360",
  			"id_hs92": "482360",
  			"name": "Trays, dishes, plates, cups and the like, of paper"
  		},
  		{
  			"id": "10482370",
  			"id_hs92": "482370",
  			"name": "Moulded or pressed articles of paper pulp"
  		},
  		{
  			"id": "10482390",
  			"id_hs92": "482390",
  			"name": "Paper and paper articles, nes"
  		},
  		{
  			"id": "104901",
  			"id_hs92": "4901",
  			"name": "Brochures"
  		},
  		{
  			"id": "10490110",
  			"id_hs92": "490110",
  			"name": "Brochures, leaflets and similar, in single sheets"
  		},
  		{
  			"id": "10490191",
  			"id_hs92": "490191",
  			"name": "Dictionaries and encyclopedias"
  		},
  		{
  			"id": "10490199",
  			"id_hs92": "490199",
  			"name": "Printed reading books, except dictionaries etc"
  		},
  		{
  			"id": "104902",
  			"id_hs92": "4902",
  			"name": "Newspapers"
  		},
  		{
  			"id": "10490210",
  			"id_hs92": "490210",
  			"name": "Newspapers, journals and periodicals, > 3 issues/week"
  		},
  		{
  			"id": "10490290",
  			"id_hs92": "490290",
  			"name": "Newspapers, journals and periodicals, < 4 issues/week"
  		},
  		{
  			"id": "104903",
  			"id_hs92": "4903",
  			"name": "Children's Picture Books"
  		},
  		{
  			"id": "10490300",
  			"id_hs92": "490300",
  			"name": "Children's picture, drawing or colouring books"
  		},
  		{
  			"id": "104904",
  			"id_hs92": "4904",
  			"name": "Sheet Music"
  		},
  		{
  			"id": "10490400",
  			"id_hs92": "490400",
  			"name": "Music, printed or in manuscript"
  		},
  		{
  			"id": "104905",
  			"id_hs92": "4905",
  			"name": "Maps"
  		},
  		{
  			"id": "10490510",
  			"id_hs92": "490510",
  			"name": "Globes, geographical, printed"
  		},
  		{
  			"id": "10490591",
  			"id_hs92": "490591",
  			"name": "Maps and charts, printed, in book form"
  		},
  		{
  			"id": "10490599",
  			"id_hs92": "490599",
  			"name": "Maps and charts, printed, other than book form"
  		},
  		{
  			"id": "104906",
  			"id_hs92": "4906",
  			"name": "Architectural Plans"
  		},
  		{
  			"id": "10490600",
  			"id_hs92": "490600",
  			"name": "Plans and drawings for architectural etc use"
  		},
  		{
  			"id": "104907",
  			"id_hs92": "4907",
  			"name": "Postage Stamps"
  		},
  		{
  			"id": "10490700",
  			"id_hs92": "490700",
  			"name": "Documents of title (bonds etc), unused stamps etc"
  		},
  		{
  			"id": "104908",
  			"id_hs92": "4908",
  			"name": "Decals"
  		},
  		{
  			"id": "10490810",
  			"id_hs92": "490810",
  			"name": "Transfers (decalcomanias), vitrifiable"
  		},
  		{
  			"id": "10490890",
  			"id_hs92": "490890",
  			"name": "Transfers (decalcomanias), except vitrifiable"
  		},
  		{
  			"id": "104909",
  			"id_hs92": "4909",
  			"name": "Postcards"
  		},
  		{
  			"id": "10490900",
  			"id_hs92": "490900",
  			"name": "Postcards, printed or illustrated, greeting cards"
  		},
  		{
  			"id": "104910",
  			"id_hs92": "4910",
  			"name": "Calendars"
  		},
  		{
  			"id": "10491000",
  			"id_hs92": "491000",
  			"name": "Calendars, printed"
  		},
  		{
  			"id": "104911",
  			"id_hs92": "4911",
  			"name": "Other Printed Material"
  		},
  		{
  			"id": "10491110",
  			"id_hs92": "491110",
  			"name": "Trade advertising material, catalogues etc."
  		},
  		{
  			"id": "10491191",
  			"id_hs92": "491191",
  			"name": "Pictures, designs and photographs"
  		},
  		{
  			"id": "10491199",
  			"id_hs92": "491199",
  			"name": "Printed matter, nes"
  		},
  		{
  			"id": "11",
  			"id_hs92": null,
  			"name": "Textiles"
  		},
  		{
  			"id": "115001",
  			"id_hs92": "5001",
  			"name": "Silkworm Cocoons"
  		},
  		{
  			"id": "11500100",
  			"id_hs92": "500100",
  			"name": "Silk-worm cocoons suitable for reeling"
  		},
  		{
  			"id": "115002",
  			"id_hs92": "5002",
  			"name": "Raw Silk"
  		},
  		{
  			"id": "11500200",
  			"id_hs92": "500200",
  			"name": "Raw silk (not thrown)"
  		},
  		{
  			"id": "115003",
  			"id_hs92": "5003",
  			"name": "Silk Waste"
  		},
  		{
  			"id": "11500310",
  			"id_hs92": "500310",
  			"name": "Silk waste, not carded or combed"
  		},
  		{
  			"id": "11500390",
  			"id_hs92": "500390",
  			"name": "Silk waste, carded or combed"
  		},
  		{
  			"id": "115004",
  			"id_hs92": "5004",
  			"name": "Non-Retail Silk Yarn"
  		},
  		{
  			"id": "11500400",
  			"id_hs92": "500400",
  			"name": "Silk yarn (except from waste) not retail"
  		},
  		{
  			"id": "115005",
  			"id_hs92": "5005",
  			"name": "Silk Waste Yarn"
  		},
  		{
  			"id": "11500500",
  			"id_hs92": "500500",
  			"name": "Yarn spun from silk waste, not retail"
  		},
  		{
  			"id": "115006",
  			"id_hs92": "5006",
  			"name": "Retail Silk Yarn"
  		},
  		{
  			"id": "11500600",
  			"id_hs92": "500600",
  			"name": "Silk yarn retail, silk worm gut"
  		},
  		{
  			"id": "115007",
  			"id_hs92": "5007",
  			"name": "Silk Fabrics"
  		},
  		{
  			"id": "11500710",
  			"id_hs92": "500710",
  			"name": "Woven fabric of noil silk"
  		},
  		{
  			"id": "11500720",
  			"id_hs92": "500720",
  			"name": "Woven fabric >85% silk (except noil silk)"
  		},
  		{
  			"id": "11500790",
  			"id_hs92": "500790",
  			"name": "Woven fabric of silk, nes"
  		},
  		{
  			"id": "115101",
  			"id_hs92": "5101",
  			"name": "Wool"
  		},
  		{
  			"id": "11510111",
  			"id_hs92": "510111",
  			"name": "Greasy shorn wool, not carded or combed"
  		},
  		{
  			"id": "11510119",
  			"id_hs92": "510119",
  			"name": "Greasy wool (other than shorn) not carded or combed"
  		},
  		{
  			"id": "11510121",
  			"id_hs92": "510121",
  			"name": "Degreased shorn wool, not carded, combed or carbonize"
  		},
  		{
  			"id": "11510129",
  			"id_hs92": "510129",
  			"name": "Degreased wool nes, not carded, combed or carbonized"
  		},
  		{
  			"id": "11510130",
  			"id_hs92": "510130",
  			"name": "Carbonized wool, not carded or combed"
  		},
  		{
  			"id": "115102",
  			"id_hs92": "5102",
  			"name": "Animal Hair"
  		},
  		{
  			"id": "11510210",
  			"id_hs92": "510210",
  			"name": "Fine animal hair, not carded or combed"
  		},
  		{
  			"id": "11510220",
  			"id_hs92": "510220",
  			"name": "Coarse animal hair, not carded or combed"
  		},
  		{
  			"id": "115103",
  			"id_hs92": "5103",
  			"name": "Wool or Animal Hair Waste"
  		},
  		{
  			"id": "11510310",
  			"id_hs92": "510310",
  			"name": "Noils of wool or of fine animal hair"
  		},
  		{
  			"id": "11510320",
  			"id_hs92": "510320",
  			"name": "Waste of wool or fine hair, not noils, garnetted stoc"
  		},
  		{
  			"id": "11510330",
  			"id_hs92": "510330",
  			"name": "Waste of coarse animal hair, except garnetted stock"
  		},
  		{
  			"id": "115104",
  			"id_hs92": "5104",
  			"name": "Garnetted Wool or Animal Hair"
  		},
  		{
  			"id": "11510400",
  			"id_hs92": "510400",
  			"name": "Garnetted stock of wool or of animal hair"
  		},
  		{
  			"id": "115105",
  			"id_hs92": "5105",
  			"name": "Prepared Wool or Animal Hair"
  		},
  		{
  			"id": "11510510",
  			"id_hs92": "510510",
  			"name": "Carded wool"
  		},
  		{
  			"id": "11510521",
  			"id_hs92": "510521",
  			"name": "Combed wool in fragments"
  		},
  		{
  			"id": "11510529",
  			"id_hs92": "510529",
  			"name": "Wool tops & other combed wool, except combed fragment"
  		},
  		{
  			"id": "11510530",
  			"id_hs92": "510530",
  			"name": "Fine animal hair, carded or combed"
  		},
  		{
  			"id": "11510540",
  			"id_hs92": "510540",
  			"name": "Coarse animal hair, carded or combed"
  		},
  		{
  			"id": "115106",
  			"id_hs92": "5106",
  			"name": "Non-Retail Carded Wool Yarn"
  		},
  		{
  			"id": "11510610",
  			"id_hs92": "510610",
  			"name": "Yarn of carded wool, >85% wool, not retail"
  		},
  		{
  			"id": "11510620",
  			"id_hs92": "510620",
  			"name": "Yarn of carded, wool, <85% wool, not retail"
  		},
  		{
  			"id": "115107",
  			"id_hs92": "5107",
  			"name": "Non-Retail Combed Wool Yarn"
  		},
  		{
  			"id": "11510710",
  			"id_hs92": "510710",
  			"name": "Yarn of combed wool, >85% wool, not retail"
  		},
  		{
  			"id": "11510720",
  			"id_hs92": "510720",
  			"name": "Yarn of combed wool, <85% wool, not retail"
  		},
  		{
  			"id": "115108",
  			"id_hs92": "5108",
  			"name": "Non-Retail Animal Hair Yarn"
  		},
  		{
  			"id": "11510810",
  			"id_hs92": "510810",
  			"name": "Yarn of carded fine animal hair, not retail"
  		},
  		{
  			"id": "11510820",
  			"id_hs92": "510820",
  			"name": "Yarn of combed fine animal hair, not retail"
  		},
  		{
  			"id": "115109",
  			"id_hs92": "5109",
  			"name": "Retail Wool or Animal Hair Yarn"
  		},
  		{
  			"id": "11510910",
  			"id_hs92": "510910",
  			"name": "Yarn of wool or fine hair, >85% such fibres, retail"
  		},
  		{
  			"id": "11510990",
  			"id_hs92": "510990",
  			"name": "Yarn of wool or fine hair, <85% such fibres, retail"
  		},
  		{
  			"id": "115110",
  			"id_hs92": "5110",
  			"name": "Horsehair Yarn"
  		},
  		{
  			"id": "11511000",
  			"id_hs92": "511000",
  			"name": "Yarn of coarse animal hair or of horsehair"
  		},
  		{
  			"id": "115111",
  			"id_hs92": "5111",
  			"name": "Carded Wool or Animal Hair Fabric"
  		},
  		{
  			"id": "11511111",
  			"id_hs92": "511111",
  			"name": "Woven fabric, >85% carded wool or fine hair, <300 g/m"
  		},
  		{
  			"id": "11511119",
  			"id_hs92": "511119",
  			"name": "Woven fabric, >85% carded wool or fine hair, >300 g/m"
  		},
  		{
  			"id": "11511120",
  			"id_hs92": "511120",
  			"name": "Woven fabric, carded wool or hair + manmade filament"
  		},
  		{
  			"id": "11511130",
  			"id_hs92": "511130",
  			"name": "Woven fabric, carded wool or hair + manmade staple fi"
  		},
  		{
  			"id": "11511190",
  			"id_hs92": "511190",
  			"name": "Woven fabric, carded wool or hair with natural fibre"
  		},
  		{
  			"id": "115112",
  			"id_hs92": "5112",
  			"name": "Combed Wool or Animal Hair Fabric"
  		},
  		{
  			"id": "11511211",
  			"id_hs92": "511211",
  			"name": "Woven fabric, >85% combed wool or fine hair, <300 g/m"
  		},
  		{
  			"id": "11511219",
  			"id_hs92": "511219",
  			"name": "Woven fabric, >85% combed wool or fine hair, >300 g/m"
  		},
  		{
  			"id": "11511220",
  			"id_hs92": "511220",
  			"name": "Woven fabric, combed wool or hair + manmade filament"
  		},
  		{
  			"id": "11511230",
  			"id_hs92": "511230",
  			"name": "Woven fabric, combed wool or hair + manmade staple fi"
  		},
  		{
  			"id": "11511290",
  			"id_hs92": "511290",
  			"name": "Woven fabric, combed wool or hair with natural fibres"
  		},
  		{
  			"id": "115113",
  			"id_hs92": "5113",
  			"name": "Horsehair Fabric"
  		},
  		{
  			"id": "11511300",
  			"id_hs92": "511300",
  			"name": "Woven fabric of coarse animal hair or horse hair"
  		},
  		{
  			"id": "115201",
  			"id_hs92": "5201",
  			"name": "Raw Cotton"
  		},
  		{
  			"id": "11520100",
  			"id_hs92": "520100",
  			"name": "Cotton, not carded or combed"
  		},
  		{
  			"id": "115202",
  			"id_hs92": "5202",
  			"name": "Cotton Waste"
  		},
  		{
  			"id": "11520210",
  			"id_hs92": "520210",
  			"name": "Cotton yarn waste (including thread waste)"
  		},
  		{
  			"id": "11520291",
  			"id_hs92": "520291",
  			"name": "Garnetted stock of cotton"
  		},
  		{
  			"id": "11520299",
  			"id_hs92": "520299",
  			"name": "Cotton waste, except garnetted stock"
  		},
  		{
  			"id": "115203",
  			"id_hs92": "5203",
  			"name": "Prepared Cotton"
  		},
  		{
  			"id": "11520300",
  			"id_hs92": "520300",
  			"name": "Cotton, carded or combed"
  		},
  		{
  			"id": "115204",
  			"id_hs92": "5204",
  			"name": "Cotton Sewing Thread"
  		},
  		{
  			"id": "11520411",
  			"id_hs92": "520411",
  			"name": "Cotton sewing thread >85% cotton, not retail"
  		},
  		{
  			"id": "11520419",
  			"id_hs92": "520419",
  			"name": "Cotton sewing thread, <85% cotton, not retail"
  		},
  		{
  			"id": "11520420",
  			"id_hs92": "520420",
  			"name": "Cotton sewing thread, retail"
  		},
  		{
  			"id": "115205",
  			"id_hs92": "5205",
  			"name": "Non-Retail Pure Cotton Yarn"
  		},
  		{
  			"id": "11520511",
  			"id_hs92": "520511",
  			"name": "Cotton yarn >85% single uncombed >714 dtex,not retail"
  		},
  		{
  			"id": "11520512",
  			"id_hs92": "520512",
  			"name": "Cotton yarn >85% single uncombed 714-232 dtex,not ret"
  		},
  		{
  			"id": "11520513",
  			"id_hs92": "520513",
  			"name": "Cotton yarn >85% single uncombed 232-192 dtex,not ret"
  		},
  		{
  			"id": "11520514",
  			"id_hs92": "520514",
  			"name": "Cotton yarn >85% single uncombed 192-125 dtex,not ret"
  		},
  		{
  			"id": "11520515",
  			"id_hs92": "520515",
  			"name": "Cotton yarn >85% single uncombed <125 dtex, not retai"
  		},
  		{
  			"id": "11520521",
  			"id_hs92": "520521",
  			"name": "Cotton yarn >85% single combed >714dtex, not retail"
  		},
  		{
  			"id": "11520522",
  			"id_hs92": "520522",
  			"name": "Cotton yarn >85% single combed 714-232 dtex,not retai"
  		},
  		{
  			"id": "11520523",
  			"id_hs92": "520523",
  			"name": "Cotton yarn >85% single combed 232-192 dtex,not retai"
  		},
  		{
  			"id": "11520524",
  			"id_hs92": "520524",
  			"name": "Cotton yarn >85% single combed 192-125 dtex, not ret."
  		},
  		{
  			"id": "11520525",
  			"id_hs92": "520525",
  			"name": "Cotton yarn >85% single combed <125 dtex, not retail"
  		},
  		{
  			"id": "11520531",
  			"id_hs92": "520531",
  			"name": "Cotton yarn >85% multiple uncombed >714 dtex, not ret"
  		},
  		{
  			"id": "11520532",
  			"id_hs92": "520532",
  			"name": "Cotton yarn >85% multiple uncomb 714-232 dtex,not ret"
  		},
  		{
  			"id": "11520533",
  			"id_hs92": "520533",
  			"name": "Cotton yarn >85% multiple uncomb 232-192 dtex,not ret"
  		},
  		{
  			"id": "11520534",
  			"id_hs92": "520534",
  			"name": "Cotton yarn >85% multiple uncomb 192-125 dtex,not ret"
  		},
  		{
  			"id": "11520535",
  			"id_hs92": "520535",
  			"name": "Cotton yarn >85% multiple uncombed <125 dtex, not ret"
  		},
  		{
  			"id": "11520541",
  			"id_hs92": "520541",
  			"name": "Cotton yarn >85% multiple combed >714 dtex,not retail"
  		},
  		{
  			"id": "11520542",
  			"id_hs92": "520542",
  			"name": "Cotton yarn >85% multiple combed 714-232 dtex,not ret"
  		},
  		{
  			"id": "11520543",
  			"id_hs92": "520543",
  			"name": "Cotton yarn >85% multiple combed 232-192 dtex,not ret"
  		},
  		{
  			"id": "11520544",
  			"id_hs92": "520544",
  			"name": "Cotton yarn >85% multiple combed 192-125 dtex,not ret"
  		},
  		{
  			"id": "11520545",
  			"id_hs92": "520545",
  			"name": "Cotton yarn >85% multiple combed <125 dtex,not retail"
  		},
  		{
  			"id": "115206",
  			"id_hs92": "5206",
  			"name": "Non-Retail Mixed Cotton Yarn"
  		},
  		{
  			"id": "11520611",
  			"id_hs92": "520611",
  			"name": "Cotton yarn <85% single uncombed >714dtex, not retail"
  		},
  		{
  			"id": "11520612",
  			"id_hs92": "520612",
  			"name": "Cotton yarn <85% single uncombed 714-232 dtex,not ret"
  		},
  		{
  			"id": "11520613",
  			"id_hs92": "520613",
  			"name": "Cotton yarn <85% single uncombed 232-192 dtex,not ret"
  		},
  		{
  			"id": "11520614",
  			"id_hs92": "520614",
  			"name": "Cotton yarn <85% single uncombed 192-125 dtex,not ret"
  		},
  		{
  			"id": "11520615",
  			"id_hs92": "520615",
  			"name": "Cotton yarn <85% single uncombed <125 dtex, not retai"
  		},
  		{
  			"id": "11520621",
  			"id_hs92": "520621",
  			"name": "Cotton yarn <85% single combed >714 dtex, not retail"
  		},
  		{
  			"id": "11520622",
  			"id_hs92": "520622",
  			"name": "Cotton yarn <85% single combed 714-232 dtex,not retai"
  		},
  		{
  			"id": "11520623",
  			"id_hs92": "520623",
  			"name": "Cotton yarn <85% single combed 232-192 dtex,not retai"
  		},
  		{
  			"id": "11520624",
  			"id_hs92": "520624",
  			"name": "Cotton yarn <85% single combed 192-125 dtex,not retai"
  		},
  		{
  			"id": "11520625",
  			"id_hs92": "520625",
  			"name": "Cotton yarn <85% single combed <125 dtex, not retail"
  		},
  		{
  			"id": "11520631",
  			"id_hs92": "520631",
  			"name": "Cotton yarn <85% multiple uncombed >714, not ret., ne"
  		},
  		{
  			"id": "11520632",
  			"id_hs92": "520632",
  			"name": "Cotton yarn <85% multiple uncomb 714-232 dtex,not ret"
  		},
  		{
  			"id": "11520633",
  			"id_hs92": "520633",
  			"name": "Cotton yarn <85% multiple uncomb 232-192 dtex,not ret"
  		},
  		{
  			"id": "11520634",
  			"id_hs92": "520634",
  			"name": "Cotton yarn <85% multiple uncomb 192-125 dtex,not ret"
  		},
  		{
  			"id": "11520635",
  			"id_hs92": "520635",
  			"name": "Cotton yarn <85% multiple uncombed <125 dtex,not ret."
  		},
  		{
  			"id": "11520641",
  			"id_hs92": "520641",
  			"name": "Cotton yarn <85% multiple combed >714, not retail, ne"
  		},
  		{
  			"id": "11520642",
  			"id_hs92": "520642",
  			"name": "Cotton yarn <85% multiple combed 714-232 dtex,not ret"
  		},
  		{
  			"id": "11520643",
  			"id_hs92": "520643",
  			"name": "Cotton yarn <85% multiple combed 232-192 dtex,not ret"
  		},
  		{
  			"id": "11520644",
  			"id_hs92": "520644",
  			"name": "Cotton yarn <85% multiple combed 192-125 dtex,not ret"
  		},
  		{
  			"id": "11520645",
  			"id_hs92": "520645",
  			"name": "Cotton yarn <85% multiple combed <125 dtex, not retai"
  		},
  		{
  			"id": "115207",
  			"id_hs92": "5207",
  			"name": "Retail Cotton Yarn"
  		},
  		{
  			"id": "11520710",
  			"id_hs92": "520710",
  			"name": "Cotton yarn (except sewing thread) >85% cotton, retai"
  		},
  		{
  			"id": "11520790",
  			"id_hs92": "520790",
  			"name": "Cotton yarn (except sewing thread) <85% cotton, retai"
  		},
  		{
  			"id": "115208",
  			"id_hs92": "5208",
  			"name": "Light Pure Woven Cotton"
  		},
  		{
  			"id": "11520811",
  			"id_hs92": "520811",
  			"name": "Plain weave cotton, >85% <100 g/m2, unbleached"
  		},
  		{
  			"id": "11520812",
  			"id_hs92": "520812",
  			"name": "Plain weave cotton, >85% 100-200g/m2, unbleached"
  		},
  		{
  			"id": "11520813",
  			"id_hs92": "520813",
  			"name": "Twill weave cotton, >85% <200g/m2, unbleached"
  		},
  		{
  			"id": "11520819",
  			"id_hs92": "520819",
  			"name": "Woven cotton nes, >85% <200g/m2, unbleached"
  		},
  		{
  			"id": "11520821",
  			"id_hs92": "520821",
  			"name": "Plain weave cotton, >85% <100 g/m2, bleached"
  		},
  		{
  			"id": "11520822",
  			"id_hs92": "520822",
  			"name": "Plain weave cotton, >85% 100-200g/m2, bleached"
  		},
  		{
  			"id": "11520823",
  			"id_hs92": "520823",
  			"name": "Twill weave cotton, >85% <200g/m2, bleached"
  		},
  		{
  			"id": "11520829",
  			"id_hs92": "520829",
  			"name": "Woven cotton nes, >85% <200g/m2, bleached"
  		},
  		{
  			"id": "11520831",
  			"id_hs92": "520831",
  			"name": "Plain weave cotton, >85% <100 g/m2, dyed"
  		},
  		{
  			"id": "11520832",
  			"id_hs92": "520832",
  			"name": "Plain weave cotton, >85% 100-200g/m2, dyed"
  		},
  		{
  			"id": "11520833",
  			"id_hs92": "520833",
  			"name": "Twill weave cotton, >85% <200g/m2, dyed"
  		},
  		{
  			"id": "11520839",
  			"id_hs92": "520839",
  			"name": "Woven cotton nes, >85% <200g/m2, dyed"
  		},
  		{
  			"id": "11520841",
  			"id_hs92": "520841",
  			"name": "Plain weave cotton, >85% <100 g/m2, yarn dyed"
  		},
  		{
  			"id": "11520842",
  			"id_hs92": "520842",
  			"name": "Plain weave cotton, >85% 100-200g/m2, yarn dyed"
  		},
  		{
  			"id": "11520843",
  			"id_hs92": "520843",
  			"name": "Twill weave cotton, >85% <200g/m2, yarn dyed"
  		},
  		{
  			"id": "11520849",
  			"id_hs92": "520849",
  			"name": "Woven cotton nes, >85% <200g/m2, yarn dyed"
  		},
  		{
  			"id": "11520851",
  			"id_hs92": "520851",
  			"name": "Plain weave cotton, >85% <100 g/m2, printed"
  		},
  		{
  			"id": "11520852",
  			"id_hs92": "520852",
  			"name": "Plain weave cotton, >85% 100-200g/m2, printed"
  		},
  		{
  			"id": "11520853",
  			"id_hs92": "520853",
  			"name": "Twill weave cotton, >85% <200g/m2, printed"
  		},
  		{
  			"id": "11520859",
  			"id_hs92": "520859",
  			"name": "Woven cotton nes, >85% <200g/m2, printed"
  		},
  		{
  			"id": "115209",
  			"id_hs92": "5209",
  			"name": "Heavy Pure Woven Cotton"
  		},
  		{
  			"id": "11520911",
  			"id_hs92": "520911",
  			"name": "Plain weave cotton, >85% >200g/m2, unbleached"
  		},
  		{
  			"id": "11520912",
  			"id_hs92": "520912",
  			"name": "Twill weave cotton, >85% >200g/m2, unbleached"
  		},
  		{
  			"id": "11520919",
  			"id_hs92": "520919",
  			"name": "Woven cotton nes, >85% >200g/m2, unbleached, nes"
  		},
  		{
  			"id": "11520921",
  			"id_hs92": "520921",
  			"name": "Plain weave cotton, >85% >200g/m2, bleached"
  		},
  		{
  			"id": "11520922",
  			"id_hs92": "520922",
  			"name": "Twill weave cotton, >85% >200g/m2, bleached"
  		},
  		{
  			"id": "11520929",
  			"id_hs92": "520929",
  			"name": "Woven cotton nes, >85% >200g/m2, bleached, nes"
  		},
  		{
  			"id": "11520931",
  			"id_hs92": "520931",
  			"name": "Plain weave cotton, >85% >200g/m2, dyed"
  		},
  		{
  			"id": "11520932",
  			"id_hs92": "520932",
  			"name": "Twill weave cotton, >85% >200g/m2, dyed"
  		},
  		{
  			"id": "11520939",
  			"id_hs92": "520939",
  			"name": "Woven cotton nes, >85% >200g/m2, dyed, nes"
  		},
  		{
  			"id": "11520941",
  			"id_hs92": "520941",
  			"name": "Plain weave cotton, >85% >200g/m2, yarn dyed"
  		},
  		{
  			"id": "11520942",
  			"id_hs92": "520942",
  			"name": "Denim cotton >85% >200g/m2"
  		},
  		{
  			"id": "11520943",
  			"id_hs92": "520943",
  			"name": "Twill cotton except denim, >85% >200g/m2, yarn dyed"
  		},
  		{
  			"id": "11520949",
  			"id_hs92": "520949",
  			"name": "Woven cotton nes, >85% >200g/m2, yarn dyed, nes"
  		},
  		{
  			"id": "11520951",
  			"id_hs92": "520951",
  			"name": "Plain weave cotton, >85% >200g/m2, printed"
  		},
  		{
  			"id": "11520952",
  			"id_hs92": "520952",
  			"name": "Twill weave cotton, >85% >200g/m2, printed"
  		},
  		{
  			"id": "11520959",
  			"id_hs92": "520959",
  			"name": "Woven cotton nes, >85% >200g/m2, printed, nes"
  		},
  		{
  			"id": "115210",
  			"id_hs92": "5210",
  			"name": "Light Mixed Woven Cotton"
  		},
  		{
  			"id": "11521011",
  			"id_hs92": "521011",
  			"name": "Plain weave cotton <85% +manmade fibre <200g unbleach"
  		},
  		{
  			"id": "11521012",
  			"id_hs92": "521012",
  			"name": "Twill weave cotton <85% +manmade fibre <200g unbleach"
  		},
  		{
  			"id": "11521019",
  			"id_hs92": "521019",
  			"name": "Woven cotton nes <85% +manmade fibre <200g, unbleache"
  		},
  		{
  			"id": "11521021",
  			"id_hs92": "521021",
  			"name": "Plain weave cotton <85% +manmade fibre, <200g bleache"
  		},
  		{
  			"id": "11521022",
  			"id_hs92": "521022",
  			"name": "Twill weave cotton <85% +manmade fibre, <200g bleache"
  		},
  		{
  			"id": "11521029",
  			"id_hs92": "521029",
  			"name": "Woven cotton nes, <85% +manmade fibre, <200g bleached"
  		},
  		{
  			"id": "11521031",
  			"id_hs92": "521031",
  			"name": "Plain weave cotton, <85% +manmade fibre, <200g/m2 dye"
  		},
  		{
  			"id": "11521032",
  			"id_hs92": "521032",
  			"name": "Twill weave cotton, <85% +manmade fibre, <200g/m2 dye"
  		},
  		{
  			"id": "11521039",
  			"id_hs92": "521039",
  			"name": "Woven cotton nes, <85% +manmade fibre, <200g/m2 dyed"
  		},
  		{
  			"id": "11521041",
  			"id_hs92": "521041",
  			"name": "Plain weave cotton,<85% +manmade fibre,<200g yarn dye"
  		},
  		{
  			"id": "11521042",
  			"id_hs92": "521042",
  			"name": "Twill cotton , <85% +manmade fibre, <200g/m2 yarn dye"
  		},
  		{
  			"id": "11521049",
  			"id_hs92": "521049",
  			"name": "Woven nes cotton,<85% +manmade fibre, <200g yarn dyed"
  		},
  		{
  			"id": "11521051",
  			"id_hs92": "521051",
  			"name": "Plain weave cotton, <85% +manmade fibre, <200g print"
  		},
  		{
  			"id": "11521052",
  			"id_hs92": "521052",
  			"name": "Twill weave cotton, <85% +manmade fibre, <200g print"
  		},
  		{
  			"id": "11521059",
  			"id_hs92": "521059",
  			"name": "Woven cotton nes, <85% +manmade fibre, <200g/m2 print"
  		},
  		{
  			"id": "115211",
  			"id_hs92": "5211",
  			"name": "Heavy Mixed Woven Cotton"
  		},
  		{
  			"id": "11521111",
  			"id_hs92": "521111",
  			"name": "Plain weave cotton, <85% +manmade fibre, >200g/m2 unb"
  		},
  		{
  			"id": "11521112",
  			"id_hs92": "521112",
  			"name": "Twill weave cotton, <85% +manmade fibre, >200g/m2 unb"
  		},
  		{
  			"id": "11521119",
  			"id_hs92": "521119",
  			"name": "Woven cotton nes, <85% +manmade fibre, >200g/m2 unbl"
  		},
  		{
  			"id": "11521121",
  			"id_hs92": "521121",
  			"name": "Plain weave cotton <85% +manmade fibre >200g bleached"
  		},
  		{
  			"id": "11521122",
  			"id_hs92": "521122",
  			"name": "Twill weave cotton <85% +manmade fibre >200g bleached"
  		},
  		{
  			"id": "11521129",
  			"id_hs92": "521129",
  			"name": "Woven cotton nes, <85% +manmade fibre, >200g, bleache"
  		},
  		{
  			"id": "11521131",
  			"id_hs92": "521131",
  			"name": "Plain weave cotton, <85% +manmade fibre, >200g, dyed"
  		},
  		{
  			"id": "11521132",
  			"id_hs92": "521132",
  			"name": "Twill weave cotton, <85% +manmade fibre, >200g, dyed"
  		},
  		{
  			"id": "11521139",
  			"id_hs92": "521139",
  			"name": "Woven cotton nes, <85% +manmade fibre, >200g/m2, dyed"
  		},
  		{
  			"id": "11521141",
  			"id_hs92": "521141",
  			"name": "Plain weave cotton,<85% +manmade fibre,>200g,yarn dye"
  		},
  		{
  			"id": "11521142",
  			"id_hs92": "521142",
  			"name": "Denim cotton nes, <85% +manmade fibre, >200g/m2"
  		},
  		{
  			"id": "11521143",
  			"id_hs92": "521143",
  			"name": "Twill cotton not denim<85% +manmade fibre,>200g y-dye"
  		},
  		{
  			"id": "11521149",
  			"id_hs92": "521149",
  			"name": "Woven cotton nes, <85% +manmade fibre, >200g,yarn dye"
  		},
  		{
  			"id": "11521151",
  			"id_hs92": "521151",
  			"name": "Plain weave cotton , <85% +manmade fibre, >200g, prin"
  		},
  		{
  			"id": "11521152",
  			"id_hs92": "521152",
  			"name": "Twill weave cotton , <85% +manmade fibre, >200g, prin"
  		},
  		{
  			"id": "11521159",
  			"id_hs92": "521159",
  			"name": "Woven cotton nes, <85% +manmade fibre, >200g, printed"
  		},
  		{
  			"id": "115212",
  			"id_hs92": "5212",
  			"name": "Other Cotton Fabrics"
  		},
  		{
  			"id": "11521211",
  			"id_hs92": "521211",
  			"name": "Woven cotton fabric, > 200g/m2, unbleached, nes"
  		},
  		{
  			"id": "11521212",
  			"id_hs92": "521212",
  			"name": "Woven cotton fabric, > 200g/m2, bleached, nes"
  		},
  		{
  			"id": "11521213",
  			"id_hs92": "521213",
  			"name": "Woven cotton fabric, > 200g/m2, dyed, nes"
  		},
  		{
  			"id": "11521214",
  			"id_hs92": "521214",
  			"name": "Woven cotton fabric, < 200g/m2, yarns mixed colours"
  		},
  		{
  			"id": "11521215",
  			"id_hs92": "521215",
  			"name": "Woven cotton fabric, > 200g/m2, printed, nes"
  		},
  		{
  			"id": "11521221",
  			"id_hs92": "521221",
  			"name": "Woven cotton fabric, > 200g/m2, unbleached, nes"
  		},
  		{
  			"id": "11521222",
  			"id_hs92": "521222",
  			"name": "Woven cotton fabric, > 200g/m2, bleached, nes"
  		},
  		{
  			"id": "11521223",
  			"id_hs92": "521223",
  			"name": "Woven cotton fabric, > 200g/m2, dyed, nes"
  		},
  		{
  			"id": "11521224",
  			"id_hs92": "521224",
  			"name": "Woven cotton fabric, > 200g/m2, yarns mixed colours"
  		},
  		{
  			"id": "11521225",
  			"id_hs92": "521225",
  			"name": "Woven cotton fabric, > 200g/m2, printed, nes"
  		},
  		{
  			"id": "115301",
  			"id_hs92": "5301",
  			"name": "Flax Fibers"
  		},
  		{
  			"id": "11530110",
  			"id_hs92": "530110",
  			"name": "Flax fibre, raw or retted"
  		},
  		{
  			"id": "11530121",
  			"id_hs92": "530121",
  			"name": "Flax fibre, broken or scutched"
  		},
  		{
  			"id": "11530129",
  			"id_hs92": "530129",
  			"name": "Flax fibre, otherwise processed but not spun"
  		},
  		{
  			"id": "11530130",
  			"id_hs92": "530130",
  			"name": "Flax tow, waste including yarn waste, garnetted stock"
  		},
  		{
  			"id": "115302",
  			"id_hs92": "5302",
  			"name": "Hemp Fibers"
  		},
  		{
  			"id": "11530210",
  			"id_hs92": "530210",
  			"name": "True hemp fibre, raw or retted"
  		},
  		{
  			"id": "11530290",
  			"id_hs92": "530290",
  			"name": "True hemp fibre otherwise processed but not spun"
  		},
  		{
  			"id": "115303",
  			"id_hs92": "5303",
  			"name": "Jute and Other Textile Fibers"
  		},
  		{
  			"id": "11530310",
  			"id_hs92": "530310",
  			"name": "Jute and other textile bast fibres, raw or retted"
  		},
  		{
  			"id": "11530390",
  			"id_hs92": "530390",
  			"name": "Jute and other bast fibres, not spun, nes, tow, waste"
  		},
  		{
  			"id": "115304",
  			"id_hs92": "5304",
  			"name": "Agave"
  		},
  		{
  			"id": "11530410",
  			"id_hs92": "530410",
  			"name": "Sisal and Agave, raw"
  		},
  		{
  			"id": "11530490",
  			"id_hs92": "530490",
  			"name": "Sisal and Agave, processed but not spun, tow & waste"
  		},
  		{
  			"id": "115305",
  			"id_hs92": "5305",
  			"name": "Coconut and Other Vegetable Fibers"
  		},
  		{
  			"id": "11530511",
  			"id_hs92": "530511",
  			"name": "Coconut (coir) fibre, raw"
  		},
  		{
  			"id": "11530519",
  			"id_hs92": "530519",
  			"name": "Coconut (coir) fibre,processed not spun, tow & waste"
  		},
  		{
  			"id": "11530521",
  			"id_hs92": "530521",
  			"name": "Abaca fibre, raw"
  		},
  		{
  			"id": "11530529",
  			"id_hs92": "530529",
  			"name": "Abaca fibre, processed but not spun, tow, noils, wast"
  		},
  		{
  			"id": "11530591",
  			"id_hs92": "530591",
  			"name": "Vegetable textile fibres nes, raw"
  		},
  		{
  			"id": "11530599",
  			"id_hs92": "530599",
  			"name": "Vegetable fibre nes, processed not spun, tow & waste"
  		},
  		{
  			"id": "115306",
  			"id_hs92": "5306",
  			"name": "Flax Yarn"
  		},
  		{
  			"id": "11530610",
  			"id_hs92": "530610",
  			"name": "Flax yarn single"
  		},
  		{
  			"id": "11530620",
  			"id_hs92": "530620",
  			"name": "Flax yarn multiple (folded) or cabled"
  		},
  		{
  			"id": "115307",
  			"id_hs92": "5307",
  			"name": "Jute Yarn"
  		},
  		{
  			"id": "11530710",
  			"id_hs92": "530710",
  			"name": "Yarn of jute or textile bast fibres nes, single"
  		},
  		{
  			"id": "11530720",
  			"id_hs92": "530720",
  			"name": "Yarn of jute, textile bast fibre nes, multiple, cable"
  		},
  		{
  			"id": "115308",
  			"id_hs92": "5308",
  			"name": "Other Vegetable Fibers Yarn"
  		},
  		{
  			"id": "11530810",
  			"id_hs92": "530810",
  			"name": "Coir yarn"
  		},
  		{
  			"id": "11530820",
  			"id_hs92": "530820",
  			"name": "True hemp yarn"
  		},
  		{
  			"id": "11530830",
  			"id_hs92": "530830",
  			"name": "Paper yarn"
  		},
  		{
  			"id": "11530890",
  			"id_hs92": "530890",
  			"name": "Yarn of other vegetable textile fibres"
  		},
  		{
  			"id": "115309",
  			"id_hs92": "5309",
  			"name": "Flax Woven Fabric"
  		},
  		{
  			"id": "11530911",
  			"id_hs92": "530911",
  			"name": "Woven fabric, >85% flax, unbleached or bleached"
  		},
  		{
  			"id": "11530919",
  			"id_hs92": "530919",
  			"name": "Woven fabric, >85% flax, except unbleached or bleache"
  		},
  		{
  			"id": "11530921",
  			"id_hs92": "530921",
  			"name": "Woven fabric of flax, <85% flax, unbleached/bleached"
  		},
  		{
  			"id": "11530929",
  			"id_hs92": "530929",
  			"name": "Woven fabric of flax, <85% flax, except unbl/bleached"
  		},
  		{
  			"id": "115310",
  			"id_hs92": "5310",
  			"name": "Jute Woven Fabric"
  		},
  		{
  			"id": "11531010",
  			"id_hs92": "531010",
  			"name": "Woven fabric of jute/bast fibres, unbleached/bleached"
  		},
  		{
  			"id": "11531090",
  			"id_hs92": "531090",
  			"name": "Woven fabric of jute/bast fibre, not unbleach/bleache"
  		},
  		{
  			"id": "115311",
  			"id_hs92": "5311",
  			"name": "Other Vegetable Fibers Fabric"
  		},
  		{
  			"id": "11531100",
  			"id_hs92": "531100",
  			"name": "Woven fabric of other vegetable textile fibre, paper"
  		},
  		{
  			"id": "115401",
  			"id_hs92": "5401",
  			"name": "Artificial Filament Sewing Thread"
  		},
  		{
  			"id": "11540110",
  			"id_hs92": "540110",
  			"name": "Sewing thread of synthetic filaments"
  		},
  		{
  			"id": "11540120",
  			"id_hs92": "540120",
  			"name": "Sewing thread of artificial filaments"
  		},
  		{
  			"id": "115402",
  			"id_hs92": "5402",
  			"name": "Non-Retail Synthetic Filament Yarn"
  		},
  		{
  			"id": "11540210",
  			"id_hs92": "540210",
  			"name": "Hi-ten yarn of nylon, polyamide, not sewing or retail"
  		},
  		{
  			"id": "11540220",
  			"id_hs92": "540220",
  			"name": "Hi-ten yarn, polyester filament, not sewing or retail"
  		},
  		{
  			"id": "11540231",
  			"id_hs92": "540231",
  			"name": "Textured yarn nes, nylon, polyamide <50dtex not retai"
  		},
  		{
  			"id": "11540232",
  			"id_hs92": "540232",
  			"name": "Textured yarn nes, nylon, polyamide >50dtex not retai"
  		},
  		{
  			"id": "11540233",
  			"id_hs92": "540233",
  			"name": "Textured yarn nes, of polyester filaments, not retail"
  		},
  		{
  			"id": "11540239",
  			"id_hs92": "540239",
  			"name": "Textured yarn, synthetic filament, nes, not retail"
  		},
  		{
  			"id": "11540241",
  			"id_hs92": "540241",
  			"name": "Yarn,nylon/polyamide, single untwisted nes, not retai"
  		},
  		{
  			"id": "11540242",
  			"id_hs92": "540242",
  			"name": "Yarn, polyester, part oriented, single, not retail"
  		},
  		{
  			"id": "11540243",
  			"id_hs92": "540243",
  			"name": "Yarn, polyester, single, untwisted nes, not retail"
  		},
  		{
  			"id": "11540249",
  			"id_hs92": "540249",
  			"name": "Yarn, synth filament, single untwisted nes, not retai"
  		},
  		{
  			"id": "11540251",
  			"id_hs92": "540251",
  			"name": "Yarn, nylon, polyamide, single >50 turn/m, not retail"
  		},
  		{
  			"id": "11540252",
  			"id_hs92": "540252",
  			"name": "Yarn, polyester, single, >50 turn/m, not retail"
  		},
  		{
  			"id": "11540259",
  			"id_hs92": "540259",
  			"name": "Yarn synth filament, single, >50 turn/m nes not retai"
  		},
  		{
  			"id": "11540261",
  			"id_hs92": "540261",
  			"name": "Yarn nylon/polyamide filament multiple nes, not retai"
  		},
  		{
  			"id": "11540262",
  			"id_hs92": "540262",
  			"name": "Yarn of polyester filament, multiple, nes, not retail"
  		},
  		{
  			"id": "11540269",
  			"id_hs92": "540269",
  			"name": "Yarn synthetic filament, multiple, nes, not retail"
  		},
  		{
  			"id": "115403",
  			"id_hs92": "5403",
  			"name": "Non-Retail Artificial Filament Yarn"
  		},
  		{
  			"id": "11540310",
  			"id_hs92": "540310",
  			"name": "Hi-ten yarn not sewing, viscose rayon, not retail"
  		},
  		{
  			"id": "11540320",
  			"id_hs92": "540320",
  			"name": "Textured yarn nes, of artificial filaments, not retai"
  		},
  		{
  			"id": "11540331",
  			"id_hs92": "540331",
  			"name": "Yarn of viscose rayon, single untwisted nes not retai"
  		},
  		{
  			"id": "11540332",
  			"id_hs92": "540332",
  			"name": "Yarn, viscose rayon, single >120turn/m nes, not retai"
  		},
  		{
  			"id": "11540333",
  			"id_hs92": "540333",
  			"name": "Yarn of cellulose acetate, single, nes, not retail"
  		},
  		{
  			"id": "11540339",
  			"id_hs92": "540339",
  			"name": "Yarn of artificial filament, single, nes, not retail"
  		},
  		{
  			"id": "11540341",
  			"id_hs92": "540341",
  			"name": "Yarn of viscose rayon, multiple, nes, not retail"
  		},
  		{
  			"id": "11540342",
  			"id_hs92": "540342",
  			"name": "Yarn, cellulose acetate, multiple, nes, not retail"
  		},
  		{
  			"id": "11540349",
  			"id_hs92": "540349",
  			"name": "Yarn of artificial filament, multiple-nes, not retail"
  		},
  		{
  			"id": "115404",
  			"id_hs92": "5404",
  			"name": "Synthetic Monofilament"
  		},
  		{
  			"id": "11540410",
  			"id_hs92": "540410",
  			"name": "Synthetic monofilament, >67 dtex, thickness < 1mm"
  		},
  		{
  			"id": "11540490",
  			"id_hs92": "540490",
  			"name": "Strip, straw, etc. synth textile material,< 5 mm thic"
  		},
  		{
  			"id": "115405",
  			"id_hs92": "5405",
  			"name": "Artificial Monofilament"
  		},
  		{
  			"id": "11540500",
  			"id_hs92": "540500",
  			"name": "Artif monofilament >67dtex t<1mm, strip, straws t<5mm"
  		},
  		{
  			"id": "115406",
  			"id_hs92": "5406",
  			"name": "Retail Artificial Filament Yarn"
  		},
  		{
  			"id": "11540610",
  			"id_hs92": "540610",
  			"name": "Yarn of synthetic filament not sewing thread, retail"
  		},
  		{
  			"id": "11540620",
  			"id_hs92": "540620",
  			"name": "Yarn of artificial filament not sewing thread, retail"
  		},
  		{
  			"id": "115407",
  			"id_hs92": "5407",
  			"name": "Synthetic Filament Yarn Woven Fabric"
  		},
  		{
  			"id": "11540710",
  			"id_hs92": "540710",
  			"name": "Woven hi-ten filament, nylon, polyamide or polyester"
  		},
  		{
  			"id": "11540720",
  			"id_hs92": "540720",
  			"name": "Woven fabric of strip etc, synthetic textile material"
  		},
  		{
  			"id": "11540730",
  			"id_hs92": "540730",
  			"name": "Fabric from layers of woven synthetic filament yarns"
  		},
  		{
  			"id": "11540741",
  			"id_hs92": "540741",
  			"name": "Woven fabric >85% nylon, polyamide, unbl/bleached,nes"
  		},
  		{
  			"id": "11540742",
  			"id_hs92": "540742",
  			"name": "Woven fabric >85% nylon, polyamide, dyed, nes"
  		},
  		{
  			"id": "11540743",
  			"id_hs92": "540743",
  			"name": "Woven fabric >85% nylon, polyamide, yarn dyed,nes"
  		},
  		{
  			"id": "11540744",
  			"id_hs92": "540744",
  			"name": "Woven fabric >85% nylon, polyamide, printed, nes"
  		},
  		{
  			"id": "11540751",
  			"id_hs92": "540751",
  			"name": "Woven fabric >85% textured polyester unbl/bleached,ne"
  		},
  		{
  			"id": "11540752",
  			"id_hs92": "540752",
  			"name": "Woven fabric >85% textured polyester, dyed, nes"
  		},
  		{
  			"id": "11540753",
  			"id_hs92": "540753",
  			"name": "Woven fabric >85% textured polyester, yarn dyed, nes"
  		},
  		{
  			"id": "11540754",
  			"id_hs92": "540754",
  			"name": "Woven fabric >85% textured polyester, printed, nes"
  		},
  		{
  			"id": "11540760",
  			"id_hs92": "540760",
  			"name": "Woven fabric >85% non-textured polyester filament, ne"
  		},
  		{
  			"id": "11540771",
  			"id_hs92": "540771",
  			"name": "Woven fabric >85% synthetic filament, nes"
  		},
  		{
  			"id": "11540772",
  			"id_hs92": "540772",
  			"name": "Woven fabric >85% synthetic filament, dyed, nes"
  		},
  		{
  			"id": "11540773",
  			"id_hs92": "540773",
  			"name": "Woven fabric >85% synthetic filament, yarn dyed, nes"
  		},
  		{
  			"id": "11540774",
  			"id_hs92": "540774",
  			"name": "Woven fabric >85% synthetic filament, printed, nes"
  		},
  		{
  			"id": "11540781",
  			"id_hs92": "540781",
  			"name": "Woven fabric synthetic filament, <85% +cotton, nes"
  		},
  		{
  			"id": "11540782",
  			"id_hs92": "540782",
  			"name": "Woven fabric synthetic filament <85% +cotton, dyed ne"
  		},
  		{
  			"id": "11540783",
  			"id_hs92": "540783",
  			"name": "Woven fabric synthetic filament <85% +cotton, yarn dy"
  		},
  		{
  			"id": "11540784",
  			"id_hs92": "540784",
  			"name": "Woven fabric synthetic filament, <85% +cotton, printe"
  		},
  		{
  			"id": "11540791",
  			"id_hs92": "540791",
  			"name": "Woven fabric synthetic filament nes"
  		},
  		{
  			"id": "11540792",
  			"id_hs92": "540792",
  			"name": "Woven fabric synthetic filament, dyed, nes"
  		},
  		{
  			"id": "11540793",
  			"id_hs92": "540793",
  			"name": "Woven fabric synthetic filament, yarn dyed, nes"
  		},
  		{
  			"id": "11540794",
  			"id_hs92": "540794",
  			"name": "Woven fabric synthetic filament, printed, nes"
  		},
  		{
  			"id": "115408",
  			"id_hs92": "5408",
  			"name": "Artificial Filament Yarn Woven Fabric"
  		},
  		{
  			"id": "11540810",
  			"id_hs92": "540810",
  			"name": "Woven fabric of hi-ten filament yarns of viscose rayo"
  		},
  		{
  			"id": "11540821",
  			"id_hs92": "540821",
  			"name": "Woven fabric >85% artif filament/strip, unbl/blchd ne"
  		},
  		{
  			"id": "11540822",
  			"id_hs92": "540822",
  			"name": "Woven fabric >85% artificial filament/strip, dyed, ne"
  		},
  		{
  			"id": "11540823",
  			"id_hs92": "540823",
  			"name": "Woven fabric >85% artif filament/strip, yarn dyed, ne"
  		},
  		{
  			"id": "11540824",
  			"id_hs92": "540824",
  			"name": "Woven fabric >85% artif filament/strip, printed, nes"
  		},
  		{
  			"id": "11540831",
  			"id_hs92": "540831",
  			"name": "Woven fabric of artif filament, unbl/bleached, nes"
  		},
  		{
  			"id": "11540832",
  			"id_hs92": "540832",
  			"name": "Woven fabric of artificial filament, dyed, nes"
  		},
  		{
  			"id": "11540833",
  			"id_hs92": "540833",
  			"name": "Woven fabric of artificial filament, yarn dyed, nes"
  		},
  		{
  			"id": "11540834",
  			"id_hs92": "540834",
  			"name": "Woven fabric of artificial filament, printed, nes"
  		},
  		{
  			"id": "115501",
  			"id_hs92": "5501",
  			"name": "Synthetic Filament Tow"
  		},
  		{
  			"id": "11550110",
  			"id_hs92": "550110",
  			"name": "Filament tow of nylon, polyamides"
  		},
  		{
  			"id": "11550120",
  			"id_hs92": "550120",
  			"name": "Filament tow of polyesters"
  		},
  		{
  			"id": "11550130",
  			"id_hs92": "550130",
  			"name": "Filament tow of acrylic or modacrylic"
  		},
  		{
  			"id": "11550190",
  			"id_hs92": "550190",
  			"name": "Synthetic filament tow, nes"
  		},
  		{
  			"id": "115502",
  			"id_hs92": "5502",
  			"name": "Artificial Filament Tow"
  		},
  		{
  			"id": "11550200",
  			"id_hs92": "550200",
  			"name": "Artificial filament tow"
  		},
  		{
  			"id": "115503",
  			"id_hs92": "5503",
  			"name": "Unprocessed Synthetic Staple Fibers"
  		},
  		{
  			"id": "11550310",
  			"id_hs92": "550310",
  			"name": "Staple fibres of nylon, polyamides, not carded, combe"
  		},
  		{
  			"id": "11550320",
  			"id_hs92": "550320",
  			"name": "Staple fibres of polyesters, not carded or combed"
  		},
  		{
  			"id": "11550330",
  			"id_hs92": "550330",
  			"name": "Staple fibres of acrylic, modacrylic,not carded/combe"
  		},
  		{
  			"id": "11550340",
  			"id_hs92": "550340",
  			"name": "Staple fibres of polypropylene, not carded or combed"
  		},
  		{
  			"id": "11550390",
  			"id_hs92": "550390",
  			"name": "Synthetic staple fibres, not carded or combed nes"
  		},
  		{
  			"id": "115504",
  			"id_hs92": "5504",
  			"name": "Unprocessed Artificial Staple Fibers"
  		},
  		{
  			"id": "11550410",
  			"id_hs92": "550410",
  			"name": "Staple fibres of viscose rayon, not carded or combed"
  		},
  		{
  			"id": "11550490",
  			"id_hs92": "550490",
  			"name": "Artif staple fibres, except rayon,not carded or combe"
  		},
  		{
  			"id": "115505",
  			"id_hs92": "5505",
  			"name": "Artificial Fibers Waste"
  		},
  		{
  			"id": "11550510",
  			"id_hs92": "550510",
  			"name": "Waste of synthetic fibres"
  		},
  		{
  			"id": "11550520",
  			"id_hs92": "550520",
  			"name": "Waste of artificial fibres"
  		},
  		{
  			"id": "115506",
  			"id_hs92": "5506",
  			"name": "Processed Synthetic Staple Fibers"
  		},
  		{
  			"id": "11550610",
  			"id_hs92": "550610",
  			"name": "Staple fibres nylon, polyamides, carded or combed"
  		},
  		{
  			"id": "11550620",
  			"id_hs92": "550620",
  			"name": "Staple fibres of polyesters, carded or combed"
  		},
  		{
  			"id": "11550630",
  			"id_hs92": "550630",
  			"name": "Staple fibres of acrylic, modacrylic, carded or combe"
  		},
  		{
  			"id": "11550690",
  			"id_hs92": "550690",
  			"name": "Synthetic staple fibres, carded or combed nes"
  		},
  		{
  			"id": "115507",
  			"id_hs92": "5507",
  			"name": "Processed Artificial Staple Fibers"
  		},
  		{
  			"id": "11550700",
  			"id_hs92": "550700",
  			"name": "Artificial staple fibres, carded or combed, not spun"
  		},
  		{
  			"id": "115508",
  			"id_hs92": "5508",
  			"name": "Non-Retail Artificial Staple Fibers Sewing Thread"
  		},
  		{
  			"id": "11550810",
  			"id_hs92": "550810",
  			"name": "Sewing thread of synthetic staple fibres"
  		},
  		{
  			"id": "11550820",
  			"id_hs92": "550820",
  			"name": "Sewing thread of artificial staple fibres"
  		},
  		{
  			"id": "115509",
  			"id_hs92": "5509",
  			"name": "Non-Retail Synthetic Staple Fibers Yarn"
  		},
  		{
  			"id": "11550911",
  			"id_hs92": "550911",
  			"name": "Yarn >85% nylon, etc staple fibres, single, not retai"
  		},
  		{
  			"id": "11550912",
  			"id_hs92": "550912",
  			"name": "Yarn >85% nylon, etc staple fibre, multiple,not retai"
  		},
  		{
  			"id": "11550921",
  			"id_hs92": "550921",
  			"name": "Yarn >85% polyester staple fibres, single, not retail"
  		},
  		{
  			"id": "11550922",
  			"id_hs92": "550922",
  			"name": "Yarn >85% polyester staple fibres, multiple,not retai"
  		},
  		{
  			"id": "11550931",
  			"id_hs92": "550931",
  			"name": "Yarn >85% acrylic staple fibres, single, not retail"
  		},
  		{
  			"id": "11550932",
  			"id_hs92": "550932",
  			"name": "Yarn >85% acrylic staple fibres, multiple  not retail"
  		},
  		{
  			"id": "11550941",
  			"id_hs92": "550941",
  			"name": "Yarn >85% other synth staple fibres, single not retai"
  		},
  		{
  			"id": "11550942",
  			"id_hs92": "550942",
  			"name": "Yarn >85% other synth staple fibre multiple not retai"
  		},
  		{
  			"id": "11550951",
  			"id_hs92": "550951",
  			"name": "Yarn of polyester & artif staple fibres, not retail"
  		},
  		{
  			"id": "11550952",
  			"id_hs92": "550952",
  			"name": "Yarn of polyester & wool or hair, not retail, nes"
  		},
  		{
  			"id": "11550953",
  			"id_hs92": "550953",
  			"name": "Yarn of polyester & cotton, not retail, nes"
  		},
  		{
  			"id": "11550959",
  			"id_hs92": "550959",
  			"name": "Yarn of polyester staple fibres, not retail, nes"
  		},
  		{
  			"id": "11550961",
  			"id_hs92": "550961",
  			"name": "Yarn of acrylic staple fibre & wool or hair,not retai"
  		},
  		{
  			"id": "11550962",
  			"id_hs92": "550962",
  			"name": "Yarn of acrylic staple fibres & cotton, not retail"
  		},
  		{
  			"id": "11550969",
  			"id_hs92": "550969",
  			"name": "Yarn of acrylic staple fibres, not retail, nes"
  		},
  		{
  			"id": "11550991",
  			"id_hs92": "550991",
  			"name": "Yarn of other synthetic staple with wool or hair, nes"
  		},
  		{
  			"id": "11550992",
  			"id_hs92": "550992",
  			"name": "Yarn of other synth staple fibres + cotton not retail"
  		},
  		{
  			"id": "11550999",
  			"id_hs92": "550999",
  			"name": "Yarn of other synth staple fibres + cotton not retail"
  		},
  		{
  			"id": "115510",
  			"id_hs92": "5510",
  			"name": "Non-Retail Artificial Staple Fibers Yarn"
  		},
  		{
  			"id": "11551011",
  			"id_hs92": "551011",
  			"name": "Yarn >85% artificial staple fibres, single, not retai"
  		},
  		{
  			"id": "11551012",
  			"id_hs92": "551012",
  			"name": "Yarn >85% artif staple fibres, multiple,not retail,ne"
  		},
  		{
  			"id": "11551020",
  			"id_hs92": "551020",
  			"name": "Yarn of artif staple fibres & wool or hair, not retai"
  		},
  		{
  			"id": "11551030",
  			"id_hs92": "551030",
  			"name": "Yarn of artificial staple fibres & cotton, not retail"
  		},
  		{
  			"id": "11551090",
  			"id_hs92": "551090",
  			"name": "Yarn of artificial staple fibres, not retail, nes"
  		},
  		{
  			"id": "115511",
  			"id_hs92": "5511",
  			"name": "Retail Artificial Staple Fibers Yarn"
  		},
  		{
  			"id": "11551110",
  			"id_hs92": "551110",
  			"name": "Yarn >85% synthetic staple fibres, retail, not sewing"
  		},
  		{
  			"id": "11551120",
  			"id_hs92": "551120",
  			"name": "Yarn <85% synthetic staple fibres, retail not sewing"
  		},
  		{
  			"id": "11551130",
  			"id_hs92": "551130",
  			"name": "Yarn of artificial fibres except sewing thread, retai"
  		},
  		{
  			"id": "115512",
  			"id_hs92": "5512",
  			"name": "Synthetic Fabrics"
  		},
  		{
  			"id": "11551211",
  			"id_hs92": "551211",
  			"name": "Woven fabric >85% polyester staple fibre unbl/bleache"
  		},
  		{
  			"id": "11551219",
  			"id_hs92": "551219",
  			"name": "Woven fabric >85% polyester staple fibres, nes"
  		},
  		{
  			"id": "11551221",
  			"id_hs92": "551221",
  			"name": "Woven fabric >85% acrylic staple fibres, unbl/bleache"
  		},
  		{
  			"id": "11551229",
  			"id_hs92": "551229",
  			"name": "Woven fabric >85% acrylic staple fibres, nes"
  		},
  		{
  			"id": "11551291",
  			"id_hs92": "551291",
  			"name": "Woven fabric >85% synth staple fibre nes unbl/bleache"
  		},
  		{
  			"id": "11551299",
  			"id_hs92": "551299",
  			"name": "Woven fabric >85% synthetic staple fibre nes"
  		},
  		{
  			"id": "115513",
  			"id_hs92": "5513",
  			"name": "Light Synthetic Cotton Fabrics"
  		},
  		{
  			"id": "11551311",
  			"id_hs92": "551311",
  			"name": "Woven plain >85% polyester+cotton, <170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551312",
  			"id_hs92": "551312",
  			"name": "Woven twill >85% polyester+cotton, <170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551313",
  			"id_hs92": "551313",
  			"name": "Wovens nes >85% polyester+cotton, <170g/m2 unbl/blchd"
  		},
  		{
  			"id": "11551319",
  			"id_hs92": "551319",
  			"name": "Woven fabric >85% synth nes+cotton,<170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551321",
  			"id_hs92": "551321",
  			"name": "Woven plain >85% polyester + cotton, <170g/m2 dyed"
  		},
  		{
  			"id": "11551322",
  			"id_hs92": "551322",
  			"name": "Woven twill >85% polyester + cotton, <170g/m2 dyed"
  		},
  		{
  			"id": "11551323",
  			"id_hs92": "551323",
  			"name": "Woven fabric nes>85% polyester + cotton,<170g/m2 dyed"
  		},
  		{
  			"id": "11551329",
  			"id_hs92": "551329",
  			"name": "Woven fabric>85% synthetic nes + cotton, <170g/m2 dye"
  		},
  		{
  			"id": "11551331",
  			"id_hs92": "551331",
  			"name": "Woven plain >85% polyester + cotton,<170g/m2 yarn dye"
  		},
  		{
  			"id": "11551332",
  			"id_hs92": "551332",
  			"name": "Woven twill >85% polyester + cotton,<170g/m2 yarn dye"
  		},
  		{
  			"id": "11551333",
  			"id_hs92": "551333",
  			"name": "Woven nes >85% polyester + cotton, <170g/m2 yarn dyed"
  		},
  		{
  			"id": "11551339",
  			"id_hs92": "551339",
  			"name": "Woven fabric>85% synth nes + cotton,<170g/m2 yarn dye"
  		},
  		{
  			"id": "11551341",
  			"id_hs92": "551341",
  			"name": "Woven plain >85% polyester + cotton, <170g/m2 printed"
  		},
  		{
  			"id": "11551342",
  			"id_hs92": "551342",
  			"name": "Woven twill >85% polyester + cotton, <170g/m2 printed"
  		},
  		{
  			"id": "11551343",
  			"id_hs92": "551343",
  			"name": "Woven nes >85% polyester + cotton, <170g/m2 printed"
  		},
  		{
  			"id": "11551349",
  			"id_hs92": "551349",
  			"name": "Woven fabric>85% synth nes + cotton, <170g/m2 printed"
  		},
  		{
  			"id": "115514",
  			"id_hs92": "5514",
  			"name": "Heavy Synthetic Cotton Fabrics"
  		},
  		{
  			"id": "11551411",
  			"id_hs92": "551411",
  			"name": "Woven plain >85% polyester+cotton, >170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551412",
  			"id_hs92": "551412",
  			"name": "Woven twill >85% polyester+cotton, >170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551413",
  			"id_hs92": "551413",
  			"name": "Woven nes >85% polyester + cotton, >170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551419",
  			"id_hs92": "551419",
  			"name": "Woven fabric>85% synth nes+cotton, >170g/m2 unbl/blch"
  		},
  		{
  			"id": "11551421",
  			"id_hs92": "551421",
  			"name": "Woven plain >85% polyester + cotton, >170g/m2 dyed"
  		},
  		{
  			"id": "11551422",
  			"id_hs92": "551422",
  			"name": "Woven twill >85% polyester + cotton, >170g/m2 dyed"
  		},
  		{
  			"id": "11551423",
  			"id_hs92": "551423",
  			"name": "Woven nes >85% polyester + cotton, >170g/m2 dyed"
  		},
  		{
  			"id": "11551429",
  			"id_hs92": "551429",
  			"name": "Woven fabric>85% synthetic nes + cotton, >170g/m2 dye"
  		},
  		{
  			"id": "11551431",
  			"id_hs92": "551431",
  			"name": "Woven plain >85% polyester + cotton,>170g/m2 yarn dye"
  		},
  		{
  			"id": "11551432",
  			"id_hs92": "551432",
  			"name": "Woven twill >85% polyester + cotton,>170g/m2 yarn dye"
  		},
  		{
  			"id": "11551433",
  			"id_hs92": "551433",
  			"name": "Woven nes >85% polyester + cotton, >170g/m2 yarn dyed"
  		},
  		{
  			"id": "11551439",
  			"id_hs92": "551439",
  			"name": "Woven fabric>85% synth nes + cotton,>170g/m2 yarn dye"
  		},
  		{
  			"id": "11551441",
  			"id_hs92": "551441",
  			"name": "Woven plain >85% polyester + cotton, >170g/m2 printed"
  		},
  		{
  			"id": "11551442",
  			"id_hs92": "551442",
  			"name": "Woven twill >85% polyester + cotton, >170g/m2 printed"
  		},
  		{
  			"id": "11551443",
  			"id_hs92": "551443",
  			"name": "Woven nes >85% polyester + cotton, >170g/m2 printed"
  		},
  		{
  			"id": "11551449",
  			"id_hs92": "551449",
  			"name": "Woven fabric >85% synthetic nes+cotton, >170g/m2 prin"
  		},
  		{
  			"id": "115515",
  			"id_hs92": "5515",
  			"name": "Other Synthetic Fabrics"
  		},
  		{
  			"id": "11551511",
  			"id_hs92": "551511",
  			"name": "Woven fabric polyester + viscose rayon, nes"
  		},
  		{
  			"id": "11551512",
  			"id_hs92": "551512",
  			"name": "Woven fabric polyester + manmade filament, nes"
  		},
  		{
  			"id": "11551513",
  			"id_hs92": "551513",
  			"name": "Woven fabric polyester + wool or hair, nes"
  		},
  		{
  			"id": "11551519",
  			"id_hs92": "551519",
  			"name": "Woven fabric polyester staple fibres, nes"
  		},
  		{
  			"id": "11551521",
  			"id_hs92": "551521",
  			"name": "Woven fabric acrylics + manmade filament, nes"
  		},
  		{
  			"id": "11551522",
  			"id_hs92": "551522",
  			"name": "Woven fabric acrylics + wool or hair, nes"
  		},
  		{
  			"id": "11551529",
  			"id_hs92": "551529",
  			"name": "Woven fabric acrylic or modacrylic staple fibres, nes"
  		},
  		{
  			"id": "11551591",
  			"id_hs92": "551591",
  			"name": "Woven fabric synthetic staple fibre with manmade, nes"
  		},
  		{
  			"id": "11551592",
  			"id_hs92": "551592",
  			"name": "Woven fabric synthetic staple with wool or hair nes"
  		},
  		{
  			"id": "11551599",
  			"id_hs92": "551599",
  			"name": "Woven fabric synthetic staple fibres, nes"
  		},
  		{
  			"id": "115516",
  			"id_hs92": "5516",
  			"name": "Woven Fabric of Synthetic Staple Fibers"
  		},
  		{
  			"id": "11551611",
  			"id_hs92": "551611",
  			"name": "Woven fabric <85% artif staple fibres, unbl/bleached"
  		},
  		{
  			"id": "11551612",
  			"id_hs92": "551612",
  			"name": "Woven fabric <85% artificial staple fibres, dyed"
  		},
  		{
  			"id": "11551613",
  			"id_hs92": "551613",
  			"name": "Woven fabric <85% artificial staple fibre, yarn dyed"
  		},
  		{
  			"id": "11551614",
  			"id_hs92": "551614",
  			"name": "Woven fabric <85% artificial staple fibres, printed"
  		},
  		{
  			"id": "11551621",
  			"id_hs92": "551621",
  			"name": "Woven fabric <85% artif staple + manmade fibre unbl/b"
  		},
  		{
  			"id": "11551622",
  			"id_hs92": "551622",
  			"name": "Woven fabric <85% artificial staple+manmade fibre dye"
  		},
  		{
  			"id": "11551623",
  			"id_hs92": "551623",
  			"name": "Woven fabric <85% artif staple + manmade fil yarn dye"
  		},
  		{
  			"id": "11551624",
  			"id_hs92": "551624",
  			"name": "Woven fabric <85% artif staple + manmade fil, printed"
  		},
  		{
  			"id": "11551631",
  			"id_hs92": "551631",
  			"name": "Woven fabric <85% artif staple+wool/hair,unbl/bleache"
  		},
  		{
  			"id": "11551632",
  			"id_hs92": "551632",
  			"name": "Woven fabric <85% artificial staple+wool or hair, dye"
  		},
  		{
  			"id": "11551633",
  			"id_hs92": "551633",
  			"name": "Woven fabric <85% artif staple+wool or hair, yarn dye"
  		},
  		{
  			"id": "11551634",
  			"id_hs92": "551634",
  			"name": "Woven fabric <85% artificial staple+wool/hair, printe"
  		},
  		{
  			"id": "11551641",
  			"id_hs92": "551641",
  			"name": "Woven fabric <85% artif staple+cotton, unbl/bleached"
  		},
  		{
  			"id": "11551642",
  			"id_hs92": "551642",
  			"name": "Woven fabric <85% artificial staple+cotton, dyed"
  		},
  		{
  			"id": "11551643",
  			"id_hs92": "551643",
  			"name": "Woven fabric <85% artificial staple+cotton, yarn dyed"
  		},
  		{
  			"id": "11551644",
  			"id_hs92": "551644",
  			"name": "Woven fabric <85% artificial staple+cotton, printed"
  		},
  		{
  			"id": "11551691",
  			"id_hs92": "551691",
  			"name": "Woven fabric <85% artif staples, unbl/bleached, nes"
  		},
  		{
  			"id": "11551692",
  			"id_hs92": "551692",
  			"name": "Woven fabric <85% artificial staples, dyed, nes"
  		},
  		{
  			"id": "11551693",
  			"id_hs92": "551693",
  			"name": "Woven fabric <85% artificial staples, yarn dyed, nes"
  		},
  		{
  			"id": "11551694",
  			"id_hs92": "551694",
  			"name": "Woven fabric <85% artificial staples, printed, nes"
  		},
  		{
  			"id": "115601",
  			"id_hs92": "5601",
  			"name": "Wadding"
  		},
  		{
  			"id": "11560110",
  			"id_hs92": "560110",
  			"name": "Sanitary towels, diapers and similar articles"
  		},
  		{
  			"id": "11560121",
  			"id_hs92": "560121",
  			"name": "Wadding, products, of cotton, except sanitary article"
  		},
  		{
  			"id": "11560122",
  			"id_hs92": "560122",
  			"name": "Wadding, products, manmade fibres, not sanitary items"
  		},
  		{
  			"id": "11560129",
  			"id_hs92": "560129",
  			"name": "Wadding, products, material nes, not sanitary article"
  		},
  		{
  			"id": "11560130",
  			"id_hs92": "560130",
  			"name": "Textile flock, dust or mill neps"
  		},
  		{
  			"id": "115602",
  			"id_hs92": "5602",
  			"name": "Felt"
  		},
  		{
  			"id": "11560210",
  			"id_hs92": "560210",
  			"name": "Needleloom felt and stitch-bonded fibre fabric"
  		},
  		{
  			"id": "11560221",
  			"id_hs92": "560221",
  			"name": "Felt not needleloom, wool/hair, not impregnated/coate"
  		},
  		{
  			"id": "11560229",
  			"id_hs92": "560229",
  			"name": "Felt, not of wool or hair, not impregnated or coated"
  		},
  		{
  			"id": "11560290",
  			"id_hs92": "560290",
  			"name": "Felt, impregnated, coated, covered, or laminated"
  		},
  		{
  			"id": "115603",
  			"id_hs92": "5603",
  			"name": "Non-woven Textiles"
  		},
  		{
  			"id": "11560300",
  			"id_hs92": "560300",
  			"name": "Nonwovens textiles except felt"
  		},
  		{
  			"id": "115604",
  			"id_hs92": "5604",
  			"name": "Rubber Textiles"
  		},
  		{
  			"id": "11560410",
  			"id_hs92": "560410",
  			"name": "Rubber thread and cord, textile covered"
  		},
  		{
  			"id": "11560420",
  			"id_hs92": "560420",
  			"name": "Hi-ten manmade yarn rubber, plastic coated/impregnate"
  		},
  		{
  			"id": "11560490",
  			"id_hs92": "560490",
  			"name": "Textile yarn/strip, rubber, plastic impregnated/coate"
  		},
  		{
  			"id": "115605",
  			"id_hs92": "5605",
  			"name": "Metallic Yarn"
  		},
  		{
  			"id": "11560500",
  			"id_hs92": "560500",
  			"name": "Metallised yarn"
  		},
  		{
  			"id": "115606",
  			"id_hs92": "5606",
  			"name": "Gimp Yarn"
  		},
  		{
  			"id": "11560600",
  			"id_hs92": "560600",
  			"name": "Chenille, loop whale, gimped (except metallised) yarn"
  		},
  		{
  			"id": "115607",
  			"id_hs92": "5607",
  			"name": "Twine and Rope"
  		},
  		{
  			"id": "11560710",
  			"id_hs92": "560710",
  			"name": "Twine, cordage, ropes and cables, of jute, bast fibre"
  		},
  		{
  			"id": "11560721",
  			"id_hs92": "560721",
  			"name": "Binder or baler twine, of sisal or agave"
  		},
  		{
  			"id": "11560729",
  			"id_hs92": "560729",
  			"name": "Twine nes, cordage, ropes and cables, of sisal"
  		},
  		{
  			"id": "11560730",
  			"id_hs92": "560730",
  			"name": "Twine, cordage, ropes and cables, of abaca etc"
  		},
  		{
  			"id": "11560741",
  			"id_hs92": "560741",
  			"name": "Binder or baler twine, of polyethylene, polypropylene"
  		},
  		{
  			"id": "11560749",
  			"id_hs92": "560749",
  			"name": "Twine nes, cordage, ropes, polyethylene, polypropylen"
  		},
  		{
  			"id": "11560750",
  			"id_hs92": "560750",
  			"name": "Twine, cordage, ropes & cables, other synthetic fibre"
  		},
  		{
  			"id": "11560790",
  			"id_hs92": "560790",
  			"name": "Twine, cordage, ropes and cables, of other materials"
  		},
  		{
  			"id": "115608",
  			"id_hs92": "5608",
  			"name": "Netting"
  		},
  		{
  			"id": "11560811",
  			"id_hs92": "560811",
  			"name": "Made up fishing nets, of manmade textile materials"
  		},
  		{
  			"id": "11560819",
  			"id_hs92": "560819",
  			"name": "Knotted netting, nets not fishing of manmade textiles"
  		},
  		{
  			"id": "11560890",
  			"id_hs92": "560890",
  			"name": "Knotted netting, nets, of of natural materials"
  		},
  		{
  			"id": "115609",
  			"id_hs92": "5609",
  			"name": "Other Articles of Twine and Rope"
  		},
  		{
  			"id": "11560900",
  			"id_hs92": "560900",
  			"name": "Articles of yarn strip, twine, cordage or rope, nes"
  		},
  		{
  			"id": "115701",
  			"id_hs92": "5701",
  			"name": "Knotted Carpets"
  		},
  		{
  			"id": "11570110",
  			"id_hs92": "570110",
  			"name": "Carpets of wool or fine animal hair, knotted"
  		},
  		{
  			"id": "11570190",
  			"id_hs92": "570190",
  			"name": "Carpets of materials nes, knotted"
  		},
  		{
  			"id": "115702",
  			"id_hs92": "5702",
  			"name": "Hand-Woven Rugs"
  		},
  		{
  			"id": "11570210",
  			"id_hs92": "570210",
  			"name": "Hand made rugs including Kelem,Schumacks,Karamanie,et"
  		},
  		{
  			"id": "11570220",
  			"id_hs92": "570220",
  			"name": "Floor coverings of coconut fibres (coir)"
  		},
  		{
  			"id": "11570231",
  			"id_hs92": "570231",
  			"name": "Carpets of wool or hair, woven pile, not made up, nes"
  		},
  		{
  			"id": "11570232",
  			"id_hs92": "570232",
  			"name": "Carpets of manmade yarn, woven pile, not made up, nes"
  		},
  		{
  			"id": "11570239",
  			"id_hs92": "570239",
  			"name": "Carpets of yarn nes, woven pile, not made up, nes"
  		},
  		{
  			"id": "11570241",
  			"id_hs92": "570241",
  			"name": "Carpets of wool or hair, woven pile, made up, nes"
  		},
  		{
  			"id": "11570242",
  			"id_hs92": "570242",
  			"name": "Carpets of manmade yarn, woven pile, made up,nes"
  		},
  		{
  			"id": "11570249",
  			"id_hs92": "570249",
  			"name": "Carpets of yarn nes, woven pile, made up, nes"
  		},
  		{
  			"id": "11570251",
  			"id_hs92": "570251",
  			"name": "Carpets of wool or hair, woven, not made up, nes"
  		},
  		{
  			"id": "11570252",
  			"id_hs92": "570252",
  			"name": "Carpets of manmade yarn, woven, not made up, nes"
  		},
  		{
  			"id": "11570259",
  			"id_hs92": "570259",
  			"name": "Carpets of yarn nes, woven, not made up, nes"
  		},
  		{
  			"id": "11570291",
  			"id_hs92": "570291",
  			"name": "Carpets of wool or fine hair, woven, made up, nes"
  		},
  		{
  			"id": "11570292",
  			"id_hs92": "570292",
  			"name": "Carpets of manmade yarn, woven, made up, nes"
  		},
  		{
  			"id": "11570299",
  			"id_hs92": "570299",
  			"name": "Carpets of yarn nes, woven, made up, nes"
  		},
  		{
  			"id": "115703",
  			"id_hs92": "5703",
  			"name": "Tufted Carpets"
  		},
  		{
  			"id": "11570310",
  			"id_hs92": "570310",
  			"name": "Carpets of wool or fine animal hair, tufted"
  		},
  		{
  			"id": "11570320",
  			"id_hs92": "570320",
  			"name": "Carpets nylon, polyamides, tufted"
  		},
  		{
  			"id": "11570330",
  			"id_hs92": "570330",
  			"name": "Carpets of other manmade textile materials, tufted"
  		},
  		{
  			"id": "11570390",
  			"id_hs92": "570390",
  			"name": "Carpets of materials nes, tufted"
  		},
  		{
  			"id": "115704",
  			"id_hs92": "5704",
  			"name": "Felt Carpets"
  		},
  		{
  			"id": "11570410",
  			"id_hs92": "570410",
  			"name": "Tiles of felt of textile materials, area <0.3 m2"
  		},
  		{
  			"id": "11570490",
  			"id_hs92": "570490",
  			"name": "Carpets of felt of textile materials, > 0.3 m2"
  		},
  		{
  			"id": "115705",
  			"id_hs92": "5705",
  			"name": "Other Carpets"
  		},
  		{
  			"id": "11570500",
  			"id_hs92": "570500",
  			"name": "Carpets and textile floor coverings, nes"
  		},
  		{
  			"id": "115801",
  			"id_hs92": "5801",
  			"name": "Woven Fabrics"
  		},
  		{
  			"id": "11580110",
  			"id_hs92": "580110",
  			"name": "Woven pile fabric of wool or fine animal hair, w >30c"
  		},
  		{
  			"id": "11580121",
  			"id_hs92": "580121",
  			"name": "Woven uncut weft pile cotton fabric not terry, w >30c"
  		},
  		{
  			"id": "11580122",
  			"id_hs92": "580122",
  			"name": "Cut corduroy cotton fabric, width > 30cm"
  		},
  		{
  			"id": "11580123",
  			"id_hs92": "580123",
  			"name": "Woven weft pile cotton fabric, nes, width > 30cm"
  		},
  		{
  			"id": "11580124",
  			"id_hs92": "580124",
  			"name": "Woven warp pile cotton, epingle (uncut),except terry"
  		},
  		{
  			"id": "11580125",
  			"id_hs92": "580125",
  			"name": "Woven warp pile cotton, cut, except terry, w > 30 cm"
  		},
  		{
  			"id": "11580126",
  			"id_hs92": "580126",
  			"name": "Chenille cotton fabric, width > 30 cm"
  		},
  		{
  			"id": "11580131",
  			"id_hs92": "580131",
  			"name": "Woven uncut weft pile fabric of manmade fibre"
  		},
  		{
  			"id": "11580132",
  			"id_hs92": "580132",
  			"name": "Cut corduroy fabric manmade fibre, width > 30 cm"
  		},
  		{
  			"id": "11580133",
  			"id_hs92": "580133",
  			"name": "Woven weft pile fabric manmade fibres, nes"
  		},
  		{
  			"id": "11580134",
  			"id_hs92": "580134",
  			"name": "Woven warp pile fabric manmade fibre, epingle (uncut)"
  		},
  		{
  			"id": "11580135",
  			"id_hs92": "580135",
  			"name": "Woven warp pile fabric manmade fibre, cut, not terry"
  		},
  		{
  			"id": "11580136",
  			"id_hs92": "580136",
  			"name": "Chenille fabric of manmade fibres, except <30cm wide"
  		},
  		{
  			"id": "11580190",
  			"id_hs92": "580190",
  			"name": "Woven pile, chenille fabric of yarn nes, except terry"
  		},
  		{
  			"id": "115802",
  			"id_hs92": "5802",
  			"name": "Terry Fabric"
  		},
  		{
  			"id": "11580211",
  			"id_hs92": "580211",
  			"name": "Terry towelling etc of cotton, not narrow fabric, unb"
  		},
  		{
  			"id": "11580219",
  			"id_hs92": "580219",
  			"name": "Terry towelling etc of cotton nes, width > 30cm"
  		},
  		{
  			"id": "11580220",
  			"id_hs92": "580220",
  			"name": "Terry towelling etc, other than cotton, width > 30 cm"
  		},
  		{
  			"id": "11580230",
  			"id_hs92": "580230",
  			"name": "Tufted textile fabric, except carpets"
  		},
  		{
  			"id": "115803",
  			"id_hs92": "5803",
  			"name": "Gauze"
  		},
  		{
  			"id": "11580310",
  			"id_hs92": "580310",
  			"name": "Cotton gauze > 30 cm wide"
  		},
  		{
  			"id": "11580390",
  			"id_hs92": "580390",
  			"name": "Gauze, except cotton, > 30 cm wide"
  		},
  		{
  			"id": "115804",
  			"id_hs92": "5804",
  			"name": "Tulles and Net Fabric"
  		},
  		{
  			"id": "11580410",
  			"id_hs92": "580410",
  			"name": "Tulles, other nets (not woven, knit or crochet)"
  		},
  		{
  			"id": "11580421",
  			"id_hs92": "580421",
  			"name": "Mechanical lace, manmade fibre (piece, strip, motif)"
  		},
  		{
  			"id": "11580429",
  			"id_hs92": "580429",
  			"name": "Mechanical lace, other material (piece, strip, motif)"
  		},
  		{
  			"id": "11580430",
  			"id_hs92": "580430",
  			"name": "Hand-made lace, in the piece, in strips or in motifs"
  		},
  		{
  			"id": "115805",
  			"id_hs92": "5805",
  			"name": "Hand-Woven Tapestries"
  		},
  		{
  			"id": "11580500",
  			"id_hs92": "580500",
  			"name": "Hand-woven and needle-worked tapestries, kit sets"
  		},
  		{
  			"id": "115806",
  			"id_hs92": "5806",
  			"name": "Narrow Woven Fabric"
  		},
  		{
  			"id": "11580610",
  			"id_hs92": "580610",
  			"name": "Woven pile fabric and narrow chenille fabric"
  		},
  		{
  			"id": "11580620",
  			"id_hs92": "580620",
  			"name": "Woven fabric, elasticised, < 30 cm wide"
  		},
  		{
  			"id": "11580631",
  			"id_hs92": "580631",
  			"name": "Woven cotton fabric, nes, < 30 cm wide"
  		},
  		{
  			"id": "11580632",
  			"id_hs92": "580632",
  			"name": "Woven fabric manmade fibres, nes, < 30 cm wide"
  		},
  		{
  			"id": "11580639",
  			"id_hs92": "580639",
  			"name": "Woven fabric materials nes, < 30 cm wide"
  		},
  		{
  			"id": "11580640",
  			"id_hs92": "580640",
  			"name": "Fabric having warp, no weft, assembled using adhesive"
  		},
  		{
  			"id": "115807",
  			"id_hs92": "5807",
  			"name": "Labels"
  		},
  		{
  			"id": "11580710",
  			"id_hs92": "580710",
  			"name": "Label, badge, etc, of woven textile not embroidered"
  		},
  		{
  			"id": "11580790",
  			"id_hs92": "580790",
  			"name": "Label, badge, etc, non-embroidered textile, not woven"
  		},
  		{
  			"id": "115808",
  			"id_hs92": "5808",
  			"name": "Ornamental Trimmings"
  		},
  		{
  			"id": "11580810",
  			"id_hs92": "580810",
  			"name": "Braids in the piece"
  		},
  		{
  			"id": "11580890",
  			"id_hs92": "580890",
  			"name": "Ornamental trimmings in the piece"
  		},
  		{
  			"id": "115809",
  			"id_hs92": "5809",
  			"name": "Metallic Fabric"
  		},
  		{
  			"id": "11580900",
  			"id_hs92": "580900",
  			"name": "Woven fabric incorporating metal threads, nes"
  		},
  		{
  			"id": "115810",
  			"id_hs92": "5810",
  			"name": "Embroidery"
  		},
  		{
  			"id": "11581010",
  			"id_hs92": "581010",
  			"name": "Embroidery without visible ground"
  		},
  		{
  			"id": "11581091",
  			"id_hs92": "581091",
  			"name": "Embroidery of cotton"
  		},
  		{
  			"id": "11581092",
  			"id_hs92": "581092",
  			"name": "Embroidery of manmade fibres"
  		},
  		{
  			"id": "11581099",
  			"id_hs92": "581099",
  			"name": "Embroidery of natural textile fibres except cotton"
  		},
  		{
  			"id": "115811",
  			"id_hs92": "5811",
  			"name": "Quilted Textiles"
  		},
  		{
  			"id": "11581100",
  			"id_hs92": "581100",
  			"name": "Quilted textile products in piece (not embroidered)"
  		},
  		{
  			"id": "115901",
  			"id_hs92": "5901",
  			"name": "Gum Coated Textile Fabric"
  		},
  		{
  			"id": "11590110",
  			"id_hs92": "590110",
  			"name": "Gum or amylaceous covered textiles for book covers et"
  		},
  		{
  			"id": "11590190",
  			"id_hs92": "590190",
  			"name": "Tracing cloth, painting canvas, stiffened textile nes"
  		},
  		{
  			"id": "115902",
  			"id_hs92": "5902",
  			"name": "Polyamide Fabric"
  		},
  		{
  			"id": "11590210",
  			"id_hs92": "590210",
  			"name": "Tyre cord fabric of nylon, polyamides"
  		},
  		{
  			"id": "11590220",
  			"id_hs92": "590220",
  			"name": "Tyre cord fabric of polyester"
  		},
  		{
  			"id": "11590290",
  			"id_hs92": "590290",
  			"name": "Tyre cord fabric of viscose rayon"
  		},
  		{
  			"id": "115903",
  			"id_hs92": "5903",
  			"name": "Plastic Coated Textile Fabric"
  		},
  		{
  			"id": "11590310",
  			"id_hs92": "590310",
  			"name": "Fabric impregnated, coated, covered with pvc plastic"
  		},
  		{
  			"id": "11590320",
  			"id_hs92": "590320",
  			"name": "Fabric impregnated, coated, covered with polyurethane"
  		},
  		{
  			"id": "11590390",
  			"id_hs92": "590390",
  			"name": "Fabric impregnated, coated, covered with plastic nes"
  		},
  		{
  			"id": "115904",
  			"id_hs92": "5904",
  			"name": "Linoleum"
  		},
  		{
  			"id": "11590410",
  			"id_hs92": "590410",
  			"name": "Linoleum"
  		},
  		{
  			"id": "11590491",
  			"id_hs92": "590491",
  			"name": "Floor covering (not linoleum) with felt,non-woven bas"
  		},
  		{
  			"id": "11590492",
  			"id_hs92": "590492",
  			"name": "Floor covering (not linoleum) with other textile base"
  		},
  		{
  			"id": "115905",
  			"id_hs92": "5905",
  			"name": "Textile Wall Coverings"
  		},
  		{
  			"id": "11590500",
  			"id_hs92": "590500",
  			"name": "Textile wall coverings"
  		},
  		{
  			"id": "115906",
  			"id_hs92": "5906",
  			"name": "Rubber Textile Fabric"
  		},
  		{
  			"id": "11590610",
  			"id_hs92": "590610",
  			"name": "Rubberised textile adhesive tape < 20cm wide"
  		},
  		{
  			"id": "11590691",
  			"id_hs92": "590691",
  			"name": "Rubberised textile knit or crochet fabric"
  		},
  		{
  			"id": "11590699",
  			"id_hs92": "590699",
  			"name": "Rubberised woven textile fabric, except adhesive tape"
  		},
  		{
  			"id": "115907",
  			"id_hs92": "5907",
  			"name": "Coated Textile Fabric"
  		},
  		{
  			"id": "11590700",
  			"id_hs92": "590700",
  			"name": "Textile fabric treated for theatrical backdrops etc"
  		},
  		{
  			"id": "115908",
  			"id_hs92": "5908",
  			"name": "Textile Wicks"
  		},
  		{
  			"id": "11590800",
  			"id_hs92": "590800",
  			"name": "Textile wicks, gas mantles"
  		},
  		{
  			"id": "115909",
  			"id_hs92": "5909",
  			"name": "Hose Piping Textiles"
  		},
  		{
  			"id": "11590900",
  			"id_hs92": "590900",
  			"name": "Textile hosepiping and similar textile tubing"
  		},
  		{
  			"id": "115910",
  			"id_hs92": "5910",
  			"name": "Conveyor Belt Textiles"
  		},
  		{
  			"id": "11591000",
  			"id_hs92": "591000",
  			"name": "Transmission or conveyor belts or belting of textile"
  		},
  		{
  			"id": "115911",
  			"id_hs92": "5911",
  			"name": "Technical Use Textiles"
  		},
  		{
  			"id": "11591110",
  			"id_hs92": "591110",
  			"name": "Textile fabric for card clothing, technical use"
  		},
  		{
  			"id": "11591120",
  			"id_hs92": "591120",
  			"name": "Textile bolting cloth, whether or not made up"
  		},
  		{
  			"id": "11591131",
  			"id_hs92": "591131",
  			"name": "Textile fabric used in paper-making etc, <650 g/m2"
  		},
  		{
  			"id": "11591132",
  			"id_hs92": "591132",
  			"name": "Textile fabric used in paper-making etc, >650 g/m2"
  		},
  		{
  			"id": "11591140",
  			"id_hs92": "591140",
  			"name": "Textile straining cloth used in oil presses etc"
  		},
  		{
  			"id": "11591190",
  			"id_hs92": "591190",
  			"name": "Textile products and articles for technical uses, nes"
  		},
  		{
  			"id": "116001",
  			"id_hs92": "6001",
  			"name": "Pile Fabric"
  		},
  		{
  			"id": "11600110",
  			"id_hs92": "600110",
  			"name": "\"Long pile\"\" knit or crochet textile fabric\""
  		},
  		{
  			"id": "11600121",
  			"id_hs92": "600121",
  			"name": "Looped pile knit or crochet fabric, of cotton"
  		},
  		{
  			"id": "11600122",
  			"id_hs92": "600122",
  			"name": "Looped pile knit or crochet fabric, of manmade fibres"
  		},
  		{
  			"id": "11600129",
  			"id_hs92": "600129",
  			"name": "Loop pile knit/crochet fabric, natural yarn not cotto"
  		},
  		{
  			"id": "11600191",
  			"id_hs92": "600191",
  			"name": "Pile knit or crochet fabric, of cotton, nes"
  		},
  		{
  			"id": "11600192",
  			"id_hs92": "600192",
  			"name": "Pile knit or crochet fabric, of manmade fibres, nes"
  		},
  		{
  			"id": "11600199",
  			"id_hs92": "600199",
  			"name": "Pile knit, crochet fabric, natural yarn not cotton ne"
  		},
  		{
  			"id": "116002",
  			"id_hs92": "6002",
  			"name": "Light Rubberized Knitted Fabric"
  		},
  		{
  			"id": "11600210",
  			"id_hs92": "600210",
  			"name": "Knit or crochet fabric, width <30 cm, >5% elastomer"
  		},
  		{
  			"id": "11600220",
  			"id_hs92": "600220",
  			"name": "Knit, crochet textile fabric, of a width < 30 cm, nes"
  		},
  		{
  			"id": "11600230",
  			"id_hs92": "600230",
  			"name": "Knit or crochet fabric, width > 30 cm, >5% elastomer"
  		},
  		{
  			"id": "11600241",
  			"id_hs92": "600241",
  			"name": "Warp knit fabric of wool or fine animal hair, nes"
  		},
  		{
  			"id": "11600242",
  			"id_hs92": "600242",
  			"name": "Warp knit fabric of cotton, nes"
  		},
  		{
  			"id": "11600243",
  			"id_hs92": "600243",
  			"name": "Warp knit fabric of manmade fibres, nes"
  		},
  		{
  			"id": "11600249",
  			"id_hs92": "600249",
  			"name": "Warp knit fabric of other materials, nes"
  		},
  		{
  			"id": "11600291",
  			"id_hs92": "600291",
  			"name": "Knit, crochet fabric of wool or fine animal hair, nes"
  		},
  		{
  			"id": "11600292",
  			"id_hs92": "600292",
  			"name": "Knit or crochet fabric of cotton, nes"
  		},
  		{
  			"id": "11600293",
  			"id_hs92": "600293",
  			"name": "Knit or crochet fabric of manmade fibres, nes"
  		},
  		{
  			"id": "11600299",
  			"id_hs92": "600299",
  			"name": "Knit or crochet fabric of other materials, nes"
  		},
  		{
  			"id": "116101",
  			"id_hs92": "6101",
  			"name": "Knit Men's Coats"
  		},
  		{
  			"id": "11610110",
  			"id_hs92": "610110",
  			"name": "Mens, boys overcoats, etc, of wool or hair, knit"
  		},
  		{
  			"id": "11610120",
  			"id_hs92": "610120",
  			"name": "Mens, boys overcoats, etc, of cotton, knit"
  		},
  		{
  			"id": "11610130",
  			"id_hs92": "610130",
  			"name": "Mens, boys overcoats, etc, of manmade fibres, knit"
  		},
  		{
  			"id": "11610190",
  			"id_hs92": "610190",
  			"name": "Mens, boys overcoats, etc, of material nes, knit"
  		},
  		{
  			"id": "116102",
  			"id_hs92": "6102",
  			"name": "Knit Women's Coats"
  		},
  		{
  			"id": "11610210",
  			"id_hs92": "610210",
  			"name": "Womens, girls overcoats, etc, of wool or hair, knit"
  		},
  		{
  			"id": "11610220",
  			"id_hs92": "610220",
  			"name": "Womens, girls overcoats, etc, of cotton, knit"
  		},
  		{
  			"id": "11610230",
  			"id_hs92": "610230",
  			"name": "Womens, girls overcoats, etc, manmade fibres, knit"
  		},
  		{
  			"id": "11610290",
  			"id_hs92": "610290",
  			"name": "Womens, girls overcoats, etc, material nes, knit"
  		},
  		{
  			"id": "116103",
  			"id_hs92": "6103",
  			"name": "Knit Men's Suits"
  		},
  		{
  			"id": "11610311",
  			"id_hs92": "610311",
  			"name": "Mens, boys suits, of wool, fine animal hair, knit"
  		},
  		{
  			"id": "11610312",
  			"id_hs92": "610312",
  			"name": "Mens, boys suits, synthetic fibres, knit"
  		},
  		{
  			"id": "11610319",
  			"id_hs92": "610319",
  			"name": "Mens, boys suits, of materials nes, knit"
  		},
  		{
  			"id": "11610321",
  			"id_hs92": "610321",
  			"name": "Mens, boys ensembles, of wool animal hair, knit"
  		},
  		{
  			"id": "11610322",
  			"id_hs92": "610322",
  			"name": "Mens, boys ensembles, of cotton, knit"
  		},
  		{
  			"id": "11610323",
  			"id_hs92": "610323",
  			"name": "Mens, boys ensembles, synthetic fibres, knit"
  		},
  		{
  			"id": "11610329",
  			"id_hs92": "610329",
  			"name": "Mens, boys ensembles, of material nes, knit"
  		},
  		{
  			"id": "11610331",
  			"id_hs92": "610331",
  			"name": "Mens, boys jackets & blazers, wool or hair, knit"
  		},
  		{
  			"id": "11610332",
  			"id_hs92": "610332",
  			"name": "Mens, boys jackets & blazers, cotton, knit"
  		},
  		{
  			"id": "11610333",
  			"id_hs92": "610333",
  			"name": "Mens, boys jackets & blazers, synthetic fibres, knit"
  		},
  		{
  			"id": "11610339",
  			"id_hs92": "610339",
  			"name": "Mens, boys jackets & blazers, material nes, knit"
  		},
  		{
  			"id": "11610341",
  			"id_hs92": "610341",
  			"name": "Mens, boys trousers & shorts, of wool or hair, knit"
  		},
  		{
  			"id": "11610342",
  			"id_hs92": "610342",
  			"name": "Mens, boys trousers & shorts, of cotton, knit"
  		},
  		{
  			"id": "11610343",
  			"id_hs92": "610343",
  			"name": "Mens, boys trousers, shorts, of synthetic fibres, kni"
  		},
  		{
  			"id": "11610349",
  			"id_hs92": "610349",
  			"name": "Mens, boys trousers & shorts, of material nes, knit"
  		},
  		{
  			"id": "116104",
  			"id_hs92": "6104",
  			"name": "Knit Women's Suits"
  		},
  		{
  			"id": "11610411",
  			"id_hs92": "610411",
  			"name": "Womens, girls suits, of wool or hair, knit"
  		},
  		{
  			"id": "11610412",
  			"id_hs92": "610412",
  			"name": "Womens, girls suits, of cotton, knit"
  		},
  		{
  			"id": "11610413",
  			"id_hs92": "610413",
  			"name": "Womens, girls suits, synthetic fibres, knit"
  		},
  		{
  			"id": "11610419",
  			"id_hs92": "610419",
  			"name": "Womens, girls suits, of material nes, knit"
  		},
  		{
  			"id": "11610421",
  			"id_hs92": "610421",
  			"name": "Womens, girls ensembles, of wool or hair, knit"
  		},
  		{
  			"id": "11610422",
  			"id_hs92": "610422",
  			"name": "Womens, girls ensembles, of cotton, knit"
  		},
  		{
  			"id": "11610423",
  			"id_hs92": "610423",
  			"name": "Womens, girls ensembles, synthetic fibres, knit"
  		},
  		{
  			"id": "11610429",
  			"id_hs92": "610429",
  			"name": "Womens, girls ensembles, of material nes, knit"
  		},
  		{
  			"id": "11610431",
  			"id_hs92": "610431",
  			"name": "Womens, girls jackets & blazers, of wool or hair,knit"
  		},
  		{
  			"id": "11610432",
  			"id_hs92": "610432",
  			"name": "Womens, girls jackets & blazers, of cotton, knit"
  		},
  		{
  			"id": "11610433",
  			"id_hs92": "610433",
  			"name": "Womens, girls jackets, blazers, synthetic fibres, kni"
  		},
  		{
  			"id": "11610439",
  			"id_hs92": "610439",
  			"name": "Womens, girls jackets & blazers, material nes, knit"
  		},
  		{
  			"id": "11610441",
  			"id_hs92": "610441",
  			"name": "Womens, girls dresses, of wool or hair, knit"
  		},
  		{
  			"id": "11610442",
  			"id_hs92": "610442",
  			"name": "Womens, girls dresses, of cotton, knit"
  		},
  		{
  			"id": "11610443",
  			"id_hs92": "610443",
  			"name": "Womens, girls dresses, of synthetic fibres, knit"
  		},
  		{
  			"id": "11610444",
  			"id_hs92": "610444",
  			"name": "Womens, girls dresses, of artificial fibres, knit"
  		},
  		{
  			"id": "11610449",
  			"id_hs92": "610449",
  			"name": "Womens, girls dresses, of material nes, knit"
  		},
  		{
  			"id": "11610451",
  			"id_hs92": "610451",
  			"name": "Womens, girls skirts, of wool or hair, knit"
  		},
  		{
  			"id": "11610452",
  			"id_hs92": "610452",
  			"name": "Womens, girls skirts, of cotton, knit"
  		},
  		{
  			"id": "11610453",
  			"id_hs92": "610453",
  			"name": "Womens, girls skirts, synthetic fibres, knit"
  		},
  		{
  			"id": "11610459",
  			"id_hs92": "610459",
  			"name": "Womens, girls skirts, of material nes, knit"
  		},
  		{
  			"id": "11610461",
  			"id_hs92": "610461",
  			"name": "Womens, girls trousers & shorts, of wool hair, knit"
  		},
  		{
  			"id": "11610462",
  			"id_hs92": "610462",
  			"name": "Womens, girls trousers & shorts, of cotton, knit"
  		},
  		{
  			"id": "11610463",
  			"id_hs92": "610463",
  			"name": "Womens, girls trousers, shorts, synthetic fibres, kni"
  		},
  		{
  			"id": "11610469",
  			"id_hs92": "610469",
  			"name": "Womens, girls trousers & shorts, material nes, knit"
  		},
  		{
  			"id": "116105",
  			"id_hs92": "6105",
  			"name": "Knit Men's Shirts"
  		},
  		{
  			"id": "11610510",
  			"id_hs92": "610510",
  			"name": "Mens, boys shirts, of cotton, knit"
  		},
  		{
  			"id": "11610520",
  			"id_hs92": "610520",
  			"name": "Mens, boys shirts, of manmade fibres, knit"
  		},
  		{
  			"id": "11610590",
  			"id_hs92": "610590",
  			"name": "Mens, boys shirts, of materials nes, knit"
  		},
  		{
  			"id": "116106",
  			"id_hs92": "6106",
  			"name": "Knit Women's Shirts"
  		},
  		{
  			"id": "11610610",
  			"id_hs92": "610610",
  			"name": "Womens, girls blouses & shirts, of cotton, knit"
  		},
  		{
  			"id": "11610620",
  			"id_hs92": "610620",
  			"name": "Womens, girls blouses & shirts, manmade fibre, knit"
  		},
  		{
  			"id": "11610690",
  			"id_hs92": "610690",
  			"name": "Womens, girls blouses & shirts, of material nes, knit"
  		},
  		{
  			"id": "116107",
  			"id_hs92": "6107",
  			"name": "Knit Men's Undergarments"
  		},
  		{
  			"id": "11610711",
  			"id_hs92": "610711",
  			"name": "Mens, boys underpants or briefs, of cotton, knit"
  		},
  		{
  			"id": "11610712",
  			"id_hs92": "610712",
  			"name": "Mens, boys underpants or briefs, manmade fibre, knit"
  		},
  		{
  			"id": "11610719",
  			"id_hs92": "610719",
  			"name": "Mens, boys underpants or briefs, material nes, knit"
  		},
  		{
  			"id": "11610721",
  			"id_hs92": "610721",
  			"name": "Mens, boys nightshirts or pyjamas, of cotton, knit"
  		},
  		{
  			"id": "11610722",
  			"id_hs92": "610722",
  			"name": "Mens, boys nightshirts or pyjamas, manmade fibre, kni"
  		},
  		{
  			"id": "11610729",
  			"id_hs92": "610729",
  			"name": "Mens, boys nightshirts or pyjamas, material nes, knit"
  		},
  		{
  			"id": "11610791",
  			"id_hs92": "610791",
  			"name": "Mens, boys bathrobes, dressing gowns etc cotton, knit"
  		},
  		{
  			"id": "11610792",
  			"id_hs92": "610792",
  			"name": "Mens, boys bathrobes, dressing gown manmade fibre kni"
  		},
  		{
  			"id": "11610799",
  			"id_hs92": "610799",
  			"name": "Mens, boys bathrobes, dressing gown etc fibre nes kni"
  		},
  		{
  			"id": "116108",
  			"id_hs92": "6108",
  			"name": "Knit Women's Undergarments"
  		},
  		{
  			"id": "11610811",
  			"id_hs92": "610811",
  			"name": "Womens, girls slips or petticoats, manmade fibre knit"
  		},
  		{
  			"id": "11610819",
  			"id_hs92": "610819",
  			"name": "Womens, girls slips or petticoats, material nes knit"
  		},
  		{
  			"id": "11610821",
  			"id_hs92": "610821",
  			"name": "Womens, girls briefs or panties, of cotton, knit"
  		},
  		{
  			"id": "11610822",
  			"id_hs92": "610822",
  			"name": "Womens, girls briefs or panties, manmade fibre, knit"
  		},
  		{
  			"id": "11610829",
  			"id_hs92": "610829",
  			"name": "Womens, girls briefs or panties, material nes, knit"
  		},
  		{
  			"id": "11610831",
  			"id_hs92": "610831",
  			"name": "Womens, girls nightdress or pyjamas, of cotton, knit"
  		},
  		{
  			"id": "11610832",
  			"id_hs92": "610832",
  			"name": "Womens, girls nightdress or pyjama manmade fibre, kni"
  		},
  		{
  			"id": "11610839",
  			"id_hs92": "610839",
  			"name": "Womens, girls nightdress, pyjamas, material nes, knit"
  		},
  		{
  			"id": "11610891",
  			"id_hs92": "610891",
  			"name": "Womens, girls bathrobe, dressing gowns, of knit cotto"
  		},
  		{
  			"id": "11610892",
  			"id_hs92": "610892",
  			"name": "Women/girl bathrobe, dressing gown, knit manmade fibr"
  		},
  		{
  			"id": "11610899",
  			"id_hs92": "610899",
  			"name": "Womens, girls bathrobe, dressing gowns, nes, knit"
  		},
  		{
  			"id": "116109",
  			"id_hs92": "6109",
  			"name": "Knit T-shirts"
  		},
  		{
  			"id": "11610910",
  			"id_hs92": "610910",
  			"name": "T-shirts, singlets and other vests, of cotton, knit"
  		},
  		{
  			"id": "11610990",
  			"id_hs92": "610990",
  			"name": "T-shirts, singlets etc, of material nes, knit"
  		},
  		{
  			"id": "116110",
  			"id_hs92": "6110",
  			"name": "Knit Sweaters"
  		},
  		{
  			"id": "11611010",
  			"id_hs92": "611010",
  			"name": "Pullovers, cardigans etc of wool or hair, knit"
  		},
  		{
  			"id": "11611020",
  			"id_hs92": "611020",
  			"name": "Pullovers, cardigans etc of cotton, knit"
  		},
  		{
  			"id": "11611030",
  			"id_hs92": "611030",
  			"name": "Pullovers, cardigans etc of manmade fibres, knit"
  		},
  		{
  			"id": "11611090",
  			"id_hs92": "611090",
  			"name": "Pullovers, cardigans etc of material nes knit"
  		},
  		{
  			"id": "116111",
  			"id_hs92": "6111",
  			"name": "Knit Babies' Garments"
  		},
  		{
  			"id": "11611110",
  			"id_hs92": "611110",
  			"name": "Babies garments, accessories of wool or hair, knit"
  		},
  		{
  			"id": "11611120",
  			"id_hs92": "611120",
  			"name": "Babies garments, accessories of cotton, knit"
  		},
  		{
  			"id": "11611130",
  			"id_hs92": "611130",
  			"name": "Babies garments, accessories of synthetic fibres, kni"
  		},
  		{
  			"id": "11611190",
  			"id_hs92": "611190",
  			"name": "Babies garments, accessories of material nes, knit"
  		},
  		{
  			"id": "116112",
  			"id_hs92": "6112",
  			"name": "Knit Active Wear"
  		},
  		{
  			"id": "11611211",
  			"id_hs92": "611211",
  			"name": "Track suits, of cotton, knit"
  		},
  		{
  			"id": "11611212",
  			"id_hs92": "611212",
  			"name": "Track suits, synthetic fibres, knit"
  		},
  		{
  			"id": "11611219",
  			"id_hs92": "611219",
  			"name": "Track suits, of materials nes, knit"
  		},
  		{
  			"id": "11611220",
  			"id_hs92": "611220",
  			"name": "Ski suits, of textile materials, knit"
  		},
  		{
  			"id": "11611231",
  			"id_hs92": "611231",
  			"name": "Mens, boys swimwear, synthetic fibres, knit"
  		},
  		{
  			"id": "11611239",
  			"id_hs92": "611239",
  			"name": "Mens, boys swimwear, of material nes, knit"
  		},
  		{
  			"id": "11611241",
  			"id_hs92": "611241",
  			"name": "Womens, girls swimwear, synthetic fibres, knit"
  		},
  		{
  			"id": "11611249",
  			"id_hs92": "611249",
  			"name": "Womens, girls swimwear, of material nes, knit"
  		},
  		{
  			"id": "116113",
  			"id_hs92": "6113",
  			"name": "Garments of Impregnated Fabric"
  		},
  		{
  			"id": "11611300",
  			"id_hs92": "611300",
  			"name": "Garments of knit or crochet impregnated fabric"
  		},
  		{
  			"id": "116114",
  			"id_hs92": "6114",
  			"name": "Other Knit Garments"
  		},
  		{
  			"id": "11611410",
  			"id_hs92": "611410",
  			"name": "Garments nes, of wool or fine animal hair, knit"
  		},
  		{
  			"id": "11611420",
  			"id_hs92": "611420",
  			"name": "Garments nes, of cotton, knit"
  		},
  		{
  			"id": "11611430",
  			"id_hs92": "611430",
  			"name": "Garments nes, of manmade fibres, knit"
  		},
  		{
  			"id": "11611490",
  			"id_hs92": "611490",
  			"name": "Garments nes, of materials nes, knit"
  		},
  		{
  			"id": "116115",
  			"id_hs92": "6115",
  			"name": "Knit Socks and Hosiery"
  		},
  		{
  			"id": "11611511",
  			"id_hs92": "611511",
  			"name": "Panty hose etc, synthetic fibre yarn <67 dtex/sy, kni"
  		},
  		{
  			"id": "11611512",
  			"id_hs92": "611512",
  			"name": "Panty hose etc, synthetic fibre yarn >67 dtex/sy, kni"
  		},
  		{
  			"id": "11611519",
  			"id_hs92": "611519",
  			"name": "Panty hose etc of materials nes, knit"
  		},
  		{
  			"id": "11611520",
  			"id_hs92": "611520",
  			"name": "Womens full, kneelength hosiery, yarn <67 dtex/sy,kni"
  		},
  		{
  			"id": "11611591",
  			"id_hs92": "611591",
  			"name": "Hosiery nes, of wool or fine animal hair, knit"
  		},
  		{
  			"id": "11611592",
  			"id_hs92": "611592",
  			"name": "Hosiery nes, of cotton, knit"
  		},
  		{
  			"id": "11611593",
  			"id_hs92": "611593",
  			"name": "Hosiery nes, synthetic fibres, knit"
  		},
  		{
  			"id": "11611599",
  			"id_hs92": "611599",
  			"name": "Hosiery nes, of materials nes, knit"
  		},
  		{
  			"id": "116116",
  			"id_hs92": "6116",
  			"name": "Knit Gloves"
  		},
  		{
  			"id": "11611610",
  			"id_hs92": "611610",
  			"name": "Gloves impregnated or coated with plastic,rubber, kni"
  		},
  		{
  			"id": "11611691",
  			"id_hs92": "611691",
  			"name": "Gloves, mittens or mitts, nes, of wool or hair, knit"
  		},
  		{
  			"id": "11611692",
  			"id_hs92": "611692",
  			"name": "Gloves, mittens or mitts, nes, of cotton, knit"
  		},
  		{
  			"id": "11611693",
  			"id_hs92": "611693",
  			"name": "Gloves, mittens or mitts, nes, synthetic fibres, knit"
  		},
  		{
  			"id": "11611699",
  			"id_hs92": "611699",
  			"name": "Gloves, mittens or mitts, nes, material nes knit"
  		},
  		{
  			"id": "116117",
  			"id_hs92": "6117",
  			"name": "Other Knit Clothing Accessories"
  		},
  		{
  			"id": "11611710",
  			"id_hs92": "611710",
  			"name": "Shawls, scarves, veils etc, textile material, knit"
  		},
  		{
  			"id": "11611720",
  			"id_hs92": "611720",
  			"name": "Ties, bow ties and cravats, of textile material, knit"
  		},
  		{
  			"id": "11611780",
  			"id_hs92": "611780",
  			"name": "Clothing accessories nes, of textile material, knit"
  		},
  		{
  			"id": "11611790",
  			"id_hs92": "611790",
  			"name": "Parts of garments, accessories, textile material, kni"
  		},
  		{
  			"id": "116201",
  			"id_hs92": "6201",
  			"name": "Non-Knit Men's Coats"
  		},
  		{
  			"id": "11620111",
  			"id_hs92": "620111",
  			"name": "Mens, boys overcoats of wool or hair, not knit"
  		},
  		{
  			"id": "11620112",
  			"id_hs92": "620112",
  			"name": "Mens, boys overcoats of cotton, not knit"
  		},
  		{
  			"id": "11620113",
  			"id_hs92": "620113",
  			"name": "Mens, boys overcoats of manmade fibres, not knit"
  		},
  		{
  			"id": "11620119",
  			"id_hs92": "620119",
  			"name": "Mens, boys overcoats of material nes, not knit"
  		},
  		{
  			"id": "11620191",
  			"id_hs92": "620191",
  			"name": "Mens, boys anoraks etc, of wool or hair, not knit"
  		},
  		{
  			"id": "11620192",
  			"id_hs92": "620192",
  			"name": "Mens, boys anoraks etc, of cotton, not knit"
  		},
  		{
  			"id": "11620193",
  			"id_hs92": "620193",
  			"name": "Mens, boys anoraks etc, of manmade fibres, not knit"
  		},
  		{
  			"id": "11620199",
  			"id_hs92": "620199",
  			"name": "Mens, boys anoraks etc, of material nes, not knit"
  		},
  		{
  			"id": "116202",
  			"id_hs92": "6202",
  			"name": "Non-Knit Women's Coats"
  		},
  		{
  			"id": "11620211",
  			"id_hs92": "620211",
  			"name": "Womens, girls overcoats etc of wool or hair not knit"
  		},
  		{
  			"id": "11620212",
  			"id_hs92": "620212",
  			"name": "Womens, girls overcoats etc of cotton, not knit"
  		},
  		{
  			"id": "11620213",
  			"id_hs92": "620213",
  			"name": "Womens, girls overcoats etc manmade fibre, not knit"
  		},
  		{
  			"id": "11620219",
  			"id_hs92": "620219",
  			"name": "Womens, girls overcoats of material nes, not knit"
  		},
  		{
  			"id": "11620291",
  			"id_hs92": "620291",
  			"name": "Womens, girls anoraks etc of wool or hair, not knit"
  		},
  		{
  			"id": "11620292",
  			"id_hs92": "620292",
  			"name": "Womens, girls anoraks etc of cotton, not knit"
  		},
  		{
  			"id": "11620293",
  			"id_hs92": "620293",
  			"name": "Womens, girls anoraks etc of manmade fibres, not knit"
  		},
  		{
  			"id": "11620299",
  			"id_hs92": "620299",
  			"name": "Womens, girls anoraks etc of material nes, not knit"
  		},
  		{
  			"id": "116203",
  			"id_hs92": "6203",
  			"name": "Non-Knit Men's Suits"
  		},
  		{
  			"id": "11620311",
  			"id_hs92": "620311",
  			"name": "Mens, boys suits, of wool or hair, not knit"
  		},
  		{
  			"id": "11620312",
  			"id_hs92": "620312",
  			"name": "Mens, boys suits, synthetic fibres, not knit"
  		},
  		{
  			"id": "11620319",
  			"id_hs92": "620319",
  			"name": "Mens, boys suits, of material nes, not knit"
  		},
  		{
  			"id": "11620321",
  			"id_hs92": "620321",
  			"name": "Mens, boys ensembles, of wool or hair, not knit"
  		},
  		{
  			"id": "11620322",
  			"id_hs92": "620322",
  			"name": "Mens, boys ensembles, of cotton, not knit"
  		},
  		{
  			"id": "11620323",
  			"id_hs92": "620323",
  			"name": "Mens, boys ensembles, synthetic fibres, not knit"
  		},
  		{
  			"id": "11620329",
  			"id_hs92": "620329",
  			"name": "Mens, boys ensembles, of material nes, not knit"
  		},
  		{
  			"id": "11620331",
  			"id_hs92": "620331",
  			"name": "Mens, boys jackets & blazers, wool or hair, not knit"
  		},
  		{
  			"id": "11620332",
  			"id_hs92": "620332",
  			"name": "Mens, boys jackets & blazers, of cotton, not knit"
  		},
  		{
  			"id": "11620333",
  			"id_hs92": "620333",
  			"name": "Mens, boys jackets, blazers, synthetic fibre, not kni"
  		},
  		{
  			"id": "11620339",
  			"id_hs92": "620339",
  			"name": "Mens, boys jackets & blazers, material nes, not knit"
  		},
  		{
  			"id": "11620341",
  			"id_hs92": "620341",
  			"name": "Mens, boys trousers & shorts, wool or hair, not knit"
  		},
  		{
  			"id": "11620342",
  			"id_hs92": "620342",
  			"name": "Mens, boys trousers & shorts, of cotton, not knit"
  		},
  		{
  			"id": "11620343",
  			"id_hs92": "620343",
  			"name": "Mens, boys trousers shorts, synthetic fibre, not knit"
  		},
  		{
  			"id": "11620349",
  			"id_hs92": "620349",
  			"name": "Mens, boys trousers & shorts, material nes, not knit"
  		},
  		{
  			"id": "116204",
  			"id_hs92": "6204",
  			"name": "Non-Knit Women's Suits"
  		},
  		{
  			"id": "11620411",
  			"id_hs92": "620411",
  			"name": "Womens, girls suits, of wool or hair, not knit"
  		},
  		{
  			"id": "11620412",
  			"id_hs92": "620412",
  			"name": "Womens, girls suits, of cotton, not knit"
  		},
  		{
  			"id": "11620413",
  			"id_hs92": "620413",
  			"name": "Womens, girls suits, synthetic fibres, not knit"
  		},
  		{
  			"id": "11620419",
  			"id_hs92": "620419",
  			"name": "Womens, girls suits, of material nes, not knit"
  		},
  		{
  			"id": "11620421",
  			"id_hs92": "620421",
  			"name": "Womens, girls ensembles, of wool or hair, not knit"
  		},
  		{
  			"id": "11620422",
  			"id_hs92": "620422",
  			"name": "Womens, girls ensembles, of cotton, not knit"
  		},
  		{
  			"id": "11620423",
  			"id_hs92": "620423",
  			"name": "Womens, girls ensembles, synthetic fibres, not knit"
  		},
  		{
  			"id": "11620429",
  			"id_hs92": "620429",
  			"name": "Womens, girls ensembles, material nes, not knit"
  		},
  		{
  			"id": "11620431",
  			"id_hs92": "620431",
  			"name": "Womens, girls jackets, blazers, wool or hair, not kni"
  		},
  		{
  			"id": "11620432",
  			"id_hs92": "620432",
  			"name": "Womens, girls jackets & blazers, of cotton, not knit"
  		},
  		{
  			"id": "11620433",
  			"id_hs92": "620433",
  			"name": "Womens, girls jackets, blazers, synth fibres, not kni"
  		},
  		{
  			"id": "11620439",
  			"id_hs92": "620439",
  			"name": "Womens, girls jackets & blazers, material nes,not kni"
  		},
  		{
  			"id": "11620441",
  			"id_hs92": "620441",
  			"name": "Womens, girls dresses, of wool or hair, not knit"
  		},
  		{
  			"id": "11620442",
  			"id_hs92": "620442",
  			"name": "Womens, girls dresses, of cotton, not knit"
  		},
  		{
  			"id": "11620443",
  			"id_hs92": "620443",
  			"name": "Womens, girls dresses, synthetic fibres, not knit"
  		},
  		{
  			"id": "11620444",
  			"id_hs92": "620444",
  			"name": "Womens, girls dresses, of artificial fibres, not knit"
  		},
  		{
  			"id": "11620449",
  			"id_hs92": "620449",
  			"name": "Womens, girls dresses, of material nes, not knit"
  		},
  		{
  			"id": "11620451",
  			"id_hs92": "620451",
  			"name": "Womens, girls skirts, of wool or hair, not knit"
  		},
  		{
  			"id": "11620452",
  			"id_hs92": "620452",
  			"name": "Womens, girls skirts, of cotton, not knit"
  		},
  		{
  			"id": "11620453",
  			"id_hs92": "620453",
  			"name": "Womens, girls skirts, synthetic fibres, not knit"
  		},
  		{
  			"id": "11620459",
  			"id_hs92": "620459",
  			"name": "Womens, girls skirts, of material nes, not knit"
  		},
  		{
  			"id": "11620461",
  			"id_hs92": "620461",
  			"name": "Womens, girls trousers, shorts, wool or hair, not kni"
  		},
  		{
  			"id": "11620462",
  			"id_hs92": "620462",
  			"name": "Womens, girls trousers & shorts, of cotton, not knit"
  		},
  		{
  			"id": "11620463",
  			"id_hs92": "620463",
  			"name": "Womens, girls trousers, shorts, synth fibres, not kni"
  		},
  		{
  			"id": "11620469",
  			"id_hs92": "620469",
  			"name": "Womens, girls trousers, shorts, material nes, not kni"
  		},
  		{
  			"id": "116205",
  			"id_hs92": "6205",
  			"name": "Non-Knit Men's Shirts"
  		},
  		{
  			"id": "11620510",
  			"id_hs92": "620510",
  			"name": "Mens, boys shirts, of wool or hair, not knit"
  		},
  		{
  			"id": "11620520",
  			"id_hs92": "620520",
  			"name": "Mens, boys shirts, of cotton, not knit"
  		},
  		{
  			"id": "11620530",
  			"id_hs92": "620530",
  			"name": "Mens, boys shirts, of manmade fibres, not knit"
  		},
  		{
  			"id": "11620590",
  			"id_hs92": "620590",
  			"name": "Mens, boys shirts, of material nes, not knit"
  		},
  		{
  			"id": "116206",
  			"id_hs92": "6206",
  			"name": "Non-Knit Women's Shirts"
  		},
  		{
  			"id": "11620610",
  			"id_hs92": "620610",
  			"name": "Womens, girls blouses & shirts, of silk, not knit"
  		},
  		{
  			"id": "11620620",
  			"id_hs92": "620620",
  			"name": "Womens, girls blouses & shirts, wool or hair, not kni"
  		},
  		{
  			"id": "11620630",
  			"id_hs92": "620630",
  			"name": "Womens, girls blouses & shirts, of cotton, not knit"
  		},
  		{
  			"id": "11620640",
  			"id_hs92": "620640",
  			"name": "Womens, girls blouses, shirts, manmade fibre, not kni"
  		},
  		{
  			"id": "11620690",
  			"id_hs92": "620690",
  			"name": "Womens, girls blouses & shirts, material nes, not kni"
  		},
  		{
  			"id": "116207",
  			"id_hs92": "6207",
  			"name": "Non-Knit Men's Undergarments"
  		},
  		{
  			"id": "11620711",
  			"id_hs92": "620711",
  			"name": "Mens, boys underpants or briefs, of cotton, not knit"
  		},
  		{
  			"id": "11620719",
  			"id_hs92": "620719",
  			"name": "Mens, boys underpants, briefs, material nes, not knit"
  		},
  		{
  			"id": "11620721",
  			"id_hs92": "620721",
  			"name": "Mens, boys nightshirts or pyjamas, cotton, not knit"
  		},
  		{
  			"id": "11620722",
  			"id_hs92": "620722",
  			"name": "Mens/boys nightshirts, pyjama, manmade fibre, not kni"
  		},
  		{
  			"id": "11620729",
  			"id_hs92": "620729",
  			"name": "Mens, boys nightshirt, pyjamas, material nes, not kni"
  		},
  		{
  			"id": "11620791",
  			"id_hs92": "620791",
  			"name": "Mens, boys dressing gowns, etc cotton, not knit"
  		},
  		{
  			"id": "11620792",
  			"id_hs92": "620792",
  			"name": "Mens, boys dressing gowns etc manmade fibre, not knit"
  		},
  		{
  			"id": "11620799",
  			"id_hs92": "620799",
  			"name": "Mens, boys dressing gowns, material nes, not knit"
  		},
  		{
  			"id": "116208",
  			"id_hs92": "6208",
  			"name": "Non-Knit Women's Undergarments"
  		},
  		{
  			"id": "11620811",
  			"id_hs92": "620811",
  			"name": "Womens, girls slips etc, of manmade fibres, not knit"
  		},
  		{
  			"id": "11620819",
  			"id_hs92": "620819",
  			"name": "Womens, girls slips etc, of material nes, not knit"
  		},
  		{
  			"id": "11620821",
  			"id_hs92": "620821",
  			"name": "Womens, girls nightdress, pyjamas, of cotton, not kni"
  		},
  		{
  			"id": "11620822",
  			"id_hs92": "620822",
  			"name": "Women/girl nightdress, pyjama, manmade fibre, not kni"
  		},
  		{
  			"id": "11620829",
  			"id_hs92": "620829",
  			"name": "Womens girls nightdress, pyjama, material nes not kni"
  		},
  		{
  			"id": "11620891",
  			"id_hs92": "620891",
  			"name": "Womens, girls panties, bathrobes etc, cotton, not kni"
  		},
  		{
  			"id": "11620892",
  			"id_hs92": "620892",
  			"name": "Women/girl panties bathrobe etc manmade fibre not kni"
  		},
  		{
  			"id": "11620899",
  			"id_hs92": "620899",
  			"name": "Womens, girls panties, bathrobes, etc, nes not knit"
  		},
  		{
  			"id": "116209",
  			"id_hs92": "6209",
  			"name": "Non-Knit Babies' Garments"
  		},
  		{
  			"id": "11620910",
  			"id_hs92": "620910",
  			"name": "Babies garments, accessories of wool or hair, not kni"
  		},
  		{
  			"id": "11620920",
  			"id_hs92": "620920",
  			"name": "Babies garments, accessories of cotton, not knit"
  		},
  		{
  			"id": "11620930",
  			"id_hs92": "620930",
  			"name": "Babies garments, accessories synthetic fibre, not kni"
  		},
  		{
  			"id": "11620990",
  			"id_hs92": "620990",
  			"name": "Babies garments, accessories of material nes, not kni"
  		},
  		{
  			"id": "116210",
  			"id_hs92": "6210",
  			"name": "Felt or Coated Fabric Garments"
  		},
  		{
  			"id": "11621010",
  			"id_hs92": "621010",
  			"name": "Garments made up of textile felts and nonwoven fabric"
  		},
  		{
  			"id": "11621020",
  			"id_hs92": "621020",
  			"name": "Mens, boys overcoats of impregnated, etc fabric"
  		},
  		{
  			"id": "11621030",
  			"id_hs92": "621030",
  			"name": "Womens, girls overcoats, of impregnated, etc fabric"
  		},
  		{
  			"id": "11621040",
  			"id_hs92": "621040",
  			"name": "Mens, boys garments nes, made up of impregnated fabri"
  		},
  		{
  			"id": "11621050",
  			"id_hs92": "621050",
  			"name": "Womens, girls garments nes, of impregnated fabric"
  		},
  		{
  			"id": "116211",
  			"id_hs92": "6211",
  			"name": "Non-Knit Active Wear"
  		},
  		{
  			"id": "11621111",
  			"id_hs92": "621111",
  			"name": "Mens, boys swimwear, not knit"
  		},
  		{
  			"id": "11621112",
  			"id_hs92": "621112",
  			"name": "Womens, girls swimwear, not knit"
  		},
  		{
  			"id": "11621120",
  			"id_hs92": "621120",
  			"name": "Ski suits, of textile material, not knit"
  		},
  		{
  			"id": "11621131",
  			"id_hs92": "621131",
  			"name": "Mens, boys garments nes, of wool or hair, not knit"
  		},
  		{
  			"id": "11621132",
  			"id_hs92": "621132",
  			"name": "Mens, boys garments nes, of cotton, not knit"
  		},
  		{
  			"id": "11621133",
  			"id_hs92": "621133",
  			"name": "Mens, boys garments nes, of manmade fibres, not knit"
  		},
  		{
  			"id": "11621139",
  			"id_hs92": "621139",
  			"name": "Mens, boys garments nes, of material nes, not knit"
  		},
  		{
  			"id": "11621141",
  			"id_hs92": "621141",
  			"name": "Womens, girls garments nes, of wool or hair, not knit"
  		},
  		{
  			"id": "11621142",
  			"id_hs92": "621142",
  			"name": "Womens, girls garments nes, of cotton, not knit"
  		},
  		{
  			"id": "11621143",
  			"id_hs92": "621143",
  			"name": "Womens, girls garments nes, manmade fibres, not knit"
  		},
  		{
  			"id": "11621149",
  			"id_hs92": "621149",
  			"name": "Womens, girls garments nes, material nes, not knit"
  		},
  		{
  			"id": "116212",
  			"id_hs92": "6212",
  			"name": "Other Women's Undergarments"
  		},
  		{
  			"id": "11621210",
  			"id_hs92": "621210",
  			"name": "Brassieres and parts thereof"
  		},
  		{
  			"id": "11621220",
  			"id_hs92": "621220",
  			"name": "Girdles, panty girdles and parts thereof"
  		},
  		{
  			"id": "11621230",
  			"id_hs92": "621230",
  			"name": "Corselettes and parts thereof"
  		},
  		{
  			"id": "11621290",
  			"id_hs92": "621290",
  			"name": "Corsets, braces and parts thereof"
  		},
  		{
  			"id": "116213",
  			"id_hs92": "6213",
  			"name": "Handkerchiefs"
  		},
  		{
  			"id": "11621310",
  			"id_hs92": "621310",
  			"name": "Handkerchiefs, of silk or silk waste, not knit"
  		},
  		{
  			"id": "11621320",
  			"id_hs92": "621320",
  			"name": "Handkerchiefs, of cotton, not knit"
  		},
  		{
  			"id": "11621390",
  			"id_hs92": "621390",
  			"name": "Handkerchiefs, of material nes, not knit"
  		},
  		{
  			"id": "116214",
  			"id_hs92": "6214",
  			"name": "Scarves"
  		},
  		{
  			"id": "11621410",
  			"id_hs92": "621410",
  			"name": "Shawls, scarves, etc, of silk etc, not knit"
  		},
  		{
  			"id": "11621420",
  			"id_hs92": "621420",
  			"name": "Shawls, scarves, etc, of wool or hair, not knit"
  		},
  		{
  			"id": "11621430",
  			"id_hs92": "621430",
  			"name": "Shawls, scarves, etc, synthetic fibres, not knit"
  		},
  		{
  			"id": "11621440",
  			"id_hs92": "621440",
  			"name": "Shawls, scarves, etc, of artificial fibres, not knit"
  		},
  		{
  			"id": "11621490",
  			"id_hs92": "621490",
  			"name": "Shawls, scarves, etc, of material nes, not knit"
  		},
  		{
  			"id": "116215",
  			"id_hs92": "6215",
  			"name": "Neck Ties"
  		},
  		{
  			"id": "11621510",
  			"id_hs92": "621510",
  			"name": "Ties, bow ties and cravats, of silk, not knit"
  		},
  		{
  			"id": "11621520",
  			"id_hs92": "621520",
  			"name": "Ties, bow ties and cravats, manmade fibres, not knit"
  		},
  		{
  			"id": "11621590",
  			"id_hs92": "621590",
  			"name": "Ties, bow ties and cravats, material nes, not knit"
  		},
  		{
  			"id": "116216",
  			"id_hs92": "6216",
  			"name": "Non-Knit Gloves"
  		},
  		{
  			"id": "11621600",
  			"id_hs92": "621600",
  			"name": "Gloves, mittens and mitts, textile material, not knit"
  		},
  		{
  			"id": "116217",
  			"id_hs92": "6217",
  			"name": "Other Non-Knit Clothing Accessories"
  		},
  		{
  			"id": "11621710",
  			"id_hs92": "621710",
  			"name": "Clothing accessories nes, textile material, not knit"
  		},
  		{
  			"id": "11621790",
  			"id_hs92": "621790",
  			"name": "Parts of garments, clothing accessories nes, not knit"
  		},
  		{
  			"id": "116301",
  			"id_hs92": "6301",
  			"name": "Blankets"
  		},
  		{
  			"id": "11630110",
  			"id_hs92": "630110",
  			"name": "Electric blankets of textile material"
  		},
  		{
  			"id": "11630120",
  			"id_hs92": "630120",
  			"name": "Blankets (non-electric) & travelling rug, wool or hai"
  		},
  		{
  			"id": "11630130",
  			"id_hs92": "630130",
  			"name": "Blankets (non-electric) and travelling rugs, of cotto"
  		},
  		{
  			"id": "11630140",
  			"id_hs92": "630140",
  			"name": "Blankets (except electric) & travel rugs, synth fibre"
  		},
  		{
  			"id": "11630190",
  			"id_hs92": "630190",
  			"name": "Blankets (except electric) & travel rugs, material ne"
  		},
  		{
  			"id": "116302",
  			"id_hs92": "6302",
  			"name": "House Linens"
  		},
  		{
  			"id": "11630210",
  			"id_hs92": "630210",
  			"name": "Bed linen, of textile knit or crochet materials"
  		},
  		{
  			"id": "11630221",
  			"id_hs92": "630221",
  			"name": "Bed linen, of cotton, printed, not knit"
  		},
  		{
  			"id": "11630222",
  			"id_hs92": "630222",
  			"name": "Bed linen, of manmade fibres, printed, not knit"
  		},
  		{
  			"id": "11630229",
  			"id_hs92": "630229",
  			"name": "Bed linen, of material nes, printed, not knit"
  		},
  		{
  			"id": "11630231",
  			"id_hs92": "630231",
  			"name": "Bed linen, of cotton, nes"
  		},
  		{
  			"id": "11630232",
  			"id_hs92": "630232",
  			"name": "Bed linen, of manmade fibres, nes"
  		},
  		{
  			"id": "11630239",
  			"id_hs92": "630239",
  			"name": "Bed linen, of material nes, nes"
  		},
  		{
  			"id": "11630240",
  			"id_hs92": "630240",
  			"name": "Table linen, of textile knit or crochet materials"
  		},
  		{
  			"id": "11630251",
  			"id_hs92": "630251",
  			"name": "Table linen, of cotton, not knit"
  		},
  		{
  			"id": "11630252",
  			"id_hs92": "630252",
  			"name": "Table linen, of flax, not knit"
  		},
  		{
  			"id": "11630253",
  			"id_hs92": "630253",
  			"name": "Table linen, of manmade fibres, not knit"
  		},
  		{
  			"id": "11630259",
  			"id_hs92": "630259",
  			"name": "Table linen, of material nes, not knit"
  		},
  		{
  			"id": "11630260",
  			"id_hs92": "630260",
  			"name": "Toilet or kitchen linen, of cotton terry towelling"
  		},
  		{
  			"id": "11630291",
  			"id_hs92": "630291",
  			"name": "Toilet or kitchen linen, of cotton, nes"
  		},
  		{
  			"id": "11630292",
  			"id_hs92": "630292",
  			"name": "Toilet or kitchen linen, of flax"
  		},
  		{
  			"id": "11630293",
  			"id_hs92": "630293",
  			"name": "Toilet or kitchen linen, of manmade fibres"
  		},
  		{
  			"id": "11630299",
  			"id_hs92": "630299",
  			"name": "Toilet or kitchen linen, of material nes"
  		},
  		{
  			"id": "116303",
  			"id_hs92": "6303",
  			"name": "Window Dressings"
  		},
  		{
  			"id": "11630311",
  			"id_hs92": "630311",
  			"name": "Curtains drapes blinds valances, cotton, knit"
  		},
  		{
  			"id": "11630312",
  			"id_hs92": "630312",
  			"name": "Curtains drapes blinds valances, synthetic fibre, kni"
  		},
  		{
  			"id": "11630319",
  			"id_hs92": "630319",
  			"name": "Curtains drapes blinds valances, material nes, knit"
  		},
  		{
  			"id": "11630391",
  			"id_hs92": "630391",
  			"name": "Curtains drapes blinds valances, cotton, not knit"
  		},
  		{
  			"id": "11630392",
  			"id_hs92": "630392",
  			"name": "Curtains drapes blinds valances, synth fibre, not kni"
  		},
  		{
  			"id": "11630399",
  			"id_hs92": "630399",
  			"name": "Curtains drapes blinds valances, material nes, woven"
  		},
  		{
  			"id": "116304",
  			"id_hs92": "6304",
  			"name": "Bedspreads"
  		},
  		{
  			"id": "11630411",
  			"id_hs92": "630411",
  			"name": "Bedspreads, textile material, nes, knit or crochet"
  		},
  		{
  			"id": "11630419",
  			"id_hs92": "630419",
  			"name": "Bedspreads, textile material, nes, not knit or croche"
  		},
  		{
  			"id": "11630491",
  			"id_hs92": "630491",
  			"name": "Textile furnishing articles nes, knit or crochet"
  		},
  		{
  			"id": "11630492",
  			"id_hs92": "630492",
  			"name": "Furnishing articles nes, of cotton, not knit, crochet"
  		},
  		{
  			"id": "11630493",
  			"id_hs92": "630493",
  			"name": "Furnishing articles nes, synth fibre,not knit, croche"
  		},
  		{
  			"id": "11630499",
  			"id_hs92": "630499",
  			"name": "Furnishing goods nes, material nes, not knit, crochet"
  		},
  		{
  			"id": "116305",
  			"id_hs92": "6305",
  			"name": "Packing Bags"
  		},
  		{
  			"id": "11630510",
  			"id_hs92": "630510",
  			"name": "Sacks & bags, packing, of jute or other bast fibres"
  		},
  		{
  			"id": "11630520",
  			"id_hs92": "630520",
  			"name": "Sacks & bags, packing, of cotton"
  		},
  		{
  			"id": "11630531",
  			"id_hs92": "630531",
  			"name": "Sacks & bags, packing, polyethylene or polypropylene"
  		},
  		{
  			"id": "11630539",
  			"id_hs92": "630539",
  			"name": "Sacks & bags, packing, of other manmade yarn"
  		},
  		{
  			"id": "11630590",
  			"id_hs92": "630590",
  			"name": "Sacks & bags, packing, of materials nes"
  		},
  		{
  			"id": "116306",
  			"id_hs92": "6306",
  			"name": "Awnings, Tents, and Sails "
  		},
  		{
  			"id": "11630611",
  			"id_hs92": "630611",
  			"name": "Tarpaulins, awnings and sunblinds, of cotton"
  		},
  		{
  			"id": "11630612",
  			"id_hs92": "630612",
  			"name": "Tarpaulins, awnings and sunblinds, of synthetic fibre"
  		},
  		{
  			"id": "11630619",
  			"id_hs92": "630619",
  			"name": "Tarpaulins, awnings and sunblinds, of material nes"
  		},
  		{
  			"id": "11630621",
  			"id_hs92": "630621",
  			"name": "Tents, of cotton"
  		},
  		{
  			"id": "11630622",
  			"id_hs92": "630622",
  			"name": "Tents, synthetic fibres"
  		},
  		{
  			"id": "11630629",
  			"id_hs92": "630629",
  			"name": "Tents, of textile material nes"
  		},
  		{
  			"id": "11630631",
  			"id_hs92": "630631",
  			"name": "Sails, synthetic fibres"
  		},
  		{
  			"id": "11630639",
  			"id_hs92": "630639",
  			"name": "Sails, of material nes"
  		},
  		{
  			"id": "11630641",
  			"id_hs92": "630641",
  			"name": "Pneumatic mattresses, of cotton"
  		},
  		{
  			"id": "11630649",
  			"id_hs92": "630649",
  			"name": "Pneumatic mattresses, textile material, not cotton"
  		},
  		{
  			"id": "11630691",
  			"id_hs92": "630691",
  			"name": "Camping goods nes, of cotton"
  		},
  		{
  			"id": "11630699",
  			"id_hs92": "630699",
  			"name": "Camping goods nes, textile material, not cotton"
  		},
  		{
  			"id": "116307",
  			"id_hs92": "6307",
  			"name": "Other Cloth Articles"
  		},
  		{
  			"id": "11630710",
  			"id_hs92": "630710",
  			"name": "Floor & dish cloths, dusters, etc, textile material"
  		},
  		{
  			"id": "11630720",
  			"id_hs92": "630720",
  			"name": "Life jackets and life belts, textile material"
  		},
  		{
  			"id": "11630790",
  			"id_hs92": "630790",
  			"name": "Made up articles (textile) nes, textile dress pattern"
  		},
  		{
  			"id": "116308",
  			"id_hs92": "6308",
  			"name": "Packaged Sewing Sets"
  		},
  		{
  			"id": "11630800",
  			"id_hs92": "630800",
  			"name": "Set, woven fabric and yarn for rugs, tapestry etc"
  		},
  		{
  			"id": "116309",
  			"id_hs92": "6309",
  			"name": "Used Clothing"
  		},
  		{
  			"id": "11630900",
  			"id_hs92": "630900",
  			"name": "Worn clothing and other worn articles"
  		},
  		{
  			"id": "116310",
  			"id_hs92": "6310",
  			"name": "Textile Scraps"
  		},
  		{
  			"id": "11631010",
  			"id_hs92": "631010",
  			"name": "Used or new rags textile material, sorted"
  		},
  		{
  			"id": "11631090",
  			"id_hs92": "631090",
  			"name": "Used or new rags textile material, not sorted"
  		},
  		{
  			"id": "12",
  			"id_hs92": null,
  			"name": "Footwear and Headwear"
  		},
  		{
  			"id": "126401",
  			"id_hs92": "6401",
  			"name": "Waterproof Footwear"
  		},
  		{
  			"id": "12640110",
  			"id_hs92": "640110",
  			"name": "Waterproof footwear (Wellingtons etc), metal toe cap"
  		},
  		{
  			"id": "12640191",
  			"id_hs92": "640191",
  			"name": "Waterproof footwear(Wellington) no toe cap, over knee"
  		},
  		{
  			"id": "12640192",
  			"id_hs92": "640192",
  			"name": "Waterproof footwear(Wellington) no toe cap,over ankle"
  		},
  		{
  			"id": "12640199",
  			"id_hs92": "640199",
  			"name": "Waterproof footwear(Wellington) no toe cap, nes"
  		},
  		{
  			"id": "126402",
  			"id_hs92": "6402",
  			"name": "Rubber Footwear"
  		},
  		{
  			"id": "12640211",
  			"id_hs92": "640211",
  			"name": "Ski-boots etc, outer soles, uppers of rubber, plastic"
  		},
  		{
  			"id": "12640219",
  			"id_hs92": "640219",
  			"name": "Sports footwear nes, soles, uppers of rubber, plastic"
  		},
  		{
  			"id": "12640220",
  			"id_hs92": "640220",
  			"name": "Footwear, rubber, plastic, straps fix to sole by plug"
  		},
  		{
  			"id": "12640230",
  			"id_hs92": "640230",
  			"name": "Footwear, sole/upper rubber/plastic,metal toe-cap nes"
  		},
  		{
  			"id": "12640291",
  			"id_hs92": "640291",
  			"name": "Boots, soles/uppers rubber or plastic, over ankle, ne"
  		},
  		{
  			"id": "12640299",
  			"id_hs92": "640299",
  			"name": "Footwear, outer soles/uppers of rubber or plastic, ne"
  		},
  		{
  			"id": "126403",
  			"id_hs92": "6403",
  			"name": "Leather Footwear"
  		},
  		{
  			"id": "12640311",
  			"id_hs92": "640311",
  			"name": "Ski footwear, with uppers of leather"
  		},
  		{
  			"id": "12640319",
  			"id_hs92": "640319",
  			"name": "Sports footwear, except ski, uppers of leather"
  		},
  		{
  			"id": "12640320",
  			"id_hs92": "640320",
  			"name": "Footwear, soles/uppers leather, strap instep & big to"
  		},
  		{
  			"id": "12640330",
  			"id_hs92": "640330",
  			"name": "Footwear, wood base, uppers leather, no inner sole"
  		},
  		{
  			"id": "12640340",
  			"id_hs92": "640340",
  			"name": "Footwear, uppers of leather with metal toe-cap, nes"
  		},
  		{
  			"id": "12640351",
  			"id_hs92": "640351",
  			"name": "Footwear, soles, uppers of leather, over ankle, nes"
  		},
  		{
  			"id": "12640359",
  			"id_hs92": "640359",
  			"name": "Footwear, outer soles and uppers of leather, nes"
  		},
  		{
  			"id": "12640391",
  			"id_hs92": "640391",
  			"name": "Boots, sole rubber or plastic upper leather, nes"
  		},
  		{
  			"id": "12640399",
  			"id_hs92": "640399",
  			"name": "Footwear, sole rubber, plastics uppers of leather, ne"
  		},
  		{
  			"id": "126404",
  			"id_hs92": "6404",
  			"name": "Textile Footwear"
  		},
  		{
  			"id": "12640411",
  			"id_hs92": "640411",
  			"name": "Sports footwear, sole rubber or plastic, upper textil"
  		},
  		{
  			"id": "12640419",
  			"id_hs92": "640419",
  			"name": "Footwear,sole rubber/plastic,upper textile, not sport"
  		},
  		{
  			"id": "12640420",
  			"id_hs92": "640420",
  			"name": "Footwear, sole leather and uppers textile material"
  		},
  		{
  			"id": "126405",
  			"id_hs92": "6405",
  			"name": "Other Footwear"
  		},
  		{
  			"id": "12640510",
  			"id_hs92": "640510",
  			"name": "Footwear, nes, uppers leather"
  		},
  		{
  			"id": "12640520",
  			"id_hs92": "640520",
  			"name": "Footwear, nes, upper textile material"
  		},
  		{
  			"id": "12640590",
  			"id_hs92": "640590",
  			"name": "Footwear, nes"
  		},
  		{
  			"id": "126406",
  			"id_hs92": "6406",
  			"name": "Footwear Parts"
  		},
  		{
  			"id": "12640610",
  			"id_hs92": "640610",
  			"name": "Footwear uppers and parts thereof, except stiffeners"
  		},
  		{
  			"id": "12640620",
  			"id_hs92": "640620",
  			"name": "Soles and heels for footwear, of rubber or plastic"
  		},
  		{
  			"id": "12640691",
  			"id_hs92": "640691",
  			"name": "Parts of footwear of wood"
  		},
  		{
  			"id": "12640699",
  			"id_hs92": "640699",
  			"name": "Parts of footwear nes, gaiters and leggings etc"
  		},
  		{
  			"id": "126501",
  			"id_hs92": "6501",
  			"name": "Hat Forms"
  		},
  		{
  			"id": "12650100",
  			"id_hs92": "650100",
  			"name": "Hat-forms, etc of felt, not shaped, no formed brim"
  		},
  		{
  			"id": "126502",
  			"id_hs92": "6502",
  			"name": "Hat Shapes"
  		},
  		{
  			"id": "12650200",
  			"id_hs92": "650200",
  			"name": "Hat-forms, strip material, unshaped, no formed brim"
  		},
  		{
  			"id": "126503",
  			"id_hs92": "6503",
  			"name": "Felt Hats"
  		},
  		{
  			"id": "12650300",
  			"id_hs92": "650300",
  			"name": "Felt hats and other felt headgear"
  		},
  		{
  			"id": "126504",
  			"id_hs92": "6504",
  			"name": "Hats"
  		},
  		{
  			"id": "12650400",
  			"id_hs92": "650400",
  			"name": "Hats, plaited or made by assembling strips of materia"
  		},
  		{
  			"id": "126505",
  			"id_hs92": "6505",
  			"name": "Knitted Hats"
  		},
  		{
  			"id": "12650510",
  			"id_hs92": "650510",
  			"name": "Hair-nets of any material"
  		},
  		{
  			"id": "12650590",
  			"id_hs92": "650590",
  			"name": "Hats and other headgear, knit or crochet, nes"
  		},
  		{
  			"id": "126506",
  			"id_hs92": "6506",
  			"name": "Other Headwear"
  		},
  		{
  			"id": "12650610",
  			"id_hs92": "650610",
  			"name": "Safety headgear"
  		},
  		{
  			"id": "12650691",
  			"id_hs92": "650691",
  			"name": "Headgear nes, of rubber or plastic"
  		},
  		{
  			"id": "12650692",
  			"id_hs92": "650692",
  			"name": "Headgear nes, of furskin"
  		},
  		{
  			"id": "12650699",
  			"id_hs92": "650699",
  			"name": "Headgear nes, of other materials"
  		},
  		{
  			"id": "126507",
  			"id_hs92": "6507",
  			"name": "Headbands and Linings"
  		},
  		{
  			"id": "12650700",
  			"id_hs92": "650700",
  			"name": "Parts for hats and headgear"
  		},
  		{
  			"id": "126601",
  			"id_hs92": "6601",
  			"name": "Umbrellas"
  		},
  		{
  			"id": "12660110",
  			"id_hs92": "660110",
  			"name": "Garden and similar umbrellas"
  		},
  		{
  			"id": "12660191",
  			"id_hs92": "660191",
  			"name": "Umbrellas nes, having a telescopic shaft"
  		},
  		{
  			"id": "12660199",
  			"id_hs92": "660199",
  			"name": "Umbrellas nes, not with telescopic shaft"
  		},
  		{
  			"id": "126602",
  			"id_hs92": "6602",
  			"name": "Walking Sticks"
  		},
  		{
  			"id": "12660200",
  			"id_hs92": "660200",
  			"name": "Walking-sticks, seat-sticks, whips, etc."
  		},
  		{
  			"id": "126603",
  			"id_hs92": "6603",
  			"name": "Umbrella and Walking Stick Accessories"
  		},
  		{
  			"id": "12660310",
  			"id_hs92": "660310",
  			"name": "Handles, knobs for umbrellas, walking sticks, etc"
  		},
  		{
  			"id": "12660320",
  			"id_hs92": "660320",
  			"name": "Umbrella frames"
  		},
  		{
  			"id": "12660390",
  			"id_hs92": "660390",
  			"name": "Parts & trimmings, of umbrella, walking sticks, etc"
  		},
  		{
  			"id": "126701",
  			"id_hs92": "6701",
  			"name": "Bird Skins and Feathers"
  		},
  		{
  			"id": "12670100",
  			"id_hs92": "670100",
  			"name": "Bird skins and feathers, articles therefrom"
  		},
  		{
  			"id": "126702",
  			"id_hs92": "6702",
  			"name": "Artificial Vegetation"
  		},
  		{
  			"id": "12670210",
  			"id_hs92": "670210",
  			"name": "Artificial flowers foliage fruit, articles, plastic"
  		},
  		{
  			"id": "12670290",
  			"id_hs92": "670290",
  			"name": "Artificial flowers foliage fruit etc except plastic"
  		},
  		{
  			"id": "126703",
  			"id_hs92": "6703",
  			"name": "Processed Hair"
  		},
  		{
  			"id": "12670300",
  			"id_hs92": "670300",
  			"name": "Worked human hair, wool or animal hair, for wig makin"
  		},
  		{
  			"id": "126704",
  			"id_hs92": "6704",
  			"name": "Fake Hair"
  		},
  		{
  			"id": "12670411",
  			"id_hs92": "670411",
  			"name": "Complete wigs of synthetic textile materials"
  		},
  		{
  			"id": "12670419",
  			"id_hs92": "670419",
  			"name": "False beard, eyebrows etc, synthetic textile material"
  		},
  		{
  			"id": "12670420",
  			"id_hs92": "670420",
  			"name": "Wigs, false beards, eyebrows etc, of human hair"
  		},
  		{
  			"id": "12670490",
  			"id_hs92": "670490",
  			"name": "Wigs, false beards, eyebrows etc, of other materials"
  		},
  		{
  			"id": "13",
  			"id_hs92": null,
  			"name": "Stone And Glass"
  		},
  		{
  			"id": "136801",
  			"id_hs92": "6801",
  			"name": "Curbstones"
  		},
  		{
  			"id": "13680100",
  			"id_hs92": "680100",
  			"name": "Stone setts, curbstones, flagstones (except slate)"
  		},
  		{
  			"id": "136802",
  			"id_hs92": "6802",
  			"name": "Building Stone"
  		},
  		{
  			"id": "13680210",
  			"id_hs92": "680210",
  			"name": "Stone mosaic tiles, artificial coloured chips etc"
  		},
  		{
  			"id": "13680221",
  			"id_hs92": "680221",
  			"name": "Cut or sawn slabs of marble, travertine or alabaster"
  		},
  		{
  			"id": "13680222",
  			"id_hs92": "680222",
  			"name": "Cut or sawn slabs of calcareous stone nes"
  		},
  		{
  			"id": "13680223",
  			"id_hs92": "680223",
  			"name": "Cut or sawn slabs of granite"
  		},
  		{
  			"id": "13680229",
  			"id_hs92": "680229",
  			"name": "Cut or sawn slabs of stone nes"
  		},
  		{
  			"id": "13680291",
  			"id_hs92": "680291",
  			"name": "Worked marble, travertine and alabaster"
  		},
  		{
  			"id": "13680292",
  			"id_hs92": "680292",
  			"name": "Worked calcareous stone nes"
  		},
  		{
  			"id": "13680293",
  			"id_hs92": "680293",
  			"name": "Worked granite"
  		},
  		{
  			"id": "13680299",
  			"id_hs92": "680299",
  			"name": "Worked monumental or building stone nes"
  		},
  		{
  			"id": "136803",
  			"id_hs92": "6803",
  			"name": "Slate"
  		},
  		{
  			"id": "13680300",
  			"id_hs92": "680300",
  			"name": "Worked slate, articles of slate or agglomerated slate"
  		},
  		{
  			"id": "136804",
  			"id_hs92": "6804",
  			"name": "Milling Stones"
  		},
  		{
  			"id": "13680410",
  			"id_hs92": "680410",
  			"name": "Stones for milling, grinding or pulping"
  		},
  		{
  			"id": "13680421",
  			"id_hs92": "680421",
  			"name": "Grindstones etc of synthetic or natural diamond"
  		},
  		{
  			"id": "13680422",
  			"id_hs92": "680422",
  			"name": "Grindstones etc, agglomerated abrasives or ceramics"
  		},
  		{
  			"id": "13680423",
  			"id_hs92": "680423",
  			"name": "Millstones, grindstones etc of natural stone"
  		},
  		{
  			"id": "13680430",
  			"id_hs92": "680430",
  			"name": "Hand sharpening or polishing stones"
  		},
  		{
  			"id": "136805",
  			"id_hs92": "6805",
  			"name": "Abrasive Powder"
  		},
  		{
  			"id": "13680510",
  			"id_hs92": "680510",
  			"name": "Abrasive powderor grain on woven textile support"
  		},
  		{
  			"id": "13680520",
  			"id_hs92": "680520",
  			"name": "Abrasive powder, grain on paper or paperboard support"
  		},
  		{
  			"id": "13680530",
  			"id_hs92": "680530",
  			"name": "Abrasive powder or grain on a base of other material"
  		},
  		{
  			"id": "136806",
  			"id_hs92": "6806",
  			"name": "Rock Wool"
  		},
  		{
  			"id": "13680610",
  			"id_hs92": "680610",
  			"name": "Slag wool, rock wool, similar wools, bulk, sheet, rol"
  		},
  		{
  			"id": "13680620",
  			"id_hs92": "680620",
  			"name": "Exfoliated vermiculite, foamed slag, expanded mineral"
  		},
  		{
  			"id": "13680690",
  			"id_hs92": "680690",
  			"name": "Mineral heat or sound insulating materials & articles"
  		},
  		{
  			"id": "136807",
  			"id_hs92": "6807",
  			"name": "Asphalt"
  		},
  		{
  			"id": "13680710",
  			"id_hs92": "680710",
  			"name": "Asphalt or similar material articles, in rolls"
  		},
  		{
  			"id": "13680790",
  			"id_hs92": "680790",
  			"name": "Asphalt or similar material articles not in rolls"
  		},
  		{
  			"id": "136808",
  			"id_hs92": "6808",
  			"name": "Vegetable Fiber"
  		},
  		{
  			"id": "13680800",
  			"id_hs92": "680800",
  			"name": "Boards, etc of veg fibre with mineral binder or cemen"
  		},
  		{
  			"id": "136809",
  			"id_hs92": "6809",
  			"name": "Plaster Articles"
  		},
  		{
  			"id": "13680911",
  			"id_hs92": "680911",
  			"name": "Plaster board etc not ornamental, paper reinforced"
  		},
  		{
  			"id": "13680919",
  			"id_hs92": "680919",
  			"name": "Plaster boards etc not ornamental, reinforced nes"
  		},
  		{
  			"id": "13680990",
  			"id_hs92": "680990",
  			"name": "Articles of plaster etc, other than plasterboard"
  		},
  		{
  			"id": "136810",
  			"id_hs92": "6810",
  			"name": "Cement Articles"
  		},
  		{
  			"id": "13681011",
  			"id_hs92": "681011",
  			"name": "Building blocks, bricks of cement, or artificial ston"
  		},
  		{
  			"id": "13681019",
  			"id_hs92": "681019",
  			"name": "Tiles & flagstones of cement, concrete, artificial stone"
  		},
  		{
  			"id": "13681020",
  			"id_hs92": "681020",
  			"name": "Pipes of cement or concrete"
  		},
  		{
  			"id": "13681091",
  			"id_hs92": "681091",
  			"name": "Prefabricated structural items of cement or concrete"
  		},
  		{
  			"id": "13681099",
  			"id_hs92": "681099",
  			"name": "Articles of cement, concrete or artificial stone nes"
  		},
  		{
  			"id": "136811",
  			"id_hs92": "6811",
  			"name": "Asbestos Cement Articles"
  		},
  		{
  			"id": "13681110",
  			"id_hs92": "681110",
  			"name": "Corrugated sheets of asbestos, cellulose fibre cement"
  		},
  		{
  			"id": "13681120",
  			"id_hs92": "681120",
  			"name": "Sheet/tile, asbestos/cellulose fibre cement not corru"
  		},
  		{
  			"id": "13681130",
  			"id_hs92": "681130",
  			"name": "Tubes, pipes etc of asbestos or cellulose fibre cemen"
  		},
  		{
  			"id": "13681190",
  			"id_hs92": "681190",
  			"name": "Articles nes, of asbestoso or cellulose fibre cement"
  		},
  		{
  			"id": "136812",
  			"id_hs92": "6812",
  			"name": "Asbestos Fibres"
  		},
  		{
  			"id": "13681210",
  			"id_hs92": "681210",
  			"name": "Asbestos fibres etc"
  		},
  		{
  			"id": "13681220",
  			"id_hs92": "681220",
  			"name": "Asbestos yarn and thread"
  		},
  		{
  			"id": "13681230",
  			"id_hs92": "681230",
  			"name": "Asbestos cords and string"
  		},
  		{
  			"id": "13681240",
  			"id_hs92": "681240",
  			"name": "Asbestos woven or knit fabric"
  		},
  		{
  			"id": "13681250",
  			"id_hs92": "681250",
  			"name": "Asbestos clothing, accessories, foot and headwear"
  		},
  		{
  			"id": "13681260",
  			"id_hs92": "681260",
  			"name": "Asbestos paper, millboard and felt"
  		},
  		{
  			"id": "13681270",
  			"id_hs92": "681270",
  			"name": "Compressed asbestos fibre jointing, in sheets, rolls"
  		},
  		{
  			"id": "13681290",
  			"id_hs92": "681290",
  			"name": "Asbestos fabricated products nes"
  		},
  		{
  			"id": "136813",
  			"id_hs92": "6813",
  			"name": "Friction Material"
  		},
  		{
  			"id": "13681310",
  			"id_hs92": "681310",
  			"name": "Asbestos brake linings and pads"
  		},
  		{
  			"id": "13681390",
  			"id_hs92": "681390",
  			"name": "Asbestos friction material, articles except for brake"
  		},
  		{
  			"id": "136814",
  			"id_hs92": "6814",
  			"name": "Mica"
  		},
  		{
  			"id": "13681410",
  			"id_hs92": "681410",
  			"name": "Mica plates, sheets and strips"
  		},
  		{
  			"id": "13681490",
  			"id_hs92": "681490",
  			"name": "Worked mica and articles of mica except sheet mica"
  		},
  		{
  			"id": "136815",
  			"id_hs92": "6815",
  			"name": "Other Stone Articles"
  		},
  		{
  			"id": "13681510",
  			"id_hs92": "681510",
  			"name": "Non-electrical articles of graphite or other carbon"
  		},
  		{
  			"id": "13681520",
  			"id_hs92": "681520",
  			"name": "Articles of peat"
  		},
  		{
  			"id": "13681591",
  			"id_hs92": "681591",
  			"name": "Articles containing magnesite, dolomite or chromite"
  		},
  		{
  			"id": "13681599",
  			"id_hs92": "681599",
  			"name": "Articles of stone or of other mineral substances nes"
  		},
  		{
  			"id": "136901",
  			"id_hs92": "6901",
  			"name": "Bricks"
  		},
  		{
  			"id": "13690100",
  			"id_hs92": "690100",
  			"name": "Bricks, blocks and ceramic goods of siliceous earths"
  		},
  		{
  			"id": "136902",
  			"id_hs92": "6902",
  			"name": "Refractory Bricks"
  		},
  		{
  			"id": "13690210",
  			"id_hs92": "690210",
  			"name": "Refractory bricks, etc with >50% Mg, Ca or Cr as oxid"
  		},
  		{
  			"id": "13690220",
  			"id_hs92": "690220",
  			"name": "Refractory bricks etc >50% alumina or silica"
  		},
  		{
  			"id": "13690290",
  			"id_hs92": "690290",
  			"name": "Refractory bricks etc nes"
  		},
  		{
  			"id": "136903",
  			"id_hs92": "6903",
  			"name": "Refractory Ceramics"
  		},
  		{
  			"id": "13690310",
  			"id_hs92": "690310",
  			"name": "Refractory ceramic articles, >50% carbon"
  		},
  		{
  			"id": "13690320",
  			"id_hs92": "690320",
  			"name": "Refractory ceramic articles, >50% alumina or silica"
  		},
  		{
  			"id": "13690390",
  			"id_hs92": "690390",
  			"name": "Refractory ceramic articles nes"
  		},
  		{
  			"id": "136904",
  			"id_hs92": "6904",
  			"name": "Ceramic Bricks"
  		},
  		{
  			"id": "13690410",
  			"id_hs92": "690410",
  			"name": "Building bricks"
  		},
  		{
  			"id": "13690490",
  			"id_hs92": "690490",
  			"name": "Ceramic flooring blocks, tiles and the like"
  		},
  		{
  			"id": "136905",
  			"id_hs92": "6905",
  			"name": "Roofing Tiles"
  		},
  		{
  			"id": "13690510",
  			"id_hs92": "690510",
  			"name": "Roofing tiles, ceramic"
  		},
  		{
  			"id": "13690590",
  			"id_hs92": "690590",
  			"name": "Ceramic construction items, chimney pots and cowls"
  		},
  		{
  			"id": "136906",
  			"id_hs92": "6906",
  			"name": "Ceramic Pipes"
  		},
  		{
  			"id": "13690600",
  			"id_hs92": "690600",
  			"name": "Ceramic pipes, conduits, guttering and fittings"
  		},
  		{
  			"id": "136907",
  			"id_hs92": "6907",
  			"name": "Unglazed Ceramics"
  		},
  		{
  			"id": "13690710",
  			"id_hs92": "690710",
  			"name": "Unglazed ceramic mosaic tiles etc, <7cm wide"
  		},
  		{
  			"id": "13690790",
  			"id_hs92": "690790",
  			"name": "Unglazed ceramic flags, tiles > 7 cm wide"
  		},
  		{
  			"id": "136908",
  			"id_hs92": "6908",
  			"name": "Glazed Ceramics"
  		},
  		{
  			"id": "13690810",
  			"id_hs92": "690810",
  			"name": "Glazed ceramic mosaic tiles, cubes & similar <7cm wid"
  		},
  		{
  			"id": "13690890",
  			"id_hs92": "690890",
  			"name": "Glazed ceramic flags, tiles wider than 7 cm"
  		},
  		{
  			"id": "136909",
  			"id_hs92": "6909",
  			"name": "Laboratory Ceramic Ware"
  		},
  		{
  			"id": "13690911",
  			"id_hs92": "690911",
  			"name": "Porcelain ware for laboratory, chemical, technical us"
  		},
  		{
  			"id": "13690919",
  			"id_hs92": "690919",
  			"name": "Ceramic laboratory & technical ware except porcelain"
  		},
  		{
  			"id": "13690990",
  			"id_hs92": "690990",
  			"name": "Ceramic troughs, etc (agriculture), ceramic pots etc"
  		},
  		{
  			"id": "136910",
  			"id_hs92": "6910",
  			"name": "Bathroom Ceramics"
  		},
  		{
  			"id": "13691010",
  			"id_hs92": "691010",
  			"name": "Porcelain bathroom, kitchen & other sanitary fixtures"
  		},
  		{
  			"id": "13691090",
  			"id_hs92": "691090",
  			"name": "Ceramic bathroom kitchen sanitary items not porcelain"
  		},
  		{
  			"id": "136911",
  			"id_hs92": "6911",
  			"name": "Porcelain Tableware"
  		},
  		{
  			"id": "13691110",
  			"id_hs92": "691110",
  			"name": "Tableware and kitchenware of porcelain or china"
  		},
  		{
  			"id": "13691190",
  			"id_hs92": "691190",
  			"name": "Household & toilet articles nes of porcelain or china"
  		},
  		{
  			"id": "136912",
  			"id_hs92": "6912",
  			"name": "Ceramic Tableware"
  		},
  		{
  			"id": "13691200",
  			"id_hs92": "691200",
  			"name": "Ceramic housewares, except of porcelain or china"
  		},
  		{
  			"id": "136913",
  			"id_hs92": "6913",
  			"name": "Ornamental Ceramics"
  		},
  		{
  			"id": "13691310",
  			"id_hs92": "691310",
  			"name": "Statuettes & ornamental articles of porcelain or chin"
  		},
  		{
  			"id": "13691390",
  			"id_hs92": "691390",
  			"name": "Ceramic statuettes, ornamental articles, not porcelai"
  		},
  		{
  			"id": "136914",
  			"id_hs92": "6914",
  			"name": "Other Ceramic Articles"
  		},
  		{
  			"id": "13691410",
  			"id_hs92": "691410",
  			"name": "Articles of porcelain or china nes"
  		},
  		{
  			"id": "13691490",
  			"id_hs92": "691490",
  			"name": "Articles of ceramics, except porcelain or china, nes"
  		},
  		{
  			"id": "137001",
  			"id_hs92": "7001",
  			"name": "Glass Scraps"
  		},
  		{
  			"id": "13700100",
  			"id_hs92": "700100",
  			"name": "Glass cullet, waste or scrap, glass in the mass"
  		},
  		{
  			"id": "137002",
  			"id_hs92": "7002",
  			"name": "Glass Balls"
  		},
  		{
  			"id": "13700210",
  			"id_hs92": "700210",
  			"name": "Glass balls except microspheres < 1mm diameter"
  		},
  		{
  			"id": "13700220",
  			"id_hs92": "700220",
  			"name": "Glass tubes, unworked"
  		},
  		{
  			"id": "13700231",
  			"id_hs92": "700231",
  			"name": "Tubes of fused quartz or other fused silica"
  		},
  		{
  			"id": "13700232",
  			"id_hs92": "700232",
  			"name": "Tubes of low expansion glass (Pyrex etc)"
  		},
  		{
  			"id": "13700239",
  			"id_hs92": "700239",
  			"name": "Tubes of glass other than low expansion"
  		},
  		{
  			"id": "137003",
  			"id_hs92": "7003",
  			"name": "Cast or Rolled Glass"
  		},
  		{
  			"id": "13700311",
  			"id_hs92": "700311",
  			"name": "Cast glass sheet, coloured absorbent reflect or opaqu"
  		},
  		{
  			"id": "13700319",
  			"id_hs92": "700319",
  			"name": "Cast glass sheet, non-wired, clear"
  		},
  		{
  			"id": "13700320",
  			"id_hs92": "700320",
  			"name": "Cast glass sheet, wired"
  		},
  		{
  			"id": "13700330",
  			"id_hs92": "700330",
  			"name": "Cast glass profiles"
  		},
  		{
  			"id": "137004",
  			"id_hs92": "7004",
  			"name": "Blown Glass"
  		},
  		{
  			"id": "13700410",
  			"id_hs92": "700410",
  			"name": "Drawn glass sheet coloured, absorbing, reflect, opaqu"
  		},
  		{
  			"id": "13700490",
  			"id_hs92": "700490",
  			"name": "Drawn glass in sheets, clear"
  		},
  		{
  			"id": "137005",
  			"id_hs92": "7005",
  			"name": "Float Glass"
  		},
  		{
  			"id": "13700510",
  			"id_hs92": "700510",
  			"name": "Float glass etc sheets, absorbent or reflecting layer"
  		},
  		{
  			"id": "13700521",
  			"id_hs92": "700521",
  			"name": "Float glass etc sheets, coloured throughout"
  		},
  		{
  			"id": "13700529",
  			"id_hs92": "700529",
  			"name": "Float glass etc in sheets, non-wired, clear"
  		},
  		{
  			"id": "13700530",
  			"id_hs92": "700530",
  			"name": "Float glass etc in sheets, wired"
  		},
  		{
  			"id": "137006",
  			"id_hs92": "7006",
  			"name": "Glass with Edge Workings"
  		},
  		{
  			"id": "13700600",
  			"id_hs92": "700600",
  			"name": "Cast, drawn or float glass sheet, edge worked or bent"
  		},
  		{
  			"id": "137007",
  			"id_hs92": "7007",
  			"name": "Safety Glass"
  		},
  		{
  			"id": "13700711",
  			"id_hs92": "700711",
  			"name": "Safety glass (tempered) for vehicles, aircraft, etc"
  		},
  		{
  			"id": "13700719",
  			"id_hs92": "700719",
  			"name": "Safety glass, toughened (tempered), non-vehicle use"
  		},
  		{
  			"id": "13700721",
  			"id_hs92": "700721",
  			"name": "Safety glass (laminated) for vehicles, aircraft, etc"
  		},
  		{
  			"id": "13700729",
  			"id_hs92": "700729",
  			"name": "Safety glass, laminated, non vehicle use"
  		},
  		{
  			"id": "137008",
  			"id_hs92": "7008",
  			"name": "Insulating Glass"
  		},
  		{
  			"id": "13700800",
  			"id_hs92": "700800",
  			"name": "Multiple-walled insulating units of glass"
  		},
  		{
  			"id": "137009",
  			"id_hs92": "7009",
  			"name": "Glass Mirrors"
  		},
  		{
  			"id": "13700910",
  			"id_hs92": "700910",
  			"name": "Rear-view mirrors for vehicles"
  		},
  		{
  			"id": "13700991",
  			"id_hs92": "700991",
  			"name": "Glass mirrors, unframed"
  		},
  		{
  			"id": "13700992",
  			"id_hs92": "700992",
  			"name": "Glass mirrors, framed"
  		},
  		{
  			"id": "137010",
  			"id_hs92": "7010",
  			"name": "Glass Bottles"
  		},
  		{
  			"id": "13701010",
  			"id_hs92": "701010",
  			"name": "Ampoules of glass for conveyance or packing"
  		},
  		{
  			"id": "13701090",
  			"id_hs92": "701090",
  			"name": "Glass containers nes for packing or conveyance goods"
  		},
  		{
  			"id": "137011",
  			"id_hs92": "7011",
  			"name": "Glass Bulbs"
  		},
  		{
  			"id": "13701110",
  			"id_hs92": "701110",
  			"name": "Glass envelopes (bulbs & tubes) for electric lighting"
  		},
  		{
  			"id": "13701120",
  			"id_hs92": "701120",
  			"name": "Glass envelopes for cathode-ray tubes"
  		},
  		{
  			"id": "13701190",
  			"id_hs92": "701190",
  			"name": "Glass envelopes except lighting or cathode-ray tubes"
  		},
  		{
  			"id": "137012",
  			"id_hs92": "7012",
  			"name": "Vacuum Flasks Glass Inners"
  		},
  		{
  			"id": "13701200",
  			"id_hs92": "701200",
  			"name": "Glass inners for vacuum flasks, other vacuum vessels"
  		},
  		{
  			"id": "137013",
  			"id_hs92": "7013",
  			"name": "Interior Decorative Glassware"
  		},
  		{
  			"id": "13701310",
  			"id_hs92": "701310",
  			"name": "Glass-ceramic ware for table kitchen, etc"
  		},
  		{
  			"id": "13701321",
  			"id_hs92": "701321",
  			"name": "Drinking glasses of lead crystal"
  		},
  		{
  			"id": "13701329",
  			"id_hs92": "701329",
  			"name": "Drinking glasses, except lead crystal or glass cerami"
  		},
  		{
  			"id": "13701331",
  			"id_hs92": "701331",
  			"name": "Lead crystal table, kitchen glass (not drink glasses)"
  		},
  		{
  			"id": "13701332",
  			"id_hs92": "701332",
  			"name": "Table, kitchenware of low expansion glass (Pyrex etc)"
  		},
  		{
  			"id": "13701339",
  			"id_hs92": "701339",
  			"name": "Glass table or kitchenware, except low expansion glas"
  		},
  		{
  			"id": "13701391",
  			"id_hs92": "701391",
  			"name": "Glassware except kitchen, table ware, of lead crystal"
  		},
  		{
  			"id": "13701399",
  			"id_hs92": "701399",
  			"name": "Glassware, not kitchen or table ware, not lead crysta"
  		},
  		{
  			"id": "137014",
  			"id_hs92": "7014",
  			"name": "Signaling Glassware"
  		},
  		{
  			"id": "13701400",
  			"id_hs92": "701400",
  			"name": "Signalling glassware, unworked optical elements"
  		},
  		{
  			"id": "137015",
  			"id_hs92": "7015",
  			"name": "Eyewear and Clock Glass"
  		},
  		{
  			"id": "13701510",
  			"id_hs92": "701510",
  			"name": "Glasses for corrective spectacles, unworked"
  		},
  		{
  			"id": "13701590",
  			"id_hs92": "701590",
  			"name": "Clock or watch glasses etc not optically worked"
  		},
  		{
  			"id": "137016",
  			"id_hs92": "7016",
  			"name": "Glass Bricks"
  		},
  		{
  			"id": "13701610",
  			"id_hs92": "701610",
  			"name": "Glass cubes, mosaic tiles"
  		},
  		{
  			"id": "13701690",
  			"id_hs92": "701690",
  			"name": "Glass blocks, bricks, tiles, leaded lights, etc"
  		},
  		{
  			"id": "137017",
  			"id_hs92": "7017",
  			"name": "Laboratory Glassware"
  		},
  		{
  			"id": "13701710",
  			"id_hs92": "701710",
  			"name": "Fused quartz laboratory, hygienic or pharmeutical war"
  		},
  		{
  			"id": "13701720",
  			"id_hs92": "701720",
  			"name": "Low expansion laboratory, hygienic, pharmacy glasswar"
  		},
  		{
  			"id": "13701790",
  			"id_hs92": "701790",
  			"name": "Laboratory, hygienic or pharmaceutical glassware nes"
  		},
  		{
  			"id": "137018",
  			"id_hs92": "7018",
  			"name": "Glass Beads"
  		},
  		{
  			"id": "13701810",
  			"id_hs92": "701810",
  			"name": "Ornamental glass beads, pearls, stones, worked items"
  		},
  		{
  			"id": "13701820",
  			"id_hs92": "701820",
  			"name": "Glass microspheres < 1 mm in diameter"
  		},
  		{
  			"id": "13701890",
  			"id_hs92": "701890",
  			"name": "Articles of glass except jewellery nes, toy glass eye"
  		},
  		{
  			"id": "137019",
  			"id_hs92": "7019",
  			"name": "Glass Fibers"
  		},
  		{
  			"id": "13701910",
  			"id_hs92": "701910",
  			"name": "Slivers, rovings, yarn and chopped strands of glass"
  		},
  		{
  			"id": "13701920",
  			"id_hs92": "701920",
  			"name": "Woven fabric of glass fibres"
  		},
  		{
  			"id": "13701931",
  			"id_hs92": "701931",
  			"name": "Mats of glass fibres"
  		},
  		{
  			"id": "13701932",
  			"id_hs92": "701932",
  			"name": "Thin sheets (voiles) of glass fibres"
  		},
  		{
  			"id": "13701939",
  			"id_hs92": "701939",
  			"name": "Webs, mattresses, other nonwoven fibreglass products"
  		},
  		{
  			"id": "13701990",
  			"id_hs92": "701990",
  			"name": "Glass fibres, glass wool and articles thereof nes"
  		},
  		{
  			"id": "137020",
  			"id_hs92": "7020",
  			"name": "Other Glass Articles"
  		},
  		{
  			"id": "13702000",
  			"id_hs92": "702000",
  			"name": "Articles of glass, nes"
  		},
  		{
  			"id": "14",
  			"id_hs92": null,
  			"name": "Precious Metals"
  		},
  		{
  			"id": "147101",
  			"id_hs92": "7101",
  			"name": "Pearls"
  		},
  		{
  			"id": "14710110",
  			"id_hs92": "710110",
  			"name": "Pearls natural, not permanently mounted or set"
  		},
  		{
  			"id": "14710121",
  			"id_hs92": "710121",
  			"name": "Pearls cultured unworked"
  		},
  		{
  			"id": "14710122",
  			"id_hs92": "710122",
  			"name": "Pearls cultured worked, not mounted or set"
  		},
  		{
  			"id": "147102",
  			"id_hs92": "7102",
  			"name": "Diamonds"
  		},
  		{
  			"id": "14710210",
  			"id_hs92": "710210",
  			"name": "Diamonds, unsorted"
  		},
  		{
  			"id": "14710221",
  			"id_hs92": "710221",
  			"name": "Diamonds, industrial, unworked or simply sawn, cleave"
  		},
  		{
  			"id": "14710229",
  			"id_hs92": "710229",
  			"name": "Diamonds industrial, worked"
  		},
  		{
  			"id": "14710231",
  			"id_hs92": "710231",
  			"name": "Diamonds (jewellery) unworked or simply sawn, cleaved"
  		},
  		{
  			"id": "14710239",
  			"id_hs92": "710239",
  			"name": "Diamonds (jewellery) worked but not mounted or set"
  		},
  		{
  			"id": "147103",
  			"id_hs92": "7103",
  			"name": "Precious Stones"
  		},
  		{
  			"id": "14710310",
  			"id_hs92": "710310",
  			"name": "Precious, semi-precious stones unworked, partly worke"
  		},
  		{
  			"id": "14710391",
  			"id_hs92": "710391",
  			"name": "Rubies, sapphires and emeralds worked but not set"
  		},
  		{
  			"id": "14710399",
  			"id_hs92": "710399",
  			"name": "Precious & semi-precious stones, nes, worked, not set"
  		},
  		{
  			"id": "147104",
  			"id_hs92": "7104",
  			"name": "Synthetic Reconstructed Jewellery Stones"
  		},
  		{
  			"id": "14710410",
  			"id_hs92": "710410",
  			"name": "Piezo-electric quartz"
  		},
  		{
  			"id": "14710420",
  			"id_hs92": "710420",
  			"name": "Synthetic precious, semi-precious stone, rough shaped"
  		},
  		{
  			"id": "14710490",
  			"id_hs92": "710490",
  			"name": "Synthetic precious or semi-precious stones, worked ne"
  		},
  		{
  			"id": "147105",
  			"id_hs92": "7105",
  			"name": "Precious Stone Dust"
  		},
  		{
  			"id": "14710510",
  			"id_hs92": "710510",
  			"name": "Diamond dust or powder"
  		},
  		{
  			"id": "14710590",
  			"id_hs92": "710590",
  			"name": "Dust of precious, semi-precious stones except diamond"
  		},
  		{
  			"id": "147106",
  			"id_hs92": "7106",
  			"name": "Silver"
  		},
  		{
  			"id": "14710610",
  			"id_hs92": "710610",
  			"name": "Silver powder"
  		},
  		{
  			"id": "14710691",
  			"id_hs92": "710691",
  			"name": "Silver in unwrought forms"
  		},
  		{
  			"id": "14710692",
  			"id_hs92": "710692",
  			"name": "Silver semi-manufactured including gold/platinum plat"
  		},
  		{
  			"id": "147107",
  			"id_hs92": "7107",
  			"name": "Silver Clad Metals"
  		},
  		{
  			"id": "14710700",
  			"id_hs92": "710700",
  			"name": "Base metals clad with silver, semi-manufactured"
  		},
  		{
  			"id": "147108",
  			"id_hs92": "7108",
  			"name": "Gold"
  		},
  		{
  			"id": "14710811",
  			"id_hs92": "710811",
  			"name": "Gold powder non-monetary"
  		},
  		{
  			"id": "14710812",
  			"id_hs92": "710812",
  			"name": "Gold in unwrought forms non-monetary"
  		},
  		{
  			"id": "14710813",
  			"id_hs92": "710813",
  			"name": "Gold, semi-manufactured forms, non-monetary"
  		},
  		{
  			"id": "147109",
  			"id_hs92": "7109",
  			"name": "Gold Clad Metals"
  		},
  		{
  			"id": "14710900",
  			"id_hs92": "710900",
  			"name": "Base metals or silver, clad with gold, semi-manuf"
  		},
  		{
  			"id": "147110",
  			"id_hs92": "7110",
  			"name": "Platinum"
  		},
  		{
  			"id": "14711011",
  			"id_hs92": "711011",
  			"name": "Platinum unwrought or in powder form"
  		},
  		{
  			"id": "14711019",
  			"id_hs92": "711019",
  			"name": "Platinum in semi-manufactured forms"
  		},
  		{
  			"id": "14711021",
  			"id_hs92": "711021",
  			"name": "Palladium unwrought or in powder form"
  		},
  		{
  			"id": "14711029",
  			"id_hs92": "711029",
  			"name": "Palladium in semi-manufactured forms"
  		},
  		{
  			"id": "14711031",
  			"id_hs92": "711031",
  			"name": "Rhodium unwrought or in powder form"
  		},
  		{
  			"id": "14711039",
  			"id_hs92": "711039",
  			"name": "Rhodium in semi-manufactured forms"
  		},
  		{
  			"id": "14711041",
  			"id_hs92": "711041",
  			"name": "Iridium, osmium and ruthenium unwrought or powder for"
  		},
  		{
  			"id": "14711049",
  			"id_hs92": "711049",
  			"name": "Iridium, osmium and ruthenium, semi-manufactured"
  		},
  		{
  			"id": "147111",
  			"id_hs92": "7111",
  			"name": "Platinum Clad Metals"
  		},
  		{
  			"id": "14711100",
  			"id_hs92": "711100",
  			"name": "Metals, clad with platinum, semi-manufactured"
  		},
  		{
  			"id": "147112",
  			"id_hs92": "7112",
  			"name": "Precious Metal Scraps"
  		},
  		{
  			"id": "14711210",
  			"id_hs92": "711210",
  			"name": "Waste or scrap containing gold as sole precious metal"
  		},
  		{
  			"id": "14711220",
  			"id_hs92": "711220",
  			"name": "Waste/scrap containing platinum as sole precious meta"
  		},
  		{
  			"id": "14711290",
  			"id_hs92": "711290",
  			"name": "Waste/scrap, precious metals except pure gold/platinu"
  		},
  		{
  			"id": "147113",
  			"id_hs92": "7113",
  			"name": "Jewellery"
  		},
  		{
  			"id": "14711311",
  			"id_hs92": "711311",
  			"name": "Jewellery and parts, silver, including plated silver"
  		},
  		{
  			"id": "14711319",
  			"id_hs92": "711319",
  			"name": "Jewellery and parts of precious metal except silver"
  		},
  		{
  			"id": "14711320",
  			"id_hs92": "711320",
  			"name": "Jewellery, parts, base metal clad with precious metal"
  		},
  		{
  			"id": "147114",
  			"id_hs92": "7114",
  			"name": "Metal-Clad Products"
  		},
  		{
  			"id": "14711411",
  			"id_hs92": "711411",
  			"name": "Silver wares, silver ware plated with precious metal"
  		},
  		{
  			"id": "14711419",
  			"id_hs92": "711419",
  			"name": "Gold/silversmith wares of/clad with precious metal ne"
  		},
  		{
  			"id": "14711420",
  			"id_hs92": "711420",
  			"name": "Gold, silversmith wares, base clad with precious meta"
  		},
  		{
  			"id": "147115",
  			"id_hs92": "7115",
  			"name": "Other Precious Metal Products"
  		},
  		{
  			"id": "14711510",
  			"id_hs92": "711510",
  			"name": "Catalysts (form of wire cloth or grill) of platinum"
  		},
  		{
  			"id": "14711590",
  			"id_hs92": "711590",
  			"name": "Articles of, or clad with, precious metal nes"
  		},
  		{
  			"id": "147116",
  			"id_hs92": "7116",
  			"name": "Pearl Products"
  		},
  		{
  			"id": "14711610",
  			"id_hs92": "711610",
  			"name": "Articles of natural or cultured pearls"
  		},
  		{
  			"id": "14711620",
  			"id_hs92": "711620",
  			"name": "Articles of precious, semi-precious, artificial stone"
  		},
  		{
  			"id": "147117",
  			"id_hs92": "7117",
  			"name": "Imitation Jewellery"
  		},
  		{
  			"id": "14711711",
  			"id_hs92": "711711",
  			"name": "Cuff-links and studs of base metal, plated or not"
  		},
  		{
  			"id": "14711719",
  			"id_hs92": "711719",
  			"name": "Imitation jewellery nes of base metal including plate"
  		},
  		{
  			"id": "14711790",
  			"id_hs92": "711790",
  			"name": "Imitation jewellery nes"
  		},
  		{
  			"id": "147118",
  			"id_hs92": "7118",
  			"name": "Coin"
  		},
  		{
  			"id": "14711810",
  			"id_hs92": "711810",
  			"name": "Coin (other than gold coin) not being legal tender"
  		},
  		{
  			"id": "14711890",
  			"id_hs92": "711890",
  			"name": "Other"
  		},
  		{
  			"id": "15",
  			"id_hs92": null,
  			"name": "Metals"
  		},
  		{
  			"id": "157201",
  			"id_hs92": "7201",
  			"name": "Pig Iron"
  		},
  		{
  			"id": "15720110",
  			"id_hs92": "720110",
  			"name": "Pig iron, non-alloy, <0.5% phosphorus"
  		},
  		{
  			"id": "15720120",
  			"id_hs92": "720120",
  			"name": "Pig iron, non-alloy, >0.5% phosphorus"
  		},
  		{
  			"id": "15720130",
  			"id_hs92": "720130",
  			"name": "Alloy pig iron, in primary forms"
  		},
  		{
  			"id": "15720140",
  			"id_hs92": "720140",
  			"name": "Spiegeleisen in primary forms"
  		},
  		{
  			"id": "157202",
  			"id_hs92": "7202",
  			"name": "Ferroalloys"
  		},
  		{
  			"id": "15720211",
  			"id_hs92": "720211",
  			"name": "Ferro-manganese, >2% carbon"
  		},
  		{
  			"id": "15720219",
  			"id_hs92": "720219",
  			"name": "Ferro-manganese, <2% carbon"
  		},
  		{
  			"id": "15720221",
  			"id_hs92": "720221",
  			"name": "Ferro-silicon, >55% silicon"
  		},
  		{
  			"id": "15720229",
  			"id_hs92": "720229",
  			"name": "Ferro-silicon, <55% silicon"
  		},
  		{
  			"id": "15720230",
  			"id_hs92": "720230",
  			"name": "Ferro-silico-manganese"
  		},
  		{
  			"id": "15720241",
  			"id_hs92": "720241",
  			"name": "Ferro-chromium, >4% carbon"
  		},
  		{
  			"id": "15720249",
  			"id_hs92": "720249",
  			"name": "Ferro-chromium, <4% carbon"
  		},
  		{
  			"id": "15720250",
  			"id_hs92": "720250",
  			"name": "Ferro-silico-chromium"
  		},
  		{
  			"id": "15720260",
  			"id_hs92": "720260",
  			"name": "Ferro-nickel"
  		},
  		{
  			"id": "15720270",
  			"id_hs92": "720270",
  			"name": "Ferro-molybdenum"
  		},
  		{
  			"id": "15720280",
  			"id_hs92": "720280",
  			"name": "Ferro-tungsten and ferro-silico-tungsten"
  		},
  		{
  			"id": "15720291",
  			"id_hs92": "720291",
  			"name": "Ferro-titanium and ferro-silico-titanium"
  		},
  		{
  			"id": "15720292",
  			"id_hs92": "720292",
  			"name": "Ferro-vanadium"
  		},
  		{
  			"id": "15720293",
  			"id_hs92": "720293",
  			"name": "Ferro-niobium"
  		},
  		{
  			"id": "15720299",
  			"id_hs92": "720299",
  			"name": "Ferro-alloys, nes"
  		},
  		{
  			"id": "157203",
  			"id_hs92": "7203",
  			"name": "Iron Reductions"
  		},
  		{
  			"id": "15720310",
  			"id_hs92": "720310",
  			"name": "Ferrous products from direct reduction of iron ore"
  		},
  		{
  			"id": "15720390",
  			"id_hs92": "720390",
  			"name": "Spongy iron lumps, pellets, etc > 99.94% pure"
  		},
  		{
  			"id": "157204",
  			"id_hs92": "7204",
  			"name": "Scrap Iron"
  		},
  		{
  			"id": "15720410",
  			"id_hs92": "720410",
  			"name": "Waste or scrap, of cast iron"
  		},
  		{
  			"id": "15720421",
  			"id_hs92": "720421",
  			"name": "Waste or scrap, of stainless steel"
  		},
  		{
  			"id": "15720429",
  			"id_hs92": "720429",
  			"name": "Waste or scrap, of alloy steel, other than stainless"
  		},
  		{
  			"id": "15720430",
  			"id_hs92": "720430",
  			"name": "Waste or scrap, of tinned iron or steel"
  		},
  		{
  			"id": "15720441",
  			"id_hs92": "720441",
  			"name": "Waste from the mechanical working of iron or steel ne"
  		},
  		{
  			"id": "15720449",
  			"id_hs92": "720449",
  			"name": "Ferrous waste or scrap, nes"
  		},
  		{
  			"id": "15720450",
  			"id_hs92": "720450",
  			"name": "Remelting scrap ingots, of iron or steel"
  		},
  		{
  			"id": "157205",
  			"id_hs92": "7205",
  			"name": "Iron Powder"
  		},
  		{
  			"id": "15720510",
  			"id_hs92": "720510",
  			"name": "Granules of pig iron or spiegeleisen"
  		},
  		{
  			"id": "15720521",
  			"id_hs92": "720521",
  			"name": "Powders, alloy steel"
  		},
  		{
  			"id": "15720529",
  			"id_hs92": "720529",
  			"name": "Powders, iron or steel, other than alloy"
  		},
  		{
  			"id": "157206",
  			"id_hs92": "7206",
  			"name": "Iron Ingots"
  		},
  		{
  			"id": "15720610",
  			"id_hs92": "720610",
  			"name": "Iron or non-alloy steel in ingots, <99.94% iron"
  		},
  		{
  			"id": "15720690",
  			"id_hs92": "720690",
  			"name": "Iron or non-alloy steel, primary nes, <99.94% iron"
  		},
  		{
  			"id": "157207",
  			"id_hs92": "7207",
  			"name": "Semi-Finished Iron"
  		},
  		{
  			"id": "15720711",
  			"id_hs92": "720711",
  			"name": "Rectangular iron or non-alloy steel bars, <.25%C, width< twice thicknes"
  		},
  		{
  			"id": "15720712",
  			"id_hs92": "720712",
  			"name": "Semi-finished bars, iron or non-alloy steel <0.25%C, rectangular, nes"
  		},
  		{
  			"id": "15720719",
  			"id_hs92": "720719",
  			"name": "Semi-finished product, iron or non-alloy steel <0.25%C, nes"
  		},
  		{
  			"id": "15720720",
  			"id_hs92": "720720",
  			"name": "Semi-finished product, iron or non-alloy steel >0.25%C"
  		},
  		{
  			"id": "157208",
  			"id_hs92": "7208",
  			"name": "Hot-Rolled Iron"
  		},
  		{
  			"id": "15720811",
  			"id_hs92": "720811",
  			"name": "Hot rolled iron or non-alloy steel, coil,w >600mm, t >10mm, myp 355 mpa"
  		},
  		{
  			"id": "15720812",
  			"id_hs92": "720812",
  			"name": "Hot rolled iron or non-alloy steel, coil,w >600mm, t 4.75-10mm, 355 mpa"
  		},
  		{
  			"id": "15720813",
  			"id_hs92": "720813",
  			"name": "Hot rolled iron or non-alloy steel, coil,w >600mm, t 3-4.75mm, 355 mpa"
  		},
  		{
  			"id": "15720814",
  			"id_hs92": "720814",
  			"name": "Hot rolled iron or non-alloy steel, coil,w >600mm, t <3mm, myp 275 mpa"
  		},
  		{
  			"id": "15720821",
  			"id_hs92": "720821",
  			"name": "Hot rolled iron or non-alloy steel, coil,width >600mm, t >10mm, nes"
  		},
  		{
  			"id": "15720822",
  			"id_hs92": "720822",
  			"name": "Hot rolled iron or non-alloy steel, coil,width >600mm, t 4.75-10mm, nes"
  		},
  		{
  			"id": "15720823",
  			"id_hs92": "720823",
  			"name": "Hot rolled iron or non-alloy steel, coil,width >600mm, t 3-4.75mm, nes"
  		},
  		{
  			"id": "15720824",
  			"id_hs92": "720824",
  			"name": "Hot rolled iron or non-alloy steel, coil,width >600mm, t <3mm thick, ne"
  		},
  		{
  			"id": "15720831",
  			"id_hs92": "720831",
  			"name": "Hot rolled iron or non-alloy steel, flat, w 600-1250mm, t >4mm, 355 mpa"
  		},
  		{
  			"id": "15720832",
  			"id_hs92": "720832",
  			"name": "Hot rolled iron or non-alloy steel, flat,w >600mm, t >10mm, myp 355 mpa"
  		},
  		{
  			"id": "15720833",
  			"id_hs92": "720833",
  			"name": "Hot rolled iron or non-alloy steel, flat,w >600mm, t 4.75-10mm, 355 mpa"
  		},
  		{
  			"id": "15720834",
  			"id_hs92": "720834",
  			"name": "Hot rolled iron or non-alloy steel, flat,w >600mm, t 3-4.75mm, 355 mpa"
  		},
  		{
  			"id": "15720835",
  			"id_hs92": "720835",
  			"name": "Hot rolled iron or non-alloy steel, flat,w >600mm, t <3mm, myp 275 mpa"
  		},
  		{
  			"id": "15720841",
  			"id_hs92": "720841",
  			"name": "Hot rolled iron or non-alloy steel, flat,width 600-1250mm, t >4mm, nes"
  		},
  		{
  			"id": "15720842",
  			"id_hs92": "720842",
  			"name": "Hot rolled iron or non-alloy steel, flat,width >600mm, t >10mm, nes"
  		},
  		{
  			"id": "15720843",
  			"id_hs92": "720843",
  			"name": "Hot rolled iron or non-alloy steel, flat,width >600mm, t 4.75-10mm, nes"
  		},
  		{
  			"id": "15720844",
  			"id_hs92": "720844",
  			"name": "Hot rolled iron or non-alloy steel, flat,width >600mm, t 3.0-4.75mm, ne"
  		},
  		{
  			"id": "15720845",
  			"id_hs92": "720845",
  			"name": "Hot rolled iron or non-alloy steel, flat,width >600mm, t <3mm, nes"
  		},
  		{
  			"id": "15720890",
  			"id_hs92": "720890",
  			"name": "Hot rolled iron or non-alloy steel, width >600mm, nes"
  		},
  		{
  			"id": "157209",
  			"id_hs92": "7209",
  			"name": "Cold-Rolled Iron"
  		},
  		{
  			"id": "15720911",
  			"id_hs92": "720911",
  			"name": "Cold rolled iron or non-alloy steel, coil, width >600mm, t >3mm, 355 mp"
  		},
  		{
  			"id": "15720912",
  			"id_hs92": "720912",
  			"name": "Cold rolled iron or non-alloy steel, coil, w >600mm, t 1.0-3mm, 275 mpa"
  		},
  		{
  			"id": "15720913",
  			"id_hs92": "720913",
  			"name": "Cold rolled iron or non-alloy steel, coil, w >600mm, t 0.5-<1mm, 275 mp"
  		},
  		{
  			"id": "15720914",
  			"id_hs92": "720914",
  			"name": "Cold rolled iron or non-alloy steel, coil, w >600mm, t <0.5mm, 275 mpa"
  		},
  		{
  			"id": "15720921",
  			"id_hs92": "720921",
  			"name": "Cold rolled iron or non-alloy steel, coil, width >600mm, t >3mm, nes"
  		},
  		{
  			"id": "15720922",
  			"id_hs92": "720922",
  			"name": "Cold rolled iron or non-alloy steel, coil, width >600mm, t 1-3mm, nes"
  		},
  		{
  			"id": "15720923",
  			"id_hs92": "720923",
  			"name": "Cold rolled iron or non-alloy steel, coil, width >600mm, t 0.5-1mm, nes"
  		},
  		{
  			"id": "15720924",
  			"id_hs92": "720924",
  			"name": "Cold rolled iron or non-alloy steel, coil, width >600mm, t <0.5mm, nes"
  		},
  		{
  			"id": "15720931",
  			"id_hs92": "720931",
  			"name": "Cold rolled iron or non-alloy steel, flat, width >600mm, t >3mm, 355 mp"
  		},
  		{
  			"id": "15720932",
  			"id_hs92": "720932",
  			"name": "Cold rolled iron or non-alloy steel, flat, w >600mm, t 1-3mm, 355 mpa"
  		},
  		{
  			"id": "15720933",
  			"id_hs92": "720933",
  			"name": "Cold rolled iron or non-alloy steel, flat, w >600mm, t 0.5-1mm, 355 mpa"
  		},
  		{
  			"id": "15720934",
  			"id_hs92": "720934",
  			"name": "Cold rolled iron or non-alloy steel, flat, w >600mm, t <0.5mm, 355 mpa"
  		},
  		{
  			"id": "15720941",
  			"id_hs92": "720941",
  			"name": "Cold rolled iron or non-alloy steel, flat, width >600mm, t >3mm, nes"
  		},
  		{
  			"id": "15720942",
  			"id_hs92": "720942",
  			"name": "Cold rolled iron or non-alloy steel, flat, width >600mm, t 1-3mm, nes"
  		},
  		{
  			"id": "15720943",
  			"id_hs92": "720943",
  			"name": "Cold rolled iron or non-alloy steel, flat, width >600mm, t 0.5-1mm, nes"
  		},
  		{
  			"id": "15720944",
  			"id_hs92": "720944",
  			"name": "Cold rolled iron or non-alloy steel, flat, width >600mm, t <0.5mm, nes"
  		},
  		{
  			"id": "15720990",
  			"id_hs92": "720990",
  			"name": "Cold rolled iron or non-alloy steel, flat, width >600mm, nes"
  		},
  		{
  			"id": "157210",
  			"id_hs92": "7210",
  			"name": "Coated Flat-Rolled Iron"
  		},
  		{
  			"id": "15721011",
  			"id_hs92": "721011",
  			"name": "Flat rolled iron or non-alloy steel, coated with tin, w >600mm, t >0.5m"
  		},
  		{
  			"id": "15721012",
  			"id_hs92": "721012",
  			"name": "Flat rolled iron or non-alloy steel, coated with tin, w >600mm, t <0.5m"
  		},
  		{
  			"id": "15721020",
  			"id_hs92": "721020",
  			"name": "Flat rolled iron or non-alloy steel, coated with lead, width >600mm"
  		},
  		{
  			"id": "15721031",
  			"id_hs92": "721031",
  			"name": "Flat rolled iron or non-alloy steel, electro plate/zinc,<3mm/275,>3/355"
  		},
  		{
  			"id": "15721039",
  			"id_hs92": "721039",
  			"name": "Flat rolled iron or non-alloy steel, electro plate/zinc,w >600mm, nes"
  		},
  		{
  			"id": "15721041",
  			"id_hs92": "721041",
  			"name": "Flat rolled iron or non-alloy steel, coat/zinc, corrugated, w >600m, ne"
  		},
  		{
  			"id": "15721049",
  			"id_hs92": "721049",
  			"name": "Flat rolled iron or non-alloy steel, coated with zinc, width >600mm, ne"
  		},
  		{
  			"id": "15721050",
  			"id_hs92": "721050",
  			"name": "Flat rolled iron or non-alloy steel, coated chromium/oxides, w> 600 mm"
  		},
  		{
  			"id": "15721060",
  			"id_hs92": "721060",
  			"name": "Flat rolled iron or non-alloy steel, coated with aluminium, width>600mm"
  		},
  		{
  			"id": "15721070",
  			"id_hs92": "721070",
  			"name": "Flat rolled iron or non-alloy steel, painted/plastic coated,width>600mm"
  		},
  		{
  			"id": "15721090",
  			"id_hs92": "721090",
  			"name": "Flat rolled iron or non-alloy steel, clad/plated/coated, w >600mm, nes"
  		},
  		{
  			"id": "157211",
  			"id_hs92": "7211",
  			"name": "Large Flat-Rolled Iron"
  		},
  		{
  			"id": "15721111",
  			"id_hs92": "721111",
  			"name": "Hot box roll iron or non-alloy steel, flat, w 150-600mm, t >4mm, myp>35"
  		},
  		{
  			"id": "15721112",
  			"id_hs92": "721112",
  			"name": "Hot rolled iron or non-alloy steel, width <600mm, t >4.75mm, myp 355"
  		},
  		{
  			"id": "15721119",
  			"id_hs92": "721119",
  			"name": "Hot rolled iron or non-alloy steel, w <600mm, t<3mm myp275/t>3mm myp355"
  		},
  		{
  			"id": "15721121",
  			"id_hs92": "721121",
  			"name": "Hot box rolled iron or non-alloy steel, flat, w 150-600mm,t >4mm, uncla"
  		},
  		{
  			"id": "15721122",
  			"id_hs92": "721122",
  			"name": "Hot rolled iron or non-alloy steel, width <600mm, t >4.75mm, unclad nes"
  		},
  		{
  			"id": "15721129",
  			"id_hs92": "721129",
  			"name": "Hot rolled iron or non-alloy steel, width <600mm unclad, nes"
  		},
  		{
  			"id": "15721130",
  			"id_hs92": "721130",
  			"name": "Cold rolled iron or non-alloy steel, width <600mm, <3mm-myp275, >3mm-35"
  		},
  		{
  			"id": "15721141",
  			"id_hs92": "721141",
  			"name": "Flat rolled iron or non-alloy steel, width <600mm, unclad, <0.25% C, ne"
  		},
  		{
  			"id": "15721149",
  			"id_hs92": "721149",
  			"name": "Flat rolled iron or non-alloy steel, width <600mm, unclad, nes"
  		},
  		{
  			"id": "15721190",
  			"id_hs92": "721190",
  			"name": "Flat rolled iron or non-alloy steel, width <600mm, unclad, nes"
  		},
  		{
  			"id": "157212",
  			"id_hs92": "7212",
  			"name": "Large Coated Flat-Rolled Iron"
  		},
  		{
  			"id": "15721210",
  			"id_hs92": "721210",
  			"name": "Flat rolled iron or non-alloy steel, width <600mm, plated with tin"
  		},
  		{
  			"id": "15721221",
  			"id_hs92": "721221",
  			"name": "Flat rolled steel, <600mm, zinc plate,<3mm-275/3mm-35"
  		},
  		{
  			"id": "15721229",
  			"id_hs92": "721229",
  			"name": "Flat rolled steel, <600mm, electro-plated zinc, nes"
  		},
  		{
  			"id": "15721230",
  			"id_hs92": "721230",
  			"name": "Flat rolled iron or non-alloy steel, <600mm, coated with zinc, nes"
  		},
  		{
  			"id": "15721240",
  			"id_hs92": "721240",
  			"name": "Flat rolled iron or non-alloy steel, <600mm, painted/plastic coated"
  		},
  		{
  			"id": "15721250",
  			"id_hs92": "721250",
  			"name": "Flat rolled iron or non-alloy steel, <600mm, plated/coated, nes"
  		},
  		{
  			"id": "15721260",
  			"id_hs92": "721260",
  			"name": "Flat rolled iron or non-alloy steel, width <600mm, clad"
  		},
  		{
  			"id": "157213",
  			"id_hs92": "7213",
  			"name": "Hot-Rolled Iron Bars"
  		},
  		{
  			"id": "15721310",
  			"id_hs92": "721310",
  			"name": "Hot rolled bar/rod grooved iron or non-alloy steel in irregular coils"
  		},
  		{
  			"id": "15721320",
  			"id_hs92": "721320",
  			"name": "Hot rolled bar/rod, irregular coils,free cutting stee"
  		},
  		{
  			"id": "15721331",
  			"id_hs92": "721331",
  			"name": "Hot rolled bar/rod, iron or non-alloy steel, coiled width <14mm, C<.25%"
  		},
  		{
  			"id": "15721339",
  			"id_hs92": "721339",
  			"name": "Hot rolled bar/rod, iron or non-alloy steel, coiled, C<.25%, nes"
  		},
  		{
  			"id": "15721341",
  			"id_hs92": "721341",
  			"name": "Hot rolled bar/rod, iron or non-alloy steel, coiled w <14mm, C .25-.6%"
  		},
  		{
  			"id": "15721349",
  			"id_hs92": "721349",
  			"name": "Hot rolled bar/rod, iron or non-alloy steel, coiled, C 0.25-0.6%"
  		},
  		{
  			"id": "15721350",
  			"id_hs92": "721350",
  			"name": "Bar/rod, iron or non-alloy steel, irregular coils, >0.6%C, nes"
  		},
  		{
  			"id": "157214",
  			"id_hs92": "7214",
  			"name": "Raw Iron Bars"
  		},
  		{
  			"id": "15721410",
  			"id_hs92": "721410",
  			"name": "Bar/rod, iron or non-alloy steel, forged"
  		},
  		{
  			"id": "15721420",
  			"id_hs92": "721420",
  			"name": "Bar/rod, iron or non-alloy steel, indented or twisted, nes"
  		},
  		{
  			"id": "15721430",
  			"id_hs92": "721430",
  			"name": "Bar/rod, iron or non-alloy steel, of free cutting steel, nes"
  		},
  		{
  			"id": "15721440",
  			"id_hs92": "721440",
  			"name": "Bar/rod, iron or non-alloy steel, hot formed <0.25%C, nes"
  		},
  		{
  			"id": "15721450",
  			"id_hs92": "721450",
  			"name": "Bar/rod, iron or non-alloy steel, hot formed 0.25-0.6%C, nes"
  		},
  		{
  			"id": "15721460",
  			"id_hs92": "721460",
  			"name": "Bar/rod, iron or non-alloy steel, hot formed >0.6%C, nes"
  		},
  		{
  			"id": "157215",
  			"id_hs92": "7215",
  			"name": "Other Iron Bars"
  		},
  		{
  			"id": "15721510",
  			"id_hs92": "721510",
  			"name": "Bar/rod, cold formed/finished free cutting steel"
  		},
  		{
  			"id": "15721520",
  			"id_hs92": "721520",
  			"name": "Bar/rod, iron or non-alloy steel, cold formed/finished, <0.25%C"
  		},
  		{
  			"id": "15721530",
  			"id_hs92": "721530",
  			"name": "Bar/rod, iron or non-alloy steel, cold formed/finished, 0.25-0.6%C"
  		},
  		{
  			"id": "15721540",
  			"id_hs92": "721540",
  			"name": "Bar/rod, iron or non-alloy steel, cold formed/finished, >0.6%C"
  		},
  		{
  			"id": "15721590",
  			"id_hs92": "721590",
  			"name": "Bar/rod, iron or non-alloy steel, nes"
  		},
  		{
  			"id": "157216",
  			"id_hs92": "7216",
  			"name": "Iron Blocks"
  		},
  		{
  			"id": "15721610",
  			"id_hs92": "721610",
  			"name": "Sections, U/I/H, iron or non-alloy steel, nfw than hot formed <80mm"
  		},
  		{
  			"id": "15721621",
  			"id_hs92": "721621",
  			"name": "Sections, L, iron or non-alloy steel, nfw hot-roll/drawn/extruded < 80m"
  		},
  		{
  			"id": "15721622",
  			"id_hs92": "721622",
  			"name": "Sections, T, iron or non-alloy steel, nfw hot-roll/drawn/extruded < 80m"
  		},
  		{
  			"id": "15721631",
  			"id_hs92": "721631",
  			"name": "Sections, U, iron or non-alloy steel, nfw hot-roll/drawn/extruded > 80m"
  		},
  		{
  			"id": "15721632",
  			"id_hs92": "721632",
  			"name": "Sections, I, iron or non-alloy steel, nfw hot-roll/drawn/extruded > 80m"
  		},
  		{
  			"id": "15721633",
  			"id_hs92": "721633",
  			"name": "Sections, H, iron or non-alloy steel, nfw hot-roll/drawn/extruded > 80m"
  		},
  		{
  			"id": "15721640",
  			"id_hs92": "721640",
  			"name": "Sections,L/T,iron or non-alloy steel, nfw hot-roll/drawn/extruded > 80m"
  		},
  		{
  			"id": "15721650",
  			"id_hs92": "721650",
  			"name": "Sections, nes, iron or non-alloy steel, nfw hot-roll/drawn/extruded"
  		},
  		{
  			"id": "15721660",
  			"id_hs92": "721660",
  			"name": "Sections, nes, iron or non-alloy steel, nfw than cold formed/finished"
  		},
  		{
  			"id": "15721690",
  			"id_hs92": "721690",
  			"name": "Angles/shapes/sections, iron or non-alloy steel, nes"
  		},
  		{
  			"id": "157217",
  			"id_hs92": "7217",
  			"name": "Iron Wire"
  		},
  		{
  			"id": "15721711",
  			"id_hs92": "721711",
  			"name": "Wire, iron or non-alloy steel, not plated or coated, <0.25%C"
  		},
  		{
  			"id": "15721712",
  			"id_hs92": "721712",
  			"name": "Wire, iron or non-alloy steel, plated or coated with zinc <0.25%C"
  		},
  		{
  			"id": "15721713",
  			"id_hs92": "721713",
  			"name": "Wire, iron or non-alloy steel, of base metal plated/coated nes, <0.25%C"
  		},
  		{
  			"id": "15721719",
  			"id_hs92": "721719",
  			"name": "Wire, iron or non-alloy steel, <0.25% carbon, nes"
  		},
  		{
  			"id": "15721721",
  			"id_hs92": "721721",
  			"name": "Wire, iron or non-alloy steel, not plated or coated, 0.25-0.6%C"
  		},
  		{
  			"id": "15721722",
  			"id_hs92": "721722",
  			"name": "Wire, iron or non-alloy steel, zinc plated/coated, 0.25-0.6%C"
  		},
  		{
  			"id": "15721723",
  			"id_hs92": "721723",
  			"name": "Wire, iron or non-alloy steel, base metal plated/coated nes, 0.25-0.6%C"
  		},
  		{
  			"id": "15721729",
  			"id_hs92": "721729",
  			"name": "Wire, iron or non-alloy steel, 0.25-0.6% carbon, nes"
  		},
  		{
  			"id": "15721731",
  			"id_hs92": "721731",
  			"name": "Wire, iron or non-alloy steel, not plated or coated, >0.6%C"
  		},
  		{
  			"id": "15721732",
  			"id_hs92": "721732",
  			"name": "Wire, iron or non-alloy steel, zinc plated/coated, >0.6%C"
  		},
  		{
  			"id": "15721733",
  			"id_hs92": "721733",
  			"name": "Wire, iron or non-alloy steel, of base metal plated/coated nes, >0.6%C"
  		},
  		{
  			"id": "15721739",
  			"id_hs92": "721739",
  			"name": "Wire, iron or non-alloy steel, more than 0.6% carbon, nes"
  		},
  		{
  			"id": "157218",
  			"id_hs92": "7218",
  			"name": "Stainless Steel Ingots"
  		},
  		{
  			"id": "15721810",
  			"id_hs92": "721810",
  			"name": "Ingots and other primary forms, stainless steel"
  		},
  		{
  			"id": "15721890",
  			"id_hs92": "721890",
  			"name": "Semi-finished products, stainless steel"
  		},
  		{
  			"id": "157219",
  			"id_hs92": "7219",
  			"name": "Large Flat-Rolled Stainless Steel"
  		},
  		{
  			"id": "15721911",
  			"id_hs92": "721911",
  			"name": "Hot rolled stainless steel coil, w >600mm, t >10mm"
  		},
  		{
  			"id": "15721912",
  			"id_hs92": "721912",
  			"name": "Hot rolled stainless steel coil, w >600mm, t 4.75-10m"
  		},
  		{
  			"id": "15721913",
  			"id_hs92": "721913",
  			"name": "Hot rolled stainless steel coil, w >600mm, t 3-4.75mm"
  		},
  		{
  			"id": "15721914",
  			"id_hs92": "721914",
  			"name": "Hot rolled stainless steel coil, w >600mm, t <3mm"
  		},
  		{
  			"id": "15721921",
  			"id_hs92": "721921",
  			"name": "Hot rolled stainless steel flat, w >600mm, t >10mm"
  		},
  		{
  			"id": "15721922",
  			"id_hs92": "721922",
  			"name": "Hot rolled stainless steel flat, w >600mm, t 4.75-10m"
  		},
  		{
  			"id": "15721923",
  			"id_hs92": "721923",
  			"name": "Hot rolled stainless steel flat, w >600mm, t 3-4.75mm"
  		},
  		{
  			"id": "15721924",
  			"id_hs92": "721924",
  			"name": "Hot rolled stainless steel flat, w >600mm, t <3mm"
  		},
  		{
  			"id": "15721931",
  			"id_hs92": "721931",
  			"name": "Cold rolled stainless steel, w >600mm, t >4.75mm"
  		},
  		{
  			"id": "15721932",
  			"id_hs92": "721932",
  			"name": "Cold rolled stainless steel, w >600mm, t 3.0-4.75mm"
  		},
  		{
  			"id": "15721933",
  			"id_hs92": "721933",
  			"name": "Cold rolled stainless steel, w >600mm, t 1.0-3.0 mm"
  		},
  		{
  			"id": "15721934",
  			"id_hs92": "721934",
  			"name": "Cold rolled stainless steel, w >600mm, t 0.5-1.0 mm"
  		},
  		{
  			"id": "15721935",
  			"id_hs92": "721935",
  			"name": "Cold rolled stainless steel, w >600mm, t /0.5 mm"
  		},
  		{
  			"id": "15721990",
  			"id_hs92": "721990",
  			"name": "Rolled stainless steel sheet, width > 600mm, nes"
  		},
  		{
  			"id": "157220",
  			"id_hs92": "7220",
  			"name": "Flat-Rolled Stainless Steel"
  		},
  		{
  			"id": "15722011",
  			"id_hs92": "722011",
  			"name": "Hot rolled stainless steel sheet, w <600mm, t >4.75 m"
  		},
  		{
  			"id": "15722012",
  			"id_hs92": "722012",
  			"name": "Hot rolled stainless steel sheet, w <600mm, t <4.75 m"
  		},
  		{
  			"id": "15722020",
  			"id_hs92": "722020",
  			"name": "Stainless steel sheet, w <600mm, cold rolled/reduced"
  		},
  		{
  			"id": "15722090",
  			"id_hs92": "722090",
  			"name": "Rolled stainless steel sheet, width < 600mm, nes"
  		},
  		{
  			"id": "157221",
  			"id_hs92": "7221",
  			"name": "Hot-Rolled Stainless Steel Bars"
  		},
  		{
  			"id": "15722100",
  			"id_hs92": "722100",
  			"name": "Bar or rod, stainless steel, hot rolled, coiled"
  		},
  		{
  			"id": "157222",
  			"id_hs92": "7222",
  			"name": "Other Stainless Steel Bars"
  		},
  		{
  			"id": "15722210",
  			"id_hs92": "722210",
  			"name": "Stainless steel bar nfw than hot rolled/drawn/extrude"
  		},
  		{
  			"id": "15722220",
  			"id_hs92": "722220",
  			"name": "Stainless steel bar nfw than cold formed/cold finishe"
  		},
  		{
  			"id": "15722230",
  			"id_hs92": "722230",
  			"name": "Stainless steel bar or rod nes"
  		},
  		{
  			"id": "15722240",
  			"id_hs92": "722240",
  			"name": "Angles, shapes and sections, stainless steel"
  		},
  		{
  			"id": "157223",
  			"id_hs92": "7223",
  			"name": "Stainless Steel Wire"
  		},
  		{
  			"id": "15722300",
  			"id_hs92": "722300",
  			"name": "Wire of stainless steel"
  		},
  		{
  			"id": "157224",
  			"id_hs92": "7224",
  			"name": "Steel Ingots"
  		},
  		{
  			"id": "15722410",
  			"id_hs92": "722410",
  			"name": "Ingots, primary forms of alloy steel, except stainles"
  		},
  		{
  			"id": "15722490",
  			"id_hs92": "722490",
  			"name": "Semi-finished products of alloy steel except stainles"
  		},
  		{
  			"id": "157225",
  			"id_hs92": "7225",
  			"name": "Flat Flat-Rolled Steel"
  		},
  		{
  			"id": "15722510",
  			"id_hs92": "722510",
  			"name": "Flat rolled silicon-electrical steel, width >600mm"
  		},
  		{
  			"id": "15722520",
  			"id_hs92": "722520",
  			"name": "Flat rolled high speed steel width >600mm"
  		},
  		{
  			"id": "15722530",
  			"id_hs92": "722530",
  			"name": "Hot rolled alloy-steel, coils width >600mm, nes"
  		},
  		{
  			"id": "15722540",
  			"id_hs92": "722540",
  			"name": "Hot rolled alloy-steel, not in coil width >600mm, nes"
  		},
  		{
  			"id": "15722550",
  			"id_hs92": "722550",
  			"name": "Cold rolled alloy-steel, width >600mm, nes"
  		},
  		{
  			"id": "15722590",
  			"id_hs92": "722590",
  			"name": "Flat rolled alloy-steel, width >600mm, nes"
  		},
  		{
  			"id": "157226",
  			"id_hs92": "7226",
  			"name": "Flat-Rolled Iron"
  		},
  		{
  			"id": "15722610",
  			"id_hs92": "722610",
  			"name": "Flat rolled silicon-electrical steel, <600mm wide"
  		},
  		{
  			"id": "15722620",
  			"id_hs92": "722620",
  			"name": "Flat rolled high speed steel <600mm wide"
  		},
  		{
  			"id": "15722691",
  			"id_hs92": "722691",
  			"name": "Hot rolled alloy-steel nes nfw, <600mm wide"
  		},
  		{
  			"id": "15722692",
  			"id_hs92": "722692",
  			"name": "Cold rolled alloy-steel nes nfw, <600mm wide"
  		},
  		{
  			"id": "15722699",
  			"id_hs92": "722699",
  			"name": "Flat rolled alloy-steel, <600mm wide, nes"
  		},
  		{
  			"id": "157227",
  			"id_hs92": "7227",
  			"name": "Steel Bars"
  		},
  		{
  			"id": "15722710",
  			"id_hs92": "722710",
  			"name": "Bar/rod, of high speed steel, irregular coils"
  		},
  		{
  			"id": "15722720",
  			"id_hs92": "722720",
  			"name": "Bar/rod, of silico-manganese steel, irregular coils"
  		},
  		{
  			"id": "15722790",
  			"id_hs92": "722790",
  			"name": "Bar/rod, alloy steel nes, irregularly wound coils"
  		},
  		{
  			"id": "157228",
  			"id_hs92": "7228",
  			"name": "Other Steel Bars"
  		},
  		{
  			"id": "15722810",
  			"id_hs92": "722810",
  			"name": "Bar/rod of high speed steel not in coils"
  		},
  		{
  			"id": "15722820",
  			"id_hs92": "722820",
  			"name": "Bar/rod of silico-manganese steel not in coils"
  		},
  		{
  			"id": "15722830",
  			"id_hs92": "722830",
  			"name": "Bar/rod, alloy steel nes,nfw hot rolled/drawn/extrude"
  		},
  		{
  			"id": "15722840",
  			"id_hs92": "722840",
  			"name": "Bar/rod nes, alloy steel nes, nfw forged"
  		},
  		{
  			"id": "15722850",
  			"id_hs92": "722850",
  			"name": "Bar/rod nes, alloy steel nes, nfw cold formed/finishe"
  		},
  		{
  			"id": "15722860",
  			"id_hs92": "722860",
  			"name": "Bar/rod, alloy steel nes"
  		},
  		{
  			"id": "15722870",
  			"id_hs92": "722870",
  			"name": "Angles, shapes and sections, alloy steel, nes"
  		},
  		{
  			"id": "15722880",
  			"id_hs92": "722880",
  			"name": "Hollow drill bars and rods of alloy/non-alloy steel"
  		},
  		{
  			"id": "157229",
  			"id_hs92": "7229",
  			"name": "Steel Wire"
  		},
  		{
  			"id": "15722910",
  			"id_hs92": "722910",
  			"name": "Wire of high speed steel"
  		},
  		{
  			"id": "15722920",
  			"id_hs92": "722920",
  			"name": "Wire of silico-manganese steel"
  		},
  		{
  			"id": "15722990",
  			"id_hs92": "722990",
  			"name": "Wire of alloy steel nes"
  		},
  		{
  			"id": "157301",
  			"id_hs92": "7301",
  			"name": "Iron Sheet Piling"
  		},
  		{
  			"id": "15730110",
  			"id_hs92": "730110",
  			"name": "Sheet piling of iron or steel"
  		},
  		{
  			"id": "15730120",
  			"id_hs92": "730120",
  			"name": "Angles, shapes and sections, welded, iron or steel"
  		},
  		{
  			"id": "157302",
  			"id_hs92": "7302",
  			"name": "Iron Railway Products"
  		},
  		{
  			"id": "15730210",
  			"id_hs92": "730210",
  			"name": "Railway/tramway rails, iron or steel"
  		},
  		{
  			"id": "15730220",
  			"id_hs92": "730220",
  			"name": "Sleepers (cross-ties), iron or steel"
  		},
  		{
  			"id": "15730230",
  			"id_hs92": "730230",
  			"name": "Railway/tramway switch/crossing material, iron/steel"
  		},
  		{
  			"id": "15730240",
  			"id_hs92": "730240",
  			"name": "Railway fish plates and sole plates, iron or steel"
  		},
  		{
  			"id": "15730290",
  			"id_hs92": "730290",
  			"name": "Rail/tramway construction material of iron/steel, nes"
  		},
  		{
  			"id": "157303",
  			"id_hs92": "7303",
  			"name": "Cast Iron Pipes"
  		},
  		{
  			"id": "15730300",
  			"id_hs92": "730300",
  			"name": "Tubes, pipes and hollow profiles, of cast iron"
  		},
  		{
  			"id": "157304",
  			"id_hs92": "7304",
  			"name": "Iron Pipes"
  		},
  		{
  			"id": "15730410",
  			"id_hs92": "730410",
  			"name": "Pipes, line, iron or steel, for oil or gas pipelines"
  		},
  		{
  			"id": "15730420",
  			"id_hs92": "730420",
  			"name": "Casings, tubing and drill pipe, for oil drilling"
  		},
  		{
  			"id": "15730431",
  			"id_hs92": "730431",
  			"name": "Iron/non-alloy steel pipe, cold drawn/rolled, nes"
  		},
  		{
  			"id": "15730439",
  			"id_hs92": "730439",
  			"name": "Iron/non-alloy steel pipe or tubing, nes"
  		},
  		{
  			"id": "15730441",
  			"id_hs92": "730441",
  			"name": "Stainless steel pipe or tubing, cold rolled"
  		},
  		{
  			"id": "15730449",
  			"id_hs92": "730449",
  			"name": "Stainless steel pipe or tubing, except cold rolled"
  		},
  		{
  			"id": "15730451",
  			"id_hs92": "730451",
  			"name": "Alloy steel pipe or tubing, cold rolled"
  		},
  		{
  			"id": "15730459",
  			"id_hs92": "730459",
  			"name": "Alloy steel pipe or tubing, except cold rolled"
  		},
  		{
  			"id": "15730490",
  			"id_hs92": "730490",
  			"name": "Iron or steel tubes, pipes or hollow profiles, nes"
  		},
  		{
  			"id": "157305",
  			"id_hs92": "7305",
  			"name": "Other Large Iron Pipes"
  		},
  		{
  			"id": "15730511",
  			"id_hs92": "730511",
  			"name": "Pipe-line submerged arc welded steel diameter >406mm"
  		},
  		{
  			"id": "15730512",
  			"id_hs92": "730512",
  			"name": "Pipe-line longitudinal nes welded steel,diameter>406m"
  		},
  		{
  			"id": "15730519",
  			"id_hs92": "730519",
  			"name": "Pipe (oil/gas line) iron or steel nes, diameter >406m"
  		},
  		{
  			"id": "15730520",
  			"id_hs92": "730520",
  			"name": "Casings,circular, iron/steel, oil/gas drilling >406mm"
  		},
  		{
  			"id": "15730531",
  			"id_hs92": "730531",
  			"name": "Steel pipes nes, longitudinally welded diameter>406mm"
  		},
  		{
  			"id": "15730539",
  			"id_hs92": "730539",
  			"name": "Pipes nes, iron/steel, welded nes, diameter >406.4mm"
  		},
  		{
  			"id": "15730590",
  			"id_hs92": "730590",
  			"name": "Tube/pipe nes,iron/steel riveted etc, diameter>406.4m"
  		},
  		{
  			"id": "157306",
  			"id_hs92": "7306",
  			"name": "Other Small Iron Pipes"
  		},
  		{
  			"id": "15730610",
  			"id_hs92": "730610",
  			"name": "Pipe (oil/gas line) iron or steel nes, diameter <406m"
  		},
  		{
  			"id": "15730620",
  			"id_hs92": "730620",
  			"name": "Casings,circular, iron/steel, oil/gas drilling <406mm"
  		},
  		{
  			"id": "15730630",
  			"id_hs92": "730630",
  			"name": "Pipes etc nes, iron/steel welded nes,diameter <406.4m"
  		},
  		{
  			"id": "15730640",
  			"id_hs92": "730640",
  			"name": "Pipes and tubing, stainless steel, welded"
  		},
  		{
  			"id": "15730650",
  			"id_hs92": "730650",
  			"name": "Pipes and tubing, alloy steel nes, welded"
  		},
  		{
  			"id": "15730660",
  			"id_hs92": "730660",
  			"name": "Hollow profiles/tubes,iron/steel,non-circular, welded"
  		},
  		{
  			"id": "15730690",
  			"id_hs92": "730690",
  			"name": "Tube/pipe/hollow profile, iron/steel,riveted/open sea"
  		},
  		{
  			"id": "157307",
  			"id_hs92": "7307",
  			"name": "Iron Pipe Fittings"
  		},
  		{
  			"id": "15730711",
  			"id_hs92": "730711",
  			"name": "Pipe fittings of non-malleable cast iron"
  		},
  		{
  			"id": "15730719",
  			"id_hs92": "730719",
  			"name": "Pipe fittings of malleable iron or steel, cast"
  		},
  		{
  			"id": "15730721",
  			"id_hs92": "730721",
  			"name": "Flanges, stainless steel"
  		},
  		{
  			"id": "15730722",
  			"id_hs92": "730722",
  			"name": "Threaded elbows, bends and sleeves of stainless steel"
  		},
  		{
  			"id": "15730723",
  			"id_hs92": "730723",
  			"name": "Pipe fittings, butt welding of stainless steel"
  		},
  		{
  			"id": "15730729",
  			"id_hs92": "730729",
  			"name": "Pipe fittings of stainless steel except butt welding"
  		},
  		{
  			"id": "15730791",
  			"id_hs92": "730791",
  			"name": "Pipe flanges, iron or steel except stainless/cast"
  		},
  		{
  			"id": "15730792",
  			"id_hs92": "730792",
  			"name": "Threaded fittings, iron or steel except stainless/cas"
  		},
  		{
  			"id": "15730793",
  			"id_hs92": "730793",
  			"name": "Butt weld fittings, iron/steel except stainless/cast"
  		},
  		{
  			"id": "15730799",
  			"id_hs92": "730799",
  			"name": "Fittings, pipe or tube, iron or steel, nes"
  		},
  		{
  			"id": "157308",
  			"id_hs92": "7308",
  			"name": "Iron Structures"
  		},
  		{
  			"id": "15730810",
  			"id_hs92": "730810",
  			"name": "Bridges and bridge sections, iron or steel"
  		},
  		{
  			"id": "15730820",
  			"id_hs92": "730820",
  			"name": "Towers and lattice masts, iron or steel"
  		},
  		{
  			"id": "15730830",
  			"id_hs92": "730830",
  			"name": "Doors, windows, frames of iron or steel"
  		},
  		{
  			"id": "15730840",
  			"id_hs92": "730840",
  			"name": "Props etc for scaffold, shuttering, pits, iron/steel"
  		},
  		{
  			"id": "15730890",
  			"id_hs92": "730890",
  			"name": "Structures and parts of structures, iron or steel, ne"
  		},
  		{
  			"id": "157309",
  			"id_hs92": "7309",
  			"name": "Large Iron Containers"
  		},
  		{
  			"id": "15730900",
  			"id_hs92": "730900",
  			"name": "Reservoirs/tanks/vats/etc, iron/steel capacity >300l"
  		},
  		{
  			"id": "157310",
  			"id_hs92": "7310",
  			"name": "Small Iron Containers"
  		},
  		{
  			"id": "15731010",
  			"id_hs92": "731010",
  			"name": "Tank, cask or container, iron/steel, capacity 50-300l"
  		},
  		{
  			"id": "15731021",
  			"id_hs92": "731021",
  			"name": "Cans, iron/steel, capacity <50l closed by crimp/solde"
  		},
  		{
  			"id": "15731029",
  			"id_hs92": "731029",
  			"name": "Cans, iron or steel, capacity <50 litres nes"
  		},
  		{
  			"id": "157311",
  			"id_hs92": "7311",
  			"name": "Iron Gas Containers"
  		},
  		{
  			"id": "15731100",
  			"id_hs92": "731100",
  			"name": "Containers for compressed/liquefied gas, iron or stee"
  		},
  		{
  			"id": "157312",
  			"id_hs92": "7312",
  			"name": "Stranded Iron Wire"
  		},
  		{
  			"id": "15731210",
  			"id_hs92": "731210",
  			"name": "Stranded steel wire/cable/etc, no electric insulation"
  		},
  		{
  			"id": "15731290",
  			"id_hs92": "731290",
  			"name": "Plaited bands/etc, iron/steel, no electric insulation"
  		},
  		{
  			"id": "157313",
  			"id_hs92": "7313",
  			"name": "Barbed Wire"
  		},
  		{
  			"id": "15731300",
  			"id_hs92": "731300",
  			"name": "Wire for fencing, including barbed wire"
  		},
  		{
  			"id": "157314",
  			"id_hs92": "7314",
  			"name": "Iron Cloth"
  		},
  		{
  			"id": "15731411",
  			"id_hs92": "731411",
  			"name": "Woven products of stainless steel"
  		},
  		{
  			"id": "15731419",
  			"id_hs92": "731419",
  			"name": "Woven products of iron/steel, except stainless steel"
  		},
  		{
  			"id": "15731420",
  			"id_hs92": "731420",
  			"name": "Net/fencing, welded, iron or non-alloy steel <3mm wire, <100cm mesh"
  		},
  		{
  			"id": "15731430",
  			"id_hs92": "731430",
  			"name": "Net/fencing, welded iron or non-alloy steel, heavy"
  		},
  		{
  			"id": "15731441",
  			"id_hs92": "731441",
  			"name": "Net/fencing, galvanized iron or non-alloy steel <3mm wire, <100cm mesh"
  		},
  		{
  			"id": "15731442",
  			"id_hs92": "731442",
  			"name": "Net/fencing,plastic-coated iron or non-alloy steel <3mm wire,<100cm mes"
  		},
  		{
  			"id": "15731449",
  			"id_hs92": "731449",
  			"name": "Net/fencing, iron or steel <3mm wire, <100cm mesh, ne"
  		},
  		{
  			"id": "15731450",
  			"id_hs92": "731450",
  			"name": "Expanded metal, iron or non-alloy steel <3mm wire, <100cm mesh"
  		},
  		{
  			"id": "157315",
  			"id_hs92": "7315",
  			"name": "Iron Chains"
  		},
  		{
  			"id": "15731511",
  			"id_hs92": "731511",
  			"name": "Chain, roller, iron or steel"
  		},
  		{
  			"id": "15731512",
  			"id_hs92": "731512",
  			"name": "Chain, articulated link, iron or steel, except roller"
  		},
  		{
  			"id": "15731519",
  			"id_hs92": "731519",
  			"name": "Chain parts, articulated link, iron or steel"
  		},
  		{
  			"id": "15731520",
  			"id_hs92": "731520",
  			"name": "Chain, skid, iron or steel"
  		},
  		{
  			"id": "15731581",
  			"id_hs92": "731581",
  			"name": "Chain, stud link, iron or steel"
  		},
  		{
  			"id": "15731582",
  			"id_hs92": "731582",
  			"name": "Chain, welded link, iron or steel"
  		},
  		{
  			"id": "15731589",
  			"id_hs92": "731589",
  			"name": "Chain, iron or steel, nes"
  		},
  		{
  			"id": "15731590",
  			"id_hs92": "731590",
  			"name": "Chain parts, iron or steel, except articulated link"
  		},
  		{
  			"id": "157316",
  			"id_hs92": "7316",
  			"name": "Iron Anchors"
  		},
  		{
  			"id": "15731600",
  			"id_hs92": "731600",
  			"name": "Anchors, grapnels and parts thereof of iron or steel"
  		},
  		{
  			"id": "157317",
  			"id_hs92": "7317",
  			"name": "Iron Nails"
  		},
  		{
  			"id": "15731700",
  			"id_hs92": "731700",
  			"name": "Nails/staples/etc, iron/steel, not office stationary"
  		},
  		{
  			"id": "157318",
  			"id_hs92": "7318",
  			"name": "Iron Fasteners"
  		},
  		{
  			"id": "15731811",
  			"id_hs92": "731811",
  			"name": "Screws, coach, iron or steel"
  		},
  		{
  			"id": "15731812",
  			"id_hs92": "731812",
  			"name": "Screws, wood, iron or steel, except coach screws"
  		},
  		{
  			"id": "15731813",
  			"id_hs92": "731813",
  			"name": "Screw hooks and screw rings of iron or steel"
  		},
  		{
  			"id": "15731814",
  			"id_hs92": "731814",
  			"name": "Screws, self-tapping, iron or steel"
  		},
  		{
  			"id": "15731815",
  			"id_hs92": "731815",
  			"name": "Bolts/screws nes, with/without nut/washer, iron/steel"
  		},
  		{
  			"id": "15731816",
  			"id_hs92": "731816",
  			"name": "Nuts, iron or steel"
  		},
  		{
  			"id": "15731819",
  			"id_hs92": "731819",
  			"name": "Iron or steel threaded articles except screw, nut,bol"
  		},
  		{
  			"id": "15731821",
  			"id_hs92": "731821",
  			"name": "Washers, spring or lock, iron or steel"
  		},
  		{
  			"id": "15731822",
  			"id_hs92": "731822",
  			"name": "Washers, iron or steel, except spring/lock"
  		},
  		{
  			"id": "15731823",
  			"id_hs92": "731823",
  			"name": "Rivets, iron or steel"
  		},
  		{
  			"id": "15731824",
  			"id_hs92": "731824",
  			"name": "Cotters and cotter-pins, iron or steel"
  		},
  		{
  			"id": "15731829",
  			"id_hs92": "731829",
  			"name": "Non-threaded articles of iron or steel, nes"
  		},
  		{
  			"id": "157319",
  			"id_hs92": "7319",
  			"name": "Iron Sewing Needles"
  		},
  		{
  			"id": "15731910",
  			"id_hs92": "731910",
  			"name": "Needles, sewing, darning or embroidery, iron or steel"
  		},
  		{
  			"id": "15731920",
  			"id_hs92": "731920",
  			"name": "Pins, safety, iron or steel"
  		},
  		{
  			"id": "15731930",
  			"id_hs92": "731930",
  			"name": "Pins, iron or steel, except safety pins"
  		},
  		{
  			"id": "15731990",
  			"id_hs92": "731990",
  			"name": "Articles for sewing/etc, iron/steel, except pin/needl"
  		},
  		{
  			"id": "157320",
  			"id_hs92": "7320",
  			"name": "Iron Springs"
  		},
  		{
  			"id": "15732010",
  			"id_hs92": "732010",
  			"name": "Leaf springs/leaves thereof, iron or steel"
  		},
  		{
  			"id": "15732020",
  			"id_hs92": "732020",
  			"name": "Springs, helical, iron or steel"
  		},
  		{
  			"id": "15732090",
  			"id_hs92": "732090",
  			"name": "Springs, iron or steel, except helical/leaf"
  		},
  		{
  			"id": "157321",
  			"id_hs92": "7321",
  			"name": "Iron Stovetops"
  		},
  		{
  			"id": "15732111",
  			"id_hs92": "732111",
  			"name": "Cooking appliances for gas fuel, etc, iron or steel"
  		},
  		{
  			"id": "15732112",
  			"id_hs92": "732112",
  			"name": "Cooking appliances for liquid fuel, iron or steel"
  		},
  		{
  			"id": "15732113",
  			"id_hs92": "732113",
  			"name": "Cooking appliances for solid fuel, iron or steel"
  		},
  		{
  			"id": "15732181",
  			"id_hs92": "732181",
  			"name": "Domestic iron/steel liquid/solid fuel appliances nes"
  		},
  		{
  			"id": "15732182",
  			"id_hs92": "732182",
  			"name": "Domestic iron/steel liquid fuel appliances,not cooker"
  		},
  		{
  			"id": "15732183",
  			"id_hs92": "732183",
  			"name": "Domestic iron/steel solid fuel appliances, not cooker"
  		},
  		{
  			"id": "15732190",
  			"id_hs92": "732190",
  			"name": "Parts for domestic non-electric thermic appliances"
  		},
  		{
  			"id": "157322",
  			"id_hs92": "7322",
  			"name": "Iron Radiators"
  		},
  		{
  			"id": "15732211",
  			"id_hs92": "732211",
  			"name": "Radiators and parts thereof, cast iron"
  		},
  		{
  			"id": "15732219",
  			"id_hs92": "732219",
  			"name": "Radiators and parts thereof, iron or steel except cas"
  		},
  		{
  			"id": "15732290",
  			"id_hs92": "732290",
  			"name": "Non-electric heaters (with fan), parts, of iron/steel"
  		},
  		{
  			"id": "157323",
  			"id_hs92": "7323",
  			"name": "Iron Housewares"
  		},
  		{
  			"id": "15732310",
  			"id_hs92": "732310",
  			"name": "Iron or steel wool, pot scourers, etc, iron or steel"
  		},
  		{
  			"id": "15732391",
  			"id_hs92": "732391",
  			"name": "Table/kitchen articles, parts, unenamelled cast iron"
  		},
  		{
  			"id": "15732392",
  			"id_hs92": "732392",
  			"name": "Table/kitchen articles, parts, enamelled cast iron"
  		},
  		{
  			"id": "15732393",
  			"id_hs92": "732393",
  			"name": "Table/kitchen articles, parts, stainless steel"
  		},
  		{
  			"id": "15732394",
  			"id_hs92": "732394",
  			"name": "Table/kitchen articles, parts, enamelled iron or stee"
  		},
  		{
  			"id": "15732399",
  			"id_hs92": "732399",
  			"name": "Table/kitchen articles, parts, of iron or steel, nes"
  		},
  		{
  			"id": "157324",
  			"id_hs92": "7324",
  			"name": "Iron Toiletry"
  		},
  		{
  			"id": "15732410",
  			"id_hs92": "732410",
  			"name": "Sinks and wash basins, stainless steel"
  		},
  		{
  			"id": "15732421",
  			"id_hs92": "732421",
  			"name": "Baths, cast iron"
  		},
  		{
  			"id": "15732429",
  			"id_hs92": "732429",
  			"name": "Baths, iron or steel, except cast iron"
  		},
  		{
  			"id": "15732490",
  			"id_hs92": "732490",
  			"name": "Sanitary ware and parts thereof, iron or steel, nes"
  		},
  		{
  			"id": "157325",
  			"id_hs92": "7325",
  			"name": "Other Cast Iron Products"
  		},
  		{
  			"id": "15732510",
  			"id_hs92": "732510",
  			"name": "Cast articles, of non-malleable cast iron nes"
  		},
  		{
  			"id": "15732591",
  			"id_hs92": "732591",
  			"name": "Balls, iron or steel, cast, for grinding mills"
  		},
  		{
  			"id": "15732599",
  			"id_hs92": "732599",
  			"name": "Cast articles of iron or steel, nes"
  		},
  		{
  			"id": "157326",
  			"id_hs92": "7326",
  			"name": "Other Iron Products"
  		},
  		{
  			"id": "15732611",
  			"id_hs92": "732611",
  			"name": "Balls, iron/steel, forged/stamped for grinding mills"
  		},
  		{
  			"id": "15732619",
  			"id_hs92": "732619",
  			"name": "Articles, iron or steel nes, forged/stamped, nfw"
  		},
  		{
  			"id": "15732620",
  			"id_hs92": "732620",
  			"name": "Articles of iron or steel wire, nes"
  		},
  		{
  			"id": "15732690",
  			"id_hs92": "732690",
  			"name": "Articles of iron or steel, nes"
  		},
  		{
  			"id": "157401",
  			"id_hs92": "7401",
  			"name": "Precipitated Copper"
  		},
  		{
  			"id": "15740110",
  			"id_hs92": "740110",
  			"name": "Copper mattes"
  		},
  		{
  			"id": "15740120",
  			"id_hs92": "740120",
  			"name": "Cement copper (precipitated copper)"
  		},
  		{
  			"id": "157402",
  			"id_hs92": "7402",
  			"name": "Raw Copper"
  		},
  		{
  			"id": "15740200",
  			"id_hs92": "740200",
  			"name": "Unrefined copper, copper anodes, electrolytic refinin"
  		},
  		{
  			"id": "157403",
  			"id_hs92": "7403",
  			"name": "Refined Copper"
  		},
  		{
  			"id": "15740311",
  			"id_hs92": "740311",
  			"name": "Copper cathodes and sections of cathodes unwrought"
  		},
  		{
  			"id": "15740312",
  			"id_hs92": "740312",
  			"name": "Wire bars, copper, unwrought"
  		},
  		{
  			"id": "15740313",
  			"id_hs92": "740313",
  			"name": "Billets, copper, unwrought"
  		},
  		{
  			"id": "15740319",
  			"id_hs92": "740319",
  			"name": "Refined copper products, unwrought, nes"
  		},
  		{
  			"id": "15740321",
  			"id_hs92": "740321",
  			"name": "Copper-zinc base alloys, unwrought"
  		},
  		{
  			"id": "15740322",
  			"id_hs92": "740322",
  			"name": "Copper-tin base alloys, unwrought"
  		},
  		{
  			"id": "15740323",
  			"id_hs92": "740323",
  			"name": "Copper-nickel, copper-nickel-zinc base alloy,unwrough"
  		},
  		{
  			"id": "15740329",
  			"id_hs92": "740329",
  			"name": "Copper alloys, unwrought (other than master alloys)"
  		},
  		{
  			"id": "157404",
  			"id_hs92": "7404",
  			"name": "Scrap Copper"
  		},
  		{
  			"id": "15740400",
  			"id_hs92": "740400",
  			"name": "Copper/copper alloy waste or scrap"
  		},
  		{
  			"id": "157405",
  			"id_hs92": "7405",
  			"name": "Copper Alloys"
  		},
  		{
  			"id": "15740500",
  			"id_hs92": "740500",
  			"name": "Master alloys of copper"
  		},
  		{
  			"id": "157406",
  			"id_hs92": "7406",
  			"name": "Copper Powder"
  		},
  		{
  			"id": "15740610",
  			"id_hs92": "740610",
  			"name": "Powders, copper, of non-lamellar structure"
  		},
  		{
  			"id": "15740620",
  			"id_hs92": "740620",
  			"name": "Powders, copper, of lamellar structure and flakes"
  		},
  		{
  			"id": "157407",
  			"id_hs92": "7407",
  			"name": "Copper Bars"
  		},
  		{
  			"id": "15740710",
  			"id_hs92": "740710",
  			"name": "Bars, rods & profiles of refined copper"
  		},
  		{
  			"id": "15740721",
  			"id_hs92": "740721",
  			"name": "Bars, rods & profiles of copper-zinc base alloys"
  		},
  		{
  			"id": "15740722",
  			"id_hs92": "740722",
  			"name": "Bar, rod, profiles, copper-nickel, copper-nickel-zinc"
  		},
  		{
  			"id": "15740729",
  			"id_hs92": "740729",
  			"name": "Bars, rods & profiles, copper alloy nes"
  		},
  		{
  			"id": "157408",
  			"id_hs92": "7408",
  			"name": "Copper Wire"
  		},
  		{
  			"id": "15740811",
  			"id_hs92": "740811",
  			"name": "Wire of refined copper > 6mm wide"
  		},
  		{
  			"id": "15740819",
  			"id_hs92": "740819",
  			"name": "Wire of refined copper < 6mm wide"
  		},
  		{
  			"id": "15740821",
  			"id_hs92": "740821",
  			"name": "Wire, copper-zinc base alloy"
  		},
  		{
  			"id": "15740822",
  			"id_hs92": "740822",
  			"name": "Wire, copper-nickel or copper-nickel-zinc base alloy"
  		},
  		{
  			"id": "15740829",
  			"id_hs92": "740829",
  			"name": "Wire, copper alloy, except nickel/zinc alloys"
  		},
  		{
  			"id": "157409",
  			"id_hs92": "7409",
  			"name": "Copper Plating"
  		},
  		{
  			"id": "15740911",
  			"id_hs92": "740911",
  			"name": "Plate, sheet, strip, refined copper, coil, t > 0.15mm"
  		},
  		{
  			"id": "15740919",
  			"id_hs92": "740919",
  			"name": "Plate, sheet, strip, refined copper, flat, t > 0.15mm"
  		},
  		{
  			"id": "15740921",
  			"id_hs92": "740921",
  			"name": "Plate/sheet/strip, copper-zinc alloy, coil,t > 0.15mm"
  		},
  		{
  			"id": "15740929",
  			"id_hs92": "740929",
  			"name": "Plate/sheet/strip, copper-zinc alloy, flat, t > 0.15m"
  		},
  		{
  			"id": "15740931",
  			"id_hs92": "740931",
  			"name": "Plate/sheet/strip, copper-tin alloy, coil, t > 0.15mm"
  		},
  		{
  			"id": "15740939",
  			"id_hs92": "740939",
  			"name": "Plate/sheet/strip, copper-tin alloy, flat, > t >0.15m"
  		},
  		{
  			"id": "15740940",
  			"id_hs92": "740940",
  			"name": "Plate, sheet, strip, Copper nickel alloys, t > 0.15mm"
  		},
  		{
  			"id": "15740990",
  			"id_hs92": "740990",
  			"name": "Plate, sheet, strip, copper alloy nes, t > 0.15mm"
  		},
  		{
  			"id": "157410",
  			"id_hs92": "7410",
  			"name": "Copper Foil"
  		},
  		{
  			"id": "15741011",
  			"id_hs92": "741011",
  			"name": "Foil of refined copper, not backed, t < 0.15mm"
  		},
  		{
  			"id": "15741012",
  			"id_hs92": "741012",
  			"name": "Foil, copper alloy, not backed, t < 0.15mm"
  		},
  		{
  			"id": "15741021",
  			"id_hs92": "741021",
  			"name": "Foil of refined copper, backed, t < 0.15mm"
  		},
  		{
  			"id": "15741022",
  			"id_hs92": "741022",
  			"name": "Foil, copper alloy, backed, t < 0.15mm"
  		},
  		{
  			"id": "157411",
  			"id_hs92": "7411",
  			"name": "Copper Pipes"
  		},
  		{
  			"id": "15741110",
  			"id_hs92": "741110",
  			"name": "Pipes or tubes, refined copper"
  		},
  		{
  			"id": "15741121",
  			"id_hs92": "741121",
  			"name": "Pipes or tubes, copper-zinc base alloy"
  		},
  		{
  			"id": "15741122",
  			"id_hs92": "741122",
  			"name": "Pipes or tubes, copper-nickel alloys"
  		},
  		{
  			"id": "15741129",
  			"id_hs92": "741129",
  			"name": "Pipes or tubes, copper alloy except nickel/zinc alloy"
  		},
  		{
  			"id": "157412",
  			"id_hs92": "7412",
  			"name": "Copper Pipe Fittings"
  		},
  		{
  			"id": "15741210",
  			"id_hs92": "741210",
  			"name": "Pipe & tube fittings, of refined copper"
  		},
  		{
  			"id": "15741220",
  			"id_hs92": "741220",
  			"name": "Pipe & tube fittings, of copper alloys"
  		},
  		{
  			"id": "157413",
  			"id_hs92": "7413",
  			"name": "Stranded Copper Wire"
  		},
  		{
  			"id": "15741300",
  			"id_hs92": "741300",
  			"name": "Stranded copper wire/cable/plaits/etc, uninsulated"
  		},
  		{
  			"id": "157414",
  			"id_hs92": "7414",
  			"name": "Endless Copper Wire Bands"
  		},
  		{
  			"id": "15741410",
  			"id_hs92": "741410",
  			"name": "Endless bands of copper wire for machinery"
  		},
  		{
  			"id": "15741490",
  			"id_hs92": "741490",
  			"name": "Copper wire cloth, grill, netting, expanded metal, ne"
  		},
  		{
  			"id": "157415",
  			"id_hs92": "7415",
  			"name": "Copper Fasteners"
  		},
  		{
  			"id": "15741510",
  			"id_hs92": "741510",
  			"name": "Copper nails, tacks, drawing pins, staples etc"
  		},
  		{
  			"id": "15741521",
  			"id_hs92": "741521",
  			"name": "Copper washers, including spring washers"
  		},
  		{
  			"id": "15741529",
  			"id_hs92": "741529",
  			"name": "Copper cotters/cotter pins/unthreaded hardware nes"
  		},
  		{
  			"id": "15741531",
  			"id_hs92": "741531",
  			"name": "Wood screws of copper and copper alloys"
  		},
  		{
  			"id": "15741532",
  			"id_hs92": "741532",
  			"name": "Copper screws, bolts or nuts except wood screws"
  		},
  		{
  			"id": "15741539",
  			"id_hs92": "741539",
  			"name": "Copper screw hooks and similar articles"
  		},
  		{
  			"id": "157416",
  			"id_hs92": "7416",
  			"name": "Copper Springs"
  		},
  		{
  			"id": "15741600",
  			"id_hs92": "741600",
  			"name": "Copper springs"
  		},
  		{
  			"id": "157417",
  			"id_hs92": "7417",
  			"name": "Copper Stovetops"
  		},
  		{
  			"id": "15741700",
  			"id_hs92": "741700",
  			"name": "Copper cooking, heating apparatus, non-electric, part"
  		},
  		{
  			"id": "157418",
  			"id_hs92": "7418",
  			"name": "Copper Housewares"
  		},
  		{
  			"id": "15741810",
  			"id_hs92": "741810",
  			"name": "Table/kitchen articles of copper, pot scourers"
  		},
  		{
  			"id": "15741820",
  			"id_hs92": "741820",
  			"name": "Sanitary ware and parts thereof of copper"
  		},
  		{
  			"id": "157419",
  			"id_hs92": "7419",
  			"name": "Other Copper Products"
  		},
  		{
  			"id": "15741910",
  			"id_hs92": "741910",
  			"name": "Chain and parts thereof of copper"
  		},
  		{
  			"id": "15741991",
  			"id_hs92": "741991",
  			"name": "Articles of copper, cast/moulded/stamped, nfw"
  		},
  		{
  			"id": "15741999",
  			"id_hs92": "741999",
  			"name": "Articles of copper, nes"
  		},
  		{
  			"id": "157501",
  			"id_hs92": "7501",
  			"name": "Nickel Mattes"
  		},
  		{
  			"id": "15750110",
  			"id_hs92": "750110",
  			"name": "Nickel mattes"
  		},
  		{
  			"id": "15750120",
  			"id_hs92": "750120",
  			"name": "Nickel oxide sinters, intermediate nickel products ne"
  		},
  		{
  			"id": "157502",
  			"id_hs92": "7502",
  			"name": "Raw Nickel"
  		},
  		{
  			"id": "15750210",
  			"id_hs92": "750210",
  			"name": "Nickel unwrought, not alloyed"
  		},
  		{
  			"id": "15750220",
  			"id_hs92": "750220",
  			"name": "Nickel unwrought, alloyed"
  		},
  		{
  			"id": "157503",
  			"id_hs92": "7503",
  			"name": "Scrap Nickel"
  		},
  		{
  			"id": "15750300",
  			"id_hs92": "750300",
  			"name": "Nickel waste or scrap"
  		},
  		{
  			"id": "157504",
  			"id_hs92": "7504",
  			"name": "Nickel Powder"
  		},
  		{
  			"id": "15750400",
  			"id_hs92": "750400",
  			"name": "Nickel powders and flakes"
  		},
  		{
  			"id": "157505",
  			"id_hs92": "7505",
  			"name": "Nickel Bars"
  		},
  		{
  			"id": "15750511",
  			"id_hs92": "750511",
  			"name": "Bars, rods and profiles, nickel, not alloyed"
  		},
  		{
  			"id": "15750512",
  			"id_hs92": "750512",
  			"name": "Bars, rods and profiles, nickel alloy"
  		},
  		{
  			"id": "15750521",
  			"id_hs92": "750521",
  			"name": "Wire, nickel, not alloyed"
  		},
  		{
  			"id": "15750522",
  			"id_hs92": "750522",
  			"name": "Wire, nickel alloy"
  		},
  		{
  			"id": "157506",
  			"id_hs92": "7506",
  			"name": "Nickel Sheets"
  		},
  		{
  			"id": "15750610",
  			"id_hs92": "750610",
  			"name": "Plates, sheet, strip and foil, nickel, not alloyed"
  		},
  		{
  			"id": "15750620",
  			"id_hs92": "750620",
  			"name": "Plates, sheet, strip and foil, nickel alloy"
  		},
  		{
  			"id": "157507",
  			"id_hs92": "7507",
  			"name": "Nickel Pipes"
  		},
  		{
  			"id": "15750711",
  			"id_hs92": "750711",
  			"name": "Tubes and pipe, nickel, not alloyed"
  		},
  		{
  			"id": "15750712",
  			"id_hs92": "750712",
  			"name": "Tubes and pipe, nickel alloy"
  		},
  		{
  			"id": "15750720",
  			"id_hs92": "750720",
  			"name": "Fittings, pipe and tube, nickel"
  		},
  		{
  			"id": "157508",
  			"id_hs92": "7508",
  			"name": "Other Nickel Products"
  		},
  		{
  			"id": "15750800",
  			"id_hs92": "750800",
  			"name": "Articles of nickel, nes"
  		},
  		{
  			"id": "157601",
  			"id_hs92": "7601",
  			"name": "Raw Aluminium"
  		},
  		{
  			"id": "15760110",
  			"id_hs92": "760110",
  			"name": "Aluminium unwrought, not alloyed"
  		},
  		{
  			"id": "15760120",
  			"id_hs92": "760120",
  			"name": "Aluminium unwrought, alloyed"
  		},
  		{
  			"id": "157602",
  			"id_hs92": "7602",
  			"name": "Scrap Aluminium"
  		},
  		{
  			"id": "15760200",
  			"id_hs92": "760200",
  			"name": "Waste or scrap, aluminium"
  		},
  		{
  			"id": "157603",
  			"id_hs92": "7603",
  			"name": "Aluminium Powder"
  		},
  		{
  			"id": "15760310",
  			"id_hs92": "760310",
  			"name": "Powders, aluminium, of non-lamellar structure"
  		},
  		{
  			"id": "15760320",
  			"id_hs92": "760320",
  			"name": "Powders/flakes, aluminium, of lamellar structure"
  		},
  		{
  			"id": "157604",
  			"id_hs92": "7604",
  			"name": "Aluminium Bars"
  		},
  		{
  			"id": "15760410",
  			"id_hs92": "760410",
  			"name": "Bars, rods and profiles, aluminium, not alloyed"
  		},
  		{
  			"id": "15760421",
  			"id_hs92": "760421",
  			"name": "Profiles, hollow, aluminium, alloyed"
  		},
  		{
  			"id": "15760429",
  			"id_hs92": "760429",
  			"name": "Bars, rods and other profiles, aluminium alloyed"
  		},
  		{
  			"id": "157605",
  			"id_hs92": "7605",
  			"name": "Aluminium Wire"
  		},
  		{
  			"id": "15760511",
  			"id_hs92": "760511",
  			"name": "Wire, aluminium, not alloyed, t > 7mm"
  		},
  		{
  			"id": "15760519",
  			"id_hs92": "760519",
  			"name": "Wire, aluminium, not alloyed, t < 7mm"
  		},
  		{
  			"id": "15760521",
  			"id_hs92": "760521",
  			"name": "Wire, aluminium alloy, t > 7mm"
  		},
  		{
  			"id": "15760529",
  			"id_hs92": "760529",
  			"name": "Wire, aluminium alloy, t < 7mm"
  		},
  		{
  			"id": "157606",
  			"id_hs92": "7606",
  			"name": "Aluminium Plating"
  		},
  		{
  			"id": "15760611",
  			"id_hs92": "760611",
  			"name": "Pure aluminium rectangular plate/sheet/strip, t >0.2m"
  		},
  		{
  			"id": "15760612",
  			"id_hs92": "760612",
  			"name": "Aluminium alloy rectangular plate/sheet/strip,t >0.2m"
  		},
  		{
  			"id": "15760691",
  			"id_hs92": "760691",
  			"name": "Pure aluminium plate, sheet, strip nes, t >0.2mm"
  		},
  		{
  			"id": "15760692",
  			"id_hs92": "760692",
  			"name": "Aluminium alloy plate, sheet, strip nes, t >0.2mm"
  		},
  		{
  			"id": "157607",
  			"id_hs92": "7607",
  			"name": "Aluminium Foil"
  		},
  		{
  			"id": "15760711",
  			"id_hs92": "760711",
  			"name": "Foil, aluminium, not backed, rolled but nfw, < 0.2mm"
  		},
  		{
  			"id": "15760719",
  			"id_hs92": "760719",
  			"name": "Foil, aluminium, not backed and < 0.2mm thick, worked"
  		},
  		{
  			"id": "15760720",
  			"id_hs92": "760720",
  			"name": "Foil, aluminium, backed, < 0.2mm thick except backing"
  		},
  		{
  			"id": "157608",
  			"id_hs92": "7608",
  			"name": "Aluminium Pipes"
  		},
  		{
  			"id": "15760810",
  			"id_hs92": "760810",
  			"name": "Tubes and pipe, aluminium, not alloyed"
  		},
  		{
  			"id": "15760820",
  			"id_hs92": "760820",
  			"name": "Tubes and pipe, aluminium alloy"
  		},
  		{
  			"id": "157609",
  			"id_hs92": "7609",
  			"name": "Aluminium Pipe Fittings"
  		},
  		{
  			"id": "15760900",
  			"id_hs92": "760900",
  			"name": "Aluminium pipe or tube fittings"
  		},
  		{
  			"id": "157610",
  			"id_hs92": "7610",
  			"name": "Aluminium Structures"
  		},
  		{
  			"id": "15761010",
  			"id_hs92": "761010",
  			"name": "Aluminium Doors, windows, frames and thresholds"
  		},
  		{
  			"id": "15761090",
  			"id_hs92": "761090",
  			"name": "Aluminium structures and parts nes, for construction"
  		},
  		{
  			"id": "157611",
  			"id_hs92": "7611",
  			"name": "Large Aluminium Containers"
  		},
  		{
  			"id": "15761100",
  			"id_hs92": "761100",
  			"name": "Aluminium reservoirs,vats, tanks, etc, volume >300l"
  		},
  		{
  			"id": "157612",
  			"id_hs92": "7612",
  			"name": "Aluminium Cans"
  		},
  		{
  			"id": "15761210",
  			"id_hs92": "761210",
  			"name": "Aluminium containers, collapsible tubular"
  		},
  		{
  			"id": "15761290",
  			"id_hs92": "761290",
  			"name": "Aluminium casks, drums, boxes etc, capacity <300 litr"
  		},
  		{
  			"id": "157613",
  			"id_hs92": "7613",
  			"name": "Aluminium Gas Containers"
  		},
  		{
  			"id": "15761300",
  			"id_hs92": "761300",
  			"name": "Aluminium containers for compressed or liquefied gas"
  		},
  		{
  			"id": "157614",
  			"id_hs92": "7614",
  			"name": "Stranded Aluminium Wire"
  		},
  		{
  			"id": "15761410",
  			"id_hs92": "761410",
  			"name": "Aluminium wire, cables, etc, steel core, uninsulated"
  		},
  		{
  			"id": "15761490",
  			"id_hs92": "761490",
  			"name": "Aluminium stranded wire, cable, plait, uninsulated ne"
  		},
  		{
  			"id": "157615",
  			"id_hs92": "7615",
  			"name": "Aluminium Housewares"
  		},
  		{
  			"id": "15761510",
  			"id_hs92": "761510",
  			"name": "Aluminium table/kitchen/household articles, scourers"
  		},
  		{
  			"id": "15761520",
  			"id_hs92": "761520",
  			"name": "Aluminium sanitary ware, parts thereof"
  		},
  		{
  			"id": "157616",
  			"id_hs92": "7616",
  			"name": "Other Aluminium Products"
  		},
  		{
  			"id": "15761610",
  			"id_hs92": "761610",
  			"name": "Aluminium nails, tacks, staples, bolts, nuts etc,"
  		},
  		{
  			"id": "15761690",
  			"id_hs92": "761690",
  			"name": "Articles of aluminium, nes"
  		},
  		{
  			"id": "157801",
  			"id_hs92": "7801",
  			"name": "Raw Lead"
  		},
  		{
  			"id": "15780110",
  			"id_hs92": "780110",
  			"name": "Lead refined unwrought"
  		},
  		{
  			"id": "15780191",
  			"id_hs92": "780191",
  			"name": "Lead unwrought containing mostly antimony"
  		},
  		{
  			"id": "15780199",
  			"id_hs92": "780199",
  			"name": "Lead unwrought nes"
  		},
  		{
  			"id": "157802",
  			"id_hs92": "7802",
  			"name": "Scrap Lead"
  		},
  		{
  			"id": "15780200",
  			"id_hs92": "780200",
  			"name": "Lead waste or scrap"
  		},
  		{
  			"id": "157803",
  			"id_hs92": "7803",
  			"name": "Lead Bars"
  		},
  		{
  			"id": "15780300",
  			"id_hs92": "780300",
  			"name": "Lead bars, rods, profiles and wire"
  		},
  		{
  			"id": "157804",
  			"id_hs92": "7804",
  			"name": "Lead Sheets"
  		},
  		{
  			"id": "15780411",
  			"id_hs92": "780411",
  			"name": "Lead foil of a thickness <2mm"
  		},
  		{
  			"id": "15780419",
  			"id_hs92": "780419",
  			"name": "Lead plates, sheet, strip"
  		},
  		{
  			"id": "15780420",
  			"id_hs92": "780420",
  			"name": "Lead powders and flakes"
  		},
  		{
  			"id": "157805",
  			"id_hs92": "7805",
  			"name": "Lead Pipes"
  		},
  		{
  			"id": "15780500",
  			"id_hs92": "780500",
  			"name": "Lead tubes, pipes and fittings"
  		},
  		{
  			"id": "157806",
  			"id_hs92": "7806",
  			"name": "Other Lead Products"
  		},
  		{
  			"id": "15780600",
  			"id_hs92": "780600",
  			"name": "Articles of lead nes"
  		},
  		{
  			"id": "157901",
  			"id_hs92": "7901",
  			"name": "Raw Zinc"
  		},
  		{
  			"id": "15790111",
  			"id_hs92": "790111",
  			"name": "Zinc, not alloyed, unwrought, >99% pure"
  		},
  		{
  			"id": "15790112",
  			"id_hs92": "790112",
  			"name": "Zinc, not alloyed, unwrought, <99% pure"
  		},
  		{
  			"id": "15790120",
  			"id_hs92": "790120",
  			"name": "Zinc alloys unwrought"
  		},
  		{
  			"id": "157902",
  			"id_hs92": "7902",
  			"name": "Scrap Waste"
  		},
  		{
  			"id": "15790200",
  			"id_hs92": "790200",
  			"name": "Zinc waste or scrap"
  		},
  		{
  			"id": "157903",
  			"id_hs92": "7903",
  			"name": "Zinc Powder"
  		},
  		{
  			"id": "15790310",
  			"id_hs92": "790310",
  			"name": "Zinc dust"
  		},
  		{
  			"id": "15790390",
  			"id_hs92": "790390",
  			"name": "Zinc powders and flakes"
  		},
  		{
  			"id": "157904",
  			"id_hs92": "7904",
  			"name": "Zinc Bars"
  		},
  		{
  			"id": "15790400",
  			"id_hs92": "790400",
  			"name": "Zinc bars, rods, profiles and wire"
  		},
  		{
  			"id": "157905",
  			"id_hs92": "7905",
  			"name": "Zinc Sheets"
  		},
  		{
  			"id": "15790500",
  			"id_hs92": "790500",
  			"name": "Zinc plates, sheets, strip and foil"
  		},
  		{
  			"id": "157906",
  			"id_hs92": "7906",
  			"name": "Zinc Pipes"
  		},
  		{
  			"id": "15790600",
  			"id_hs92": "790600",
  			"name": "Zinc tubes, pipes and tube or pipe fittings"
  		},
  		{
  			"id": "157907",
  			"id_hs92": "7907",
  			"name": "Other Zinc Products"
  		},
  		{
  			"id": "15790710",
  			"id_hs92": "790710",
  			"name": "Zinc fabricated building components (gutters,etc)"
  		},
  		{
  			"id": "15790790",
  			"id_hs92": "790790",
  			"name": "Articles of zinc nes"
  		},
  		{
  			"id": "158001",
  			"id_hs92": "8001",
  			"name": "Raw Tin"
  		},
  		{
  			"id": "15800110",
  			"id_hs92": "800110",
  			"name": "Tin not alloyed unwrought"
  		},
  		{
  			"id": "15800120",
  			"id_hs92": "800120",
  			"name": "Tin alloys unwrought"
  		},
  		{
  			"id": "158002",
  			"id_hs92": "8002",
  			"name": "Scrap Tin"
  		},
  		{
  			"id": "15800200",
  			"id_hs92": "800200",
  			"name": "Tin waste or scrap"
  		},
  		{
  			"id": "158003",
  			"id_hs92": "8003",
  			"name": "Tin Bars"
  		},
  		{
  			"id": "15800300",
  			"id_hs92": "800300",
  			"name": "Tin bars, rods, profiles and wire"
  		},
  		{
  			"id": "158004",
  			"id_hs92": "8004",
  			"name": "Tin Plating"
  		},
  		{
  			"id": "15800400",
  			"id_hs92": "800400",
  			"name": "Tin plates, sheets and strips, thickness > 0.2 mm"
  		},
  		{
  			"id": "158005",
  			"id_hs92": "8005",
  			"name": "Tin Foil"
  		},
  		{
  			"id": "15800510",
  			"id_hs92": "800510",
  			"name": "Tin foil (thickness < 0.2 mm)"
  		},
  		{
  			"id": "15800520",
  			"id_hs92": "800520",
  			"name": "Tin powder and flakes"
  		},
  		{
  			"id": "158006",
  			"id_hs92": "8006",
  			"name": "Tin Pipes"
  		},
  		{
  			"id": "15800600",
  			"id_hs92": "800600",
  			"name": "Tin pipes or tubes and pipe fittings"
  		},
  		{
  			"id": "158007",
  			"id_hs92": "8007",
  			"name": "Other Tin Products"
  		},
  		{
  			"id": "15800700",
  			"id_hs92": "800700",
  			"name": "Tin articles nes"
  		},
  		{
  			"id": "158101",
  			"id_hs92": "8101",
  			"name": "Tungsten"
  		},
  		{
  			"id": "15810110",
  			"id_hs92": "810110",
  			"name": "Powders, tungsten (wolfram)"
  		},
  		{
  			"id": "15810191",
  			"id_hs92": "810191",
  			"name": "Tungsten unwrought, bars/rods simply sintered, scrap"
  		},
  		{
  			"id": "15810192",
  			"id_hs92": "810192",
  			"name": "Tungsten profiles, sheet or foil, not simply sintered"
  		},
  		{
  			"id": "15810193",
  			"id_hs92": "810193",
  			"name": "Wire, tungsten (wolfram)"
  		},
  		{
  			"id": "15810199",
  			"id_hs92": "810199",
  			"name": "Tungsten (wolfram) and articles thereof nes"
  		},
  		{
  			"id": "158102",
  			"id_hs92": "8102",
  			"name": "Molybdenum"
  		},
  		{
  			"id": "15810210",
  			"id_hs92": "810210",
  			"name": "Molybdenum, powder"
  		},
  		{
  			"id": "15810291",
  			"id_hs92": "810291",
  			"name": "Molybdenum, unwrought, bars/rods simply sintered,scra"
  		},
  		{
  			"id": "15810292",
  			"id_hs92": "810292",
  			"name": "Molybdenum profile/sheet/strip etc not simply sintere"
  		},
  		{
  			"id": "15810293",
  			"id_hs92": "810293",
  			"name": "Wire, molybdenum"
  		},
  		{
  			"id": "15810299",
  			"id_hs92": "810299",
  			"name": "Molybdenum, articles thereof nes"
  		},
  		{
  			"id": "158103",
  			"id_hs92": "8103",
  			"name": "Tantalum"
  		},
  		{
  			"id": "15810310",
  			"id_hs92": "810310",
  			"name": "Tantalum unwrought, bars, rods simply sintered, scrap"
  		},
  		{
  			"id": "15810390",
  			"id_hs92": "810390",
  			"name": "Tantalum and articles thereof nes"
  		},
  		{
  			"id": "158104",
  			"id_hs92": "8104",
  			"name": "Magnesium"
  		},
  		{
  			"id": "15810411",
  			"id_hs92": "810411",
  			"name": "Magnesium unwrought > 99.8% pure"
  		},
  		{
  			"id": "15810419",
  			"id_hs92": "810419",
  			"name": "Magnesium unwrought nes"
  		},
  		{
  			"id": "15810420",
  			"id_hs92": "810420",
  			"name": "Magnesium waste or scrap"
  		},
  		{
  			"id": "15810430",
  			"id_hs92": "810430",
  			"name": "Magnesium raspings/turnings/etc, size graded, powder"
  		},
  		{
  			"id": "15810490",
  			"id_hs92": "810490",
  			"name": "Magnesium, articles thereof nes"
  		},
  		{
  			"id": "158105",
  			"id_hs92": "8105",
  			"name": "Cobalt"
  		},
  		{
  			"id": "15810510",
  			"id_hs92": "810510",
  			"name": "Cobalt, unwrought, matte, waste or scrap, powders"
  		},
  		{
  			"id": "15810590",
  			"id_hs92": "810590",
  			"name": "Cobalt, articles thereof, nes"
  		},
  		{
  			"id": "158106",
  			"id_hs92": "8106",
  			"name": "Bismuth"
  		},
  		{
  			"id": "15810600",
  			"id_hs92": "810600",
  			"name": "Bismuth, articles thereof, waste or scrap"
  		},
  		{
  			"id": "158107",
  			"id_hs92": "8107",
  			"name": "Cadmium"
  		},
  		{
  			"id": "15810710",
  			"id_hs92": "810710",
  			"name": "Cadmium, unwrought, waste or scrap, powders"
  		},
  		{
  			"id": "15810790",
  			"id_hs92": "810790",
  			"name": "Cadmium, articles thereof, nes"
  		},
  		{
  			"id": "158108",
  			"id_hs92": "8108",
  			"name": "Titanium"
  		},
  		{
  			"id": "15810810",
  			"id_hs92": "810810",
  			"name": "Titanium, unwrought, waste or scrap, powders"
  		},
  		{
  			"id": "15810890",
  			"id_hs92": "810890",
  			"name": "Titanium, articles thereof, nes"
  		},
  		{
  			"id": "158109",
  			"id_hs92": "8109",
  			"name": "Zirconium"
  		},
  		{
  			"id": "15810910",
  			"id_hs92": "810910",
  			"name": "Zirconium, unwrought, waste or scrap, powders"
  		},
  		{
  			"id": "15810990",
  			"id_hs92": "810990",
  			"name": "Zirconium, articles thereof, nes"
  		},
  		{
  			"id": "158110",
  			"id_hs92": "8110",
  			"name": "Antimony"
  		},
  		{
  			"id": "15811000",
  			"id_hs92": "811000",
  			"name": "Antimony, articles thereof, waste or scrap"
  		},
  		{
  			"id": "158111",
  			"id_hs92": "8111",
  			"name": "Manganese"
  		},
  		{
  			"id": "15811100",
  			"id_hs92": "811100",
  			"name": "Manganese, articles thereof, waste or scrap"
  		},
  		{
  			"id": "158112",
  			"id_hs92": "8112",
  			"name": "Other Metals"
  		},
  		{
  			"id": "15811211",
  			"id_hs92": "811211",
  			"name": "Beryllium, unwrought, waste or scrap/powders"
  		},
  		{
  			"id": "15811219",
  			"id_hs92": "811219",
  			"name": "Beryllium, articles thereof, nes"
  		},
  		{
  			"id": "15811220",
  			"id_hs92": "811220",
  			"name": "Chromium, articles thereof, waste or scrap/powders"
  		},
  		{
  			"id": "15811230",
  			"id_hs92": "811230",
  			"name": "Germanium, articles thereof, waste or scrap/powders"
  		},
  		{
  			"id": "15811240",
  			"id_hs92": "811240",
  			"name": "Vanadium, articles thereof, waste or scrap/powders"
  		},
  		{
  			"id": "15811291",
  			"id_hs92": "811291",
  			"name": "Rare earths/metals nes, unwrought/waste or scrap"
  		},
  		{
  			"id": "15811299",
  			"id_hs92": "811299",
  			"name": "Articles of rare earths/metals nes"
  		},
  		{
  			"id": "158113",
  			"id_hs92": "8113",
  			"name": "Cermets"
  		},
  		{
  			"id": "15811300",
  			"id_hs92": "811300",
  			"name": "Cermets and articles thereof, waste or scrap"
  		},
  		{
  			"id": "158201",
  			"id_hs92": "8201",
  			"name": "Garden Tools"
  		},
  		{
  			"id": "15820110",
  			"id_hs92": "820110",
  			"name": "Spades and shovels"
  		},
  		{
  			"id": "15820120",
  			"id_hs92": "820120",
  			"name": "Forks"
  		},
  		{
  			"id": "15820130",
  			"id_hs92": "820130",
  			"name": "Mattocks, picks, hoes and rakes"
  		},
  		{
  			"id": "15820140",
  			"id_hs92": "820140",
  			"name": "Axes, bill hooks and similar hewing tools"
  		},
  		{
  			"id": "15820150",
  			"id_hs92": "820150",
  			"name": "Secateurs, one handed shears including poultry shears"
  		},
  		{
  			"id": "15820160",
  			"id_hs92": "820160",
  			"name": "Hedge shears and similar two-handed shears"
  		},
  		{
  			"id": "15820190",
  			"id_hs92": "820190",
  			"name": "Scythes, sickles etc used in agriculture, etc"
  		},
  		{
  			"id": "158202",
  			"id_hs92": "8202",
  			"name": "Hand Saws"
  		},
  		{
  			"id": "15820210",
  			"id_hs92": "820210",
  			"name": "Hand saws"
  		},
  		{
  			"id": "15820220",
  			"id_hs92": "820220",
  			"name": "Band saw blades"
  		},
  		{
  			"id": "15820231",
  			"id_hs92": "820231",
  			"name": "Circular saw blades, working part of steel"
  		},
  		{
  			"id": "15820232",
  			"id_hs92": "820232",
  			"name": "Circular saw blades, working part other than steel"
  		},
  		{
  			"id": "15820240",
  			"id_hs92": "820240",
  			"name": "Chain saw blades"
  		},
  		{
  			"id": "15820291",
  			"id_hs92": "820291",
  			"name": "Saw blades, straight, for working metal"
  		},
  		{
  			"id": "15820299",
  			"id_hs92": "820299",
  			"name": "Saw blades nes, including stone cutting, etc"
  		},
  		{
  			"id": "158203",
  			"id_hs92": "8203",
  			"name": "Hand Tools"
  		},
  		{
  			"id": "15820310",
  			"id_hs92": "820310",
  			"name": "Files, rasps and similar tools"
  		},
  		{
  			"id": "15820320",
  			"id_hs92": "820320",
  			"name": "Pliers, pincers, tweezers and similar tools"
  		},
  		{
  			"id": "15820330",
  			"id_hs92": "820330",
  			"name": "Metal and wire cutting shears, etc"
  		},
  		{
  			"id": "15820340",
  			"id_hs92": "820340",
  			"name": "Pipe-cutters, bolt croppers, perforating punches etc."
  		},
  		{
  			"id": "158204",
  			"id_hs92": "8204",
  			"name": "Wrenches"
  		},
  		{
  			"id": "15820411",
  			"id_hs92": "820411",
  			"name": "Wrenches, hand-operated, with non-adjustable jaws"
  		},
  		{
  			"id": "15820412",
  			"id_hs92": "820412",
  			"name": "Wrenches, hand-operated, with adjustable jaws"
  		},
  		{
  			"id": "15820420",
  			"id_hs92": "820420",
  			"name": "Wrench sockets, ratchet handles, extensions, spinners"
  		},
  		{
  			"id": "158205",
  			"id_hs92": "8205",
  			"name": "Other Hand Tools"
  		},
  		{
  			"id": "15820510",
  			"id_hs92": "820510",
  			"name": "Drilling, threading or tapping tools"
  		},
  		{
  			"id": "15820520",
  			"id_hs92": "820520",
  			"name": "Hammers including sledge hammers"
  		},
  		{
  			"id": "15820530",
  			"id_hs92": "820530",
  			"name": "Planes, chisels, gouges and similar wood cutting tool"
  		},
  		{
  			"id": "15820540",
  			"id_hs92": "820540",
  			"name": "Screwdrivers"
  		},
  		{
  			"id": "15820551",
  			"id_hs92": "820551",
  			"name": "Cork screws, nut-crackers and other household tools"
  		},
  		{
  			"id": "15820559",
  			"id_hs92": "820559",
  			"name": "Tools for masons/watchmakers/miners, hand tools nes"
  		},
  		{
  			"id": "15820560",
  			"id_hs92": "820560",
  			"name": "Blow lamps"
  		},
  		{
  			"id": "15820570",
  			"id_hs92": "820570",
  			"name": "Vices, clamps and the like"
  		},
  		{
  			"id": "15820580",
  			"id_hs92": "820580",
  			"name": "Anvils, portable forges, hand operated grinders"
  		},
  		{
  			"id": "15820590",
  			"id_hs92": "820590",
  			"name": "Sets of hand tools"
  		},
  		{
  			"id": "158206",
  			"id_hs92": "8206",
  			"name": "Tool Sets"
  		},
  		{
  			"id": "15820600",
  			"id_hs92": "820600",
  			"name": "Sets of hand tools, retail"
  		},
  		{
  			"id": "158207",
  			"id_hs92": "8207",
  			"name": "Interchangeable Tool Parts"
  		},
  		{
  			"id": "15820711",
  			"id_hs92": "820711",
  			"name": "Rock drilling, boring heads of sintered metal, carbid"
  		},
  		{
  			"id": "15820712",
  			"id_hs92": "820712",
  			"name": "Rock drilling or earth boring tools except carbide"
  		},
  		{
  			"id": "15820720",
  			"id_hs92": "820720",
  			"name": "Dies for drawing or extruding metal"
  		},
  		{
  			"id": "15820730",
  			"id_hs92": "820730",
  			"name": "Tools for pressing, stamping or punching"
  		},
  		{
  			"id": "15820740",
  			"id_hs92": "820740",
  			"name": "Tools for tapping or threading"
  		},
  		{
  			"id": "15820750",
  			"id_hs92": "820750",
  			"name": "Tools for drilling, other than for rock drilling"
  		},
  		{
  			"id": "15820760",
  			"id_hs92": "820760",
  			"name": "Tools for boring or broaching"
  		},
  		{
  			"id": "15820770",
  			"id_hs92": "820770",
  			"name": "Tools for milling"
  		},
  		{
  			"id": "15820780",
  			"id_hs92": "820780",
  			"name": "Tools for turning"
  		},
  		{
  			"id": "15820790",
  			"id_hs92": "820790",
  			"name": "Screwdriver bits and other interchangeable tools"
  		},
  		{
  			"id": "158208",
  			"id_hs92": "8208",
  			"name": "Cutting Blades"
  		},
  		{
  			"id": "15820810",
  			"id_hs92": "820810",
  			"name": "Blades for metal working machines"
  		},
  		{
  			"id": "15820820",
  			"id_hs92": "820820",
  			"name": "Blades for wood working machines"
  		},
  		{
  			"id": "15820830",
  			"id_hs92": "820830",
  			"name": "Blades for kitchen appliances & food industry machine"
  		},
  		{
  			"id": "15820840",
  			"id_hs92": "820840",
  			"name": "Blades for agricultural and forestry machinery"
  		},
  		{
  			"id": "15820890",
  			"id_hs92": "820890",
  			"name": "Blades for leather, paper, tobacco etc. industries"
  		},
  		{
  			"id": "158209",
  			"id_hs92": "8209",
  			"name": "Tool Plates"
  		},
  		{
  			"id": "15820900",
  			"id_hs92": "820900",
  			"name": "Tool plates/tips/etc, sintered metal carbide & cermet"
  		},
  		{
  			"id": "158210",
  			"id_hs92": "8210",
  			"name": "Cooking Hand Tools"
  		},
  		{
  			"id": "15821000",
  			"id_hs92": "821000",
  			"name": "Hand-operated appliances, food preparation, <10kg"
  		},
  		{
  			"id": "158211",
  			"id_hs92": "8211",
  			"name": "Knives"
  		},
  		{
  			"id": "15821110",
  			"id_hs92": "821110",
  			"name": "Sets of different knives, cutlery sets"
  		},
  		{
  			"id": "15821191",
  			"id_hs92": "821191",
  			"name": "Table knives"
  		},
  		{
  			"id": "15821192",
  			"id_hs92": "821192",
  			"name": "Butcher's knives, hunting knives etc"
  		},
  		{
  			"id": "15821193",
  			"id_hs92": "821193",
  			"name": "Pocket/pen/other knives with folding blades"
  		},
  		{
  			"id": "15821194",
  			"id_hs92": "821194",
  			"name": "Blades for knives for hand use"
  		},
  		{
  			"id": "158212",
  			"id_hs92": "8212",
  			"name": "Razor Blades"
  		},
  		{
  			"id": "15821210",
  			"id_hs92": "821210",
  			"name": "Razors including safety razors, open blade razors"
  		},
  		{
  			"id": "15821220",
  			"id_hs92": "821220",
  			"name": "Safety razor blades, including blanks in strips"
  		},
  		{
  			"id": "15821290",
  			"id_hs92": "821290",
  			"name": "Parts of non-electric razors"
  		},
  		{
  			"id": "158213",
  			"id_hs92": "8213",
  			"name": "Scissors"
  		},
  		{
  			"id": "15821300",
  			"id_hs92": "821300",
  			"name": "Scissors, tailors/similar shears, blades thereof"
  		},
  		{
  			"id": "158214",
  			"id_hs92": "8214",
  			"name": "Other Cutlery"
  		},
  		{
  			"id": "15821410",
  			"id_hs92": "821410",
  			"name": "Paper knives, letter openers, pencil sharpeners etc"
  		},
  		{
  			"id": "15821420",
  			"id_hs92": "821420",
  			"name": "Manicure or pedicure sets and instruments"
  		},
  		{
  			"id": "15821490",
  			"id_hs92": "821490",
  			"name": "Kitchen chopper, cleavers and mincing knives etc"
  		},
  		{
  			"id": "158215",
  			"id_hs92": "8215",
  			"name": "Cutlery Sets"
  		},
  		{
  			"id": "15821510",
  			"id_hs92": "821510",
  			"name": "Cutlery sets plated with precious metal"
  		},
  		{
  			"id": "15821520",
  			"id_hs92": "821520",
  			"name": "Cutlery sets, articles, not plated with precious meta"
  		},
  		{
  			"id": "15821591",
  			"id_hs92": "821591",
  			"name": "Cutlery not in sets, plated with precious metal"
  		},
  		{
  			"id": "15821599",
  			"id_hs92": "821599",
  			"name": "Cutlery not in sets, not plated with precious metal"
  		},
  		{
  			"id": "158301",
  			"id_hs92": "8301",
  			"name": "Padlocks"
  		},
  		{
  			"id": "15830110",
  			"id_hs92": "830110",
  			"name": "Padlocks of base metal"
  		},
  		{
  			"id": "15830120",
  			"id_hs92": "830120",
  			"name": "Locks of a kind used for motor vehicles of base metal"
  		},
  		{
  			"id": "15830130",
  			"id_hs92": "830130",
  			"name": "Locks of a kind used for furniture of base metal"
  		},
  		{
  			"id": "15830140",
  			"id_hs92": "830140",
  			"name": "Locks of base metal, nes"
  		},
  		{
  			"id": "15830150",
  			"id_hs92": "830150",
  			"name": "Clasps etc incorporating locks, of base metal"
  		},
  		{
  			"id": "15830160",
  			"id_hs92": "830160",
  			"name": "Lock parts, etc, of base metal,"
  		},
  		{
  			"id": "15830170",
  			"id_hs92": "830170",
  			"name": "Keys, including blanks for keys, of base metal"
  		},
  		{
  			"id": "158302",
  			"id_hs92": "8302",
  			"name": "Metal Mountings"
  		},
  		{
  			"id": "15830210",
  			"id_hs92": "830210",
  			"name": "Hinges of base metal"
  		},
  		{
  			"id": "15830220",
  			"id_hs92": "830220",
  			"name": "Castors of base metal"
  		},
  		{
  			"id": "15830230",
  			"id_hs92": "830230",
  			"name": "Motor vehicle mountings, fittings, of base metal, nes"
  		},
  		{
  			"id": "15830241",
  			"id_hs92": "830241",
  			"name": "Mountings, fittings, of base metal, for buildings, ne"
  		},
  		{
  			"id": "15830242",
  			"id_hs92": "830242",
  			"name": "Mountings, fittings, of base metal, for furniture, ne"
  		},
  		{
  			"id": "15830249",
  			"id_hs92": "830249",
  			"name": "Mountings, fittings, of base metal, nes"
  		},
  		{
  			"id": "15830250",
  			"id_hs92": "830250",
  			"name": "Hat-racks/hat-pegs/brackets etc, of base metal, nes"
  		},
  		{
  			"id": "15830260",
  			"id_hs92": "830260",
  			"name": "Door closures, automatic, of base metal"
  		},
  		{
  			"id": "158303",
  			"id_hs92": "8303",
  			"name": "Safes"
  		},
  		{
  			"id": "15830300",
  			"id_hs92": "830300",
  			"name": "Safes/strong-boxes etc, of base metal"
  		},
  		{
  			"id": "158304",
  			"id_hs92": "8304",
  			"name": "Filing Cabinets"
  		},
  		{
  			"id": "15830400",
  			"id_hs92": "830400",
  			"name": "Office equipment of base metal eg filing cabinet, tra"
  		},
  		{
  			"id": "158305",
  			"id_hs92": "8305",
  			"name": "Metal Office Supplies"
  		},
  		{
  			"id": "15830510",
  			"id_hs92": "830510",
  			"name": "Office binder/file fittings, of base metal"
  		},
  		{
  			"id": "15830520",
  			"id_hs92": "830520",
  			"name": "Staples, office, upholstery, package etc of base meta"
  		},
  		{
  			"id": "15830590",
  			"id_hs92": "830590",
  			"name": "Letter corners, paper clips, metal office articles ne"
  		},
  		{
  			"id": "158306",
  			"id_hs92": "8306",
  			"name": "Bells and Other Metal Ornaments"
  		},
  		{
  			"id": "15830610",
  			"id_hs92": "830610",
  			"name": "Bells, gongs and the like, of base metal"
  		},
  		{
  			"id": "15830621",
  			"id_hs92": "830621",
  			"name": "Statuettes, other ornaments plated with precious meta"
  		},
  		{
  			"id": "15830629",
  			"id_hs92": "830629",
  			"name": "Statuettes and other ornaments, base metal, unplated"
  		},
  		{
  			"id": "15830630",
  			"id_hs92": "830630",
  			"name": "Photograph, picture, etc frames, mirrors of base meta"
  		},
  		{
  			"id": "158307",
  			"id_hs92": "8307",
  			"name": "Flexible Metal Tubing"
  		},
  		{
  			"id": "15830710",
  			"id_hs92": "830710",
  			"name": "Tubing,flexible, with/without fittings, iron or steel"
  		},
  		{
  			"id": "15830790",
  			"id_hs92": "830790",
  			"name": "Tubing,flexible, with/without fittings,base metal nes"
  		},
  		{
  			"id": "158308",
  			"id_hs92": "8308",
  			"name": "Other Metal Fasteners"
  		},
  		{
  			"id": "15830810",
  			"id_hs92": "830810",
  			"name": "Hooks, eyes, eyelets, for clothing, footwear, bags et"
  		},
  		{
  			"id": "15830820",
  			"id_hs92": "830820",
  			"name": "Rivets, for clothing, footwear, bags/etc"
  		},
  		{
  			"id": "15830890",
  			"id_hs92": "830890",
  			"name": "Clasps/buckles, etc for clothing, footwear, bags etc"
  		},
  		{
  			"id": "158309",
  			"id_hs92": "8309",
  			"name": "Metal Stoppers"
  		},
  		{
  			"id": "15830910",
  			"id_hs92": "830910",
  			"name": "Corks, crown, of base metal"
  		},
  		{
  			"id": "15830990",
  			"id_hs92": "830990",
  			"name": "Stoppers, caps, lids, packing items nes of base metal"
  		},
  		{
  			"id": "158310",
  			"id_hs92": "8310",
  			"name": "Metal Signs"
  		},
  		{
  			"id": "15831000",
  			"id_hs92": "831000",
  			"name": "Non-illuminated base metal sign plates, letter, numbe"
  		},
  		{
  			"id": "158311",
  			"id_hs92": "8311",
  			"name": "Coated Metal Soldering Products"
  		},
  		{
  			"id": "15831110",
  			"id_hs92": "831110",
  			"name": "Electrodes, coated, of base metal, for arc welding"
  		},
  		{
  			"id": "15831120",
  			"id_hs92": "831120",
  			"name": "Wire, cored, of base metal, for electric arc welding"
  		},
  		{
  			"id": "15831130",
  			"id_hs92": "831130",
  			"name": "Coated rods/cored wire for flame solder/braze/weld"
  		},
  		{
  			"id": "15831190",
  			"id_hs92": "831190",
  			"name": "Electrodes etc of base metal or metal carbide, nes"
  		},
  		{
  			"id": "16",
  			"id_hs92": null,
  			"name": "Machines"
  		},
  		{
  			"id": "168401",
  			"id_hs92": "8401",
  			"name": "Nuclear Reactors"
  		},
  		{
  			"id": "16840110",
  			"id_hs92": "840110",
  			"name": "Nuclear reactors"
  		},
  		{
  			"id": "16840120",
  			"id_hs92": "840120",
  			"name": "Machinery & apparatus for isotopic separation & parts"
  		},
  		{
  			"id": "16840130",
  			"id_hs92": "840130",
  			"name": "Fuel elements non-irradiated, for nuclear reactors"
  		},
  		{
  			"id": "16840140",
  			"id_hs92": "840140",
  			"name": "Parts of nuclear reactors"
  		},
  		{
  			"id": "168402",
  			"id_hs92": "8402",
  			"name": "Steam Boilers"
  		},
  		{
  			"id": "16840211",
  			"id_hs92": "840211",
  			"name": "Water tube boilers, steam production < 45T per hour"
  		},
  		{
  			"id": "16840212",
  			"id_hs92": "840212",
  			"name": "Water tube boilers, steam production < 45T per hour"
  		},
  		{
  			"id": "16840219",
  			"id_hs92": "840219",
  			"name": "Vapour generating boilers nes, hybrid boilers"
  		},
  		{
  			"id": "16840220",
  			"id_hs92": "840220",
  			"name": "Super-heated water boilers"
  		},
  		{
  			"id": "16840290",
  			"id_hs92": "840290",
  			"name": "Parts of steam or vapour generating boilers nes"
  		},
  		{
  			"id": "168403",
  			"id_hs92": "8403",
  			"name": "Central Heating Boilers"
  		},
  		{
  			"id": "16840310",
  			"id_hs92": "840310",
  			"name": "Central heating boilers nes"
  		},
  		{
  			"id": "16840390",
  			"id_hs92": "840390",
  			"name": "Parts of central heating boiler nes"
  		},
  		{
  			"id": "168404",
  			"id_hs92": "8404",
  			"name": "Boiler Plants"
  		},
  		{
  			"id": "16840410",
  			"id_hs92": "840410",
  			"name": "Auxiliary plant for steam/vapour generating boilers"
  		},
  		{
  			"id": "16840420",
  			"id_hs92": "840420",
  			"name": "Condensers for steam or vapour power units"
  		},
  		{
  			"id": "16840490",
  			"id_hs92": "840490",
  			"name": "Steam, vapour generating boiler auxiliary plant parts"
  		},
  		{
  			"id": "168405",
  			"id_hs92": "8405",
  			"name": "Water and Gas Generators"
  		},
  		{
  			"id": "16840510",
  			"id_hs92": "840510",
  			"name": "Producer, water and acetylene gas generators"
  		},
  		{
  			"id": "16840590",
  			"id_hs92": "840590",
  			"name": "Producer, water and acetylene gas generator parts"
  		},
  		{
  			"id": "168406",
  			"id_hs92": "8406",
  			"name": "Steam Turbines"
  		},
  		{
  			"id": "16840611",
  			"id_hs92": "840611",
  			"name": "Steam and vapour turbines for marine propulsion"
  		},
  		{
  			"id": "16840619",
  			"id_hs92": "840619",
  			"name": "Steam and vapour turbines nes"
  		},
  		{
  			"id": "16840690",
  			"id_hs92": "840690",
  			"name": "Parts of steam and vapour turbines"
  		},
  		{
  			"id": "168407",
  			"id_hs92": "8407",
  			"name": "Spark-Ignition Engines"
  		},
  		{
  			"id": "16840710",
  			"id_hs92": "840710",
  			"name": "Aircraft engines, spark-ignition"
  		},
  		{
  			"id": "16840721",
  			"id_hs92": "840721",
  			"name": "Outboard motors, spark-ignition"
  		},
  		{
  			"id": "16840729",
  			"id_hs92": "840729",
  			"name": "Marine propulsion spark-ignition engines nes"
  		},
  		{
  			"id": "16840731",
  			"id_hs92": "840731",
  			"name": "Engines, spark-ignition reciprocating, <50 cc"
  		},
  		{
  			"id": "16840732",
  			"id_hs92": "840732",
  			"name": "Engines, spark-ignition reciprocating, 50-250 cc"
  		},
  		{
  			"id": "16840733",
  			"id_hs92": "840733",
  			"name": "Engines, spark-ignition reciprocating, 250-1000 cc"
  		},
  		{
  			"id": "16840734",
  			"id_hs92": "840734",
  			"name": "Engines, spark-ignition reciprocating, over 1000 cc"
  		},
  		{
  			"id": "16840790",
  			"id_hs92": "840790",
  			"name": "Engines, spark-ignition type nes"
  		},
  		{
  			"id": "168408",
  			"id_hs92": "8408",
  			"name": "Combustion Engines"
  		},
  		{
  			"id": "16840810",
  			"id_hs92": "840810",
  			"name": "Marine propulsion engines, diesel"
  		},
  		{
  			"id": "16840820",
  			"id_hs92": "840820",
  			"name": "Engines, diesel, for motor vehicles"
  		},
  		{
  			"id": "16840890",
  			"id_hs92": "840890",
  			"name": "Engines, diesel except motor vehicle/marine"
  		},
  		{
  			"id": "168409",
  			"id_hs92": "8409",
  			"name": "Engine Parts"
  		},
  		{
  			"id": "16840910",
  			"id_hs92": "840910",
  			"name": "Parts for spark-ignition aircraft engines"
  		},
  		{
  			"id": "16840991",
  			"id_hs92": "840991",
  			"name": "Parts for spark-ignition engines except aircraft"
  		},
  		{
  			"id": "16840999",
  			"id_hs92": "840999",
  			"name": "Parts for diesel and semi-diesel engines"
  		},
  		{
  			"id": "168410",
  			"id_hs92": "8410",
  			"name": "Hydraulic Turbines"
  		},
  		{
  			"id": "16841011",
  			"id_hs92": "841011",
  			"name": "Hydraulic turbines, water wheels, power < 1000 kW"
  		},
  		{
  			"id": "16841012",
  			"id_hs92": "841012",
  			"name": "Hydraulic turbines, water wheels, power 1000-10000 kW"
  		},
  		{
  			"id": "16841013",
  			"id_hs92": "841013",
  			"name": "Hydraulic turbines, water wheels, power > 10000 kW"
  		},
  		{
  			"id": "16841090",
  			"id_hs92": "841090",
  			"name": "Parts of hydraulic turbines and water wheels"
  		},
  		{
  			"id": "168411",
  			"id_hs92": "8411",
  			"name": "Gas Turbines"
  		},
  		{
  			"id": "16841111",
  			"id_hs92": "841111",
  			"name": "Turbo-jet engines of a thrust < 25 KN"
  		},
  		{
  			"id": "16841112",
  			"id_hs92": "841112",
  			"name": "Turbo-jet engines of a thrust > 25 KN"
  		},
  		{
  			"id": "16841121",
  			"id_hs92": "841121",
  			"name": "Turbo-propeller engines of a power < 1100 kW"
  		},
  		{
  			"id": "16841122",
  			"id_hs92": "841122",
  			"name": "Turbo-propeller engines of a power > 1100 kW"
  		},
  		{
  			"id": "16841181",
  			"id_hs92": "841181",
  			"name": "Gas turbine engines nes of a power < 5000 kW"
  		},
  		{
  			"id": "16841182",
  			"id_hs92": "841182",
  			"name": "Gas turbine engines nes of a power > 5000 kW"
  		},
  		{
  			"id": "16841191",
  			"id_hs92": "841191",
  			"name": "Parts of turbo-jet or turbo-propeller engines"
  		},
  		{
  			"id": "16841199",
  			"id_hs92": "841199",
  			"name": "Parts of gas turbine engines except turbo-jet/prop"
  		},
  		{
  			"id": "168412",
  			"id_hs92": "8412",
  			"name": "Other Engines"
  		},
  		{
  			"id": "16841210",
  			"id_hs92": "841210",
  			"name": "Reaction engines other than turbo jets"
  		},
  		{
  			"id": "16841221",
  			"id_hs92": "841221",
  			"name": "Hydraulic power engines/motors, linear acting"
  		},
  		{
  			"id": "16841229",
  			"id_hs92": "841229",
  			"name": "Hydraulic power engines/motors, except linear acting"
  		},
  		{
  			"id": "16841231",
  			"id_hs92": "841231",
  			"name": "Pneumatic power engines/motors, linear acting"
  		},
  		{
  			"id": "16841239",
  			"id_hs92": "841239",
  			"name": "Pneumatic power engines/motors, except linear acting"
  		},
  		{
  			"id": "16841280",
  			"id_hs92": "841280",
  			"name": "Engines and motors nes"
  		},
  		{
  			"id": "16841290",
  			"id_hs92": "841290",
  			"name": "Parts of hydraulic/pneumatic/other power engines"
  		},
  		{
  			"id": "168413",
  			"id_hs92": "8413",
  			"name": "Liquid Pumps"
  		},
  		{
  			"id": "16841311",
  			"id_hs92": "841311",
  			"name": "Pumps dispensing fuel, lubricants in filling stations"
  		},
  		{
  			"id": "16841319",
  			"id_hs92": "841319",
  			"name": "Pumps fitted, designed to have, a measuring device ne"
  		},
  		{
  			"id": "16841320",
  			"id_hs92": "841320",
  			"name": "Hand pumps not designed to measure flow"
  		},
  		{
  			"id": "16841330",
  			"id_hs92": "841330",
  			"name": "Fuel, lubricating and cooling pumps for motor engines"
  		},
  		{
  			"id": "16841340",
  			"id_hs92": "841340",
  			"name": "Concrete pumps"
  		},
  		{
  			"id": "16841350",
  			"id_hs92": "841350",
  			"name": "Reciprocating positive displacement pumps nes"
  		},
  		{
  			"id": "16841360",
  			"id_hs92": "841360",
  			"name": "Rotary positive displacement pumps nes"
  		},
  		{
  			"id": "16841370",
  			"id_hs92": "841370",
  			"name": "Centrifugal pumps nes"
  		},
  		{
  			"id": "16841381",
  			"id_hs92": "841381",
  			"name": "Pumps nes"
  		},
  		{
  			"id": "16841382",
  			"id_hs92": "841382",
  			"name": "Liquid elevators"
  		},
  		{
  			"id": "16841391",
  			"id_hs92": "841391",
  			"name": "Parts of pumps for liquids"
  		},
  		{
  			"id": "16841392",
  			"id_hs92": "841392",
  			"name": "Parts of liquid elevators"
  		},
  		{
  			"id": "168414",
  			"id_hs92": "8414",
  			"name": "Air Pumps"
  		},
  		{
  			"id": "16841410",
  			"id_hs92": "841410",
  			"name": "Vacuum pumps"
  		},
  		{
  			"id": "16841420",
  			"id_hs92": "841420",
  			"name": "Hand or foot-operated air pumps"
  		},
  		{
  			"id": "16841430",
  			"id_hs92": "841430",
  			"name": "Compressors for refrigerating equipment"
  		},
  		{
  			"id": "16841440",
  			"id_hs92": "841440",
  			"name": "Air compressors mounted on wheeled chassis for towing"
  		},
  		{
  			"id": "16841451",
  			"id_hs92": "841451",
  			"name": "Table, window, ceiling fans, electric motor <125 watt"
  		},
  		{
  			"id": "16841459",
  			"id_hs92": "841459",
  			"name": "Electric fans, motor > 125 watts"
  		},
  		{
  			"id": "16841460",
  			"id_hs92": "841460",
  			"name": "Ventilating hoods having a maximum width < 120 cm"
  		},
  		{
  			"id": "16841480",
  			"id_hs92": "841480",
  			"name": "Air or gas compressors, hoods"
  		},
  		{
  			"id": "16841490",
  			"id_hs92": "841490",
  			"name": "Parts of vacuum pumps, compressors,fans,blowers,hoods"
  		},
  		{
  			"id": "168415",
  			"id_hs92": "8415",
  			"name": "Air Conditioners"
  		},
  		{
  			"id": "16841510",
  			"id_hs92": "841510",
  			"name": "Air conditioners window/wall types, self-contained"
  		},
  		{
  			"id": "16841581",
  			"id_hs92": "841581",
  			"name": "Air conditioners nes with reverse cycle refrigeration"
  		},
  		{
  			"id": "16841582",
  			"id_hs92": "841582",
  			"name": "Air conditioners nes, with refrigerating unit"
  		},
  		{
  			"id": "16841583",
  			"id_hs92": "841583",
  			"name": "Air conditioners nes, without refrigerating unit"
  		},
  		{
  			"id": "16841590",
  			"id_hs92": "841590",
  			"name": "Parts for air conditioners"
  		},
  		{
  			"id": "168416",
  			"id_hs92": "8416",
  			"name": "Liquid Fuel Furnaces"
  		},
  		{
  			"id": "16841610",
  			"id_hs92": "841610",
  			"name": "Furnace burners for liquid fuel"
  		},
  		{
  			"id": "16841620",
  			"id_hs92": "841620",
  			"name": "Furnace burners for solid, gas or combination fuel"
  		},
  		{
  			"id": "16841630",
  			"id_hs92": "841630",
  			"name": "Mechanical stokers, grates, ash dischargers, etc"
  		},
  		{
  			"id": "16841690",
  			"id_hs92": "841690",
  			"name": "Parts of furnace burners, associated equipment"
  		},
  		{
  			"id": "168417",
  			"id_hs92": "8417",
  			"name": "Industrial Furnaces"
  		},
  		{
  			"id": "16841710",
  			"id_hs92": "841710",
  			"name": "Furnaces/ovens non-electric for ores/pyrites/metals"
  		},
  		{
  			"id": "16841720",
  			"id_hs92": "841720",
  			"name": "Bakery ovens, etc non-electric"
  		},
  		{
  			"id": "16841780",
  			"id_hs92": "841780",
  			"name": "Industrial furnace, oven, incinerator non-electric ne"
  		},
  		{
  			"id": "16841790",
  			"id_hs92": "841790",
  			"name": "Parts of industrial or laboratory furnaces/ovens"
  		},
  		{
  			"id": "168418",
  			"id_hs92": "8418",
  			"name": "Refrigerators"
  		},
  		{
  			"id": "16841810",
  			"id_hs92": "841810",
  			"name": "Combined refrigerator-freezers, two door"
  		},
  		{
  			"id": "16841821",
  			"id_hs92": "841821",
  			"name": "Refrigerators, household compression type"
  		},
  		{
  			"id": "16841822",
  			"id_hs92": "841822",
  			"name": "Refrigerators, household absorption type, electric"
  		},
  		{
  			"id": "16841829",
  			"id_hs92": "841829",
  			"name": "Refrigerators, household type, including non-elecctri"
  		},
  		{
  			"id": "16841830",
  			"id_hs92": "841830",
  			"name": "Freezers of the chest type, < 800 litre capacity"
  		},
  		{
  			"id": "16841840",
  			"id_hs92": "841840",
  			"name": "Freezers of the upright type, < 900 litre capacity"
  		},
  		{
  			"id": "16841850",
  			"id_hs92": "841850",
  			"name": "Refrigerator/freezer chests/cabinets/showcases"
  		},
  		{
  			"id": "16841861",
  			"id_hs92": "841861",
  			"name": "Compression refrigeration equipment with heat exchang"
  		},
  		{
  			"id": "16841869",
  			"id_hs92": "841869",
  			"name": "Refrigerating or freezing equipment nes"
  		},
  		{
  			"id": "16841891",
  			"id_hs92": "841891",
  			"name": "Furniture to take refrigerating/freezing equipment"
  		},
  		{
  			"id": "16841899",
  			"id_hs92": "841899",
  			"name": "Parts of refrigerating or freezing equipment"
  		},
  		{
  			"id": "168419",
  			"id_hs92": "8419",
  			"name": "Other Heating Machinery"
  		},
  		{
  			"id": "16841911",
  			"id_hs92": "841911",
  			"name": "Instantaneous gas water heaters"
  		},
  		{
  			"id": "16841919",
  			"id_hs92": "841919",
  			"name": "Instantaneous/storage water heaters, not electric nes"
  		},
  		{
  			"id": "16841920",
  			"id_hs92": "841920",
  			"name": "Medical, surgical or laboratory sterilizers"
  		},
  		{
  			"id": "16841931",
  			"id_hs92": "841931",
  			"name": "Dryers for agricultural products"
  		},
  		{
  			"id": "16841932",
  			"id_hs92": "841932",
  			"name": "Dryers for wood, paper pulp, paper or paperboard"
  		},
  		{
  			"id": "16841939",
  			"id_hs92": "841939",
  			"name": "Non-domestic, non-electric dryers nes"
  		},
  		{
  			"id": "16841940",
  			"id_hs92": "841940",
  			"name": "Distilling or rectifying plant"
  		},
  		{
  			"id": "16841950",
  			"id_hs92": "841950",
  			"name": "Heat exchange units, non-domestic, non-electric"
  		},
  		{
  			"id": "16841960",
  			"id_hs92": "841960",
  			"name": "Machinery for liquefying air or other gases"
  		},
  		{
  			"id": "16841981",
  			"id_hs92": "841981",
  			"name": "Commercial equipment, hot drinks/cooking/heating food"
  		},
  		{
  			"id": "16841989",
  			"id_hs92": "841989",
  			"name": "Machinery for treatment by temperature change nes"
  		},
  		{
  			"id": "16841990",
  			"id_hs92": "841990",
  			"name": "Parts, laboratory/industrial heating/cooling machiner"
  		},
  		{
  			"id": "168420",
  			"id_hs92": "8420",
  			"name": "Rolling Machines"
  		},
  		{
  			"id": "16842010",
  			"id_hs92": "842010",
  			"name": "Calendering or rolling machines, not. for metals/glas"
  		},
  		{
  			"id": "16842091",
  			"id_hs92": "842091",
  			"name": "Cylinders for rolling machines, except metals, glass"
  		},
  		{
  			"id": "16842099",
  			"id_hs92": "842099",
  			"name": "Parts nes for rolling machines, except metals, glass"
  		},
  		{
  			"id": "168421",
  			"id_hs92": "8421",
  			"name": "Centrifuges"
  		},
  		{
  			"id": "16842111",
  			"id_hs92": "842111",
  			"name": "Cream separators"
  		},
  		{
  			"id": "16842112",
  			"id_hs92": "842112",
  			"name": "Clothes-dryers, centrifugal"
  		},
  		{
  			"id": "16842119",
  			"id_hs92": "842119",
  			"name": "Centrifuges nes"
  		},
  		{
  			"id": "16842121",
  			"id_hs92": "842121",
  			"name": "Water filtering or purifying machinery or apparatus"
  		},
  		{
  			"id": "16842122",
  			"id_hs92": "842122",
  			"name": "Filtering/purifying machinery/apparatus for beverages"
  		},
  		{
  			"id": "16842123",
  			"id_hs92": "842123",
  			"name": "Oil/petrol filters for internal combustion engines"
  		},
  		{
  			"id": "16842129",
  			"id_hs92": "842129",
  			"name": "Filtering/purifying machinery for liquids nes"
  		},
  		{
  			"id": "16842131",
  			"id_hs92": "842131",
  			"name": "Intake air filters for internal combustion engines"
  		},
  		{
  			"id": "16842139",
  			"id_hs92": "842139",
  			"name": "Filtering or purifying machinery for gases nes"
  		},
  		{
  			"id": "16842191",
  			"id_hs92": "842191",
  			"name": "Parts of centrifuges, including centrifugal dryers"
  		},
  		{
  			"id": "16842199",
  			"id_hs92": "842199",
  			"name": "Parts for filter/purifying machines for liquid/gas"
  		},
  		{
  			"id": "168422",
  			"id_hs92": "8422",
  			"name": "Washing and Bottling Machines"
  		},
  		{
  			"id": "16842211",
  			"id_hs92": "842211",
  			"name": "Dish washing machines (domestic)"
  		},
  		{
  			"id": "16842219",
  			"id_hs92": "842219",
  			"name": "Dish washing machines commercial"
  		},
  		{
  			"id": "16842220",
  			"id_hs92": "842220",
  			"name": "Machinery for cleaning/drying bottles/containers nes"
  		},
  		{
  			"id": "16842230",
  			"id_hs92": "842230",
  			"name": "Machinery to fill, close, aerate,etc bottle, containe"
  		},
  		{
  			"id": "16842240",
  			"id_hs92": "842240",
  			"name": "Packing or wrapping machinery nes"
  		},
  		{
  			"id": "16842290",
  			"id_hs92": "842290",
  			"name": "Parts of wash, filling, closing, aerating machinery"
  		},
  		{
  			"id": "168423",
  			"id_hs92": "8423",
  			"name": "Scales"
  		},
  		{
  			"id": "16842310",
  			"id_hs92": "842310",
  			"name": "Personal weighing machines, baby & household scales"
  		},
  		{
  			"id": "16842320",
  			"id_hs92": "842320",
  			"name": "Scales for continuous weighing of goods on conveyors"
  		},
  		{
  			"id": "16842330",
  			"id_hs92": "842330",
  			"name": "Constant weight scales, including hopper scales"
  		},
  		{
  			"id": "16842381",
  			"id_hs92": "842381",
  			"name": "Weighing machinery having a capacity < 30 kg nes"
  		},
  		{
  			"id": "16842382",
  			"id_hs92": "842382",
  			"name": "Weighing machinery having a capacity of 30-5000 kg"
  		},
  		{
  			"id": "16842389",
  			"id_hs92": "842389",
  			"name": "Weighing machinery, nes"
  		},
  		{
  			"id": "16842390",
  			"id_hs92": "842390",
  			"name": "Weighing machine parts and weights of all kinds"
  		},
  		{
  			"id": "168424",
  			"id_hs92": "8424",
  			"name": "Liquid Dispersing Machines"
  		},
  		{
  			"id": "16842410",
  			"id_hs92": "842410",
  			"name": "Fire extinguishers, whether or not charged"
  		},
  		{
  			"id": "16842420",
  			"id_hs92": "842420",
  			"name": "Spray guns and similar appliances"
  		},
  		{
  			"id": "16842430",
  			"id_hs92": "842430",
  			"name": "Steam or sand blasting machines"
  		},
  		{
  			"id": "16842481",
  			"id_hs92": "842481",
  			"name": "Agricultural sprays and powder dispersers"
  		},
  		{
  			"id": "16842489",
  			"id_hs92": "842489",
  			"name": "Sprays/powder dispersing machines except agricultural"
  		},
  		{
  			"id": "16842490",
  			"id_hs92": "842490",
  			"name": "Parts for sprays and powder dispersers"
  		},
  		{
  			"id": "168425",
  			"id_hs92": "8425",
  			"name": "Pulley Systems"
  		},
  		{
  			"id": "16842511",
  			"id_hs92": "842511",
  			"name": "Electric hoists (except skip and vehicle hoists)"
  		},
  		{
  			"id": "16842519",
  			"id_hs92": "842519",
  			"name": "Pulley tackle/hoists not skip/vehicle/electric hoists"
  		},
  		{
  			"id": "16842520",
  			"id_hs92": "842520",
  			"name": "Pit-head winding gear winches"
  		},
  		{
  			"id": "16842531",
  			"id_hs92": "842531",
  			"name": "Winches or capstans nes powered by electric motor"
  		},
  		{
  			"id": "16842539",
  			"id_hs92": "842539",
  			"name": "Winches or capstans nes"
  		},
  		{
  			"id": "16842541",
  			"id_hs92": "842541",
  			"name": "Built-in jacking systems for garages"
  		},
  		{
  			"id": "16842542",
  			"id_hs92": "842542",
  			"name": "Hydraulic jacks/hoists except for garages"
  		},
  		{
  			"id": "16842549",
  			"id_hs92": "842549",
  			"name": "Jacks and hoists except hydraulic and garage hoists"
  		},
  		{
  			"id": "168426",
  			"id_hs92": "8426",
  			"name": "Cranes"
  		},
  		{
  			"id": "16842611",
  			"id_hs92": "842611",
  			"name": "Gantry and overhead travelling cranes on fixed suppor"
  		},
  		{
  			"id": "16842612",
  			"id_hs92": "842612",
  			"name": "Mobile lifting frames on tyres, straddle carriers"
  		},
  		{
  			"id": "16842619",
  			"id_hs92": "842619",
  			"name": "Transporter or bridge cranes"
  		},
  		{
  			"id": "16842620",
  			"id_hs92": "842620",
  			"name": "Tower cranes"
  		},
  		{
  			"id": "16842630",
  			"id_hs92": "842630",
  			"name": "Portal or pedestal jib cranes"
  		},
  		{
  			"id": "16842641",
  			"id_hs92": "842641",
  			"name": "Cranes & lifting frames, self-propelled, on tyres"
  		},
  		{
  			"id": "16842649",
  			"id_hs92": "842649",
  			"name": "Cranes & lifting frames, self-propelled, not on tyres"
  		},
  		{
  			"id": "16842691",
  			"id_hs92": "842691",
  			"name": "Cranes designed for mounting on road vehicles"
  		},
  		{
  			"id": "16842699",
  			"id_hs92": "842699",
  			"name": "Cranes or derricks nes"
  		},
  		{
  			"id": "168427",
  			"id_hs92": "8427",
  			"name": "Fork-Lifts"
  		},
  		{
  			"id": "16842710",
  			"id_hs92": "842710",
  			"name": "Self-propelled works trucks, electric motor"
  		},
  		{
  			"id": "16842720",
  			"id_hs92": "842720",
  			"name": "Self-propelled works trucks, non-electric"
  		},
  		{
  			"id": "16842790",
  			"id_hs92": "842790",
  			"name": "Trucks with lifting/handling equipment, non-powered"
  		},
  		{
  			"id": "168428",
  			"id_hs92": "8428",
  			"name": "Lifting Machinery"
  		},
  		{
  			"id": "16842810",
  			"id_hs92": "842810",
  			"name": "Lifts and skip hoists"
  		},
  		{
  			"id": "16842820",
  			"id_hs92": "842820",
  			"name": "Pneumatic elevators and conveyors"
  		},
  		{
  			"id": "16842831",
  			"id_hs92": "842831",
  			"name": "Mine conveyors/elevators, continuous action"
  		},
  		{
  			"id": "16842832",
  			"id_hs92": "842832",
  			"name": "Continuous action goods conveyor or elevator (bucket)"
  		},
  		{
  			"id": "16842833",
  			"id_hs92": "842833",
  			"name": "Continuous action goods conveyor or elevator belt typ"
  		},
  		{
  			"id": "16842839",
  			"id_hs92": "842839",
  			"name": "Continuous action elevators or conveyors for goods ne"
  		},
  		{
  			"id": "16842840",
  			"id_hs92": "842840",
  			"name": "Escalators and moving walkways"
  		},
  		{
  			"id": "16842850",
  			"id_hs92": "842850",
  			"name": "Wagon handling equipment"
  		},
  		{
  			"id": "16842860",
  			"id_hs92": "842860",
  			"name": "Teleferiques, chair-lifts, ski-lifts, etc"
  		},
  		{
  			"id": "16842890",
  			"id_hs92": "842890",
  			"name": "Lifting, handling, loading or unloading machinery nes"
  		},
  		{
  			"id": "168429",
  			"id_hs92": "8429",
  			"name": "Large Construction Vehicles"
  		},
  		{
  			"id": "16842911",
  			"id_hs92": "842911",
  			"name": "Bulldozers and angledozers, crawler type"
  		},
  		{
  			"id": "16842919",
  			"id_hs92": "842919",
  			"name": "Bulldozers and angledozers, wheeled"
  		},
  		{
  			"id": "16842920",
  			"id_hs92": "842920",
  			"name": "Graders and levellers, self-propelled"
  		},
  		{
  			"id": "16842930",
  			"id_hs92": "842930",
  			"name": "Scrapers, self-propelled"
  		},
  		{
  			"id": "16842940",
  			"id_hs92": "842940",
  			"name": "Tamping machines and road rollers, self- propelled"
  		},
  		{
  			"id": "16842951",
  			"id_hs92": "842951",
  			"name": "Front end shovel loaders"
  		},
  		{
  			"id": "16842952",
  			"id_hs92": "842952",
  			"name": "Shovels and excavators with revolving superstructure"
  		},
  		{
  			"id": "16842959",
  			"id_hs92": "842959",
  			"name": "Earth moving/road making equipment, self-propelled ne"
  		},
  		{
  			"id": "168430",
  			"id_hs92": "8430",
  			"name": "Other Construction Vehicles"
  		},
  		{
  			"id": "16843010",
  			"id_hs92": "843010",
  			"name": "Pile-drivers and pile-extractors"
  		},
  		{
  			"id": "16843020",
  			"id_hs92": "843020",
  			"name": "Snow-ploughs and snow-blowers, not self-propelled"
  		},
  		{
  			"id": "16843031",
  			"id_hs92": "843031",
  			"name": "Coal or rock cutters, self-propelled"
  		},
  		{
  			"id": "16843039",
  			"id_hs92": "843039",
  			"name": "Coal or rock cutters, not self-propelled"
  		},
  		{
  			"id": "16843041",
  			"id_hs92": "843041",
  			"name": "Boring or sinking machinery nes, self-propelled"
  		},
  		{
  			"id": "16843049",
  			"id_hs92": "843049",
  			"name": "Boring or sinking machinery nes, not self-propelled"
  		},
  		{
  			"id": "16843050",
  			"id_hs92": "843050",
  			"name": "Construction equipment, self-propelled nes"
  		},
  		{
  			"id": "16843061",
  			"id_hs92": "843061",
  			"name": "Tamping or compacting machinery, not self-propelled"
  		},
  		{
  			"id": "16843062",
  			"id_hs92": "843062",
  			"name": "Scrapers, not self-propelled"
  		},
  		{
  			"id": "16843069",
  			"id_hs92": "843069",
  			"name": "Construction equipment, not self-propelled nes"
  		},
  		{
  			"id": "168431",
  			"id_hs92": "8431",
  			"name": "Excavation Machinery"
  		},
  		{
  			"id": "16843110",
  			"id_hs92": "843110",
  			"name": "Parts of hoists and winches"
  		},
  		{
  			"id": "16843120",
  			"id_hs92": "843120",
  			"name": "Parts of fork-lift etc trucks"
  		},
  		{
  			"id": "16843131",
  			"id_hs92": "843131",
  			"name": "Parts of lifts, skip hoist or escalators"
  		},
  		{
  			"id": "16843139",
  			"id_hs92": "843139",
  			"name": "Parts of lifting/handling machinery nes"
  		},
  		{
  			"id": "16843141",
  			"id_hs92": "843141",
  			"name": "Buckets, shovels, grabs etc for excavating machinery"
  		},
  		{
  			"id": "16843142",
  			"id_hs92": "843142",
  			"name": "Bulldozer and angledozer blades"
  		},
  		{
  			"id": "16843143",
  			"id_hs92": "843143",
  			"name": "Parts of boring or sinking machinery"
  		},
  		{
  			"id": "16843149",
  			"id_hs92": "843149",
  			"name": "Parts of cranes, work-trucks, shovels, constr machine"
  		},
  		{
  			"id": "168432",
  			"id_hs92": "8432",
  			"name": "Soil Preparation Machinery"
  		},
  		{
  			"id": "16843210",
  			"id_hs92": "843210",
  			"name": "Ploughs"
  		},
  		{
  			"id": "16843221",
  			"id_hs92": "843221",
  			"name": "Disc harrows"
  		},
  		{
  			"id": "16843229",
  			"id_hs92": "843229",
  			"name": "Scarifiers, cultivators, weeders and hoes"
  		},
  		{
  			"id": "16843230",
  			"id_hs92": "843230",
  			"name": "Seeders, planters and transplanters"
  		},
  		{
  			"id": "16843240",
  			"id_hs92": "843240",
  			"name": "Manure spreaders and fertilizer distributors"
  		},
  		{
  			"id": "16843280",
  			"id_hs92": "843280",
  			"name": "Rollers, soil preparation, cultivation machinery, nes"
  		},
  		{
  			"id": "16843290",
  			"id_hs92": "843290",
  			"name": "Parts for soil preparation or cultivation machinery"
  		},
  		{
  			"id": "168433",
  			"id_hs92": "8433",
  			"name": "Harvesting Machinery"
  		},
  		{
  			"id": "16843311",
  			"id_hs92": "843311",
  			"name": "Mowers, powered, lawn, with horizontal cutting device"
  		},
  		{
  			"id": "16843319",
  			"id_hs92": "843319",
  			"name": "Mowers, powered, lawn, nes"
  		},
  		{
  			"id": "16843320",
  			"id_hs92": "843320",
  			"name": "Hay etc mowers and cutter bars, tractor mounting"
  		},
  		{
  			"id": "16843330",
  			"id_hs92": "843330",
  			"name": "Hay tedders and rakes and other haymaking machinery"
  		},
  		{
  			"id": "16843340",
  			"id_hs92": "843340",
  			"name": "Straw or fodder balers, including pick-up balers"
  		},
  		{
  			"id": "16843351",
  			"id_hs92": "843351",
  			"name": "Combine harvester-threshers"
  		},
  		{
  			"id": "16843352",
  			"id_hs92": "843352",
  			"name": "Threshing machinery nes"
  		},
  		{
  			"id": "16843353",
  			"id_hs92": "843353",
  			"name": "Root or tuber harvesting machines"
  		},
  		{
  			"id": "16843359",
  			"id_hs92": "843359",
  			"name": "Harvesting machinery nes"
  		},
  		{
  			"id": "16843360",
  			"id_hs92": "843360",
  			"name": "Machines for cleaning, sorting, grading eggs/fruit/et"
  		},
  		{
  			"id": "16843390",
  			"id_hs92": "843390",
  			"name": "Parts of agricultural machinery"
  		},
  		{
  			"id": "168434",
  			"id_hs92": "8434",
  			"name": "Dairy Machinery"
  		},
  		{
  			"id": "16843410",
  			"id_hs92": "843410",
  			"name": "Milking machines"
  		},
  		{
  			"id": "16843420",
  			"id_hs92": "843420",
  			"name": "Dairy machinery"
  		},
  		{
  			"id": "16843490",
  			"id_hs92": "843490",
  			"name": "Parts of milking machines and dairy machinery"
  		},
  		{
  			"id": "168435",
  			"id_hs92": "8435",
  			"name": "Fruit Pressing Machinery"
  		},
  		{
  			"id": "16843510",
  			"id_hs92": "843510",
  			"name": "Presses, crushers etc for wine, fruit juice, beverage"
  		},
  		{
  			"id": "16843590",
  			"id_hs92": "843590",
  			"name": "Parts of presses, crushers for wine, fruit juice etc"
  		},
  		{
  			"id": "168436",
  			"id_hs92": "8436",
  			"name": "Other Agricultural Machinery"
  		},
  		{
  			"id": "16843610",
  			"id_hs92": "843610",
  			"name": "Machinery for preparing animal feeding stuffs"
  		},
  		{
  			"id": "16843621",
  			"id_hs92": "843621",
  			"name": "Poultry incubators and brooders"
  		},
  		{
  			"id": "16843629",
  			"id_hs92": "843629",
  			"name": "Poultry-keeping machinery, nes"
  		},
  		{
  			"id": "16843680",
  			"id_hs92": "843680",
  			"name": "Agricultural, bee-keeping plant nes, germination plan"
  		},
  		{
  			"id": "16843691",
  			"id_hs92": "843691",
  			"name": "Parts of poultry-keeping machinery"
  		},
  		{
  			"id": "16843699",
  			"id_hs92": "843699",
  			"name": "Parts agricultural, forestry, bee-keeping machines ne"
  		},
  		{
  			"id": "168437",
  			"id_hs92": "8437",
  			"name": "Mill Machinery"
  		},
  		{
  			"id": "16843710",
  			"id_hs92": "843710",
  			"name": "Machines to clean, sort, grade seed,grain, dry legume"
  		},
  		{
  			"id": "16843780",
  			"id_hs92": "843780",
  			"name": "Machines to mill or work cereals or dried legumes nes"
  		},
  		{
  			"id": "16843790",
  			"id_hs92": "843790",
  			"name": "Parts grain, seed, dry legumes processing equipment"
  		},
  		{
  			"id": "168438",
  			"id_hs92": "8438",
  			"name": "Industrial Food Preperation Machinery"
  		},
  		{
  			"id": "16843810",
  			"id_hs92": "843810",
  			"name": "Bakery and pasta making machinery"
  		},
  		{
  			"id": "16843820",
  			"id_hs92": "843820",
  			"name": "Machines, confectionery, cocoa, chocolate manufacture"
  		},
  		{
  			"id": "16843830",
  			"id_hs92": "843830",
  			"name": "Machinery for sugar refining and manufacture"
  		},
  		{
  			"id": "16843840",
  			"id_hs92": "843840",
  			"name": "Brewery machinery"
  		},
  		{
  			"id": "16843850",
  			"id_hs92": "843850",
  			"name": "Machinery for the preparation of meat and poultry"
  		},
  		{
  			"id": "16843860",
  			"id_hs92": "843860",
  			"name": "Machinery for preparation of fruits, nuts, vegetables"
  		},
  		{
  			"id": "16843880",
  			"id_hs92": "843880",
  			"name": "Industrial machinery nes for food, drink preparation"
  		},
  		{
  			"id": "16843890",
  			"id_hs92": "843890",
  			"name": "Industrial machine parts, food, drink preparation"
  		},
  		{
  			"id": "168439",
  			"id_hs92": "8439",
  			"name": "Papermaking Machines"
  		},
  		{
  			"id": "16843910",
  			"id_hs92": "843910",
  			"name": "Machinery for pulping fibrous cellulosic material"
  		},
  		{
  			"id": "16843920",
  			"id_hs92": "843920",
  			"name": "Machinery for making paper or paperboard"
  		},
  		{
  			"id": "16843930",
  			"id_hs92": "843930",
  			"name": "Machinery for finishing paper or paperboard"
  		},
  		{
  			"id": "16843991",
  			"id_hs92": "843991",
  			"name": "Parts of machines for making paper, etc pulp"
  		},
  		{
  			"id": "16843999",
  			"id_hs92": "843999",
  			"name": "Parts of machines for making paper or paperboard"
  		},
  		{
  			"id": "168440",
  			"id_hs92": "8440",
  			"name": "Book-binding Machines"
  		},
  		{
  			"id": "16844010",
  			"id_hs92": "844010",
  			"name": "Book-binding machinery including book-sewing machines"
  		},
  		{
  			"id": "16844090",
  			"id_hs92": "844090",
  			"name": "Parts of book-binding and book-sewing machines"
  		},
  		{
  			"id": "168441",
  			"id_hs92": "8441",
  			"name": "Other Paper Machinery"
  		},
  		{
  			"id": "16844110",
  			"id_hs92": "844110",
  			"name": "Cutting machines for paper pulp, paper or paperboard"
  		},
  		{
  			"id": "16844120",
  			"id_hs92": "844120",
  			"name": "Machines for making paper/board bags, sacks, envelope"
  		},
  		{
  			"id": "16844130",
  			"id_hs92": "844130",
  			"name": "Machines making paper/board boxes etc, except moulded"
  		},
  		{
  			"id": "16844140",
  			"id_hs92": "844140",
  			"name": "Machines for moulding articles in pulp, paper, board"
  		},
  		{
  			"id": "16844180",
  			"id_hs92": "844180",
  			"name": "Machinery for making up pulp, paper, paperboard nes"
  		},
  		{
  			"id": "16844190",
  			"id_hs92": "844190",
  			"name": "Parts of machinery for making pulp, paper or board"
  		},
  		{
  			"id": "168442",
  			"id_hs92": "8442",
  			"name": "Print Production Machinery"
  		},
  		{
  			"id": "16844210",
  			"id_hs92": "844210",
  			"name": "Photo-typesetting and composing machines"
  		},
  		{
  			"id": "16844220",
  			"id_hs92": "844220",
  			"name": "Typesetting equipment other than photo"
  		},
  		{
  			"id": "16844230",
  			"id_hs92": "844230",
  			"name": "Machinery/equipment for print preparation nes"
  		},
  		{
  			"id": "16844240",
  			"id_hs92": "844240",
  			"name": "Parts of machinery for print preparation"
  		},
  		{
  			"id": "16844250",
  			"id_hs92": "844250",
  			"name": "Printing type, blocks, plates, cylinders etc"
  		},
  		{
  			"id": "168443",
  			"id_hs92": "8443",
  			"name": "Industrial Printers"
  		},
  		{
  			"id": "16844311",
  			"id_hs92": "844311",
  			"name": "Reel fed offset printing machinery"
  		},
  		{
  			"id": "16844312",
  			"id_hs92": "844312",
  			"name": "Sheet fed, office offset printers, sheet < 22x36 cm"
  		},
  		{
  			"id": "16844319",
  			"id_hs92": "844319",
  			"name": "Offset printing machinery nes"
  		},
  		{
  			"id": "16844321",
  			"id_hs92": "844321",
  			"name": "Reel fed letterpress printers except flexographic"
  		},
  		{
  			"id": "16844329",
  			"id_hs92": "844329",
  			"name": "Letterpress printing machinery nes except flexographi"
  		},
  		{
  			"id": "16844330",
  			"id_hs92": "844330",
  			"name": "Flexographic printing machinery"
  		},
  		{
  			"id": "16844340",
  			"id_hs92": "844340",
  			"name": "Gravure printing machinery"
  		},
  		{
  			"id": "16844350",
  			"id_hs92": "844350",
  			"name": "Printing machinery nes"
  		},
  		{
  			"id": "16844360",
  			"id_hs92": "844360",
  			"name": "Machines for uses ancillary to printing"
  		},
  		{
  			"id": "16844390",
  			"id_hs92": "844390",
  			"name": "Parts of printing machinery and ancillary equipment"
  		},
  		{
  			"id": "168444",
  			"id_hs92": "8444",
  			"name": "Artificial Textile Machinery"
  		},
  		{
  			"id": "16844400",
  			"id_hs92": "844400",
  			"name": "Machines to extrude, draw, cut manmade textile fibres"
  		},
  		{
  			"id": "168445",
  			"id_hs92": "8445",
  			"name": "Textile Fiber Machinery"
  		},
  		{
  			"id": "16844511",
  			"id_hs92": "844511",
  			"name": "Textile fibre carding machines"
  		},
  		{
  			"id": "16844512",
  			"id_hs92": "844512",
  			"name": "Textile fibre combing machines"
  		},
  		{
  			"id": "16844513",
  			"id_hs92": "844513",
  			"name": "Textile fibre drawing or roving machines"
  		},
  		{
  			"id": "16844519",
  			"id_hs92": "844519",
  			"name": "Textile fibre preparing machines nes"
  		},
  		{
  			"id": "16844520",
  			"id_hs92": "844520",
  			"name": "Textile yarn spinning machines"
  		},
  		{
  			"id": "16844530",
  			"id_hs92": "844530",
  			"name": "Textile yarn doubling or twisting machines"
  		},
  		{
  			"id": "16844540",
  			"id_hs92": "844540",
  			"name": "Textile yarn winding or reeling machines"
  		},
  		{
  			"id": "16844590",
  			"id_hs92": "844590",
  			"name": "Machinery for producing or preparing textile yarn nes"
  		},
  		{
  			"id": "168446",
  			"id_hs92": "8446",
  			"name": "Looms"
  		},
  		{
  			"id": "16844610",
  			"id_hs92": "844610",
  			"name": "Machines for weaving fabric, width < 30 cm"
  		},
  		{
  			"id": "16844621",
  			"id_hs92": "844621",
  			"name": "Shuttle type power loom for weaving fabric >30cm wide"
  		},
  		{
  			"id": "16844629",
  			"id_hs92": "844629",
  			"name": "Shuttle type looms nes for weaving fabric >30cm wide"
  		},
  		{
  			"id": "16844630",
  			"id_hs92": "844630",
  			"name": "Shuttle-less looms for weaving fabric >30cm wide"
  		},
  		{
  			"id": "168447",
  			"id_hs92": "8447",
  			"name": "Knitting Machines"
  		},
  		{
  			"id": "16844711",
  			"id_hs92": "844711",
  			"name": "Circular knitting machines, diameter < 165 mm"
  		},
  		{
  			"id": "16844712",
  			"id_hs92": "844712",
  			"name": "Circular knitting machines, diameter > 165 mm"
  		},
  		{
  			"id": "16844720",
  			"id_hs92": "844720",
  			"name": "Flat knitting machines, stitch-bonding machines"
  		},
  		{
  			"id": "16844790",
  			"id_hs92": "844790",
  			"name": "Tulle, lace, embroidery, trimmings etc making machine"
  		},
  		{
  			"id": "168448",
  			"id_hs92": "8448",
  			"name": "Knitting Machine Accessories"
  		},
  		{
  			"id": "16844811",
  			"id_hs92": "844811",
  			"name": "Dobbies, Jacquards, etc for spinning machines & looms"
  		},
  		{
  			"id": "16844819",
  			"id_hs92": "844819",
  			"name": "Auxiliary machines nes for spin, weave, knit machines"
  		},
  		{
  			"id": "16844820",
  			"id_hs92": "844820",
  			"name": "Parts/access, machines for preparing manmade textiles"
  		},
  		{
  			"id": "16844831",
  			"id_hs92": "844831",
  			"name": "Card clothing for combing, drawing, spinning machines"
  		},
  		{
  			"id": "16844832",
  			"id_hs92": "844832",
  			"name": "Parts and access except card clothing for spinning et"
  		},
  		{
  			"id": "16844833",
  			"id_hs92": "844833",
  			"name": "Spinning spindles, spindle flyers, spinning rings"
  		},
  		{
  			"id": "16844839",
  			"id_hs92": "844839",
  			"name": "Parts etc of spinning, combing, drawing machines nes"
  		},
  		{
  			"id": "16844841",
  			"id_hs92": "844841",
  			"name": "Shuttles for weaving machines (looms)"
  		},
  		{
  			"id": "16844842",
  			"id_hs92": "844842",
  			"name": "Reeds, healds, heald-frames for weaving looms"
  		},
  		{
  			"id": "16844849",
  			"id_hs92": "844849",
  			"name": "Parts & accessories of looms, auxiliary machinery nes"
  		},
  		{
  			"id": "16844851",
  			"id_hs92": "844851",
  			"name": "Sinkers, needles etc for knitting, etc machines"
  		},
  		{
  			"id": "16844859",
  			"id_hs92": "844859",
  			"name": "Parts, access nes, knitting, embroidery, lace machine"
  		},
  		{
  			"id": "168449",
  			"id_hs92": "8449",
  			"name": "Felt Machinery"
  		},
  		{
  			"id": "16844900",
  			"id_hs92": "844900",
  			"name": "Machinery for making felt, nonwovens, including hats"
  		},
  		{
  			"id": "168450",
  			"id_hs92": "8450",
  			"name": "Household Washing Machines"
  		},
  		{
  			"id": "16845011",
  			"id_hs92": "845011",
  			"name": "Automatic washing machines, of a dry capacity < 10 kg"
  		},
  		{
  			"id": "16845012",
  			"id_hs92": "845012",
  			"name": "Washing machines nes, capacity <10 kg, built-in drier"
  		},
  		{
  			"id": "16845019",
  			"id_hs92": "845019",
  			"name": "Household/laundry-type washing machines <10 kg, nes"
  		},
  		{
  			"id": "16845020",
  			"id_hs92": "845020",
  			"name": "Household or laundry-type washing machines, cap >10kg"
  		},
  		{
  			"id": "16845090",
  			"id_hs92": "845090",
  			"name": "Parts of household or laundry-type washing machines"
  		},
  		{
  			"id": "168451",
  			"id_hs92": "8451",
  			"name": "Textile Processing Machines"
  		},
  		{
  			"id": "16845110",
  			"id_hs92": "845110",
  			"name": "Dry-cleaning machines"
  		},
  		{
  			"id": "16845121",
  			"id_hs92": "845121",
  			"name": "Drying machines, capacity <10 kg, except washer-drier"
  		},
  		{
  			"id": "16845129",
  			"id_hs92": "845129",
  			"name": "Drying machines, nes"
  		},
  		{
  			"id": "16845130",
  			"id_hs92": "845130",
  			"name": "Ironing machines and presses including fusing presses"
  		},
  		{
  			"id": "16845140",
  			"id_hs92": "845140",
  			"name": "Washing, bleaching or dyeing machines (non-domestic)"
  		},
  		{
  			"id": "16845150",
  			"id_hs92": "845150",
  			"name": "Machinery to reel, fold, cut, pink, etc textile fabri"
  		},
  		{
  			"id": "16845180",
  			"id_hs92": "845180",
  			"name": "Machinery to impregnate textiles, make linoleum, etc"
  		},
  		{
  			"id": "16845190",
  			"id_hs92": "845190",
  			"name": "Parts of machines for treating textile fabrics"
  		},
  		{
  			"id": "168452",
  			"id_hs92": "8452",
  			"name": "Sewing Machines"
  		},
  		{
  			"id": "16845210",
  			"id_hs92": "845210",
  			"name": "Household type sewing machines"
  		},
  		{
  			"id": "16845221",
  			"id_hs92": "845221",
  			"name": "Automatic sewing machines, other than book-sewing nes"
  		},
  		{
  			"id": "16845229",
  			"id_hs92": "845229",
  			"name": "Sewing machines, other than book-sewing machines, nes"
  		},
  		{
  			"id": "16845230",
  			"id_hs92": "845230",
  			"name": "Sewing machine needles"
  		},
  		{
  			"id": "16845240",
  			"id_hs92": "845240",
  			"name": "Furniture, bases, covers for sewing machines, parts"
  		},
  		{
  			"id": "16845290",
  			"id_hs92": "845290",
  			"name": "Parts of sewing machines, nes"
  		},
  		{
  			"id": "168453",
  			"id_hs92": "8453",
  			"name": "Leather Machinery"
  		},
  		{
  			"id": "16845310",
  			"id_hs92": "845310",
  			"name": "Machinery to prepare, tan, work hides, skins, leather"
  		},
  		{
  			"id": "16845320",
  			"id_hs92": "845320",
  			"name": "Machinery for making or repairing footwear"
  		},
  		{
  			"id": "16845380",
  			"id_hs92": "845380",
  			"name": "Machinery for leather, skin goods making except sewin"
  		},
  		{
  			"id": "16845390",
  			"id_hs92": "845390",
  			"name": "Parts of machinery for leather industry"
  		},
  		{
  			"id": "168454",
  			"id_hs92": "8454",
  			"name": "Casting Machines"
  		},
  		{
  			"id": "16845410",
  			"id_hs92": "845410",
  			"name": "Converters used in metallurgy or metal foundries"
  		},
  		{
  			"id": "16845420",
  			"id_hs92": "845420",
  			"name": "Ingot moulds and ladles used in metallurgy/foundries"
  		},
  		{
  			"id": "16845430",
  			"id_hs92": "845430",
  			"name": "Casting machines used in metallurgy, foundries"
  		},
  		{
  			"id": "16845490",
  			"id_hs92": "845490",
  			"name": "Parts of equipment for metallurgy, foundries"
  		},
  		{
  			"id": "168455",
  			"id_hs92": "8455",
  			"name": "Metal-Rolling Mills"
  		},
  		{
  			"id": "16845510",
  			"id_hs92": "845510",
  			"name": "Tube mills, metal rolling"
  		},
  		{
  			"id": "16845521",
  			"id_hs92": "845521",
  			"name": "Hot, or combination hot-cold metal rolling mills"
  		},
  		{
  			"id": "16845522",
  			"id_hs92": "845522",
  			"name": "Cold metal rolling mills"
  		},
  		{
  			"id": "16845530",
  			"id_hs92": "845530",
  			"name": "Rolls for metal rolling mills"
  		},
  		{
  			"id": "16845590",
  			"id_hs92": "845590",
  			"name": "Parts of metal rolling mills and rolls"
  		},
  		{
  			"id": "168456",
  			"id_hs92": "8456",
  			"name": "Non-Mechanical Removal Machinery"
  		},
  		{
  			"id": "16845610",
  			"id_hs92": "845610",
  			"name": "Laser, light and photon beam process machine tools"
  		},
  		{
  			"id": "16845620",
  			"id_hs92": "845620",
  			"name": "Ultrasonic process machine tools"
  		},
  		{
  			"id": "16845630",
  			"id_hs92": "845630",
  			"name": "Electro-discharge process machine tools"
  		},
  		{
  			"id": "16845690",
  			"id_hs92": "845690",
  			"name": "Electro-chem/electron beam/plasma arc/etc machine too"
  		},
  		{
  			"id": "168457",
  			"id_hs92": "8457",
  			"name": "Metalworking Transfer Machines"
  		},
  		{
  			"id": "16845710",
  			"id_hs92": "845710",
  			"name": "Machining centres, for working metal"
  		},
  		{
  			"id": "16845720",
  			"id_hs92": "845720",
  			"name": "Unit construction machines, metal work"
  		},
  		{
  			"id": "16845730",
  			"id_hs92": "845730",
  			"name": "Multi-station transfer machines for working metal"
  		},
  		{
  			"id": "168458",
  			"id_hs92": "8458",
  			"name": "Metal Lathes"
  		},
  		{
  			"id": "16845811",
  			"id_hs92": "845811",
  			"name": "Horizontal numerically controlled metal work lathes"
  		},
  		{
  			"id": "16845819",
  			"id_hs92": "845819",
  			"name": "Horizontal lathes nes for metal"
  		},
  		{
  			"id": "16845891",
  			"id_hs92": "845891",
  			"name": "Lathes nes numerically controlled for removing metal"
  		},
  		{
  			"id": "16845899",
  			"id_hs92": "845899",
  			"name": "Lathes nes for removing metal"
  		},
  		{
  			"id": "168459",
  			"id_hs92": "8459",
  			"name": "Drilling Machines"
  		},
  		{
  			"id": "16845910",
  			"id_hs92": "845910",
  			"name": "Way-type unit head machines, metal working"
  		},
  		{
  			"id": "16845921",
  			"id_hs92": "845921",
  			"name": "Numerically controlled metal working drill machines"
  		},
  		{
  			"id": "16845929",
  			"id_hs92": "845929",
  			"name": "Drilling machines for metal, except num controlled"
  		},
  		{
  			"id": "16845931",
  			"id_hs92": "845931",
  			"name": "Boring-milling machines num controlled for metal"
  		},
  		{
  			"id": "16845939",
  			"id_hs92": "845939",
  			"name": "Boring-milling machines nes for removing metal"
  		},
  		{
  			"id": "16845940",
  			"id_hs92": "845940",
  			"name": "Boring machines nes for removing metal"
  		},
  		{
  			"id": "16845951",
  			"id_hs92": "845951",
  			"name": "Milling machines, knee-type num controlled for metal"
  		},
  		{
  			"id": "16845959",
  			"id_hs92": "845959",
  			"name": "Milling machines, knee-type nes for removing metal"
  		},
  		{
  			"id": "16845961",
  			"id_hs92": "845961",
  			"name": "Milling machines nes, num controlled for metal"
  		},
  		{
  			"id": "16845969",
  			"id_hs92": "845969",
  			"name": "Milling machines nes, for metal"
  		},
  		{
  			"id": "16845970",
  			"id_hs92": "845970",
  			"name": "Threading or tapping machines nes for metal"
  		},
  		{
  			"id": "168460",
  			"id_hs92": "8460",
  			"name": "Metal Finishing Machines"
  		},
  		{
  			"id": "16846011",
  			"id_hs92": "846011",
  			"name": "Num controlled surface grinders, accurate to 0.01mm"
  		},
  		{
  			"id": "16846019",
  			"id_hs92": "846019",
  			"name": "Surface grinding machines accurate to 0.01mm nes"
  		},
  		{
  			"id": "16846021",
  			"id_hs92": "846021",
  			"name": "Num controlled grinding machines nes, accuracy 0.01mm"
  		},
  		{
  			"id": "16846029",
  			"id_hs92": "846029",
  			"name": "Grinding machines nes, accurate to 0.01mm"
  		},
  		{
  			"id": "16846031",
  			"id_hs92": "846031",
  			"name": "Sharpening (tool, cutter grind) machines, num control"
  		},
  		{
  			"id": "16846039",
  			"id_hs92": "846039",
  			"name": "Sharpening (tool, cutter grind) machines nes"
  		},
  		{
  			"id": "16846040",
  			"id_hs92": "846040",
  			"name": "Honing or lapping machines"
  		},
  		{
  			"id": "16846090",
  			"id_hs92": "846090",
  			"name": "Machine tools for finishing metals, nes"
  		},
  		{
  			"id": "168461",
  			"id_hs92": "8461",
  			"name": "Metalworking Machines"
  		},
  		{
  			"id": "16846110",
  			"id_hs92": "846110",
  			"name": "Metal planing machines"
  		},
  		{
  			"id": "16846120",
  			"id_hs92": "846120",
  			"name": "Metal shaping or slotting machines"
  		},
  		{
  			"id": "16846130",
  			"id_hs92": "846130",
  			"name": "Metal broaching machines"
  		},
  		{
  			"id": "16846140",
  			"id_hs92": "846140",
  			"name": "Gear cutting, grinding and finishing machines"
  		},
  		{
  			"id": "16846150",
  			"id_hs92": "846150",
  			"name": "Metal sawing or cutting-off machines"
  		},
  		{
  			"id": "16846190",
  			"id_hs92": "846190",
  			"name": "Metal cuttting, shaping, filing, engrave machines, ne"
  		},
  		{
  			"id": "168462",
  			"id_hs92": "8462",
  			"name": "Forging Machines"
  		},
  		{
  			"id": "16846210",
  			"id_hs92": "846210",
  			"name": "Machine tools to forge, stamp, hammer or press metals"
  		},
  		{
  			"id": "16846221",
  			"id_hs92": "846221",
  			"name": "Num controlled machine tools to bend, fold, etc, meta"
  		},
  		{
  			"id": "16846229",
  			"id_hs92": "846229",
  			"name": "Machine tools to bend, fold, shear or press metal, ne"
  		},
  		{
  			"id": "16846231",
  			"id_hs92": "846231",
  			"name": "Num controlled shearing (non-punching) machine tools"
  		},
  		{
  			"id": "16846239",
  			"id_hs92": "846239",
  			"name": "Shearing (except punch-shear) machine tools, nes"
  		},
  		{
  			"id": "16846241",
  			"id_hs92": "846241",
  			"name": "Num controlled punch, notch, punch-shear machines"
  		},
  		{
  			"id": "16846249",
  			"id_hs92": "846249",
  			"name": "Punching, notching, punch-shear machine tools, nes"
  		},
  		{
  			"id": "16846291",
  			"id_hs92": "846291",
  			"name": "Hydraulic presses for working metal"
  		},
  		{
  			"id": "16846299",
  			"id_hs92": "846299",
  			"name": "Metal shaping presses, nes"
  		},
  		{
  			"id": "168463",
  			"id_hs92": "8463",
  			"name": "Other Non-Metal Removal Machinery"
  		},
  		{
  			"id": "16846310",
  			"id_hs92": "846310",
  			"name": "Draw-benches for bars, tubes, profiles wire etc"
  		},
  		{
  			"id": "16846320",
  			"id_hs92": "846320",
  			"name": "Thread rolling machines for working metal, etc"
  		},
  		{
  			"id": "16846330",
  			"id_hs92": "846330",
  			"name": "Machines for working metal wire"
  		},
  		{
  			"id": "16846390",
  			"id_hs92": "846390",
  			"name": "Machine-tools (metal, carbides) not metal removal, ne"
  		},
  		{
  			"id": "168464",
  			"id_hs92": "8464",
  			"name": "Stone Working Machines"
  		},
  		{
  			"id": "16846410",
  			"id_hs92": "846410",
  			"name": "Sawing machines for stone, ceramics and glass"
  		},
  		{
  			"id": "16846420",
  			"id_hs92": "846420",
  			"name": "Grinding/polishing machines for stone, ceramics, glas"
  		},
  		{
  			"id": "16846490",
  			"id_hs92": "846490",
  			"name": "Machine tools nes for stone, ceramics and cold glass"
  		},
  		{
  			"id": "168465",
  			"id_hs92": "8465",
  			"name": "Woodworking machines"
  		},
  		{
  			"id": "16846510",
  			"id_hs92": "846510",
  			"name": "Multi-purpose machines for wood etc work"
  		},
  		{
  			"id": "16846591",
  			"id_hs92": "846591",
  			"name": "Sawing machines for working wood, cork, etc"
  		},
  		{
  			"id": "16846592",
  			"id_hs92": "846592",
  			"name": "Planing and milling machines for wood, cork, etc"
  		},
  		{
  			"id": "16846593",
  			"id_hs92": "846593",
  			"name": "Grinding, sanding, polishing machines for wood, et c"
  		},
  		{
  			"id": "16846594",
  			"id_hs92": "846594",
  			"name": "Bending or assembling machines for wood, etc"
  		},
  		{
  			"id": "16846595",
  			"id_hs92": "846595",
  			"name": "Drilling or morticing machines for wood, etc"
  		},
  		{
  			"id": "16846596",
  			"id_hs92": "846596",
  			"name": "Splitting, slicing or paring machines for wood, etc"
  		},
  		{
  			"id": "16846599",
  			"id_hs92": "846599",
  			"name": "Machine tools for wood, cork or hard plastic, etc nes"
  		},
  		{
  			"id": "168466",
  			"id_hs92": "8466",
  			"name": "Metalworking Machine Parts"
  		},
  		{
  			"id": "16846610",
  			"id_hs92": "846610",
  			"name": "Tool holders, self-opening dieheads, for machine tool"
  		},
  		{
  			"id": "16846620",
  			"id_hs92": "846620",
  			"name": "Work holders for use with machine tools"
  		},
  		{
  			"id": "16846630",
  			"id_hs92": "846630",
  			"name": "Dividing heads/attachments nes for machine tools"
  		},
  		{
  			"id": "16846691",
  			"id_hs92": "846691",
  			"name": "Parts, accessories nes, stone, ceramic machine tools"
  		},
  		{
  			"id": "16846692",
  			"id_hs92": "846692",
  			"name": "Parts, accessories nes, wood, plastic machine tools"
  		},
  		{
  			"id": "16846693",
  			"id_hs92": "846693",
  			"name": "Parts, accessories nes, metal cutting machine tools"
  		},
  		{
  			"id": "16846694",
  			"id_hs92": "846694",
  			"name": "Parts, accessories nes, metal shaping machine tools"
  		},
  		{
  			"id": "168467",
  			"id_hs92": "8467",
  			"name": "Motor-working Tools"
  		},
  		{
  			"id": "16846711",
  			"id_hs92": "846711",
  			"name": "Tools for working in the hand, pneumatic rotary type"
  		},
  		{
  			"id": "16846719",
  			"id_hs92": "846719",
  			"name": "Tools for working in the hand, pneumatic type nes"
  		},
  		{
  			"id": "16846781",
  			"id_hs92": "846781",
  			"name": "Chain saws"
  		},
  		{
  			"id": "16846789",
  			"id_hs92": "846789",
  			"name": "Tools for working in hand, non-electric motor nes"
  		},
  		{
  			"id": "16846791",
  			"id_hs92": "846791",
  			"name": "Chain saw parts"
  		},
  		{
  			"id": "16846792",
  			"id_hs92": "846792",
  			"name": "Pneumatic hand tool parts"
  		},
  		{
  			"id": "16846799",
  			"id_hs92": "846799",
  			"name": "Hand held tools nes, parts thereof"
  		},
  		{
  			"id": "168468",
  			"id_hs92": "8468",
  			"name": "Soldering and Welding Machinery"
  		},
  		{
  			"id": "16846810",
  			"id_hs92": "846810",
  			"name": "Torches, hand-held, for soldering/brazing/welding"
  		},
  		{
  			"id": "16846820",
  			"id_hs92": "846820",
  			"name": "Gas-operated machinery for welding nes"
  		},
  		{
  			"id": "16846880",
  			"id_hs92": "846880",
  			"name": "Welding machinery not gas-operated"
  		},
  		{
  			"id": "16846890",
  			"id_hs92": "846890",
  			"name": "Welding machinery parts"
  		},
  		{
  			"id": "168469",
  			"id_hs92": "8469",
  			"name": "Typewriters"
  		},
  		{
  			"id": "16846910",
  			"id_hs92": "846910",
  			"name": "Automatic typewriters and word-processing machines"
  		},
  		{
  			"id": "16846921",
  			"id_hs92": "846921",
  			"name": "Typewriters, electric, > 12 kg, non-automatic"
  		},
  		{
  			"id": "16846929",
  			"id_hs92": "846929",
  			"name": "Typewriters, electric, < 12 kg, non-automatic"
  		},
  		{
  			"id": "16846931",
  			"id_hs92": "846931",
  			"name": "Typewriters, non-electric, > 12 kg"
  		},
  		{
  			"id": "16846939",
  			"id_hs92": "846939",
  			"name": "Typewriters, non-electric < 12 kg"
  		},
  		{
  			"id": "168470",
  			"id_hs92": "8470",
  			"name": "Calculators"
  		},
  		{
  			"id": "16847010",
  			"id_hs92": "847010",
  			"name": "Electronic calculators operable with internal power"
  		},
  		{
  			"id": "16847021",
  			"id_hs92": "847021",
  			"name": "Electronic calculators, printing, external power"
  		},
  		{
  			"id": "16847029",
  			"id_hs92": "847029",
  			"name": "Electronic calculators, non-printing, external power"
  		},
  		{
  			"id": "16847030",
  			"id_hs92": "847030",
  			"name": "Calculating machines, non-electric"
  		},
  		{
  			"id": "16847040",
  			"id_hs92": "847040",
  			"name": "Accounting machines"
  		},
  		{
  			"id": "16847050",
  			"id_hs92": "847050",
  			"name": "Cash registers"
  		},
  		{
  			"id": "16847090",
  			"id_hs92": "847090",
  			"name": "Postage franking, ticket-issuing machines, etc"
  		},
  		{
  			"id": "168471",
  			"id_hs92": "8471",
  			"name": "Computers"
  		},
  		{
  			"id": "16847110",
  			"id_hs92": "847110",
  			"name": "Analogue or hybrid computers"
  		},
  		{
  			"id": "16847120",
  			"id_hs92": "847120",
  			"name": "Digital computers with cpu and input-output units"
  		},
  		{
  			"id": "16847191",
  			"id_hs92": "847191",
  			"name": "Digital computer cpu with some of storage/input/outpu"
  		},
  		{
  			"id": "16847192",
  			"id_hs92": "847192",
  			"name": "Computer input or output units"
  		},
  		{
  			"id": "16847193",
  			"id_hs92": "847193",
  			"name": "Computer data storage units"
  		},
  		{
  			"id": "16847199",
  			"id_hs92": "847199",
  			"name": "Automatic data processing machines and units, nes"
  		},
  		{
  			"id": "168472",
  			"id_hs92": "8472",
  			"name": "Other Office Machines"
  		},
  		{
  			"id": "16847210",
  			"id_hs92": "847210",
  			"name": "Office duplicating machines"
  		},
  		{
  			"id": "16847220",
  			"id_hs92": "847220",
  			"name": "Addressing machines, address plate embossing machines"
  		},
  		{
  			"id": "16847230",
  			"id_hs92": "847230",
  			"name": "Machinery for processing mail of all kinds"
  		},
  		{
  			"id": "16847290",
  			"id_hs92": "847290",
  			"name": "Office machines, nes"
  		},
  		{
  			"id": "168473",
  			"id_hs92": "8473",
  			"name": "Office Machine Parts"
  		},
  		{
  			"id": "16847310",
  			"id_hs92": "847310",
  			"name": "Parts and accessories of typewriters, word processors"
  		},
  		{
  			"id": "16847321",
  			"id_hs92": "847321",
  			"name": "Parts and accessories of electronic calculators"
  		},
  		{
  			"id": "16847329",
  			"id_hs92": "847329",
  			"name": "Parts and accessories of accounting machines, nes"
  		},
  		{
  			"id": "16847330",
  			"id_hs92": "847330",
  			"name": "Parts and accessories of data processing equipment ne"
  		},
  		{
  			"id": "16847340",
  			"id_hs92": "847340",
  			"name": "Parts and accessories of office machines, nes"
  		},
  		{
  			"id": "168474",
  			"id_hs92": "8474",
  			"name": "Stone Processing Machines"
  		},
  		{
  			"id": "16847410",
  			"id_hs92": "847410",
  			"name": "Machines to sort, screen, wash stone, ores & minerals"
  		},
  		{
  			"id": "16847420",
  			"id_hs92": "847420",
  			"name": "Machines to crush or grind stone, ores and minerals"
  		},
  		{
  			"id": "16847431",
  			"id_hs92": "847431",
  			"name": "Concrete or mortar mixing machines"
  		},
  		{
  			"id": "16847432",
  			"id_hs92": "847432",
  			"name": "Machines for mixing mineral substances with bitumen"
  		},
  		{
  			"id": "16847439",
  			"id_hs92": "847439",
  			"name": "Mixing, kneading machines for minerals except bitumen"
  		},
  		{
  			"id": "16847480",
  			"id_hs92": "847480",
  			"name": "Machines to agglomerate, shape, mould minerals or fue"
  		},
  		{
  			"id": "16847490",
  			"id_hs92": "847490",
  			"name": "Parts for mineral sort, screen, mix, etc machines"
  		},
  		{
  			"id": "168475",
  			"id_hs92": "8475",
  			"name": "Glass Working Machines"
  		},
  		{
  			"id": "16847510",
  			"id_hs92": "847510",
  			"name": "Machines to assemble electric lamps, glass envelope"
  		},
  		{
  			"id": "16847520",
  			"id_hs92": "847520",
  			"name": "Machines for manufacturing or hot working glass nes"
  		},
  		{
  			"id": "16847590",
  			"id_hs92": "847590",
  			"name": "Parts of hot glass working machines"
  		},
  		{
  			"id": "168476",
  			"id_hs92": "8476",
  			"name": "Vending Machines"
  		},
  		{
  			"id": "16847611",
  			"id_hs92": "847611",
  			"name": "Automatic food-vendors with heating or refrigeration"
  		},
  		{
  			"id": "16847619",
  			"id_hs92": "847619",
  			"name": "Automatic goods-vending machines, non-food"
  		},
  		{
  			"id": "16847690",
  			"id_hs92": "847690",
  			"name": "Parts of automatic goods-vending machinery"
  		},
  		{
  			"id": "168477",
  			"id_hs92": "8477",
  			"name": "Rubberworking Machinery"
  		},
  		{
  			"id": "16847710",
  			"id_hs92": "847710",
  			"name": "Injection-moulding machines for rubber or plastic"
  		},
  		{
  			"id": "16847720",
  			"id_hs92": "847720",
  			"name": "Extruders for working rubber or plastic"
  		},
  		{
  			"id": "16847730",
  			"id_hs92": "847730",
  			"name": "Blow moulding machines for rubber or plastic"
  		},
  		{
  			"id": "16847740",
  			"id_hs92": "847740",
  			"name": "rubber or plastic vacuum moulders, thermoformers"
  		},
  		{
  			"id": "16847751",
  			"id_hs92": "847751",
  			"name": "Pneumatic tyre moulding and retreading machinery, etc"
  		},
  		{
  			"id": "16847759",
  			"id_hs92": "847759",
  			"name": "rubber or plastic moulding and forming machines nes"
  		},
  		{
  			"id": "16847780",
  			"id_hs92": "847780",
  			"name": "rubber or plastic working machines, nes"
  		},
  		{
  			"id": "16847790",
  			"id_hs92": "847790",
  			"name": "Parts of machines for working rubber or plastic"
  		},
  		{
  			"id": "168478",
  			"id_hs92": "8478",
  			"name": "Tobacco Processing Machines"
  		},
  		{
  			"id": "16847810",
  			"id_hs92": "847810",
  			"name": "Machinery for preparing or making up tobacco"
  		},
  		{
  			"id": "16847890",
  			"id_hs92": "847890",
  			"name": "Parts of machinery for preparing tobacco"
  		},
  		{
  			"id": "168479",
  			"id_hs92": "8479",
  			"name": "Machinery Having Individual Functions"
  		},
  		{
  			"id": "16847910",
  			"id_hs92": "847910",
  			"name": "Machines for public works, building etc, nes"
  		},
  		{
  			"id": "16847920",
  			"id_hs92": "847920",
  			"name": "Machines to process animal or fixed veg fats or oils"
  		},
  		{
  			"id": "16847930",
  			"id_hs92": "847930",
  			"name": "Presses for particle, fibre board, etc manufacture"
  		},
  		{
  			"id": "16847940",
  			"id_hs92": "847940",
  			"name": "Rope or cable-making machines"
  		},
  		{
  			"id": "16847981",
  			"id_hs92": "847981",
  			"name": "Metal treating machines, electric wire coil-winders"
  		},
  		{
  			"id": "16847982",
  			"id_hs92": "847982",
  			"name": "Machines to mix, knead, crush, grind, etc, nes"
  		},
  		{
  			"id": "16847989",
  			"id_hs92": "847989",
  			"name": "Machines and mechanical appliances nes"
  		},
  		{
  			"id": "16847990",
  			"id_hs92": "847990",
  			"name": "Parts of machines and mechanical appliances nes"
  		},
  		{
  			"id": "168480",
  			"id_hs92": "8480",
  			"name": "Metal Molds"
  		},
  		{
  			"id": "16848010",
  			"id_hs92": "848010",
  			"name": "Boxes, moulding, for metal foundry"
  		},
  		{
  			"id": "16848020",
  			"id_hs92": "848020",
  			"name": "Bases, moulding"
  		},
  		{
  			"id": "16848030",
  			"id_hs92": "848030",
  			"name": "Patterns, moulding"
  		},
  		{
  			"id": "16848041",
  			"id_hs92": "848041",
  			"name": "Moulds, injection or compression, for metals/carbides"
  		},
  		{
  			"id": "16848049",
  			"id_hs92": "848049",
  			"name": "Moulds for metal or metal carbides, nes"
  		},
  		{
  			"id": "16848050",
  			"id_hs92": "848050",
  			"name": "Moulds for glass"
  		},
  		{
  			"id": "16848060",
  			"id_hs92": "848060",
  			"name": "Moulds for mineral materials"
  		},
  		{
  			"id": "16848071",
  			"id_hs92": "848071",
  			"name": "Moulds, injection & compression, for rubber or plasti"
  		},
  		{
  			"id": "16848079",
  			"id_hs92": "848079",
  			"name": "Moulds for rubber or plastic, nes"
  		},
  		{
  			"id": "168481",
  			"id_hs92": "8481",
  			"name": "Valves"
  		},
  		{
  			"id": "16848110",
  			"id_hs92": "848110",
  			"name": "Valves, pressure reducing"
  		},
  		{
  			"id": "16848120",
  			"id_hs92": "848120",
  			"name": "Valves for oleohydraulic or pneumatic transmissions"
  		},
  		{
  			"id": "16848130",
  			"id_hs92": "848130",
  			"name": "Valves, check"
  		},
  		{
  			"id": "16848140",
  			"id_hs92": "848140",
  			"name": "Valves, safety or relief"
  		},
  		{
  			"id": "16848180",
  			"id_hs92": "848180",
  			"name": "Taps, cocks, valves and similar appliances, nes"
  		},
  		{
  			"id": "16848190",
  			"id_hs92": "848190",
  			"name": "Parts of taps, cocks, valves or similar appliances"
  		},
  		{
  			"id": "168482",
  			"id_hs92": "8482",
  			"name": "Ball Bearings"
  		},
  		{
  			"id": "16848210",
  			"id_hs92": "848210",
  			"name": "Bearings, ball"
  		},
  		{
  			"id": "16848220",
  			"id_hs92": "848220",
  			"name": "Bearings, tapered roller, including assemblies"
  		},
  		{
  			"id": "16848230",
  			"id_hs92": "848230",
  			"name": "Bearings, spherical roller"
  		},
  		{
  			"id": "16848240",
  			"id_hs92": "848240",
  			"name": "Bearings, needle roller"
  		},
  		{
  			"id": "16848250",
  			"id_hs92": "848250",
  			"name": "Bearings, cylindrical roller, nes"
  		},
  		{
  			"id": "16848280",
  			"id_hs92": "848280",
  			"name": "Bearings, ball or roller, nes, including combinations"
  		},
  		{
  			"id": "16848291",
  			"id_hs92": "848291",
  			"name": "Balls, needles and rollers for bearings"
  		},
  		{
  			"id": "16848299",
  			"id_hs92": "848299",
  			"name": "Bearing parts, nes"
  		},
  		{
  			"id": "168483",
  			"id_hs92": "8483",
  			"name": "Transmissions"
  		},
  		{
  			"id": "16848310",
  			"id_hs92": "848310",
  			"name": "Transmission shafts and cranks, cam and crank shafts"
  		},
  		{
  			"id": "16848320",
  			"id_hs92": "848320",
  			"name": "Bearing housings etc incorporating ball/roller bearin"
  		},
  		{
  			"id": "16848330",
  			"id_hs92": "848330",
  			"name": "Bearing housings, shafts, without ball/roller bearing"
  		},
  		{
  			"id": "16848340",
  			"id_hs92": "848340",
  			"name": "Gearing, ball screws, speed changers, torque converte"
  		},
  		{
  			"id": "16848350",
  			"id_hs92": "848350",
  			"name": "Flywheels and pulleys including pulley blocks"
  		},
  		{
  			"id": "16848360",
  			"id_hs92": "848360",
  			"name": "Clutches, shaft couplings, universal joints"
  		},
  		{
  			"id": "16848390",
  			"id_hs92": "848390",
  			"name": "Parts of power transmission etc equipment"
  		},
  		{
  			"id": "168484",
  			"id_hs92": "8484",
  			"name": "Gaskets"
  		},
  		{
  			"id": "16848410",
  			"id_hs92": "848410",
  			"name": "Gaskets of metal sheeting, including sandwich type"
  		},
  		{
  			"id": "16848490",
  			"id_hs92": "848490",
  			"name": "Gasket sets, other joints of similar composition"
  		},
  		{
  			"id": "168485",
  			"id_hs92": "8485",
  			"name": "Boat Propellers"
  		},
  		{
  			"id": "16848510",
  			"id_hs92": "848510",
  			"name": "Ships' or boats' propellers and blades thereof"
  		},
  		{
  			"id": "16848590",
  			"id_hs92": "848590",
  			"name": "Machinery parts, non-electrical, nes"
  		},
  		{
  			"id": "168501",
  			"id_hs92": "8501",
  			"name": "Electric Motors"
  		},
  		{
  			"id": "16850110",
  			"id_hs92": "850110",
  			"name": "Electric motors of an output < 37.5 watts"
  		},
  		{
  			"id": "16850120",
  			"id_hs92": "850120",
  			"name": "Universal AC/DC motors of an output < 37.5 watts"
  		},
  		{
  			"id": "16850131",
  			"id_hs92": "850131",
  			"name": "DC motors, DC generators, of an output < 750 watts"
  		},
  		{
  			"id": "16850132",
  			"id_hs92": "850132",
  			"name": "DC motors, DC generators, of an output 0.75-75 kW"
  		},
  		{
  			"id": "16850133",
  			"id_hs92": "850133",
  			"name": "DC motors, DC generators, of an output 75-375 kW"
  		},
  		{
  			"id": "16850134",
  			"id_hs92": "850134",
  			"name": "DC motors, DC generators, of an output >375 kW"
  		},
  		{
  			"id": "16850140",
  			"id_hs92": "850140",
  			"name": "AC motors, single-phase, nes"
  		},
  		{
  			"id": "16850151",
  			"id_hs92": "850151",
  			"name": "AC motors, multi-phase, of an output < 750 Watts"
  		},
  		{
  			"id": "16850152",
  			"id_hs92": "850152",
  			"name": "AC motors, multi-phase, of an output 0.75-75 kW"
  		},
  		{
  			"id": "16850153",
  			"id_hs92": "850153",
  			"name": "AC motors, multi-phase, of an output > 75 kW"
  		},
  		{
  			"id": "16850161",
  			"id_hs92": "850161",
  			"name": "AC generators, of an output < 75 kVA"
  		},
  		{
  			"id": "16850162",
  			"id_hs92": "850162",
  			"name": "AC generators, of an output 75-375 kVA"
  		},
  		{
  			"id": "16850163",
  			"id_hs92": "850163",
  			"name": "AC generators, of an output 375-750 kVA"
  		},
  		{
  			"id": "16850164",
  			"id_hs92": "850164",
  			"name": "AC generators, of an output > 750 kVA"
  		},
  		{
  			"id": "168502",
  			"id_hs92": "8502",
  			"name": "Electric Generating Sets"
  		},
  		{
  			"id": "16850211",
  			"id_hs92": "850211",
  			"name": "Generating sets, diesel, output < 75 kVA"
  		},
  		{
  			"id": "16850212",
  			"id_hs92": "850212",
  			"name": "Generating sets, diesel, output 75-375 kVA"
  		},
  		{
  			"id": "16850213",
  			"id_hs92": "850213",
  			"name": "Generating sets, diesel, output > 375 kVA"
  		},
  		{
  			"id": "16850220",
  			"id_hs92": "850220",
  			"name": "Generating sets, with spark ignition engines"
  		},
  		{
  			"id": "16850230",
  			"id_hs92": "850230",
  			"name": "Electric generating sets, nes"
  		},
  		{
  			"id": "16850240",
  			"id_hs92": "850240",
  			"name": "Electric rotary converters"
  		},
  		{
  			"id": "168503",
  			"id_hs92": "8503",
  			"name": "Electric Motor Parts"
  		},
  		{
  			"id": "16850300",
  			"id_hs92": "850300",
  			"name": "Parts for electric motors and generators"
  		},
  		{
  			"id": "168504",
  			"id_hs92": "8504",
  			"name": "Electrical Transformers"
  		},
  		{
  			"id": "16850410",
  			"id_hs92": "850410",
  			"name": "Ballasts for discharge lamps or tubes"
  		},
  		{
  			"id": "16850421",
  			"id_hs92": "850421",
  			"name": "Liquid dielectric transformers < 650 KVA"
  		},
  		{
  			"id": "16850422",
  			"id_hs92": "850422",
  			"name": "Liquid dielectric transformers 650-10,000KVA"
  		},
  		{
  			"id": "16850423",
  			"id_hs92": "850423",
  			"name": "Liquid dielectric transformers > 10,000 KVA"
  		},
  		{
  			"id": "16850431",
  			"id_hs92": "850431",
  			"name": "Transformers electric, power capacity < 1 KVA, nes"
  		},
  		{
  			"id": "16850432",
  			"id_hs92": "850432",
  			"name": "Transformers electric, power capacity 1-16 KVA, nes"
  		},
  		{
  			"id": "16850433",
  			"id_hs92": "850433",
  			"name": "Transformers electric, power capacity 16-500 KVA"
  		},
  		{
  			"id": "16850434",
  			"id_hs92": "850434",
  			"name": "Transformers electric, power capacity > 500 KVA, nes"
  		},
  		{
  			"id": "16850440",
  			"id_hs92": "850440",
  			"name": "Static converters, nes"
  		},
  		{
  			"id": "16850450",
  			"id_hs92": "850450",
  			"name": "Inductors, electric"
  		},
  		{
  			"id": "16850490",
  			"id_hs92": "850490",
  			"name": "Parts of electrical transformers and inductors"
  		},
  		{
  			"id": "168505",
  			"id_hs92": "8505",
  			"name": "Electromagnets"
  		},
  		{
  			"id": "16850511",
  			"id_hs92": "850511",
  			"name": "Metal permanent magnets, articles intended as magnets"
  		},
  		{
  			"id": "16850519",
  			"id_hs92": "850519",
  			"name": "Permanent magnets & articles intended as magnets, nes"
  		},
  		{
  			"id": "16850520",
  			"id_hs92": "850520",
  			"name": "Electro-magnetic couplings, clutches and brakes"
  		},
  		{
  			"id": "16850530",
  			"id_hs92": "850530",
  			"name": "Electro-magnetic lifting heads"
  		},
  		{
  			"id": "16850590",
  			"id_hs92": "850590",
  			"name": "Electro-magnets nes and parts of magnetic devices"
  		},
  		{
  			"id": "168506",
  			"id_hs92": "8506",
  			"name": "Batteries"
  		},
  		{
  			"id": "16850611",
  			"id_hs92": "850611",
  			"name": "Manganese dioxide primary cell/battery volume < 300 c"
  		},
  		{
  			"id": "16850612",
  			"id_hs92": "850612",
  			"name": "Mercuric oxide primary cell, battery, volume < 300 cc"
  		},
  		{
  			"id": "16850613",
  			"id_hs92": "850613",
  			"name": "Silver oxide primary cells, batteries volume < 300 cc"
  		},
  		{
  			"id": "16850619",
  			"id_hs92": "850619",
  			"name": "Primary cells, primary batteries nes, volume < 300 cc"
  		},
  		{
  			"id": "16850620",
  			"id_hs92": "850620",
  			"name": "Primary cells, primary batteries nes, volume > 300 cc"
  		},
  		{
  			"id": "16850690",
  			"id_hs92": "850690",
  			"name": "Parts of primary cells and primary batteries"
  		},
  		{
  			"id": "168507",
  			"id_hs92": "8507",
  			"name": "Electric Batteries"
  		},
  		{
  			"id": "16850710",
  			"id_hs92": "850710",
  			"name": "Lead-acid electric accumulators (vehicle)"
  		},
  		{
  			"id": "16850720",
  			"id_hs92": "850720",
  			"name": "Lead-acid electric accumulators except for vehicles"
  		},
  		{
  			"id": "16850730",
  			"id_hs92": "850730",
  			"name": "Nickel-cadmium electric accumulators"
  		},
  		{
  			"id": "16850740",
  			"id_hs92": "850740",
  			"name": "Nickel-iron electric accumulators"
  		},
  		{
  			"id": "16850780",
  			"id_hs92": "850780",
  			"name": "Electric accumulators, nes"
  		},
  		{
  			"id": "16850790",
  			"id_hs92": "850790",
  			"name": "Parts of electric accumulators, including separators"
  		},
  		{
  			"id": "168508",
  			"id_hs92": "8508",
  			"name": "Vacuum Cleaners"
  		},
  		{
  			"id": "16850810",
  			"id_hs92": "850810",
  			"name": "Drills, hand-held, with self-contained electric motor"
  		},
  		{
  			"id": "16850820",
  			"id_hs92": "850820",
  			"name": "Saws, hand-held, with self-contained electric motor"
  		},
  		{
  			"id": "16850880",
  			"id_hs92": "850880",
  			"name": "Tools, hand-held, with electric motor, not drills/saw"
  		},
  		{
  			"id": "16850890",
  			"id_hs92": "850890",
  			"name": "Parts, hand tools with self-contained electric motor"
  		},
  		{
  			"id": "168509",
  			"id_hs92": "8509",
  			"name": "Other Domestic Electric Housewares"
  		},
  		{
  			"id": "16850910",
  			"id_hs92": "850910",
  			"name": "Domestic vacuum cleaners"
  		},
  		{
  			"id": "16850920",
  			"id_hs92": "850920",
  			"name": "Domestic floor polishers"
  		},
  		{
  			"id": "16850930",
  			"id_hs92": "850930",
  			"name": "Domestic kitchen waste disposers"
  		},
  		{
  			"id": "16850940",
  			"id_hs92": "850940",
  			"name": "Domestic food grinders, mixers, juice extractors"
  		},
  		{
  			"id": "16850980",
  			"id_hs92": "850980",
  			"name": "Domestic appliances, with electric motor, nes"
  		},
  		{
  			"id": "16850990",
  			"id_hs92": "850990",
  			"name": "Parts of domestic appliances with electric motor"
  		},
  		{
  			"id": "168510",
  			"id_hs92": "8510",
  			"name": "Hair Trimmers"
  		},
  		{
  			"id": "16851010",
  			"id_hs92": "851010",
  			"name": "Shavers, with self-contained electric motor"
  		},
  		{
  			"id": "16851020",
  			"id_hs92": "851020",
  			"name": "Hair clippers, with self-contained electric motor"
  		},
  		{
  			"id": "16851090",
  			"id_hs92": "851090",
  			"name": "Parts of shavers/hair clippers, electric"
  		},
  		{
  			"id": "168511",
  			"id_hs92": "8511",
  			"name": "Electrical Ignitions"
  		},
  		{
  			"id": "16851110",
  			"id_hs92": "851110",
  			"name": "Spark plugs"
  		},
  		{
  			"id": "16851120",
  			"id_hs92": "851120",
  			"name": "Ignition magnetos, magneto-generators and flywheels"
  		},
  		{
  			"id": "16851130",
  			"id_hs92": "851130",
  			"name": "Distributors and ignition coils"
  		},
  		{
  			"id": "16851140",
  			"id_hs92": "851140",
  			"name": "Starter motors"
  		},
  		{
  			"id": "16851150",
  			"id_hs92": "851150",
  			"name": "Generators and alternators"
  		},
  		{
  			"id": "16851180",
  			"id_hs92": "851180",
  			"name": "Glow plugs & other ignition or starting equipment nes"
  		},
  		{
  			"id": "16851190",
  			"id_hs92": "851190",
  			"name": "Parts of electrical ignition or starting equipment"
  		},
  		{
  			"id": "168512",
  			"id_hs92": "8512",
  			"name": "Electrical Lighting and Signalling Equipment"
  		},
  		{
  			"id": "16851210",
  			"id_hs92": "851210",
  			"name": "Lighting/signalling equipment as used on bicycles"
  		},
  		{
  			"id": "16851220",
  			"id_hs92": "851220",
  			"name": "Lighting/visual signalling equipment nes"
  		},
  		{
  			"id": "16851230",
  			"id_hs92": "851230",
  			"name": "Sound signalling equipment"
  		},
  		{
  			"id": "16851240",
  			"id_hs92": "851240",
  			"name": "Windscreen wipers/defrosters/demisters"
  		},
  		{
  			"id": "16851290",
  			"id_hs92": "851290",
  			"name": "Parts of cycle & vehicle light, signal, etc equipment"
  		},
  		{
  			"id": "168513",
  			"id_hs92": "8513",
  			"name": "Portable Lighting"
  		},
  		{
  			"id": "16851310",
  			"id_hs92": "851310",
  			"name": "Portable battery and magneto-electric lamps"
  		},
  		{
  			"id": "16851390",
  			"id_hs92": "851390",
  			"name": "Parts for portable battery & magneto electric lamps"
  		},
  		{
  			"id": "168514",
  			"id_hs92": "8514",
  			"name": "Electric Furnaces"
  		},
  		{
  			"id": "16851410",
  			"id_hs92": "851410",
  			"name": "Industrial electric resistance heated furnaces & oven"
  		},
  		{
  			"id": "16851420",
  			"id_hs92": "851420",
  			"name": "Industrial electric induction, dielectric furnace/ove"
  		},
  		{
  			"id": "16851430",
  			"id_hs92": "851430",
  			"name": "Industrial/laboratory electric furnaces and ovens nes"
  		},
  		{
  			"id": "16851440",
  			"id_hs92": "851440",
  			"name": "Industrial induction/dielectric heating equipment nes"
  		},
  		{
  			"id": "16851490",
  			"id_hs92": "851490",
  			"name": "Parts of industrial/etc electric furnaces/ovens nes"
  		},
  		{
  			"id": "168515",
  			"id_hs92": "8515",
  			"name": "Electric Soldering Equipment"
  		},
  		{
  			"id": "16851511",
  			"id_hs92": "851511",
  			"name": "Electric soldering irons and guns"
  		},
  		{
  			"id": "16851519",
  			"id_hs92": "851519",
  			"name": "Electric brazing, soldering machines and apparatus ne"
  		},
  		{
  			"id": "16851521",
  			"id_hs92": "851521",
  			"name": "Electric resistance welding equipment, automatic"
  		},
  		{
  			"id": "16851529",
  			"id_hs92": "851529",
  			"name": "Electric resistance welding equipment, non-automatic"
  		},
  		{
  			"id": "16851531",
  			"id_hs92": "851531",
  			"name": "Automatic electric plasma, other arc welding equipmen"
  		},
  		{
  			"id": "16851539",
  			"id_hs92": "851539",
  			"name": "Non-automatic electric plasma and other arc welders"
  		},
  		{
  			"id": "16851580",
  			"id_hs92": "851580",
  			"name": "Electric, laser and ultrasonic welding equipment nes"
  		},
  		{
  			"id": "16851590",
  			"id_hs92": "851590",
  			"name": "Parts of electric solder, weld or braze equipment"
  		},
  		{
  			"id": "168516",
  			"id_hs92": "8516",
  			"name": "Electric Heaters"
  		},
  		{
  			"id": "16851610",
  			"id_hs92": "851610",
  			"name": "Electric instant, storage and immersion water heaters"
  		},
  		{
  			"id": "16851621",
  			"id_hs92": "851621",
  			"name": "Electric storage heating radiators"
  		},
  		{
  			"id": "16851629",
  			"id_hs92": "851629",
  			"name": "Electric space heating nes and soil heating apparatus"
  		},
  		{
  			"id": "16851631",
  			"id_hs92": "851631",
  			"name": "Electric hair dryers"
  		},
  		{
  			"id": "16851632",
  			"id_hs92": "851632",
  			"name": "Electro-thermic hairdressing apparatus, nes"
  		},
  		{
  			"id": "16851633",
  			"id_hs92": "851633",
  			"name": "Electro-thermic hand drying apparatus"
  		},
  		{
  			"id": "16851640",
  			"id_hs92": "851640",
  			"name": "Electric smoothing irons"
  		},
  		{
  			"id": "16851650",
  			"id_hs92": "851650",
  			"name": "Microwave ovens"
  		},
  		{
  			"id": "16851660",
  			"id_hs92": "851660",
  			"name": "Electric cooking, grilling & roasting equipment nes"
  		},
  		{
  			"id": "16851671",
  			"id_hs92": "851671",
  			"name": "Electric coffee or tea makers, domestic"
  		},
  		{
  			"id": "16851672",
  			"id_hs92": "851672",
  			"name": "Electric toasters, domestic"
  		},
  		{
  			"id": "16851679",
  			"id_hs92": "851679",
  			"name": "Electro-thermic appliances, domestic, nes"
  		},
  		{
  			"id": "16851680",
  			"id_hs92": "851680",
  			"name": "Electric heating resistors"
  		},
  		{
  			"id": "16851690",
  			"id_hs92": "851690",
  			"name": "Parts of electro-thermic apparatus, domestic, etc"
  		},
  		{
  			"id": "168517",
  			"id_hs92": "8517",
  			"name": "Telephones"
  		},
  		{
  			"id": "16851710",
  			"id_hs92": "851710",
  			"name": "Telephone sets"
  		},
  		{
  			"id": "16851720",
  			"id_hs92": "851720",
  			"name": "Teleprinters"
  		},
  		{
  			"id": "16851730",
  			"id_hs92": "851730",
  			"name": "Telephonic or telegraphic switching apparatus"
  		},
  		{
  			"id": "16851740",
  			"id_hs92": "851740",
  			"name": "Apparatus, for carrier-current line systems, nes"
  		},
  		{
  			"id": "16851781",
  			"id_hs92": "851781",
  			"name": "Telephonic apparatus, nes"
  		},
  		{
  			"id": "16851782",
  			"id_hs92": "851782",
  			"name": "Telegraphic apparatus, nes"
  		},
  		{
  			"id": "16851790",
  			"id_hs92": "851790",
  			"name": "Parts of line telephone/telegraph equipment, nes"
  		},
  		{
  			"id": "168518",
  			"id_hs92": "8518",
  			"name": "Microphones and Headphones"
  		},
  		{
  			"id": "16851810",
  			"id_hs92": "851810",
  			"name": "Microphones and stands thereof"
  		},
  		{
  			"id": "16851821",
  			"id_hs92": "851821",
  			"name": "Single loudspeakers, mounted in enclosure"
  		},
  		{
  			"id": "16851822",
  			"id_hs92": "851822",
  			"name": "Multiple loudspeakers, mounted in single enclosure"
  		},
  		{
  			"id": "16851829",
  			"id_hs92": "851829",
  			"name": "Loudspeakers, nes"
  		},
  		{
  			"id": "16851830",
  			"id_hs92": "851830",
  			"name": "Headphones, earphones, combinations"
  		},
  		{
  			"id": "16851840",
  			"id_hs92": "851840",
  			"name": "Audio-frequency electric amplifiers"
  		},
  		{
  			"id": "16851850",
  			"id_hs92": "851850",
  			"name": "Electric sound amplifier sets"
  		},
  		{
  			"id": "16851890",
  			"id_hs92": "851890",
  			"name": "Parts of non-recording electronic equipment"
  		},
  		{
  			"id": "168519",
  			"id_hs92": "8519",
  			"name": "Sound Recording Equipment"
  		},
  		{
  			"id": "16851910",
  			"id_hs92": "851910",
  			"name": "Coin or disc-operated record-players"
  		},
  		{
  			"id": "16851921",
  			"id_hs92": "851921",
  			"name": "Record-players without built-in loudspeaker, nes"
  		},
  		{
  			"id": "16851929",
  			"id_hs92": "851929",
  			"name": "Record-players with loudspeakers, nes"
  		},
  		{
  			"id": "16851931",
  			"id_hs92": "851931",
  			"name": "Turntables with automatic record changing mechanism"
  		},
  		{
  			"id": "16851939",
  			"id_hs92": "851939",
  			"name": "Turntables, without record changers"
  		},
  		{
  			"id": "16851940",
  			"id_hs92": "851940",
  			"name": "Transcribing machines"
  		},
  		{
  			"id": "16851991",
  			"id_hs92": "851991",
  			"name": "Cassette players, non-recording"
  		},
  		{
  			"id": "16851999",
  			"id_hs92": "851999",
  			"name": "Sound reproducing apparatus, non-recording, nes"
  		},
  		{
  			"id": "168520",
  			"id_hs92": "8520",
  			"name": "Dictation Machines"
  		},
  		{
  			"id": "16852010",
  			"id_hs92": "852010",
  			"name": "Dictating machine requiring external power source"
  		},
  		{
  			"id": "16852020",
  			"id_hs92": "852020",
  			"name": "Telephone answering machines"
  		},
  		{
  			"id": "16852031",
  			"id_hs92": "852031",
  			"name": "Cassette type audio tape recorders, sound reproducing"
  		},
  		{
  			"id": "16852039",
  			"id_hs92": "852039",
  			"name": "Non-cassette audio tape recorders, sound reproducing"
  		},
  		{
  			"id": "16852090",
  			"id_hs92": "852090",
  			"name": "Audio recording equipment without sound reproduction"
  		},
  		{
  			"id": "168521",
  			"id_hs92": "8521",
  			"name": "Video Recording Equipment"
  		},
  		{
  			"id": "16852110",
  			"id_hs92": "852110",
  			"name": "Video recording/reproducing apparatus, magnetic tape"
  		},
  		{
  			"id": "16852190",
  			"id_hs92": "852190",
  			"name": "Video record/reproduction apparatus not magnetic tape"
  		},
  		{
  			"id": "168522",
  			"id_hs92": "8522",
  			"name": "Audio and Video Recording Accessories"
  		},
  		{
  			"id": "16852210",
  			"id_hs92": "852210",
  			"name": "Pick-up cartridges"
  		},
  		{
  			"id": "16852290",
  			"id_hs92": "852290",
  			"name": "Parts and accessories of recorders except cartridges"
  		},
  		{
  			"id": "168523",
  			"id_hs92": "8523",
  			"name": "Blank Audio Media"
  		},
  		{
  			"id": "16852311",
  			"id_hs92": "852311",
  			"name": "Unrecorded magnetic tapes, width < 4 mm"
  		},
  		{
  			"id": "16852312",
  			"id_hs92": "852312",
  			"name": "Unrecorded magnetic tapes, width 4-6.5 mm"
  		},
  		{
  			"id": "16852313",
  			"id_hs92": "852313",
  			"name": "Unrecorded magnetic tapes, width > 6.5 mm"
  		},
  		{
  			"id": "16852320",
  			"id_hs92": "852320",
  			"name": "Unrecorded magnetic discs"
  		},
  		{
  			"id": "16852390",
  			"id_hs92": "852390",
  			"name": "Unrecorded sound recording media except photo/magneti"
  		},
  		{
  			"id": "168524",
  			"id_hs92": "8524",
  			"name": "Sound Recordings"
  		},
  		{
  			"id": "16852410",
  			"id_hs92": "852410",
  			"name": "Recorded gramophone records"
  		},
  		{
  			"id": "16852421",
  			"id_hs92": "852421",
  			"name": "Recorded magnetic tapes, width < 4 mm"
  		},
  		{
  			"id": "16852422",
  			"id_hs92": "852422",
  			"name": "Recorded magnetic tapes, width 4-6.5 mm"
  		},
  		{
  			"id": "16852423",
  			"id_hs92": "852423",
  			"name": "Recorded magnetic tapes, width > 6.5 mm"
  		},
  		{
  			"id": "16852490",
  			"id_hs92": "852490",
  			"name": "Sound recordings other than photographic products nes"
  		},
  		{
  			"id": "168525",
  			"id_hs92": "8525",
  			"name": "Broadcasting Equipment"
  		},
  		{
  			"id": "16852510",
  			"id_hs92": "852510",
  			"name": "Transmission apparatus for radio, telephone and TV"
  		},
  		{
  			"id": "16852520",
  			"id_hs92": "852520",
  			"name": "Transmit-receive apparatus for radio, TV, etc."
  		},
  		{
  			"id": "16852530",
  			"id_hs92": "852530",
  			"name": "Television cameras"
  		},
  		{
  			"id": "168526",
  			"id_hs92": "8526",
  			"name": "Navigation Equipment"
  		},
  		{
  			"id": "16852610",
  			"id_hs92": "852610",
  			"name": "Radar apparatus"
  		},
  		{
  			"id": "16852691",
  			"id_hs92": "852691",
  			"name": "Radio navigational aid apparatus"
  		},
  		{
  			"id": "16852692",
  			"id_hs92": "852692",
  			"name": "Radio remote control apparatus"
  		},
  		{
  			"id": "168527",
  			"id_hs92": "8527",
  			"name": "Radio Receivers"
  		},
  		{
  			"id": "16852711",
  			"id_hs92": "852711",
  			"name": "Radio receivers, portable, with sound reproduce/recor"
  		},
  		{
  			"id": "16852719",
  			"id_hs92": "852719",
  			"name": "Radio receivers, portable, non-recording"
  		},
  		{
  			"id": "16852721",
  			"id_hs92": "852721",
  			"name": "Radio receivers, external power,sound reproduce/recor"
  		},
  		{
  			"id": "16852729",
  			"id_hs92": "852729",
  			"name": "Radio receivers, external power, not sound reproducer"
  		},
  		{
  			"id": "16852731",
  			"id_hs92": "852731",
  			"name": "Radio-telephony receiver, with sound reproduce/record"
  		},
  		{
  			"id": "16852732",
  			"id_hs92": "852732",
  			"name": "Radio-telephony etc receivers, nes"
  		},
  		{
  			"id": "16852739",
  			"id_hs92": "852739",
  			"name": "Radio-broadcast receivers nes"
  		},
  		{
  			"id": "16852790",
  			"id_hs92": "852790",
  			"name": "Radio reception apparatus nes"
  		},
  		{
  			"id": "168528",
  			"id_hs92": "8528",
  			"name": "Video Displays"
  		},
  		{
  			"id": "16852810",
  			"id_hs92": "852810",
  			"name": "Colour television receivers/monitors/projectors"
  		},
  		{
  			"id": "16852820",
  			"id_hs92": "852820",
  			"name": "Monochrome television receivers/monitors/projectors"
  		},
  		{
  			"id": "168529",
  			"id_hs92": "8529",
  			"name": "Broadcasting Accessories"
  		},
  		{
  			"id": "16852910",
  			"id_hs92": "852910",
  			"name": "Aerials and aerial reflectors"
  		},
  		{
  			"id": "16852990",
  			"id_hs92": "852990",
  			"name": "Parts for radio/tv transmit/receive equipment, nes"
  		},
  		{
  			"id": "168530",
  			"id_hs92": "8530",
  			"name": "Traffic Signals"
  		},
  		{
  			"id": "16853010",
  			"id_hs92": "853010",
  			"name": "Electric signal, safety & traffic controls, railway"
  		},
  		{
  			"id": "16853080",
  			"id_hs92": "853080",
  			"name": "Electric signal, safety & traffic controls, nes"
  		},
  		{
  			"id": "16853090",
  			"id_hs92": "853090",
  			"name": "Electric signal, safety & traffic controller parts"
  		},
  		{
  			"id": "168531",
  			"id_hs92": "8531",
  			"name": "Audio Alarms"
  		},
  		{
  			"id": "16853110",
  			"id_hs92": "853110",
  			"name": "Burglar or fire alarms and similar apparatus"
  		},
  		{
  			"id": "16853120",
  			"id_hs92": "853120",
  			"name": "Indicator panels incorporating electronic displays"
  		},
  		{
  			"id": "16853180",
  			"id_hs92": "853180",
  			"name": "Electric sound or visual signalling apparatus, nes"
  		},
  		{
  			"id": "16853190",
  			"id_hs92": "853190",
  			"name": "Parts of electric sound & visual signalling apparatus"
  		},
  		{
  			"id": "168532",
  			"id_hs92": "8532",
  			"name": "Electrical Capacitors"
  		},
  		{
  			"id": "16853210",
  			"id_hs92": "853210",
  			"name": "Fixed power capacitors (50/60 herz circuits)"
  		},
  		{
  			"id": "16853221",
  			"id_hs92": "853221",
  			"name": "Electric capacitors, fixed, tantalum, nes"
  		},
  		{
  			"id": "16853222",
  			"id_hs92": "853222",
  			"name": "Electric capacitors, fixed, aluminium electrolytic ne"
  		},
  		{
  			"id": "16853223",
  			"id_hs92": "853223",
  			"name": "Electric capacitors, fixed, ceramic, single layer"
  		},
  		{
  			"id": "16853224",
  			"id_hs92": "853224",
  			"name": "Electric capacitors, fixed, ceramic, multilayer,"
  		},
  		{
  			"id": "16853225",
  			"id_hs92": "853225",
  			"name": "Electric capacitors, fixed, paper/plastic dielectric"
  		},
  		{
  			"id": "16853229",
  			"id_hs92": "853229",
  			"name": "Electric capacitors, fixed, nes"
  		},
  		{
  			"id": "16853230",
  			"id_hs92": "853230",
  			"name": "Electric capacitors, variable or adjustable (pre-set)"
  		},
  		{
  			"id": "16853290",
  			"id_hs92": "853290",
  			"name": "Parts of electrical capacitors"
  		},
  		{
  			"id": "168533",
  			"id_hs92": "8533",
  			"name": "Electrical Resistors"
  		},
  		{
  			"id": "16853310",
  			"id_hs92": "853310",
  			"name": "Electrical resistors, fixed carbon"
  		},
  		{
  			"id": "16853321",
  			"id_hs92": "853321",
  			"name": "Electrical resistors fixed, power capacity < 20 watt"
  		},
  		{
  			"id": "16853329",
  			"id_hs92": "853329",
  			"name": "Electrical resistors, fixed, except heating, > 20 wat"
  		},
  		{
  			"id": "16853331",
  			"id_hs92": "853331",
  			"name": "Wirewound variable resistors, rheostats, etc, <20 wat"
  		},
  		{
  			"id": "16853339",
  			"id_hs92": "853339",
  			"name": "Wirewound variable resistors, rheostats, etc > 20 wat"
  		},
  		{
  			"id": "16853340",
  			"id_hs92": "853340",
  			"name": "Variable resistors, rheostats and potentiometers, nes"
  		},
  		{
  			"id": "16853390",
  			"id_hs92": "853390",
  			"name": "Parts of electrical resistors, rheostats, etc"
  		},
  		{
  			"id": "168534",
  			"id_hs92": "8534",
  			"name": "Printed Circuit Boards"
  		},
  		{
  			"id": "16853400",
  			"id_hs92": "853400",
  			"name": "Electronic printed circuits"
  		},
  		{
  			"id": "168535",
  			"id_hs92": "8535",
  			"name": "High-voltage Protection Equipment"
  		},
  		{
  			"id": "16853510",
  			"id_hs92": "853510",
  			"name": "Electrical fuses, for voltage > 1kV"
  		},
  		{
  			"id": "16853521",
  			"id_hs92": "853521",
  			"name": "Automatic circuit breakers for voltage 1-72.5 kV"
  		},
  		{
  			"id": "16853529",
  			"id_hs92": "853529",
  			"name": "Automatic circuit breakers for voltage > 72.5 kV"
  		},
  		{
  			"id": "16853530",
  			"id_hs92": "853530",
  			"name": "Isolating and make-and-break switches, voltage >1 kV"
  		},
  		{
  			"id": "16853540",
  			"id_hs92": "853540",
  			"name": "Lightning arresters & voltage or surge limiters > 1kV"
  		},
  		{
  			"id": "16853590",
  			"id_hs92": "853590",
  			"name": "Electrical apparatus for voltage > 1kV, nes"
  		},
  		{
  			"id": "168536",
  			"id_hs92": "8536",
  			"name": "Low-voltage Protection Equipment"
  		},
  		{
  			"id": "16853610",
  			"id_hs92": "853610",
  			"name": "Electrical fuses, for < 1,000 volts"
  		},
  		{
  			"id": "16853620",
  			"id_hs92": "853620",
  			"name": "Automatic circuit breakers for < 1,000 volts"
  		},
  		{
  			"id": "16853630",
  			"id_hs92": "853630",
  			"name": "Electrical circuit protectors nes for < 1,000 volts"
  		},
  		{
  			"id": "16853641",
  			"id_hs92": "853641",
  			"name": "Electrical relays for < 60 volts"
  		},
  		{
  			"id": "16853649",
  			"id_hs92": "853649",
  			"name": "Electrical relays for 60 - 1,000 volts"
  		},
  		{
  			"id": "16853650",
  			"id_hs92": "853650",
  			"name": "Electrical switches for < 1,000 volts, nes"
  		},
  		{
  			"id": "16853661",
  			"id_hs92": "853661",
  			"name": "Electrical lamp-holders, for < 1,000 volts"
  		},
  		{
  			"id": "16853669",
  			"id_hs92": "853669",
  			"name": "Electrical plugs and sockets"
  		},
  		{
  			"id": "16853690",
  			"id_hs92": "853690",
  			"name": "Electrical switch, protector, connecter for < 1kV nes"
  		},
  		{
  			"id": "168537",
  			"id_hs92": "8537",
  			"name": "Electrical Control Boards"
  		},
  		{
  			"id": "16853710",
  			"id_hs92": "853710",
  			"name": "Electrical control and distribution boards, < 1kV"
  		},
  		{
  			"id": "16853720",
  			"id_hs92": "853720",
  			"name": "Electrical control and distribution boards, > 1kV"
  		},
  		{
  			"id": "168538",
  			"id_hs92": "8538",
  			"name": "Electrical Power Accessories"
  		},
  		{
  			"id": "16853810",
  			"id_hs92": "853810",
  			"name": "Elictrical boards, panels, etc, not equipped"
  		},
  		{
  			"id": "16853890",
  			"id_hs92": "853890",
  			"name": "Parts, electric switches, protectors & connectors nes"
  		},
  		{
  			"id": "168539",
  			"id_hs92": "8539",
  			"name": "Electric Filament"
  		},
  		{
  			"id": "16853910",
  			"id_hs92": "853910",
  			"name": "Sealed beam lamp units"
  		},
  		{
  			"id": "16853921",
  			"id_hs92": "853921",
  			"name": "Filament lamps, tungsten halogen"
  		},
  		{
  			"id": "16853922",
  			"id_hs92": "853922",
  			"name": "Filament lamps, of a power <= 200 Watt, > 100 volts"
  		},
  		{
  			"id": "16853929",
  			"id_hs92": "853929",
  			"name": "Filament lamps, except ultraviolet or infra-red, nes"
  		},
  		{
  			"id": "16853931",
  			"id_hs92": "853931",
  			"name": "Fluorescent lamps, hot cathode"
  		},
  		{
  			"id": "16853939",
  			"id_hs92": "853939",
  			"name": "Discharge lamps, other than ultra-violet lamps, nes"
  		},
  		{
  			"id": "16853940",
  			"id_hs92": "853940",
  			"name": "Ultra-violet or infra-red lamps, arc lamps"
  		},
  		{
  			"id": "16853990",
  			"id_hs92": "853990",
  			"name": "Parts of electric filament or discharge lamps"
  		},
  		{
  			"id": "168540",
  			"id_hs92": "8540",
  			"name": "Cathode Tubes"
  		},
  		{
  			"id": "16854011",
  			"id_hs92": "854011",
  			"name": "Colour cathode-ray television picture tubes, monitors"
  		},
  		{
  			"id": "16854012",
  			"id_hs92": "854012",
  			"name": "Monochrome cathode-ray picture tubes, monitors"
  		},
  		{
  			"id": "16854020",
  			"id_hs92": "854020",
  			"name": "Television camera tubes and other photo-cathode tubes"
  		},
  		{
  			"id": "16854030",
  			"id_hs92": "854030",
  			"name": "Cathode-ray tubes, except for television"
  		},
  		{
  			"id": "16854041",
  			"id_hs92": "854041",
  			"name": "Magnetron tubes"
  		},
  		{
  			"id": "16854042",
  			"id_hs92": "854042",
  			"name": "Klystron tubes"
  		},
  		{
  			"id": "16854049",
  			"id_hs92": "854049",
  			"name": "Microwave tubes, except magnetron/klystron"
  		},
  		{
  			"id": "16854081",
  			"id_hs92": "854081",
  			"name": "Receiver or amplifier valves and tubes"
  		},
  		{
  			"id": "16854089",
  			"id_hs92": "854089",
  			"name": "Electronic valves/tubes, except receiver/amplifier"
  		},
  		{
  			"id": "16854091",
  			"id_hs92": "854091",
  			"name": "Parts of cathode-ray tubes"
  		},
  		{
  			"id": "16854099",
  			"id_hs92": "854099",
  			"name": "Parts of electronic valve & tubes, except cathode ray"
  		},
  		{
  			"id": "168541",
  			"id_hs92": "8541",
  			"name": "Semiconductor Devices"
  		},
  		{
  			"id": "16854110",
  			"id_hs92": "854110",
  			"name": "Diodes, except photosensitive and light emitting"
  		},
  		{
  			"id": "16854121",
  			"id_hs92": "854121",
  			"name": "Transistors, except photosensitive, < 1 watt"
  		},
  		{
  			"id": "16854129",
  			"id_hs92": "854129",
  			"name": "Transistors, except photosensitive, > 1 watt"
  		},
  		{
  			"id": "16854130",
  			"id_hs92": "854130",
  			"name": "Thyristors/diacs/triacs, except photosensitive device"
  		},
  		{
  			"id": "16854140",
  			"id_hs92": "854140",
  			"name": "Photosensitive/photovoltaic/LED semiconductor devices"
  		},
  		{
  			"id": "16854150",
  			"id_hs92": "854150",
  			"name": "Semiconductor devices, not light sensitive or emittin"
  		},
  		{
  			"id": "16854160",
  			"id_hs92": "854160",
  			"name": "Mounted piezo-electric crystals"
  		},
  		{
  			"id": "16854190",
  			"id_hs92": "854190",
  			"name": "Parts of semiconductor devices and similar devices"
  		},
  		{
  			"id": "168542",
  			"id_hs92": "8542",
  			"name": "Integrated Circuits"
  		},
  		{
  			"id": "16854211",
  			"id_hs92": "854211",
  			"name": "Monolithic integrated circuits, digital"
  		},
  		{
  			"id": "16854219",
  			"id_hs92": "854219",
  			"name": "Monolithic integrated circuits, except digital"
  		},
  		{
  			"id": "16854220",
  			"id_hs92": "854220",
  			"name": "Hybrid integrated circuits"
  		},
  		{
  			"id": "16854280",
  			"id_hs92": "854280",
  			"name": "Electronic integrated circuits/microassemblies, nes"
  		},
  		{
  			"id": "16854290",
  			"id_hs92": "854290",
  			"name": "Parts of electronic integrated circuits etc"
  		},
  		{
  			"id": "168543",
  			"id_hs92": "8543",
  			"name": "Other Electrical Machinery"
  		},
  		{
  			"id": "16854310",
  			"id_hs92": "854310",
  			"name": "Particle accelerators"
  		},
  		{
  			"id": "16854320",
  			"id_hs92": "854320",
  			"name": "Signal generators"
  		},
  		{
  			"id": "16854330",
  			"id_hs92": "854330",
  			"name": "Apparatus for electro-plating, electrolysis, etc"
  		},
  		{
  			"id": "16854380",
  			"id_hs92": "854380",
  			"name": "Electrical machines and apparatus, nes"
  		},
  		{
  			"id": "16854390",
  			"id_hs92": "854390",
  			"name": "Parts of electrical machines and apparatus nes"
  		},
  		{
  			"id": "168544",
  			"id_hs92": "8544",
  			"name": "Insulated Wire"
  		},
  		{
  			"id": "16854411",
  			"id_hs92": "854411",
  			"name": "Insulated winding wire of copper"
  		},
  		{
  			"id": "16854419",
  			"id_hs92": "854419",
  			"name": "Insulated winding wire, nes"
  		},
  		{
  			"id": "16854420",
  			"id_hs92": "854420",
  			"name": "Co-axial cable and other co-axial electric conductors"
  		},
  		{
  			"id": "16854430",
  			"id_hs92": "854430",
  			"name": "Ignition/other wiring sets for vehicles/aircraft/ship"
  		},
  		{
  			"id": "16854441",
  			"id_hs92": "854441",
  			"name": "Electric conductors, nes < 80 volts, with connectors"
  		},
  		{
  			"id": "16854449",
  			"id_hs92": "854449",
  			"name": "Electric conductors, nes < 80 volts, no connectors"
  		},
  		{
  			"id": "16854451",
  			"id_hs92": "854451",
  			"name": "Electric conductors, 80-1,000 volts, with connectors"
  		},
  		{
  			"id": "16854459",
  			"id_hs92": "854459",
  			"name": "Electric conductors, 80-1,000 volts, no connectors"
  		},
  		{
  			"id": "16854460",
  			"id_hs92": "854460",
  			"name": "Electric conductors, for over 1,000 volts, nes"
  		},
  		{
  			"id": "16854470",
  			"id_hs92": "854470",
  			"name": "Optical fibres and cables"
  		},
  		{
  			"id": "168545",
  			"id_hs92": "8545",
  			"name": "Carbon-based Electronics"
  		},
  		{
  			"id": "16854511",
  			"id_hs92": "854511",
  			"name": "Carbon and graphite furnace electrodes"
  		},
  		{
  			"id": "16854519",
  			"id_hs92": "854519",
  			"name": "Carbon and graphite electrodes, except for furnaces"
  		},
  		{
  			"id": "16854520",
  			"id_hs92": "854520",
  			"name": "Carbon and graphite brushes"
  		},
  		{
  			"id": "16854590",
  			"id_hs92": "854590",
  			"name": "Battery carbons  and carbon electrical items nes"
  		},
  		{
  			"id": "168546",
  			"id_hs92": "8546",
  			"name": "Electrical Insulators"
  		},
  		{
  			"id": "16854610",
  			"id_hs92": "854610",
  			"name": "Electrical insulators of glass"
  		},
  		{
  			"id": "16854620",
  			"id_hs92": "854620",
  			"name": "Electrical insulators of ceramics"
  		},
  		{
  			"id": "16854690",
  			"id_hs92": "854690",
  			"name": "Electrical insulators, except glass/ceramics"
  		},
  		{
  			"id": "168547",
  			"id_hs92": "8547",
  			"name": "Metal Insulating Fittings"
  		},
  		{
  			"id": "16854710",
  			"id_hs92": "854710",
  			"name": "Electrical insulating fittings of ceramics"
  		},
  		{
  			"id": "16854720",
  			"id_hs92": "854720",
  			"name": "Electrical insulating fittings of plastics"
  		},
  		{
  			"id": "16854790",
  			"id_hs92": "854790",
  			"name": "Electrical insulating fittings except plastic/ceramic"
  		},
  		{
  			"id": "168548",
  			"id_hs92": "8548",
  			"name": "Electrical Parts"
  		},
  		{
  			"id": "16854800",
  			"id_hs92": "854800",
  			"name": "Electrical parts of machinery and apparatus, nes"
  		},
  		{
  			"id": "17",
  			"id_hs92": null,
  			"name": "Transportation"
  		},
  		{
  			"id": "178601",
  			"id_hs92": "8601",
  			"name": "Electric Locomotives"
  		},
  		{
  			"id": "17860110",
  			"id_hs92": "860110",
  			"name": "Rail locomotives, externally electrically powered"
  		},
  		{
  			"id": "17860120",
  			"id_hs92": "860120",
  			"name": "Rail locomotives powered by electric accumulators"
  		},
  		{
  			"id": "178602",
  			"id_hs92": "8602",
  			"name": "Other Locomotives"
  		},
  		{
  			"id": "17860210",
  			"id_hs92": "860210",
  			"name": "Rail locomotives, diesel-electric"
  		},
  		{
  			"id": "17860290",
  			"id_hs92": "860290",
  			"name": "Rail locomotives non-electric and locomotive tenders"
  		},
  		{
  			"id": "178603",
  			"id_hs92": "8603",
  			"name": "Self-Propelled Rail Transport"
  		},
  		{
  			"id": "17860310",
  			"id_hs92": "860310",
  			"name": "Self-propelled railway cars, external electric power"
  		},
  		{
  			"id": "17860390",
  			"id_hs92": "860390",
  			"name": "Self-propelled railway cars except external electric"
  		},
  		{
  			"id": "178604",
  			"id_hs92": "8604",
  			"name": "Railway Maintenance Vehicles"
  		},
  		{
  			"id": "17860400",
  			"id_hs92": "860400",
  			"name": "Railway maintenance-of-way service vehicles"
  		},
  		{
  			"id": "178605",
  			"id_hs92": "8605",
  			"name": "Railway Passenger Cars"
  		},
  		{
  			"id": "17860500",
  			"id_hs92": "860500",
  			"name": "Railway passenger and special purpose coaches"
  		},
  		{
  			"id": "178606",
  			"id_hs92": "8606",
  			"name": "Railway Freight Cars"
  		},
  		{
  			"id": "17860610",
  			"id_hs92": "860610",
  			"name": "Railway tank cars"
  		},
  		{
  			"id": "17860620",
  			"id_hs92": "860620",
  			"name": "Railway wagons, insulated/refrigerated except tank ca"
  		},
  		{
  			"id": "17860630",
  			"id_hs92": "860630",
  			"name": "Railway cars, self-discharging, nes"
  		},
  		{
  			"id": "17860691",
  			"id_hs92": "860691",
  			"name": "Railway cars nes, closed and covered"
  		},
  		{
  			"id": "17860692",
  			"id_hs92": "860692",
  			"name": "Railway cars nes, open, with sides > 60 cm high"
  		},
  		{
  			"id": "17860699",
  			"id_hs92": "860699",
  			"name": "Railway cars nes"
  		},
  		{
  			"id": "178607",
  			"id_hs92": "8607",
  			"name": "Locomotive Parts"
  		},
  		{
  			"id": "17860711",
  			"id_hs92": "860711",
  			"name": "Railway & tramway driving bogies  & bissel-bogies"
  		},
  		{
  			"id": "17860712",
  			"id_hs92": "860712",
  			"name": "Railway & tramway bogies & bissel-bogies, non-driving"
  		},
  		{
  			"id": "17860719",
  			"id_hs92": "860719",
  			"name": "Railway & tramway axles, wheels and parts"
  		},
  		{
  			"id": "17860721",
  			"id_hs92": "860721",
  			"name": "Air brakes, parts for railway rolling stock"
  		},
  		{
  			"id": "17860729",
  			"id_hs92": "860729",
  			"name": "Brakes except air, parts for railway rolling stock"
  		},
  		{
  			"id": "17860730",
  			"id_hs92": "860730",
  			"name": "Coupling devices, parts for railway rolling stock"
  		},
  		{
  			"id": "17860791",
  			"id_hs92": "860791",
  			"name": "Railway locomotive parts nes"
  		},
  		{
  			"id": "17860799",
  			"id_hs92": "860799",
  			"name": "Railway rolling stock parts nes"
  		},
  		{
  			"id": "178608",
  			"id_hs92": "8608",
  			"name": "Railway Track Fixtures"
  		},
  		{
  			"id": "17860800",
  			"id_hs92": "860800",
  			"name": "Signals etc for rail, tram, water-way, port, airfield"
  		},
  		{
  			"id": "178609",
  			"id_hs92": "8609",
  			"name": "Railway Cargo Containers"
  		},
  		{
  			"id": "17860900",
  			"id_hs92": "860900",
  			"name": "Cargo containers designed for carriage"
  		},
  		{
  			"id": "178701",
  			"id_hs92": "8701",
  			"name": "Tractors"
  		},
  		{
  			"id": "17870110",
  			"id_hs92": "870110",
  			"name": "Pedestrian controlled tractors"
  		},
  		{
  			"id": "17870120",
  			"id_hs92": "870120",
  			"name": "Road tractors for semi-trailers (truck tractors)"
  		},
  		{
  			"id": "17870130",
  			"id_hs92": "870130",
  			"name": "Track-laying tractors (crawlers)"
  		},
  		{
  			"id": "17870190",
  			"id_hs92": "870190",
  			"name": "Wheeled tractors nes"
  		},
  		{
  			"id": "178702",
  			"id_hs92": "8702",
  			"name": "Buses"
  		},
  		{
  			"id": "17870210",
  			"id_hs92": "870210",
  			"name": "Diesel powered buses"
  		},
  		{
  			"id": "17870290",
  			"id_hs92": "870290",
  			"name": "Buses except diesel powered"
  		},
  		{
  			"id": "178703",
  			"id_hs92": "8703",
  			"name": "Cars"
  		},
  		{
  			"id": "17870310",
  			"id_hs92": "870310",
  			"name": "Snowmobiles, golf cars, similar vehicles"
  		},
  		{
  			"id": "17870321",
  			"id_hs92": "870321",
  			"name": "Micro Cars"
  		},
  		{
  			"id": "17870322",
  			"id_hs92": "870322",
  			"name": "Small Sized Cars"
  		},
  		{
  			"id": "17870323",
  			"id_hs92": "870323",
  			"name": "Medium Sized Cars"
  		},
  		{
  			"id": "17870324",
  			"id_hs92": "870324",
  			"name": "Large Sized Cars"
  		},
  		{
  			"id": "17870331",
  			"id_hs92": "870331",
  			"name": "Small Diesel Engine Cars"
  		},
  		{
  			"id": "17870332",
  			"id_hs92": "870332",
  			"name": "Medium Diesel Engine Cars"
  		},
  		{
  			"id": "17870333",
  			"id_hs92": "870333",
  			"name": "Large Diesel Engine Cars"
  		},
  		{
  			"id": "17870390",
  			"id_hs92": "870390",
  			"name": "Other Vehicles Including Gas Turbine Powered"
  		},
  		{
  			"id": "178704",
  			"id_hs92": "8704",
  			"name": "Delivery Trucks"
  		},
  		{
  			"id": "17870410",
  			"id_hs92": "870410",
  			"name": "Dump trucks designed for off-highway use"
  		},
  		{
  			"id": "17870421",
  			"id_hs92": "870421",
  			"name": "Diesel powered trucks weighing < 5 tonnes"
  		},
  		{
  			"id": "17870422",
  			"id_hs92": "870422",
  			"name": "Diesel powered trucks weighing 5-20 tonnes"
  		},
  		{
  			"id": "17870423",
  			"id_hs92": "870423",
  			"name": "Diesel powered trucks weighing > 20 tonnes"
  		},
  		{
  			"id": "17870431",
  			"id_hs92": "870431",
  			"name": "Spark ignition engine trucks weighing < 5 tonnes"
  		},
  		{
  			"id": "17870432",
  			"id_hs92": "870432",
  			"name": "Spark ignition engine trucks weighing > 5 tonnes"
  		},
  		{
  			"id": "17870490",
  			"id_hs92": "870490",
  			"name": "Trucks nes"
  		},
  		{
  			"id": "178705",
  			"id_hs92": "8705",
  			"name": "Specialized Vehicles"
  		},
  		{
  			"id": "17870510",
  			"id_hs92": "870510",
  			"name": "Mobile cranes"
  		},
  		{
  			"id": "17870520",
  			"id_hs92": "870520",
  			"name": "Mobile drilling derricks"
  		},
  		{
  			"id": "17870530",
  			"id_hs92": "870530",
  			"name": "Fire fighting vehicles"
  		},
  		{
  			"id": "17870540",
  			"id_hs92": "870540",
  			"name": "Mobile concrete mixers"
  		},
  		{
  			"id": "17870590",
  			"id_hs92": "870590",
  			"name": "Special purpose motor vehicles nes"
  		},
  		{
  			"id": "178706",
  			"id_hs92": "8706",
  			"name": "Vehicle Chassis"
  		},
  		{
  			"id": "17870600",
  			"id_hs92": "870600",
  			"name": "Motor vehicle chassis fitted with engine"
  		},
  		{
  			"id": "178707",
  			"id_hs92": "8707",
  			"name": "Vehicle Bodies"
  		},
  		{
  			"id": "17870710",
  			"id_hs92": "870710",
  			"name": "Bodies for passenger carrying vehicles"
  		},
  		{
  			"id": "17870790",
  			"id_hs92": "870790",
  			"name": "Bodies for tractors, buses, trucks etc"
  		},
  		{
  			"id": "178708",
  			"id_hs92": "8708",
  			"name": "Vehicle Parts"
  		},
  		{
  			"id": "17870810",
  			"id_hs92": "870810",
  			"name": "Bumpers and parts thereof for motor vehicles"
  		},
  		{
  			"id": "17870821",
  			"id_hs92": "870821",
  			"name": "Safety seat belts for motor vehicles"
  		},
  		{
  			"id": "17870829",
  			"id_hs92": "870829",
  			"name": "Parts and accessories of bodies nes for motor vehicle"
  		},
  		{
  			"id": "17870831",
  			"id_hs92": "870831",
  			"name": "Mounted brake linings for motor vehicles"
  		},
  		{
  			"id": "17870839",
  			"id_hs92": "870839",
  			"name": "Brake system parts except linings for motor vehicles"
  		},
  		{
  			"id": "17870840",
  			"id_hs92": "870840",
  			"name": "Transmissions for motor vehicles"
  		},
  		{
  			"id": "17870850",
  			"id_hs92": "870850",
  			"name": "Drive axles with differential for motor vehicles"
  		},
  		{
  			"id": "17870860",
  			"id_hs92": "870860",
  			"name": "Non-driving axles/parts for motor vehicles"
  		},
  		{
  			"id": "17870870",
  			"id_hs92": "870870",
  			"name": "Wheels including parts/accessories for motor vehicles"
  		},
  		{
  			"id": "17870880",
  			"id_hs92": "870880",
  			"name": "Shock absorbers for motor vehicles"
  		},
  		{
  			"id": "17870891",
  			"id_hs92": "870891",
  			"name": "Radiators for motor vehicles"
  		},
  		{
  			"id": "17870892",
  			"id_hs92": "870892",
  			"name": "Mufflers and exhaust pipes for motor vehicles"
  		},
  		{
  			"id": "17870893",
  			"id_hs92": "870893",
  			"name": "Clutches and parts thereof for motor vehicles"
  		},
  		{
  			"id": "17870894",
  			"id_hs92": "870894",
  			"name": "Steering wheels, columns & boxes for motor vehicles"
  		},
  		{
  			"id": "17870899",
  			"id_hs92": "870899",
  			"name": "Motor vehicle parts nes"
  		},
  		{
  			"id": "178709",
  			"id_hs92": "8709",
  			"name": "Work Trucks"
  		},
  		{
  			"id": "17870911",
  			"id_hs92": "870911",
  			"name": "Work trucks, electrically powered"
  		},
  		{
  			"id": "17870919",
  			"id_hs92": "870919",
  			"name": "Work trucks except electrically powered"
  		},
  		{
  			"id": "17870990",
  			"id_hs92": "870990",
  			"name": "Work truck parts"
  		},
  		{
  			"id": "178710",
  			"id_hs92": "8710",
  			"name": "Armored vehicles"
  		},
  		{
  			"id": "17871000",
  			"id_hs92": "871000",
  			"name": "Tanks and other armoured fighting vehicles"
  		},
  		{
  			"id": "178711",
  			"id_hs92": "8711",
  			"name": "Motorcycles"
  		},
  		{
  			"id": "17871110",
  			"id_hs92": "871110",
  			"name": "Motorcycles, spark ignition engine of < 50 cc"
  		},
  		{
  			"id": "17871120",
  			"id_hs92": "871120",
  			"name": "Motorcycles, spark ignition engine of 50-250 cc"
  		},
  		{
  			"id": "17871130",
  			"id_hs92": "871130",
  			"name": "Motorcycles, spark ignition engine of 250-500 cc"
  		},
  		{
  			"id": "17871140",
  			"id_hs92": "871140",
  			"name": "Motorcycles, spark ignition engine of 500-800 cc"
  		},
  		{
  			"id": "17871150",
  			"id_hs92": "871150",
  			"name": "Motorcycles, spark ignition engine of > 800 cc"
  		},
  		{
  			"id": "17871190",
  			"id_hs92": "871190",
  			"name": "Motorcycles with other than a spark ignition engine"
  		},
  		{
  			"id": "178712",
  			"id_hs92": "8712",
  			"name": "Bicycles"
  		},
  		{
  			"id": "17871200",
  			"id_hs92": "871200",
  			"name": "Bicycles, other cycles, not motorized"
  		},
  		{
  			"id": "178713",
  			"id_hs92": "8713",
  			"name": "Wheelchairs"
  		},
  		{
  			"id": "17871310",
  			"id_hs92": "871310",
  			"name": "Wheelchairs not mechanically propelled"
  		},
  		{
  			"id": "17871390",
  			"id_hs92": "871390",
  			"name": "Wheelchairs, mechanically propelled"
  		},
  		{
  			"id": "178714",
  			"id_hs92": "8714",
  			"name": "Bi-Wheel Vehicle Parts"
  		},
  		{
  			"id": "17871411",
  			"id_hs92": "871411",
  			"name": "Motorcycle saddles"
  		},
  		{
  			"id": "17871419",
  			"id_hs92": "871419",
  			"name": "Motorcycle parts except saddles"
  		},
  		{
  			"id": "17871420",
  			"id_hs92": "871420",
  			"name": "Wheelchair parts"
  		},
  		{
  			"id": "17871491",
  			"id_hs92": "871491",
  			"name": "Bicycle frames and forks, and parts thereof"
  		},
  		{
  			"id": "17871492",
  			"id_hs92": "871492",
  			"name": "Bicycle wheel rims and spokes"
  		},
  		{
  			"id": "17871493",
  			"id_hs92": "871493",
  			"name": "Bicycle hubs, free-wheel sprocket wheels"
  		},
  		{
  			"id": "17871494",
  			"id_hs92": "871494",
  			"name": "Bicycle brakes, parts thereof"
  		},
  		{
  			"id": "17871495",
  			"id_hs92": "871495",
  			"name": "Bicycle saddles"
  		},
  		{
  			"id": "17871496",
  			"id_hs92": "871496",
  			"name": "Bicycle pedals/crank-gear, parts thereof"
  		},
  		{
  			"id": "17871499",
  			"id_hs92": "871499",
  			"name": "Bicycle parts nes"
  		},
  		{
  			"id": "178715",
  			"id_hs92": "8715",
  			"name": "Baby Carriages"
  		},
  		{
  			"id": "17871500",
  			"id_hs92": "871500",
  			"name": "Baby carriages and parts thereof"
  		},
  		{
  			"id": "178716",
  			"id_hs92": "8716",
  			"name": "Trailers"
  		},
  		{
  			"id": "17871610",
  			"id_hs92": "871610",
  			"name": "Trailers for housing or camping"
  		},
  		{
  			"id": "17871620",
  			"id_hs92": "871620",
  			"name": "Trailers for agricultural purposes"
  		},
  		{
  			"id": "17871631",
  			"id_hs92": "871631",
  			"name": "Tanker trailers and semi-trailers"
  		},
  		{
  			"id": "17871639",
  			"id_hs92": "871639",
  			"name": "Trailers nes for the transport of goods"
  		},
  		{
  			"id": "17871640",
  			"id_hs92": "871640",
  			"name": "Trailers, semi-trailers nes"
  		},
  		{
  			"id": "17871680",
  			"id_hs92": "871680",
  			"name": "Wheelbarrows, hand-carts, rickshaws etc"
  		},
  		{
  			"id": "17871690",
  			"id_hs92": "871690",
  			"name": "Trailer/non-mechanically propelled vehicle parts nes"
  		},
  		{
  			"id": "178801",
  			"id_hs92": "8801",
  			"name": "Non-powered Aircraft"
  		},
  		{
  			"id": "17880110",
  			"id_hs92": "880110",
  			"name": "Gliders, hang gliders"
  		},
  		{
  			"id": "17880190",
  			"id_hs92": "880190",
  			"name": "Balloons, dirigibles, non-powered aircraft nes"
  		},
  		{
  			"id": "178802",
  			"id_hs92": "8802",
  			"name": "Planes, Helicopters, and/or Spacecraft"
  		},
  		{
  			"id": "17880211",
  			"id_hs92": "880211",
  			"name": "Helicopters of an unladen weight < 2,000 kg"
  		},
  		{
  			"id": "17880212",
  			"id_hs92": "880212",
  			"name": "Helicopters of an unladen weight > 2,000 kg"
  		},
  		{
  			"id": "17880220",
  			"id_hs92": "880220",
  			"name": "Fixed wing aircraft, unladen weight < 2,000 kg"
  		},
  		{
  			"id": "17880230",
  			"id_hs92": "880230",
  			"name": "Fixed wing aircraft, unladen weight 2,000-15,000 kg"
  		},
  		{
  			"id": "17880240",
  			"id_hs92": "880240",
  			"name": "Fixed wing aircraft, unladen weight > 15,000 kg"
  		},
  		{
  			"id": "17880250",
  			"id_hs92": "880250",
  			"name": "Spacecraft, satellites and spacecraft launch vehicles"
  		},
  		{
  			"id": "178803",
  			"id_hs92": "8803",
  			"name": "Aircraft Parts"
  		},
  		{
  			"id": "17880310",
  			"id_hs92": "880310",
  			"name": "Aircraft propellers, rotors and parts thereof"
  		},
  		{
  			"id": "17880320",
  			"id_hs92": "880320",
  			"name": "Aircraft under-carriages and parts thereof"
  		},
  		{
  			"id": "17880330",
  			"id_hs92": "880330",
  			"name": "Aircraft parts nes"
  		},
  		{
  			"id": "17880390",
  			"id_hs92": "880390",
  			"name": "Parts of balloons, dirigibles, spacecraft"
  		},
  		{
  			"id": "178804",
  			"id_hs92": "8804",
  			"name": "Parachutes"
  		},
  		{
  			"id": "17880400",
  			"id_hs92": "880400",
  			"name": "Parachutes, parts and accessories thereof"
  		},
  		{
  			"id": "178805",
  			"id_hs92": "8805",
  			"name": "Aircraft Launch Gear"
  		},
  		{
  			"id": "17880510",
  			"id_hs92": "880510",
  			"name": "Aircraft launching and deck-arrestor gear, parts"
  		},
  		{
  			"id": "17880520",
  			"id_hs92": "880520",
  			"name": "Flight simulators, parts thereof"
  		},
  		{
  			"id": "178901",
  			"id_hs92": "8901",
  			"name": "Passenger and Cargo Ships"
  		},
  		{
  			"id": "17890110",
  			"id_hs92": "890110",
  			"name": "Cruise ships, excursion boats, ferry boats"
  		},
  		{
  			"id": "17890120",
  			"id_hs92": "890120",
  			"name": "Tankers"
  		},
  		{
  			"id": "17890130",
  			"id_hs92": "890130",
  			"name": "Refrigerated vessels other than tankers"
  		},
  		{
  			"id": "17890190",
  			"id_hs92": "890190",
  			"name": "Cargo vessels other than tanker or refrigerated"
  		},
  		{
  			"id": "178902",
  			"id_hs92": "8902",
  			"name": "Fishing Ships"
  		},
  		{
  			"id": "17890200",
  			"id_hs92": "890200",
  			"name": "Fishing vessels and factory ships"
  		},
  		{
  			"id": "178903",
  			"id_hs92": "8903",
  			"name": "Recreational Boats"
  		},
  		{
  			"id": "17890310",
  			"id_hs92": "890310",
  			"name": "Inflatable pleasure craft"
  		},
  		{
  			"id": "17890391",
  			"id_hs92": "890391",
  			"name": "Sailboats, with or without auxiliary motor"
  		},
  		{
  			"id": "17890392",
  			"id_hs92": "890392",
  			"name": "Motorboats, other than outboard motorboats"
  		},
  		{
  			"id": "17890399",
  			"id_hs92": "890399",
  			"name": "Rowing boats, canoes, pleasure boats except sail/powe"
  		},
  		{
  			"id": "178904",
  			"id_hs92": "8904",
  			"name": "Tug Boats"
  		},
  		{
  			"id": "17890400",
  			"id_hs92": "890400",
  			"name": "Tugs and pusher craft"
  		},
  		{
  			"id": "178905",
  			"id_hs92": "8905",
  			"name": "Special Purpose Ships"
  		},
  		{
  			"id": "17890510",
  			"id_hs92": "890510",
  			"name": "Dredgers"
  		},
  		{
  			"id": "17890520",
  			"id_hs92": "890520",
  			"name": "Floating, submersible drilling or production platform"
  		},
  		{
  			"id": "17890590",
  			"id_hs92": "890590",
  			"name": "Floating docks, special function vessels nes"
  		},
  		{
  			"id": "178906",
  			"id_hs92": "8906",
  			"name": "Other Sea Vessels"
  		},
  		{
  			"id": "17890600",
  			"id_hs92": "890600",
  			"name": "Warships, lifeboats, hospital ships, vessels nes"
  		},
  		{
  			"id": "178907",
  			"id_hs92": "8907",
  			"name": "Other Floating Structures"
  		},
  		{
  			"id": "17890710",
  			"id_hs92": "890710",
  			"name": "Inflatable rafts"
  		},
  		{
  			"id": "17890790",
  			"id_hs92": "890790",
  			"name": "Buoys, beacons, coffer-dams, pontoons, floats nes"
  		},
  		{
  			"id": "178908",
  			"id_hs92": "8908",
  			"name": "Scrap Vessels"
  		},
  		{
  			"id": "17890800",
  			"id_hs92": "890800",
  			"name": "Vessels and other floating structures for breaking up"
  		},
  		{
  			"id": "18",
  			"id_hs92": null,
  			"name": "Instruments"
  		},
  		{
  			"id": "189001",
  			"id_hs92": "9001",
  			"name": "Optical Fibers"
  		},
  		{
  			"id": "18900110",
  			"id_hs92": "900110",
  			"name": "Optical fibres, except for telecommunications"
  		},
  		{
  			"id": "18900120",
  			"id_hs92": "900120",
  			"name": "Sheets/plates of polarising material"
  		},
  		{
  			"id": "18900130",
  			"id_hs92": "900130",
  			"name": "Contact lenses"
  		},
  		{
  			"id": "18900140",
  			"id_hs92": "900140",
  			"name": "Spectacle lenses of glass"
  		},
  		{
  			"id": "18900150",
  			"id_hs92": "900150",
  			"name": "Spectacle lenses of other materials"
  		},
  		{
  			"id": "18900190",
  			"id_hs92": "900190",
  			"name": "Prisms, mirrors and optical elements nes, unmounted"
  		},
  		{
  			"id": "189002",
  			"id_hs92": "9002",
  			"name": "Mirrors and Lenses"
  		},
  		{
  			"id": "18900211",
  			"id_hs92": "900211",
  			"name": "Objective lenses for cameras, projectors, etc"
  		},
  		{
  			"id": "18900219",
  			"id_hs92": "900219",
  			"name": "Objective lenses, nes"
  		},
  		{
  			"id": "18900220",
  			"id_hs92": "900220",
  			"name": "Optical filters"
  		},
  		{
  			"id": "18900290",
  			"id_hs92": "900290",
  			"name": "Mounted lenses, prisms, mirrors, optical elements nes"
  		},
  		{
  			"id": "189003",
  			"id_hs92": "9003",
  			"name": "Eyewear Frames"
  		},
  		{
  			"id": "18900311",
  			"id_hs92": "900311",
  			"name": "Frames & mountings for spectacles etc, of plastic"
  		},
  		{
  			"id": "18900319",
  			"id_hs92": "900319",
  			"name": "Frames & mountings for spectacles etc, except plastic"
  		},
  		{
  			"id": "18900390",
  			"id_hs92": "900390",
  			"name": "Parts of frames and mountings for spectacles etc"
  		},
  		{
  			"id": "189004",
  			"id_hs92": "9004",
  			"name": "Eyewear"
  		},
  		{
  			"id": "18900410",
  			"id_hs92": "900410",
  			"name": "Sunglasses"
  		},
  		{
  			"id": "18900490",
  			"id_hs92": "900490",
  			"name": "Spectacles, goggles except sunglasses"
  		},
  		{
  			"id": "189005",
  			"id_hs92": "9005",
  			"name": "Binoculars and Telescopes"
  		},
  		{
  			"id": "18900510",
  			"id_hs92": "900510",
  			"name": "Binoculars"
  		},
  		{
  			"id": "18900580",
  			"id_hs92": "900580",
  			"name": "Monoculars, telescopes, etc"
  		},
  		{
  			"id": "18900590",
  			"id_hs92": "900590",
  			"name": "Parts and accessories for binoculars, telescopes, etc"
  		},
  		{
  			"id": "189006",
  			"id_hs92": "9006",
  			"name": "Cameras"
  		},
  		{
  			"id": "18900610",
  			"id_hs92": "900610",
  			"name": "Cameras for preparing printing plates or cylinders"
  		},
  		{
  			"id": "18900620",
  			"id_hs92": "900620",
  			"name": "Cameras for recording microfilm etc"
  		},
  		{
  			"id": "18900630",
  			"id_hs92": "900630",
  			"name": "Cameras for special use, underwater,aerial, etc"
  		},
  		{
  			"id": "18900640",
  			"id_hs92": "900640",
  			"name": "Instant print cameras"
  		},
  		{
  			"id": "18900651",
  			"id_hs92": "900651",
  			"name": "Cameras, single lens reflex, for roll film <= 35 mm"
  		},
  		{
  			"id": "18900652",
  			"id_hs92": "900652",
  			"name": "Cameras for roll film of a width <35 mm"
  		},
  		{
  			"id": "18900653",
  			"id_hs92": "900653",
  			"name": "Cameras for 35 mm roll film except single lens reflex"
  		},
  		{
  			"id": "18900659",
  			"id_hs92": "900659",
  			"name": "Photographic, other than cinematographic cameras nes"
  		},
  		{
  			"id": "18900661",
  			"id_hs92": "900661",
  			"name": "Photographic discharge lamp flashlight apparatus"
  		},
  		{
  			"id": "18900662",
  			"id_hs92": "900662",
  			"name": "Flashbulbs, flashcubes and the like"
  		},
  		{
  			"id": "18900669",
  			"id_hs92": "900669",
  			"name": "Photographic flashlight apparatus, nes"
  		},
  		{
  			"id": "18900691",
  			"id_hs92": "900691",
  			"name": "Parts and accessories for photographic cameras"
  		},
  		{
  			"id": "18900699",
  			"id_hs92": "900699",
  			"name": "Parts and accessories for flashlights and flashbulbs"
  		},
  		{
  			"id": "189007",
  			"id_hs92": "9007",
  			"name": "Video Cameras"
  		},
  		{
  			"id": "18900711",
  			"id_hs92": "900711",
  			"name": "Cinematographic cameras for film <16mm wide"
  		},
  		{
  			"id": "18900719",
  			"id_hs92": "900719",
  			"name": "Cinematographic cameras for film >16mm wide"
  		},
  		{
  			"id": "18900721",
  			"id_hs92": "900721",
  			"name": "Cinematographic projectors for film of <16 mm width"
  		},
  		{
  			"id": "18900729",
  			"id_hs92": "900729",
  			"name": "Cinematographic projectors for film of >16 mm width"
  		},
  		{
  			"id": "18900791",
  			"id_hs92": "900791",
  			"name": "Parts and accessories for cinematographic cameras"
  		},
  		{
  			"id": "18900792",
  			"id_hs92": "900792",
  			"name": "Parts and accessories for cinematographic projectors"
  		},
  		{
  			"id": "189008",
  			"id_hs92": "9008",
  			"name": "Image Projectors"
  		},
  		{
  			"id": "18900810",
  			"id_hs92": "900810",
  			"name": "Slide projectors"
  		},
  		{
  			"id": "18900820",
  			"id_hs92": "900820",
  			"name": "Microfilm, microfiche or other microform readers"
  		},
  		{
  			"id": "18900830",
  			"id_hs92": "900830",
  			"name": "Image projectors, except slide/microform"
  		},
  		{
  			"id": "18900840",
  			"id_hs92": "900840",
  			"name": "Photographic enlargers and reducers, other than cine"
  		},
  		{
  			"id": "18900890",
  			"id_hs92": "900890",
  			"name": "Parts and accessories of image projectors, non-cine"
  		},
  		{
  			"id": "189009",
  			"id_hs92": "9009",
  			"name": "Photocopiers"
  		},
  		{
  			"id": "18900911",
  			"id_hs92": "900911",
  			"name": "Electrostatic photo-copyers, direct process"
  		},
  		{
  			"id": "18900912",
  			"id_hs92": "900912",
  			"name": "Electrostatic photo-copyers, indirect process"
  		},
  		{
  			"id": "18900921",
  			"id_hs92": "900921",
  			"name": "Photo-copying equipment with an optical system, nes"
  		},
  		{
  			"id": "18900922",
  			"id_hs92": "900922",
  			"name": "Contact type photo-copying apparatus,nes"
  		},
  		{
  			"id": "18900930",
  			"id_hs92": "900930",
  			"name": "Thermo-copying apparatus"
  		},
  		{
  			"id": "18900990",
  			"id_hs92": "900990",
  			"name": "Parts and accessories for photo-copying apparatus"
  		},
  		{
  			"id": "189010",
  			"id_hs92": "9010",
  			"name": "Photo Lab Equipment"
  		},
  		{
  			"id": "18901010",
  			"id_hs92": "901010",
  			"name": "Equipment for automatic development of photo film"
  		},
  		{
  			"id": "18901020",
  			"id_hs92": "901020",
  			"name": "Equipment for photographic laboratories nes"
  		},
  		{
  			"id": "18901030",
  			"id_hs92": "901030",
  			"name": "Projection screens"
  		},
  		{
  			"id": "18901090",
  			"id_hs92": "901090",
  			"name": "Parts and accessories for photo laboratory equipment"
  		},
  		{
  			"id": "189011",
  			"id_hs92": "9011",
  			"name": "Microscopes"
  		},
  		{
  			"id": "18901110",
  			"id_hs92": "901110",
  			"name": "Stereoscopic microscopes"
  		},
  		{
  			"id": "18901120",
  			"id_hs92": "901120",
  			"name": "Microscopes, for photomicrography"
  		},
  		{
  			"id": "18901180",
  			"id_hs92": "901180",
  			"name": "Microscopes, optical, nes"
  		},
  		{
  			"id": "18901190",
  			"id_hs92": "901190",
  			"name": "Parts and accessories for optical microscopes"
  		},
  		{
  			"id": "189012",
  			"id_hs92": "9012",
  			"name": "Non-optical Microscopes"
  		},
  		{
  			"id": "18901210",
  			"id_hs92": "901210",
  			"name": "Microscopes except optical, diffraction apparatus"
  		},
  		{
  			"id": "18901290",
  			"id_hs92": "901290",
  			"name": "Parts and accessories for non-optical microscopes, et"
  		},
  		{
  			"id": "189013",
  			"id_hs92": "9013",
  			"name": "LCDs"
  		},
  		{
  			"id": "18901310",
  			"id_hs92": "901310",
  			"name": "Telescopes for arms/other equipment, periscopes"
  		},
  		{
  			"id": "18901320",
  			"id_hs92": "901320",
  			"name": "Lasers, other than laser diodes"
  		},
  		{
  			"id": "18901380",
  			"id_hs92": "901380",
  			"name": "Optical devices, appliances and instruments, nes"
  		},
  		{
  			"id": "18901390",
  			"id_hs92": "901390",
  			"name": "Parts and accessories of optical appliances nes"
  		},
  		{
  			"id": "189014",
  			"id_hs92": "9014",
  			"name": "Compasses"
  		},
  		{
  			"id": "18901410",
  			"id_hs92": "901410",
  			"name": "Direction finding compasses"
  		},
  		{
  			"id": "18901420",
  			"id_hs92": "901420",
  			"name": "Instruments nes for aeronautical/space navigation"
  		},
  		{
  			"id": "18901480",
  			"id_hs92": "901480",
  			"name": "Navigational instruments and appliances nes"
  		},
  		{
  			"id": "18901490",
  			"id_hs92": "901490",
  			"name": "Parts and accessories for navigational instruments"
  		},
  		{
  			"id": "189015",
  			"id_hs92": "9015",
  			"name": "Surveying Equipment"
  		},
  		{
  			"id": "18901510",
  			"id_hs92": "901510",
  			"name": "Rangefinders"
  		},
  		{
  			"id": "18901520",
  			"id_hs92": "901520",
  			"name": "Theodolites and tacheometers"
  		},
  		{
  			"id": "18901530",
  			"id_hs92": "901530",
  			"name": "Surveying levels"
  		},
  		{
  			"id": "18901540",
  			"id_hs92": "901540",
  			"name": "Photogrammetrical surveying instruments, appliances"
  		},
  		{
  			"id": "18901580",
  			"id_hs92": "901580",
  			"name": "Surveying, etc instruments nes"
  		},
  		{
  			"id": "18901590",
  			"id_hs92": "901590",
  			"name": "Parts and accessories for surveying etc instruments"
  		},
  		{
  			"id": "189016",
  			"id_hs92": "9016",
  			"name": "Balances"
  		},
  		{
  			"id": "18901600",
  			"id_hs92": "901600",
  			"name": "Balances of a sensitivity of 50 milligram or better"
  		},
  		{
  			"id": "189017",
  			"id_hs92": "9017",
  			"name": "Drafting Tools"
  		},
  		{
  			"id": "18901710",
  			"id_hs92": "901710",
  			"name": "Drafting tables and machines"
  		},
  		{
  			"id": "18901720",
  			"id_hs92": "901720",
  			"name": "Drawing, marking-out, instruments nes, slide rules"
  		},
  		{
  			"id": "18901730",
  			"id_hs92": "901730",
  			"name": "Micrometers, callipers and gauges"
  		},
  		{
  			"id": "18901780",
  			"id_hs92": "901780",
  			"name": "Instruments for measuring length, hand use, nes"
  		},
  		{
  			"id": "18901790",
  			"id_hs92": "901790",
  			"name": "Parts and accessories for drawing, etc instruments"
  		},
  		{
  			"id": "189018",
  			"id_hs92": "9018",
  			"name": "Medical Instruments"
  		},
  		{
  			"id": "18901811",
  			"id_hs92": "901811",
  			"name": "Electro-cardiographs"
  		},
  		{
  			"id": "18901819",
  			"id_hs92": "901819",
  			"name": "Electro-diagnostic apparatus, nes"
  		},
  		{
  			"id": "18901820",
  			"id_hs92": "901820",
  			"name": "Ultra-violet or infra-red ray apparatus"
  		},
  		{
  			"id": "18901831",
  			"id_hs92": "901831",
  			"name": "Syringes, with or without needles"
  		},
  		{
  			"id": "18901832",
  			"id_hs92": "901832",
  			"name": "Tubular metal needles and needles for sutures"
  		},
  		{
  			"id": "18901839",
  			"id_hs92": "901839",
  			"name": "Needles, catheters, cannulae etc, (medical)"
  		},
  		{
  			"id": "18901841",
  			"id_hs92": "901841",
  			"name": "Dental drill engines"
  		},
  		{
  			"id": "18901849",
  			"id_hs92": "901849",
  			"name": "Instruments and appliances, used in dentistry"
  		},
  		{
  			"id": "18901850",
  			"id_hs92": "901850",
  			"name": "Ophthalmic instruments and appliances"
  		},
  		{
  			"id": "18901890",
  			"id_hs92": "901890",
  			"name": "Instruments, appliances for medical, etc science, nes"
  		},
  		{
  			"id": "189019",
  			"id_hs92": "9019",
  			"name": "Therapeutic Appliances"
  		},
  		{
  			"id": "18901910",
  			"id_hs92": "901910",
  			"name": "Massage and psychological aptitude-test apparatus"
  		},
  		{
  			"id": "18901920",
  			"id_hs92": "901920",
  			"name": "Therapeutic respiration apparatus"
  		},
  		{
  			"id": "189020",
  			"id_hs92": "9020",
  			"name": "Breathing Appliances"
  		},
  		{
  			"id": "18902000",
  			"id_hs92": "902000",
  			"name": "Breathing appliances and gas masks"
  		},
  		{
  			"id": "189021",
  			"id_hs92": "9021",
  			"name": "Orthopedic Appliances"
  		},
  		{
  			"id": "18902111",
  			"id_hs92": "902111",
  			"name": "Artificial joints"
  		},
  		{
  			"id": "18902119",
  			"id_hs92": "902119",
  			"name": "Orthopaedic/fracture appliances, nes"
  		},
  		{
  			"id": "18902121",
  			"id_hs92": "902121",
  			"name": "Artificial teeth"
  		},
  		{
  			"id": "18902129",
  			"id_hs92": "902129",
  			"name": "Dental fittings, nes"
  		},
  		{
  			"id": "18902130",
  			"id_hs92": "902130",
  			"name": "Artificial body parts, aids and appliances, etc"
  		},
  		{
  			"id": "18902140",
  			"id_hs92": "902140",
  			"name": "Hearing aids, except parts and accessories"
  		},
  		{
  			"id": "18902150",
  			"id_hs92": "902150",
  			"name": "Pacemakers for stimulating heart muscles"
  		},
  		{
  			"id": "18902190",
  			"id_hs92": "902190",
  			"name": "Orthopaedic appliances, nes"
  		},
  		{
  			"id": "189022",
  			"id_hs92": "9022",
  			"name": "X-Ray Equipment"
  		},
  		{
  			"id": "18902211",
  			"id_hs92": "902211",
  			"name": "Medical X-ray apparatus"
  		},
  		{
  			"id": "18902219",
  			"id_hs92": "902219",
  			"name": "Non-medical X-ray equipment"
  		},
  		{
  			"id": "18902221",
  			"id_hs92": "902221",
  			"name": "Medical apparatus using alpha, beta or gamma radiatio"
  		},
  		{
  			"id": "18902229",
  			"id_hs92": "902229",
  			"name": "Non-medical apparatus using alpha/beta/gamma radiatio"
  		},
  		{
  			"id": "18902230",
  			"id_hs92": "902230",
  			"name": "X-ray tubes"
  		},
  		{
  			"id": "18902290",
  			"id_hs92": "902290",
  			"name": "Parts and accessories for radiation apparatus"
  		},
  		{
  			"id": "189023",
  			"id_hs92": "9023",
  			"name": "Instructional Models"
  		},
  		{
  			"id": "18902300",
  			"id_hs92": "902300",
  			"name": "Instruments, apparatus and models, for demonstration"
  		},
  		{
  			"id": "189024",
  			"id_hs92": "9024",
  			"name": "Tensile Testing Machines"
  		},
  		{
  			"id": "18902410",
  			"id_hs92": "902410",
  			"name": "Machines for testing mechanical properties of metals"
  		},
  		{
  			"id": "18902480",
  			"id_hs92": "902480",
  			"name": "Machines for testing mechanical properties nes"
  		},
  		{
  			"id": "18902490",
  			"id_hs92": "902490",
  			"name": "Parts and accessories of material testing equipment"
  		},
  		{
  			"id": "189025",
  			"id_hs92": "9025",
  			"name": "Hydrometers"
  		},
  		{
  			"id": "18902511",
  			"id_hs92": "902511",
  			"name": "Thermometers, liquid-filled"
  		},
  		{
  			"id": "18902519",
  			"id_hs92": "902519",
  			"name": "Thermometers, except liquid filled"
  		},
  		{
  			"id": "18902520",
  			"id_hs92": "902520",
  			"name": "Barometers"
  		},
  		{
  			"id": "18902580",
  			"id_hs92": "902580",
  			"name": "Hydrometer, pyrometer, hygrometer, alone or combined"
  		},
  		{
  			"id": "18902590",
  			"id_hs92": "902590",
  			"name": "Parts and accessories for thermometers, etc"
  		},
  		{
  			"id": "189026",
  			"id_hs92": "9026",
  			"name": "Gas and Liquid Flow Measuring Instruments"
  		},
  		{
  			"id": "18902610",
  			"id_hs92": "902610",
  			"name": "Equipment to measure or check liquid flow or level"
  		},
  		{
  			"id": "18902620",
  			"id_hs92": "902620",
  			"name": "Equipment to measure or check pressure"
  		},
  		{
  			"id": "18902680",
  			"id_hs92": "902680",
  			"name": "Equipment to measure, check gas/liquid properties nes"
  		},
  		{
  			"id": "18902690",
  			"id_hs92": "902690",
  			"name": "Parts of equipment to measure or check fluid variable"
  		},
  		{
  			"id": "189027",
  			"id_hs92": "9027",
  			"name": "Chemical Analysis Instruments"
  		},
  		{
  			"id": "18902710",
  			"id_hs92": "902710",
  			"name": "Gas/smoke analysis apparatus"
  		},
  		{
  			"id": "18902720",
  			"id_hs92": "902720",
  			"name": "Chromatographs, electrophoresis instruments"
  		},
  		{
  			"id": "18902730",
  			"id_hs92": "902730",
  			"name": "Spectrometers, spectrophotometers, etc using light"
  		},
  		{
  			"id": "18902740",
  			"id_hs92": "902740",
  			"name": "Exposure meters"
  		},
  		{
  			"id": "18902750",
  			"id_hs92": "902750",
  			"name": "Instruments nes using optical radiations"
  		},
  		{
  			"id": "18902780",
  			"id_hs92": "902780",
  			"name": "Equipment for physical or chemical analysis, nes"
  		},
  		{
  			"id": "18902790",
  			"id_hs92": "902790",
  			"name": "Microtomes, parts of scientific analysis equipment"
  		},
  		{
  			"id": "189028",
  			"id_hs92": "9028",
  			"name": "Utility Meters"
  		},
  		{
  			"id": "18902810",
  			"id_hs92": "902810",
  			"name": "Gas supply/production/calibration meters"
  		},
  		{
  			"id": "18902820",
  			"id_hs92": "902820",
  			"name": "Liquid supply, production and calibrating meters"
  		},
  		{
  			"id": "18902830",
  			"id_hs92": "902830",
  			"name": "Electricity supply, production and calibrating meters"
  		},
  		{
  			"id": "18902890",
  			"id_hs92": "902890",
  			"name": "Parts, accessories for gas, liquid, electricity meter"
  		},
  		{
  			"id": "189029",
  			"id_hs92": "9029",
  			"name": "Revolution Counters"
  		},
  		{
  			"id": "18902910",
  			"id_hs92": "902910",
  			"name": "Revolution counters/taximeters/mileometers/pedometers"
  		},
  		{
  			"id": "18902920",
  			"id_hs92": "902920",
  			"name": "Speed indicators, tachometers, stroboscopes"
  		},
  		{
  			"id": "18902990",
  			"id_hs92": "902990",
  			"name": "Parts and accessories of revolution counters, etc"
  		},
  		{
  			"id": "189030",
  			"id_hs92": "9030",
  			"name": "Oscilloscopes"
  		},
  		{
  			"id": "18903010",
  			"id_hs92": "903010",
  			"name": "Instruments to measure or detect ionising radiations"
  		},
  		{
  			"id": "18903020",
  			"id_hs92": "903020",
  			"name": "Cathode-ray oscilloscopes, oscillographs"
  		},
  		{
  			"id": "18903031",
  			"id_hs92": "903031",
  			"name": "Electrical multimeters"
  		},
  		{
  			"id": "18903039",
  			"id_hs92": "903039",
  			"name": "Ammeters, voltmeters, ohm meters, etc, non-recording"
  		},
  		{
  			"id": "18903040",
  			"id_hs92": "903040",
  			"name": "Gain, /distortion and crosstalk meters, etc"
  		},
  		{
  			"id": "18903081",
  			"id_hs92": "903081",
  			"name": "Electrical measurement recording instruments"
  		},
  		{
  			"id": "18903089",
  			"id_hs92": "903089",
  			"name": "Electrical measurement instruments nes"
  		},
  		{
  			"id": "18903090",
  			"id_hs92": "903090",
  			"name": "Parts & accessories, electrical measuring instruments"
  		},
  		{
  			"id": "189031",
  			"id_hs92": "9031",
  			"name": "Other Measuring Instruments"
  		},
  		{
  			"id": "18903110",
  			"id_hs92": "903110",
  			"name": "Machines for balancing mechanical parts, nes"
  		},
  		{
  			"id": "18903120",
  			"id_hs92": "903120",
  			"name": "Test benches for measuring or checking equipment"
  		},
  		{
  			"id": "18903130",
  			"id_hs92": "903130",
  			"name": "Profile projectors, nes"
  		},
  		{
  			"id": "18903140",
  			"id_hs92": "903140",
  			"name": "Optical instruments and appliances, nes"
  		},
  		{
  			"id": "18903180",
  			"id_hs92": "903180",
  			"name": "Measuring or checking equipment, nes"
  		},
  		{
  			"id": "18903190",
  			"id_hs92": "903190",
  			"name": "Parts and access for measuring, checking equipment ne"
  		},
  		{
  			"id": "189032",
  			"id_hs92": "9032",
  			"name": "Thermostats"
  		},
  		{
  			"id": "18903210",
  			"id_hs92": "903210",
  			"name": "Thermostats"
  		},
  		{
  			"id": "18903220",
  			"id_hs92": "903220",
  			"name": "Manostats"
  		},
  		{
  			"id": "18903281",
  			"id_hs92": "903281",
  			"name": "Hydraulic and pneumatic automatic controls"
  		},
  		{
  			"id": "18903289",
  			"id_hs92": "903289",
  			"name": "Automatic regulating/controlling equipment nes"
  		},
  		{
  			"id": "18903290",
  			"id_hs92": "903290",
  			"name": "Parts and accessories for automatic controls"
  		},
  		{
  			"id": "189033",
  			"id_hs92": "9033",
  			"name": "Opto-Electric Instrument Parts"
  		},
  		{
  			"id": "18903300",
  			"id_hs92": "903300",
  			"name": "Parts/accessories nes for optical/electric instrument"
  		},
  		{
  			"id": "189101",
  			"id_hs92": "9101",
  			"name": "Precious Metal Watches"
  		},
  		{
  			"id": "18910111",
  			"id_hs92": "910111",
  			"name": "Wrist-watch, precious metal, battery, with hands"
  		},
  		{
  			"id": "18910112",
  			"id_hs92": "910112",
  			"name": "Wrist-watch, precious metal, battery, opto/electric"
  		},
  		{
  			"id": "18910119",
  			"id_hs92": "910119",
  			"name": "Wrist-watch, precious metal, battery, other"
  		},
  		{
  			"id": "18910121",
  			"id_hs92": "910121",
  			"name": "Wrist-watch, precious metal, automatic wound"
  		},
  		{
  			"id": "18910129",
  			"id_hs92": "910129",
  			"name": "Wrist-watch, precious metal, hand wound"
  		},
  		{
  			"id": "18910191",
  			"id_hs92": "910191",
  			"name": "Pocket-watch, precious-metal case, battery"
  		},
  		{
  			"id": "18910199",
  			"id_hs92": "910199",
  			"name": "Pocket-watch, precious-metal case, non-battery"
  		},
  		{
  			"id": "189102",
  			"id_hs92": "9102",
  			"name": "Base Metal Watches"
  		},
  		{
  			"id": "18910211",
  			"id_hs92": "910211",
  			"name": "Wrist-watch, base-metal case, battery, with hands"
  		},
  		{
  			"id": "18910212",
  			"id_hs92": "910212",
  			"name": "Wrist-watch, base-metal case, battery, opto/electric"
  		},
  		{
  			"id": "18910219",
  			"id_hs92": "910219",
  			"name": "Wrist-watch, base-metal case, battery, other"
  		},
  		{
  			"id": "18910221",
  			"id_hs92": "910221",
  			"name": "Wrist-watch, base-metal case, automatic wound"
  		},
  		{
  			"id": "18910229",
  			"id_hs92": "910229",
  			"name": "Wrist-watch, base-metal case, hand wound"
  		},
  		{
  			"id": "18910291",
  			"id_hs92": "910291",
  			"name": "Pocket-watch, base-metal case, battery"
  		},
  		{
  			"id": "18910299",
  			"id_hs92": "910299",
  			"name": "Pocket-watch, base-metal case, non-battery"
  		},
  		{
  			"id": "189103",
  			"id_hs92": "9103",
  			"name": "Clocks with Watch Movements"
  		},
  		{
  			"id": "18910310",
  			"id_hs92": "910310",
  			"name": "Clocks with watch movements, battery (except vehicle)"
  		},
  		{
  			"id": "18910390",
  			"id_hs92": "910390",
  			"name": "Clocks with watch movements, nes (except vehicle)"
  		},
  		{
  			"id": "189104",
  			"id_hs92": "9104",
  			"name": "Dashboard Clocks"
  		},
  		{
  			"id": "18910400",
  			"id_hs92": "910400",
  			"name": "Instrument panel clocks etc for vehicles/aircraft etc"
  		},
  		{
  			"id": "189105",
  			"id_hs92": "9105",
  			"name": "Other Clocks"
  		},
  		{
  			"id": "18910511",
  			"id_hs92": "910511",
  			"name": "Alarm clocks, battery or mains powered"
  		},
  		{
  			"id": "18910519",
  			"id_hs92": "910519",
  			"name": "Alarm clocks, non-electric"
  		},
  		{
  			"id": "18910521",
  			"id_hs92": "910521",
  			"name": "Wall clocks, battery or mains powered"
  		},
  		{
  			"id": "18910529",
  			"id_hs92": "910529",
  			"name": "Wall clocks, non-electric"
  		},
  		{
  			"id": "18910591",
  			"id_hs92": "910591",
  			"name": "Clocks, nes, battery or mains powered"
  		},
  		{
  			"id": "18910599",
  			"id_hs92": "910599",
  			"name": "Clocks, nes, non-electric"
  		},
  		{
  			"id": "189106",
  			"id_hs92": "9106",
  			"name": "Time Recording Instruments"
  		},
  		{
  			"id": "18910610",
  			"id_hs92": "910610",
  			"name": "Time-registers, time-recorders"
  		},
  		{
  			"id": "18910620",
  			"id_hs92": "910620",
  			"name": "Parking meters"
  		},
  		{
  			"id": "18910690",
  			"id_hs92": "910690",
  			"name": "Time of day recording apparatus, nes"
  		},
  		{
  			"id": "189107",
  			"id_hs92": "9107",
  			"name": "Time Switches"
  		},
  		{
  			"id": "18910700",
  			"id_hs92": "910700",
  			"name": "Time switches"
  		},
  		{
  			"id": "189108",
  			"id_hs92": "9108",
  			"name": "Watch Movements"
  		},
  		{
  			"id": "18910811",
  			"id_hs92": "910811",
  			"name": "Assembled battery watch movement, mechanical display"
  		},
  		{
  			"id": "18910812",
  			"id_hs92": "910812",
  			"name": "Assembled battery watch movement,opto-electric displa"
  		},
  		{
  			"id": "18910819",
  			"id_hs92": "910819",
  			"name": "Assembled battery watch movement, nes"
  		},
  		{
  			"id": "18910820",
  			"id_hs92": "910820",
  			"name": "Watch movements, complete and assembled, auto-winding"
  		},
  		{
  			"id": "18910891",
  			"id_hs92": "910891",
  			"name": "Watch movements, complete and assembled, nes, <33.8mm"
  		},
  		{
  			"id": "18910899",
  			"id_hs92": "910899",
  			"name": "Watch movements, complete and assembled, nes"
  		},
  		{
  			"id": "189109",
  			"id_hs92": "9109",
  			"name": "Clock Movements"
  		},
  		{
  			"id": "18910911",
  			"id_hs92": "910911",
  			"name": "Clock movements, complete and assembled, battery/alar"
  		},
  		{
  			"id": "18910919",
  			"id_hs92": "910919",
  			"name": "Clock movements, complete and assembled, battery nes"
  		},
  		{
  			"id": "18910990",
  			"id_hs92": "910990",
  			"name": "Clock movements, complete & assembled, non-battery ne"
  		},
  		{
  			"id": "189110",
  			"id_hs92": "9110",
  			"name": "Incomplete Movement Sets"
  		},
  		{
  			"id": "18911011",
  			"id_hs92": "911011",
  			"name": "Complete movements of watches, un/partly assembled"
  		},
  		{
  			"id": "18911012",
  			"id_hs92": "911012",
  			"name": "Incomplete movements of watches, assembled"
  		},
  		{
  			"id": "18911019",
  			"id_hs92": "911019",
  			"name": "Rough movements of watches"
  		},
  		{
  			"id": "18911090",
  			"id_hs92": "911090",
  			"name": "Clock movements, un/partly assembled, rough clocks"
  		},
  		{
  			"id": "189111",
  			"id_hs92": "9111",
  			"name": "Watch Cases and Parts"
  		},
  		{
  			"id": "18911110",
  			"id_hs92": "911110",
  			"name": "Watch cases of, or clad with, precious metal"
  		},
  		{
  			"id": "18911120",
  			"id_hs92": "911120",
  			"name": "Watch cases of base metal including gold/silver-plate"
  		},
  		{
  			"id": "18911180",
  			"id_hs92": "911180",
  			"name": "Watch cases, nes"
  		},
  		{
  			"id": "18911190",
  			"id_hs92": "911190",
  			"name": "Parts of watch cases"
  		},
  		{
  			"id": "189112",
  			"id_hs92": "9112",
  			"name": "Clock Cases and Parts"
  		},
  		{
  			"id": "18911210",
  			"id_hs92": "911210",
  			"name": "Clock, etc cases, of metal"
  		},
  		{
  			"id": "18911280",
  			"id_hs92": "911280",
  			"name": "Clock, etc cases, except metal"
  		},
  		{
  			"id": "18911290",
  			"id_hs92": "911290",
  			"name": "Parts of clock/etc cases"
  		},
  		{
  			"id": "189113",
  			"id_hs92": "9113",
  			"name": "Watch Straps"
  		},
  		{
  			"id": "18911310",
  			"id_hs92": "911310",
  			"name": "Watch straps etc & parts, of/clad with precious metal"
  		},
  		{
  			"id": "18911320",
  			"id_hs92": "911320",
  			"name": "Watch straps etc and parts, of base metal"
  		},
  		{
  			"id": "18911390",
  			"id_hs92": "911390",
  			"name": "Watch straps etc and parts, of leather/plastic/etc"
  		},
  		{
  			"id": "189114",
  			"id_hs92": "9114",
  			"name": "Other Clocks and Watches"
  		},
  		{
  			"id": "18911410",
  			"id_hs92": "911410",
  			"name": "Clock or watch springs, including hair-springs"
  		},
  		{
  			"id": "18911420",
  			"id_hs92": "911420",
  			"name": "Clock or watch jewels"
  		},
  		{
  			"id": "18911430",
  			"id_hs92": "911430",
  			"name": "Clock or watch dials"
  		},
  		{
  			"id": "18911440",
  			"id_hs92": "911440",
  			"name": "Clock or watch plates and bridges"
  		},
  		{
  			"id": "18911490",
  			"id_hs92": "911490",
  			"name": "Clock or watch parts, nes"
  		},
  		{
  			"id": "189201",
  			"id_hs92": "9201",
  			"name": "Pianos"
  		},
  		{
  			"id": "18920110",
  			"id_hs92": "920110",
  			"name": "Upright pianos, including auto-players"
  		},
  		{
  			"id": "18920120",
  			"id_hs92": "920120",
  			"name": "Grand pianos, including auto-players"
  		},
  		{
  			"id": "18920190",
  			"id_hs92": "920190",
  			"name": "Harpsichords, keyboard stringed instruments nes"
  		},
  		{
  			"id": "189202",
  			"id_hs92": "9202",
  			"name": "String Instruments"
  		},
  		{
  			"id": "18920210",
  			"id_hs92": "920210",
  			"name": "String musical instruments played with a bow"
  		},
  		{
  			"id": "18920290",
  			"id_hs92": "920290",
  			"name": "String musical instruments nes"
  		},
  		{
  			"id": "189203",
  			"id_hs92": "9203",
  			"name": "Pipe Organs"
  		},
  		{
  			"id": "18920300",
  			"id_hs92": "920300",
  			"name": "Harmoniums, pipe organs, etc"
  		},
  		{
  			"id": "189204",
  			"id_hs92": "9204",
  			"name": "Accordions"
  		},
  		{
  			"id": "18920410",
  			"id_hs92": "920410",
  			"name": "Accordions and similar instruments"
  		},
  		{
  			"id": "18920420",
  			"id_hs92": "920420",
  			"name": "Mouth organs (harmonicas)"
  		},
  		{
  			"id": "189205",
  			"id_hs92": "9205",
  			"name": "Wind Instruments"
  		},
  		{
  			"id": "18920510",
  			"id_hs92": "920510",
  			"name": "Brass-wind instruments"
  		},
  		{
  			"id": "18920590",
  			"id_hs92": "920590",
  			"name": "Wind musical instruments except brass"
  		},
  		{
  			"id": "189206",
  			"id_hs92": "9206",
  			"name": "Percussion"
  		},
  		{
  			"id": "18920600",
  			"id_hs92": "920600",
  			"name": "Percussion musical instruments"
  		},
  		{
  			"id": "189207",
  			"id_hs92": "9207",
  			"name": "Electric Musical Instruments"
  		},
  		{
  			"id": "18920710",
  			"id_hs92": "920710",
  			"name": "Keyboard instruments electrical/requiring amplifier"
  		},
  		{
  			"id": "18920790",
  			"id_hs92": "920790",
  			"name": "Musical instruments nes, electric/requiring amplifier"
  		},
  		{
  			"id": "189208",
  			"id_hs92": "9208",
  			"name": "Other Musical Instruments"
  		},
  		{
  			"id": "18920810",
  			"id_hs92": "920810",
  			"name": "Musical boxes"
  		},
  		{
  			"id": "18920890",
  			"id_hs92": "920890",
  			"name": "Musical instruments etc nes"
  		},
  		{
  			"id": "189209",
  			"id_hs92": "9209",
  			"name": "Musical Instrument Parts"
  		},
  		{
  			"id": "18920910",
  			"id_hs92": "920910",
  			"name": "Metronomes, tuning forks and pitch pipes"
  		},
  		{
  			"id": "18920920",
  			"id_hs92": "920920",
  			"name": "Mechanisms for musical boxes"
  		},
  		{
  			"id": "18920930",
  			"id_hs92": "920930",
  			"name": "Strings, musical instrument"
  		},
  		{
  			"id": "18920991",
  			"id_hs92": "920991",
  			"name": "Parts and accessories for pianos"
  		},
  		{
  			"id": "18920992",
  			"id_hs92": "920992",
  			"name": "Parts and accessories for string musical instruments"
  		},
  		{
  			"id": "18920993",
  			"id_hs92": "920993",
  			"name": "Parts and accessories for pipe organs, harmoniums, et"
  		},
  		{
  			"id": "18920994",
  			"id_hs92": "920994",
  			"name": "Parts/accessories for electric amplified instruments"
  		},
  		{
  			"id": "18920999",
  			"id_hs92": "920999",
  			"name": "Parts and accessories for the musical instruments nes"
  		},
  		{
  			"id": "19",
  			"id_hs92": null,
  			"name": "Weapons"
  		},
  		{
  			"id": "199301",
  			"id_hs92": "9301",
  			"name": "Military Weapons"
  		},
  		{
  			"id": "19930100",
  			"id_hs92": "930100",
  			"name": "Military weapons, other than hand guns, swords, etc"
  		},
  		{
  			"id": "199302",
  			"id_hs92": "9302",
  			"name": "Handguns"
  		},
  		{
  			"id": "19930200",
  			"id_hs92": "930200",
  			"name": "Revolvers and pistols"
  		},
  		{
  			"id": "199303",
  			"id_hs92": "9303",
  			"name": "Other Firearms"
  		},
  		{
  			"id": "19930310",
  			"id_hs92": "930310",
  			"name": "Muzzle-loading firearms"
  		},
  		{
  			"id": "19930320",
  			"id_hs92": "930320",
  			"name": "Shotguns, shotgun-rifles for sport, hunting or target"
  		},
  		{
  			"id": "19930330",
  			"id_hs92": "930330",
  			"name": "Rifles, sporting, hunting or target-shooting, nes"
  		},
  		{
  			"id": "19930390",
  			"id_hs92": "930390",
  			"name": "Signal pistols, etc, humane killers, etc"
  		},
  		{
  			"id": "199304",
  			"id_hs92": "9304",
  			"name": "Spring, Air, and Gas Guns"
  		},
  		{
  			"id": "19930400",
  			"id_hs92": "930400",
  			"name": "Arms nes, (spring/air/gas guns, truncheons, etc)"
  		},
  		{
  			"id": "199305",
  			"id_hs92": "9305",
  			"name": "Weapons Parts and Accessories"
  		},
  		{
  			"id": "19930510",
  			"id_hs92": "930510",
  			"name": "Parts and accessories of revolvers or pistols"
  		},
  		{
  			"id": "19930521",
  			"id_hs92": "930521",
  			"name": "Shotgun barrels"
  		},
  		{
  			"id": "19930529",
  			"id_hs92": "930529",
  			"name": "Parts and accessories of shotguns or rifles, nes"
  		},
  		{
  			"id": "19930590",
  			"id_hs92": "930590",
  			"name": "Parts and accessories nes of weapons, nes"
  		},
  		{
  			"id": "199306",
  			"id_hs92": "9306",
  			"name": "Explosive Ammunition"
  		},
  		{
  			"id": "19930610",
  			"id_hs92": "930610",
  			"name": "Cartridges for rivet etc tools, humane killers, etc"
  		},
  		{
  			"id": "19930621",
  			"id_hs92": "930621",
  			"name": "Cartridges, shotgun"
  		},
  		{
  			"id": "19930629",
  			"id_hs92": "930629",
  			"name": "Air gun pellets, parts of shotgun cartridges"
  		},
  		{
  			"id": "19930630",
  			"id_hs92": "930630",
  			"name": "Cartridges nes, parts thereof"
  		},
  		{
  			"id": "19930690",
  			"id_hs92": "930690",
  			"name": "Munitions of war, ammunition/projectiles and parts"
  		},
  		{
  			"id": "199307",
  			"id_hs92": "9307",
  			"name": "Bladed Weapons and Accessories"
  		},
  		{
  			"id": "19930700",
  			"id_hs92": "930700",
  			"name": "Swords, cutlasses, bayonets, lances, scabbards, etc"
  		},
  		{
  			"id": "20",
  			"id_hs92": null,
  			"name": "Miscellaneous"
  		},
  		{
  			"id": "209401",
  			"id_hs92": "9401",
  			"name": "Seats"
  		},
  		{
  			"id": "20940110",
  			"id_hs92": "940110",
  			"name": "Seats, aircraft"
  		},
  		{
  			"id": "20940120",
  			"id_hs92": "940120",
  			"name": "Seats, motor vehicles"
  		},
  		{
  			"id": "20940130",
  			"id_hs92": "940130",
  			"name": "Swivel seats with variable height adjustment"
  		},
  		{
  			"id": "20940140",
  			"id_hs92": "940140",
  			"name": "Seats convertible into beds"
  		},
  		{
  			"id": "20940150",
  			"id_hs92": "940150",
  			"name": "Seats of cane, osier, bamboo or similar materials"
  		},
  		{
  			"id": "20940161",
  			"id_hs92": "940161",
  			"name": "Seats with wooden frames, upholstered nes"
  		},
  		{
  			"id": "20940169",
  			"id_hs92": "940169",
  			"name": "Seats with wooden frames, nes"
  		},
  		{
  			"id": "20940171",
  			"id_hs92": "940171",
  			"name": "Seats with metal frames, upholstered nes"
  		},
  		{
  			"id": "20940179",
  			"id_hs92": "940179",
  			"name": "Seats with metal frames, nes"
  		},
  		{
  			"id": "20940180",
  			"id_hs92": "940180",
  			"name": "Seats nes"
  		},
  		{
  			"id": "20940190",
  			"id_hs92": "940190",
  			"name": "Parts of seats"
  		},
  		{
  			"id": "209402",
  			"id_hs92": "9402",
  			"name": "Medical Furniture"
  		},
  		{
  			"id": "20940210",
  			"id_hs92": "940210",
  			"name": "Dentists, barbers or similar chairs and parts"
  		},
  		{
  			"id": "20940290",
  			"id_hs92": "940290",
  			"name": "Medical, dental, surgical & veterinary furniture, nes"
  		},
  		{
  			"id": "209403",
  			"id_hs92": "9403",
  			"name": "Other Furniture"
  		},
  		{
  			"id": "20940310",
  			"id_hs92": "940310",
  			"name": "Office furniture, metal, nes"
  		},
  		{
  			"id": "20940320",
  			"id_hs92": "940320",
  			"name": "Furniture, metal, nes"
  		},
  		{
  			"id": "20940330",
  			"id_hs92": "940330",
  			"name": "Office furniture, wooden, nes"
  		},
  		{
  			"id": "20940340",
  			"id_hs92": "940340",
  			"name": "Kitchen furniture, wooden, nes"
  		},
  		{
  			"id": "20940350",
  			"id_hs92": "940350",
  			"name": "Bedroom furniture, wooden, nes"
  		},
  		{
  			"id": "20940360",
  			"id_hs92": "940360",
  			"name": "Furniture, wooden, nes"
  		},
  		{
  			"id": "20940370",
  			"id_hs92": "940370",
  			"name": "Furniture, plastic, nes"
  		},
  		{
  			"id": "20940380",
  			"id_hs92": "940380",
  			"name": "Furniture of cane, materials nes"
  		},
  		{
  			"id": "20940390",
  			"id_hs92": "940390",
  			"name": "Furniture parts nes"
  		},
  		{
  			"id": "209404",
  			"id_hs92": "9404",
  			"name": "Mattresses"
  		},
  		{
  			"id": "20940410",
  			"id_hs92": "940410",
  			"name": "Mattress supports"
  		},
  		{
  			"id": "20940421",
  			"id_hs92": "940421",
  			"name": "Mattresses of cellular rubber or plastic"
  		},
  		{
  			"id": "20940429",
  			"id_hs92": "940429",
  			"name": "Mattresses, stuffed, spring interior, etc"
  		},
  		{
  			"id": "20940430",
  			"id_hs92": "940430",
  			"name": "Sleeping bags"
  		},
  		{
  			"id": "20940490",
  			"id_hs92": "940490",
  			"name": "Articles of bedding nes"
  		},
  		{
  			"id": "209405",
  			"id_hs92": "9405",
  			"name": "Light Fixtures"
  		},
  		{
  			"id": "20940510",
  			"id_hs92": "940510",
  			"name": "Chandeliers, other electric ceiling or wall lights"
  		},
  		{
  			"id": "20940520",
  			"id_hs92": "940520",
  			"name": "Electric table, desk, bedside and floor lamps"
  		},
  		{
  			"id": "20940530",
  			"id_hs92": "940530",
  			"name": "Lighting sets of a kind used for Christmas trees"
  		},
  		{
  			"id": "20940540",
  			"id_hs92": "940540",
  			"name": "Electric lamps, lighting fittings, nes"
  		},
  		{
  			"id": "20940550",
  			"id_hs92": "940550",
  			"name": "Non-electrical lamps and lighting fittings"
  		},
  		{
  			"id": "20940560",
  			"id_hs92": "940560",
  			"name": "Illuminated signs, illuminated nameplates etc"
  		},
  		{
  			"id": "20940591",
  			"id_hs92": "940591",
  			"name": "Lamp and lighting fitting parts of glass"
  		},
  		{
  			"id": "20940592",
  			"id_hs92": "940592",
  			"name": "Lamp and lighting fitting parts of plastics"
  		},
  		{
  			"id": "20940599",
  			"id_hs92": "940599",
  			"name": "Lamp and lighting fitting parts except glass/plastic"
  		},
  		{
  			"id": "209406",
  			"id_hs92": "9406",
  			"name": "Prefabricated Buildings"
  		},
  		{
  			"id": "20940600",
  			"id_hs92": "940600",
  			"name": "Prefabricated buildings"
  		},
  		{
  			"id": "209501",
  			"id_hs92": "9501",
  			"name": "Wheeled Toys"
  		},
  		{
  			"id": "20950100",
  			"id_hs92": "950100",
  			"name": "Rideable wheeled toys, dolls carriages"
  		},
  		{
  			"id": "209502",
  			"id_hs92": "9502",
  			"name": "Dolls"
  		},
  		{
  			"id": "20950210",
  			"id_hs92": "950210",
  			"name": "Dolls representing only human beings"
  		},
  		{
  			"id": "20950291",
  			"id_hs92": "950291",
  			"name": "Garments, accessories for dolls representing humans"
  		},
  		{
  			"id": "20950299",
  			"id_hs92": "950299",
  			"name": "Parts nes, for dolls representing only human beings"
  		},
  		{
  			"id": "209503",
  			"id_hs92": "9503",
  			"name": "Models and Stuffed Animals"
  		},
  		{
  			"id": "20950310",
  			"id_hs92": "950310",
  			"name": "Electric trains, train sets, etc"
  		},
  		{
  			"id": "20950320",
  			"id_hs92": "950320",
  			"name": "Reduced-size (scale) models, kits, except trains"
  		},
  		{
  			"id": "20950330",
  			"id_hs92": "950330",
  			"name": "Construction sets and constructional toys, nes"
  		},
  		{
  			"id": "20950341",
  			"id_hs92": "950341",
  			"name": "Stuffed toys - animals or non-human creatures"
  		},
  		{
  			"id": "20950349",
  			"id_hs92": "950349",
  			"name": "Toys nes representing animals/non-humans"
  		},
  		{
  			"id": "20950350",
  			"id_hs92": "950350",
  			"name": "Toy musical instruments, apparatus"
  		},
  		{
  			"id": "20950360",
  			"id_hs92": "950360",
  			"name": "Puzzles"
  		},
  		{
  			"id": "20950370",
  			"id_hs92": "950370",
  			"name": "Toys, retail in sets or outfits"
  		},
  		{
  			"id": "20950380",
  			"id_hs92": "950380",
  			"name": "Toys and models incorporating a motor"
  		},
  		{
  			"id": "20950390",
  			"id_hs92": "950390",
  			"name": "Toys nes"
  		},
  		{
  			"id": "209504",
  			"id_hs92": "9504",
  			"name": "Video and Card Games"
  		},
  		{
  			"id": "20950410",
  			"id_hs92": "950410",
  			"name": "Video games used with a television receiver"
  		},
  		{
  			"id": "20950420",
  			"id_hs92": "950420",
  			"name": "Articles and accessories for billiards"
  		},
  		{
  			"id": "20950430",
  			"id_hs92": "950430",
  			"name": "Games, coin or disc operated"
  		},
  		{
  			"id": "20950440",
  			"id_hs92": "950440",
  			"name": "Playing cards"
  		},
  		{
  			"id": "20950490",
  			"id_hs92": "950490",
  			"name": "Articles for funfair, table and parlour games, nes"
  		},
  		{
  			"id": "209505",
  			"id_hs92": "9505",
  			"name": "Party Decorations"
  		},
  		{
  			"id": "20950510",
  			"id_hs92": "950510",
  			"name": "Articles for Christmas festivities"
  		},
  		{
  			"id": "20950590",
  			"id_hs92": "950590",
  			"name": "Festive,carnival, other entertainment articles, nes"
  		},
  		{
  			"id": "209506",
  			"id_hs92": "9506",
  			"name": "Sports Equipment"
  		},
  		{
  			"id": "20950611",
  			"id_hs92": "950611",
  			"name": "Snow-skis and parts"
  		},
  		{
  			"id": "20950612",
  			"id_hs92": "950612",
  			"name": "Snow-ski fastenings (ski-bindings)"
  		},
  		{
  			"id": "20950619",
  			"id_hs92": "950619",
  			"name": "Snow-ski equipment except skis/bindings"
  		},
  		{
  			"id": "20950621",
  			"id_hs92": "950621",
  			"name": "Sailboards"
  		},
  		{
  			"id": "20950629",
  			"id_hs92": "950629",
  			"name": "Water-skis, surf-boards, other watersport equipment"
  		},
  		{
  			"id": "20950631",
  			"id_hs92": "950631",
  			"name": "Golf clubs, complete"
  		},
  		{
  			"id": "20950632",
  			"id_hs92": "950632",
  			"name": "Golf balls"
  		},
  		{
  			"id": "20950639",
  			"id_hs92": "950639",
  			"name": "Golf equipment except balls and clubs"
  		},
  		{
  			"id": "20950640",
  			"id_hs92": "950640",
  			"name": "Articles, equipment for table-tennis"
  		},
  		{
  			"id": "20950651",
  			"id_hs92": "950651",
  			"name": "Lawn-tennis rackets"
  		},
  		{
  			"id": "20950659",
  			"id_hs92": "950659",
  			"name": "Badminton or similar rackets"
  		},
  		{
  			"id": "20950661",
  			"id_hs92": "950661",
  			"name": "Lawn-tennis balls"
  		},
  		{
  			"id": "20950662",
  			"id_hs92": "950662",
  			"name": "Inflatable balls"
  		},
  		{
  			"id": "20950669",
  			"id_hs92": "950669",
  			"name": "Balls nes"
  		},
  		{
  			"id": "20950670",
  			"id_hs92": "950670",
  			"name": "Ice skates, roller skates, skating boots"
  		},
  		{
  			"id": "20950691",
  			"id_hs92": "950691",
  			"name": "Physical exercise, gymnasium and athletics equipment"
  		},
  		{
  			"id": "20950699",
  			"id_hs92": "950699",
  			"name": "Equipment nes for sports, swimming and paddling pools"
  		},
  		{
  			"id": "209507",
  			"id_hs92": "9507",
  			"name": "Fishing and Hunting Equipment"
  		},
  		{
  			"id": "20950710",
  			"id_hs92": "950710",
  			"name": "Fishing rods"
  		},
  		{
  			"id": "20950720",
  			"id_hs92": "950720",
  			"name": "Fish-hooks, whether or not snelled"
  		},
  		{
  			"id": "20950730",
  			"id_hs92": "950730",
  			"name": "Fishing reels"
  		},
  		{
  			"id": "20950790",
  			"id_hs92": "950790",
  			"name": "Fishing and hunting equipment and requisites nes"
  		},
  		{
  			"id": "209508",
  			"id_hs92": "9508",
  			"name": "Fairground Amusements"
  		},
  		{
  			"id": "20950800",
  			"id_hs92": "950800",
  			"name": "Play, fair-ground equipment, travellng circus, theatr"
  		},
  		{
  			"id": "209601",
  			"id_hs92": "9601",
  			"name": "Worked Ivory and Bone"
  		},
  		{
  			"id": "20960110",
  			"id_hs92": "960110",
  			"name": "Worked ivory, articles of ivory"
  		},
  		{
  			"id": "20960190",
  			"id_hs92": "960190",
  			"name": "Animal carving material, articles, nes"
  		},
  		{
  			"id": "209602",
  			"id_hs92": "9602",
  			"name": "Vegetable and Mineral Carvings"
  		},
  		{
  			"id": "20960200",
  			"id_hs92": "960200",
  			"name": "Worked vegetable, mineral carving material, articles"
  		},
  		{
  			"id": "209603",
  			"id_hs92": "9603",
  			"name": "Brooms"
  		},
  		{
  			"id": "20960310",
  			"id_hs92": "960310",
  			"name": "Brooms/brushes of vegetable material"
  		},
  		{
  			"id": "20960321",
  			"id_hs92": "960321",
  			"name": "Tooth brushes"
  		},
  		{
  			"id": "20960329",
  			"id_hs92": "960329",
  			"name": "Shaving, hair, nail, eyelash and other toilet brushes"
  		},
  		{
  			"id": "20960330",
  			"id_hs92": "960330",
  			"name": "Artists, writing and cosmetics brushes"
  		},
  		{
  			"id": "20960340",
  			"id_hs92": "960340",
  			"name": "Paint/distemper/varnish brushes nes, paint pads etc"
  		},
  		{
  			"id": "20960350",
  			"id_hs92": "960350",
  			"name": "Brushes nes, as parts of machines, appliances etc"
  		},
  		{
  			"id": "20960390",
  			"id_hs92": "960390",
  			"name": "Brushes, parts, nes"
  		},
  		{
  			"id": "209604",
  			"id_hs92": "9604",
  			"name": "Hand Sifters"
  		},
  		{
  			"id": "20960400",
  			"id_hs92": "960400",
  			"name": "Hand sieves and hand riddles"
  		},
  		{
  			"id": "209605",
  			"id_hs92": "9605",
  			"name": "Travel Kits"
  		},
  		{
  			"id": "20960500",
  			"id_hs92": "960500",
  			"name": "Travel sets, toilet, sewing, shoe, clothes cleaning"
  		},
  		{
  			"id": "209606",
  			"id_hs92": "9606",
  			"name": "Buttons"
  		},
  		{
  			"id": "20960610",
  			"id_hs92": "960610",
  			"name": "Press-fasteners, snap-fasteners and press-studs, part"
  		},
  		{
  			"id": "20960621",
  			"id_hs92": "960621",
  			"name": "Buttons of plastics, not covered with textile"
  		},
  		{
  			"id": "20960622",
  			"id_hs92": "960622",
  			"name": "Buttons of base metal, not covered with textile"
  		},
  		{
  			"id": "20960629",
  			"id_hs92": "960629",
  			"name": "Buttons, nes"
  		},
  		{
  			"id": "20960630",
  			"id_hs92": "960630",
  			"name": "Button moulds, button parts, blanks"
  		},
  		{
  			"id": "209607",
  			"id_hs92": "9607",
  			"name": "Zippers"
  		},
  		{
  			"id": "20960711",
  			"id_hs92": "960711",
  			"name": "Slide fasteners with chain scoops of base metal"
  		},
  		{
  			"id": "20960719",
  			"id_hs92": "960719",
  			"name": "Slide fasteners, nes"
  		},
  		{
  			"id": "20960720",
  			"id_hs92": "960720",
  			"name": "Parts of slide fasteners"
  		},
  		{
  			"id": "209608",
  			"id_hs92": "9608",
  			"name": "Pens"
  		},
  		{
  			"id": "20960810",
  			"id_hs92": "960810",
  			"name": "Ball point pens"
  		},
  		{
  			"id": "20960820",
  			"id_hs92": "960820",
  			"name": "Felt tipped, other porous-tipped pens and markers"
  		},
  		{
  			"id": "20960831",
  			"id_hs92": "960831",
  			"name": "Indian ink drawing pens"
  		},
  		{
  			"id": "20960839",
  			"id_hs92": "960839",
  			"name": "Fountain pens, stylograph pens and other pens, nes"
  		},
  		{
  			"id": "20960840",
  			"id_hs92": "960840",
  			"name": "Propelling or sliding pencils"
  		},
  		{
  			"id": "20960850",
  			"id_hs92": "960850",
  			"name": "Sets of articles of mixed types of pens/pencils"
  		},
  		{
  			"id": "20960860",
  			"id_hs92": "960860",
  			"name": "Refills for ball point pens"
  		},
  		{
  			"id": "20960891",
  			"id_hs92": "960891",
  			"name": "Pen nibs, nib points nes"
  		},
  		{
  			"id": "20960899",
  			"id_hs92": "960899",
  			"name": "Duplicating stylos, pen/pencil holders, pen parts"
  		},
  		{
  			"id": "209609",
  			"id_hs92": "9609",
  			"name": "Pencils and Crayons"
  		},
  		{
  			"id": "20960910",
  			"id_hs92": "960910",
  			"name": "Pencils/crayons, with leads in rigid sheath, nes"
  		},
  		{
  			"id": "20960920",
  			"id_hs92": "960920",
  			"name": "Pencil leads, black or coloured"
  		},
  		{
  			"id": "20960990",
  			"id_hs92": "960990",
  			"name": "Pastels, drawing charcoals, chalks"
  		},
  		{
  			"id": "209610",
  			"id_hs92": "9610",
  			"name": "Chalkboards"
  		},
  		{
  			"id": "20961000",
  			"id_hs92": "961000",
  			"name": "Slates/boards with writing or drawing surfaces"
  		},
  		{
  			"id": "209611",
  			"id_hs92": "9611",
  			"name": "Rubber Stamps"
  		},
  		{
  			"id": "20961100",
  			"id_hs92": "961100",
  			"name": "Hand printing, dating and numbering devices, etc"
  		},
  		{
  			"id": "209612",
  			"id_hs92": "9612",
  			"name": "Ink Ribbons"
  		},
  		{
  			"id": "20961210",
  			"id_hs92": "961210",
  			"name": "Typewriter or similar ribbons"
  		},
  		{
  			"id": "20961220",
  			"id_hs92": "961220",
  			"name": "Ink-pads"
  		},
  		{
  			"id": "209613",
  			"id_hs92": "9613",
  			"name": "Lighters"
  		},
  		{
  			"id": "20961310",
  			"id_hs92": "961310",
  			"name": "Pocket lighters, gas-fuelled, non-refillable"
  		},
  		{
  			"id": "20961320",
  			"id_hs92": "961320",
  			"name": "Pocket lighters, gas-fuelled, refillable"
  		},
  		{
  			"id": "20961330",
  			"id_hs92": "961330",
  			"name": "Table lighters"
  		},
  		{
  			"id": "20961380",
  			"id_hs92": "961380",
  			"name": "Lighters, nes"
  		},
  		{
  			"id": "20961390",
  			"id_hs92": "961390",
  			"name": "Parts of lighters, other than flints/wicks"
  		},
  		{
  			"id": "209614",
  			"id_hs92": "9614",
  			"name": "Smoking Pipes"
  		},
  		{
  			"id": "20961410",
  			"id_hs92": "961410",
  			"name": "Roughly shaped blocks of wood or root, for pipes"
  		},
  		{
  			"id": "20961420",
  			"id_hs92": "961420",
  			"name": "Smoking pipes and pipe bowls"
  		},
  		{
  			"id": "20961490",
  			"id_hs92": "961490",
  			"name": "Cigar or cigarette holders and parts, pipe stems"
  		},
  		{
  			"id": "209615",
  			"id_hs92": "9615",
  			"name": "Combs"
  		},
  		{
  			"id": "20961511",
  			"id_hs92": "961511",
  			"name": "Combs, hair-slides etc of hard rubber or plastic"
  		},
  		{
  			"id": "20961519",
  			"id_hs92": "961519",
  			"name": "Combs, hair-slides etc of other materials"
  		},
  		{
  			"id": "20961590",
  			"id_hs92": "961590",
  			"name": "Hairpins, curling pins, hair-curlers and the like, ne"
  		},
  		{
  			"id": "209616",
  			"id_hs92": "9616",
  			"name": "Scent Sprays"
  		},
  		{
  			"id": "20961610",
  			"id_hs92": "961610",
  			"name": "Scent sprays and similar toilet sprays, parts"
  		},
  		{
  			"id": "20961620",
  			"id_hs92": "961620",
  			"name": "Powder-puffs and pads for the application of cosmetic"
  		},
  		{
  			"id": "209617",
  			"id_hs92": "9617",
  			"name": "Vacuum Flask"
  		},
  		{
  			"id": "20961700",
  			"id_hs92": "961700",
  			"name": "Vacuum flasks etc, parts except inner"
  		},
  		{
  			"id": "209618",
  			"id_hs92": "9618",
  			"name": "Mannequins"
  		},
  		{
  			"id": "20961800",
  			"id_hs92": "961800",
  			"name": "Tailors dummies, display dummies and automata"
  		},
  		{
  			"id": "21",
  			"id_hs92": null,
  			"name": "Arts and Antiques"
  		},
  		{
  			"id": "219701",
  			"id_hs92": "9701",
  			"name": "Paintings"
  		},
  		{
  			"id": "21970110",
  			"id_hs92": "970110",
  			"name": "Paintings/drawings/pastels executed by hand"
  		},
  		{
  			"id": "21970190",
  			"id_hs92": "970190",
  			"name": "Collages, similar decorative plaques"
  		},
  		{
  			"id": "219702",
  			"id_hs92": "9702",
  			"name": "Prints"
  		},
  		{
  			"id": "21970200",
  			"id_hs92": "970200",
  			"name": "Original engravings, prints and lithographs"
  		},
  		{
  			"id": "219703",
  			"id_hs92": "9703",
  			"name": "Sculptures"
  		},
  		{
  			"id": "21970300",
  			"id_hs92": "970300",
  			"name": "Original sculptures and statuary, in any material"
  		},
  		{
  			"id": "219704",
  			"id_hs92": "9704",
  			"name": "Revenue Stamps"
  		},
  		{
  			"id": "21970400",
  			"id_hs92": "970400",
  			"name": "Used postage and revenue stamps, first day covers, et"
  		},
  		{
  			"id": "219705",
  			"id_hs92": "9705",
  			"name": "Collector's Items"
  		},
  		{
  			"id": "21970500",
  			"id_hs92": "970500",
  			"name": "Collections and collectors pieces"
  		},
  		{
  			"id": "219706",
  			"id_hs92": "9706",
  			"name": "Antiques"
  		},
  		{
  			"id": "21970600",
  			"id_hs92": "970600",
  			"name": "Antiques older than one hundred years"
  		},
  		{
  			"id": "22",
  			"id_hs92": null,
  			"name": "Unspecified"
  		},
  		{
  			"id": "229999",
  			"id_hs92": "9999",
  			"name": "Unspecified"
  		},
  		{
  			"id": "22999999",
  			"id_hs92": "999999",
  			"name": "Commodities not specified according to kind"
  		},
  		{
  			"id": "229999AA",
  			"id_hs92": "9999AA",
  			"name": "Commodities not specified according to kind"
  		}
    ];
    return queryInterface.bulkInsert("Products", oec_products, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
