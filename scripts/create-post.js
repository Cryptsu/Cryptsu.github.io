const fs = require("fs");
const path = require("path");
const crypto = require('crypto');
const yargs = require("yargs");
const { 
  hideBin 
} = require("yargs/helpers");

// ==================== Parse arguments ====================
const argv = yargs(
  hideBin(
    process.argv
  )
)
  .option('t')
  .alias('t', 'title')
  .nargs('t', 1)
  .describe('t', 'Title of the post.')
  .default('t', 'Untitled')

  .option('d')
  .alias('d', 'description')
  .nargs('d', 1)
  .describe('d', 'Description of the post.')
  .default('d', '')

  .option('i')
  .alias('i', 'coverImage')
  .nargs('i', 1)
  .describe('i', 'Link to the image cover.')
  .default('i', '')

  .option('D')
  .alias('D', 'date')
  .nargs('D', 1)
  .describe('D', 'Date of post.')
  .default('D', new Date().toString())

  .option('s')
  .alias('s', 'slug')
  .nargs('s', 1)
  .describe('s', 'Path to post.')
  .default('s', crypto.randomBytes(4).toString('hex'))

.argv;

// TODO: Remember to change here
//       if you change stuffs at 
//          /lib/config/app.config
// ----------------------- Configs -----------------------
const POSTS_DIR      = "./posts";
const ATTACHPOST_DIR = "./public/attachments/posts";

// ------------------------ Parse ------------------------
title = argv.title;
description = argv.description;
coverImage = argv.coverImage;
date = argv.date;
slug = argv.slug;

// ------------------------ Check ------------------------
let path_to_post = path.join(
                    POSTS_DIR, 
                    slug + '.mdx'
                   );

let path_to_attach_post = path.join(
                    ATTACHPOST_DIR,
                    slug
                   );

if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(
    POSTS_DIR, 
    { recursive: true }
  )
}

if (!fs.existsSync(ATTACHPOST_DIR)) {
  fs.mkdirSync(
    ATTACHPOST_DIR,
    { recursive: true }
  )
}

if (fs.existsSync(path_to_post)) {
  console.log(`[!] Error! Post at ${path_to_post} has been created! Exiting...`)
  process.exit(-1);
}

if (fs.existsSync(path_to_attach_post)) {
  console.log(`[!] Error! Attachment folder for post at ${path_to_attach_post} has been created! Exiting...`)
  process.exit(-1);
}

// ------------------------ Main ------------------------

// Create the image folder to put files in...
fs.mkdirSync(
  path_to_attach_post,
  { recursive: true }
)
console.log(`[i] Created a new attachment folder at ${path_to_attach_post}!`);

// Create the .mdx file to post...
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