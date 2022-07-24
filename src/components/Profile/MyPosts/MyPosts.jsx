import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.postsData.map(posts => <Post message={posts.message} key={posts.id} likesCount={posts.likes} />);

    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myposts}>
            <div className={s.i_post}>
                <h3>My post</h3>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Введите ваше пост' /></div>
                <div><button onClick={onAddPost}>Add post</button></div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;