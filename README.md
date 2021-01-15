# STADVDB_S11.5_T120-21
STADVDB Git Repository

## Build for local
### Step 0: Install Node.js and npm
### Step 1: Import financial database using FinancialDB.sql found in Team Notion to MySQL

### Step 2: Run MPPreProcess.sql as preprocessing for the database

### Step 3: Modify the mysql.js file to your connection's configuration with the financial database
```
exports.db = mysql.createConnection({
  host: "yourHostName",
  port: "yourPortNumber",
  user: "yourUsername",
  password: "yourPassword",
  database: "financial"
})
```

### Step 4: Install dependencies
```
npm install
```

### Step 5: Compiles and starts local instance
```
npm start
```

### Step 6: Access local instance on localhost:3000
