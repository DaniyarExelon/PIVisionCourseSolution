(function (CS) {

	function symbolVis() {};
	CS.deriveVisualizationFromBase(symbolVis);
	
	symbolVis.prototype.init = function (scope)  {
		this.onDataUpdate = dataUpdate;

			   
			scope.config.SetLimit = function(newlimit){
				
				var input_value = document.getElementById('EnterLimit').value; 
				scope.config.LimitValue = Number(input_value); 
			 
               }  
			   
			 scope.config.SetGreaterLess = function(newcondition){
				
				if (scope.config.GreaterThanLimit){
				scope.config.GreaterLessText = '<';
				scope.config.GreaterThanLimit = false;
				scope.config.LessThanLimit = true;
				} else {
					scope.config.GreaterLessText = '>';
					scope.config.GreaterThanLimit = true;
					scope.config.LessThanLimit = false;
				}
					
               }
			
			   
		
		function dataUpdate(data) {
			if(data) {
				scope.value = data.Value;
				scope.LimitValue = scope.config.LimitValue;
			
				
				//Checking condition
				if (scope.config.GreaterThanLimit){
				if(scope.value < scope.LimitValue ) {
					scope.config.ShowGood = true;
					scope.config.ShowBad = false;
				} else {
					scope.config.ShowGood = false;
					scope.config.ShowBad = true;
					}
				} else {
					if(scope.value > scope.LimitValue ) {
					scope.config.ShowGood = true;
					scope.config.ShowBad = false;
				} else {
					scope.config.ShowGood = false;
					scope.config.ShowBad = true;
					}
				}
			
			//console.log(scope.config.Greater);

		//	if(scope.config.Greater){		
		//			var greaterThanChange = greaterThan(data);
		//	}

			}
		}
	
		function greaterThan(data) {
				scope.value = data.Value;
				scope.LimitValue = scope.config.LimitValue;
			
				
				//Checking condition
				if(scope.value > scope.LimitValue ) {
					scope.config.ShowGood = true;
					scope.config.ShowBad = false;
				} else {
					scope.config.ShowGood = false;
					scope.config.ShowBad = true;
						}
						
		
		
		
		}	
	};

	var definition = {
		typeName: 'signallamp',
		datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		iconUrl: '/Scripts/app/editor/symbols/ext/Icons/Good_state.gif',
		getDefaultConfig: function() {
			return {
				DataShape: 'Value',
				Height: 100,
				Width: 100,
				BackgroundColor: "red",
				TextColor:'rgb(0,255,0)',
				ShowLabel: true,
				ShowTime: false,
				ShowGood: false,
				ShowBad: true,
				LimitValue: 85,
				GreaterLessText: '<',
				GreaterThanLimit: false,
				LessThanLimit: true
			};
		},
		configTitle: 'Format Symbol',
		
		
	};		
	CS.symbolCatalog.register(definition);

})(window.PIVisualization);

