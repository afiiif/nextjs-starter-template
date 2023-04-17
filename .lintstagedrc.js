module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) =>
    `next lint --fix --quiet --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
  '*.{js,jsx,ts,tsx,css,scss,json,html,md,mdx}': 'prettier --write',
  '*.{ts,tsx}': () => 'tsc --noEmit --skipLibCheck',
};
