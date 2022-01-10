//https://api.npoint.io/06ad9bd0851e68b2845d

const curState = document.querySelectorAll("#current");
const prevState = document.querySelectorAll("#previous");
const btns = document.querySelectorAll("button");

const fetchStates = async (state = "weekly") => {
  const res = await fetch("data.json");
  const data = await res.json();
  curState.forEach((el, i) => {
    el.textContent = `${data[i].timeframes[state].current}hrs`;
  });
  prevState.forEach((el, i) => {
    el.textContent = `Last Week - ${data[i].timeframes[state].previous}hrs`;
  });
};

fetchStates();

for (let h = 0; h < btns.length; h++) {
  const btn = btns[h];
  btn.addEventListener("click", e => {
    e.preventDefault();
    btns.forEach(el => el.classList.remove("active-text"));
    e.target.classList.add("active-text");
    const dateOption = e.target.textContent.toLowerCase();
    switch (dateOption) {
      case "daily":
        break;
      case "weekly":
        break;
      case "monthly":
        break;

      default:
        break;
    }
    fetchStates(dateOption);
  });
}
