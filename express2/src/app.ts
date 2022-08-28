import express, {Request, Response} from 'express';
import axios from 'axios';

interface IDataType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface IArrayType {
  data: Array<IDataType>
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
  const url = "https://api.github.com/users/paulosrlj/following?per_page=100";
      
  const { data } = await axios.get(url) as IArrayType;

  return res.status(200).json({data})
})

let pessoa: any = 'paulo'

app.listen(8000);

// class App {
//   app;

//   constructor() {
//     this.app = express();
//     this.middlewares();
//     this.routes();
//   }

  // routes() {
  //   this.app.get('/', async (req: Request, res: Response) => {

  //     const url = "https://api.github.com/users/paulosrlj/following?per_page=100";
      
  //     const { data } = await axios.get(url) as IArrayType;

  //     return res.status(200).json({data})
  //   })
  // }

//   middlewares() {
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({extended: true}));
//   }
// }


// const app = new App().app;
// app.listen(8000, () => console.log('Ouvindo na porta 8000'))