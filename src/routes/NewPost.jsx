import styles from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {


    return (
        <Modal>
        <Form method='post' className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} name='body'></textarea>
            </p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id="name" required name='author'/>
            </p>
            <p className={styles.actions}>
            <Link to='/' type="button" style={{color: '#e5d5f7', textDecoration: 'none', paddingTop: '10px'}}>Cancel</Link>
            <button type="submit">Submit</button>
            </p>
        </Form>
        </Modal>
    )
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
            // mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return redirect('/');
}