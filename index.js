const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

//app.get("/test", (req, res) => res.type('html').send(test));

const search = require('./amiibo-search-application/routes/search.js');
const history = require('./amiibo-search-application/routes/history.js');
const mongo = require("./amiibo-search-application/db/index.js");




app.use('/search', search);

app.use('/history', history);

const server = app.listen(port,async () =>{

 console.log(`Example app listening on port ${port}!`);
 await mongo.connect();
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const test = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`




const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Nintendo Amiibo Search App</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

</head>

<body>
    <div id="app" v-cloak>
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-lg">
                        <h1 class="display-5">Nintendo Amiibo Search App</h1>
                        <p class="lead">search an Amiibo by character or game series</p>
                        <button  @click="change_button_mode" class="btn btn-primary">
                            {{button_mode}}
                        </button>
                    </div>
                </div>
            </div>
        </div>



        <div v-show = "search_mode === true" class="container">

            <!-- <form @submit.prevent="search_by">
                <input v-model="searchTerm" placeholder="Type here" style="width:500px">
                <button>Search</button>    
              </form> -->




                <select v-show =  "picked === 'character'" v-model="searchTerm" style="width:500px">
                <option disabled value="" >search</option>
                <option>Ace</option>
<option>Admiral</option>
<option>Agent S</option>
<option>Agnes</option>
<option>Al</option>
<option>Alex</option>
<option>Alfonso</option>
<option>Alice</option>
<option>Alli</option>
<option>Alm</option>
<option>Amelia</option>
<option>Anabelle</option>
<option>Anchovy</option>
<option>Angus</option>
<option>Anicotti</option>
<option>Ankha</option>
<option>Annalisa</option>
<option>Annalise</option>
<option>Antonio</option>
<option>Apollo</option>
<option>Apple</option>
<option>Asana Mutsuba</option>
<option>Astrid</option>
<option>Audie</option>
<option>Aurora</option>
<option>Ava</option>
<option>Avery</option>
<option>Axel</option>
<option>Azalea</option>
<option>Baabara</option>
<option>Baby Luigi</option>
<option>Baby Mario</option>
<option>Bam</option>
<option>Bangle</option>
<option>Banjo</option>
<option>Barioth</option>
<option>Barold</option>
<option>Bayonetta</option>
<option>Bea</option>
<option>Beardo</option>
<option>Beau</option>
<option>Becky</option>
<option>Bella</option>
<option>Benedict</option>
<option>Benjamin</option>
<option>Bertha</option>
<option>Bettina</option>
<option>Bianca</option>
<option>Biff</option>
<option>Big Top</option>
<option>Bill</option>
<option>Billy</option>
<option>Birdo</option>
<option>Biskit</option>
<option>Bitty</option>
<option>Blaire</option>
<option>Blanca</option>
<option>Blanche</option>
<option>Blathers</option>
<option>Bluebear</option>
<option>Bob</option>
<option>Bokoblin</option>
<option>Bonbon</option>
<option>Bones</option>
<option>Boo</option>
<option>Booker</option>
<option>Boomer</option>
<option>Boone</option>
<option>Boots</option>
<option>Boris</option>
<option>Bowser</option>
<option>Bowser Jr.</option>
<option>Boyd</option>
<option>Bree</option>
<option>Brewster</option>
<option>Broccolo</option>
<option>Broffina</option>
<option>Bruce</option>
<option>Bubbles</option>
<option>Buck</option>
<option>Bud</option>
<option>Bunnie</option>
<option>Butch</option>
<option>Buzz</option>
<option>Byleth</option>
<option>C.J.</option>
<option>Callie</option>
<option>Cally</option>
<option>Camofrog</option>
<option>Canberra</option>
<option>Candi</option>
<option>Captain Falcon</option>
<option>Carmen</option>
<option>Caroline</option>
<option>Carrie</option>
<option>Cashmere</option>
<option>Celeste</option>
<option>Celia</option>
<option>Celica</option>
<option>Cephalobot</option>
<option>Cesar</option>
<option>Chabwick</option>
<option>Chadder</option>
<option>Chai</option>
<option>Charizard</option>
<option>Charlise</option>
<option>Chelsea</option>
<option>Cheri</option>
<option>Cherry</option>
<option>Chester</option>
<option>Chevre</option>
<option>Chibi-Robo</option>
<option>Chief</option>
<option>Chip</option>
<option>Chops</option>
<option>Chow</option>
<option>Chrissy</option>
<option>Chrom</option>
<option>Claude</option>
<option>Claudia</option>
<option>Clay</option>
<option>Cleo</option>
<option>Cloud Strife</option>
<option>Clyde</option>
<option>Coach</option>
<option>Cobb</option>
<option>Coco</option>
<option>Cole</option>
<option>Colton</option>
<option>Cookie</option>
<option>Copper</option>
<option>Corrin</option>
<option>Cousteau</option>
<option>Cranston</option>
<option>Croque</option>
<option>Cube</option>
<option>Curlos</option>
<option>Curly</option>
<option>Curt</option>
<option>Cyd</option>
<option>Cyrano</option>
<option>Cyrus</option>
<option>Daijobu</option>
<option>Daisy</option>
<option>Daisy Mae</option>
<option>Dark Pit</option>
<option>Dark Samus</option>
<option>Daruk</option>
<option>Deena</option>
<option>Deirdre</option>
<option>Del</option>
<option>Deli</option>
<option>Derwin</option>
<option>Detective Pikachu</option>
<option>Diana</option>
<option>Diddy Kong</option>
<option>Digby</option>
<option>Diva</option>
<option>Dizzy</option>
<option>Dobie</option>
<option>Doc</option>
<option>Dom</option>
<option>Don Resetti</option>
<option>Donkey Kong</option>
<option>Dora</option>
<option>Dotty</option>
<option>Drago</option>
<option>Drake</option>
<option>Drift</option>
<option>Duck Hunt</option>
<option>E.M.M.I.</option>
<option>Ed</option>
<option>Egbert</option>
<option>Elise</option>
<option>Ellie</option>
<option>Elmer</option>
<option>Eloise</option>
<option>Elvis</option>
<option>Ena</option>
<option>Erik</option>
<option>Eugene</option>
<option>Eunice</option>
<option>Faith</option>
<option>Falco</option>
<option>Fang</option>
<option>Fauna</option>
<option>Felicity</option>
<option>Filbert</option>
<option>Flick</option>
<option>Flip</option>
<option>Flo</option>
<option>Flora</option>
<option>Flurry</option>
<option>Fox</option>
<option>Francine</option>
<option>Frank</option>
<option>Franklin</option>
<option>Freckles</option>
<option>Frett</option>
<option>Freya</option>
<option>Friga</option>
<option>Frita</option>
<option>Frobert</option>
<option>Fuchsia</option>
<option>Gabi</option>
<option>Gakuto Sōgetsu</option>
<option>Gala</option>
<option>Ganda</option>
<option>Ganon</option>
<option>Gaston</option>
<option>Gayle</option>
<option>Genji</option>
<option>Gigi</option>
<option>Gladys</option>
<option>Gloria</option>
<option>Goldie</option>
<option>Gonzo</option>
<option>Goomba</option>
<option>Goose</option>
<option>Gracie</option>
<option>Graham</option>
<option>Grams</option>
<option>Greninja</option>
<option>Greta</option>
<option>Grizzly</option>
<option>Groucho</option>
<option>Gruff</option>
<option>Guardian</option>
<option>Gulliver</option>
<option>Gwen</option>
<option>Hamlet</option>
<option>Hamphrey</option>
<option>Hans</option>
<option>Harriet</option>
<option>Harry</option>
<option>Harvey</option>
<option>Hayakawa</option>
<option>Hazel</option>
<option>Henry</option>
<option>Hero</option>
<option>Hippeux</option>
<option>Hopkins</option>
<option>Hopper</option>
<option>Hornsby</option>
<option>Huck</option>
<option>Hugh</option>
<option>Ice Climbers</option>
<option>Iggly</option>
<option>Ikari</option>
<option>Ike</option>
<option>Incineroar</option>
<option>Inkling</option>
<option>Ione</option>
<option>Isabelle</option>
<option>Ivysaur</option>
<option>Jack</option>
<option>Jacob</option>
<option>Jacques</option>
<option>Jambette</option>
<option>Jay</option>
<option>Jeremiah</option>
<option>Jigglypuff</option>
<option>Jingle</option>
<option>Jitters</option>
<option>Joan</option>
<option>Joey</option>
<option>Joker</option>
<option>Judy</option>
<option>Julia</option>
<option>Julian</option>
<option>June</option>
<option>K.K. Slider</option>
<option>Kabuki</option>
<option>Kapp'n</option>
<option>Katie</option>
<option>Katrina</option>
<option>Katt</option>
<option>Kazuya</option>
<option>Keaton</option>
<option>Ken</option>
<option>Ketchup</option>
<option>Kevin</option>
<option>Kicks</option>
<option>Kid Cat</option>
<option>Kidd</option>
<option>Kiki</option>
<option>King Dedede</option>
<option>King K. Rool</option>
<option>King Knight</option>
<option>Kirby</option>
<option>Kitt</option>
<option>Kitty</option>
<option>Klaus</option>
<option>Knox</option>
<option>Kody</option>
<option>Koopa Troopa</option>
<option>Kyle</option>
<option>Label</option>
<option>Leif</option>
<option>Leila</option>
<option>Leilani</option>
<option>Leonardo</option>
<option>Leopold</option>
<option>Lily</option>
<option>Limberg</option>
<option>Link</option>
<option>Lionel</option>
<option>Little Mac</option>
<option>Lobo</option>
<option>Lolly</option>
<option>Loot Goblin</option>
<option>Lopez</option>
<option>Lottie</option>
<option>Louie</option>
<option>Lucario</option>
<option>Lucas</option>
<option>Lucha</option>
<option>Lucina</option>
<option>Lucky</option>
<option>Lucy</option>
<option>Luigi</option>
<option>Luna</option>
<option>Lyle</option>
<option>Lyman</option>
<option>Mabel</option>
<option>Mac</option>
<option>Maddie</option>
<option>Maelle</option>
<option>Maggie</option>
<option>Magnamalo</option>
<option>Mallary</option>
<option>Malzeno</option>
<option>Maple</option>
<option>Marcel</option>
<option>Marcie</option>
<option>Margie</option>
<option>Marie</option>
<option>Marina</option>
<option>Mario</option>
<option>Mario Cereal</option>
<option>Marlo</option>
<option>Marshal</option>
<option>Marth</option>
<option>Marty</option>
<option>Mathilda</option>
<option>Mega Man</option>
<option>Megan</option>
<option>Melba</option>
<option>Merengue</option>
<option>Merry</option>
<option>Meta Knight</option>
<option>Metal Mario</option>
<option>Metroid</option>
<option>Mewtwo</option>
<option>Midge</option>
<option>Midna</option>
<option>Mii</option>
<option>Min Min</option>
<option>Mint</option>
<option>Mipha</option>
<option>Mira</option>
<option>Miranda</option>
<option>Mitzi</option>
<option>Moe</option>
<option>Molly</option>
<option>Monique</option>
<option>Monty</option>
<option>Moose</option>
<option>Mott</option>
<option>Mr. G&W</option>
<option>Muffy</option>
<option>Murphy</option>
<option>Nabiru</option>
<option>Nail Saionji</option>
<option>Nan</option>
<option>Nana</option>
<option>Naomi</option>
<option>Nat</option>
<option>Nate</option>
<option>Ness</option>
<option>Nibbles</option>
<option>Niko</option>
<option>Norma</option>
<option>OHare</option>
<option>Octavian</option>
<option>Octoling</option>
<option>Olaf</option>
<option>Olimar</option>
<option>Olive</option>
<option>Olivia</option>
<option>One-Eyed Rathalos</option>
<option>Opal</option>
<option>Orville</option>
<option>Ozzie</option>
<option>PAC-MAN</option>
<option>Palamute</option>
<option>Palico</option>
<option>Palutena</option>
<option>Pancetti</option>
<option>Pango</option>
<option>Paolo</option>
<option>Papi</option>
<option>Pascal</option>
<option>Pashmina</option>
<option>Pate</option>
<option>Patty</option>
<option>Paula</option>
<option>Pave</option>
<option>Pawapuro</option>
<option>Peach</option>
<option>Peaches</option>
<option>Peanut</option>
<option>Pearl</option>
<option>Pecan</option>
<option>Peck</option>
<option>Peewee</option>
<option>Peggy</option>
<option>Pekoe</option>
<option>Pelly</option>
<option>Penelope</option>
<option>Pete</option>
<option>Petri</option>
<option>Phil</option>
<option>Phineas</option>
<option>Phoebe</option>
<option>Phyllis</option>
<option>Pichu</option>
<option>Pierce</option>
<option>Pietro</option>
<option>Pikachu</option>
<option>Pikmin</option>
<option>Pink Gold Peach</option>
<option>Pinky</option>
<option>Piper</option>
<option>Pippy</option>
<option>Piranha Plant</option>
<option>Pit</option>
<option>Plague Knight</option>
<option>Plucky</option>
<option>Pokemon Trainer</option>
<option>Pompom</option>
<option>Poncho</option>
<option>Poochy</option>
<option>Poppy</option>
<option>Porter</option>
<option>Portia</option>
<option>Prince</option>
<option>Puck</option>
<option>Puddles</option>
<option>Pudge</option>
<option>Punchy</option>
<option>Purrl</option>
<option>Qbby</option>
<option>Queenie</option>
<option>Quillson</option>
<option>Quinn</option>
<option>Qurupeco</option>
<option>R.O.B.</option>
<option>Raddle</option>
<option>Rasher</option>
<option>Rathian</option>
<option>Raymond</option>
<option>Razewing Ratha</option>
<option>Redd</option>
<option>Reese</option>
<option>Reneigh</option>
<option>Renée</option>
<option>Resetti</option>
<option>Revali</option>
<option>Rex</option>
<option>Rhonda</option>
<option>Ribbot</option>
<option>Richter</option>
<option>Ricky</option>
<option>Ridley</option>
<option>Rilla</option>
<option>Rio</option>
<option>Rizzo</option>
<option>Roa Kirishima</option>
<option>Roald</option>
<option>Robin</option>
<option>Rocco</option>
<option>Rocket</option>
<option>Rod</option>
<option>Rodeo</option>
<option>Rodney</option>
<option>Rolf</option>
<option>Romin Kirishima</option>
<option>Rooney</option>
<option>Rory</option>
<option>Rosalina</option>
<option>Rosco</option>
<option>Rosie</option>
<option>Roswell</option>
<option>Rover</option>
<option>Rowan</option>
<option>Roy</option>
<option>Ruby</option>
<option>Rudy</option>
<option>Ryu</option>
<option>Sable</option>
<option>Saharah</option>
<option>Sally</option>
<option>Samson</option>
<option>Samus</option>
<option>Sandy</option>
<option>Sasha</option>
<option>Savannah</option>
<option>Scoot</option>
<option>Sephiroth</option>
<option>Shadow Mewtwo</option>
<option>Shari</option>
<option>Sheldon</option>
<option>Shep</option>
<option>Sherb</option>
<option>Shino</option>
<option>Shovel Knight</option>
<option>Shrunk</option>
<option>Shulk</option>
<option>Simon</option>
<option>Skye</option>
<option>Sly</option>
<option>Smallfry</option>
<option>Snake</option>
<option>Snooty</option>
<option>Solaire of Astora</option>
<option>Soleil</option>
<option>Sonic</option>
<option>Sparro</option>
<option>Specter Knight</option>
<option>Spike</option>
<option>Spork/Crackle</option>
<option>Sprinkle</option>
<option>Sprocket</option>
<option>Squirtle</option>
<option>Static</option>
<option>Stella</option>
<option>Sterling</option>
<option>Steve</option>
<option>Stinky</option>
<option>Stitches</option>
<option>Stu</option>
<option>Sydney</option>
<option>Sylvana</option>
<option>Sylvia</option>
<option>T-Bone</option>
<option>Tabby</option>
<option>Tad</option>
<option>Tammi</option>
<option>Tammy</option>
<option>Tangy</option>
<option>Tank</option>
<option>Tasha</option>
<option>Tatsuhisa “Luke” Kamijō</option>
<option>Teddy</option>
<option>Terry</option>
<option>Tex</option>
<option>Tia</option>
<option>Tiansheng</option>
<option>Tiffany</option>
<option>Tiki</option>
<option>Timbra</option>
<option>Timmy</option>
<option>Timmy & Tommy</option>
<option>Tipper</option>
<option>Toad</option>
<option>Toby</option>
<option>Tom</option>
<option>Tom Nook</option>
<option>Tommy</option>
<option>Tortimer</option>
<option>Truffles</option>
<option>Tsukino</option>
<option>Tucker</option>
<option>Tutu</option>
<option>Twiggy</option>
<option>Tybalt</option>
<option>Urbosa</option>
<option>Ursala</option>
<option>Velma</option>
<option>Vesta</option>
<option>Vic</option>
<option>Victoria</option>
<option>Villager</option>
<option>Violet</option>
<option>Vivian</option>
<option>Vladimir</option>
<option>Waddle Dee</option>
<option>Wade</option>
<option>Walker</option>
<option>Walt</option>
<option>Waluigi</option>
<option>Wardell</option>
<option>Wario</option>
<option>Wart Jr.</option>
<option>Weber</option>
<option>Wendell</option>
<option>Wendy</option>
<option>Whitney</option>
<option>Wii Fit Trainer</option>
<option>Wilbur</option>
<option>Willow</option>
<option>Winnie</option>
<option>Wisp</option>
<option>Wolf</option>
<option>Wolfgang</option>
<option>Yabe</option>
<option>Yoshi</option>
<option>Yuga Ohdo</option>
<option>Yuka</option>
<option>Zelda</option>
<option>Zell</option>
<option>Zipper</option>
<option>Zoe</option>
<option>Zucker</option>
<option>Étoile</option>
                </select>


                <select v-show = "picked === 'gameseries'" v-model="searchTerm" style="width:500px" >
                    <option disabled value="" >search</option>
                    <option>ARMS</option>
<option>Animal Crossing</option>
<option>Banjo Kazooie</option>
<option>Bayonetta</option>
<option>BoxBoy!</option>
<option>Breath of the Wild</option>
<option>Castlevania</option>
<option>Chibi Robo</option>
<option>Classic Nintendo</option>
<option>Dark Souls</option>
<option>Diablo</option>
<option>Donkey Kong</option>
<option>Dragon Quest</option>
<option>Earthbound</option>
<option>F-Zero</option>
<option>Fatal Fury</option>
<option>Final Fantasy</option>
<option>Fire Emblem</option>
<option>Kellogs</option>
<option>Kid Icarus</option>
<option>Kirby</option>
<option>Mario Sports Superstars</option>
<option>Megaman</option>
<option>Metal Gear Solid</option>
<option>Metroid</option>
<option>Mii</option>
<option>Minecraft</option>
<option>Monster Hunter</option>
<option>Pac-man</option>
<option>Persona</option>
<option>Pikmin</option>
<option>Pokemon</option>
<option>Power Pros</option>
<option>Punch Out</option>
<option>Shovel Knight</option>
<option>Sonic</option>
<option>Splatoon</option>
<option>Star Fox</option>
<option>Street fighter</option>
<option>Super Mario</option>
<option>Tekken</option>
<option>The Legend of Zelda</option>
<option>Wii Fit</option>
<option>Xenoblade</option>
<option>Yoshi's Woolly World</option>
<option>Yu-Gi-Oh!</option>
                    
                    </select>

                <button  @click="search_by" >
                    search
                </button> 






            <div>search by: {{ picked }}</div>

            <input type="radio" id="character" value="character" v-model="picked" />
            <label for="one">character</label>

            <input type="radio" id="gameseries" value="gameseries" v-model="picked" />
            <label for="two">gameseries</label>


            <div class="row mt-5" v-show="amiibos">
                <div class="col-lg-2 col-md-6" v-for="amiibo in amiibos" >
                    <input :src="amiibo.pic" type="image" style="width: 110px" v-show="isLoadedImage" @load="onImageLoad" @click="get_details(amiibo)" :value="amiibo.id"/>
                    <p><small>{{amiibo.display}}</small></p>
                
                </div>
            </div>


            <div v-show = "details_on === true" class="row mt-5">
                <ul>
                <li><b>amiibo Series:</b> {{details.amiiboSeries}}</li>
                <li><b>character:</b> {{details.character}}</li>
                <li><b>game Series:</b> {{details.gameSeries}}</li>
                <li><b>name:</b> {{details.name}}</li>
                <li><b>release:</b> {{details.release}}</li>        
                </ul>
            </div>








        </div>
        <div v-show = "search_mode === false" class="container">
                <!-- {{history}}   7  6 -->

                <div class="container" >
                    <div class="row" v-for="entry in history" >
                        <!-- <input :src="amiibo.pic" type="image" style="width: 110px" v-show="isLoadedImage" @load="onImageLoad" @click="get_details(amiibo)" :value="amiibo.id"/> -->
                        <ul>
                            <li><b>search Term:</b> {{entry.searchTerm}}</li>
                            <li><b>seach Count:</b> {{entry.seachCount}}</li>
                            <li><b>last Searched:</b> {{entry.lastSearched}}</li>      
                        </ul>
                        <div class="col-lg-2 col-md-6"  v-for="pic in entry.selections" >
                            <img :src="pic" style="width: 110px" v-show="isLoadedImage" @load="onImageLoad" />
                            <!-- <p><small>{{amiibo.display}}</small></p> -->
                        
                        </div>
                        
                    
                    </div>
                    <hr>
                </div>

        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script type="text/javascript" src="/app.js"></script>
</body>

</html>

`



