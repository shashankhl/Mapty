"use strict";
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
//let map, mapEvent;
class Workout {
    date = new Date();
    id = (Date.now() + "").slice(-10);
    clicks = 0;
    constructor(coords, distance, duration){
        this.coords = coords; //[lat,lng]
        this.distance = distance; //in km
        this.duration = duration; //in min
    }
    _setDescription() {
        // prettier-ignore
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
    click() {
        this.clicks++;
    }
}
class Running extends Workout {
    type = "running";
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        //this.type='cycling'
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout {
    type = "cycling";
    constructor(coords, distance, duration, elevation){
        super(coords, distance, duration);
        this.elevation = elevation;
        this.calcSpeed();
        this._setDescription();
    }
    calcSpeed() {
        //km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}
// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cyl1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cyl1);
////////////////////////////////////////////////
//application architecture
class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];
    constructor(){
        //get user's position
        this._getPosition();
        //get data from local storage
        this._getLocalStorage();
        //attach event handlers
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField);
        containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
    }
    _getPosition() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
            alert("Could not get your position");
        });
    }
    _loadMap(position) {
        // current position
        //console.log(position);
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        // console.log(latitude, longitude);
        const coords = [
            latitude,
            longitude
        ];
        this.#map = L.map("map").setView(coords, 13);
        //console.log(map);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        //handling clicks on map
        this.#map.on("click", this._showForm.bind(this));
        this.#workouts.forEach((work)=>{
            // this._renderWorkout(work);
            this._renderWorkoutMarker(work);
        });
    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }
    _hideForm() {
        //empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
        form.style.display = "none";
        form.classList.add("hidden");
        setTimeout(()=>form.style.display = "grid", 1000);
    }
    _toggleElevationField() {
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    }
    _newWorkout(e) {
        const validInputs = (...inputs)=>inputs.every((inp)=>Number.isFinite(inp));
        const allPositive = (...inputs)=>inputs.every((inp)=>inp > 0);
        e.preventDefault();
        //Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        //if workout running,create running object
        if (type === "running") {
            const cadence = +inputCadence.value;
            //check if data is valid
            if (// !Number.isFinite(distance) ||
            // !Number.isFinite(duration) ||
            // !Number.isFinite(cadence)
            !validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) return alert("Wrong Input");
            workout = new Running([
                lat,
                lng
            ], distance, duration, cadence);
        }
        //if workout is cycling ,create cycling object
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) return alert("Input have to be positive number!");
            workout = new Cycling([
                lat,
                lng
            ], distance, duration, elevation);
        }
        //add new object to workout array
        this.#workouts.push(workout);
        console.log(workout);
        //Render workout on map as marker
        //display marker
        this._renderWorkoutMarker(workout);
        //render the workout on the list
        this._renderWorkout(workout);
        //hide form + clear input fields
        this._hideForm();
        //set local storage to all workouts
        this._setLocalStorage();
    }
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 250,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        })).setPopupContent(`${workout.type === "running" ? "\uD83C\uDFC3‍♂️" : "\uD83D\uDEB4‍♀️"} ${workout.description}`).openPopup();
    }
    _renderWorkout(workout, geo, weather) {
        let html = `
    <li class="workout workout__${workout.type}" data-id="${workout.id}">
        <div class="menu menu__hidden">
          <ul class="menu__list">
            <li class="menu__item menu__item--edit">
              <svg class="menu__icon">
                <use xlink:href="${icons}#icon-pencil"></use>
              </svg>
              <span>Edit form</span>
            </li>
            <li class="menu__item menu__item--delete">
              <svg class="menu__icon">
                <use xlink:href="${icons}#icon-trash"></use>
              </svg>
              <span>Delete this list</span>
            </li>
            <li class="menu__item menu__item--clear">
              <svg class="menu__icon">
                <use xlink:href="${icons}#icon-trash"></use>
              </svg>
              <span>Clear all lists</span>
            </li>
            <li class="menu__item menu__item--sort">
              <svg class="menu__icon">
                <use xlink:href="${icons}#icon-chevron-down"></use>
              </svg>
              <span>Sort by</span><span class="menu__sort--text">(km, date)</span>
            </li>
          </ul>
        </div>

        <h2 class="workout__title">${setDescription(workout)}${geo ? "," : ""}
        ${geo ?? ""} <img class="workout__weather" src="${weather}"/>

        </h2>
        <svg class="workout__icon">
          <use xlink:href="${icons}#icon-dots-three-horizontal"></use>
        </svg>
        <div class="workout__details">
          <span class="workout__imoji workout__imoji--type">${workout.type === "running" ? "\uD83C\uDFC3‍♂" : "\uD83D\uDEB4‍♀️"}</span>
          <span class="workout__value workout__value--distance">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__imoji">⏱</span>
          <span class="workout__value workout__value--duration">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
  `;
        if (workout.type === "running") html += `
       <div class="workout__details">
         <span class="workout__icon">⚡️</span>
         <span class="workout__value">${workout.pace.toFixed(1)}</span>
         <span class="workout__unit">min/km</span>
       </div>
       <div class="workout__details">
         <span class="workout__icon">🦶🏼</span>
         <span class="workout__value">${workout.cadence}</span>
         <span class="workout__unit">spm</span>
       </div>
     </li>`;
        if (workout.type === "cycling") html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevation}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`;
        form.insertAdjacentHTML("afterend", html);
    }
    _moveToPopup(e) {
        const workoutEl = e.target.closest(".workout");
        // console.log(workoutEl);
        if (!workoutEl) return;
        const workout = this.#workouts.find((work)=>work.id === workoutEl.dataset.id);
        // console.log(workout);
        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1
            }
        });
    //using public interfeace
    //due to problem in local storage we are disableing it
    // workout.click();
    // console.log(workout.clicks);
    }
    _setLocalStorage() {
        localStorage.setItem("workouts", JSON.stringify(this.#workouts));
    }
    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem("workouts"));
        //console.log(data);
        if (!data) return;
        this.#workouts = data;
        this.#workouts.forEach((work)=>{
            this._renderWorkout(work);
        // this._renderWorkoutMarker(work)
        });
    }
    reset() {
        localStorage.removeItem("workouts");
        location.reload();
    }
}
const app = new App(); //app._getPosition();
 //console.log(app);

//# sourceMappingURL=index.672d4772.js.map