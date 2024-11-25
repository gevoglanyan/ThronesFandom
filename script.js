const form = document.getElementById('characterForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const characterName = document.getElementById('name').value.trim().toLowerCase();
  const resultElement = document.getElementById('result');
  
  if (characterName) {
    
    // House Targaryen
    
    if (characterName === 'daenerys' || characterName === 'daenerys targaryen' || characterName === 'dany') {
      resultElement.innerHTML = "Daenerys? <br> Mother of Dragons! Fierce, Determined, and Relentless!";
    } else if (characterName === 'viserys' || characterName === 'viserys targaryen') {
      resultElement.innerHTML = "Viserys? <br> The Last Male Targaryen, but Consumed by Ambition.";
    }
    
    // House Lannister
    
    else if (characterName === 'tywin' || characterName === 'tywin lannister') {
      resultElement.innerHTML = "Tywin? <br> Ruthless, Strategic, and Always in Control.";
    } else if (characterName === 'tyrion' || characterName === 'tyrion lannister') {
      resultElement.innerHTML = "Tyrion? <br> Sharp-Witted and Underestimated. You Drink and Know Things!";
    } else if (characterName === 'cersei' || characterName === 'cersei lannister') {
      resultElement.innerHTML = "Cersei? <br> Cold and Calculating, Willing to Burn Down the World to Protect her Power.";
    } else if (characterName === 'jaime' || characterName === 'jaime lannister') {
      resultElement.innerHTML = "Jaime? <br> The Kingslayer, Torn Between Love and Honor.";
    }
    
    // House Baratheon
    
    else if (characterName === 'robert' || characterName === 'robert baratheon') {
      resultElement.innerHTML = "Robert? <br> The Usurper, once a Great Warrior, now a King Haunted by his Past.";
    } else if (characterName === 'stannis' || characterName === 'stannis baratheon') {
      resultElement.innerHTML = "Stannis? <br> The Rightful King? Unbending and Relentless.";
    } else if (characterName === 'renly' || characterName === 'renly baratheon') {
      resultElement.innerHTML = "Renly? <br> Charismatic and Beloved, but too Bold for his Own Good.";
    } else if (characterName === 'joffrey' || characterName === 'joffrey baratheon') {
      resultElement.innerHTML = "Joffrey? <br> Cruel, Twisted, and Feared, a King born from Incest.";
    } else if (characterName === 'myrcella' || characterName === 'myrcella baratheon') {
      resultElement.innerHTML = "Myrcella? <br> Sweet and Innocent, but Caught in the Deadly Game of Thrones.";
    } else if (characterName === 'tommen' || characterName === 'tommen baratheon') {
      resultElement.innerHTML = "Tommen? <br> Young and Naive, a King Unprepared for the Weight of the Crown.";
    }
    
    // House Stark
    
    else if (characterName === 'ned' || characterName === 'ned stark' || characterName === 'eddard stark') {
      resultElement.innerHTML = "Ned Stark? <br> Honor-Bound and Loyal, a Man who puts Duty Above All.";
    } else if (characterName === 'catelyn' || characterName === 'catelyn stark') {
      resultElement.innerHTML = "Catelyn Stark? <br> Fiercely Protective of her Family, a Mother to the Core.";
    } else if (characterName === 'robb' || characterName === 'robb stark') {
      resultElement.innerHTML = "Robb Stark? <br> The Young Wolf, a Brave Leader with Too Much Honor for his Own Good.";
    } else if (characterName === 'bran' || characterName === 'bran stark' || characterName === 'brandon stark' || characterName === 'three-eyed raven') {
      resultElement.innerHTML = "Bran Stark? <br> The Three-Eyed Raven, a Seer who sees Beyond the Present.";
    } else if (characterName === 'jon snow' || characterName === 'jon' || characterName === 'aegon targaryen') {
      resultElement.innerHTML = "Jon Snow? <br> You Know Nothing, Jon Snow! A True Leader with a Hidden Past.";
    } else if (characterName === 'arya' || characterName === 'arya stark') {
      resultElement.innerHTML = "Arya Stark? <br> A Skilled Assassin and a Survivor, Always Ready to Fight.";
    } else if (characterName === 'sansa' || characterName === 'sansa stark') {
      resultElement.innerHTML = "Sansa Stark? <br> Queen in the North, Forged in Fire and Unbreakable.";
    }
    
    // House Martell
    
    else if (characterName === 'oberyn' || characterName === 'oberyn martell') {
      resultElement.innerHTML = "Oberyn Martell? <br> The Red Viper, a Dangerous Mix of Passion and Vengeance.";
    } else if (characterName === 'ellaria' || characterName === 'ellaria sand') {
      resultElement.innerHTML = "Ellaria Sand? <br> Driven by Love and Vengeance, a Force to be Reckoned with.";
    }
    
    // House Tyrell
    
    else if (characterName === 'olenna' || characterName === 'olenna tyrell') {
      resultElement.innerHTML = "Olenna Tyrell? <br> The Queen of Thorns, a Master of Court Politics and Wit.";
    } else if (characterName === 'margaery' || characterName === 'margaery tyrell') {
      resultElement.innerHTML = "Margaery Tyrell? <br> Queen Consort, Always a Step Ahead in the Game.";
    } else if (characterName === 'loras' || characterName === 'loras tyrell') {
      resultElement.innerHTML = "Loras Tyrell? <br> A Skilled Knight, Driven by Love and Honor.";
    }
    
    // House Arryn
    
    else if (characterName === 'jon arryn') {
      resultElement.innerHTML = "Jon Arryn? <br> The Warden of the East, a Respected Nobleman who Played a Pivotal Role in the Kingdom.";
    } else if (characterName === 'lysa' || characterName === 'lysa arryn') {
      resultElement.innerHTML = "Lysa Arryn? <br> The Lady Regent of the Vale, a Woman Torn Between Love and Madness.";
    } else if (characterName === 'petyr' || characterName === 'petyr baelish' || characterName === 'littlefinger') {
      resultElement.innerHTML = "Littlefinger? <br> Master of Manipulation! <br> You Always Play the Long Game!";
    }
    
    // House of the Dead
    
    else if (characterName === 'night king') {
      resultElement.innerHTML = "The Night King? <br> The Master of the White Walkers, Cold, Calculating, and Unstoppable.";
    }
    
    // Default response
    
    else {
      resultElement.innerHTML = `${characterName.charAt(0).toUpperCase() + characterName.slice(1)}? <br> Who? Who's That?`;
    }
    
  } else {
    resultElement.textContent = "Please enter a Character Name.";
  }
});
