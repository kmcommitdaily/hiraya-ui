module.exports = {
  '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${files.join(',')} --max-warnings=0`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
};
