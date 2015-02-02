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

converted
  1 calorie = 4.184 joules
  1 Calorie = 1000 calories
*/

// Constants
var atm = 101300 //pressure of atmosphere
var Avogadro_number = 6.022 * Math.pow(10, 23)
var g = 9.81 //acceleration of gravity
var k_B = 1.38 * Math.pow(10, -23) //Boltzmann's constant
var R = 8.314 //universal gas constant
var air = {
	density: 1.275
}
var aluminum = {
  latent_heat_of_fusion: 3.97 * Math.pow(10, 5),
  melting_point: 660,
  specific_heat: 900
}
var concrete = {
  density: 2200
}
var helium = {
	density: 0.1785
}
var ice = {
  specific_heat: 2090
}
var mercury = {
	density: 13594
}
var styrofoam = {
  density: 50
}
var water = {
  boiling_point: 100,
	density: 1000,
  latent_heat_of_vaporization: 2.256 * Math.pow(10, 6),
  specific_heat: 4186
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
	// constant = 1.6 * 10^5 + water density * ((465 cm^3 / s) / (pi * (2.05 cm)^2)) / 2
  // 1.2 * 10^5 + water density * ((465 cm^3 / s) / (pi * (x cm)^2)) / 2 = constant
  // water density * ((465 cm^3 / s) / (pi * (x cm)^2)) = 2 * (constant - 1.2 * 10^5)
  // ((465 cm^3 / s) / (pi * (x cm)^2)) = 2 * (constant - 1.2 * 10^5) / water density
  // (pi * (x cm)^2) = (465 cm^3 / s) / (2 * (constant - 1.2 * 10^5) / water density)
  // continue solving for x
}

function h2_6(){
  // Convert pressure to absolute
  // Use Bernoulli's equation and solve for x
}

function h2_7a(){
  // Draw a smaller arrow relative to the bigger area
}

function h2_7b(){
  // Use Bernoulli's equation and solve for x
}

function h2_8a(){
  // Draw the arrows inverse proportionate to the area, argue using Bernoulli's equation
}

function h2_8b(){
  // Use Bernoulli's equation to find the air pressure difference in the Mercury tubes
  // Use the air pressure difference in Bernoulli's equation for the air tubes
  // Incorporate the given diameters into finding the area to find the velocity
  // Solve Bernoulli's equation for the velocities of the air
}

function h2_8c(){
  // Multiply the velocities of the air by the areas of the air tubes
}

function h2_9a(){
  // Pressure must drop to compensate for velocity by Bernoulli's equation
}

function h2_9b(){
  // Solve Bernoulli's equation for the unknown pressure in both cases
}

function h2_10(){
  // Solve simplified Bernoulli's equation for the unknown velocity
  // Simplify out the velocity of the gasoline level drop in the tank
}

function h3_1(){
  // Solve for buoyant force of 0.65 of pontoon to equal weight of pontoon
  // 2200 * x + 50 * (1 - x) = 650
  // 2200x + 50 - 50x = 650
  // 2200x - 50x = 600
  // 2150x = 600
  // 600 / 2150 = x
  var pontoon_density = water.density * (1 - 0.35)
  var concrete_fraction = 600 / 2150
  var correct = 2200 * concrete_fraction + 50 * (1 - concrete_fraction) == pontoon_density
  return {
    pontoon_density: pontoon_density,
    concrete_fraction: concrete_fraction,
    correct: correct
  }
}

function h3_2a(){
  var total_Calories = 120 * 26.2 //120 Calories / mile * 26.2 miles
  var total_calories = total_Calories * 1000
  var joules = total_calories * 4.184
  var kilowatt_hours = joules * 2.778 * Math.pow(10, -7)
  var power_cost = kilowatt_hours * 0.10
  var lindt_bars = total_Calories / 200
  return {
    total_Calories: total_Calories,
    joules: joules,
    kilowatt_hours: kilowatt_hours,
    power_cost: power_cost,
    lindt_bars: lindt_bars
  }
}

function h3_2b(){
  var joules = h3_2a().joules
  var water_mass = joules / 2400
  var water_volume = water_mass / water.density
  var liters = water_volume * 1000
  return {
    joules: joules,
    water_mass: water_mass,
    water_volume: water_volume,
    liters: liters,
    text: "The answer is for all practical purposes impossible.\
\nIt's clear that most of the energy expended during the marathon does not go towards sweating."
  }
}

function h3_3(){
  var ginger_ale = {
    calories: 124000,
    specific_heat: 4190
  }
  //joules = calories * 4.184
  var joules_burned = 4190 * 0.2 * (37 - 2)
  var Calories_burned = joules_burned / 4184
  return {
    joules_burned: joules_burned,
    Calories_burned: Calories_burned
  }
}

function h3_4a(){
  // Pressure * Volume = number of moles * R * Temperature
  var n = 9200000 / (R * 737)
  var particles = Avogadro_number * n
  return {
    n: n,
    particles: particles
  }
}

function h3_4b(){
  var energy = 3/2 * h3_4a().n * R * 737
  var lindt_bars = energy / 4184 / 200
  return {
    energy: energy,
    lindt_bars: lindt_bars
  }
}

function h3_4c(){
  var temperature = 737
  var n = atm / (R * temperature)
  var particles = Avogadro_number * n
  return {
    n: n,
    particles: particles
  }
}

function h3_4d(){
  var temperature = 300
  var n = atm / (R * temperature)
  var energy = 3/2 * n * R * 300
  return {
    energy: energy,
    part_b: h3_4b().energy
  }
}

function h3_4e(){
  // N = number of molecules
  // Pressure = 2/3 * N/V * (1/2 * mass of a particle * (velocity of a particle)^2)
  var venus_speed = Math.sqrt(9200000 / (2/3 * h3_4a().particles/1 * (1/2 * 0.04401/Avogadro_number)))
  var earth_speed = Math.sqrt(atm / (2/3 * h3_4c().particles/1 * (1/2 * 0.02801/Avogadro_number)))
  return {
    venus_speed: venus_speed,
    earth_speed: earth_speed
  }
}

function h3_5a(){
  var joules_transferred = water.specific_heat * (1 * 2) //kg * K
  var metal_specific_heat = joules_transferred / (0.5 * (100 - 22)) //kg * K
  return {
    joules_transferred: joules_transferred,
    metal_specific_heat: metal_specific_heat
  }
}

function h3_5b(){
  return {
    text: "The water, as it has a much higher specific heat and can thus transfer more energy as it cools."
  }
}

function h3_5c(){
  return {
    text: "Too small, as additional specific heat would be required to additionally warm the Styrofoam."
  }
}

function h3_6a(){
  var asteroid_energy = 2.6 * Math.pow(10, 15) * Math.pow(32000, 2) / 2
  var transferred_joules = asteroid_energy * 0.01
  var energy_to_boil_off_1kg_seawater = (100 - 1) * water.specific_heat + 
    water.latent_heat_of_vaporization
  var boiled_off = transferred_joules / energy_to_boil_off_1kg_seawater
  return {
    asteroid_energy: asteroid_energy,
    transferred_joules: transferred_joules,
    energy_to_boil_off_1kg_seawater: energy_to_boil_off_1kg_seawater,
    boiled_off: boiled_off.toExponential()
  }
}

function h3_6b(){
  var water_mass = 4/3 * Math.PI * Math.pow(500000, 3) * 1030
  var joules_to_boil_off = h3_6a().energy_to_boil_off_1kg_seawater * water_mass
  var asteroid_energy = joules_to_boil_off * 100
  var asteroid_mass = asteroid_energy / (Math.pow(32000, 2) / 2)
  return {
    water_mass: water_mass.toExponential(),
    joules_to_boil_off: joules_to_boil_off,
    asteroid_energy: asteroid_energy,
    asteroid_mass: asteroid_mass.toExponential()
  }
}

function h3_7(){
  var joules_to_melt_ice = 334000 * 0.45
  var joules_to_warm_water = water.specific_heat * (2.4 + 0.45) * 28
  var joules_from_kg_of_steam = 2.256 * Math.pow(10, 6) + water.specific_heat * (100 - 28)
  var kg_of_steam = (joules_to_melt_ice + joules_to_warm_water) / joules_from_kg_of_steam
  var g_of_steam = kg_of_steam * 1000
  return {
    joules_to_melt_ice: joules_to_melt_ice,
    joules_to_warm_water: joules_to_warm_water,
    joules_from_kg_of_steam: joules_from_kg_of_steam,
    kg_of_steam: kg_of_steam,
    g_of_steam: g_of_steam
  }
}

function h3_8(){
  var joules_to_melt_ice = ice.specific_heat * 0.5 * 10 + 334000 * 0.5
  var water_temperature_lost_to_melting_ice = joules_to_melt_ice / (4186 * 3)
  var final_water_temperature = ((20 - water_temperature_lost_to_melting_ice) * 3 +
    0 * 0.5) / 3.5
  return {
    joules_to_melt_ice: joules_to_melt_ice,
    water_temperature_lost_to_melting_ice: water_temperature_lost_to_melting_ice,
    final_water_temperature: final_water_temperature
  }
}

function h3_9a(){
  var joules_to_heat_water = water.specific_heat * 1 * (100 - 22)
  var joules_from_fused_aluminum = aluminum.latent_heat_of_fusion * 0.1
  var water_temp_after_aluminum_solidified = joules_from_fused_aluminum / water.specific_heat + 22
  var final_temp = (660 * aluminum.specific_heat * 0.1) / (aluminum.specific_heat * 0.1 + 
    water.specific_heat) + water_temp_after_aluminum_solidified
  return {
    joules_to_heat_water: joules_to_heat_water,
    joules_from_fused_aluminum: joules_from_fused_aluminum,
    water_temp_after_aluminum_solidified: water_temp_after_aluminum_solidified,
    final_temp: final_temp,
    text: "None of the water will boil away, not enough heat is added by the cooling aluminum."
  }
}

function h3_9b(){
  return {
    text: "All of the aluminum will solidify."
  }
}

function h3_9c(){
  return {
    final_temp: h3_9a().final_temp
  }
}

function h3_9d(){
  return {
    text: "No, the specific heat of liquid aluminum would be required.\n\
Water could potentially boil away and some aluminum would remain molten if all the water boiled off."
  }
}

function h3_10a(){
  var Q = 20000
  var T = 20
  var joules = Q / (0.5 * T)
  return {
    Q: Q,
    T: T,
    joules: joules
  }
}

function h3_10b(){
  var Q = 80000
  var T = 60
  var joules = Q / (0.5 * T)
  return {
    Q: Q,
    T: T,
    joules: joules
  }
}

function h3_10c(){
  return {
    melting: "-20 Celsius",
    vaporization: "40 Celsius"
  }
}

function h3_10d(){
  return {
    fusion: "40000 J/kg",
    vaporization: "120000 J/kg"
  }
}
