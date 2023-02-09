#  TextTrek

This is a standalone application you can run locally to query files such as .doc, .pdf, and .xls using the latest and greatest language models. We don't collect any data from you or your files, so the text you decide to trek is between you and your AI overlords.


## How it works

TextTrek uses local storage to prevent limits on size and pages of files. You can trek any file you want, directly to the limitation of the API you're using.

## Running Locally
After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Install dependencies
```
npm install
```

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```
npm run dev
```

