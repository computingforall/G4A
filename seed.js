const Games = require('./database/db');

const gameData = [
  {
      key: 'adventure',
      gameKeywords: ["inequality"],
      gameEmbed: `<div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=_55e53gVHdJkg" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>`,
      gameTitle: 'The Educated Gamer',
      gameBackground: 'images/games/adventure-bg.jpg',
      gameCover: '<img src="images/games/adventure-cover.jpg">',
      gameThumb1: '<img src="images/games/adventure-thumb1.jpg">',
      gameThumb2: '<img src="images/games/adventure-thumb2.jpg">',
      gamePlayer: '<img src="images/games/adventure-cover.jpg">',
      gameDescription: 'The Educated Gamer Game that sheds light about the microaggressions and institutionalized racism that our country has been influenced by over the years.',
      gamePublishedBy: 'Victoria Ulm & Rebecca Paez',
      gameProgrammedBy: 'Makecode',
      gameAbout: 
          `
          <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
          <div><img src="images/games/adventure-thumb1.jpg"></div>
          <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'seaturtles',
      gameKeywords: ["water"],
      gameEmbed: `<div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=_Ubc2iWKEzAuW" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>`,
      gameTitle: 'Sea Turtles',
      gameBackground: 'images/games/seaturtles-bg.jpg',
      gameCover: '<img src="images/games/seaturtles-cover.jpg">',
      gameThumb1: '<img src="images/games/seaturtles-thumb1.jpg">',
      gameThumb2: '<img src="images/games/seaturtles-thumb2.jpg">',
      gamePlayer: '<img src="images/games/seaturtles-cover.jpg">',
      gameDescription: 'Trash in the ocean is having lasting effects on sea turtles and is a real big world problem going on today. Pick up the trash before any sea turtles get to it.',
      gamePublishedBy: 'Yusuf Adem & Jasmine Navarro',
      gameProgrammedBy: 'Makecode',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/seaturtles-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'watergame',
      gameKeywords: ["water"],
      gameEmbed: `<div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=_19o1ih96CT8H" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>`,
      gameTitle: 'Water Game',
      gameBackground: 'images/games/watergame-bg.jpg',
      gameCover: '<img src="images/games/watergame-cover.jpg">',
      gameThumb1: '<img src="images/games/watergame-thumb1.jpg">',
      gameThumb2: '<img src="images/games/watergame-thumb2.jpg">',
      gamePlayer: '<img src="images/games/watergame-cover.jpg">',
      gameDescription: 'Keep our water clean and your player alive.',
      gamePublishedBy: 'Jesse Rivas',
      gameProgrammedBy: 'Makecode',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/watergame-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'trees',
      gameKeywords: ["trees"],
      gameEmbed: `<div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=_7aY2Wp2mMJap" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>`,
      gameTitle: 'Trees',
      gameBackground: 'images/games/trees-bg.jpg',
      gameCover: '<img src="images/games/trees-cover.jpg">',
      gameThumb1: '<img src="images/games/trees-thumb1.jpg">',
      gameThumb2: '<img src="images/games/trees-thumb2.jpg">',
      gamePlayer: '<img src="images/games/trees-cover.jpg">',
      gameDescription: 'Plant as many trees as you can before time runs out and the tree chopping villain cuts them all down.',
      gamePublishedBy: 'Mohamed Muse & Sham Tsegay',
      gameProgrammedBy: 'Makecode',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/trees-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'treestory',
      gameKeywords: ["trees"],
      gameEmbed: `<iframe src="https://scratch.mit.edu/projects/306677058/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
      gameTitle: 'Tree Story',
      gameBackground: 'images/games/treestory-bg.jpg',
      gameCover: '<img src="images/games/treestory-cover.jpg">',
      gameThumb1: '<img src="images/games/treestory-thumb1.jpg">',
      gameThumb2: '<img src="images/games/treestory-thumb2.jpg">',
      gamePlayer: '<img src="images/games/treestory-cover.jpg">',
      gameDescription: 'Tap enemies repeatedly to kill them and protect the forest.',
      gamePublishedBy: 'Nolan Barham, William Henke, Henry Nguyen & Jhisberlly Pineda.',
      gameProgrammedBy: 'Scratch',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/treestory-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'monsanto',
      gameKeywords: ["trees"],
      gameEmbed: `<a href="http://dsfastudents.org/projects/Monsanto/index.html"><img src="images/games/monsanto-cover.jpg"></a>`,
      gameTitle: 'Monsanto',
      gameBackground: 'images/games/monsanto-bg.jpg',
      gameCover: '<img src="images/games/monsanto-cover.jpg">',
      gameThumb1: '<img src="images/games/monsanto-thumb1.jpg">',
      gameThumb2: '<img src="images/games/monsanto-thumb2.jpg">',
      gamePlayer: '<img src="images/games/monsanto-cover.jpg">',
      gameDescription: 'Take over the world in totally legal ways as the pharmaceutical giant Monsanto.',
      gamePublishedBy: 'Nolan Barham, William Henke, Nuh Mukhtar & Nhat Phan ',
      gameProgrammedBy: 'Javascript',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/monsanto-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'thwi',
      gameKeywords: ["inequality"],
      gameEmbed: `<iframe src="https://scratch.mit.edu/projects/288022277/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
      gameTitle: 'The Hate We Ignore',
      gameBackground: 'images/games/thwi-bg.jpg',
      gameCover: '<img src="images/games/thwi-cover.jpg">',
      gameThumb1: '<img src="images/games/thwi-thumb1.jpg">',
      gameThumb2: '<img src="images/games/thwi-thumb2.jpg">',
      gamePlayer: '<img src="images/games/thwi-cover.jpg">',
      gameDescription: 'A game about Islamophobia.',
      gamePublishedBy: 'William Hanke, Lukas Chapmen & Nasro Yusuf. ',
      gameProgrammedBy: 'Scratch',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/thwi-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'trashdash',
      gameKeywords: ["water"],
      gameEmbed: `<iframe src="https://scratch.mit.edu/projects/288018428/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
      gameTitle: 'Trash Dash',
      gameBackground: 'images/games/trashdash-bg.jpg',
      gameCover: '<img src="images/games/trashdash-cover.jpg">',
      gameThumb1: '<img src="images/games/trashdash-thumb1.jpg">',
      gameThumb2: '<img src="images/games/trashdash-thumb2.jpg">',
      gamePlayer: '<img src="images/games/trashdash-cover.jpg">',
      gameDescription: 'Take the garbage to the bin and learn to make the world a cleaner place!',
      gamePublishedBy: 'Anthony Bechara & Jhisberlly Pineda ',
      gameProgrammedBy: 'Scratch',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/trashdash-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'tjhm',
      gameKeywords: ["inequality"],
      gameEmbed: `<iframe src="https://scratch.mit.edu/projects/321363197/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`,
      gameTitle: 'The Journey of the Homeless Man',
      gameBackground: 'images/games/tjhm-bg.jpg',
      gameCover: '<img src="images/games/tjhm-cover.jpg">',
      gameThumb1: '<img src="images/games/tjhm-thumb1.jpg">',
      gameThumb2: '<img src="images/games/tjhm-thumb2.jpg">',
      gamePlayer: '<img src="images/games/tjhm-cover.jpg">',
      gameDescription: 'This is a game about the daily life of a homeless man. ',
      gamePublishedBy: 'Mohammed Hilfi & Albiona Uka',
      gameProgrammedBy: 'Scratch',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/tjhm-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'boxexplorer',
      gameKeywords: ["nothing"],
      gameEmbed: `<a href="http://dsfastudents.org/projects/BoxExplorer/index.html"><img src="images/games/boxexplorer-cover.jpg"></a>`,
      gameTitle: 'Box Explorer',
      gameBackground: 'images/games/boxexplorer-bg.jpg',
      gameCover: '<img src="images/games/boxexplorer-cover.jpg">',
      gameThumb1: '<img src="images/games/boxexplorer-thumb1.jpg">',
      gameThumb2: '<img src="images/games/boxexplorer-thumb2.jpg">',
      gamePlayer: '<img src="images/games/boxexplorer-cover.jpg">',
      gameDescription: 'Hardcore parkore as a box.',
      gamePublishedBy: 'Anthony Bechara',
      gameProgrammedBy: 'Unity',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/boxexplorer-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'divein',
      gameKeywords: ["inequality"],
      gameEmbed: `<a href="http://dsfastudents.org/projects/DiveIn/DiveIn.html"><img src="images/games/divein-cover.jpg"></a>`,
      gameTitle: 'DiveIn',
      gameBackground: 'images/games/divein-bg.jpg',
      gameCover: '<img src="images/games/divein-cover.jpg">',
      gameThumb1: '<img src="images/games/divein-thumb1.jpg">',
      gameThumb2: '<img src="images/games/divein-thumb2.jpg">',
      gamePlayer: '<img src="images/games/divein-cover.jpg">',
      gameDescription: 'Adventures of a reincarnated Muslim.',
      gamePublishedBy: 'Nafiso Mukhtar',
      gameProgrammedBy: 'HTML',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/divein-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  },
  {
      key: 'carbonmonsters',
      gameKeywords: ["trees"],
      gameEmbed:  `<iframe src="https://scratch.mit.edu/projects/321929757/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`,        gameTitle: 'Carbon Monsters',
      gameBackground: 'images/games/carbonmonsters-bg.jpg',
      gameCover: '<img src="images/games/carbonmonsters-cover.jpg">',
      gameThumb1: '<img src="images/games/carbonmonsters-thumb1.jpg">',
      gameThumb2: '<img src="images/games/carbonmonsters-thumb2.jpg">',
      gamePlayer: '<img src="images/games/carbonmonsters-cover.jpg">',
      gameDescription: 'Plant trees to protect yourself from monsters.',
      gamePublishedBy: 'Nhat Phan',
      gameProgrammedBy: 'Scratch',
      gameAbout: 
      `
      <p>Gameplay features players understanding about sustainable goals and conserving and sustaining the use of environment resources.</p>
      <div><img src="images/games/carbonmonsters-thumb1.jpg"></div>
      <p>Within this game we will be able to understand that the world is being threatened and destroyed. This game also addresses the problems we are currently facing right now like <b>poverty, climate change, inequality</b> and more. It will also help us to promote success in our goals while taking care of the planet.</p>
      `,
  }
]

Games.insertMany(gameData, function(error, docs) {
  if (error) {
    console.log('Failed to insert documents', error);
  } else {
    console.log('Success: Database successfully seeded.');
  }
});
