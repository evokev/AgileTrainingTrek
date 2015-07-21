describe("ship", function() {
    var ship;
    
    beforeEach(function() {
        ship = new Ship();
    });


    it("verify that ship exists and is named FantasyFive Ship", function() {
        var shipName = ship.getName();
        
        expect(shipName).toBe("FantasyFive Ship");

    });

    it("verify ship is ready for battle", function() {
        
        ship.makeReadyForBattle();
        
        expect(ship.shield.isUp).toBe(true);
        expect(ship.shield.energy).toBe(5000);
    
    });
    
      describe("damage within shield capacity", function() {
        var damageAmount;
        
        beforeEach(function () {

            ship.makeReadyForBattle();
            
            // random amount of damage, depending on the amount of energy and distance of enemy
            damageAmount = 500;
            
            ship.getHit(damageAmount);
            
        });
    
        it("shield is still up", function() {
            expect(ship.shield.isUp).toBe(true);
        });

        it("shield energy is 4500", function() {
            expect(ship.shield.energy).toBe(4500);
        });

        it("ship subsystems are not damaged", function() {
            expect(ship.isSubsystemDamaged).toBe(false);
        });
                    
      });
        
      describe("damage beyond shield capacity", function() {
        var damageAmount;
        
        beforeEach(function () {

            ship.makeReadyForBattle();
            
            // random amount of damage, depending on the amount of energy and distance of enemy
            damageAmount = 6000;
            
            ship.getHit(damageAmount);
        });
    
        it("shield is DOWN!", function() {
            expect(ship.shield.isUp).toBe(false);
        });

        it("shield energy is 0", function() {
            expect(ship.shield.energy).toBe(0);
        });

        it("ship subsystems are damaged", function() {
            expect(ship.isSubsystemDamaged).toBe(true);
        });
                    
      });
        

    
    
});
