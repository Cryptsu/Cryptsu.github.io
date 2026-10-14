# Hacks
Collection of HTML/CSS hacks I've used to make some features possible.

## `inset` trick
Trying to press a button while its parent's platformer shifts is annoying.
This CSS snippet added to the button allows it when pressed to create
an invisible halo with a fixed radius around it, which extends the clickable
area. The halo's radius size is specified by `inset`.

```CSS
&:active {
    // a hack used to make the button sticks
    &::after {
        content: "";        // must be set to an empty string
        position: absolute;
        inset: -12px;       // halo radius
    }
}
```
The root element must include `overflow: clip;` to avoid the size of the page getting stretched.
