#  TextTrek

This is a standalone application you can run locally to parse files such as .doc, .pdf, and .xls using language models. We don't collect any data from you or your files, so the text you trek is between you and your AI overlords.


## How it works

TextTrek uses local storage to prevent limits on size and pages of files. You can trek any file you want, directly to the limitation of the API you're using.

## Running Locally
After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```
npm run dev
```

## One-Click Deploy

