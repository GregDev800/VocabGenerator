/* eslint-env es6 */
/* eslint-disable */

// questions extracted from the website: http://iteslj.org/questions/
const questions = {
    
    Emotions: ['Do you think men and women show their angry differently?',
               'Do you think you have habits that annoy other people?',
               'What annoys you about yourself?',
               'What do you usually do when you get angry?',
               'Does it upset or annoy you when a beggar asks you for money?',
               'Does it annoy you when someone interrupts you when you are speaking?',
               'How do you react when you see something frightening?',
               'Are you afraid of giving a speech in public? Explain why you are or aren\'t.',
               'What are the three most important things for you to be happy?',
               'Do you wake up happy every morning? Explain why you do or do not.',
              ],
    
    Accidents: ['What is an effective way of dealing with problems?',
                'What dangers can be found in the kitchen that can cause accidents?',
                'What can be done to prevent bathroom accidents?',
                'What thing did you say to someone, by mistake, that you regret right now?',
               'What do you do to prevent doing some future accidents that had happened before?',
               'What can be done throughout the house to prevent accidents?',
               'Have you ever had an accident that you cannot forget about it? Tell about that event.',
               'Do you thing that every accident can be avoided?',
               'Can you learn lessons from occuring accidents?',
               'Have you ever had a case while you were content that a particular accident took place?',
               ],
    
    Advertising: ['What is the most shocking advertisement you have seen?',
                  'Is there truth in advertising?',
                  'What are the harmful and the beneficial effects of advertising?',
                  'Do you think advertising should be allowed to interrupt TV or radio programs? What are the alternatives?',
                'Can you remember an advertising campaign that caught your attention?',
                'How easy do you think it is to influence children with advertising?',
                'Do political parties in (country) use TV advertising? If so, should they?',
                'What is the best form of advertising?',
                'Think of an ad you think is good or funny and tell about it.',
                'How would you advertise something you wanted to sell?',
                 ],
    
    Pets: ['If you have a pet, where did you get it from?',
           'Are you frightened of spiders? What do you do if you see one?',
           'Do you think people should buy and wear fur coats?',
           'Did you grow up with pets in your home?',
            'What are the pros and cons of keeping a pet?',
            'Do you know someone who owns an unusual pet?',
            'How do you feel about the use of animals for medical research?',
            'Do you think it is okay to eat meat? Do you know any vegetarians?',
            'Have you ever seen a dog that helps people, such as one to assist a blind person or a policeman?',
            'What can children learn by having a pet?',
          ],
    
    Behaviour: ['Do you feel bad after you have an argument?',
                'How do you feel when someone disagrees with everything you have to say?',
                'Were you a well-behaved child?',
                'Are hand gestures useful in an argument?',
               'Do you think it\'s disrespectful to argue with your elders?',
               'Is it important to surround yourself with good people?',
               'How can friends have a bad influence on you?',
               'How has the media affected society? Have social media made society better or worse?',
               'Should you always be on your best behavior?',
               'Should people act on their feelings? If you are in a bad mood, can people around you tell?',
               ],
    
    Beauty: ['Is it better to be physically attractive or wealthy?',
                'Do you think people should have cosmetic surgery to enhance their looks?',
                'What are some beauty tips that you could share?',
                'Do you think beauty affects self-esteem?',
               'Have you ever noticed anyone ever feeling pressured to be more beautiful?',
               'What kind of body piercing, if any, do you feel are acceptable?',
               'What makes one person more attractive than another?',
               'Do you think one gender or group worries more about beauty than another?',
               'What are some of the strangest fashions you have seen?',
               'What kind of clothes do you usually wear?',
               ],
    
    Chores: ['Can you name some chores that need to be done everyday?',
                'Which chores do you not like to do.',
                'Can you think of some dangerous chores that you can\'t do?',
                'Do you get paid for doing chores?',
               'What are some chores you do outside your house?',
               'Have you ever had an empty fridge for a long time only because you were too lazy to go grocery shopping?',
               'How does/ or did your family decide who does/did various chores around the house?',
               'What chores are your responsibility?',
               'What is something you hate doing when you get home?',
               'Do you like to clean up your room?',
               ],
    
    Dreams: ['Do you usually remember your dreams? Why or why not? Describe some of them.',
                'Do you generally have pleasant dreams or nightmares?',
                'Do you usually dream in black and white or in color?',
                'Have you ever had or heard of a dream that foretold the future?',
               'Do you have any goals that you feel are unrealistic?',
               'How would you feel if you failed to achieve any of your goals?',
               'Is it important to set goals and having dreams?',
               'How would you describe motivation?',
               'What kind of success do you want in the future in your life?',
               'Do you have an English goal? Please give more details.',
               ],
    
    Food: ['Are there any foods that you wouldn\'t eat as a child that you eat now?',
                'Are you concerned about your daily calorie intake when choosing something to eat?',
                'What food do you hate? Why do you hate it?',
                'Do you always eat vegetables? If so, which and why?',
               'Do you bring your lunch to school/workplace or buy ready-to-eat food?',
               'Do you ever skip breakfast? If so, how often and why?',
               'Do you know someone who struggles with an eating disorder?',
               'What kind of foreign food do you like to eat?',
               'Do you often eat out? Provide reasons.',
               'Do you think fast food, soda and sweets should be sold in school cafeterias?',
               ],
    
    Problems: ['Are there many homeless people where you live or lived before?',
                'Do you think people should be allowed to smoke in public buildings?',
                'Have you ever known someone with an addiction, if so, what kind of?',
                'Do immigrants have a good or bad reputation in your part of the country?',
               'What are some reasons that people become homeless?',
               'Who takes care of the elderly when they are no longer able to care for themselves?',
               'Is it morally right to spend a lot of money on pets, rather than helping people in need?',
               'Why are some countries poor?',
               'Should the government punish those who write graffiti?',
               'Do you feel uncomfortable leaving no-tips for a waiter/waitress? Why?',
               ],
    
    Family: ['Are friends more important than family? What do you think?',
                'Are you pressured by your family to act in a certain way?',
                'Do you like your family? Why or why not?',
                'Do you look more like your mother or your father?',
               'Do you usually have any influence on family matters?',
               'How big is your family?',
               'How often is your entire family together?',
               'What is the best memory you have of your family doing something together?',
               'What would you change about your childhood?',
               'Should children help with the housework?',
               ],
    
    ['Tell me about...']: ['Can you tell about someone you dislike?',
                            'Can you tell about goals you have?',
                            'Can you tell about a time when you were truly happy?',
                            'Tell me about a goal that you achieved for yourself.',
                            'Can you tell about something delicious?',
                           'Can you tell about something boring?',
                           'Can you tell me about a teacher you had?',
                           'Can you tell me about something you regret?',
                           'Can you tell me about your favorite book?',
                           'Can you tell me about the worst punishment you had when you were a child?',
                           'Can you tell me about someone you admire?',
                           'Can you tell me about a country or place you would like to visit and why?',
                           'Can you tell me about something you would happily do again?',
                           'Can you tell me about your favorite movie?',
                           'Can you tell me about your home town?',
                           'Can you tell me about something you would never do, if you have chance to come back life again?',
                           'Can you tell me about something that scares you?',
                           'Can you tell me about a recent embarrassing moment you\'ve had lately?',
                           'Can you tell me about a time you felt really proud?',
                           ],
    
    
    
}


    

/* hides below div boxes */
function hideBoxes() {
    
    document.getElementById("practBox").style.display = "none"; /* a div box containing a field name, random question and reset button */  
   
};

window.onload = hideBoxes; // hides above div's while every page load/refresh


/* The event listener that is being executed once the whole HTML content is loaded */
/* If any field in the #questionBox div container is selected, the function showBoxes() is being executed */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("questionBox").addEventListener('click', showBoxes);
});


// showing #practBox after ticking any field

function showBoxes() {
    
     
    const showContent = document.getElementById("practBox"); // main div box to practice with
    
    
    // below local variables hold ID reference to every field radio box arranged in order (as it's in their object)
    const showF1 = document.getElementById("emot");
    const showF2 = document.getElementById("acci");
    const showF3 = document.getElementById("adve");
    const showF4 = document.getElementById("pets");
    const showF5 = document.getElementById("beha");
    const showF6 = document.getElementById("beau");
    const showF7 = document.getElementById("chor");
    const showF8 = document.getElementById("dream");
    const showF9 = document.getElementById("food");
    const showF10 = document.getElementById("probl");
    const showF11 = document.getElementById("fam");
    const showF12 = document.getElementById("tellme");
    
 
    
    //if any radio box is ticked, the main practice div box will appear
    if (showF1.checked === true || showF2.checked === true || showF3.checked === true || showF4.checked === true || showF5.checked === true || showF6.checked === true || showF7.checked === true || showF8.checked === true || showF9.checked === true || showF10.checked === true || showF11.checked === true || showF12.checked === true) {
        showContent.style.display = "block";
    } else {
        showContent.style.display = "none";
    }
    
    
};


/* shows a random question from a chosen field, ONE radio box must be selected */

function selectQuestion() {

  
let numOfVal = questions[checkTicked()].length; // Qty of property values (questions) in a given property name (key)
let rndIndx = Math.floor(Math.random() * numOfVal); // A range of indexes in the given object (0-n)
let rndQuestion = questions[checkTicked()][rndIndx]; // returns a random question based on a generated random number

 
    
/* shows a ticked field and extracts this field (as a property name - key) for a calculation of Qty of questions assigned to the selected field */    
function checkTicked() { 
    
    
    const fieldName = document.getElementById('fieldNm');  // returns a field name in the practice box

 
// below local variables hold ID reference to every field radio box arranged in order (as it's in their object)
    const showF1 = document.getElementById("emot");
    const showF2 = document.getElementById("acci");
    const showF3 = document.getElementById("adve");
    const showF4 = document.getElementById("pets");
    const showF5 = document.getElementById("beha");
    const showF6 = document.getElementById("beau");
    const showF7 = document.getElementById("chor");
    const showF8 = document.getElementById("dream");
    const showF9 = document.getElementById("food");
    const showF10 = document.getElementById("probl");
    const showF11 = document.getElementById("fam");
    const showF12 = document.getElementById("tellme"); 
    
 
    
if (showF1.checked === true) {
    fieldName.innerHTML = 'Emotions';
    fieldName.style.borderColor = "red";
    return fieldName.innerHTML = 'Emotions';
} else if (showF2.checked === true) {
    fieldName.innerHTML = 'Accidents';
    fieldName.style.borderColor = "blue";
    return fieldName.innerHTML = 'Accidents';
} else if (showF3.checked === true) {
    fieldName.innerHTML = 'Advertising';
    fieldName.style.borderColor = "green";
    return fieldName.innerHTML = 'Advertising';
} else if (showF4.checked === true) {
    fieldName.innerHTML = 'Pets';
    fieldName.style.borderColor = "lightblue";
    return fieldName.innerHTML = 'Pets';
} else if (showF5.checked === true) {
    fieldName.innerHTML = 'Behaviour';
    fieldName.style.borderColor = "yellow";
    return fieldName.innerHTML = 'Behaviour';
} else if (showF6.checked === true) {
    fieldName.innerHTML = 'Beauty';
    fieldName.style.borderColor = "grey";
    return fieldName.innerHTML = 'Beauty';
} else if (showF7.checked === true) {
    fieldName.innerHTML = 'Chores';
    fieldName.style.borderColor = "black";
    return fieldName.innerHTML = 'Chores';
} else if (showF8.checked === true) {
    fieldName.innerHTML = 'Dreams';
    fieldName.style.borderColor = "pink";
    return fieldName.innerHTML = 'Dreams';
} else if (showF9.checked === true) {
    fieldName.innerHTML = 'Food';
    fieldName.style.borderColor = "limegreen";
    return fieldName.innerHTML = 'Food';
} else if (showF10.checked === true) {
    fieldName.innerHTML = 'Problems';
    fieldName.style.borderColor = "orange";
    return fieldName.innerHTML = 'Problems';
} else if (showF11.checked === true) {
    fieldName.innerHTML = 'Family';
    fieldName.style.borderColor = "darkgoldenrod";
    return fieldName.innerHTML = 'Family';
} else if (showF12.checked === true) {
    fieldName.innerHTML = 'Tell me about...';
    fieldName.style.borderColor = "violet";
    return fieldName.innerHTML = 'Tell me about...';
} 

    
}
// replaces a default div of an example question with a random question based on a generated random number
document.getElementById('queNm').innerHTML = rndQuestion;    


}    
    


/* shows a random question from a chosen field WHEN a shuffle button is pressed */
function shuffleQue() {
    
  
let numOfVal2 = questions[checkTicked2()].length; // Qty of property values (questions) in a given property name (key) 
let rndIndx2 = Math.floor(Math.random() * numOfVal2); // A range of indexes in the given object (0-n)
let rndQuestion2 = questions[checkTicked2()][rndIndx2]; // returns a random question based on a generated random number

     
    
    
/* extracts a selected field (as a property name - key) for a calculation of Qty of questions assigned to the selected field */    
function checkTicked2() {  
   
   const fieldName = document.getElementById('fieldNm');  // returns a field name in the practice box

    
    
// below local variables hold ID reference to every field radio box arranged in order (as it's in their object)
    const showF1 = document.getElementById("emot");
    const showF2 = document.getElementById("acci");
    const showF3 = document.getElementById("adve");
    const showF4 = document.getElementById("pets");
    const showF5 = document.getElementById("beha");
    const showF6 = document.getElementById("beau");
    const showF7 = document.getElementById("chor");
    const showF8 = document.getElementById("dream");
    const showF9 = document.getElementById("food");
    const showF10 = document.getElementById("probl");
    const showF11 = document.getElementById("fam");
    const showF12 = document.getElementById("tellme"); 
    
    
    
    
   
if (showF1.checked === true) {
    return fieldName.innerHTML = 'Emotions';
} else if (showF2.checked === true) {
    return fieldName.innerHTML = 'Accidents';
} else if (showF3.checked === true) {
    return fieldName.innerHTML = 'Advertising';
} else if (showF4.checked === true) {
    return fieldName.innerHTML = 'Pets';
} else if (showF5.checked === true) {
    return fieldName.innerHTML = 'Behaviour';
} else if (showF6.checked === true) {
    return fieldName.innerHTML = 'Beauty';
} else if (showF7.checked === true) {
    return fieldName.innerHTML = 'Chores';
} else if (showF8.checked === true) {
    return fieldName.innerHTML = 'Dreams';
} else if (showF9.checked === true) {
    return fieldName.innerHTML = 'Food';
} else if (showF10.checked === true) {
    return fieldName.innerHTML = 'Problems';
} else if (showF11.checked === true) {
    return fieldName.innerHTML = 'Family';
} else if (showF12.checked === true) {
    return fieldName.innerHTML = 'Tell me about...';
}

    
}


/* replaces a default div of an example question with a random question based on a generated random number AFTER pressing the shuffle button */
document.getElementById('queNm').innerHTML = rndQuestion2;
   
    
}
















