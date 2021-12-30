import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import InputOptions from "./InputOption"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E" />
                </div>
            </div>

            <Post
                name='Teddy Leclercq'
                description='This is a test'
                message='WOW this worked'
            />

        </div>
    )
}

export default Feed