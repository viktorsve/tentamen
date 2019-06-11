# HomneNet

Homenet is the new site for selling your house, condo or other properties:
This API has been blatlantly stolen from our biggest competitor hemnet.

Each listing should contain he following information: coordinate with latitude and longitude, street name and number, location name (such as municipality (kommun) or city district (stadsdel)), type summary (as in condo (bostadsrätt) or villa), price, monthly fee and wether bidding is active or not.

We need to be able to provide a nice list of all properties, as well as showing, creating, updating and deleting individual listings.

Our customers know what they want, so being able to list all listings on matching location names, type summary, or say a max price. (Just one is enough, you don't need to support multiple parameters at once in this early version)

The API should provide valid json data, and the naming is up to you as long as the aforementioned information is provided. Basic data type validation should be performed for String, Number and possibly Boolean (true/false) values.

Your mission, should you choose to accept it, is to implement this API and prove that it works, either by providing tests or a swagger file for manual testing (not both).

## Instructions

Fork this repo (top right corner icon on github) to create a copy of this repo to your own gitub account, clone your repo, do your implementation and push to your github, and send me a link on slack to your repo on github or create a pull request when you're done.

## Running

```sh
npm install
npm start
```

## Developing

```sh
npm install
npm run dev
```

## Test

```sh
npm install
npm run test
```

## swagger

If provided, update the `swagger/swagger.yaml` file containing an openapi 3.0 or swagger 2.0 specification of the API.
