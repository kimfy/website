/** @type {import('./$types').PageServerLoad} */
export const load = ({params}) => {
  return {
    post: {
      title: "Slå deg ned",
      author: "Kim Iversen",
      created: "today",
      id: params.slug,
      updated: "a few minutes ago",
      content: content
    }
  };
};

const content = `
___
Hallais,

Jeg er Kim, pappa, 28 år gammel og fra Bergen. Jobber som DevOps Engineer (konsulent) i [blinQ](https://blinq.no). Interesse for stort sett alt innen IT, både lavnivå og høynivå, automasjon, utvikling, Liverpool F.C., Formel 1 og fotografering. 

Med dette tar jeg steget ut i en verden jeg lenge har hatt lyst å utforske.

I flere år har jeg hatt et ønske om å bruke kompetansen min på å bygge noe selv, som jeg kan dele med andre. Dette blir mitt hjørne, hvor jeg vil snakke om livet, karriere, hobbyer og andre ting jeg synes er interessant.

Jeg håper at jeg klarer å lære noe vekk og hjelpe andre med å finne inspirasjon til å gjøre noe tilsvarende.

Det vil ikke være noe faste dager jeg poster, noen artikler vil bli på engelsk og noen på norsk. Nettstedet utvikles av meg, foreløpig i SvelteKit - fordi det nettopp gikk i GA - og jeg ville prøve noe nytt. Jeg er ingen UI Designer, så mye av grafikken du vil se her gjenspeiles i temaet jeg bruker i \`neovim\`, for øyeblikket [tokyonight](https://github.com/folke/tokyonight.nvim#night). Nettstedets innhold vil skrives i Markdown, usikker på hvordan jeg skal løse serverbiten enda.

  Uansett, litt av greien med siden er at den skal være open source, jeg kommer til å prøve meg fram med flere forskjellige rammeverk og teknikker. Jeg håper jeg lærer en del av å drive denne siden.

Vi tytes plutselig.
`;
