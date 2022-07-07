import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPages from "./pages/mainPage/MainPages";
import UsersPage from "./pages/usersPage/UsersPage";
import CreateUser from "./pages/createUser/CreateUser";
import PostsPage from "./pages/postsPage/PostsPage";

function App() {
    return (
        <div className="container pt-5">
            <CreateUser/>
            ------------------------
            <PostsPage/>
            {/*<MainPages/>*/}
            {/*<UsersPage/>*/}
        </div>
    );
}

export default App;
