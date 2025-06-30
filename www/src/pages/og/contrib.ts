import { ImageResponse } from "@vercel/og";
import ContribImg from "@components/react/ContribImg";

export async function GET() {
  // const gitlab = await fetch("https://gitlab.com/users/dotmrjosh/calendar.json");
  // console.log(await gitlab.json());

  return new ImageResponse(ContribImg(), {
    width: 1200,
    height: 800,
  });
}
