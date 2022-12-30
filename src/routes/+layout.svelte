<div class="container">
<nav>
  <a href="/">KIM</a>
  <ul>
    <li><a href="/">HOME</a></li>
    <li><a href="/posts">POSTS</a></li>
  </ul>
</nav>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  :global(*) {
    font-family: 'Roboto', sans-serif;
  }

  :global(body) {
    background-color: #16161e;
  }

  .container {
    display: flex;
    justify-content: center;
    min-width: 40em;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40em;
    max-width: 40em;
  }

  a {
    link-style: none;
    text-decoration: none;
    color: white;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  a:hover {
    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }

  nav > ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }

</style>

<slot></slot>
