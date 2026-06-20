let wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];

function render() {
  $("#wisdom-container").empty();

  wisdom.forEach((item) => {
    $("#wisdom-container").append(`
            <div>
                ${item.text}
                <span class="delete" data-id="${item.id}">x</span>
            </div>
        `);
  });
}

render();

$("#add-btn").on("click", function () {
  const text = $("#wisdom-input").val();

  if (!text) {
    return;
  }

  wisdom.push({
    id: Date.now(),
    text: text,
  });

  render();

  $("#wisdom-input").val("");

  
  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }
});

$("#clear-btn").on("click", function () {
  localStorage.removeItem("wisdom");

  wisdom = [];

  render();
});

$("#wisdom-container").on("click", ".delete", function () {
  const id = Number($(this).data("id"));

  wisdom = wisdom.filter((item) => item.id !== id);

  localStorage.setItem("wisdom", JSON.stringify(wisdom));

  render();
});
