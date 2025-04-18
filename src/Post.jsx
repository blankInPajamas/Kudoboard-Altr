function Post({username, dp, image, caption})
{
    return (
        <div className="post-box">
                <div className="navbar">
                    <img src={dp} alt="Instagram dp of ${username}" className='navbar-picture'/>
                    <caption className='navbar-caption' >{username}</caption>
                </div>

                <img src={image} alt="Image of ${username}" className='post-image' />
                <caption className='post-caption'>
                    <strong className='post-caption-username'>{username}</strong>
                    <span className='post-caption-text'>
                        {caption}
                    </span>
                </caption>
            </div>
    )
}

export default Post;