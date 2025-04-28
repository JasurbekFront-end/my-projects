// @ts-nocheck
/* Synchronous code */
// console.log('before');
// console.log('current');
// console.log('after');

/* Asynchronous code */
// setTimeout(() => console.log('before'), 0);
// console.log('current');
// setTimeout(() => console.log('after'), 0);

function getGithubUser(username, callback) {
  console.log('Loading user...');
  setTimeout(() => {
    // request to github api (backend)
    const user = { id: 123, username };

    callback(user);
  }, 2000);
}

function getGithubRepos(userId, callback) {
  console.log('Loading repos...');
  setTimeout(() => {
    const repos = [
      { id: 1, name: 'repo1' },
      { id: 2, name: 'repo2' },
      { id: 3, name: 'repo3' }
    ];
    callback(repos);
  }, 2000);
}

getGithubUser('arslonbekXX', user => {
  console.log('user = ', user);
  getGithubRepos(user.id, repos => {
    console.log('repos = ', repos);
  });
});

/**
 * Challenge - 1
 * 1. Loading user...
 * 2. user = { id: 123, username: 'arslonbekXX' }
 * 3. Loading repos...
 * 4. repos = [
 *    { id: 1, name: 'repo1' },
 *    { id: 2, name: 'repo2' },
 *    { id: 3, name: 'repo3' },
 * ]
 * 5. Loading commits...
 * 6. commits = [
 *    { id: 1, message: 'commit1' },
 *    { id: 2, message: 'commit2' },
 *    { id: 3, message: 'commit3' },
 * ]
 */
