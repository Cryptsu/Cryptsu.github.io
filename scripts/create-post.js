const fs = require("fs");
const path = require("path");
const crypto = require('crypto');
hash = crypto.createHash('sha256');
const yargs = require("yargs/yargs");
const prompt = require("prompt-sync")({sigint: true});
const { 
  hideBin 
} = require("yargs/helpers");

// Parse arguments
const argv = yargs(
  hideBin(
    process.argv
  )
).argv;

// TODO: Remember to change here
//       if you change stuffs at /lib/config/app.config
// ----------------------- Configs -----------------------
const POSTS_DIR = "./posts";

// ------------------------ Parse ------------------------
let title = "A new post.";
let description = "";
let coverImage = "";
let date = new Date().toString();
let slug = "";
hash.update(date);
hash.update(crypto.randomBytes(16));
slug = hash.digest('hex').slice(8, 12);

if (argv.title)
  title = argv.title;
if (argv.description)
  description = argv.description;
if (argv.coverImage)
  coverImage = argv.coverImage;
if (argv.date)
  date = argv.date;
if (argv.slug)
  slug = argv.slug;

// ------------------------ Check ------------------------
let path_to_post = path.join(
                    POSTS_DIR, 
                    slug + '.mdx'
                   );

if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(
    POSTS_DIR, 
    { recursive: true }
  )
}

if (fs.existsSync(path_to_post)) {
  console.log(`[!] Error! Post at ${path_to_post} has been created! Exiting...`)
  process.exit(-1);
}

// ------------------------ Main ------------------------
let frontMatter = '';
frontMatter += '---\n';
frontMatter += `title: ${title}\n`;
frontMatter += `date: ${date}\n`;
if (description)
  frontMatter += `description: ${description}\n`;
if (coverImage)
  frontMatter += `coverImage: ${coverImage}\n`;
frontMatter += '---\n';

let file = fs.openSync(path_to_post, "w");
fs.writeFileSync(file, frontMatter);

console.log(`[i] Created a new post at ${path_to_post} with front-matter:`);
console.log(frontMatter);