function $(id) {
    return document.getElementById(id);
}
function appendValue(val) {
  $("display").value += val;
}

function clearDisplay() {
  $("display").value = '';
}

function deleteLast() {
  let current = $("display").value;
  $("display").value = current.slice(0, -1);
}

function calculate() {
  try {
    let result = eval($("display").value);
    $("display").value = result;
  } catch {
    $("display").value = "Invailed";
  }
}