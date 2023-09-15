<script lang="ts">
  import { counter } from "./store.js";
  export let name: string;
</script>

<button
  type="button"
  class="btn btn-success btn-lg m-2"
  on:click={$counter.increment}
>
  {name} - Count is {$counter.count}
</button>
