var Ship;

Ship = function () {
    "use strict";
    this.name = "FantasyFive Ship";
    this.isSubsystemDamaged = false;
    
    this.shield = new Shield();
    
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
    
    getHit: function (damageAmount) {
        "use strict";
        var amountLeftOver = 0;
        amountLeftOver = this.shield.damage(damageAmount);
        
        if (amountLeftOver > 0) {
            this.isSubsystemDamaged = true;
            // figure out which subsystem is damaged and apply damage
        }
    }

};
