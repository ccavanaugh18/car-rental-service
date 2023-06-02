// Booking Messages
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('.box-form');
	const errorMessage = document.querySelector('.error-message');
	const successMessage = document.querySelector('.success-message');
	const closeIcon = document.querySelector('.fa-solid.fa-x');
  
	const selects = Array.from(form.querySelectorAll('select'));
	const dateInputs = Array.from(form.querySelectorAll('input[type="date"]'));
  
	form.addEventListener('submit', function(event) {
	  event.preventDefault();
  
	  const modifiedSelects = selects.filter(select => select.value !== '' && select.value !== select.options[0].value);
	  const modifiedDates = dateInputs.filter(dateInput => dateInput.value !== '');
  
	  if (modifiedSelects.length + modifiedDates.length < selects.length + dateInputs.length - 2) {
		errorMessage.style.display = 'flex';
		successMessage.style.display = 'none';
	  } else {
		errorMessage.style.display = 'none';
		successMessage.style.display = 'flex';
	  }
	});
  
	closeIcon.addEventListener('click', function() {
	  errorMessage.style.display = 'none';
	  successMessage.style.display = 'none';
	});
  });

  //Update vehicle content models dynamically
const pickBox = document.querySelector('.pick-box');
const boxVehicles = document.querySelector('.box-vehicles');

pickBox.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    const selectedClass = event.target.classList[0];

   
    const buttons = pickBox.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('colored-button'));

   
    event.target.classList.add('colored-button');

    // Update the box-vehicles content based on the selected button
    switch (selectedClass) {
      case 'btnAudi':
        boxVehicles.innerHTML = `
		<div class="pick-vehicle">
		<img src="assets/audia1.jpg" alt="car-img">
	  </div>
	  <div class="pick-description">
		<div class="pick-description-price"><span>$45</span> / rent per day</div>
		<div class="pick-description-table">
		  <div class="pick-description-table-col">
			<span>Make</span>
			<span>Audi</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Model</span>
			<span>A1</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Year</span>
			<span>2012</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Doors</span>
			<span>4</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>AC</span>
			<span>Yes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Trans</span>
			<span>Manual</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Fuel</span>
			<span>Gasoline</span>
		  </div>
		  <a class="reserve-btn" href="#booking">Reserve Now</a>
		</div>
	  </div>
	`;
        break;
      case 'btnVW':
        boxVehicles.innerHTML = `
		<div class="pick-vehicle">
		<img src="assets/golf6.jpg" alt="car-img">
	  </div>
	  <div class="pick-description">
		<div class="pick-description-price"><span>$37</span> / rent per day</div>
		<div class="pick-description-table">
		  <div class="pick-description-table-col">
			<span>Make</span>
			<span>Volkswagen</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Model</span>
			<span>Golf 6</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Year</span>
			<span>2008</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Doors</span>
			<span>4</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>AC</span>
			<span>Yes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Trans</span>
			<span>Manual</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Fuel</span>
			<span>Gasoline</span>
		  </div>
		  <a class="reserve-btn" href="#booking">Reserve Now</a>
		</div>
	  </div>
	`;
        break;
      case 'btnToyota':
        boxVehicles.innerHTML = `
		<div class="pick-vehicle">
		<img src="assets/toyotacamry.jpg" alt="car-img">
	  </div>
	  <div class="pick-description">
		<div class="pick-description-price"><span>$30</span> / rent per day</div>
		<div class="pick-description-table">
		  <div class="pick-description-table-col">
			<span>Make</span>
			<span>Toyota</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Model</span>
			<span>Camry</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Year</span>
			<span>2011</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Doors</span>
			<span>4</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>AC</span>
			<span>Yes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Trans</span>
			<span>Automatic</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Fuel</span>
			<span>Gasoline</span>
		  </div>
		  <a class="reserve-btn" href="#booking">Reserve Now</a>
		</div>
	  </div>
	`;
        break;
      case 'btnBMW':
        boxVehicles.innerHTML = `
		<div class="pick-vehicle">
		<img src="assets/bmw320.jpg" alt="car-img">
	  </div>
	  <div class="pick-description">
		<div class="pick-description-price"><span>$35</span> / rent per day</div>
		<div class="pick-description-table">
		  <div class="pick-description-table-col">
			<span>Make</span>
			<span>BMW</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Model</span>
			<span>320</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Year</span>
			<span>2012</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Doors</span>
			<span>4</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>AC</span>
			<span>Yes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Trans</span>
			<span>Automatic</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Fuel</span>
			<span>Gasoline</span>
		  </div>
		  <a class="reserve-btn" href="#booking">Reserve Now</a>
		</div>
	  </div>
	`;
        break;
      case 'btnMB':
        boxVehicles.innerHTML = `
		<div class="pick-vehicle">
		<img src="assets/benz.jpg" alt="car-img">
	  </div>
	  <div class="pick-description">
		<div class="pick-description-price"><span>$50</span> / rent per day</div>
		<div class="pick-description-table">
		  <div class="pick-description-table-col">
			<span>Make</span>
			<span>Mercedes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Model</span>
			<span>Benz GLK</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Year</span>
			<span>2009</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Doors</span>
			<span>4</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>AC</span>
			<span>Yes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Trans</span>
			<span>Manual</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Fuel</span>
			<span>Diesel</span>
		  </div>
		  <a class="reserve-btn" href="#booking">Reserve Now</a>
		</div>
	  </div>
	`;
        break;
      case 'btnVWPassat':
        boxVehicles.innerHTML = `
		<div class="pick-vehicle">
		<img src="assets/passatcc.jpg" alt="car-img">
	  </div>
	  <div class="pick-description">
		<div class="pick-description-price"><span>$25</span> / rent per day</div>
		<div class="pick-description-table">
		  <div class="pick-description-table-col">
			<span>Make</span>
			<span>Volkswagen</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Model</span>
			<span>Passat CC</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Year</span>
			<span>2014</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Doors</span>
			<span>4</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>AC</span>
			<span>Yes</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Trans</span>
			<span>Automatic</span>
		  </div>
		  <div class="pick-description-table-col">
			<span>Fuel</span>
			<span>Gasoline</span>
		  </div>
		  <a class="reserve-btn" href="#booking">Reserve Now</a>
		</div>
	  </div>
	`;
    }
  }
});
