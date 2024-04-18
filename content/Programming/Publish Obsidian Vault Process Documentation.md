[[Obsidian Export]] > [[Quartz]]

Concepts:
Obsidian Export lets us partially publish an Obsidian vault.
Quartz is used to publish an Obsidian vault.
Hugo is a static site generator.

If you have no private content to publish, you only need Quartz (you don't need Obsidian Export or Hugo).
	// Quartz uses Hugo Obsidian to create the content that it then passes to Hugo ... ??? Quartz sits on top of [[Hugo]]

How it Works
/hugo ./watch.sh watches your Obsidian Vault. When it sees a change, it compiles that content through Obsidian Export, then passes that content to Hugo Obsidian, which drops into the content folder within Quartz.

We'll have a Hugo server running which lets you preview your changes locally.



---
Resources:
[How to publish Obsidian notes with Quartz on GitHub Pages - Fork My Brain (nicolevanderhoeven.com)](https://notes.nicolevanderhoeven.com/How+to+publish+Obsidian+notes+with+Quartz+on+GitHub+Pages)

[Publish your Obsidian Vault Online for Free with Quartz (youtube.com)](https://www.youtube.com/watch?v=ITiiuBNVue0)

[Publishing your Obsidian Vault Online with Quartz (brandonkboswell.com)](https://brandonkboswell.com/blog/Publishing-your-Obsidian-Vault-Online-with-Quartz/)