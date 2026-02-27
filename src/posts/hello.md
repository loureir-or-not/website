---
title: Hello, world!
description: An introductory post to this blog
date: 2026-02-26
published: true
---

Hello, welcome to my blog! I've stated before that I like writing so
here would be a good application of it. I'll try to write at least
qualtiy posts, but be warned that it'll be about whatever I chose to
write about, whenever I want to publish it, and I will depublish it if
I don't like it remaining up, although I will keep it stored on my
websites GitHub repository.

## Testing `features`...

```go
package main

import (
	"html/template"
	"os"
)

type Data struct {
	Greeting string
}

const TEMPLATE = `<h1>{{ .Greeting }}</h1>`

func main() {
	var err error
	data := Data{
		Greeting: "Hello, 'world'!",
	}
	t, err := template.New("greetings").Parse(TEMPLATE)
	if err != nil {
		panic(err)
	}
	if err = t.Execute(os.Stdout, data); err != nil {
		panic(err)
	}
}
```

| Item            | Price  |
| --------------- | ------ |
| Egg salad       | $2.99  |
| Chicken wrap    | $3.99  |
| French fries    | $1.99  |
| Head of cabbage | $99.99 |

In case you are curious why I used **$** instead of pounds, here's why:

![A US-layout QWERTY keyboard](/hello/images/uskeyboard.png)
