function Post({username, dp, media, caption})
{
    const isVideo = (url) => {
        return /\.(mp4|webm|ogg)$/i.test(url);
      };

    return (
        <div className="post-box">
                <div className="navbar">
                    <img src={dp} alt="Instagram dp of ${username}" className='navbar-picture'/>
                    <caption className='navbar-caption' >{username}</caption>
                </div>

                {/* <img src={image} alt="Image of ${username}" className='post-image' /> */}

                {isVideo(media) ? (
                    <video controls className="post-image" autoPlay muted loop>
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    ) : (
                    <img src={media} alt={`Image of ${username}`} className="post-image" />
                )}

                <div className="text-area">                    
                    <caption className='post-caption'>
                        <strong className='post-caption-username'>{username}</strong>
                        <span className='post-caption-text'>
                            {caption}
                        </span>
                    </caption>
                </div>
            </div>
    )
}

export default Post;