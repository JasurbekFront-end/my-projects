const DELAY = 500;

function delay(callback) {
  setTimeout(callback, DELAY);
}
function getGithubUser(username) {
  console.log(`Loading user(${username})...`);

  return new Promise((resolve, reject) => {
    delay(() => {
      const user = { id: 123, username };
      if (user) {
        resolve(user);
      } else {
        reject('User not found');
      }
    });
  });
}

function getUserRepos(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Loading repos owner ${userId} ...`);
    delay(() => {
      const repos = [
        { id: 1, name: 'repo1' },
        { id: 2, name: 'repo2' },
        { id: 3, name: 'repo3' }
      ];
      if (repos.length) {
        resolve(repos);
      } else {
        reject('Repos not found');
      }
    });
  });
}

function getRepoBranches(repoId) {
  console.log(`Loading branches of repo ${repoId}...`);

  return new Promise((resolve, reject) => {
    delay(() => {
      const branches = ['main', 'dev', 'test'];
      if (branches.length) {
        resolve(branches);
      } else {
        reject('Branches not found');
      }
    });
  });
}

function getRepoCommits(branchId) {
  return new Promise((resolve, reject) => {
    console.log(`Loading commits of branch ${branchId} ...`);
    delay(() => {
      const commits = [
        { id: 1, message: 'commit1' },
        { id: 2, message: 'commit2' },
        { id: 3, message: 'commit3' }
      ];
      if (commits.length) {
        resolve(commits);
      } else {
        reject('Commits not found');
      }
    });
  });
}

function getCommitFiles(commitId) {
  return new Promise((resolve, reject) => {
    console.log(`Loading files of commit ${commitId} ...`);
    delay(() => {
      const files = [
        { id: 1, name: 'file1' },
        { id: 2, name: 'file2' },
        { id: 3, name: 'file3' }
      ];
      if (files.length) {
        resolve(files);
      } else {
        reject('Files not found');
      }
    });
  });
}

function displayUser(user) {
  console.log('user = ', user);
}

function displayRepos(repos) {
  console.log('repos = ', repos);
}

function displayBranches(branches) {
  console.log('branches = ', branches);
}

function displayCommits(commits) {
  console.log('commits = ', commits);
}

function displayFiles(files) {
  console.log('files = ', files);
}

/* ASYNC AWAIT */
try {
  const user = await getGithubUser('arslonbekXX');
  displayUser(user);

  const repos = await getUserRepos(user.id);
  displayRepos(repos);

  const branches = await getRepoBranches(repos[0].id);
  displayBranches(branches);

  const commits = await getRepoCommits(branches[0]);
  displayCommits(commits);

  const files = await getCommitFiles(commits[0].id);
  displayFiles(files);
} catch (error) {
  console.error(error);
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
