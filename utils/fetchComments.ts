import { Comment } from "../typings";

export const fetchComments = async (tweetId: string) => {
  const res = await fetch(`https://twitter-2-0-nu.vercel.app/api/getComments?tweetId=${tweetId}`);

  const comments: Comment[] = await res.json();

  return comments
}