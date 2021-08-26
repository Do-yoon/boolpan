# Boolpan FE App
## Test
```bash
npm start
```
## Production
```bash
npm run build
```
## Structure
```jsx
<App>
    </* layout definition component */>
    <Main>
        </* basic layout */>
        <Layout>
            <Header/>
            <NavBar/>
            </* This area is defined by the URI of <router> tag */>
            { children }
            <Footer/>
        </Layout>
    </Main>
</App>
```