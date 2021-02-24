import React from "react";
import { Grid, Transition } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import PostCard from "../components/PostCard";
export type PostType = {
  body: string;
  createdAt: string;
  id: string;
  username: string;
  likeCount: number;
  commentCount: number;
  comments?: Array<
    | {
        id?: string;
        createdAt?: string;
        username?: string;
        body?: string;
      }
    | []
  >;
  likes?: Array<{ id?: string; createdAt?: string; username: string } | []>;
};
const Home = () => {
  const { loading, data }: { loading: boolean; data: any } = useQuery(
    FETCH_POSTS_QUERY
  );
  console.log(useQuery(FETCH_POSTS_QUERY));
  return (
    <Grid columns={3}>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          <Transition.Group>
            {data?.getPosts?.map((post: PostType) => (
              <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                <PostCard post={post} />
              </Grid.Column>
            ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      comments {
        id
        createdAt
        username
        body
      }
      likes {
        id
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;

export default Home;
