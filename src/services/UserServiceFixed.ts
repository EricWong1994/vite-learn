import { faker } from '@faker-js/faker'

let seed = 1;

export const fetchUsers = (count = 30) => {
  return [...Array(count)].map(() => ({
    id: seed++,
    name: faker.internet.userName(),
    email: faker.internet.email(),
    // cover: faker.image.abstract(100, 10)
    // cover: faker.image.imageUrl(100, 10)
    cover: faker.image.imageUrl(100, 50, 'cat', true)
  }))
}