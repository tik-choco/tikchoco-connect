const { spawnSync } = require('child_process');

// Gatsby build command
const gatsbyBuild = spawnSync('npm', ['run', 'build'], { stdio: 'inherit' });

if (gatsbyBuild.status !== 0) {
  console.error('Gatsby build failed');
  process.exit(1);
}

// Push the built files to the specified branch
const pushToBranch = spawnSync('git', [
  'push',
  '--force',
  'https://${GITHUB_TOKEN}@github.com/${{ github.repository }}.git',
  'HEAD:${{ inputs.branch }}'
], { stdio: 'inherit' });

if (pushToBranch.status !== 0) {
  console.error('Failed to push to branch');
  process.exit(1);
}