---
date: 2021-08-25T07:38:31.762Z
title: CSS tricks for responsive website
description: Simple CSS tricks to turn any website responsive.
thumbnail: /images/uploads/css-laptop.jpeg
banner: /images/uploads/css-laptop.jpeg
tag: CSS
---
Now a days, there are countless of devices and all of them comes with different screen sizes. And to make a website or an app responsive to all sizes is actually a chore (imho). So this guide will introduce you to 3 simple tricks that will make your website or app seems responsive.

## 1. Scaling Font-sizes

```
html {
  font-size: calc(60% + 0.8vmin);
}
```

This short line of CSS code will make the font-size of the page scales with the size of the browser window. By doing so, smaller screen sizes will automatically have a smaller font-size, it will give you more space to work with. This also makes sure font-sizes don't become tiny on extra large window sizes. 

Below is an example of this CSS trick:

![without font scaling](/images/uploads/withoutfontscaling.gif "Without Font Scaling")

![with font scaling](/images/uploads/withfontscaling.gif "With Font Scaling")

As you can see, on smaller screen sizes the text also scales down, but stays at a readable size. The font-size gets calculated by combining 2 variables: 

* 60% and 0.8vmin. The first value is the base value, 60% of the font size set by the browser. In most browsers the default is 16px, because we don't set it to an absolute value like 10px, the font-size will still respect users that have changed the default font-size of their browser. 
* 0.8vmin is a relative value. 100vmin is the size of the smallest value of either the width or height of the window size. This value makes the text scale according to the size of the screen.

By setting the font-size on the HTML tag it sets every text element on the page to that font-size. However, elements like inputs don't use the HTML font-size, to by-pass this, we will set every element to 1rem like this:

```
* {
  font-size: 1rem;
}
```

![no input scaling](/images/uploads/noinputscaling.gif "No Input Scaling")

![with input scaling](/images/uploads/withinputscaling.gif "With Input Scaling")

## 2. Rems for everything!

If you are not familiar with rem, 1rem equals to the font-size of the HTML element.

The beauty of using rems for everything is that your site will automatically scale according to the font-size. This means that when users set a larger font-size everything will scale accordingly. 

Pair this with a scaling font-size and the site will automatically scale up or down for smaller and larger screen sizes respectively.

Compare the difference below:

![using fix px](/images/uploads/usingpx.gif "Using Fix Px")

![using rem](/images/uploads/usingrem.gif "Using Rem")

Notice how the images scales down because of the font-size scaling, while the fix px image causes an ugly overflow.

## 3. Max-width & auto margin

This trick works with the best when you use it on any page that requires a single column of content in the center. 

```
main {
  max-width: 40rem;
  margin: 0 auto;
}
```

Usually this code is placed in main, where all the main content is.

This will scale the main to a max-width of 40rem, meaning it will max out on 40rem but it will still automatically shrink to smaller sizes. You are free to change this value to suit your needs. The `margin: 0 auto` makes sure the content gets centred horizontally.

- - -

## Final Result (combining all 3 tricks)

Combining the above 3 tips will create a simple responsive website:

![final result](/images/uploads/finalresult.gif "Final Result")

The CSS will look something like:
```
html {
  font-size: calc(60% + 0.8vmin);
}
main {
  max-width: 40rem;
  margin: 0 auto;
}
* {
  font-size: 1rem;
}
```

If you want to reset headers, you could include:
```
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 1.6rem;
}

h3 {
  font-size: 1.3rem;
}
```

With these 3 tricks, I hope it comes in handy some day!
Thanks for reading.