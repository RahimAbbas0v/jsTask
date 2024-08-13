import Data from "./allProsData.js";
let cardsContainer = document.querySelector(".cardsContainer");
console.log(Data);
const showData = (data = Data) => {
  cardsContainer.innerHTML = "";
  data.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="profile">
        <img src=${
          element.user.profile_picture.publicUrl
        } alt="Profile Picture">
        <div class="profile-info">
          <h2>${element.user.name} <span>(elektrik)</span></h2>
          <div class="rating">
            <span>${"⭐".repeat(element.averageRating)}${
            element.averageRating
            }</span>
            <span>(24)</span>
          </div>
         </div>
        </div>
        <div class="tasks">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M12 7.5L8.25 11.25L6.75 9.75" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.64314 1.42397C8.32453 0.525342 9.67547 0.525342 10.3569 1.42397L11.2079 2.5463C11.3938 2.79146 11.6975 2.91726 12.0023 2.87535L13.3976 2.6835C14.5149 2.52988 15.4701 3.48514 15.3165 4.60239L15.1247 5.99774C15.0827 6.30254 15.2085 6.60624 15.4537 6.79214L16.576 7.64314C17.4747 8.32453 17.4747 9.67547 16.576 10.3569L15.4537 11.2079C15.2085 11.3938 15.0827 11.6975 15.1247 12.0023L15.3165 13.3976C15.4701 14.5149 14.5149 15.4701 13.3976 15.3165L12.0023 15.1247C11.6975 15.0827 11.3938 15.2085 11.2079 15.4537L10.3569 16.576C9.67547 17.4747 8.32453 17.4747 7.64314 16.576L6.79214 15.4537C6.60624 15.2085 6.30254 15.0827 5.99774 15.1247L4.60238 15.3165C3.48514 15.4701 2.52988 14.5149 2.6835 13.3976L2.87535 12.0023C2.91726 11.6975 2.79146 11.3938 2.5463 11.2079L1.42397 10.3569C0.525342 9.67547 0.525342 8.32453 1.42397 7.64314L2.5463 6.79214C2.79146 6.60624 2.91726 6.30254 2.87535 5.99774L2.6835 4.60238C2.52988 3.48514 3.48514 2.52988 4.60239 2.6835L5.99774 2.87535C6.30254 2.91726 6.60624 2.79146 6.79214 2.5463L7.64314 1.42397Z" stroke="#5920BC" stroke-width="1.5"/>
        </svg><p>${element.completedTasks} Tasks</p></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M0.75 9C0.75 10.8358 0.849343 12.2598 1.09615 13.3703C1.34105 14.4723 1.72108 15.219 2.25102 15.749C2.78095 16.2789 3.52774 16.6589 4.62973 16.9039C5.74025 17.1507 7.16424 17.25 9 17.25C10.8358 17.25 12.2598 17.1507 13.3703 16.9039C14.4723 16.6589 15.219 16.2789 15.749 15.749C16.2789 15.219 16.6589 14.4723 16.9039 13.3703C17.1507 12.2598 17.25 10.8358 17.25 9C17.25 7.16424 17.1507 5.74025 16.9039 4.62974C16.6589 3.52774 16.2789 2.78095 15.749 2.25102C15.219 1.72108 14.4723 1.34105 13.3703 1.09615C12.2598 0.849342 10.8358 0.75 9 0.75C7.16424 0.75 5.74025 0.849342 4.62973 1.09615C3.52774 1.34105 2.78095 1.72108 2.25102 2.25102C1.72108 2.78095 1.34105 3.52774 1.09615 4.62973C0.849343 5.74025 0.75 7.16424 0.75 9Z" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 5.25V7.5M7.5 12.75V7.5M7.5 7.5H5.25H10.5M12.75 7.5H10.5M10.5 7.5V5.25V10.5M10.5 12.75V10.5M10.5 10.5H12.75H5.25" stroke="#5920BC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>${
          element.eliteTasker && element.supervisor
            ? "<p>Top Pro</p>"
            : !element.eliteTasker && element.supervisor
            ? "<p>Supervisor</p>"
            : !element.eliteTasker && !element.supervisor
            ? "<p>New Pro</p>"
            : element.eliteTasker && !element.supervisor
            ? "<p>Pro</p>"
            : null
        }</span >
      </div >
      <p>${element.bio}</p>
      <div class="actions">
        <a href="#" class="view-profile">view profile</a>
        <div class="price">$35</div>
        <button class="book-now">Book Now</button>
      </div>`;
    cardsContainer.append(card);
  });
};

let sortTasks = document.querySelector("#sort2");
sortTasks.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue === "Ascending") {
    Data.sort((a, b) => a.completedTasks - b.completedTasks);
  } else if (selectedValue === "Descending") {
    Data.sort((a, b) => b.completedTasks - a.completedTasks);
  } else {
    alert("Invalid selection");
    return;
  }
  showData();
});

let sortRating = document.querySelector("#sort1");
sortRating.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue === "Ascending") {
    Data.sort((a, b) => a.averageRating - b.averageRating);
  } else if (selectedValue === "Descending") {
    Data.sort((a, b) => b.averageRating - a.averageRating);
  } else {
    alert("Invalid selection");
    return;
  }
  showData();
});

const topPros = document.querySelector(".topPros");
topPros.addEventListener("click", () => {
  const filteredData = Data.filter(
    (element) => element.eliteTasker && element.supervisor
  );
  showData(filteredData);
});
const pros = document.querySelector(".pros");
pros.addEventListener("click", () => {
  const filteredData = Data.filter(
    (element) => element.eliteTasker && !element.supervisor
  );
  showData(filteredData);
});
const newPros = document.querySelector(".newPros");
newPros.addEventListener("click", () => {
  const filteredData = Data.filter(
    (element) => !element.eliteTasker && !element.supervisor
  );
  showData(filteredData);
});
const supervisor = document.querySelector(".supervisor");
supervisor.addEventListener("click", () => {
  const filteredData = Data.filter(
    (element) => !element.eliteTasker && element.supervisor
  );
  showData(filteredData);
});

showData();
