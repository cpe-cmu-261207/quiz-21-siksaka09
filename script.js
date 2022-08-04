const btnRandom = document.getElementById(`btn-random`);
const userCard = document.getElementById(`div-user-card`);
const textName = document.getElementById(`p-name`);
const imgProfile = document.getElementById(`img-profile`);
const textEmail = document.getElementById(`p-email`);
const textAddress = document.getElementById(`p-address`);

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  userCard.style.display = "none";
}

btnRandom.onclick = async () => {
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.results[0].picture.large;
  textName.innerText =
    resp.data.results[0].name.title +
    " " +
    resp.data.results[0].name.first +
    " " +
    resp.data.results[0].name.last;
  textEmail.innerText = resp.data.results[0].email;
  textAddress.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
};
