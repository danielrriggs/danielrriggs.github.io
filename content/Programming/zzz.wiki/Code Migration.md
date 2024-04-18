https://www.youtube.com/watch?v=M5NwkRNrpK0
REEA repos can be co-located (as git submodules), but they may not be aligned (in terms of versions), etc.
Package Alignment exercise idea: https://youtu.be/M5NwkRNrpK0?t=318
	Hoist package.json to higher level; npm install at the higher level. .You can then align the dependencies over time.
	Then, create an apps folder. Move the projects into the app folder. `npm nx init`. 
Option 1: Simply use npm link; Nx will just run the commands and can provide computation caching (&& affected command capability)
Option 2 - preferred approach - consolodate everything into an nx monorepo. De-doup dependencies. So, now you have all packages at root level of nx repo.
	Then, you can use Nx tooling. So, for example, in the case of migrating an angular app, you can use the Nrwl angular generator to generate an Angular Lib.