// Ship Reserve 
ShipReserve = function() {
    this.reserve = 1000; // default
	this.minReserveEnergy = 150; // default
};

ShipReserve.prototype = {
 
    transferEnergy: function(energyRequired) {
		if(this.reserve > energyRequired)
		{
			this.reserve = this.reserve - energyRequired;
			return energyRequired;
		} else
		{
			var energyReturn = this.reserve - this.minReserveEnergy;
			this.reserve = this.reserve - energyReturn;
			return energyReturn; 
		}
		
		
        
    }
	
    
};