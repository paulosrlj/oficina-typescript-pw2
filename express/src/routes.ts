import { Request, Response, Router } from "express";
import axios from "axios";

const router = Router();

interface IBody {
  email: string;
  password: string;
}

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

interface IApiResponse {
  data: IDataType[]
}

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  const { data } = (await axios.get(
    "https://api.github.com/users/paulosrlj/following?per_page=100"
  )) as IApiResponse;

  console.log(data[0].avatar_url);

  return res.status(200).json({ data });
});

router.post("/", (req: Request, res: Response) => {
  const body = req.body as IBody;
  console.log(body);

  return res.status(200).json({ ok: body });
});

export { router };
