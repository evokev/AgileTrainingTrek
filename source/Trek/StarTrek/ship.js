var Ship;

Ship = function () {
    "use strict";
    this.name = "FantasyFive Ship";
    this.isSubsystemDamaged = false;

    this.isNearStarbase = false;
    
    this.shield = new Shield();

    this.subsystems = {};
    this.subsystems['phasers'] = new Subsystem("phasers",300,1);
    this.subsystems['shields'] = new Subsystem("shields",500,1);
    this.subsystems['engine'] = new Subsystem("engine",200,1);
};

Ship.prototype = {
    getName: function () {
        "use strict";
        return this.name;
    },

    makeReadyForBattle: function () {
        "use strict";
        this.shield.raise();
    },

    rest: function () {
        "use strict";
        //this.isResting = true;

        // Heal subsystems this turn.  All subsystems are repaired by a factor
        this.subsystems["phasers"].rest();
        this.subsystems["shields"].rest();
        this.subsystems["engine"].rest();
    },

    goToStarbase: function () {
        "use strict";
        this.isNearStarbase = true;
    },

    leaveStarbase: function () {
        "use strict";
        this.isNearStarbase = false;
    },

    damageSubsystem: function (subsystemAffected, amount) {
        "use strict";

        this.subsystems[subsystemAffected].getDamaged(amount);
    },

    getHit: function (damageAmount) {
        "use strict";
        var amountLeftOver = 0;
        amountLeftOver = this.shield.damage(damageAmount);
        
        if (amountLeftOver > 0) {
            this.isSubsystemDamaged = true;
            // figure out which subsystem is damaged and apply damage
            
            var subsystemAffected = 'phasers';  //Math.floor((Math.random() * 3) + 1);
            this.damageSubsystem(subsystemAffected,amountLeftOver);
        }
    }

};
