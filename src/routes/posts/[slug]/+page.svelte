<script>
  /** @type {import('./$types').PageData} **/
  export let data;
  import SvelteMarkdown from 'svelte-markdown';
</script>

<div class="container">
  <article>
    <h1>{data.title}</h1>
    <div class="meta">
      {data.author}, {data.created} {#if data.updated }, updated {data.updated} {/if}
    </div>
    <SvelteMarkdown source={data.content} />
  </article>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    color: white;
  }

  article {
    min-width: 40em;
    max-width: 40em; 
    overflow-wrap: break-word;
  }

  article > :global(h1) {
    font-size: 2.5em;
    color: #82aaff;
  }

  article > :global(p) {
    font-size: 1.2em;
    color: #d8dee9;
  }

  :global(img) {
    /** responsive image **/
    height: auto;
    max-width: 100%;
  }
</style>

