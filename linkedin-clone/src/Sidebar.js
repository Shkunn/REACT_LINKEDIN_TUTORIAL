import "./Sidebar.css"
import { Avatar } from "@material-ui/core"
import BackgroundImage from './img/anime_landscape_bike.jpg'

function Sidebar() {
    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src={BackgroundImage}
                    alt=""
                />
                <Avatar className="sidebar__avatar" />
                <h2>Teddy Leclercq</h2>
                <h4>leclercqted@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed me</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,444</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('deeplearning')}
                {recentItem('softwareengineering')}
                {recentItem('desing')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar