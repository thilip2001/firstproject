import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './youtube.css'
import ReactPlayer from "react-player";

 export const Youtube = () => {
    const [youtubeVideo, setYoutubeVideo]=useState('');


    const [youtubeURL, setYoutubeURL] = useState('https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=2');
    const [youtubeError,setYoutubeError]=useState('');
    
    const handleYoutubeChange=(e)=>{
        setYoutubeVideo(e.target.value);
    }

    const handleYoutubeSubmit=(e)=>{
        e.preventDefault();
        const youtubeRegex=/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
        if(youtubeRegex.test(youtubeVideo)){
            setYoutubeURL(youtubeVideo);
            setYoutubeError('');

        }
        else{
            setYoutubeError('Invalid youtube URL')
        }
        setYoutubeURL(youtubeVideo);
    }
    return (
        <div className="wrapper">
            <form className="form-group form"
            onSubmit ={handleYoutubeSubmit}>
                <input type="text" className="form-control"
                placeholder="Enter youtube url" required
                onChange={handleYoutubeChange}
                />
                <button type="submit" className="btn btn-success btn-md">
                    UPLOAD
                </button>
            </form>
            {youtubeError&&<div className='error-msg'>{youtubeError}</div>}
            <div className="youtube-box">

            <ReactPlayer url={youtubeURL} 
            className="video" controls />
            </div>
        </div>
    );
}

export default Youtube;
