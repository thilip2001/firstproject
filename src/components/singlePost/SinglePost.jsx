import './singlepost.css';
import ReactPlayer from 'react-player';
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="post.jpg" 
                alt=""
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">Learn React JS Tutorials for beginners</h1>
            </div>
            <p className="singlePostContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus deleniti alias autem soluta velit eius doloremque praesentium, commodi iste dignissimos id unde modi? Corrupti sunt, saepe nemo ab dignissimos ipsum aspernatur unde harum itaque expedita eligendi sequi ipsam repellendus placeat pariatur amet. Officia, unde excepturi magni aperiam consectetur, delectus sed quisquam hic beatae enim deleniti consequuntur nihil qui sapiente blanditiis fugit id quasi cumque dolores debitis, in esse distinctio. Consequatur provident atque quod voluptatibus doloribus, animi dicta voluptas fugiat sed eligendi nihil ipsum architecto in numquam eaque sunt minus repellendus obcaecati culpa est saepe sapiente quidem ipsa. Repellendus sapiente ex delectus fugiat atque animi? Nemo optio non quam iusto. Laboriosam accusamus nihil consequatur aliquid perferendis, libero quam delectus, autem minima aperiam atque, assumenda corporis dignissimos. Nihil praesentium, fuga repellendus nisi repudiandae pariatur laboriosam doloremque quibusdam deserunt in. Cupiditate necessitatibus quae, corrupti neque adipisci error ut nobis laboriosam quidem, quos pariatur. Possimus unde similique fugit totam porro tempore cum ducimus nisi? Rem necessitatibus molestias distinctio quia ipsa, quo temporibus deleniti laboriosam, provident vel officia fuga quas. Consequatur voluptatum nam maiores, pariatur quibusdam qui delectus doloribus impedit, harum molestiae vel ea quis error voluptatibus in corporis asperiores. Alias sit asperiores voluptates dolorem.
            </p>
            <div className="youtube-box">
            <ReactPlayer url="https://www.youtube.com/watch?v=Ke90Tje7VS0&t=3738s" 
            className="video" controls />
            </div>
            
        </div>
    )
}
