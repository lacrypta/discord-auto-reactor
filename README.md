# Discord Auto-Reactor Bot

> Very lightweight Discord bot that automatically reacts to messages.
> Written in TypeScript, based on [discord.js](https://discord.js.org).

---

1. [Setup](#setup)
    1. [Development Environment Setup](#development-environment-setup)
        1. [NVM](#nvm)
        2. [PNPM](#pnpm)
    2. [Discord Integration](#discord-integration)
        1. [The Discord Bot Token](#the-discord-bot-token)
        2. [The Discord Guild ID](#the-discord-guild-id)
        3. [Inviting the Bot to Discord](#inviting-the-bot-to-discord)
    3. [`.env` Setup](#env-setup)

---

## Setup

Setting up this project entails two main parts:

1. setting up your development environment (we'll show detailed steps for VSCode under Linux, but you can pretty much use whatever works for you), and
2. setting up the integration with Discord.

We'll tackle each in turn and guide you through the whole ordeal.

### Development Environment Setup

#### NVM

First, we'll install `nvm`, Node Version Manager.

Run the following script or check the complete instructions [here](https://github.com/nvm-sh/nvm#install--update-script).

##### Install

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

##### Setup

Install Node version:

```sh
nvm install 18.15
```

Use the version required in the project:

```sh
nvm use
```

#### PNPM

Install PNPM:

```sh
npm install -g pnpm
```

### Discord Integration

Integrating with Discord will entail generating / finding two specific values:

1. the Discord Bot Token, and
2. the Discord Guild ID.

We'll treat each in turn.

#### The Discord Bot Token

The first thing you need to do is create a new application on the [Discord Developer Portal](https://discord.com/developers):

![New Discord Application](./assets/new-discord-application.png 'New Discord Application')

Give your new application a flashy new name:

![Create Discord Application](./assets/create-discord-applicatoin.png 'Create Discord Application')

<!-- markdownlint-disable-next-line MD033 -->

<a id="copy-application-id"></a>Be sure to copy the application ID, we'll need it later:

![Copy Discord Application ID](./assets/copy-discord-application-id.png 'Copy Discord Application ID')

Now let's add a bot to your newly-created application:

![New Application Bot](./assets/new-application-bot.png 'New Application Bot')

And confirm our choice:

![Confirm Bot Creation](./assets/confirm-bot-creation.png 'Confirm Bot Creation')

Give your new boy a flashy new name:

![Name Discord Bot](./assets/name-discord-bot.png 'Name Discord Bot')

Finally, let's give the bot the **Message Content Intent** Privileged Gateway Intent:

![Configure Discord Bot](./assets/configure-discord-bot.png 'Configure Discord Bot')

Although not technically required, you may verify that the permission bitmap value we'll use further down (ie. `68672`) does not contain any spurious permissions by checking the Bot Permissions Calculator:

![Discord Bot Permissions](./assets/discord-bot-permissions.png 'Discord Bot Permissions')

After all this fooling around, let's wrap up the bot integration by resetting the bot token:

![Reset Discord Bot Token](./assets/reset-discord-bot-token.png 'Reset Discord Bot Token')

Don't mind the FUD:

![Confirm Reset Token](./assets/confirm-reset-token.png 'Confirm Reset Token')

<!-- markdownlint-disable-next-line MD033 -->

<a id="discord-bot-token"></a>And copy the value revealed:

![Copy Discord Bot Token](./assets/copy-discord-bot-token.png 'Copy Discord Bot Token')

Now, it's **very** important that you paste this value in a safe place, at least until we finish the integration and configuration steps, since we'll need it [further down](#env-setup).

#### The Discord Guild ID

If you've managed this far, this is going to be a breeze.
Simply go to the Discord application, look for the server you want the bot to appear, right-click on it, and select "Copy ID":

![Copy Discord Guild ID](./assets/copy-discord-guild-id.png 'Copy Discord Guild ID')

Paste this value somewhere safe, we'll need it [further down](#env-setup).

#### Inviting the Bot to Discord

In order to invite the bot you just created, you'll need to build an _invite URL_... don't worry, it's **really** easy.
Just copy this URL replacing `YOUR_DISCORD_APPLICATION_ID` with [the value we saved before](#copy-application-id):

```text
https://discord.com/oauth2/authorize?client_id=YOUR_DISCORD_APPLICATION_ID&scope=bot&permissions=68672
```

Navigating to it will greet you with:

![Invite Bot to Discord](./assets/invite-bot-to-discord.png 'Invite Bot to Discord')

Finally, confirm the permissions set above:

![Authorize Bot](./assets/authorize-bot.png 'Authorize Bot')

And... you're done!
**Congratulations!**

### `.env` Setup

Every _runtime_ datum in the project will be directed by the `.env` file.
You don't have an `.env` file yet, let's fix that.

Copy [`.env.example`](./.env.example) to `.env`:

```sh
cp .env.example .env
```

This will leave you with an `.env` file like:

```sh
# shellcheck disable=SC2148,SC2034

# Discord
DISCORD_BOT_TOKEN="YOUR_DISCORD_BOT_TOKEN"
DISCORD_GUILD_ID="YOUR_DISCORD_GUILD_ID"
```

Now is the time for our hard work to bear fruit.
You need to change the placeholder values (ie. `YOUR_...` strings) to the values we extracted before:

1. replace `YOUR_DISCORD_BOT_TOKEN` with the value we copied [here](#discord-bot-token),
2. replace `YOUR_DISCORD_GUILD_ID` with the value we copied [here](#the-discord-guild-id),

## Running the Bot

To run the bot in development mode type `pnpm dev`.
This should only be used during the development process, use the production mode for deployments.

To run the bot in production mode type `pnpm prod`, this will compile the typescript code and execute the generated javascript code with Node.js.
