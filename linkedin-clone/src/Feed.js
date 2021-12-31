import "./Feed.css"
import Post from "./Post"
import InputOptions from "./InputOption"
import { useState, useEffect } from "react"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import { db } from "./firebase"
import firebase from "firebase/compat/app"

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Teddy Leclercq',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timespamp: firebase.firestore.FieldValue.serverTimestamp
        })
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => {
                return <Post />
            })}
            <Post
                name='Teddy Leclercq'
                description='This is a description'
                message='What message do you want to post ?'
            />

        </div>
    )
}

export default Feed
