## Convert any .txt into audiobook

### Info
Work on node v16. OpenAI key required. Each time script encounter double line break new audio file will be created. 

### Setup
1. replace book.txt file with your book
2. install packages using `npm ci`
3. add your open AI KEY to `.env` file
4. if you want to translate the book on the fly add `LANGUAGE=polish` to `.env` file

### Start
After completing setup part run `node main.js`