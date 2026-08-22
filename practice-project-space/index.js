import axios from "axios";

const username = process.argv[2];
const total_number = process.argv[3];

if (process.argv[2] == null) {
  console.log("Hahahahahahahahahaha Give me something to find, bro 😑");
} else {
  axios
    .get(`https://api.github.com/users/${username}/events`)
    .then(function (response) {
      const event = response.data;

      event.slice(0, total_number).forEach(function (e) {
        console.log(e)
      });
    })
    .catch(function (e) {
      console.log("Naah, It didn't came 😕 ", e.message);
    });
}
