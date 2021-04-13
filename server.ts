import { opine, serveStatic } from "https://deno.land/x/opine@1.2.0/mod.ts";
import  vueServerRenderer from 'https://deno.land/x/vue_server_renderer@/mod.js';

import App from './vno-ssr/build.js';
import { join, dirname, resolve } from "https://deno.land/std@0.63.0/path/mod.ts";
import  styles  from './vno-ssr/style.js'

const port = 3000
const app = opine();

//app.use(serveStatic('vno-build'));
app.use(serveStatic(resolve('vno-build')));
app.use(serveStatic(resolve('src/assets')))
 const __dirname = dirname(import.meta.url);



app.use("/", (req, res, next) => {
      
      let rendered;
      vueServerRenderer(App, (err:any, res:any) => {
        rendered = res;
      });
      
      const html =
      `<html>
         <head>
         
            ${styles}
           
         </head>
         <body>
           <div id="root">${rendered}</div>
           <script type="module" src="./build.js"></script>
         </body>
       </html>`;

    res.type("text/html").send(html);
  });

app.listen({ port });
  
console.log(`Vue SSR App listening on port ${port}`);

