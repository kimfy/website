<script>
  /** @type {import('./$types').PageData} **/
  export let data;
  import SvelteMarkdown from 'svelte-markdown';
</script>

<div class="container">
  <article>
    <h1>{data.post.title}</h1>
    <div class="meta">
      {data.post.author}, {data.post.created} {#if data.post.updated }, updated {data.post.updated} {/if}
    </div>
    <SvelteMarkdown source={data.post.content} />
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

