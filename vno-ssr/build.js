/* eslint-disable */
/* eslint-disable prettier/prettier */
// deno-lint-ignore-file
import Vue from "https://deno.land/x/vue_js@/mod.js";

const DocItem = Vue.component("doc-item", {
  template:  /* html */ `
  <div :id="element">
    <li class="docItemContainer">
      <code v-if="code" class="codeblock"> {{ code }}</code>
      <div class="desc">
        <p>{{ bullet }}</p>
      </div>
      <img v-if="gif" class="gif" :src="gif" :alt="element" />
    </li>
  </div>
`,
  name: 'doc-item',
  props: ['element', 'bullet', 'code', 'gif'],
});

const DocNav = Vue.component("doc-nav", {
  template:  /* html */ `
  <a :href="link" class="docnav-element">{{ element }}</a>
`,
  name: 'doc-nav',
  props: ['element', 'methods', 'link'],
});

const Home = Vue.component("Home", {
  template:  /* html */ `
  <div class="home">
    <a href="https://github.com/open-source-labs/vno">
      <img id="vnoLogo" src="https://i.ibb.co/kDnqSNP/vnoLogo.png" />
    </a>
    <h1>A Vue / Deno Adapter</h1>
    <br />
    <div class="logos">
      <a href="https://github.com/open-source-labs/vno" target="_blank">
        <img id="gitLogo" src="https://i.ibb.co/JzTPTMZ/git-logo.png"
      /></a>
      <a href="https://deno.land/x/vno@v1.3.1" target="_blank">
        <img id="denoLogo" src="https://i.ibb.co/0ZP9MdP/deno-logo.png"
      /></a>
    </div>
  </div>
`,
  name: "Home",

  props: {
    msg: String,
  },
});

const Team = Vue.component("Team", {
  template:  /* html */ `
  <div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img :src="picture" alt="image" border="0" width="250" height="250" />
      </div>
      
      <div class="flip-box-back">
        <div class="bio">
          <h2>{{ name }}</h2>
        </div>
        <div class="bio">
          <a class="email" :href="email"
            ><i class="fas fa-envelope fa-2x"></i
          ></a>
          <a :href="github" target="_blank">
            <i class="fab fa-github fa-2x"></i
          >
          </a>
          <a :href="linkedIn" target="_blank">
            <i class="fab fa-linkedin-in fa-2x"></i>

          </a>
        </div>
      </div>
    </div>
  </div>
`,
  props: ['name', 'email', 'github', 'linkedIn', 'about', 'picture'],
  name: 'Team',
});

const Docs = Vue.component("docs", {
  template:  /* html */ `
  <div id="docs">
    <nav id="doc-nav">
      <DocNav methods: methods v-for="item in information" :key="'key' +
      item.element" :element="item.element" :href="'#' + item.element" />
    </nav>
    <h1 class="pad">Getting Started</h1>
    <DocItem
      v-for="item in information"
      :key="item.element"
      :element="item.element"
      :bullet="item.bullet"
      :code="item.code"
      :gif="item.gif"
    />
    <div class="moreinfo">
      <div class="lowgos">
        <a href="https://github.com/open-source-labs/vno" class="linkies"
          ><img
            id="gitLogo"
            class="logo"
            src="https://i.ibb.co/JzTPTMZ/git-logo.png"
        /></a>
        <a href="https://deno.land/x/vno" class="linkies"
          ><img
            id="denoLogo"
            class="logo"
            src="https://i.ibb.co/0ZP9MdP/deno-logo.png"
        /></a>
      </div>
    </div>
  </div>
`,
  name: "docs",
  components: { DocItem, DocNav },
  data() {
    return {
      top: "",
      methods: {
        scrollMeTo(refName) {
          var element = this.$refs[refName];
          this.top = element.offsetTop;

          window.scrollTo(0, top);
        },
      },
      information: [
        {
          element: "install",
          bullet: `In order to run vno locally from your machine, you'll need to name and install the executable.`,
          code:
            "deno install --allow-net --unstable -f  https://deno.land/x/vno/install/vno.ts",
          gif: "https://media.giphy.com/media/LVokebNuReGJuwU13R/giphy.gif",
        },
        {
          element: "create",
          bullet: `You can now utilize vno create in your terminal to instantiate a new Vue/Deno project using vno.`,
          code: "vno create [new project]",
          gif: "https://i.ibb.co/Fw5Sp7n/vno-create.gif",
        },
        {
          element: "build",
          bullet: `After successfully intalling and running create (cd into the project folder), you can use the vno build to initialize the parsing of your components. *this method can be utilized without using the create method described above so long as you provide a vno.config.json file containing {root: 'Name', entry: 'relative path to root'}.`,
          code: "vno build",
          gif:
            "https://cdn-images-1.medium.com/max/1600/1*-uhAIJMly9eTevEhgrulqw.gif",
        },
        {
          element: "build --ssr",
          bullet: `To invoke the build method and dynamically create bundled js, css files, and a server.ts for server side rendering your application, type the following into the terminal:`,
          code: "vno build --ssr",
          gif: "https://i.ibb.co/bHC4CHK/Peek-2021-04-14-14-54.gif",
        },
        {
          element: "run dev",
          bullet: `To faciliate development, we have provided access to live reloading which bypasses the need for manual rebuild every time a change has occured during development. You will simply need to call vno run dev to spin up the server with a connection to your root component. If you would like to utilize this functionality but have bypassed the create method, you will need to add an "options": {"port": 3000} to your vno.config.json file.`,
          code: "vno run dev",
          gif: "https://i.ibb.co/6R2R5H5/live-Reload.gif",
        },
        {
          element: "external dependencies",
          bullet: `If you would prefer to not install vno locally to your machine, you can import the module from deno.land into your project.`,
          code: `import Factory from http://deno.land/x/vno/dist/mod.ts`,
        },
        {
          element: "Factory",
          bullet: `instantiate the Factory class`,
          code: `const vno = new Factory()`,
        },
        {
          element: "Build",
          bullet: `run the build method on the Factory class`,
          code: `await vno.build()`,
        },
      ],
    };
  },
});

const App = new Vue({
  template:  /* html */ `
  <div id="app">
    <header>
      <ul class="nav">
        <a @click="handelClick('Home')"><li>Home</li></a>
        <a @click="handelClick('Docs')"><li>Docs</li></a>
        <a @click="handelClick('Team')"><li>Team</li></a>
      </ul>
    </header>

    <div v-if="displayedComponent === 'Home'">
      <Home />
    </div>
    <div class="teamTest" v-else-if="displayedComponent === 'Team'">
      <h1 id="meetTeam">Meet The Team</h1>
      <div class="teamWrapper">
        <Team
          v-for="person in team"
          :key="person.id"
          :name="person.name"
          :about="person.about"
          :picture="person.picture"
          :email="person.email"
          :github="person.github"
          :linkedIn="person.linkedIn"
        />
      </div>
      <div class="teamBottom">
        <div class="teamLowgos">
          <a href="https://github.com/open-source-labs/vno" class="linkies"
            ><img
              id="gitLogo"
              class="logo"
              src="https://i.ibb.co/JzTPTMZ/git-logo.png"
          /></a>
          <a href="https://deno.land/x/vno" class="linkies"
            ><img
              id="denoLogo"
              class="logo"
              src="https://i.ibb.co/0ZP9MdP/deno-logo.png"
          /></a>
        </div>
      </div>
    </div>

    <div v-else-if="displayedComponent === 'Docs'">
      <Docs />
    </div>
    <div v-else-if="displayedComponent === 'Demo'">
      <Demo />
    </div>
  </div>
`,
  name: "app",
  data() {
    return {
      displayedComponent: "Home",
      team: [
        {
          name: "Mikey Gower",
          email: "mailto:gowermikey@gmail.com",
          picture: "https://i.ibb.co/W6z7VzK/Mikey.jpg",
          about: "Mikey loves wine. He also loves to party with said wine.",
          github: "https://github.com/mggower",
          linkedIn: "https://www.linkedin.com/in/mikeygower/",
        },
        {
          name: "Jordan Grubb",
          email: "mailto:ImJordanGrubb@gmail.com",
          picture: "https://i.ibb.co/6mw8kZv/2.png",
          about: "Her drag name is Miss Diagnosed. She loves whiskey.",
          github: "https://github.com/jgrubb16",
          linkedIn: "https://www.linkedin.com/in/j-grubb",
        },
        {
          name: "Kyle Jurassic",
          email: "mailto:kjuresich@gmail.com",
          picture: "https://i.ibb.co/yWBSVcD/Kyle.jpg",
          about: "He made our ReadMe, and he can read you for filth.",
          github: "http://github.com/kjurassic",
          linkedIn: "http://linkedin.com/in/kyle-juresich/",
        },
        {
          name: "Andrew Rehrig",
          email: "mailto:arehrig@gmail.com",
          picture: "https://i.ibb.co/m6NRmm8/Andrew.jpg",
          about:
            "She's beauty. She's grace. She loves a coding test. She can win any sewing challenge.",
          github: "https://github.com/andrew-rehrig",
          linkedIn: "https://www.linkedin.com/in/andrew-rehrig/",
        },
        {
          name: "Dwayne Richards",
          email: "mailto:dwaynerichards@gmail.com",
          picture:
            "https://i.ibb.co/2KXmCTw/Screenshot-from-2021-04-14-13-27-11.png",
          about: "Dwayne loves working on Vno",
          github: "https://github.com/dwaynerichards",
          linkedIn: "https://www.linkedin.com/in/dnkrichards/",
        },
        {
          name: "Brian Jungk",
          email: "mailto:brian.jungk@outlook.com",
          picture:
            "https://i.ibb.co/2SMYB6w/Screenshot-from-2021-04-14-13-26-18.png",
          about: "Brian also loves working on Vno",
          github: "https://github.com/HeroesOfOnesAndZeros",
          linkedIn: "https://www.linkedin.com/in/brian-jungk/",
        },
        {
          name: "Weilan Cui",
          email: "mailto:weilanc@gmail.com",
          picture:
            "https://i.ibb.co/0JRx4gH/Screenshot-from-2021-04-14-18-30-50.png",
          about: "Weilan also loves working on Vno",
          github: "https://github.com/deadxears",
          linkedIn: "https://www.linkedin.com/in/weilan-cui-81aa93b5/",
        },
        {
          name: "Robert Yang",
          email: "mailto:rob.yang@gmail.com",
          picture: "https://i.ibb.co/zSZHVkq/profile.jpg",
          about: "Robert also loves working on Vno",
          github: "https://github.com/unknownbreaker",
          linkedIn: "https://www.linkedin.com/in/robwyang/",
        },
      ],
    };
  },
  methods: {
    handelClick: function (event) {
      this.displayedComponent = event;
      console.log(this.displayedComponent);
    },
  },
  components: {
    Home,
    Team,
    Docs,
  },
});
export default App