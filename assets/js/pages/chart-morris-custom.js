'use strict';
$(document).ready(function() {
    setTimeout(function() {
		
		// [ Donut-chart ] Start
		var graph = Morris.Donut({
			element: 'morris-donut-chart-1',
			data: [{
					value: 61,
					label: 'Hommes'
				},
				{
					value: 39,
					label: 'Femmes'
				}
			],
			colors: [
				'#009899',
				'#81d6dd',
			],
			resize: true,
			formatter: function(x) {
				return x
			}
		});    
		// [ Donut-chart ] end
    
		// [ Donut-chart ] Start
		var graph = Morris.Donut({
			element: 'morris-donut-chart-2',
			data: [{
					value: 8,
					label: 'Jeunes'
				},
				{
					value: 92,
					label: 'Adultes'
				}
			],
			colors: [
				'#203864',
				'#2f5596',
			],
			resize: true,
			formatter: function(x) {
				return x
			}
		});    
		// [ Donut-chart ] end
    
	}, 300);
});
