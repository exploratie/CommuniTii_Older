# CommuniTii

## Setup

* Clone project:
  `git clone https://github.com/CommuniTii/CommuniTii.git`
* Make sure to have `yarn` and `lerna` installed globally with Node 8.11.2 LTS
* Setup mongo for mongo

```bash
sudo mkdir /data/db
sudo chown -R $USER /data/db
```

* Run `yarn i` in the project root
* Paitently wait as all the dependencies are installed
* Create `.env` and `.env.development` files in the project root and setup the appropriate environmental variables

```
# @communitii/monolith
# .env file
RAZZLE_MONGO_DEV_PORT=4000
```

* Start projects

```bash
# For Monoloth
yarn start
```
