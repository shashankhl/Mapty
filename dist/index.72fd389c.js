"use strict";const t=document.querySelector(".form"),e=document.querySelector(".workouts"),o=document.querySelector(".form__input--type"),s=document.querySelector(".form__input--distance"),i=document.querySelector(".form__input--duration"),a=document.querySelector(".form__input--cadence"),r=document.querySelector(".form__input--elevation");class n{date=new Date;id=(Date.now()+"").slice(-10);clicks=0;constructor(t,e,o){this.coords=t,this.distance=e,this.duration=o}_setDescription(){this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)} on ${["January","February","March","April","May","June","July","August","September","October","November","December"][this.date.getMonth()]} ${this.date.getDate()}`}click(){this.clicks++}}class c extends n{type="running";constructor(t,e,o,s){super(t,e,o),this.cadence=s,this.calcPace(),this._setDescription()}calcPace(){return this.pace=this.duration/this.distance,this.pace}}class u extends n{type="cycling";constructor(t,e,o,s){super(t,e,o),this.elevation=s,this.calcSpeed(),this._setDescription()}calcSpeed(){return this.speed=this.distance/(this.duration/60),this.speed}}new class{#t;#e=13;#o;#s=[];constructor(){this._getPosition(),this._getLocalStorage(),t.addEventListener("submit",this._newWorkout.bind(this)),o.addEventListener("change",this._toggleElevationField),e.addEventListener("click",this._moveToPopup.bind(this))}_getPosition(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){alert("Could not get your position")})}_loadMap(t){let{latitude:e}=t.coords,{longitude:o}=t.coords,s=[e,o];this.#t=L.map("map").setView(s,13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.#t),this.#t.on("click",this._showForm.bind(this)),this.#s.forEach(t=>{this._renderWorkoutMarker(t)})}_showForm(e){this.#o=e,t.classList.remove("hidden"),s.focus()}_hideForm(){s.value=i.value=a.value=r.value="",t.style.display="none",t.classList.add("hidden"),setTimeout(()=>t.style.display="grid",1e3)}_toggleElevationField(){r.closest(".form__row").classList.toggle("form__row--hidden"),a.closest(".form__row").classList.toggle("form__row--hidden")}_newWorkout(t){let e;let n=(...t)=>t.every(t=>Number.isFinite(t)),l=(...t)=>t.every(t=>t>0);t.preventDefault();let p=o.value,d=+s.value,_=+i.value,{lat:h,lng:m}=this.#o.latlng;if("running"===p){let t=+a.value;if(!n(d,_,t)||!l(d,_,t))return alert("Wrong Input");e=new c([h,m],d,_,t)}if("cycling"===p){let t=+r.value;if(!n(d,_,t)||!l(d,_))return alert("Input have to be positive number!");e=new u([h,m],d,_,t)}this.#s.push(e),console.log(e),this._renderWorkoutMarker(e),this._renderWorkout(e),this._hideForm(),this._setLocalStorage()}_renderWorkoutMarker(t){L.marker(t.coords).addTo(this.#t).bindPopup(L.popup({maxWidth:250,minWidth:250,autoClose:!1,closeOnClick:!1,className:`${t.type}-popup`})).setPopupContent(`${"running"===t.type?"\uD83C\uDFC3‍♂️":"\uD83D\uDEB4‍♀️"} ${t.description}`).openPopup()}_renderWorkout(e){let o=`
    <li class="workout workout--${e.type}" data-id="${e.id}">
      <h2 class="workout__title">${e.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${"running"===e.type?"\uD83C\uDFC3‍♂️":"\uD83D\uDEB4‍♀️"}</span>
        <span class="workout__value">${e.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
       <span class="workout__icon">⏱</span>
       <span class="workout__value">${e.duration}</span>
       <span class="workout__unit">min</span>
      </div>`;"running"===e.type&&(o+=`
       <div class="workout__details">
         <span class="workout__icon">⚡️</span>
         <span class="workout__value">${e.pace.toFixed(1)}</span>
         <span class="workout__unit">min/km</span>
       </div>
       <div class="workout__details">
         <span class="workout__icon">🦶🏼</span>
         <span class="workout__value">${e.cadence}</span>
         <span class="workout__unit">spm</span>
       </div>
     </li>`),"cycling"===e.type&&(o+=`
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${e.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${e.elevation}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`),t.insertAdjacentHTML("afterend",o)}_moveToPopup(t){let e=t.target.closest(".workout");if(!e)return;let o=this.#s.find(t=>t.id===e.dataset.id);this.#t.setView(o.coords,this.#e,{animate:!0,pan:{duration:1}})}_setLocalStorage(){localStorage.setItem("workouts",JSON.stringify(this.#s))}_getLocalStorage(){let t=JSON.parse(localStorage.getItem("workouts"));t&&(this.#s=t,this.#s.forEach(t=>{this._renderWorkout(t)}))}reset(){localStorage.removeItem("workouts"),location.reload()}};
//# sourceMappingURL=index.72fd389c.js.map
