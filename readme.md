# Electron Typescript Seed

### Steps (vscode)

- Clone the repo
- Run `npm install` in repo directory
- Install `Live Sass Compiler` in vscode
- Run `Watch SASS` extension
- Install `Live Server` in vscode
- Run `Live Server` extension
- Open repo directory in vscode
- Run in terminal `npm run watch`
- Run in another terminal `npm run start`

### Build
- Set `isDevelopment` to `false` in `/src/main.ts` - Line 4

- Download the latest build of electron & extract its contents somewhere

- Goto the extracted folder `{electron_extracted_folder}/resources`, delete the `default` file __(not `electron.asar`)__ & create a new folder named `app`

- Now open project in vscode and then to build the app run `npm run build`

- This will generate all files in `dist` and `view` folders. 

- Copy the __contents__ of `dist` folder  and the `view` folder __(entire `view` folder, not its contents)__ to electron's `app` folder.

- Then from that copied view folder, delete folders `scss` & `ts`, and the file `tsconfig.json`.

- Build complete, to run the app goto `{electron_extracted_folder}` and run `electron.exe` __(or whichever file your OS executes)__
