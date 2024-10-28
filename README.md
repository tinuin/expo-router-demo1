# expo-router-demo1
expo-router-demo1

# app.json
```
{
  "expo": {
    "web": {
      "output": "server",
      "bundler": "metro"
    }
  }
}

```

# Create a build
```
npx expo export -p web
```

# Serve locally

1. single
```
npx serve dist --single
```

2. static
```
npx serve dist
```