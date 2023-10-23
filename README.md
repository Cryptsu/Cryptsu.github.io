# Cryptsu's source code.
This is my source code for my CTF blogs :) I've always wanted to create a website that looks cool, while is still able to share thoughts and knowledges (which is not much and I hope I don't get too much style-over-substance, lol) 

## Node.js version
The Node version for this code is **v19.4.0**. Hope it would help anyone in the future trying to build this *(if there is even a reader in this hopeless blog)* :3

## Influences

### Code structure
The structure of the code is inspired from the work of [jarv.is](https://github.com/jakejarvis/jarv.is). I just found this guy online and have no idea who he is, but he seems to know his stuffs :3 

### Visualization
For visualization, I got my inspirations from these websites, which are from CTF bloggers. While most of them are just adapted from already existed Hugo templates, which I could just found online, some of them have very cool contents (some I just copy the styles, sorry :<)

- https://chovid99.github.io/: For the homepage's icon and text typing stuffs / page structure.
- https://mystiz.hk/: For inspiring me to use Mono-fonts / have cool table of content / table-style on my page. He also writes really cool Crypto posts.

## Compatibility with Vanilla Markdown
The markdowns on this page are compatible with normal markdown, with some exceptions of usages of `remark-directive`s *([https://github.com/remarkjs/remark-directive](Link))*:

### `::ytembed`

Embed `Youtube`'s video into the blog. **Usage**:

```markdown
::ytembed[Video's description]{#video-id}
```

### `:code`

Mark a markdown block formatted as inine code like `this`. **Usage**:

```markdown
:code[some-text-or-markdown bla bla bla]
```