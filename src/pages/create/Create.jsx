import Youtube from '../youtube/Youtube';
import './create.css';

export default function Create() {
    return (
        <div className="create">
            <img className="createImg" src="post.jpg" alt="" />
            <form className="createForm">
                <div className="createFormGroup">
                <label htmlFor="fileInput">
                         <i className=" createIcon fas fa-plus"></i>
                    </label>
                    <input type="file"id="fileInput" style={{display:"none"}}/>
                    <input type='text' placeholder="Title" className="createInput" autoFocus={true}/>
                </div>
                <div className="createFormGroup">
                    <textarea placeholder="Write your content..." type="text" className="createInput createText"></textarea>
                </div>
                <button className="createSubmit">Publish</button>
            </form>
            <Youtube />
        </div>
    )
}
