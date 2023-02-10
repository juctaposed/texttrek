

<div align="center">
<img src="/public/favicon.svg" alt="logo" align="center" width="200" height="200"/>

# TextTrek

</div>

This is a document processing application users can run locally to query files such as .doc, .pdf, and .xls using the latest and greatest language models. Have your AI companion trek the deep waters of Character Count Mountain thousands of times faster than you ever could - then ask it a question afterward. We only use open source libraries and don't collect any data from users or their files, so from here on out the text you decide to trek is between you and your AI overlords.

Molded from [Hassan El Mghari's](https://github.com/Nutlope) boilerplate for OpenAI, the goal of this project is to build upon the capabilities of prompting in a transparent way. Even though ChatGPT isn't natively capable of reading data written on files other than plain text, conversion from popular file extensions can be included with prompting.

But to reiterate plainly, **data being sent to OpenAI is not confidential data. It is a continuously learning model that will incorporate your data into learning sets.**
## How it works

TextTrek uses local storage to prevent limits on size and pages of files. You can trek any file you want, directly to the limitation of the API you're using.

## Running Locally
After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file named `.env`. You can keep .env in the root directory. This file should contain the following:

```
OPENAI_API_KEY = YOUR_KEY_GOES_HERE
```

### Install Dependencies

Open your terminal, then install the project modules 

```
npm install
```

### Run the Application

 Enter the command below, and then you can access your local version at `http://localhost:3000`.

```
npm run dev
```

## To Use

1. Upload a file of one of the following supported extensions:

```
.pdf
.doc
.docx
.xls
.xlsx
.ppt
.txt
.log
```

2. Declare your query. Ask specific questions about data within the file. 
