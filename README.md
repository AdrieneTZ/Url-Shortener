## URL Shortener

### Demo
#### Before shortening
![restaurant-demo.JPG](https://drive.google.com/uc?id=11WFmbbc4NuAULiU8ZAKu2DDaxCsN1a4Z)

#### After shortening
![restaurant-demo.JPG](https://drive.google.com/uc?id=1z8R9SGbZSOqP7kU7j2JpTv46C5MzcFUO)

### Feature
- Input an url, this shortener will shorten the url
- Click "Copy" button to copy your short url
- Paste the short url on any browser and link to the original website

### Prerequisite
- Node.js v18.0.0

### Dependencies
- ( expamle : Dependencies@version )
- express v4.18.1
- express-handlebars v6.0.6
- mongoose v6.3.5
- body-parser v1.20.0
- dotenv v16.0.1

### How to start?
```bash
# Clone the project
git clone https://github.com/AdrieneTZ/Url-Shortener.git

# Go to the project
cd url-shortener

# Install all dependencies
npm install
```
```bash
# Add file .gitignore
touch .gitignore

# Put all below in .gitignore
# OS X
.DS_Store*
Icon?
._*

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# npm
node_modules
*.log
*.gz

.env
```
```bash
# Set environment variable
  # Add MONGODB_URI in .env
  MONGODB_URI=mongodb+srv://**ID**:**PASSWORD**@**CLUSTER**.dqlbc.mongodb.net/**DATABASE**?retryWrites=true&w=majority

  example : MONGODB_URI=mongodb+srv://dolphins:wantclean@pachficocean.dqlbc.mongodb.net/SanFrancisco?retryWrites=true&w=majority


# Start the server
npm run dev
```