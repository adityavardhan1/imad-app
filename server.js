var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article ={
     'article-one' : {
        title : 'Article one | Aditya Vardhan',
        heading: 'article one',
        date : 'august 6,2017',
        content : ` <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p>
                    <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p>
                    <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p> `
    },
     'article-two' : {
        title : 'Article two | Aditya Vardhan',
        heading: 'article two',
        date : 'august 6,2017',
        content : ` <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p>
                    <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p>
                    <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p> `
        },
    'article-three' : {
        title : 'Article three | Aditya Vardhan',
        heading: 'article three',
        date : 'august 6,2017',
        content : ` <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p>
                    <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p>
                    <p>
                       this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page.this is the content of my page. 
                    </p> `
    }
};
    
function createTemplate(data){
    var title = data.title;
    var heading =data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewpoint" content="width=deivce-width, initial-scale-1"/>
            
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
       
        <body>
            <div class="container">
                <div>
                    <a href="/">home</a>
                </div>
                <hr>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res) {
   var articleName = req.params.articleName;
    res.send(createTemplate(article[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
