<div> Привет, мир!</div>;

<script>
  let div = document.querySelector('div');

  // заменяем div.outerHTML на <p>...</p>
  div.outerHTML = '<p>Новый элемент</p>'; // (*)

  // Содержимое div осталось тем же!
  alert(div.outerHTML); // <div>Привет, мир!</div> (**)
</script>