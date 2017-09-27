# Marcro Market (using datawheel-canon)

## Development instructions

* Clone the project
```Bash
git clone https://github.com/Datawheel/macromarket.git --branch canon --single-branch [folder-name]
```

* Go to project's folder
```Bash
cd [folder-name]
```

* Install dependencies
```Bash
npm install
```

* Add the following env vars to your system
```Bash
export CANON_LOGINS=true
export CANON_DB_USER=****
export CANON_DB_NAME=****
export CANON_DB_PW=****
export CANON_DB_HOST=****
export CANON_LOGREDUX=false
export CANON_LOGLOCALE=false

export MM_SESSION_SECRET=****
export MM_PORT=3300

export GCLOUD_STORAGE_BUCKET=****
export GCLOUD_PROJECT_ID=****
export GCLOUD_KEY_FILE=****

export CA_CLIENT_TOKEN=****
```


* Run development server
```Bash
npm run dev
```

* Open browser
```Bash
http://localhost:3300
```

* Celebrate with frozen Reese's :-)
