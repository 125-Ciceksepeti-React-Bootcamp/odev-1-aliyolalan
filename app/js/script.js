// JSON Placeholder API tarafından çekilen verilerin gösterilmesi...
const options = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
};

axios(options).then(response => {
  const cardContainer = document.querySelector(".cards");

  if(response.status == 200) {
    response.data.forEach(item  => {
      if (item.id <= 10) {
        const cardWrapper = document.createElement("div");
        const imgElement = document.createElement("img");
        const cardTitle = document.createElement("h2");
        const cardBody = document.createElement("p");
        const cardButton = document.createElement("a");

        cardWrapper.className = "card";
        imgElement.className = "card__image";
        cardTitle.className = "card__title";
        cardBody.className = "card__content";
        cardButton.className = "card__button";

        imgElement.src = "/app/images/300x225.png";
        cardTitle.innerHTML = `${item.title}`;
        cardBody.innerHTML = `${item.body}`;
        cardButton.innerHTML = "Read More";

        cardWrapper.appendChild(imgElement);
        cardWrapper.appendChild(cardTitle);
        cardWrapper.appendChild(cardBody);
        cardWrapper.appendChild(cardButton);
        cardContainer.appendChild(cardWrapper);
      }
    });
  }
})



// Form Data Submit için gerekli olan kodlar...
const formData = document.querySelector('#form');

formData.addEventListener('submit', function (event) {
  event.preventDefault();

  // Form input dataları...
  const companyData = document.querySelector('#company').value;
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const emailAddress = document.querySelector('#email').value;
  const titleData = document.querySelector('#title').value;
  const phoneData = document.querySelector('#phone').value;
  const dateData = document.querySelector('#date').value;
  const textData = document.querySelector('#textarea').value;
  let genderData = document.getElementsByName('gender');

  // Seçilen radio butonun hangisi olduğunu belirlemeye yarayan döngü...
  for (let i = 0; i < genderData.length; i++) {
    if (genderData[i].checked) {
      genderData = genderData[i].value;
    } 
  }
  
  // Submit edildikten sonra formun resetlenmesini sağlar...
  formData.reset();

  TODO:
  // Değişken isimlerini düzenlemen gerekiyor.
  // Seçilen HTML elementlerinin içine yazılan veriler...
  const modalCompany = (document.querySelector('#modalCompany').innerHTML = companyData);
  const modalFirstName = (document.querySelector('#modalFirstName').innerHTML = firstName);
  const modalLastName = (document.querySelector('#modalLastName').innerHTML = lastName);
  const modalEmail = (document.querySelector('#modalEmail').innerHTML = emailAddress);
  const modalTitle = (document.querySelector('#modalTitle').innerHTML = titleData);
  const modalPhone = (document.querySelector('#modalPhone').innerHTML = phoneData);
  const modalGender = (document.querySelector('#modalGender').innerHTML =
    genderData);
  const modalDate = (document.querySelector('#modalDate').innerHTML = dateData);
  const modalMessage = (document.querySelector('#modalMessage').innerHTML =
    textData);
});



// Modal elementinin açılması için gerekli kodlar...
const modalEl = document.getElementById('modal');
const modalBtn = document.getElementById('submitBtn');
const closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
function openModal() {
  modalEl.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);
function closeModal() {
  modalEl.style.display = 'none';
}