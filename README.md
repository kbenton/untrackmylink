# untrackmylink

### What is this?

It's a simple utility to try and get the real link embedded in another link that's been URL encoded and 
festooned with a bunch of tracking variables. These are links that look like <mark>https://tracking.newslet.tr/url/https:%2F%2Fwww.example.com%2Fposts%2Fsome-cool-article%3trk_source=newslet417d2dd8-e2f7-47fa-b4da-ed8c54fba949/jKLHueeha37ahH35Khhwy6Lllq</mark>
 
After decoding and stripping, you'd get <mark>https://www.example.com/posts/some-cool-article</mark> which is presumably
the *actual* page you want to visit.

### How do I use it?
The simplest way is to download the untrackmylink.html file and put it somewhere handy on your computer (desktop, documents folder, etc.) then open it in your browser of choice using File>Open File... 

I like to keep it as a pinned tab for easy access all the time, but it's not necessary.

Then just copy that ugly URL from wherever you get them (most likely an email newsletter) and paste it into the input box. Click the button and you should see a followable link for the actual destination, followed by the full submitted tracking link, just for reference.

Of course, you're welcome to put the page on your actual web site somewhere as well, and hack on it to make it work for you. If you do, I'd love to hear about it, and feel free to submit a PR for improvements.

### What's in it?
Not much! This is a real quick and dirty attempt to solve this problem in about 10 lines of javascript. It only decodes the submitted 
text and looks for substrings that appear to be proper URLs. That's it for code.

The styles are a stripped down, customized <a href="https://simplecss.org">Simple.css</a>, a project I really like. It's minified, but comprehensible.

I'm sure this all can be improved a lot, and there's a few thoughts below. That said, the main goal is for it to be self-contained and so straightforward that
anyone with even a little JS can understand the source in just a few seconds.

### NB
Perhaps needless to say, but this won't work on tracking URLs that rely on a server redirect based on a unique id
e.g. those of the form <mark>https://tracking.newslet.tr/?trid=1971722365764871763</mark> The only way to get the actual destination of that
type of link is to actually follow it, which defeats the purpose of course.

### Todo?
- Let the page accept the input link as a parameter?
- Make it a bookmarklet?
- Make it a browser plugin? 
    - This was the initial plan... to allow me to right click a link and see the "untracked" version and then open it on click. The APIs for Firefox plugins fought me just enough that I decided to do this simple version in the meantime, and it's been working well enough that I haven't been motivated to go back. My initial foray is in the extensions/ffox path above. It works, but doesn't display the stripped url properly because the context menu update doesn't happen when I want it to. I'll probably poke at it again, but in the meantime, feel free to have a crack.
