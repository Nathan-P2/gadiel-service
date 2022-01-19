import User from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Nathan';

  expect(user.name).toEqual('Nathan');
});
