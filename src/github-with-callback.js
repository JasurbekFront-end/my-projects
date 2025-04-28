const DELAY = 500;

function getGithubUser(username, callback) {
  console.log(`Loading user(${username})...`);
  setTimeout(() => {
    // request to github api (backend)
    const user = { id: 123, username };

    callback(user);
  }, DELAY);
}

function getUserRepos(userId, callback) {
  console.log(`Loading repos owner ${userId} ...`);
  setTimeout(() => {
    const repos = [
      { id: 1, name: 'repo1' },
      { id: 2, name: 'repo2' },
      { id: 3, name: 'repo3' }
    ];
    callback(repos);
  }, DELAY);
}

function getRepoBranches(repoId, callback) {
  console.log(`Loading branches of repo ${repoId}...`);
  setTimeout(() => {
    const branches = ['main', 'dev', 'test'];
    callback(branches);
  }, DELAY);
}

function getRepoCommits(branchId, callback) {
  console.log(`Loading commits of branch ${branchId} ...`);
  setTimeout(() => {
    const commits = [
      { id: 1, message: 'commit1' },
      { id: 2, message: 'commit2' },
      { id: 3, message: 'commit3' }
    ];
    callback(commits);
  }, DELAY);
}

function getCommitFiles(commitId, callback) {
  console.log(`Loading files of commit ${commitId} ...`);
  setTimeout(() => {
    const files = [
      { id: 1, name: 'file1' },
      { id: 2, name: 'file2' },
      { id: 3, name: 'file3' }
    ];
    callback([...files]);
  }, DELAY);
}

getGithubUser('arslonbekXX', displayUser);

function displayUser(user) {
  console.log('user = ', user);

  getUserRepos(user.id, displayRepos);
}

function displayRepos(repos) {
  console.log('repos = ', repos);

  getRepoBranches(repos[0].id, displayBranches);
}

function displayBranches(branches) {
  console.log('branches = ', branches);

  getRepoCommits(branches[0], displayCommits);
}

function displayCommits(commits) {
  console.log('commits = ', commits);

  getCommitFiles(commits[0].id, displayFiles);
}

function displayFiles(files) {
  console.log('files = ', files);
}

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
