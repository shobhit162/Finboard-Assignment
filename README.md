

## 🚜 Install <a name = "install"></a>

These instructions will get you set up with a copy of the React project code on your local machine. It will also get you logged in to `clasp`, which lets you manage script projects from the command line.


### Prerequisites <a name = "prerequisites"></a>

- Make sure you're running at least [Node.js](https://nodejs.org/en/download/) v18 and [yarn (classic)](https://classic.yarnpkg.com/lang/en/docs/install/).

- You'll need to enable the Google Apps Script API. You can do that by visiting [script.google.com/home/usersettings](https://script.google.com/home/usersettings).

- To use live reload while developing, you'll need to serve your files locally using HTTPS. See [local development](#local-development) below for instructions on setting up your local environment.

### 🏁 Getting started <a name = "getting-started"></a>

Full steps to getting your local environment set up, deploying your app, and also running your app locally for local development are shown in the video below:

https://github.com/enuchi/React-Google-Apps-Script/assets/31550519/83622b83-0d0e-43de-a589-36f96d51c9c4


**1.** First, let's clone the repo and install the dependencies. This project is published as a public template, so you can also fork the repo or select "Use this template" in GitHub.

```bash
git clone https://github.com/shobhit162/Finboard-Assignment.git
cd Finboard-Assignment
yarn install
```


**2.** Next, we'll need to log in to [clasp](https://github.com/google/clasp), which lets us manage our Google Apps Script projects locally.

```bash
yarn run login
```
**3.** Now let's run the setup script to create a New spreadsheet and script project from the command line.

```bash
yarn run setup
```

## 🎈 Local Development <a name="local-development"></a>

We can develop our client-side React apps locally, and see our changes directly inside our Google Spreadsheet dialog window.

There are two steps to getting started: installing a certificate (first time only), and running the start command.

1. Generating a certificate for local development <a name = "generatingcerts"></a>

   Install the mkcert package:

   ```bash
   # mac:
   brew install mkcert

   # windows:
   choco install mkcert
   ```

   [More install options here.](https://github.com/FiloSottile/mkcert#installation)

   Then run the mkcert install script:

   ```bash
   mkcert -install
   ```

   Create the certs in your repo:

   ```
   yarn run setup:https
   ```

2. Now you're ready to start:
   ```bash
   yarn run start
   ```

The start command will create and deploy a development build, and serve your local files.

After running the start command, navigate to your spreadsheet and open one of the menu items. It should now be serving your local files. When you make and save changes to your React app, your app will reload instantly within the Google Spreadsheet, and have access to any server-side functions!

https://github.com/enuchi/React-Google-Apps-Script/assets/31550519/981604ac-bdea-489d-97fa-72e6d24ba6dd

<br/>








