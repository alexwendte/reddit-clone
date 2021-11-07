// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Post, Vote } = initSchema(schema);

export {
  Comment,
  Post,
  Vote
};