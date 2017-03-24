'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const oec_companies = [{
        name: "Salmon and Pork",
        address: "1709 SW Westwood ct.",
        phone_number: "(503) 244 3472",
        website: "salmon.com",
        profile_image: "https://sabrina-test.s3.amazonaws.com/1489691935730.jpg",
        cover_image: "https://sabrina-test.s3.amazonaws.com/1490392421582.jpg",
        description: `Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish.
      Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.
      Typically, salmon are anadromous: they are born in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Various species of salmon display anadromous life strategies while others display freshwater resident life strategies. Folklore has it that the fish return to the exact spot where they were born to spawn; tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems. The percent of straying depends on the species of salmon.[2] Homing behavior has been shown to depend on olfactory memory.[3][4]`,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 1
      },
      {
        name: "Sabrina's Sheep",
        address: "Beta Burger",
        phone_number: "(503) 329 8721",
        website: "sabrinakantor.com",
        profile_image: "https://sabrina-test.s3.amazonaws.com/1489508350507.jpg",
        cover_image: "https://sabrina-test.s3.amazonaws.com/1489508249747.jpg",
        description: `Cono Sur Vineyards & Winery was founded in 1993, with the vision
        of producing premium, expressive and innovative wines that convey
        the spirit of the New World. Our name refers to the company’s
        geographic position, representing wines proudly made in South
        America’s Southern Cone, on whose western edge lies Chile and its
        gifted wine valleys. Our logo also evokes a freehand drawing of the
        silhouette of South America.
        Right from the start, Cono Sur applied new ideas and technology to
        traditional winemaking methods. Our main goal, therefore, is to create
        expressive and innovative wines from the world’s southernmost land.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 2
      },
      {
        name: "Al - Tayyab Enterprises",
        address: "A/198 Block-3 Gulshan-e-Iqbal Karachi-75300, Pakistan",
        phone_number: "(92-21) 452-8695,",
        website: "www.altayyab.biz",
        profile_image: "https://sabrina-test.s3.amazonaws.com/1490390523547.jpg",
        cover_image: "https://sabrina-test.s3.amazonaws.com/1490390523553.jpg",
        description: `A variety of products emphasizing simplicity in form and effect to suit the present day life style are produced in Onyx/Marble—namely Vases, Flower pot, Table lamp, Pedestal lamp, Blows, Plates and Dishes, Goblets, Jars, Sherry Sets, Writing Table sets, Paper weight, Pen stands, Key chain, Chess set, Birds and animals figures, Candle stands, Table items, Tiles and table top etc..`,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 3
      }
    ]
    return queryInterface.bulkInsert("Companies", oec_companies, {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Companies", null, {});
  }
};
