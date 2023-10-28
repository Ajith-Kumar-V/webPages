function random(a) {
  return Math.random() * a;
}
let panel = document.getElementById("palette");
function showcase(val) {
  let arr = val.response;
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let single = arr[i];
    let date = single.date;
    date = date.split("T");
    panel.innerHTML += `
    <div id="tile">
        <h1>${single.competition}</h1>
        <img src="${single.thumbnail}" title="Poster" alt="Match Thumbnail" />
        <h2>${single.title}</h2>
        <table id="tbl">
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${date[0]}</td>
                    <td>${date[1].slice(0, 5)}
                </tr>
            </tbody>
        </table>
        <a href="${
          single.matchviewUrl
        }" style="decoration:none;" target="_blank"><button>Highlights</button></a>
    </div>
    `;
  }
}
async function fetcher() {
  let token =
    "MTI2MjAwXzE2OTgzMDUyNjNfZDU0ZTY2ZTBhMjRjZDI2ODllMDA0NjM5MzIzNjVmNmRhMDcyNDA0OA==";
  await fetch(`https://www.scorebat.com/video-api/v3/feed/?token=${token}`)
    .then((data) => data.json())
    .then((data) => showcase(data));
}
fetcher();
