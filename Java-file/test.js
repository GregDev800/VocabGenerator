
// deleting :
    // delete nouns.propName; // deleting a particular property
    // delete nouns.propName.propValue; // deleting a value of a particular property
        //or
    // delete nouns.propName.propValue[n-th]; // deleting a value of a particular property
    
    // appending :
    // nouns.propName = 'anotherExample' or '' or null; //  a particular property + its value
        // or
    // using .push(), e.g. nouns.propName.arrayname.push('anotherExample');





/* if (ifNoun.checked === true) {
       
            wordToChange5.innerHTML = rndNo;   
            exampleToChange5.innerHTML = rndNExa;
        } else if (ifVerb.checked === true) {
            wordToChange6.innerHTML = rndVerb;  
            exampleToChange6.innerHTML = rndVerbExa;
        } else if (ifAdjective.checked === true) {
            wordToChange7.innerHTML = rndAdjective;  
            exampleToChange7.innerHTML = rndAdjectiveExa;
        }
        */




/*  if (chosenObject === 'nouns') {
            
            let addSome = obj => {
                obj.addedPropName = addedPropValue;
            };
            addSome(nouns);
            
        } else if (chosenObject === 'verbs') {
            let addSome2 = obj => {
                obj.addedPropName = addedPropValue;
            };
            addSome2(verbs);
        } else if (chosenObject === 'adjectives') {
            let addSome3 = obj => {
                obj.addedPropName = addedPropValue;
            };
            addSome3(adjectives);
        } else {
            alert("A proper category must be chosen.");
        }*/
    



// delete or move    
        
        
        
        /*
        let ifNoun = document.getElementById("w1");
        let ifVerb = document.getElementById("w2");
        let ifAdjective = document.getElementById("w3");
        let ifTense = document.getElementById("w4");
        let ifIdiom = document.getElementById("w5");
        let ifColl = document.getElementById("w6");
        */
        
       // let changeWord5 = document.getElementById("resetWords");
        
        /*
        if (ifNoun.checked === true && ifVerb.checked === true && ifAdjective.checked === true) {
       
            wordToChange5.innerHTML = rndNoun;   
            exampleToChange5.innerHTML = rndNounExa;
            
            wordToChange6.innerHTML = rndVerb;  
            exampleToChange6.innerHTML = rndVerbExa;
            
            wordToChange7.innerHTML = rndAdjective;  
            exampleToChange7.innerHTML = rndAdjectiveExa;
            
        } else if (ifNoun.checked === true && ifVerb.checked === true) {
            wordToChange5.innerHTML = rndNoun;   
            exampleToChange5.innerHTML = rndNounExa;
            
            wordToChange6.innerHTML = rndVerb;  
            exampleToChange6.innerHTML = rndVerbExa;
        } else if (ifNoun.checked === true && ifAdjective.checked === true) {
            wordToChange5.innerHTML = rndNoun;   
            exampleToChange5.innerHTML = rndNounExa;
            
            wordToChange7.innerHTML = rndAdjective;  
            exampleToChange7.innerHTML = rndAdjectiveExa;
        } else if (ifVerb.checked === true && ifAdjective.checked === true) {
            wordToChange6.innerHTML = rndVerb;  
            exampleToChange6.innerHTML = rndVerbExa;
            
            wordToChange7.innerHTML = rndAdjective;  
            exampleToChange7.innerHTML = rndAdjectiveExa;
        } else if (ifNoun.checked === true) {
            wordToChange5.innerHTML = rndNoun;   
            exampleToChange5.innerHTML = rndNounExa;
        } else if (ifVerb.checked === true) {
            wordToChange6.innerHTML = rndVerb;  
            exampleToChange6.innerHTML = rndVerbExa;
        } else if (ifAdjective.checked === true) {
            wordToChange7.innerHTML = rndAdjective;  
            exampleToChange7.innerHTML = rndAdjectiveExa;
        }*/


// testing extracting ticked checkboxes
        
        //let allTickB = document.getElementById('allTB');
        //let i;
        //let tickArr = [];
        
        /*for (i = 0; i < allTickB.w.length; i++ ) {
            if (allTickB.w[i].type == 'checkbox') {
                if (allTickB.w[i].checked === true) {
                    tickArr.push(allTickB.w[i].value);
                    alert(allTickB.w[i].value);
                }
            }
        }*/


// adding new content
//const testObj = {[addedPropName]: addedPropValue}; // this one works



/*function findWordsQuick() {
    
    let getSign = document.getElementById("inpSearch").value;
    
    let nounKeys = Object.keys(nouns);
    let verbKeys = Object.keys(verbs);
    let adjectiveKeys = Object.keys(adjectives);
    let mergedArrays = nounKeys.concat(verbKeys, adjectiveKeys);
    
    console.log(mergedArrays);
    console.log(getSign); // printed input
    
    /*for (let i = 0; i < mergedArrays.length; i++) {
        if (mergedArrays[i].charAt(0) === getSign.charAt(0)) {
            return mergedArrays[i];
        } else if (mergedArrays[i].substr(0, 2) === getSign.substr(0, 2)) {
            return mergedArrays[i];
        } else if (mergedArrays[i].substr(0, 3)) === getSign.substr(0, 2)) {
            return mergedArrays[i];
    }
    
    }
    document.getElementById("testSearching").innerHTML = findWordsQuick();*/
//}
    

// returns a list of all property names (from every object) WITHOUT selecting a category object right after a page load    
 /* function appendArrays() {
    
     /* 
    let nounKeys2 = Object.keys(nouns);
    let verbKeys2 = Object.keys(verbs);
    let adjectiveKeys2 = Object.keys(adjectives);
    let mergedArrays2 = nounKeys2.concat(verbKeys2, adjectiveKeys2);*/
      
   /* let nounKeys2V = Object.keys(takenObj);
    let verbKeys2V = Object.keys(takenObj2);
    let adjectiveKeys2V = Object.keys(takenObj3);
    let mergedArrays2V = nounKeys2V.concat(verbKeys2V, adjectiveKeys2V);  
     
  
    let newOptions = '';
    
    for(let i = 0; i < mergedArrays2V.length; i++) {
        newOptions = newOptions + '<option>'+ mergedArrays2V[i] +'</option>';
    }
       
    document.getElementById("words").innerHTML = newOptions;
      
}   */  




/*function test2() {
    for (let i = 0; i < mergedArrays.length; i++) {
        if (mergedArrays[i].charAt(0) === getSign.charAt(0)) {
            return mergedArrays[i];

        } else {
            return '';
        }
}
}
        
document.getElementById("testSearching").innerHTML = test2();
console.log(test2());   */
    
    
  /*function test3() {
      let i = 0;
      while (i < mergedArrays.length) {
          if (mergedArrays[i].charAt(0) === getSign.charAt(0) && mergedArrays[i].substr(0, 2) === getSign.substr(0, 2) && mergedArrays[i].substr(0, 3) === getSign.substr(0, 3)){
            return mergedArrays[i];
        } else if (mergedArrays[i].charAt(0) === getSign.charAt(0) && mergedArrays[i].substr(0, 2) === getSign.substr(0, 2)) {
              return mergedArrays[i];
          } else if (mergedArrays[i].charAt(0) === getSign.charAt(0)) {
              return mergedArrays[i];
          }
            else if (getSign.charAt(0) === '') {
            return '';
        }
          i++;
      }
  }  

    
 document.getElementById("testSearching").innerHTML = test3();
console.log(test3());  */
    
    
    
  /*  const test4 = mergedArrays.filter(word => {
        if (getSign !== '') {
            return word.includes(getSign);
        } else {
        return '';
        }
    })
    //let test4Con = test4.join('');
    //let test4Con = test4.join('<br>');
    let test4Con = test4;
    
    
   /* function test5() {
        for (let k = 0; k < test4Con.length; k++) {
            if(test4Con[k] !== '')
            
            console.log(test4Con[k]);
        }
    }*/
    
    
    
  /*  document.getElementById("testSearching").innerHTML = test4Con;
    console.log(test4Con); // an array printed from the function 'test4'
   // document.getElementById("testSearching").innerHTML = test5();
   // console.log(test5());
    */
    
    
    
  /*  const node = document.createElement("option");
    //const textNode = document.createTextNode(test4Con);
    const textNode = document.createTextNode(test5());
    node.appendChild(textNode);
    document.getElementById("words").appendChild(node);
    
    if (typeof node === undefined) {
        //return node.removeChild(textNode);
        document.getElementById("words").removeChild(node);
    }
            
    const innerData = document.getElementsByTagName("option");
    console.log(innerData);*/
            
            
    /*const test8 = mergedArrays.forEach(function(ele) {
        
        if(ele.includes(getSign)) {
            console.log(ele);
        } else {
            console.log("");
        }
    })*/
    
    
    
    
    
   /* const node = document.createElement("option");
    const textNode = document.createTextNode(test8);
    node.appendChild(textNode);
    document.getElementById("words").appendChild(node);*/
            
            
            
/*const findWords = mergedArrays.map(word => {
    if (word.charAt(0) === getSign.charAt(0)) {
        if (typeof word !== undefined) {
        return word;
        }
    } else if (word.substr(0, 2) === getSign.substr(0, 2)) {
        return word;
    } else if (word.substr(0, 3) === getSign.substr(0, 3)) {
        return word;
    } else {
        return '';
    }
})*/


/*const findWords = mergedArrays.map(word => {
    if (word.charAt(0) === getSign.charAt(0)) {
        if (word.slice(0, 2) === getSign.slice(0, 2)) {
            if (word.slice(0, 3) === getSign.slice(0, 3)) {
                return word.innerText;
            }
        }
    
    } else  {
        return '';
    }
    })*/


/*let chanTest = document.getElementById("testSearching");
chanTest.innerText = findWords;
chanTest.style.display = "block";
    
if (getSign === "") {
    document.getElementById("testSearching").HTML = '';
}*/

    //document.getElementById("testSearching").innerHTML = findWordsQuick();
//}



/*function mFun() {

    //let getSign2 = document.getElementById("inpSearch").value;
    
    let nounKeys2 = Object.keys(nouns);
    let verbKeys2 = Object.keys(verbs);
    let adjectiveKeys2 = Object.keys(adjectives);
    let mergedArrays2 = nounKeys2.concat(verbKeys2, adjectiveKeys2);
    

     // datalist Id
    let nextTest = document.getElementById("mySelect");
    let newOpt = document.createElement("option");
    
    function nFun() {
    for (let z = 0; z < mergedArrays2.length; z++) {
        
        newOpt.text = mergedArrays2[z];
        nextTest.options.add(newOpt);
    
    }
    }
    
}*/


// a pop-up window

/*
const overBack = document.getElementById("overlay");
const popButton = document.getElementById("clickPop");
const iks = document.getElementsByClassName("close-win")[0];
const conWindow = document.getElementsById("actCont");


// opening a pop-up window after clicking a button
// or popButton.addEventListener("click", () => {
    conWindow.style.display = "block"
})

popButton.onclick = function() {
    conWindow.style.display = "block";
    overBack.style.display = "block";
    
}

// closing a pop-up window after clicking "X"

iks.onclick = function() {
    conWindow.style.display = "none";
    //overBack.style.display = "block";
}


// if a user clicks outside of a pop-up window, it doesn't do anything

/*window.onclick = function(event) {
    if (event.target === modalWin) {
       overBack.style.display = "block"; 
    }
}*/



/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("div2Button").addEventListener('click', myFunct);
});

function myFunct() {
    document.getElementById('testdiv2').innerHTML = localStorage.getItem('pin');
}*/

/*if (localStorage !== null) {
    alert("not empty!") 
}*/

//  !== null
/*if (localStorage.getItem('pin')) {
    alert("there's something"); 
}*/

/*if (document.getElementById('testdiv1').value === 'propname') {
    alert("test-yes"); 
}*/




/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("div3Button").addEventListener('click', addStor);
});


function addStor() {
    
    // storing data
    const tObj = {int: 'chess', dog: 'Buddy', time: 'early', color: 'green'};
    const myJSON = JSON.stringify(tObj); // converting to stings
    
    
    localStorage.setItem("testJSON", myJSON); // The setItem() method sets the value of the specified Storage Object item.
    
    
    
    
    
    // retrieving data
    let text = localStorage.getItem("testJSON"); // a key as an identifier(virtual object name) keeping the whole object
    // The getItem() method returns value of the specified Storage Object item.
    
    let obj = JSON.parse(text); // converting object (as a string) into a proper JS object 
    document.getElementById("testdiv3").innerHTML = obj.time; // should retun a property value
    
    console.log(obj);
    let nKeys55 = Object.keys(nouns); // a table of predefined keys (nouns - object)
    let x55 = Object.getOwnPropertyNames(obj); // a virtual table of virtual keys
    let merArr55 = nKeys55.concat(x55); // merged arrays of property names from nouns(object) and testJSON(virt obj)
    console.log(merArr55);
    console.log();
    
}*/


//  !== null
/*if (localStorage.getItem('testJSON') !== null) {  // if (localStorage.getItem('testJSON') !== null)
    //alert("there's something"); // works
    alert(localStorage.getItem('testJSON')); // works
    //alert(localStorage.getItem('testJSON')[1]); // doesn't work
    //alert(localStorage.getItem('nouns')); // without [] almost works
    //alert(localStorage.getItem('nouns')); // works with [] bracing property name
    //alert(JSON.parse(localStorage.getItem('nouns'))); // doesn't work
    //alert((JSON.parse(localStorage.getItem('nouns'))).pin); // doesn't work
    
} else {
    alert('still nothing');
}*/


/*if (localStorage !== null) {
    alert("not empty!") 
}*/


// below function works
/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("div4Button").addEventListener('click', testNot);
});
function testNot() {
    if (document.getElementById('testdiv4').innerHTML === 'xax') {
    alert("test-yes"); 
} else {
    alert("nothing");
}
}*/



/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("div4Button").addEventListener('click', testNot2);
});
function testNot2() {
    
 /*   const xxx = Object.getOwnPropertyNames(nouns);
    if (document.getElementById('testdiv4').innerHTML === 'xax') {
    //alert("test-yes");
        document.getElementById('testdiv4').innerHTML = xxx;
} else {
    alert("nothing");
}
}*/




// stringify -> set -> get -> parse
// localStorage.setItem(keyname, value)
// lacalStorage.setItem("test1", "Lorem ipsum");



/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("takeinp").addEventListener('change', findObject);
});*/


/*
// 'anyDiv' is random and must be hidden (DO NOT remove)
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("anyDiv").addEventListener('load', addInitJSON);
});


function addInitJSON() {
    
    // storing data
    const iniObj = {chessXYZ: 'A chess grandmaster. (DO NOT remove)'}; // initial noun object, DO NOT remove
    localStorage.setItem("nounsJSON", JSON.stringify(iniObj)); // converting to stings and adding to localStorage
    
    const iniObj2 = {readXYZ: 'I read a book. (DO NOT remove)'}; // initial verb object, DO NOT remove
    localStorage.setItem("verbsJSON", JSON.stringify(iniObj2)); // converting to stings and adding to localStorage
    
    const iniObj3 = {yellowXYZ: 'A white-yellow daisy. (DO NOT remove)'}; // initial adjective object, DO NOT remove
    localStorage.setItem("adjectivesJSON", JSON.stringify(iniObj3)); // converting to stings and adding to localStorage

}*/




/*
// for questions
const showContent = document.getElementById("practBox"); // main div box to practice with
     
    // if any radio box is ticked, the main practice div box will appear
    if (showF1.checked === true || showF2.checked === true || showF3.checked === true || showF4.checked === true || showF5.checked === true || showF6.checked === true || showF7.checked === true || showF8.checked === true || showF9.checked === true || showF10.checked === true || showF11.checked === true || showF12.checked === true) {
        showContent.style.display = "block";
    } else {
        showContent.style.display = "none";
    }*/


// for questions

/*
const ifEmot = document.getElementById("emot");
const ifAcci = document.getElementById("acci");
const ifAdve = document.getElementById("adve");
const ifPet = document.getElementById("pets");
*/




/*
    // if any radio box is ticked, the main practice div box will appear
    let allChBoxes = document.getElementById('allChB'); // a div container of all radio type elements to choose from
        // iterating through every property name of the 'questions' object; 'name' elements are taken for calculation
        for (i = 0; i < allChBoxes.queries.length; i++ ) {
            if (allChBoxes.queries[i].type == 'radio') {
                if (allChBoxes.queries[i].checked === true) {
                    showContent.style.display = "block";   
                    } else {
                        showContent.style.display = "none";
                    }
                }
            }*/


/*
    // if any radio box is ticked, the main practice div box will appear
    let allChBoxes2 = document.getElementById('allChB'); // a div container of all radio type elements to choose from
        // iterating through every property name of the 'questions' object; 'name' elements are taken for calculation
        for (j = 0; j < allChBoxes2.queries.length; j++ ) {
            if (allChBoxes2.queries[j].type == 'radio') {
                if (allChBoxes2.queries[j].checked === true) {
                    
                    fieldName = document.getElementById('fieldNm');
                    
                    fieldName.innerHTML = 'Emotions';
                    return fieldName.innerHTML = 'Emotions';
                    
                    fieldName.innerHTML = 'Accidents';
                    return fieldName.innerHTML = 'Accidents';
                    
                    fieldName.innerHTML = 'Advertising';
                    return fieldName.innerHTML = 'Advertising';
                    
                    fieldName.innerHTML = 'Pets';
                    return fieldName.innerHTML = 'Pets';
                    
                    fieldName.innerHTML = 'Behaviour';
                    return fieldName.innerHTML = 'Behaviour';
                    
                    fieldName.innerHTML = 'Beauty';
                    return fieldName.innerHTML = 'Beauty';
                    
                    fieldName.innerHTML = 'Chores';
                    return fieldName.innerHTML = 'Chores';
                    
                    fieldName.innerHTML = 'Dreams';
                    return fieldName.innerHTML = 'Dreams';
                    
                    fieldName.innerHTML = 'Food';
                    return fieldName.innerHTML = 'Food';
                    
                    fieldName.innerHTML = 'Problems';
                    return fieldName.innerHTML = 'Problems';
                    
                    fieldName.innerHTML = 'Family';
                    return fieldName.innerHTML = 'Family';
                    
                    fieldName.innerHTML = 'Tell me about...';
                    return fieldName.innerHTML = 'Tell me about...';
                    
                    } else {
                        alert('There is sth wrong.');
                    }
                }
            }*/
    

/*  
 // if any radio box is ticked, the main practice div box will appear
    let allChBoxes3 = document.getElementById('allChB'); // a div container of all radio type elements to choose from
        // iterating through every property name of the 'questions' object; 'name' elements are taken for calculation
        for (k = 0; k < allChBoxes3.queries.length; k++ ) {
            if (allChBoxes3.queries[k].type == 'radio') {
                if (allChBoxes3.queries[k].checked === true) {
                    
                    fieldName = document.getElementById('fieldNm');
                    
                    return fieldName.innerHTML = 'Emotions';
                    
                    return fieldName.innerHTML = 'Accidents';
                    
                    return fieldName.innerHTML = 'Advertising';
                    
                    return fieldName.innerHTML = 'Pets';
                    
                    return fieldName.innerHTML = 'Behaviour';
                    
                    return fieldName.innerHTML = 'Beauty';
                    
                    return fieldName.innerHTML = 'Chores';
                    
                    return fieldName.innerHTML = 'Dreams';
                    
                    return fieldName.innerHTML = 'Food';
                    
                    return fieldName.innerHTML = 'Problems';
                    
                    return fieldName.innerHTML = 'Family';
                    
                    return fieldName.innerHTML = 'Tell me about...';
                    
                    } else {
                        alert('There is sth wrong.');
                    }
                }
            }  */ 
    
    








