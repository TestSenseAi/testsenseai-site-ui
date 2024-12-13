import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'testsenseaisiteui0805d5fd',
  access: (allow) => ({
    'private/{entity_id}/*': [allow.entity('identity').to(['read', 'write', 'delete'])],
    'public/*': [allow.guest.to(['read'])],
    'protected/*': [allow.authenticated.to(['read', 'write'])],
  }),
});
