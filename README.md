# Web list
Simple way to have a list of items, including nested items, on a webpage.
The list is loaded dynamically from a json file when opening the web page.

# How to
Just create a file named `list.json` with the following structure

```json
{
    "title": "List",
    "items": [
        {
            "value": "First"
        },
        {
            "value": "Second"
        },
        {
            "value": "Third"
        },
        {
            "value": [
                {
                    "value": "Nested first"
                },
                {
                    "value": "Nested second"
                }
            ]
        },
        {
            "value": "Fourth"
        }
    ]
}
```

After that add all the files to a web server like nginx. The easiest way to try it is with docker. From this folder execute

```$ docker run --name web-list -v .:/usr/share/nginx/html:ro -p 8080:80 -d nginx```

Now you should be able to view your list if you go to [http://127.0.0.1:8080](http://127.0.0.1:8080).
