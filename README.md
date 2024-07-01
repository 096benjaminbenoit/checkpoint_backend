
# BACKEND CHECKPOINT

1. **Clone the project**
   ```
   git clone https://github.com/096benjaminbenoit/checkpoint_backend
   ```
2. **Install the project**
   ```
   npm install
   ```
3. **Create .env file based on .env.example**

4. **Run the project**
   ```
   npm start
   ```
**✨ ET VOILA ✨**
___

**Exemple de mutation pour créer un pays :**
```
mutation CreateCountry($data: CreateCountryInput!) {
  createCountry(data: $data) {
    name
    continent {
      name
    }
  }
}

{
  "data": {
    "name": "Suisse",
    "code": "CH",
    "emoji": "🇨🇭",
    "continent": {
      "id": 1
    }
  }
}
```

**Exemple de query pour rechercher tous les pays :** 

```
query GetCountries {
  getCountries {
    name
    code
    emoji
  }
}
```

**Exemple de query pour rechercher les pays par code continent :**

```
query Query($continentCode: String!) {
  getCountriesByContinent(continentCode: $continentCode) {
    name
  }
}

{
  "continentCode": "EU"
}
```

**Exemple de query pour rechercher un pays par son code :**

```
query GetCountryByCode($code: String!) {
  getCountryByCode(code: $code) {
    code
    name
    emoji
  }
}

{
  "code": "FR"
}
```