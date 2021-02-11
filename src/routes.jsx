import { Switch, Route } from "react-router-dom";

import Music from "./pages/Music";
import SingleMusic from "./pages/SingleMusic";
import CreatePlayList from "./pages/CreatePalylist";
import FavouriteMusic from "./pages/FavouriteMusic";
import MyPlaylists from "./pages/MyPlaylists";
import Welcome from "./pages/Welcome";
import UserProfile from "./pages/UserProfile";
import PopularMusic from "./pages/PopularMusic";


const Routes = () => (
    <Switch>
        <Route exact path="/music" component={Music} />
        <Route exact path="/music/:id" component={SingleMusic} />
        <Route exact path="/create-playlist" component={CreatePlayList} />
        <Route exact path="/favourite-music" component={FavouriteMusic} />
        <Route exact path="/my-playlist" component={MyPlaylists} />
        <Route exact path="/popular-music" component={PopularMusic} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/welcome" component={Welcome} />
    </Switch>
)

export default Routes;