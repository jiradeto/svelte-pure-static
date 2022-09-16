<script lang="ts">
  import type { PageData } from './$types';
  import "../app.css";  
  
  export let data: PageData;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap"
  rel="stylesheet"
/>
<div class="content">
  <h1>Persons</h1>
  {#each data.persons as person}
    <div style='background-color:white; margin:20px; padding:10px'>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Weight: {person.weight}</p>
    </div>
  {/each}
</div>
