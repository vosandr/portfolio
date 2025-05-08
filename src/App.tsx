import { Router, Route, Switch } from 'wouter-preact'
import Home from 'pages/home/Home'
import NotFound from 'pages/notFound/NotFound'
import Talking from 'pages/talking/Talking'
import Professional from 'pages/professional/Professional'
import { baseRoute } from 'consts/baseRoute'
export default function () {
    return (
        <div className="prose-h1:text-2xl prose-h2:text-xl prose-headings:p-2 prose-h3:text-lg">
            <Router base={baseRoute}>
            <Switch>
                <Route component={Home} />
                <Route path="talking/" component={Talking}/>
                <Route path="professional/" component={Professional}/>
                <Route component={NotFound} />
            </Switch>
            </Router>
        </div>
    )
}
