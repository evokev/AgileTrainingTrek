describe("ship", function() {
    var ship;
    
    beforeEach(function() {
        ship = new Ship();
    });

    describe("defaults", function() {

        it("verify that ship exists and is named FantasyFive Ship", function() {
            var shipName = ship.getName();

            expect(shipName).toBe("FantasyFive Ship");
        });

        it("has subsystems", function() {
            expect(Object.keys(ship.subsystems).length).toBe(3);
        });

        it("first subsystem is phasers and has a capacity of 300", function() {
            expect(ship.subsystems['phasers'].type).toBe("phasers");
            expect(ship.subsystems['phasers'].damageCapability).toBe(300);
            expect(ship.subsystems['phasers'].unitOfReapir).toBe(1);
            expect(ship.subsystems['phasers'].canOperate).toBe(true);

        });
        
        it("first subsystem is shields and has a capacity of 500", function() {
            expect(ship.subsystems['shields'].type).toBe("shields");
            expect(ship.subsystems['shields'].damageCapability).toBe(500);
            expect(ship.subsystems['shields'].unitOfReapir).toBe(1);
            expect(ship.subsystems['shields'].canOperate).toBe(true);
        });
        
        it("first subsystem is warp engine and has a capacity of 200", function() {
            expect(ship.subsystems['engine'].type).toBe("engine");
            expect(ship.subsystems['engine'].damageCapability).toBe(200);
            expect(ship.subsystems['engine'].unitOfReapir).toBe(1);
            expect(ship.subsystems['engine'].canOperate).toBe(true);
        });
        

        
        it("not damaged by default", function() {
            expect(ship.isSubsystemDamaged).toBe(false);
        });
    
        it("is not near a starbase by default", function() {
            expect(ship.isNearStarbase).toBe(false);
        });
    });

    it("verify ship is ready for battle", function() {
        
        ship.makeReadyForBattle();
        
        expect(ship.shield.isUp).toBe(true);
        expect(ship.shield.energy).toBe(5000);
    
    });

    it("can go near a starbase", function() {
        ship.goToStarbase();

        expect(ship.isNearStarbase).toBe(true);
    });

    it("can leave a starbase", function() {
        ship.leaveStarbase();

        expect(ship.isNearStarbase).toBe(false);
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

    it("can take 300 damage to phasers and become inoperable", function() {
        ship.damageSubsystem('phasers',300);
        
        expect(ship.subsystems['phasers'].isOperable()).toBe(false);
    });

    it("can take less than 300 damage to phasers and are still usable", function() {
        ship.damageSubsystem('phasers',299);
        
        expect(ship.subsystems['phasers'].isOperable()).toBe(true);
    });

    it("can take 500 damage to shields and become inoperable", function() {
        ship.damageSubsystem('shields',500);
        
        expect(ship.subsystems['shields'].isOperable()).toBe(false);
    });

    it("can take less than 500 damage to shields and are still usable", function() {
        ship.damageSubsystem('shields',499);
        
        expect(ship.subsystems['shields'].isOperable()).toBe(true);
    });
    
});
