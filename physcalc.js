console.log("Welcome to Physcalc")

/* Units
fundamental
	kilogram
	meter
	second

derived
	acceleration = meters / second^2
	area = meters^2
	density = kilograms / meter^3
	depth = meters
	force = Newtons
	Newtons = kilograms * acceleration
	Pascals = Newtons / meter^2
	pressure = Pascals
	speed = meters / second
	weight = Newtons
*/

// Constants
var atm = 101300 //pressure of atmosphere
var g = 9.81 //acceleration of gravity
var air = {
	density: 1.275
}
var helium = {
	density: 0.1785
}
var mercury = {
	density: 13594
}
var water = {
	density: 1000
}

// Homework 1

function h1_1a(){
	var depth = 27.5 //meters
	return atm + g * water.density * depth //Pascals
}

function h1_1b(){
	var area = 0.35 * 0.35 //meters^2
	return h1_1a() * area
}

function h1_1c(){
	//unimplemented
}

function h1_1d(){
	return atm / (g * water.density)
}

function h1_2a(){
	return atm + g * mercury.density * 0.2
}

function h1_2b(){
	var k2_peak = atm * Math.pow(Math.E, -(1.28 * g / atm) * 8611)
	var manometer_pressure = h1_2a()
	return manometer_pressure / (k2_peak + g * mercury.density)
}

function h1_2c(){
	//unimplemented
}

function h1_3a(){
	return atm / (g * water.density)
}

function h1_3b(){
	return atm - g * water.density * 0.1
}

function h1_4a(){
	var water_volume = 0.1 / water.density //cubic meters
	return water_volume / 0.05
}

function h1_4b(){
	var water_height = h1_4a()
	var mercury_height = water.density * water_height / mercury.density
	console.log("mercury_height = " + mercury_height)
	return water_height - mercury_height
}

function h1_4c(){
	return water.density / mercury.density * h1_4a() / 3
}

function h1_5a(){
	var radius_cat = 0.2
	var area_cat = Math.PI * radius_cat * radius_cat
	var pressure_cat = 4.5 / area_cat
	var area_elephant = 3000 / pressure_cat
	return Math.sqrt(area_elephant / Math.PI)
}

function h1_5b(){
	var radius_cat = 0.2
	var area_cat = Math.PI * radius_cat * radius_cat
	var pressure_cat = 4.5 / area_cat
	var area_elephant = 3000 / pressure_cat
	var area_total = area_cat + area_elephant
	var equivalent_volume = 4.5 / 680
	return equivalent_volume / area_total
}

function h1_6a(){
	var wine_density = 985
	return 10 * (Math.PI * 0.003 * 0.003) * 985
}

function h1_6b(){
	return 0 //atm * Math.PI * 0.21 * 0.21
}

function h1_6c(){
	var wine_mass = h1_6a()
	var lid_area = Math.PI * 0.21 * 0.21
	return g * wine_mass / lid_area
}

function h1_7(){
	var balloon_volume = 4 * Math.PI * Math.pow(0.33, 3) / 3
	var mass_difference = (air.density - helium.density) * balloon_volume
	return 75 / mass_difference
}

function h1_8(){
	return (30 - 24) / (30 - 20) * water.density
}

function h1_9a(){
	var L = 0.6096
	return (atm + g * 1031 * L/2) * Math.pow(L, 2)
}

function h1_9b(){
	var L = 0.6096
	return (atm + g * 1031 * 3 * L/2) * Math.pow(L, 2)
}

function h1_9c(){
	return 4500 - h1_9d()
}

function h1_9d(){
	return h1_9b() - h1_9a()
}

function h2_1a(){
	// Find the block's volume and multiply by the density of aluminum and gravity to get the weight
}

function h2_1b(){
	// Find the buoyancy acting on the block and subtract from the block's weight
}

function h2_2(){
	// Find the volume of the sphere given its density and weight.
	// Given the volume of displaced liquid and the buoyancy, find the density of the liquid.
}

function h2_3a(){
	// The required mass has a volume where the difference between the weight of the gas and the air
	// 	equals the weight of the lifted mass.
}

function h2_3b(){
	// Calculate buoyancy of replacing air with helium and subtract balloon's weight
}

function h2_3c(){
	// Calculate volume of air that must be displaced by helium to create a change of weight
	// 	that equals the balloon and person combined
}

function h2_4(){
	// Calculate buoyancy of fully submerging the logs, with consideration for water pressure by depth
	// Calculate weight of the logs and subtract from buoyancy
	// Divide remaining buoyancy by the weight of a person to get the number of people supported
}

function h2_5(){
	
}