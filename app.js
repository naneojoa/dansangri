async function loadData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}
