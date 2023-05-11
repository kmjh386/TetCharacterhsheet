    //I want the atributes to auto fill out the DT, Base Movemet, the armor should also uto change the attributes associated with it 
//Also the lbs to be auto calculated

/*
*/

//Armor and shileds by clicking the armors box the current attribute scoer will be modified

//eventually write a list section that will automatcialy modify the attributes anf FS of the diffrent items//


/* Deck rank Modifiers addes to all attributes
    0 to 6 +0
    7 - 12 +1
    13 - 18 +2
    19 -24 +3*/
    function updateRankBonus() {
        var rank = parseInt(document.getElementById("rank").value);
    
        if (rank >= 19) {
            document.getElementById("agilityScore").value += 3,
            document.getElementById("focusScore").value += 3,
            document.getElementById("vigorScore").value += 3,
            document.getElementById("mettleScore").value += 3,
            document.getElementById("acuityScore").value += 3;
        } else if (rank >= 13) {
            document.getElementById("agilityScore").value += 2,
            document.getElementById("focusScore").value += 2,
            document.getElementById("vigorScore").value += 2,
            document.getElementById("mettleScore").value += 2,
            document.getElementById("acuityScore").value += 2;
        } else if (rank >= 7) {
            document.getElementById("agilityScore").value += 1,
            document.getElementById("focusScore").value += 1,
            document.getElementById("vigorScore").value += 1,
            document.getElementById("mettleScore").value += 1,
            document.getElementById("acuityScore").value += 1;
        } else {
            document.getElementById("agilityScore").value += 0,
            document.getElementById("focusScore").value += 0,
            document.getElementById("vigorScore").value += 0,
            document.getElementById("mettleScore").value += 0,
            document.getElementById("acuityScore").value += 0;
        }
    }
    

    /*
Aspect Modifier for Character
When a player chooses thier aspect the aspects modifiers are automaticaly added to that coreisponding talent or health
    Plasma 
        bodyScore ++ 4
        fatiugeScore ++ 4
    Cosmos 
        focusScore ++ 1 
    Æther   
        acuityScore ++ 1   
    Entropy 
        mettleScore ++ 1
    Star 
        +1 to talent of choice, 
        ahnk += 1*/
        function updateAspect() {
            var aspect = document.getElementById("aspect").value;
        
            if (aspect === "plasma") {
                document.getElementById("bodyScore").value = parseInt(document.getElementById("bodyScore").value) + 4;
                document.getElementById("fatigueScore").value = parseInt(document.getElementById("fatigueScore").value) + 4;
            } else if (aspect === "Cosmos") {
                document.getElementById("focusScore").value = parseInt(document.getElementById("focusScore").value) + 1;
            } else if (aspect === "entropy") {
                document.getElementById("mettleScore").value = parseInt(document.getElementById("mettleScore").value) + 1;
            } else if (aspect === "Æther") {
                document.getElementById("acuityScore").value = parseInt(document.getElementById("acuityScore").value) + 1;
            } else if (aspect === "Star") {
                document.getElementById("ahnk").value = parseInt(document.getElementById("ahnk").value) + 1;
            }
        }
        
        //figureout how to let the player choose an aspect to increase by +1//

        /*
Core stats
Players core stats are automaticaly updated. and they can add modifiers to the core stats 
    BodyScore = AgilityScore + AcuityScore + MettleScore + VigorScore + FocusScore + BodyModifiers
    MovementScore = AgilityScore  + BaseMovement + MoveModifier
    InitiavtieScore = AgilityScore + AcuityScore + IntiativeModifier
    DTSCore = MettleScore + AgilityScore + AcuityScore +MettleScore
    SuprisedDTScore= MettleScore + AcuityScore + SurpisedDTModifier
    FatiugeScore = VigorScore + MettleScore + FatiugeModifier*/
    function calculateBodyScore() {
        var agilityScore = parseInt(document.getElementById("agilityScore").value);
        var acuityScore = parseInt(document.getElementById("acuityScore").value);
        var mettleScore = parseInt(document.getElementById("mettleScore").value);
        var vigorScore = parseInt(document.getElementById("vigorScore").value);
        var focusScore = parseInt(document.getElementById("focusScore").value);
        var bodyModifiers = 3;
    
        var bodyScore = agilityScore + acuityScore + mettleScore + vigorScore + focusScore + bodyModifiers;
    
        document.getElementById("bodyScore").value = bodyScore;
    }  
function movementScore() {
    var currentAgilityScore = parseInt(document.getElementById("agilityScore").value);
    var baseMovement = parseInt(document.getElementById(baseMovement).value);
    var moveModifier = 2;
    var movementScore = currentAgilityScore + baseMovement + moveModifier;
    document.getElementById("movementScore").value = movementScore;
}
function intiativeScore() {
    var currentAgilityScore = parseInt(document.getElementById("agilityScore").value);
    var currentAcuityScore = parseInt(document.getElementById("acuityScore").value);
    var intiativeModifier = 3;
    var intiativeScore = currentAgilityScore + currentAcuityScore + intiativeModifier;
    document.getElementById("intiativeScore").value = intiativeScore;
}
function DTScore() {
    var currentMettleScore = parseInt(document.getElementById("mettleScore").value);
    var currentAgilityScore = parseInt(document.getElementById("agilityScore").value);
    var currentAcuityScore = parseInt(document.getElementById("acuityScore").value);
    var DTModifier = 0;
    var DTScore = currentMettleScore + currentAgilityScore + currentAcuityScore + DTModifier;
    document.getElementById("DTScore").value = DTScore;
}
function suprisedDTScore() {
    var currentMettleScore = parseInt(document.getElementById("mettleScore").value);
    var currentAcuityScore = parseInt(document.getElementById("acuityScore").value);
    var surprisedDTModifier = 3;
    var surprisedDTScore = currentMettleScore + currentAcuityScore + surprisedDTModifier;
    document.getElementById("surprisedDTScore").value = surprisedDTScore;
}
function fatigueScore() {
    var currentVigorScore = parseInt(document.getElementById("vigorScore").value);
    var currentMettleScore = parseInt(document.getElementById("mettleScore").value);
    var fatigueModifier = -2; // assuming the modifier is negative
    var fatigueScore = currentVigorScore + currentMettleScore + fatigueModifier;
    document.getElementById("fatigueScore").value = fatigueScore;
}


/*Species Modifiers
When a player selects a species the attributes of that species are automaticaly added to thier character sheet.
    Anubi
        Size 5 -1DT StandardDT
        +1 to VigorScore Score 
        Encumberance = vigor X 50
        Bast Movement + 6
        add weapon claws vigor + 1W + rank modifier light modifier
    Menkha
        Size 3 +1 DT StandardDT
        +1 to MettleScore 
        Encumberance = vigor X 65
        Bast Movement + 2
        +2 FS to Climb SKill
        add weapon Horns Mettle +2 Concusive Damage + rank modifier
    Bast 
        Size 4
        +1 to AgilityScore Score 
        Encumberance = vigor X 45
        Bast Movement + 3
    if Human 
        Size 4
        Encumberance = vigor X 45
        Bast Movement + 4*/
function updateSpecies(){
    var rank = parseInt(document.getElementById("species").value);

    if (species = "Anubi") {
    document.getElementById("size") = 5;
    document.getElementById("baseMovement").value = 6;
    document.getElementById("encumberance"). value = math.floor(50 * "currentVigorScore");
    } else if (species >= "Menkha") {
    document.getElementById("size") = 3;
    document.getElementById("baseMovement").value = 2;
    document.getElementById("encumberance"). value = math.floor(65 * "currentVigorScore");
    } else if (species >= "Bast") {
    document.getElementById("size") = 4;        
    document.getElementById("baseMovement").value = 3;
    document.getElementById("encumberance"). value = math.floor(45 * "currentVigorScore");
    } else (species = "Human") {
    document.getElementById("size") = 4;    
    document.getElementById("baseMovement").value = 4;
    document.getElementById("encumberance"). value = math.floor(45 * "currentVigorScore");
    }
}

/*Weapons 

Armor
When the character chooses an armor or shield thier agility score is automatically modified to represent the current talent pool
    Scout 
    Combat -2 to current Agility score
    Juggernaught -4 to current Agillity score
shileds
    Buckler
    Combat -1 to current Agility
    Line -2 to Current Agility
Skills
    When the Realm is Selected then the skills avalible in  that realm are avilible on the drop down list, the attribute will then list the Character's current attribute score the skills level will add any modifiers asociated with it to the corrsponding stats and FS modifiers will be automaticaly calculated from other skills.
items
    Sum of all Lbs
    */

    function updateArmor() {
        if (armor === "juggernaut") {
            currentAgilityScore -= 4;
        }
        else if (armor === "combat") {
            currentAgilityScore -= 2;
        }
        else if (armor === "scout") {
            // do nothing since scout armor doesn't affect agility
        }
    }

    function updateShield() {
        if(armor === "lineShield") {
            currentAgilityScore -= 2;
        }
        else if (armor === "combatShield") {
            currentAgilityScore -= 1;
        }
        else {
            armor === "scoutShield";
        }
    }