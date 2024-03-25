/* eslint-env es6 */
/* eslint-disable */


//project examples:
/*const nouns = {
  noun1: {
    name: 'cat',
    examples: ['This is a cat.', 'I saw a cat already.']
  },
// or 
['cat']: {
  examples: ['This is a cat.', 'I saw a cat already.']
},
// or
  cat: ['This is a cat.', 'I saw a cat already.'],
// or
cat: {
  examples: ['This is a cat.', 'I saw a cat already.']
},

};*/


///////////////////////////////////////



/* predefined objects ------------------------------------------------------------------*/

// the main object for nouns
const nouns = {
        calf: 'A cow\'s calf is so beautiful!',
        rainbow: 'It is such a colorful rainbow.',
        comma: 'I must use a comma to separate property values in JS.',
        maelstrom: 'A maelstrom is a sea hurrican.',
        memorial: 'A monument built as a memorial to those who fell in the Civil War.',
        streak: 'A streak of failures didn\'t stop me!',
        wisp: 'A wisp of smoke rose into the air.',
        ['fountain pen']: 'A writer got a fountain pen as a gift.',
        reel: 'A reel of copper wire is quite expensive.',
        advancement: 'Any advancement in your project?',
        bust: 'As a show it was a bust [failure].',
        expant: 'As an expant [emmigrant], I felt awkward in the beginning.',
        upside: 'Being self-employed has its upside [advantage].',
        weirdo: 'Come on you beautiful weirdo!',
        transference: 'Education involves the transference [transfer] of knowledge.',
        tardiness: 'Forgive my tardiness [delay], I had some very important business to attend to.',
        severity: 'Hay fever symptoms vary in severity [intensity].',
        caption: 'He designed a series of posters with the caption [subtitle] : “No One is Innocent”',
        elsewere: 'He is seeking employment elsewere [somewhere else].',
        humility: 'He needs humility [humbleness], because his ego is high.',
        thug: 'He was attacked by a gang of thugs [bandits].',
        amenity: 'Heating is regarded as a basic amenity [facility].',
        conscientiousness: 'His conscientiousness [care] shows his willingness to work.',
        precedence: 'His desire for power soon took  precedence [priority] over any other consideration.',
        clutter: 'His room was in a clutter [mess] of clothes.',
        reciprocity: 'I build my connections by reciprocity [mutuality].',
        pedestal: 'I don\'t put every woman on a pedestal.',
        conduit: 'I dug out a conduit [wire] for conveying water.',
        compensation: 'I got a compensation for my shreded T-shirt.',
        hardship: 'I have hardship [difficulty] to fall asleep fast.',
        mentee: 'I love to teach my mentee new things.',
        peg: 'I must apply laundry pegs [clips] due to strong wind.',
        nail: 'I need a hammer to cope with nails.',
        jug: 'I ordered a whole jug of juice.',
        recreation: 'I play football as a form of recreation [relaxation].',
        swirl: 'I saw a swirl [vortex] of leaves.',
        resentment: 'I still feel bitter resentment [anger] to my friends.',
        bolt: 'I use a bolt for the door, just in case.',
        ['track-suit']: 'I wear a track-suit [gym suit] while exercising.',
        adulterer: 'I\'m not an adulterer, I love my wife.',
        downtime: 'I\'ve recenty had a downtime [slump] in my learning consistency.',
        footage: 'I\'ve recorded a footage about my daily life.',
        stealth: 'It was all the stealth [trick] of a hungry cat.',
        tome: 'It\'s not a regular book, it\'s a tome.',
        gauge: 'Look at the fuel gauge [indicator]!',
        accrual: 'All debts must be frozen with no further accrual of interest.',
        trifle: 'Don\'t bother, that\'s really a trifle [little] for me.',
        repository: 'This library is a repository of knowledge.',
        typo: 'A password could not be loaded because of a typo.',
        plethora: 'A plethora [excess, surplus] of daily commitments could lead to burnout.',
        subset: 'Decimals are a subset of numbers in general.',
        convention: 'It is up to you which convention [way] you will choose to solve this equation.',
        component: 'The device consists of many complex components [parts].',
        replica: 'I\'d have to have a replica [copy] of these files to analyze them profoundly.',
        safeguard: 'This helmet is a safeguard [protection] againts getting an injury.',
        excursion: 'I am going on an excursion [trip, tour] to Vienna next month.',
        critique: 'I am not good at handling a critique, especially in public.',
        exposure: 'To show you more exposure [presentation] of the topic, I will share a practical example.',
        divertion: 'There is a diversion [bypass, detour] due to roadworks.',
        submission: 'Once I finished my project I will send for submission [assessment].',
        leisure: 'I am going to fulfil my leisure (free time) with lots of attractions.',
        notation: 'We can use "^" notation [marking] to present an exponent.',
        namesake: 'Oh, you\'re my namesake, see? The same names.',
        tally: 'My bank sent me an annual tally [score] of my deposit interest.',
        gateway: 'He was such obese that couldn\'t fit through a gateway.',
        flair: 'I\'ve got a flair [talent, gift] for Maths.',
        pinnacle: 'The final mark was a pinnacle [culmination] of all my studies.',
        formula: 'A formula [pattern] to be happy is treasuring little things.',
        fortune: 'Cards can\'t predict a fortune [fate].',
        petal: 'Daisy has white petals [flakes].',
        townsfolk: 'Townsfolk [townspeople] here is very friendly.',
        assortment: 'In this shop you can buy a vast assortment [collection] of unimportant stuff.',
        downside: 'The temperature at the peak is the main downside [drawback, disadvantage].',
        doorman: 'The keys are available at the doorman\'s desk.',
        itinerary: 'My itinerary [route] will go through a few countries.',
        origin: 'Our competition origin [start] will take place in a nearby village.',
        influx: 'Month after month I have been experiencing an influx [inflow] of new coding errands.',
        hassle: 'Getting here while raining was a sheer hussle [torture].',
        misnomer: '"Lazy" is a misnomer [faulty name] for a person who doesn\'t feel like doing anything.',
        villain: 'Birds are villains [thieves, rogues] on my farm, devastating crops.',
        installment: 'The first installment of your load is due next month.',
        longitude: 'The time varies due to different longitudes.',
        latitude: 'The latitude of the equator equals 0 degrees.',
        paradigm: 'Beauty is becoming a new paradigm [model, pattern] of the human\'s value.',
        
        
        

        // nouns
    };
    




let numOfKeys = Object.keys(nouns).length; //Qty of keys in the object
let randomNum = Math.floor(Math.random() * numOfKeys); // A range of indexes in the given object (0-n)
let rndNoun = Object.keys(nouns)[randomNum]; // returns a random noun (key) based on a generated random number
let rndNounExa = Object.values(nouns)[randomNum]; // returns a random noun example (value) based on a generated random number

// The '.join' property has been disabled due to current lack of arrays existance in objects.
//rndNounExa = rndNounExa.join(' '); // changes noun examples (as an array) into a string
    
    
// the main object for verbs
    const verbs = {
        visit: 'I am going to visit you soon.',
        overlook: 'Be cautious not to overlook details.',
        imagine: 'Imagine yourself being filthy rich.',
        exaggerate: 'Actions speak louder than words, because people tend to exaggerate to much.',
        dawdle: 'Hurry up, don\'t dawdle [lag]!',
        whimper: 'A child in a bed nearby began to whimper [whimp].',
        plummet: 'A climber was almost killed when he plummeted [dropped] 300 feet down an icy slope.',
        jeopardize: 'A devaluation of the dollar would jeopardize [put at risk] New York\'s position as a financial center.',
        seduce: 'A physician has seduced a female client.',
        hobble: 'After the injury I started hobbling [limping].',
        ascent: 'It was a challenge to ascent [climb up] on the mountain.',
        impale: 'An armor was impaled by the arrow.',
        hover: 'Army helicopters hovered [hanged] overhead.',
        aid: 'A diet and exercise aid [help] healthy skin.',
        retract: 'Does a priest have to retract [retreat] from a social life?',
        skimp: 'Don\'t skimp any money on insurance when you travel overseas.',
        malign: 'Don\'t you dare malign her in my presence.',
        regiment: 'Every aspect of their life is strictly regimented.',
        induce: 'Fire induced [persuaded] many bystanders to stay away.',
        surpass: 'He continued to surpass [exceed, excel] me at all games.',
        alleviate: 'He couldn\'t prevent her pain, only alleviate [soothe, mitigate] it.',
        devour: 'He devoured half of his burger in one bite.',
        intrude: 'He had no right to intrude [interfere] into their lives.',
        mumble: 'He mumbled something she didn\'t catch.',
        relent: 'He relented [softened] when he got an accusation.',
        stipulate: 'He stipulated certain conditions before their marriage.',
        heed: 'He should have heeded [paid] attention to the warnings.',
        mitigate: 'He wanted to mitigate [soothe] misery in the world.',
        ban: 'He was banned [forbade, prohibited] from driving for a year.',
        blackmail: 'He was trying to blackmail [intimidate] me for $10,000.',
        reckon: 'His debts were reckoned [calculated, counted] at $300,000.',
        interface: 'His goal is to get people interfacing [interacting] with one other.',
        grieve: 'I didn\'t grieve [sorrow] when my application has been denied.',
        cuddle: 'I do enjoy to cuddle [hug] my puppy.',
        groan: 'I groan [moan] in pain when I hit my elbow.',
        divest: 'I had to divest [rid, dispose] items while a screening check.',
        strap: 'I had to strap [tie, bind] the bag to my bicycle.',
        deluge: 'I have been deluged [flooded] with offers of work.',
        intervene: 'I intervened [interfered] in the dispute.',
        slack: 'I like to slack [laze] after work.',
        banter: 'I love to banter [polite discord] with my sweetheart.',
        bind: 'I must bind [bond, tie] the logs together with ropes.',
        flick: 'I must flick from the sand.',
        presume: 'I presumed [assumed] that the man had been escorted from the building.',
        soften: 'I soften a biscuit in tea.',
        spike: 'I spiked [impaled] a baloon with a needle.',
        pamper: 'Small kids just love being pampered.',
        suffice: 'One tissue will suffice [be enough]. Thank you.',
        tamper: 'Somebody tampered [manipulated] with my code, it does not work right now!',
        stash: 'I will stash the rest of cookies - I am full already.',
        deploy: 'My company deployed [positioned] more cameras around the building due to a recent nearby robbery.',
        entice: 'The evening lights entice [lure, tempt] moths.',
        peek: 'It was almost imposible to peek [glance] at her bust.',
        reflect: 'Any deprivation of sleep will be reflected on your face.',
        intimidate: 'He tried to intimidate [scare, startle] me by spilling the beans to our boss.',
        embed: 'I embedded [attached] photos to my website to be more pleasant for an eye.',
        anticipate: 'I anticipated [predicted] that I will get socks as a gift.',
        diverge: 'We couldn\'t catch the second mugger because they diverged in two ways after a while.',
        transcribe: 'I do often transcribe my thoughs on paper to preserve from losing them.',
        emulate: 'She emulates [mimics, immitates] her idol by wearing those clothes, what\'s a freak!',
        pertain: 'These rules pertain [refer, apply] to everyone, not only me.',
        gasp: 'She climbed up the stairs for the second floor only and started sapping [hardly breathing].',
        squash: 'Now squash [squeeze, crush] these fruits precisely.',
        compute: 'After work I am so weary that I would hardy compute [calculate] simple equations.',
        waft: 'The smell of a roast chicken wafted [floated] from the kitchen.',
        tack: 'I tacked [fastened] a security belt.',
        cluttered: 'The closet is cluttered [crammed] with unimportant things, I can\'t find anything.',
        draw: 'The last two lines drew my attention in particular.',
        optimize: 'This is just the first version of the project, it will going to be optimized [adjusted] overtime.',
        pore: 'I didn\'t sleep well because I was poring over an online course.',
        tweak: 'Tweak [adjust] a shopping list depending on your preferences.',
        expedite: 'I must expedite [speed up, accelerate] my paperwork before the office is closed.',
        yield: 'This score yields [produces] a tangible outcome of our efforts.',
        commemorate: 'I commemorated [celebrated] my working day with a doughnut.',
        incur: 'I can\'t spend more this month because I have already incurred significant expenses.',
        account: 'I won\'t account [consider] this as my merit, I didn\'t do much.',
        facilitate: 'Reading outloud facilitates [simplifies] comprehention.',
        decipher: 'I struggle to decipher [decode] this hidden message.',
        encrypt: 'A passage is encrypted [encoded] with a logical puzzle.',
        assemble: 'I am going to buy separate computer components and assemble [build, set up] them by myself.',
        deepen: 'I\'m going to deepen [widen, enlarge] my knowledge about Python.',
        pique: 'Topics about health always pique [arouse, stimulate] my interest.',

        // verbs
    };
    
    
    let numOfKeys2 = Object.keys(verbs).length; //Qty of keys in the object
    let randomNum2 = Math.floor(Math.random() * numOfKeys2); // A range of indexes in the given object (0-n)
    let rndVerb = Object.keys(verbs)[randomNum2]; // returns a random verb (key) based on a generated random number
    let rndVerbExa = Object.values(verbs)[randomNum2]; // returns a random verb example (value) based on a generated random number
    //rndVerbExa = rndVerbExa.join(' '); // changes verb examples (as an array) into a string
    
    
    // the main object for adjectives
    const adjectives = {
        careless: 'Be aware of careless drivers.',
        gross: 'I won\'t eat that, it\'s gross!',
        phenomenal: 'This song is truly phenomenal!',
        bland: 'A dish without salt is bland like grass.',
        pseudo: 'A grandmother\'s loss was caused by a pseudo [unreal, spurious] grandchild.',
        aloof: 'A shy colleague was aloof [distant] towards women.',
        utter: 'Charles stared at her in utter [sheer] amazement.',
        exhilarating: 'Christmas is an exhilarating [merry] time for me.',
        discreet: 'He did a discreet fart.',
        superficial: 'He had only the most superficial [shallow] knowledge of foreign countries.',
        mild: 'He received a mild [delicate] sentence.',
        obscene: 'He says obscene [rude] jokes.',
        hideous: 'He told us a gloomy, hideous [nasty] story.',
        sleek: 'He was tall, with sleek [glossy], dark hair.',
        inquisitive: 'He was very chatty and inquisitive [curious] about everything.',
        loath: 'He\'s loath [reluctant] to reach out a help hand whatsoever.',
        luminous: 'Her eyes were luminous [shiny, shining] with joy.',
        slippery: 'Her hand was slippery with sweat.',
        insane: 'His eyes glowing with insane [abnormal] fury.',
        ecstatic: 'I commenced the thread with drive, being ecstatic [excited, elated].',
        blunt: 'I couldn\'t chop with a blunt knife.',
        cheeky: 'I don\'t care about cheeky [shameless] comments.',
        processed: 'I don\'t eat processed food.',
        awry: 'I got the impression that something was awry [wrong].',
        unforeseen: 'I insured myself against unforeseen [unexpected] circumstances.',
        exquisite: 'I saw exquisite [excellent], jewellike portraits in the museum.',
        inverse: 'I took an inverse [opposite, contrary] way to a planned one.',
        avid: 'I\'m an avid [keen, eager] reader of science fiction.',
        complacent: 'I\'m complacent [self-satisfied] after every finished task.',
        evicted: 'I\'m evicted [ejected] if I don\'t pay off a rent on time!',
        mediocre: 'In my opinion he\'s a mediocre [average, moderate] actor.',
        picturesque: 'It was a lovely, picturesque village.',
        foolproof: 'It was a foolproof [reliable] security system.',
        exempt: 'Kids weren\'t exempt [free, released] from the school during 40 degrees C.',
        fussy: 'My baby has been fussy [grumpy] lately.',
        vivacious: 'My baby is vivacious [vivid, lively] mainly at night.',
        dented: 'My car has a dented [hit] door.',
        damp: 'My laundry is still damp [wet].',
        likeable: 'My new teacher is really likeable [kind].',
        choosy: 'My toddler has become very choosy [picky] about food.',
        stingy: 'Scrooge was a stingy [ungenerous] man.',
        mellow: 'She was hypnotized by the mellow [gentle, smooth] tone of his voice.',
        vulgar: 'That disobedient kid has a vulgar language.',
        horrid: 'That stale sandwich was horrid [horrible, awful].',
        eloquent: 'That was an eloquent [articulate] speech!',
        intrusive: 'That was an intrusive [obtrusive, mean] question.',
        catchy: 'The headline lacks something - it isn\'t catchy [compelling].',
        imminent: 'They were in an imminent [impending] danger of being swept away.',
        drastic: 'It was a drastic move, I can tell.',
        intact: 'A robber came in but a cake wasn\'t intacted.',
        descriptive: 'This file should have a descriptive name.',
        imperative: 'It was imperative [crucial] to perform quickly.',
        constructive: 'I am always open for constructive criticism.',
        succinct: 'Could you give me a succinct [brief, concise] summary of what happened here?',
        indispensable: 'HTML is indispensable [essential] to learn CSS.',
        intuitive: 'The next steps are intuitive, so there is no need to explain this excessively.',
        lenient: 'I am lenient [forgiving] for my daughter, she\'s only 2 yo.',
        definitive: 'Finally it is a definitive [final] step to accomplish my project.',
        exceptional: 'I have an exceptional [extraordinary, unique] ability to annoy people you know?',
        linear: 'The life is not linear, has ups, downs and diversions.',
        convoluted: 'These terms are such convoluted [complex] that I hardy understand what I am reading about.',
        interim: 'This job is interim [temporary] until I find something better.',
        standalone: 'This web application is standalone [independent], so you can utilize it straight away and fully.',
        prone: 'I am prone [willing] to do mistakes, especially if I have sleep deprivation.',
        malformed: 'My car doors were malformed [distorted, deformed] because of a collision.',
        curated: 'I spent a bit to compose a curated [selected], catchy headline.',
        impeccable: 'Your negotiating skill is impeccable [flawless], I can tell.',
        peculiar: 'That\'s peculiar [unusual, odd] that you can juggle with closed eyes.',
        quirky: 'Is wearing a collar T-shirt makes me quirky [odd, weird] these days?',
        eccentric: 'I am an eccentric [peculiar] person because  I like tea with a pinch of salt.',
        focal: 'Our focal [main] focus should aim to gather new clients.',
        hazy: 'The road was extremely hazy [foggy, vague] after the rain.',
        innumerable: 'You will do an innumerable [countless] mistakes in your life yet.',
        consecutive: 'I have been studying programming for about 10 consecutive [subsequent, continuous] months.',
        discrete: 'This theme is a discrete [separate, individual] topic to talk about later.',
        dandy: 'You look dandy [elegant] in this shirt.',
        laborious: 'Doing notes whilst the lectures was truly laborious [tedious].',
        endearing: 'Your words are so endearing [lovely, adorable] that I am extremely pleased.',
        threefold: 'Having triplets means treefold [triple] effort.',
        nefarious: 'It turned out she was nefarious [wicked, bad] liar.',
        flagship: 'This is my flagship project that I am truly proud of.',
        celestial: 'The taste of my sandwitch is celestial [divine].',


        // adjectives
    };
    
    
    let numOfKeys3 = Object.keys(adjectives).length; //Qty of keys in the object
    let randomNum3 = Math.floor(Math.random() * numOfKeys3); // A range of indexes in the given object (0-n)
    let rndAdjective = Object.keys(adjectives)[randomNum3]; // returns a random adjective (key) based on a generated random number
    let rndAdjectiveExa = Object.values(adjectives)[randomNum3]; // returns a random adjective example (value) based on a generated random number
    //rndAdjectiveExa = rndAdjectiveExa.join(' '); // changes adjective examples (as an array) into a string
    

    // the main object for tenses
    const tenses = {
        ['Present Simple']: 'I work on Sundays.',
        ['Present Continuous']: 'I am taking holiday next month.',
        ['Present Perfect']: 'I have read only 1 book, but how marvellous!?.',
        ['Future Simple']: 'Wait, I will come to you in a bit.',
        ['Past Simple']: 'I did it as you asked me to do it.',
        ['Past Continuous']: 'I was trying to get focused, but you interfered me.',
    };
   

    let numOfKeys4 = Object.keys(tenses).length; //Qty of keys in the object
    let randomNum4 = Math.floor(Math.random() * numOfKeys4); // A range of indexes in the given object (0-n)
    let rndTense = Object.keys(tenses)[randomNum4]; // returns a random tense (key) based on a generated random number
    let rndTenseExa = Object.values(tenses)[randomNum4]; // returns a random tense example (value) based on a generated random number
    //rndTenseExa = rndTenseExa.join(' '); // changes tense examples (as an array) into a string


    // the main object for idioms
    const idioms = {
        ['be on the same page']: 'I am glad that we\'re on the same page in this matter.',
        ['be as stubborn as an ox']: 'He doesn\'t want to listen to me, he\'s as stubborn as an ox.',
        ['it is easier said than done']: 'Many worthy tips have been said, unfortunatelly, it\'s easier said than done.',
        ['as cold as ice']: 'She is as cold as ice, no empathy whatsoever!',
        ['as clear as mud']: 'Please be precise, because it was as clear as mud.',
        ['as fast as lightning']: 'Today\'s day was as fast as lightning, did not notice flying time!',
        ['sleep like a log']: 'I\'ve had such sleep deprivation that I slept like a log after coming home.',
        ['nail it']: 'Good job, you nailed it! [You did it, bravo!]',
        ['long time, no see']: 'Mike, long time, no see, how are you?',
        ['shed some light on']: 'I am curious as well, maybe they will shed some light on.',
        ['to be honest']: 'I don\'t like chicken soup, to be honest.',
        ['with no doubt']: 'He will pass his exam with no doubt.',
        ['pain in the arse/neck']: 'Doing this job is a sheer pain in the arse.',
        ['can\'t complain']: 'Everything goes well, I can\'t complain.',
        ['around the corner']: 'I feel that my promotion is just around the corner.',
        ['be out of a hook']: 'The teacher is sick today, so we\'re out of a hook, we can go home.',
        ['blessing in disguise']: 'Missing that plane turned out to be a blessing in disguise because I got to spend more time with my family.',
        ['a stone’s throw']: 'My dormitory was a stone’s throw from my uni.',
        ['actions speak louder than words']: 'Actions speak louder than words, because people tend to exaggerate to much.',
        ['add fuel to the fire']: 'When she started laughing during the argument, it really added fuel to the fire!',
        ['all ears']: 'I can\'t wait to hear that, I\'m all ears!',
        ['at a crossroads']: 'I was at a crossroads when I was offered a job in the UK, but my girlfriend wanted to stay in the States.',
        ['barking up the wrong tree']: 'They think the company’s problem can be solved just by replacing current people, but they\'re barking up the wrong tree.',
        ['beating about the bush']: 'Stop beating about the bush! Are you planning to lend me that money, or not?',
        
    };

    let numOfKeys5 = Object.keys(idioms).length; //Qty of keys in the object
    let randomNum5 = Math.floor(Math.random() * numOfKeys5); // A range of indexes in the given object (0-n)
    let rndIdiom = Object.keys(idioms)[randomNum5]; // returns a random idiom (key) based on a generated random number
    let rndIdiomExa = Object.values(idioms)[randomNum5]; // returns a random idiom example (value) based on a generated random number

    


    // the main object for collocations
    const collocations = {
        ['a quick learner']: 'Jeremy speaks many languages, thus he must be a quick learner.',
        ['absolutely delighted']: 'I am absolutely delighted with the new series, can\'t find words of appreciation.',
        ['absolutely vital']: 'It\’s absolutely vital to read the instructions carefully before you start your exam!',
        ['bubbly personality']: 'I prefer people with bubbly personalities – they are so eager to talk to.',
        ['carbon footprint']: 'I\’m trying to reduce my carbon footprint by using a bus instead of a car.',
        ['childhood friend']: 'I have known Matt since I remember – he is my childhood friend.',
        ['cautiously optimistic']: 'I am cautiously optimistic about getting a new job. I am prepared for the worst.',
        ['complete disaster']: 'The school trip was a complete disaster! We had to wait a few hours in a traffic jam.',
        ['extremely successful']: 'Mark was extremely successful in his architecting career.',
        ['fashion victim']: 'Have you seen what Carol is wearing? What a fashion victim! [fashionable clothes that look silly]',
        ['fashion crime']: 'It is said that wearing a polo T-shirt is a fashion crime.',
        ['find a solution']: 'Do not worry we will find a solution of this nasty matter together.',
        ['food miles']: 'If you grow some of your own vegetables, you can lower your food miles hugely. [The distance between a production place to where it is eaten]',
        ['formal education']: 'My father hasn\'t left school yet, so his formal education is impressingly long.',
        ['full marks']: 'Tim looks very happy today, because he got full marks in his maths exam.',
        ['go on a diet']: 'My New Year\'s resolution is to go on a diet, I am wondering how much fat will I loose?',
        ['heavy workload']: 'My new job is amazing, but I have got a really heavy workload these days.',
        ['keep in shape']: 'She keeps herself in shape, because unlike me, she joggs every day.',
        ['make a living']: 'I am going to make a living working as a software deweloper.',
        ['mature student']: 'Most friends I made at uni were younger than me, because I decided to became a student a bit later.',
        ['newly qualified']: 'Josh doesn’t have much experience yet, due to he is a newly qualified analyst.',
        
    };

    let numOfKeys6 = Object.keys(collocations).length; //Qty of keys in the object
    let randomNum6 = Math.floor(Math.random() * numOfKeys6); // A range of indexes in the given object (0-n)
    let rndColl = Object.keys(collocations)[randomNum6]; // returns a random collocation (key) based on a generated random number
    let rndCollExa = Object.values(collocations)[randomNum6]; // returns a random collocation example (value) based on a generated random number


 // testing a feature   
/*
    document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', uploadLocSto)
});

function uploadLocSto() {
      if (localStorage === null || takenObj === null || takenObj2 === null || takenObj3 === null || takenObj4 === null
        || takenObj5 === null || takenObj6 === null) {
            let virObjx = Object.assign(nouns, {"testNoun": "tN"});
            localStorage.setItem('nounsJSON', JSON.stringify(virObjx));
              
            let virObj2x = Object.assign(verbs, {"testVerb": "tV"});
            localStorage.setItem('verbsJSON', JSON.stringify(virObj2x));
              
            let virObj3x = Object.assign(adjectives, {"testAdj": "tA"});
            localStorage.setItem('adjectivesJSON', JSON.stringify(virObj3x));
            
            let virObj4x = Object.assign(tenses, {"testTense": "tT"});
            localStorage.setItem('tensesJSON', JSON.stringify(virObj4x));  
              
            let virObj5x = Object.assign(idioms, {"testIdiom": "tI"});
            localStorage.setItem('idiomsJSON', JSON.stringify(virObj5x));
              
            let virObj6x = Object.assign(collocations, {"testColl": "tC"} );
            localStorage.setItem('collocationsJSON', JSON.stringify(virObj6x));
        } /*else {
            alert('There\'s a problem with LocalStorage.')
        } */
        
    
//}*/






    /* showing and hiding div boxes for below elements after ticking a checkbox -------------------------- */  

    // for nouns
    function checkBox1() {
        const checkB = document.getElementById("w1");
        const contentOutput = document.getElementById("nounCheck");
        
        if (checkB.checked === true) {
            contentOutput.style.display = "block";
        } else {
            contentOutput.style.display = "none";
        }
       
    };

    // for verbs
    function checkBox2() {
        const checkB2 = document.getElementById("w2");
        const contentOutput2 = document.getElementById("verbCheck");
        
        if (checkB2.checked === true) {
            contentOutput2.style.display = "block";
        } else {
            contentOutput2.style.display = "none";
        }
       
    };
    
    //for adjectives
    function checkBox3() {
        const checkB3 = document.getElementById("w3");
        const contentOutput3 = document.getElementById("adjectiveCheck");
        
        if (checkB3.checked === true) {
            contentOutput3.style.display = "block";
        } else {
            contentOutput3.style.display = "none";
        }
       
    };

    //for tenses
    function checkBox4() {
        const checkB4 = document.getElementById("w4");
        const contentOutput4 = document.getElementById("tenseCheck");
        
        if (checkB4.checked === true) {
            contentOutput4.style.display = "block";
        } else {
            contentOutput4.style.display = "none";
        }
       
    };

    //for idioms
    function checkBox5() {
        const checkB5 = document.getElementById("w5");
        const contentOutput5 = document.getElementById("idiomCheck");
        
        if (checkB5.checked === true) {
            contentOutput5.style.display = "block";
        } else {
            contentOutput5.style.display = "none";
        }
       
    };

    //for collocations
    function checkBox6() {
        const checkB6 = document.getElementById("w6");
        const contentOutput6 = document.getElementById("collocationCheck");
        
        if (checkB6.checked === true) {
            contentOutput6.style.display = "block";
        } else {
            contentOutput6.style.display = "none";
        }
       
    };


    
    /* shuffling key-value pairs for a chosen category after clicking a button -------------------------- */

    //for nouns
    function shuffleWord() {
        
        // inc. localStorage
        let numOfKeysV = Object.keys(takenObj).length; //Qty of keys in the object
        let randomNumV = Math.floor(Math.random() * numOfKeysV); // A range of indexes in the given object (0-n)
        let rndNounV = Object.keys(takenObj)[randomNumV]; // returns a random noun (key) based on a generated random number
        let rndNounExaV = Object.values(takenObj)[randomNumV]; // returns a random noun example (value) based on a generated random number
        
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys = Object.keys(nouns).length; //Qty of keys in the object
        let randomNum = Math.floor(Math.random() * numOfKeys); // A range of indexes in the given object (0-n)
        let rndNoun = Object.keys(nouns)[randomNum]; // returns a random noun (key) based on a generated random number
        let rndNounExa = Object.values(nouns)[randomNum]; // returns a random noun example (value) based on a generated random number
        
       //rndNounExa = rndNounExa.join(' '); // changes noun examples (as an array) into a string
        */
        
        // variables holding HTML IDs to replace their content after shuffling
        let changeWord = document.getElementById("changeWord"); // shuffle button ID
        let wordToChange = document.getElementById("noun"); // noun-key property ID
        //wordToChange.innerHTML = rndNoun;  // works until a refresh, replacing a noun-key
        wordToChange.innerHTML = rndNounV; // inc. localStorage, replacing a noun-key property
       
        let exampleToChange = document.getElementById("nounExample"); // noun-value property ID
        //exampleToChange.innerHTML = rndNounExa; // works until a refresh, replacing a noun-value
        exampleToChange.innerHTML = rndNounExaV; // inc. localStorage, replacing a noun-value property
  
    };

    

    // for verbs
    function shuffleWord2() {
        
        // inc. localStorage
        let numOfKeys2V = Object.keys(takenObj2).length; //Qty of keys in the object
        let randomNum2V = Math.floor(Math.random() * numOfKeys2V); // A range of indexes in the given object (0-n)
        let rndVerbV = Object.keys(takenObj2)[randomNum2V]; // returns a random verb (key) based on a generated random number
        let rndVerbExaV = Object.values(takenObj2)[randomNum2V]; // returns a random verb example (value) based on a generated random number
        
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys2 = Object.keys(verbs).length; //Qty of keys in the object
        let randomNum2 = Math.floor(Math.random() * numOfKeys2); // A range of indexes in the given object (0-n)
        let rndVerb = Object.keys(verbs)[randomNum2]; // returns a random verb (key) based on a generated random number
        let rndVerbExa = Object.values(verbs)[randomNum2]; // returns a random verb example (value) based on a generated random number
       // rndVerbExa = rndVerbExa.join(' '); // changes verb examples (as an array) into a string
        */
        
        // variables holding HTML IDs to replace their content after shuffling
        let changeWord2 = document.getElementById("changeWord2"); // shuffle button ID
        let wordToChange2 = document.getElementById("verb"); // verb-key property ID
        // wordToChange2.innerHTML = rndVerb; // works until a refresh, replacing a verb-key 
        wordToChange2.innerHTML = rndVerbV; // inc. localStorage, replacing a verb-key property
        
        let exampleToChange2 = document.getElementById("verbExample"); // noun-value property ID
        //exampleToChange2.innerHTML = rndVerbExa; // works until a refresh, replacing a verb-value
        exampleToChange2.innerHTML = rndVerbExaV; // inc. localStorage, replacing a verb-value property
        
    };



    // for adjectives
    function shuffleWord3() {
        
        let numOfKeys3V = Object.keys(takenObj3).length; //Qty of keys in the object
        let randomNum3V = Math.floor(Math.random() * numOfKeys3V); // A range of indexes in the given object (0-n)
        let rndAdjectiveV = Object.keys(takenObj3)[randomNum3V]; // returns a random adjective (key) based on a generated random number
        let rndAdjectiveExaV = Object.values(takenObj3)[randomNum3V]; // returns a random adjective example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys3 = Object.keys(adjectives).length; //Qty of keys in the object
        let randomNum3 = Math.floor(Math.random() * numOfKeys3); // A range of indexes in the given object (0-n)
        let rndAdjective = Object.keys(adjectives)[randomNum3]; // returns a random adjective (key) based on a generated random number
        let rndAdjectiveExa = Object.values(adjectives)[randomNum3]; // returns a random adjective example (value) based on a generated random number 
        //  rndAdjectiveExa = rndAdjectiveExa.join(' '); // changes adjective examples (as an array) into a string
        */
        
        // variables holding HTML IDs to replace their content after shuffling
        let changeWord3 = document.getElementById("changeWord3"); // shuffle button ID
        let wordToChange3 = document.getElementById("adjective");  // adjective-key property ID
        // wordToChange3.innerHTML = rndAdjective; // works until a refresh, replacing an adjective-key
        wordToChange3.innerHTML = rndAdjectiveV; // inc. localStorage, replacing an adjective-key property
       
        let exampleToChange3 = document.getElementById("adjectiveExample"); // adjective-value property ID
        //exampleToChange3.innerHTML = rndAdjectiveExa; // works until a refresh, replacing an adjective-value
        exampleToChange3.innerHTML = rndAdjectiveExaV; // inc. localStorage, replacing an adjective-value property
        
        
        
    };


    // for tenses
    function shuffleWord4() {
        
        let numOfKeys4V = Object.keys(takenObj4).length; //Qty of keys in the object
        let randomNum4V = Math.floor(Math.random() * numOfKeys4V); // A range of indexes in the given object (0-n)
        let rndTenseV = Object.keys(takenObj4)[randomNum4V]; // returns a random tense (key) based on a generated random number
        let rndTenseExaV = Object.values(takenObj4)[randomNum4V]; // returns a random tense example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys4 = Object.keys(tenses).length; //Qty of keys in the object
        let randomNum4 = Math.floor(Math.random() * numOfKeys4); // A range of indexes in the given object (0-n)
        let rndTense = Object.keys(tenses)[randomNum4]; // returns a random tense (key) based on a generated random number
        let rndTenseExa = Object.values(tenses)[randomNum4]; // returns a random tense example (value) based on a generated random number
        //  rndTenseExa = rndTenseExa.join(' '); // changes tense examples (as an array) into a string
        */
        
        // variables holding HTML IDs to replace their content after shuffling
        let changeWord4 = document.getElementById("changeWord4"); // shuffle button ID
        let wordToChange4 = document.getElementById("tense"); // a tense-key property ID
        //wordToChange4.innerHTML = rndTense;  // works until a refresh, replacing a tense-key
        wordToChange4.innerHTML = rndTenseV; // inc. localStorage, replacing a tense-key property
       
        let exampleToChange4 = document.getElementById("tenseExample"); // a tense-value property ID
        //exampleToChange4.innerHTML = rndTenseExa; // works until a refresh, replacing a tense-value
        exampleToChange4.innerHTML = rndTenseExaV; // inc. localStorage, replacing a tense-value property
        
         
    };

    // for idioms
    function shuffleWord5() {
        
        let numOfKeys5V = Object.keys(takenObj5).length; //Qty of keys in the object
        let randomNum5V = Math.floor(Math.random() * numOfKeys5V); // A range of indexes in the given object (0-n)
        let rndIdiomV = Object.keys(takenObj5)[randomNum5V]; // returns a random idiom (key) based on a generated random number
        let rndIdiomExaV = Object.values(takenObj5)[randomNum5V]; // returns a random idiom example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys5 = Object.keys(idioms).length; //Qty of keys in the object
        let randomNum5 = Math.floor(Math.random() * numOfKeys5); // A range of indexes in the given object (0-n)
        let rndIdiom = Object.keys(idioms)[randomNum5]; // returns a random idiom (key) based on a generated random number
        let rndIdiomExa = Object.values(idioms)[randomNum5]; // returns a random idiom example (value) based on a generated random number
        //  rndIdiomExa = rndIdiomExa.join(' '); // changes tense examples (as an array) into a string
        */
        
        // variables holding HTML IDs to replace their content after shuffling
        let changeWord5 = document.getElementById("changeWord5"); // shuffle button ID
        let wordToChange5 = document.getElementById("idiom"); // an idiom-key property ID
        //wordToChange5.innerHTML = rndIdiom;  // works until a refresh, replacing an idiom-key
        wordToChange5.innerHTML = rndIdiomV; // inc. localStorage, replacing an idiom-key property
       
        let exampleToChange5 = document.getElementById("idiomExample"); // a tense-value property ID
        //exampleToChange5.innerHTML = rndIdiomExa; // works until a refresh, replacing an idiom-value
        exampleToChange5.innerHTML = rndIdiomExaV; // inc. localStorage, replacing an idiom-value property
        
         
    };
    
    // for collocations
    function shuffleWord6() {
        
        let numOfKeys6V = Object.keys(takenObj6).length; //Qty of keys in the object
        let randomNum6V = Math.floor(Math.random() * numOfKeys6V); // A range of indexes in the given object (0-n)
        let rndCollV = Object.keys(takenObj6)[randomNum6V]; // returns a random collocation (key) based on a generated random number
        let rndCollExaV = Object.values(takenObj6)[randomNum6V]; // returns a random collocation example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys6 = Object.keys(collocations).length; //Qty of keys in the object
        let randomNum6 = Math.floor(Math.random() * numOfKeys6); // A range of indexes in the given object (0-n)
        let rndColl = Object.keys(collocations)[randomNum6]; // returns a random collocation (key) based on a generated random number
        let rndCollExa = Object.values(collocations)[randomNum6]; // returns a random collocation example (value) based on a generated random number
        //  rndCollExa = rndCollExa.join(' '); // changes tense examples (as an array) into a string
        */
        
        // variables holding HTML IDs to replace their content after shuffling
        let changeWord6 = document.getElementById("changeWord6"); // shuffle button ID
        let wordToChange6 = document.getElementById("collocation"); // a collocation-key property ID
        //wordToChange6.innerHTML = rndColl;  // works until a refresh, replacing a collocation-key
        wordToChange6.innerHTML = rndCollV; // inc. localStorage, replacing a collocation-key property
       
        let exampleToChange6 = document.getElementById("collocationExample"); // a collocation-value property ID
        //exampleToChange6.innerHTML = rndCollExa; // works until a refresh, replacing a collocation-value
        exampleToChange6.innerHTML = rndCollExaV; // inc. localStorage, replacing a collocation-value property
        
         
    };



     /* 
     Global variables are declared once every load/refresh page, so they keep their values. If we want to change
     those values by onclick event we must declare new ones in functions, ideally with different variable names. 
     Invoking global variables by creating local variables inside functions (e.g. let locVar = globVar;) will not work because we will still be referring to the global ones with already set up/unchangable values. Everytime a function is called, e.g. by onclick event, that code inside is executed and terminated.
     
     */


    /* shuffling key-value pairs for EVERY chosen category after clicking a button -------------------------- */

    function shuffleAllWords() {
        
        
        
        // for nouns - creating a random number
        // inc. localStorage
        let numOfKeysV = Object.keys(takenObj).length; //Qty of keys in the object
        let randomNumV = Math.floor(Math.random() * numOfKeysV); // A range of indexes in the given object (0-n)
        let rndNounV = Object.keys(takenObj)[randomNumV]; // returns a random noun (key) based on a generated random number
        let rndNounExaV = Object.values(takenObj)[randomNumV]; // returns a random noun example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        
        let numOfKeys = Object.keys(nouns).length; //Qty of keys in the object
        let randomNum = Math.floor(Math.random() * numOfKeys); // A range of indexes in the given object (0-n)
        let rndNoun = Object.keys(nouns)[randomNum]; // returns a random noun (key) based on a generated random number
        let rndNounExa = Object.values(nouns)[randomNum]; // returns a random noun example (value) based on a generated random number
        // rndNounExa = rndNounExa.join(' '); // changes noun examples (as an array) into a string 
        */
        
        
        
        
        // for verbs - creating a random number
        // inc. localStorage
        let numOfKeys2V = Object.keys(takenObj2).length; //Qty of keys in the object
        let randomNum2V = Math.floor(Math.random() * numOfKeys2V); // A range of indexes in the given object (0-n)
        let rndVerbV = Object.keys(takenObj2)[randomNum2V]; // returns a random verb (key) based on a generated random number
        let rndVerbExaV = Object.values(takenObj2)[randomNum2V]; // returns a random verb example (value) based on a generated random number
           
        /*
        // works until a refresh, without localStorage
        let numOfKeys2 = Object.keys(verbs).length; //Qty of keys in the object
        let randomNum2 = Math.floor(Math.random() * numOfKeys2); // A range of indexes in the given object (0-n)
        let rndVerb = Object.keys(verbs)[randomNum2]; // returns a random verb (key) based on a generated random number
        let rndVerbExa = Object.values(verbs)[randomNum2]; // returns a random verb example (value) based on a generated random number
       // rndVerbExa = rndVerbExa.join(' '); // changes verb examples (as an array) into a string
        */
        

        
        // for adjectives - creating a random number
        // inc. localStorage
        let numOfKeys3V = Object.keys(takenObj3).length; //Qty of keys in the object
        let randomNum3V = Math.floor(Math.random() * numOfKeys3V); // A range of indexes in the given object (0-n)
        let rndAdjectiveV = Object.keys(takenObj3)[randomNum3V]; // returns a random adjective (key) based on a generated random number
        let rndAdjectiveExaV = Object.values(takenObj3)[randomNum3V]; // returns a random adjective example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys3 = Object.keys(adjectives).length; //Qty of keys in the object
        let randomNum3 = Math.floor(Math.random() * numOfKeys3); // A range of indexes in the given object (0-n)
        let rndAdjective = Object.keys(adjectives)[randomNum3]; // returns a random adjective (key) based on a generated random number
        let rndAdjectiveExa = Object.values(adjectives)[randomNum3]; // returns a random adjective example (value) based on a generated random number 
        //  rndAdjectiveExa = rndAdjectiveExa.join(' '); // changes adjective examples (as an array) into a string
        */
        
        // for tenses - creating a random number
        // inc. localStorage
        let numOfKeys4V = Object.keys(takenObj4).length; //Qty of keys in the object
        let randomNum4V = Math.floor(Math.random() * numOfKeys4V); // A range of indexes in the given object (0-n)
        let rndTenseV = Object.keys(takenObj4)[randomNum4V]; // returns a random tense (key) based on a generated random number
        let rndTenseExaV = Object.values(takenObj4)[randomNum4V]; // returns a random tense example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys4 = Object.keys(tenses).length; //Qty of keys in the object
        let randomNum4 = Math.floor(Math.random() * numOfKeys4); // A range of indexes in the given object (0-n)
        let rndTense = Object.keys(tenses)[randomNum4]; // returns a random tense (key) based on a generated random number
        let rndTenseExa = Object.values(tenses)[randomNum4]; // returns a random tense example (value) based on a generated random number
        //  rndTenseExa = rndTenseExa.join(' '); // changes tense examples (as an array) into a string
        */
        
        
        // for idioms - creating a random number
        // inc. localStorage
        let numOfKeys5V = Object.keys(takenObj5).length; //Qty of keys in the object
        let randomNum5V = Math.floor(Math.random() * numOfKeys5V); // A range of indexes in the given object (0-n)
        let rndIdiomV = Object.keys(takenObj5)[randomNum5V]; // returns a random idiom (key) based on a generated random number
        let rndIdiomExaV = Object.values(takenObj5)[randomNum5V]; // returns a random idiom example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys5 = Object.keys(idioms).length; //Qty of keys in the object
        let randomNum5 = Math.floor(Math.random() * numOfKeys5); // A range of indexes in the given object (0-n)
        let rndIdiom = Object.keys(idioms)[randomNum5]; // returns a random idiom (key) based on a generated random number
        let rndIdiomExa = Object.values(idioms)[randomNum5]; // returns a random idiom example (value) based on a generated random number
        //  rndIdiomExa = rndIdiomExa.join(' '); // changes tense examples (as an array) into a string
        */
        
        
        // for collocations - creating a random number
        // inc. localStorage
        let numOfKeys6V = Object.keys(takenObj6).length; //Qty of keys in the object
        let randomNum6V = Math.floor(Math.random() * numOfKeys6V); // A range of indexes in the given object (0-n)
        let rndCollV = Object.keys(takenObj6)[randomNum6V]; // returns a random collocation (key) based on a generated random number
        let rndCollExaV = Object.values(takenObj6)[randomNum6V]; // returns a random collocation example (value) based on a generated random number
        
        /*
        // works until a refresh, without localStorage
        let numOfKeys6 = Object.keys(collocations).length; //Qty of keys in the object
        let randomNum6 = Math.floor(Math.random() * numOfKeys6); // A range of indexes in the given object (0-n)
        let rndColl = Object.keys(collocations)[randomNum6]; // returns a random collocation (key) based on a generated random number
        let rndCollExa = Object.values(collocations)[randomNum6]; // returns a random collocation example (value) based on a generated random number
        //  rndCollExa = rndCollExa.join(' '); // changes tense examples (as an array) into a string
        */
        
        
        // variables holding HTML IDs to replace their content after shuffling
        
        let wordToChange = document.getElementById("noun"); // a noun-key property ID
        let exampleToChange = document.getElementById("nounExample"); // a noun-value property ID
        
        let wordToChange2 = document.getElementById("verb"); // a verb-key property ID
        let exampleToChange2 = document.getElementById("verbExample"); // a verb-value property ID
        
        let wordToChange3 = document.getElementById("adjective"); // an adjective-key property ID
        let exampleToChange3 = document.getElementById("adjectiveExample"); // an adjective-value property ID
        
        let wordToChange4 = document.getElementById("tense"); // a tense-key property ID
        let exampleToChange4 = document.getElementById("tenseExample"); // a tense-value property ID
        
        let wordToChange5 = document.getElementById("idiom"); // an idiom-key property ID
        let exampleToChange5 = document.getElementById("idiomExample"); // an idiom-value property ID
        
        let wordToChange6 = document.getElementById("collocation"); // a collocation-key property ID
        let exampleToChange6 = document.getElementById("collocationExample"); // a collocation-value property ID
    
        
        // if a given checkbox is ticked, key-value pairs will be shuffled randomly
        // inc. localStorage, if no localSorage "V" at the end of every variable must be removed
        let allTickB = document.getElementById('allTB');
        /* iterating through every checkbox assigned to its respective propery name (key); 'name' elements are taken for calculation */
        for (i = 0; i < allTickB.w.length; i++ ) {
            if (allTickB.w[i].type == 'checkbox') {
                if (allTickB.w[i].checked === true) {
                    
                    wordToChange.innerHTML = rndNounV;   
                    exampleToChange.innerHTML = rndNounExaV;
                    
                    wordToChange2.innerHTML = rndVerbV;  
                    exampleToChange2.innerHTML = rndVerbExaV;
                    
                    wordToChange3.innerHTML = rndAdjectiveV;  
                    exampleToChange3.innerHTML = rndAdjectiveExaV;
                    
                    wordToChange4.innerHTML = rndTenseV;  
                    exampleToChange4.innerHTML = rndTenseExaV;
                    
                    wordToChange5.innerHTML = rndIdiomV;  
                    exampleToChange5.innerHTML = rndIdiomExaV;
                    
                    wordToChange6.innerHTML = rndCollV;  
                    exampleToChange6.innerHTML = rndCollExaV;
                }
            }
        }
        
         
    };


// hides word examples if a slider is moved to the right (is checked) ------------------------////

function toggleSlider() {
    
    let slider = document.getElementById("mySlider");
                                         
    if (slider.checked === true) {
        document.getElementById("nounExample").style.display = "none";
        document.getElementById("verbExample").style.display = "none";
        document.getElementById("adjectiveExample").style.display = "none";
        document.getElementById("tenseExample").style.display = "none";
        document.getElementById("idiomExample").style.display = "none";
        document.getElementById("collocationExample").style.display = "none";
    } else {
        document.getElementById("nounExample").style.display = "block";
        document.getElementById("verbExample").style.display = "block";
        document.getElementById("adjectiveExample").style.display = "block";
        document.getElementById("tenseExample").style.display = "block";
        document.getElementById("idiomExample").style.display = "block";
        document.getElementById("collocationExample").style.display = "block";
    }
}


/* hides certain div content boxes whilst loading/refreshing a page to keep a window clear */

function hideCertain() {
    
    document.getElementById("nounCheck").style.display = "none";
    document.getElementById("verbCheck").style.display = "none";
    document.getElementById("adjectiveCheck").style.display = "none";
    document.getElementById("tenseCheck").style.display = "none";
    document.getElementById("idiomCheck").style.display = "none";
    document.getElementById("collocationCheck").style.display = "none";
    
    document.getElementById("newInfo").style.display = "none";
    document.getElementById("delSearch").style.display = "none";
    //appendArrays(); // returns the function whilst opening/refreshing a page, deprecated but might be required
    appendArrays2(); /* returns the function whilst opening/refreshing a page, must be hidden
                     because this function has an assigned 'load' eventListener and can be triggered
                     when the function is hidden */
    document.getElementById("objDescr").style.display = "none";
    document.getElementById("exaDescr").style.display = "none"; 
    document.getElementById("delButton").style.display = "none"; 
};


window.onload = hideCertain;
//window.addEventListener('load',addAllInfo);
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', addAllInfo);
});  /* works but needs a refresh after loading a page to let other functionalities work - creates LocalStorage after a page load if it hasn't been created yet */





/* enables to hide and show the div box of adding new content after clicking back the button "Add/Edit content" */

function addMoreContent() {
   
    // a toggle effect
    if (document.getElementById("newInfo").style.display === "block") {
        document.getElementById("newInfo").style.display = "none"
    } else {
        document.getElementById("newInfo").style.display = "block"
    }
        
}


/* a div box enabling to add new content (key-value pairs) */

function addAllInfo() {
    
    // in the <option> tag, value is a string (type of) of "value"
    
    const chosenObject = document.getElementById("categories").value; // choosing a category to add some content
    const addedPropName = (document.getElementById("inpword").value).toLowerCase(); /* Inserted property name will be always transformed into small letters. It will prevent from unintentional adding words with different size of letters e.g. "perspectivE" */
    const addedPropValue = document.getElementById("inpexample").value; // adding property value (an example)
    const addConButton = document.getElementById("addInfo"); // a button submitting a new content
    
    
        /*
        // works until a refresh page, might be useful yet
        // creates new virtual objects based on the predefined ones and newly added
    
        if (chosenObject === 'nouns' && addedPropName !== '' && addedPropValue !== '') {
            
            //const updatedObject = Object.assign(nouns, { [addedPropName]: addedPropValue} );
            Object.assign(nouns, { [addedPropName]: addedPropValue} );
        } else if (chosenObject === 'verbs' && addedPropName !== '' && addedPropValue !== '') {
            Object.assign(verbs, { [addedPropName]: addedPropValue} );
        } else if (chosenObject === 'adjectives' && addedPropName !== '' && addedPropValue !== '') {
            Object.assign(adjectives, { [addedPropName]: addedPropValue} );
        } else if (chosenObject === 'tenses' && addedPropName !== '' && addedPropValue !== '') {
            Object.assign(tenses, { [addedPropName]: addedPropValue} );
        } else if (chosenObject === 'idioms' && addedPropName !== '' && addedPropValue !== '') {
            Object.assign(idioms, { [addedPropName]: addedPropValue} );
        } else if (chosenObject === 'collocations' && addedPropName !== '' && addedPropValue !== '') {
            Object.assign(collocations, { [addedPropName]: addedPropValue} );
        } else {
            alert('Choose a proper category. Words and examples should NOT be numbers.');   
        }*/
    
    
    
        // for localStorage
        // creates new, virtual objects based on the predefined ones and newly added
        // if (localStorage === null) doesn't work
        // if (localStorage) ?
    
    
    if (localStorage === null || takenObj === null || takenObj2 === null || takenObj3 === null || takenObj4 === null
        || takenObj5 === null || takenObj6 === null) {
    
        
        if (chosenObject === 'nouns' && addedPropName !== '' && addedPropValue !== '') {
            
            //const updatedObject = Object.assign(nouns, { [addedPropName]: addedPropValue} );
            
            let virObj = Object.assign(nouns, { [addedPropName]: addedPropValue} );
            localStorage.setItem('nounsJSON', JSON.stringify(virObj));
        } else if (chosenObject === 'verbs' && addedPropName !== '' && addedPropValue !== '') {
            let virObj2 = Object.assign(verbs, { [addedPropName]: addedPropValue} );
            localStorage.setItem('verbsJSON', JSON.stringify(virObj2));
        } else if (chosenObject === 'adjectives' && addedPropName !== '' && addedPropValue !== '') {
            let virObj3 = Object.assign(adjectives, { [addedPropName]: addedPropValue} );
            localStorage.setItem('adjectivesJSON', JSON.stringify(virObj3));
        } else if (chosenObject === 'tenses' && addedPropName !== '' && addedPropValue !== '') {
            let virObj4 = Object.assign(tenses, { [addedPropName]: addedPropValue} );
            localStorage.setItem('tensesJSON', JSON.stringify(virObj4));
        } else if (chosenObject === 'idioms' && addedPropName !== '' && addedPropValue !== '') {
            let virObj5 = Object.assign(idioms, { [addedPropName]: addedPropValue} );
            localStorage.setItem('idiomsJSON', JSON.stringify(virObj5));
        } else if (chosenObject === 'collocations' && addedPropName !== '' && addedPropValue !== '') {
            let virObj6 = Object.assign(collocations, { [addedPropName]: addedPropValue} );
            localStorage.setItem('collocationsJSON', JSON.stringify(virObj6));
        } 
         /*  else if for creating a virtual container if localStorage is empty and no text was typed in
         OR else if also for creating a virtual container if localStorage is empty, BUT after a refresh */
          else if (chosenObject && addedPropName === '' && addedPropValue === '') {
            let virObjx = Object.assign(nouns, {"testNoun": "tN"});
            localStorage.setItem('nounsJSON', JSON.stringify(virObjx));
              
            let virObj2x = Object.assign(verbs, {"testVerb": "tV"});
            localStorage.setItem('verbsJSON', JSON.stringify(virObj2x));
              
            let virObj3x = Object.assign(adjectives, {"testAdj": "tA"});
            localStorage.setItem('adjectivesJSON', JSON.stringify(virObj3x));
            
            let virObj4x = Object.assign(tenses, {"testTense": "tT"});
            localStorage.setItem('tensesJSON', JSON.stringify(virObj4x));  
              
            let virObj5x = Object.assign(idioms, {"testIdiom": "tI"});
            localStorage.setItem('idiomsJSON', JSON.stringify(virObj5x));
              
            let virObj6x = Object.assign(collocations, {"testColl": "tC"} );
            localStorage.setItem('collocationsJSON', JSON.stringify(virObj6x));
        } 
        
        else {
            alert('DO NOT change/type anything in: "Choose input category:" / "Your vocab:" / "Your example:".');       
        } 
        //alert('empty localSorage');
    
 } else if (localStorage !== null || takenObj !== null || takenObj2 !== null || takenObj3 !== null 
            || takenObj4 === null || takenObj5 !== null || takenObj6 !== null) {
        
        if (chosenObject === 'nouns' && addedPropName !== '' && addedPropValue !== '') {
            //let editObj = takenObj[addedPropName] = addedPropValue;
            //let takeInfoTest = localStorage.getItem('nounsJSON'); // can be outside of the if...else
            //let takenObjTest = JSON.parse(takeInfoTest); // the same as above
            let editObj = Object.assign(takenObj, { [addedPropName]: addedPropValue} );
            localStorage.setItem('nounsJSON', JSON.stringify(editObj));
        } else if (chosenObject === 'verbs' && addedPropName !== '' && addedPropValue !== '') {
            let editObj2 = Object.assign(takenObj2, { [addedPropName]: addedPropValue} );
            localStorage.setItem('verbsJSON', JSON.stringify(editObj2));
        } else if (chosenObject === 'adjectives' && addedPropName !== '' && addedPropValue !== '') {
            let editObj3 = Object.assign(takenObj3, { [addedPropName]: addedPropValue} );
            localStorage.setItem('adjectivesJSON', JSON.stringify(editObj3));
        } else if (chosenObject === 'tenses' && addedPropName !== '' && addedPropValue !== '') {
            let editObj4 = Object.assign(takenObj4, { [addedPropName]: addedPropValue} );
            localStorage.setItem('tensesJSON', JSON.stringify(editObj4));
        } else if (chosenObject === 'idioms' && addedPropName !== '' && addedPropValue !== '') {
            let editObj5 = Object.assign(takenObj5, { [addedPropName]: addedPropValue} );
            localStorage.setItem('idiomsJSON', JSON.stringify(editObj5));
        } else if (chosenObject === 'collocations' && addedPropName !== '' && addedPropValue !== '') {
            let editObj6 = Object.assign(takenObj6, { [addedPropName]: addedPropValue} );
            localStorage.setItem('collocationsJSON', JSON.stringify(editObj6));
        } /*else {
            alert('Choose a proper category. Words and examples should NOT be numbers- just loading.');  // must be changed  
        } */
        //alert('localStorage has something');
     
 } else {
     alert('an error with localStorage');
 }
    
    
    // reset input data after submitting
        
    document.getElementById("categories").value = 'Choose a category';
    document.getElementById("inpword").value = '';
    document.getElementById("inpexample").value = '';
 
 };


// The getItem() method returns value of the specified Storage Object item as a text.
    
    //let obj = JSON.parse(text); // converting object (as a string) into a proper JS object 


// global objects holding additionally added virtual key & value pairs
// for extracting data
let takeInfo = localStorage.getItem('nounsJSON'); // for nouns, returns the Storage Object item as a text
let takenObj = JSON.parse(takeInfo); // for nouns, converting object (as a string) into a proper JS object

let takeInfo2 = localStorage.getItem('verbsJSON'); // for verbs, , returns the Storage Object item as a text
let takenObj2 = JSON.parse(takeInfo2); // for verbs, converting object (as a string) into a proper JS object

let takeInfo3 = localStorage.getItem('adjectivesJSON'); // for adjectives, returns the Storage Object item as a text
let takenObj3 = JSON.parse(takeInfo3); // for adjectives, converting object (as a string) into a proper JS object

let takeInfo4 = localStorage.getItem('tensesJSON'); // for tenses, returns the Storage Object item as a text
let takenObj4 = JSON.parse(takeInfo4); // for tenses, converting object (as a string) into a proper JS object

let takeInfo5 = localStorage.getItem('idiomsJSON'); // for idioms, returns the Storage Object item as a text
let takenObj5 = JSON.parse(takeInfo5); // for idioms, converting object (as a string) into a proper JS object

let takeInfo6 = localStorage.getItem('collocationsJSON');// for collocations, returns the Storage Object item as a text
let takenObj6 = JSON.parse(takeInfo6); // for collocations, converting object (as a string) into a proper JS object



/* enables to hide and show the div box of deleting/searching content after clicking back the button "Delete/Search content" */
function remAndSearch() {
      // a toggle effect
    if (document.getElementById("delSearch").style.display === "block") {
        document.getElementById("delSearch").style.display = "none"
    } else {
        document.getElementById("delSearch").style.display = "block"
    }
}



        
/* The event listener that is being executed once the whole HTML content is loaded */    
document.addEventListener('DOMContentLoaded', function () {
    //document.getElementById("addInfo").addEventListener('click', appendArrays2);
    document.getElementById("words").addEventListener('load', appendArrays2);
});  



// returns a list of all property names (from every object) WITH selecting a category object, with a page load and every object change (from a drop-down list)

function appendArrays2() {
    
    /*
    // works until a refresh page, might be useful yet
    let nounKeys2 = Object.keys(nouns);
    let verbKeys2 = Object.keys(verbs);
    let adjectiveKeys2 = Object.keys(adjectives);
    let tenseKeys2 = Object.keys(tenses);
    let idiomKeys2 = Object.keys(idioms);
    let collocationKeys2 = Object.keys(collocations);
    let mergedArrays2 = nounKeys2.concat(verbKeys2, adjectiveKeys2, tenseKeys2, idiomKeys2, collocationKeys2);*/
    
    // for localStorage
    // local variables holding property names (keys) from virual objects
    let nounKeys2V = Object.keys(takenObj);
    let verbKeys2V = Object.keys(takenObj2);
    let adjectiveKeys2V = Object.keys(takenObj3);
    let tenseKeys2V = Object.keys(takenObj4);
    let idiomKeys2V = Object.keys(takenObj5);
    let collocationKeys2V = Object.keys(takenObj6);
    let mergedArrays2V = nounKeys2V.concat(verbKeys2V, adjectiveKeys2V, tenseKeys2V, idiomKeys2V, collocationKeys2V);
    
    /* local variables that will be reassigned (always after every load/refresh) and holding new virtual values as a drop-down list */
    let newOptions = '';
    let nounOptions = '';
    let verbOptions = '';  
    let adjOptions = '';
    let tenseOptions = '';
    let idiomOptions = '';
    let collOptions = '';
    
    const chooseObject = document.getElementById("moreCateg").value; // returns a chosen object name
    
    
    // creating a virtual drop-down list of property names based on a chosen category
    if (chooseObject === 'All') {
    
    for(let i = 0; i < mergedArrays2V.length; i++) {
        newOptions = newOptions + '<option>'+ mergedArrays2V[i] +'</option>';
    } 
       document.getElementById("words").innerHTML = newOptions;
    } 
    else if (chooseObject === 'nouns') {
        for(let j = 0; j < nounKeys2V.length; j++) {
        nounOptions = nounOptions + '<option>'+ nounKeys2V[j] +'</option>';
    }    
    document.getElementById("words").innerHTML = nounOptions;
    } 
    else if (chooseObject === 'verbs') {
        for(let k = 0; k < verbKeys2V.length; k++) {
        verbOptions = verbOptions + '<option>'+ verbKeys2V[k] +'</option>';
    } 
       document.getElementById("words").innerHTML = verbOptions;
    }
    else if (chooseObject === 'adjectives') {
        for(let n = 0; n < adjectiveKeys2V.length; n++) {
        adjOptions = adjOptions + '<option>'+ adjectiveKeys2V[n] +'</option>';
    } 
       document.getElementById("words").innerHTML = adjOptions;
    }  
    else if (chooseObject === 'tenses') {
        for(let h = 0; h < tenseKeys2V.length; h++) {
        tenseOptions = tenseOptions + '<option>'+ tenseKeys2V[h] +'</option>';
    } 
       document.getElementById("words").innerHTML = tenseOptions;
    }  
    else if (chooseObject === 'idioms') {
        for(let b = 0; b < idiomKeys2V.length; b++) {
        idiomOptions = idiomOptions + '<option>'+ idiomKeys2V[b] +'</option>';
    } 
       document.getElementById("words").innerHTML = idiomOptions;
    }
    else if (chooseObject === 'collocations') {
        for(let w = 0; w < collocationKeys2V.length; w++) {
        collOptions = collOptions + '<option>'+ collocationKeys2V[w] +'</option>';
    } 
       document.getElementById("words").innerHTML = collOptions;
    }
    
}    


/* The event listener that is being executed once the whole HTML content is loaded */ 
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("takeinp").addEventListener('change', findObject);
});


/* Shows key-value pairs in the Delete/Search div box after choosing a category (object name) from a list */

function findObject() {
    
    /*
    // works until a refresh page, might be useful yet
    let nounKeys3 = Object.keys(nouns);
    let verbKeys3 = Object.keys(verbs);
    let adjectiveKeys3 = Object.keys(adjectives);
    let tenseKeys3 = Object.keys(tenses);
    let idiomKeys3 = Object.keys(idioms);
    let collocationKeys3 = Object.keys(collocations);
    */
    
    
    // for localStorage
    // local variables holding property values (examples) from virual key arrays
    let nounKeys3V = Object.keys(takenObj);
    let verbKeys3V = Object.keys(takenObj2);
    let adjectiveKeys3V = Object.keys(takenObj3);
    let tenseKeys3V = Object.keys(takenObj4);
    let idiomKeys3V = Object.keys(takenObj5);
    let collocationKeys3V = Object.keys(takenObj6);
    
    const chooseObject3 = document.getElementById("moreCateg").value; // returns a chosen object name
    const drdownword = document.getElementById("takeinp").value;// returns a chosen property name (key) from a search bar
    const obDes = document.getElementById("objDescr"); /* returns an object name of a chosen property name (key) from a search bar if a particular object name was chosen, except the "All" option */
    let obDesVal = ''; /* returns an object name of a chosen property name (key) from a search bar if the "All" object name was chosen */
    const exDes = document.getElementById("exaDescr"); // return a property value (example)
    const delButton = document.getElementById("delButton"); // returns an ID of the button delete a marked property
    
    // added 'V' to arrays with keys as localStorage, must be removed if there's no localStorage
    // below variables return an index of an inserted property name (key) from their virtual key arrays
    const nounInd = nounKeys3V.indexOf(drdownword);
    const verbInd = verbKeys3V.indexOf(drdownword);
    const adjInd = adjectiveKeys3V.indexOf(drdownword);
    const tenseInd = tenseKeys3V.indexOf(drdownword);
    const idiomInd = idiomKeys3V.indexOf(drdownword);
    const collInd = collocationKeys3V.indexOf(drdownword);
    
    
    
    // 'V' must be removed if there's no localStorage
    // "If... else" statement for showing key-value pairs + its delete button if "All" category is chosen
    if (chooseObject3 === 'All' && nounKeys3V.includes(drdownword)) {
        obDes.innerHTML = 'noun';
        obDesVal = obDes.innerHTML; // e.g. if a list includes a noun, then it's an object of nouns
        obDes.style.display = "block";
        // additional styling
        obDes.style.borderColor = "red";
        
        exDes.style.display = "block";
        delButton.style.display = "block";
    } else if (chooseObject3 === 'All' && verbKeys3V.includes(drdownword)) {
        obDes.innerHTML = 'verb';
        obDesVal = obDes.innerHTML;
        obDes.style.display = "block";
        // additional styling
        obDes.style.borderColor = "dodgerblue";
        
        exDes.style.display = "block";
        delButton.style.display = "block";
    } else if (chooseObject3 === 'All' && adjectiveKeys3V.includes(drdownword)) {
        obDes.innerHTML = 'adjective';
        obDesVal = obDes.innerHTML;
        obDes.style.display = "block";
        // additional styling
        obDes.style.borderColor = "limegreen";
        
        exDes.style.display = "block";
        delButton.style.display = "block";
    } else if (chooseObject3 === 'All' && tenseKeys3V.includes(drdownword)) {
        obDes.innerHTML = 'tense';
        obDesVal = obDes.innerHTML;
        obDes.style.display = "block";
        // additional styling
        obDes.style.borderColor = "blueviolet";
        
        exDes.style.display = "block";
        delButton.style.display = "block";
    } else if (chooseObject3 === 'All' && idiomKeys3V.includes(drdownword)) {
        obDes.innerHTML = 'idiom';
        obDesVal = obDes.innerHTML;
        obDes.style.display = "block";
        // additional styling
        obDes.style.borderColor = "grey";
        
        exDes.style.display = "block";
        delButton.style.display = "block";
    } else if (chooseObject3 === 'All' && collocationKeys3V.includes(drdownword)) {
        obDes.innerHTML = 'collocation';
        obDesVal = obDes.innerHTML;
        obDes.style.display = "block";
        // additional styling
        obDes.style.borderColor = "saddlebrown";
        
        exDes.style.display = "block";
        delButton.style.display = "block";
    }
    
    
    
    /* "If... else" statement for showing key-value pairs + its delete button based on an inserted search bar value and chosen category name */
    if ((drdownword === '' && chooseObject3 !== 'All') || (drdownword === '' && chooseObject3 === 'All')) {
        obDes.style.display = "none";
        exDes.style.display = "none";
        delButton.style.display = "none";
    } else if (drdownword !== '' && chooseObject3 !== 'All') {
        obDes.style.display = "none";
        exDes.style.display = "block";
        delButton.style.display = "block";
        
    }
    
    // for localStorage main object names (e.g. nouns, verbs) are replaced with virtual ones, starting from: 'takenObj'
    /* "If...else" statement for showing property values (examples) if "All" or specific categories are chosen */
     if (chooseObject3 === 'nouns') {
        exDes.innerHTML = Object.values(takenObj)[nounInd];
     } else if (chooseObject3 === 'verbs') {
        exDes.innerHTML = Object.values(takenObj2)[verbInd]; 
     } else if (chooseObject3 === 'adjectives') {
        exDes.innerHTML = Object.values(takenObj3)[adjInd]; 
     } else if (chooseObject3 === 'tenses') {
        exDes.innerHTML = Object.values(takenObj4)[tenseInd]; 
     } else if (chooseObject3 === 'idioms') {
        exDes.innerHTML = Object.values(takenObj5)[idiomInd]; 
     } else if (chooseObject3 === 'collocations') {
        exDes.innerHTML = Object.values(takenObj6)[collInd]; 
     }
    else if (chooseObject3 === 'All' && obDesVal === 'noun') {
        exDes.innerHTML = Object.values(takenObj)[nounInd];
     } else if (chooseObject3 === 'All' && obDesVal === 'verb') {
        exDes.innerHTML = Object.values(takenObj2)[verbInd]; 
     } else if (chooseObject3 === 'All' && obDesVal === 'adjective') {
        exDes.innerHTML = Object.values(takenObj3)[adjInd]; 
     } else if (chooseObject3 === 'All' && obDesVal === 'tense') {
        exDes.innerHTML = Object.values(takenObj4)[tenseInd]; 
     } else if (chooseObject3 === 'All' && obDesVal === 'idiom') {
        exDes.innerHTML = Object.values(takenObj5)[idiomInd]; 
     } else if (chooseObject3 === 'All' && obDesVal === 'collocation') {
        exDes.innerHTML = Object.values(takenObj6)[collInd]; 
     }
  
}


// The delete operator should not be used on predefined JavaScript object properties. It can crash an application.
/* removes a selected property (key-value pair) */

function delAllProp() {
    
    
     /*
    // works until a refresh page, might be useful yet
    let nounKeys5 = Object.keys(nouns);
    let verbKeys5 = Object.keys(verbs);
    let adjectiveKeys5 = Object.keys(adjectives);
    let tenseKeys5 = Object.keys(tenses);
    let idiomKeys5 = Object.keys(idioms);
    let collocationKeys5 = Object.keys(collocations);
    */
    
    // for localStorage
    // local variables holding property values (examples) from virual key arrays
    let nounKeys5V = Object.keys(takenObj);
    let verbKeys5V = Object.keys(takenObj2);
    let adjectiveKeys5V = Object.keys(takenObj3);
    let tenseKeys5V = Object.keys(takenObj4);
    let idiomKeys5V = Object.keys(takenObj5);
    let collocationKeys5V = Object.keys(takenObj6);
    
    const chooseObject5 = document.getElementById("moreCateg").value; // returns a chosen object name
    const drdownword5 = document.getElementById("takeinp").value;// returns a chosen property name (key) from a search bar
    
    
     // for localStorage
    // delete nouns.drdownword5 wasn't recognized, because an inserted property name was a variable holding it, not a direct property name
    //delete localStorage.adjectivesJSON;(or other object) // works but removes the whole virtual object
    /* deleting a chosen property name from a virtual object and overridding it straight after a deletion to localStorage */
    /* "If...else" statement for showing property key-value pairs if "All" or specific categories are chosen */
    if (chooseObject5 === 'nouns') {
        delete takenObj[drdownword5]; 
        localStorage.setItem('nounsJSON', JSON.stringify(takenObj));
    } else if (chooseObject5 === 'verbs') {
        delete takenObj2[drdownword5];
        localStorage.setItem('verbsJSON', JSON.stringify(takenObj2));
    } else if (chooseObject5 === 'adjectives') {
        delete takenObj3[drdownword5];
        localStorage.setItem('adjectivesJSON', JSON.stringify(takenObj3));     
    } else if (chooseObject5 === 'tenses') {
        delete takenObj4[drdownword5];
        localStorage.setItem('tensesJSON', JSON.stringify(takenObj4));
    } else if (chooseObject5 === 'idioms') {
        delete takenObj5[drdownword5];
        localStorage.setItem('idiomsJSON', JSON.stringify(takenObj5));
    } else if (chooseObject5 === 'collocations') {
        delete takenObj6[drdownword5];
        localStorage.setItem('collocationsJSON', JSON.stringify(takenObj6));
    }
    // added 'V' to variables as localStorage, must be removed if there's no localStorage
    else if (chooseObject5 === 'All' && nounKeys5V.includes(drdownword5)) {
        delete takenObj[drdownword5];
        localStorage.setItem('nounsJSON', JSON.stringify(takenObj));
    } else if (chooseObject5 === 'All' && verbKeys5V.includes(drdownword5)) {
        delete takenObj2[drdownword5];
        localStorage.setItem('verbsJSON', JSON.stringify(takenObj2));
    } else if (chooseObject5 === 'All' && adjectiveKeys5V.includes(drdownword5)) {
        delete takenObj3[drdownword5];
        localStorage.setItem('adjectivesJSON', JSON.stringify(takenObj3));
    } else if (chooseObject5 === 'All' && tenseKeys5V.includes(drdownword5)) {
        delete takenObj4[drdownword5];
        localStorage.setItem('tensesJSON', JSON.stringify(takenObj4));
    } else if (chooseObject5 === 'All' && idiomKeys5V.includes(drdownword5)) {
        delete takenObj5[drdownword5];
        localStorage.setItem('idiomsJSON', JSON.stringify(takenObj5));
    } else if (chooseObject5 === 'All' && collocationKeys5V.includes(drdownword5)) {
        delete takenObj6[drdownword5];
        localStorage.setItem('collocationsJSON', JSON.stringify(takenObj6));
    }
    
    
    /*
     // works until a refresh, currently deprecated
    // delete nouns.drdownword5 wasn't recognized, because an inserted property name was a variable holding it, not a direct property name
    if (chooseObject5 === 'nouns') {
        delete nouns[drdownword5];
    } else if (chooseObject5 === 'verbs') {
        delete verbs[drdownword5];
    } else if (chooseObject5 === 'adjectives') {
        delete adjectives[drdownword5];
    } else if (chooseObject5 === 'tenses') {
        delete tenses[drdownword5];
    } else if (chooseObject5 === 'idioms') {
        delete idioms[drdownword5];
    } else if (chooseObject5 === 'collocations') {
        delete collocations[drdownword5];
    }
    
    else if (chooseObject5 === 'All' && nounKeys5.includes(drdownword5)) {
        delete nouns[drdownword5];
    } else if (chooseObject5 === 'All' && verbKeys5.includes(drdownword5)) {
        delete verbs[drdownword5];
    } else if (chooseObject5 === 'All' && adjectiveKeys5.includes(drdownword5)) {
        delete adjectives[drdownword5];
    } else if (chooseObject5 === 'All' && tenseKeys5.includes(drdownword5)) {
        delete tenses[drdownword5];
    } else if (chooseObject5 === 'All' && idiomKeys5.includes(drdownword5)) {
        delete idioms[drdownword5];
    } else if (chooseObject5 === 'All' && collocationKeys5.includes(drdownword5)) {
        delete collocations[drdownword5];
    }
    */

    
    // reset input data after submitting
        
    document.getElementById("moreCateg").value = 'All';
    document.getElementById("takeinp").value = '';
    document.getElementById("exaDescr").style.display = "none";
    document.getElementById("objDescr").style.display = "none";
}


/* shows an explanation (pop-up) to a given tense after clicking the button */

function switchOn() {
    
       
    const tenseKey = document.getElementById('tense').innerHTML; // a property name (tense) div box
    const overlayBack = document.getElementById('overlay'); // a div box containing an overlay
    // below variables refer to every tense ID
    const preSimple = document.getElementById('actCont'); // tense #1
    const preConti = document.getElementById('conTense'); // tense #2
    const prePerf = document.getElementById('presPerf'); // tense #3
    const futSim = document.getElementById('futSimple'); // tense #4
    const pasSim = document.getElementById('pasSimple'); // tense #5
    const pasConti = document.getElementById('pasCont'); // tense #6
    
    // once the button is clicked, an overlay background appears, but it's "behind" a pop-up wiondow
    overlayBack.style.display = "block";
    
    // enables to show a correct pop-up window (content) based on a chosen tense
    
    if (tenseKey === 'Present Simple') {
        preSimple.style.display = "block";
    } else if (tenseKey === 'Present Continuous') {
        preConti.style.display = "block";
    } else if (tenseKey === 'Present Perfect') {
        prePerf.style.display = "block";
    } else if (tenseKey === 'Future Simple') {
        futSim.style.display = "block";
    } else if (tenseKey === 'Past Simple') {
        pasSim.style.display = "block";
    } else if (tenseKey === 'Past Continuous') {
        pasConti.style.display = "block";
    }
 
}

/* hides an explanation (pop-up) to a given tense after clicking the button */

function switchOff() {
    
    
    const overlayBack2 = document.getElementById('overlay'); // a div box containing an overlay
    // below variables refer to every tense ID
    const preSimple2 = document.getElementById('actCont'); // tense #1
    const preConti2 = document.getElementById('conTense'); // tense #2
    const prePerf2 = document.getElementById('presPerf'); // tense #3
    const futSim2 = document.getElementById('futSimple'); // tense #4
    const pasSim2 = document.getElementById('pasSimple'); // tense #5
    const pasConti2 = document.getElementById('pasCont'); // tense #6
    
    /* hides an opened pop-up window and the overlay after clicking an "X" small button 
    in the upper-right corner of a pop-up window  */
    
    if (preSimple2.style.display === "block") {
        preSimple2.style.display = "none";
        overlayBack2.style.display = "none";
    } else if (preConti2.style.display === "block") {
        preConti2.style.display = "none";
        overlayBack2.style.display = "none";
    } else if (prePerf2.style.display === "block") {
        prePerf2.style.display = "none";
        overlayBack2.style.display = "none";
    } else if (futSim2.style.display === "block") {
        futSim2.style.display = "none";
        overlayBack2.style.display = "none";
    } else if (pasSim2.style.display === "block") {
        pasSim2.style.display = "none";
        overlayBack2.style.display = "none";
    } else if (pasConti2.style.display === "block") {
        pasConti2.style.display = "none";
        overlayBack2.style.display = "none";
    }
}























