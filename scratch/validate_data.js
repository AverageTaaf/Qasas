/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/helpi/Downloads/Programming/P7 (Prophets)/src/data/prophets.json', 'utf8'));

data.forEach(p => {
    if (!p.id || !p.name_en || !p.slug || !p.story_sections || !p.lessons || !p.summary) {
        console.log(`Prophet ${p.name_en || p.id} is missing core fields`);
    }
    if (p.story_sections.length === 0) {
        console.log(`Prophet ${p.name_en} has no story sections`);
    }
    p.story_sections.forEach(s => {
        if (!s.heading || !s.paragraphs || s.paragraphs.length === 0) {
            console.log(`Prophet ${p.name_en} has an empty section: ${s.heading}`);
        }
    });
});
console.log("Validation complete");
